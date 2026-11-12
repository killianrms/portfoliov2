"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getAge } from "@/lib/dates";
import { useToday } from "@/lib/useToday";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useLanguage();
  const today = useToday();

  const facts = [
    { key: t("about.fact.role"), value: t("about.fact.roleValue") },
    { key: t("about.fact.school"), value: t("about.fact.schoolValue") },
    { key: t("about.fact.place"), value: t("about.fact.placeValue") },
    { key: t("about.fact.age"), value: `${getAge(today)} ${t("hero.age")}` },
  ];

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("about.title")} meta={t("hero.caption")} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="reveal lg:col-span-7">
            <p className="type-headline text-balance text-[1.75rem] sm:text-4xl lg:text-[2.75rem]">{t("about.statement")}</p>

            <dl className="mt-10 border-t border-line lg:mt-14 lg:max-w-xl">
              {facts.map((f) => (
                <div key={f.key} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3.5">
                  <dt className="type-label pt-[0.2rem] text-muted">{f.key}</dt>
                  <dd className="text-[0.95rem] leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal space-y-5 text-base leading-relaxed text-muted lg:col-span-5 lg:text-[1.05rem]">
            <p className="text-foreground">{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
