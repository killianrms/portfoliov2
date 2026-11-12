"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/typo";
import { ArrowIcon, CheckIcon, FormIcon, GitBranchIcon, GlobeIcon, KeyIcon, PipelineIcon, ServerIcon } from "./Icons";

type Localized = { fr: string; en: string };

// A simplified view of the workflow: only what is already public in the case study.
const STEPS: { icon: ReactNode; label: Localized; detail: Localized }[] = [
  {
    icon: <FormIcon />,
    label: { fr: "Formulaire", en: "Form" },
    detail: { fr: "client, environnement, modules", en: "client, environment, modules" },
  },
  {
    icon: <GitBranchIcon />,
    label: { fr: "Dépôt Git", en: "Git repository" },
    detail: { fr: "créé depuis l'archétype, puis configuré", en: "created from the template, then configured" },
  },
  {
    icon: <PipelineIcon />,
    label: { fr: "Pipeline de build", en: "Build pipeline" },
    detail: { fr: "Azure DevOps, artefact récupéré par l'API", en: "Azure DevOps, artifact fetched through the API" },
  },
  {
    icon: <ServerIcon />,
    label: { fr: "Déploiement", en: "Deployment" },
    detail: { fr: "SSH et SFTP, à travers le bastion", en: "SSH and SFTP, through the bastion" },
  },
  {
    icon: <GlobeIcon />,
    label: { fr: "Frontal web", en: "Web front end" },
    detail: { fr: "plateforme exposée à son adresse", en: "platform exposed at its address" },
  },
  {
    icon: <KeyIcon />,
    label: { fr: "Accès", en: "Access" },
    detail: { fr: "transmis à l'équipe", en: "sent to the team" },
  },
];

// Human time, in minutes, drawn to scale: 120 by hand, then 1 for the form
// and about 42 of unattended run.
const MANUAL_MIN = 120;
const RUN_MIN = 42.5;

// A run takes about 7 s; the finished state then holds until the next one.
const RUN_EVERY_MS = 15000;

export default function Flagship() {
  const { language, t, path } = useLanguage();

  // The diagram is rendered complete and static. Once it scrolls into view
  // (and unless the visitor prefers reduced motion) it plays a run from the
  // first step, then again at intervals: `run` remounts the list, which
  // restarts every step's animation together.
  const [run, setRun] = useState(0);
  const windowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = windowRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.clearInterval(timer);
        if (!entry.isIntersecting) return;
        setRun((n) => n + 1);
        timer = window.setInterval(() => setRun((n) => n + 1), RUN_EVERY_MS);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="autoinit" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="reveal lg:col-span-6">
            <p className="type-label flex items-center gap-2.5 text-accent-ink">
              <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
              {t("flagship.kicker")}
            </p>
            <h2 className="type-display mt-5 text-[4.6rem] sm:text-8xl lg:text-[9.5rem]">AutoInit</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/85 md:text-xl">{t("flagship.lead")}</p>
          </div>

          <div className="reveal lg:col-span-5 lg:col-start-8 lg:pt-11">
            <ul className="space-y-5 border-t border-line pt-6">
              {(["flagship.point1", "flagship.point2", "flagship.point3"] as const).map((key) => (
                <li key={key} className="grid grid-cols-[1.75rem_1fr] leading-relaxed text-muted">
                  <span className="pt-[0.35rem] text-accent-ink" aria-hidden="true">
                    <CheckIcon size={13} />
                  </span>
                  {t(key)}
                </li>
              ))}
            </ul>
            <Link href={path("/projects/itesoft-assistant-ingenieur")} className="btn btn-ghost group mt-8 w-full sm:w-auto">
              {t("flagship.cta")}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Workflow window */}
        <div ref={windowRef} className="reveal flow card mt-12 md:mt-16">
          <div className="type-label flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line px-4 py-3 md:px-7">
            <span className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 bg-line-strong" />
                <span className="h-2 w-2 bg-line-strong" />
                <span className="h-2 w-2 bg-accent" />
              </span>
              {t("flagship.window")}
            </span>
            <span className="flex items-center gap-2.5 text-muted">
              <span className="status-running h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden="true" />
              {t("flagship.afterRunValue")} · {t("flagship.unattended")}
            </span>
          </div>

          <div className="canvas-dots px-4 py-8 md:px-7 md:py-11">
            <ol key={run} className={`md:flex ${run > 0 ? "flow-run" : ""}`}>
              {STEPS.map((s, i) => (
                <li
                  key={s.label.en}
                  className="flow-node relative flex gap-4 pb-5 last:pb-0 md:block md:flex-1 md:pb-0"
                  style={{ "--i": i } as CSSProperties}
                >
                  <span className="flow-wire" aria-hidden="true" />
                  <span className="flow-tile">
                    {s.icon}
                    <span className="flow-check" aria-hidden="true">
                      <CheckIcon size={9} />
                    </span>
                  </span>
                  <div className="min-w-0 pt-1 md:pr-5 md:pt-5">
                    <p className="type-label text-foreground">{s.label[language]}</p>
                    <p className="mt-1.5 text-sm leading-snug text-muted">{localize(s.detail, language)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Human time, before and after, to scale */}
          <div className="grid gap-6 border-t border-line px-4 py-6 md:grid-cols-[11rem_1fr] md:items-center md:gap-x-8 md:px-7 md:py-8">
            <p className="type-label text-muted">
              <span className="text-foreground">{t("flagship.before")}</span>
              <span className="md:block"> {t("flagship.beforeDetail")}</span>
            </p>
            <div className="flex items-center gap-4">
              <div className="h-3.5 flex-1 bg-line-strong" />
              <span className="type-display w-[5.5rem] shrink-0 text-right text-3xl md:text-4xl">{t("flagship.beforeValue")}</span>
            </div>

            <p className="type-label text-muted">
              <span className="text-foreground">{t("flagship.after")}</span>
            </p>
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-3.5 flex-1 bg-surface-2">
                  <span className="w-1.5 shrink-0 bg-accent" />
                  <span className="hatch" style={{ width: `${(RUN_MIN / MANUAL_MIN) * 100}%` }} />
                </div>
                <span className="type-display w-[5.5rem] shrink-0 text-right text-3xl text-accent-ink md:text-4xl">
                  {t("flagship.afterFormValue")}
                </span>
              </div>
              <p className="type-label mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-muted">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  {t("flagship.afterForm")} · {t("flagship.afterFormValue")}
                </span>
                <span className="flex items-center gap-2">
                  <span className="hatch h-2 w-4 shrink-0" aria-hidden="true" />
                  {t("flagship.afterRun")} · {t("flagship.afterRunValue")}
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{t("flagship.note")}</p>
      </div>
    </section>
  );
}
