"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getAge, getWorkStudyDuration } from "@/lib/dates";
import { useToday } from "@/lib/useToday";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

/** Position in the entrance sequence. */
const step = (d: number) => ({ "--d": d }) as CSSProperties;

export default function Hero() {
  const { language, t } = useLanguage();
  const today = useToday();

  const stats = [
    { value: "2 h → 1 min", label: t("hero.stat.setup"), accent: true },
    { value: t("hero.stat.platformsValue"), label: t("hero.stat.platforms") },
    { value: "2", label: t("hero.stat.degrees") },
    { value: getWorkStudyDuration(language, today), label: t("hero.stat.tenure") },
  ];

  return (
    <section id="top" className="relative overflow-clip pt-14">
      <div className="canvas-dots fade-edges pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid pt-7 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-x-14 lg:pt-11 xl:grid-cols-[minmax(0,1fr)_21rem]">
          {/* Status line */}
          <div className="rise type-label flex items-center justify-between gap-4 text-muted lg:col-span-2" style={step(0)}>
            <span className="flex items-center gap-2.5 text-foreground">
              <span className="status-running h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden="true" />
              {t("hero.status")}
            </span>
            <span className="hidden sm:inline">{t("hero.caption")}</span>
          </div>

          {/* Name: sized to its column, two lines */}
          <div className="@container mt-7 lg:mt-9">
            <h1 className="rise type-display text-[min(34cqw,12rem)] lg:text-[23.5cqw]" style={step(1)}>
              <span className="block">Killian</span>
              <span className="block whitespace-nowrap">
                Ramus
                <span className="cursor-block ml-[0.06em] inline-block h-[0.71em] w-[0.13em] bg-accent" aria-hidden="true" />
              </span>
            </h1>
          </div>

          {/* Portrait */}
          <figure className="mt-9 flex items-end gap-5 lg:mt-9 lg:block">
            <div className="ticks w-[50%] max-w-[15rem] shrink-0 lg:w-full lg:max-w-none">
              <div className="relative aspect-square overflow-hidden border border-line-strong bg-surface">
                <Image
                  src="/images/photo.webp"
                  alt={t("hero.photoAlt")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 336px"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="type-label flex flex-col gap-1 pb-1 text-muted lg:mt-6 lg:flex-row lg:justify-between lg:pb-0">
              <span className="text-foreground">Killian Ramus</span>
              <span>
                {getAge(today)} {t("hero.age")}
              </span>
              <span className="lg:hidden">{t("hero.caption")}</span>
            </figcaption>
          </figure>

          <div className="mt-9 h-px bg-line lg:col-span-2 lg:mt-10" aria-hidden="true" />

          {/* Pitch */}
          <div className="rise pt-7 lg:pt-9" style={step(2)}>
            <p className="type-label text-accent-ink">{t("hero.role")}</p>
            <p className="type-headline mt-4 max-w-3xl text-balance text-[1.8rem] sm:text-4xl lg:text-[2.7rem]">
              {t("hero.headline")}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{t("hero.pitch")}</p>
          </div>

          {/* Actions */}
          <div className="rise flex flex-col gap-3 pt-8 lg:pt-9" style={step(3)}>
            <a href="#projects" className="btn btn-primary group">
              {t("hero.ctaProjects")}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={t("cv.href")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              CV.pdf
              <DownloadIcon />
            </a>
            <div className="mt-1 flex items-center gap-5 text-muted">
              <a
                href="https://github.com/killianrms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 transition-colors hover:text-foreground"
              >
                <GitHubIcon />
                <span className="type-label">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/killianrms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 transition-colors hover:text-foreground"
              >
                <LinkedInIcon />
                <span className="type-label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key figures */}
        <dl className="rise mt-10 grid grid-cols-2 border-t border-line lg:mt-14 lg:grid-cols-4" style={step(4)}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse justify-end gap-3 border-b border-line py-5 odd:pr-4 even:border-l even:pl-4 lg:border-b-0 lg:border-l lg:px-6 lg:py-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="type-label max-w-[15rem] text-muted">{s.label}</dt>
              <dd className={`type-display whitespace-nowrap text-[2.1rem] sm:text-5xl lg:text-[3.4rem] ${s.accent ? "text-accent-ink" : ""}`}>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
