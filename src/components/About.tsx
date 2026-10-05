"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getWorkStudyDuration } from "@/lib/dates";
import SectionHeader from "./SectionHeader";

export default function About({ projectCount }: { projectCount: number }) {
  const { language, t } = useLanguage();

  const stats = [
    { key: t("about.stat.projects"), value: String(projectCount).padStart(2, "0") },
    { key: t("about.stat.degrees"), value: "02" },
    { key: t("about.stat.experience"), value: getWorkStudyDuration(language) },
    { key: "Bac+5", value: t("about.stat.next") },
    { key: t("about.stat.autoinit"), value: "2 h → 1 min" },
  ];

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("about.title")} meta={t("hero.caption")} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <p className="type-wide text-[1.65rem] sm:text-4xl lg:col-span-7 lg:text-[2.6rem] lg:leading-[1.02]">
            {t("about.statement")}
          </p>

          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-5 lg:text-[1.05rem]">
            <p className="text-foreground">{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>

        {/* Spec sheet */}
        <dl className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.key}
              className="flex items-baseline gap-3 border-b border-line py-4 sm:odd:pr-6 lg:flex-col lg:items-start lg:gap-2 lg:border-b-0 lg:border-r lg:px-5 lg:py-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="type-label flex flex-1 items-baseline gap-3 text-muted lg:flex-none">
                {s.key}
                <span className="leader lg:hidden" aria-hidden="true" />
              </dt>
              <dd className="type-wide text-2xl lg:text-4xl" suppressHydrationWarning>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
