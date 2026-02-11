"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function getExperienceDuration(language: "fr" | "en"): string {
  const start = new Date(2025, 8, 1); // September 2025
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (months < 1) return language === "fr" ? "< 1 mois" : "< 1 month";
  if (months < 12) {
    return `${months} ${language === "fr" ? "mois" : (months === 1 ? "month" : "months")}`;
  }
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const yearStr = `${years} ${language === "fr" ? "an" + (years > 1 ? "s" : "") : "year" + (years > 1 ? "s" : "")}`;
  if (rem === 0) return yearStr;
  return `${yearStr} ${rem} ${language === "fr" ? "mois" : (rem === 1 ? "month" : "months")}`;
}

export default function About() {
  const { language, t } = useLanguage();
  const experienceDuration = useMemo(() => getExperienceDuration(language), [language]);

  const stats = [
    { value: "12", label: { fr: "Projets", en: "Projects" } },
    { value: "Bac+3", label: { fr: "BUT Info", en: "CS Degree" } },
    { value: experienceDuration, label: { fr: "Expérience", en: "Experience" } },
    { value: "21", label: { fr: "Ans", en: "Years old" } },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("about.title")}
          </h2>
          <p className="mt-2 text-accent font-medium">{t("about.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-full md:h-64 rounded-2xl bg-surface border border-border overflow-hidden relative">
              <Image
                src="/images/photo.webp"
                alt="Killian"
                fill
                sizes="(max-width: 768px) 192px, 300px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-muted leading-relaxed">
              {t("about.description2")}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 bg-surface border border-border rounded-xl"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">
                    {stat.label[language]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
