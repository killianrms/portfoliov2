"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getProjectCount } from "@/data/projects";
import FadeIn from "./FadeIn";

function getAge(): number {
  const birth = new Date(2004, 5, 28); // 28 juin 2004
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}

function getExperienceDuration(language: "fr" | "en"): string {
  const start = new Date(2025, 8, 1);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (months < 1) return language === "fr" ? "< 1 mois" : "< 1 month";
  if (months < 12)
    return `${months} ${language === "fr" ? "mois" : months === 1 ? "month" : "months"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const yearStr = `${years} ${language === "fr" ? "an" + (years > 1 ? "s" : "") : "year" + (years > 1 ? "s" : "")}`;
  if (rem === 0) return yearStr;
  return `${yearStr} ${rem} ${language === "fr" ? "mois" : rem === 1 ? "month" : "months"}`;
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { language, t } = useLanguage();
  const experienceDuration = useMemo(() => getExperienceDuration(language), [language]);
  const projectCount = getProjectCount();
  const age = getAge();

  const stats = [
    {
      display: <AnimatedNumber target={projectCount} />,
      label: { fr: "Projets", en: "Projects" },
    },
    {
      display: <span>Bac+3</span>,
      label: { fr: "BUT Info", en: "CS Degree" },
    },
    {
      display: <span>{experienceDuration}</span>,
      label: { fr: "Expérience", en: "Experience" },
    },
    {
      display: <AnimatedNumber target={age} />,
      label: { fr: "Ans", en: "Years old" },
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("about.title")}
          </h2>
          <p className="mt-2 text-accent font-medium">{t("about.subtitle")}</p>
        </FadeIn>

        <FadeIn delay={0.2} className="space-y-4">
          <p className="text-muted leading-relaxed text-base md:text-lg">
            {t("about.description")}
          </p>
          <p className="text-muted leading-relaxed text-base md:text-lg">
            {t("about.description2")}
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {stats.map((stat, i) => (
              <FadeIn
                key={i}
                delay={0.3 + i * 0.1}
                className="text-center p-4 bg-surface border border-border rounded-xl"
              >
                <div className="text-2xl font-bold gradient-text">
                  {stat.display}
                </div>
                <div className="text-xs text-muted mt-1">
                  {stat.label[language]}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
