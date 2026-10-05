"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getAge } from "@/lib/dates";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-14">
      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-12 pt-6 sm:px-6 md:min-h-[calc(100svh-3.5rem)] md:px-10 md:pb-14">
        {/* Status line */}
        <div className="type-label flex items-center justify-between gap-4 text-muted">
          <span className="flex items-center gap-2.5 text-foreground">
            <span className="status-running h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
            {t("hero.status")}
          </span>
          <span className="hidden sm:inline">{t("hero.caption")}</span>
        </div>

        {/* Name: sized to the container width (two lines on mobile, one from md) */}
        <div className="@container mt-6 md:mt-8">
          <h1 className="type-display text-[28vw] supports-[font-size:1cqw]:text-[34.4cqw] md:text-[14.5vw] md:supports-[font-size:1cqw]:text-[17.5cqw]">
            <span className="block md:inline">Killian</span>{" "}
            <span className="block md:inline">Ramus</span>
          </h1>
        </div>

        <div className="mt-8 grid flex-1 grid-cols-12 gap-x-4 gap-y-8 border-t-2 border-accent pt-6 md:mt-10 md:gap-x-8 md:pt-8">
          {/* Photo */}
          <figure className="col-span-12 flex gap-4 sm:col-span-5 md:col-span-4 lg:col-span-3 lg:block">
            <div className="relative aspect-square w-[58%] shrink-0 bg-surface shadow-[8px_8px_0_var(--accent)] sm:w-[70%] lg:w-full">
              <Image
                src="/images/photo.webp"
                alt="Portrait de Killian RAMUS"
                fill
                priority
                sizes="(max-width: 640px) 58vw, (max-width: 1024px) 30vw, 280px"
                className="object-cover"
              />
            </div>
            <figcaption className="type-label flex flex-col justify-end gap-1 text-muted lg:mt-6 lg:flex-row lg:justify-between">
              <span className="text-foreground">Killian Ramus</span>
              <span suppressHydrationWarning>
                {getAge()} {t("hero.age")}
              </span>
              <span className="lg:hidden">{t("hero.caption")}</span>
            </figcaption>
          </figure>

          {/* Pitch */}
          <div className="col-span-12 flex flex-col sm:col-span-7 md:col-span-8 lg:col-span-6">
            <p className="type-label text-accent-ink">{t("hero.role")}</p>
            <p className="type-wide mt-4 text-balance text-[1.9rem] leading-[1.05] sm:text-4xl lg:text-[2.75rem]">
              {t("hero.headline")}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {t("hero.pitch")}
            </p>
          </div>

          {/* Actions */}
          <div className="col-span-12 flex flex-col justify-end gap-3 lg:col-span-3">
            <a
              href="#projects"
              className="type-label group flex h-12 items-center justify-between bg-accent px-4 text-on-accent transition-transform hover:-translate-y-0.5"
            >
              {t("hero.ctaProjects")}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={t("cv.href")}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label group flex h-12 items-center justify-between border border-foreground px-4 transition-colors hover:bg-foreground hover:text-background"
            >
              CV.pdf
              <DownloadIcon />
            </a>
            <div className="mt-2 flex items-center gap-5 text-muted">
              <a href="https://github.com/killianrms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 hover:text-foreground transition-colors" aria-label="GitHub">
                <GitHubIcon />
                <span className="type-label">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/killianrms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 hover:text-foreground transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
                <span className="type-label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
