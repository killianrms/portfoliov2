"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ArrowIcon, DownloadIcon, MoonIcon, SunIcon } from "./Icons";

const SECTIONS = ["about", "journey", "projects", "skills", "contact"] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [inView, setInView] = useState<string | null>(null);
  const pathname = usePathname();
  const { t, language, toggleLanguage, path } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const onHome = pathname === "/" || pathname === "/fr" || pathname === "/en";
  // On the home page the link of the section being read is marked;
  // a project page counts as "Projects".
  const current = onHome ? inView : pathname.includes("/projects/") ? "projects" : null;

  const links = SECTIONS.map((id) => ({
    id,
    href: path(`/#${id}`),
    label: t(`nav.${id}`),
  }));

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setInView(entry.target.id);
      },
      // A thin band a little above the middle of the screen
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Mobile menu: lock the page behind it, close on Escape and when the
  // window grows to the desktop layout (the menu no longer exists there).
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const langSwitch = (
    <button
      onClick={() => {
        close();
        toggleLanguage();
      }}
      className="type-label flex h-9 items-center border border-line-strong p-0.5 transition-colors hover:border-foreground"
      aria-label={t("nav.language")}
    >
      {(["en", "fr"] as const).map((code) => (
        <span
          key={code}
          className={`grid h-full place-items-center px-2.5 ${language === code ? "bg-foreground text-background" : "text-muted"}`}
        >
          {code}
        </span>
      ))}
    </button>
  );

  const themeSwitch = (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center border border-line-strong text-muted transition-colors hover:border-foreground hover:text-foreground"
      aria-label={theme === "dark" ? t("nav.theme.toLight") : t("nav.theme.toDark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <nav data-open={isOpen} className="group/nav fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 border-b border-line bg-background/85 backdrop-blur-md group-data-[open=true]/nav:bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">
          <Link href={path("/")} onClick={close} className="flex items-center gap-3" aria-label="Killian RAMUS">
            <span className="type-display grid h-8 w-8 place-items-center bg-accent pt-0.5 text-[1.35rem] text-on-accent">
              KR
            </span>
            <span className="type-label hidden text-foreground sm:inline">Killian Ramus</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            {links.map((link) => {
              const active = current === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  className={`type-label relative py-2 transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted"}`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-[9px] h-0.5 origin-left bg-accent-ink transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <span className="h-4 w-px bg-line-strong" aria-hidden="true" />
            <div className="flex items-center gap-2">
              {langSwitch}
              {themeSwitch}
            </div>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="type-label -mr-2 flex h-11 items-center gap-2 px-2 text-foreground md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="grid w-4 gap-[5px]" aria-hidden="true">
              <span className="h-[2px] bg-foreground transition-transform duration-200 group-data-[open=true]/nav:translate-y-[3.5px] group-data-[open=true]/nav:rotate-45" />
              <span className="h-[2px] bg-foreground transition-transform duration-200 group-data-[open=true]/nav:-translate-y-[3.5px] group-data-[open=true]/nav:-rotate-45" />
            </span>
            <span className="group-data-[open=true]/nav:hidden">{t("nav.menu")}</span>
            <span className="hidden group-data-[open=true]/nav:inline">{t("nav.close")}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="invisible fixed inset-0 top-14 flex flex-col bg-background opacity-0 transition-[opacity,visibility] duration-200 group-data-[open=true]/nav:visible group-data-[open=true]/nav:opacity-100 md:hidden"
      >
        <ul className="canvas-dots flex-1 overflow-y-auto px-4 pt-4 sm:px-6">
          {links.map((link) => (
            <li key={link.id} className="border-b border-line">
              <Link href={link.href} onClick={close} className="group flex items-center justify-between py-4">
                <span className="type-display text-[3.2rem]">{link.label}</span>
                <ArrowIcon size={26} className="text-muted transition-colors group-active:text-accent-ink" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
          {langSwitch}
          <a href={t("cv.href")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-9 flex-1 justify-center gap-3">
            CV.pdf
            <DownloadIcon size={14} />
          </a>
          {themeSwitch}
        </div>
      </div>
    </nav>
  );
}
