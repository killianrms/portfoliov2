"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { education, experiences, type EducationStage } from "@/data/journey";
import { frSpaces, localize } from "@/lib/typo";
import SectionHeader from "./SectionHeader";
import { ArrowIcon, CheckIcon } from "./Icons";

function StageIcon({ status }: { status: EducationStage["status"] }) {
  if (status === "running") {
    return (
      <span className="relative z-10 grid h-5 w-5 place-items-center border-2 border-foreground bg-background">
        <span className="status-running h-2 w-2 rounded-full bg-signal" />
      </span>
    );
  }
  return (
    <span className="relative z-10 grid h-5 w-5 place-items-center bg-foreground text-background">
      <CheckIcon size={11} />
    </span>
  );
}

export default function Journey() {
  const { language, t, path } = useLanguage();

  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("journey.title")} meta={`${education[0].period.split(" - ")[0]} → ${education[education.length - 1].period.split(" - ")[1]}`} />

        {/* Education as a CI pipeline */}
        <div className="border border-line">
          <div className="type-label flex items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-6">
            <span>
              <span className="text-muted">killian / </span>
              {t("journey.pipeline")}
            </span>
            <span className="flex items-center gap-2">
              <span className="status-running h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
              {t("journey.running")}
            </span>
          </div>

          <ol className="relative md:grid md:grid-cols-3">
            {/* Rail connecting the stages */}
            <span
              className="absolute bottom-10 left-[calc(1rem+9.5px)] top-10 w-px bg-line md:bottom-auto md:left-6 md:right-6 md:top-[calc(1.5rem+9.5px)] md:h-px md:w-auto"
              aria-hidden="true"
            />
            {education.map((stage) => (
              <li
                key={stage.title.fr}
                className="relative grid grid-cols-[20px_1fr] gap-4 px-4 py-5 md:block md:border-l md:border-line md:px-6 md:py-6 md:first:border-l-0"
              >
                <StageIcon status={stage.status} />
                <div className="md:mt-6">
                  <p className="type-label text-muted">
                    {stage.period}
                    {stage.level && (
                      <>
                        {" · "}
                        <span className="text-foreground">
                          {stage.level}
                        </span>
                      </>
                    )}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-tight md:text-xl">{stage.title[language]}</h3>
                  <p className="mt-0.5 text-sm text-foreground/80">{stage.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{localize(stage.detail, language)}</p>
                  <p className="type-label mt-4 flex items-center gap-2">
                    {stage.status === "running" ? (
                      <span className="text-foreground">{t("journey.running")}</span>
                    ) : (
                      <span className="text-muted">{t("journey.passed")}</span>
                    )}
                  </p>
                  {stage.status === "running" && (
                    <div className="mt-2 h-1 overflow-hidden bg-line" aria-hidden="true">
                      <div className="progress-sweep h-full w-2/5 bg-signal" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Experience log */}
        <h3 className="type-label mt-20 flex items-center gap-3 text-muted">
          {t("journey.experience")}
          <span className="h-px flex-1 bg-line" />
        </h3>

        <ol className="mt-2">
          {experiences.map((exp, i) => (
            <li key={exp.org} className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="type-label text-muted">{exp.period[language]}</p>
                {i === 0 && (
                  <p className="type-label mt-2 inline-flex items-center gap-2 text-foreground">
                    <span className="status-running h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                    {t("journey.running")}
                  </p>
                )}
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h4 className="type-wide text-3xl md:text-4xl">{exp.org}</h4>
                  <span className="type-label text-muted">{exp.place}</span>
                </div>
                <p className="mt-2 font-medium text-accent-ink">{exp.role[language]}</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">{localize(exp.summary, language)}</p>

                {exp.highlights && (
                  <ul className="mt-6 max-w-3xl space-y-3">
                    {exp.highlights[language].map((h) => (
                      <li key={h} className="grid grid-cols-[1.5rem_1fr] text-[0.95rem] leading-relaxed text-muted">
                        <span className="font-mono text-accent-ink" aria-hidden="true">→</span>
                        <span>{language === "fr" ? frSpaces(h) : h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <ul className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <li key={tag} className="type-label border border-line px-2 py-1 text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {exp.href && (
                    <Link
                      href={path(exp.href)}
                      className="type-label group inline-flex items-center gap-2 text-foreground underline decoration-accent decoration-2 underline-offset-4"
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
