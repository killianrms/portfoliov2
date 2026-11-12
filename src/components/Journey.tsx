"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { education, experiences, type EducationStage } from "@/data/journey";
import { frSpaces, localize } from "@/lib/typo";
import SectionHeader from "./SectionHeader";
import { ArrowIcon, CheckIcon } from "./Icons";

function StageTile({ status }: { status: EducationStage["status"] }) {
  if (status === "running") {
    return (
      <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center border border-signal bg-surface-2">
        <span className="status-running h-2.5 w-2.5 rounded-full bg-signal" />
      </span>
    );
  }
  return (
    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center border border-accent-ink bg-[var(--accent-soft)] text-accent-ink">
      <CheckIcon size={14} />
    </span>
  );
}

export default function Journey() {
  const { language, t, path } = useLanguage();
  const first = Math.min(...education.map((s) => s.start));
  const last = Math.max(...education.map((s) => s.end));

  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("journey.title")} meta={`${first} → ${last}`} />

        {/* Education as a pipeline: each degree is a stage */}
        <div className="reveal card">
          <div className="type-label flex items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-7">
            <span>
              <span className="text-muted">killian / </span>
              {t("journey.education")}
            </span>
            <span className="flex items-center gap-2.5">
              <span className="status-running h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
              {t("journey.running")}
            </span>
          </div>

          <ol className="canvas-dots px-4 py-8 md:grid md:grid-cols-3 md:px-7 md:py-10">
            {education.map((stage, i) => (
              <li key={stage.title.en} className="relative flex gap-4 pb-7 last:pb-0 md:block md:pb-0 md:pr-8">
                {/* Wire to the next stage */}
                {i < education.length - 1 && (
                  <span
                    className="absolute bottom-0 left-[calc(1.25rem-0.5px)] top-10 w-px bg-accent-ink md:bottom-auto md:left-10 md:right-0 md:top-[calc(1.25rem-0.5px)] md:h-px md:w-auto"
                    aria-hidden="true"
                  />
                )}
                <StageTile status={stage.status} />
                <div className="min-w-0 md:mt-6">
                  <p className="type-label text-muted">
                    {stage.start} → {stage.end} · <span className="text-foreground">{stage.level}</span>
                  </p>
                  <h3 className="mt-2.5 text-xl font-bold leading-tight tracking-tight md:text-[1.4rem]">{stage.title[language]}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{stage.school}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{localize(stage.detail, language)}</p>
                  {stage.status === "running" ? (
                    <div className="mt-4 max-w-[14rem]">
                      <p className="type-label text-signal-ink">{t("journey.running")}</p>
                      <div className="mt-2 h-1 overflow-hidden bg-line-strong" aria-hidden="true">
                        <div className="progress-sweep h-full w-2/5 bg-signal" />
                      </div>
                    </div>
                  ) : (
                    <p className="type-label mt-4 text-accent-ink">{t("journey.passed")}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Experience */}
        <h3 className="type-label mt-16 flex items-center gap-3 text-muted md:mt-24">
          <span className="h-2 w-2 bg-accent" aria-hidden="true" />
          {t("journey.experience")}
          <span className="h-px flex-1 bg-line" />
        </h3>

        <ol className="mt-6 space-y-4 md:space-y-5">
          {experiences.map((exp) => (
            <li
              key={exp.org}
              className={`reveal card grid gap-6 p-5 md:grid-cols-12 md:gap-8 md:p-9 ${exp.current ? "border-line-strong" : ""}`}
            >
              {exp.current && <span className="absolute inset-y-0 left-0 w-[3px] bg-accent" aria-hidden="true" />}

              <div className="md:col-span-4">
                <p className="type-label text-muted">{exp.period[language]}</p>
                <h4 className={`type-display mt-3 ${exp.org.length > 12 ? "text-[2.1rem] md:text-[2.6rem]" : "text-[2.7rem] md:text-[3.4rem]"}`}>{exp.org}</h4>
                <p className="type-label mt-3 text-muted">{exp.place}</p>
                {exp.current && (
                  <p className="type-label mt-4 inline-flex items-center gap-2.5 border border-line-strong px-2.5 py-1.5 text-foreground">
                    <span className="status-running h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                    {t("journey.running")}
                  </p>
                )}
              </div>

              <div className="md:col-span-8">
                <p className="font-semibold text-accent-ink md:text-lg">{exp.role[language]}</p>
                <p className="mt-3 max-w-3xl leading-relaxed text-foreground/85">{localize(exp.summary, language)}</p>

                {exp.highlights && (
                  <ul className="mt-6 max-w-3xl space-y-3 border-t border-line pt-6">
                    {exp.highlights[language].map((h) => (
                      <li key={h} className="grid grid-cols-[1.5rem_1fr] text-[0.95rem] leading-relaxed text-muted">
                        <span className="font-mono text-accent-ink" aria-hidden="true">
                          →
                        </span>
                        <span>{language === "fr" ? frSpaces(h) : h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ul className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <li key={tag} className="type-label border border-line bg-surface-2 px-2 py-1 text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {exp.href && (
                    <Link
                      href={path(exp.href)}
                      className="type-label group inline-flex items-center gap-2 text-foreground underline decoration-accent-ink decoration-2 underline-offset-4"
                    >
                      {t("journey.details")}
                      <ArrowIcon size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
