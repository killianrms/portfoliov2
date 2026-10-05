"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ArrowIcon, MoonIcon, SunIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage, path } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: path("/#about"), label: t("nav.about") },
    { href: path("/#journey"), label: t("nav.journey") },
    { href: path("/#projects"), label: t("nav.projects") },
    { href: path("/#skills"), label: t("nav.skills") },
    { href: path("/#contact"), label: t("nav.contact") },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const langSwitch = (
    <button
      onClick={toggleLanguage}
      className="type-label flex items-center gap-1 px-1 py-2 text-muted hover:text-foreground transition-colors"
      aria-label={t("nav.language")}
    >
      <span className={language === "fr" ? "text-foreground" : undefined}>FR</span>
      <span aria-hidden="true">/</span>
      <span className={language === "en" ? "text-foreground" : undefined}>EN</span>
    </button>
  );

  const themeSwitch = (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center text-muted hover:text-foreground transition-colors"
      aria-label={t("nav.theme")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <nav data-open={isOpen} className="group/nav fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 border-b border-line bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">
          <Link href={path("/")} onClick={close} className="flex items-center gap-3" aria-label="Killian RAMUS">
            <span className="type-display grid h-8 w-8 place-items-center bg-accent pt-0.5 text-[1.35rem] text-on-accent">
              KR
            </span>
            <span className="type-label hidden text-foreground sm:inline">Killian Ramus</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-label text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            {langSwitch}
            {themeSwitch}
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
        <ul className="flex-1 overflow-y-auto px-4 pt-6 sm:px-6">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link
                href={link.href}
                onClick={close}
                className="group flex items-center justify-between py-4"
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="type-display text-[3.4rem]">{link.label}</span>
                <ArrowIcon size={28} className="text-muted transition-colors group-active:text-accent-ink" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-line px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
          {langSwitch}
          <a href={t("cv.href")} target="_blank" rel="noopener noreferrer" className="type-label text-foreground underline decoration-accent decoration-2 underline-offset-4">
            CV.pdf
          </a>
          {themeSwitch}
        </div>
      </div>
    </nav>
  );
}
