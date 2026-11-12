"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";

type Localized = { fr: string; en: string };

interface StackGroup {
  label: Localized;
  items: (string | Localized)[];
  primary?: boolean;
}

const stack: StackGroup[] = [
  {
    label: { fr: "Automatisation & DevOps", en: "Automation & DevOps" },
    items: ["n8n", "Docker", "Azure DevOps", "CI/CD", "Linux", "Git", "Grafana", "Azure"],
    primary: true,
  },
  {
    label: { fr: "Langages", en: "Languages" },
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "C#", "PHP", "HTML / CSS"],
  },
  {
    label: { fr: "Frameworks", en: "Frameworks" },
    items: ["Angular", "React", "Next.js", "Node.js", "JavaFX"],
  },
  {
    label: { fr: "Bases de données", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"],
  },
  {
    label: { fr: "Méthodes", en: "Practices" },
    items: [
      "Agile Scrum",
      { fr: "Revue de code", en: "Code review" },
      { fr: "Gestion de projet", en: "Project management" },
      "ISO 27001",
    ],
  },
];

export default function TechStack() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("tech.title")} />
        <p className="-mt-4 mb-8 max-w-2xl text-muted md:-mt-6 md:mb-10 md:text-lg">{t("tech.subtitle")}</p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {stack.map((group) => (
            <div
              key={group.label.en}
              className={`reveal card p-5 md:p-7 ${group.primary ? "canvas-dots border-line-strong md:col-span-2 md:p-9" : ""}`}
            >
              <h3 className={`type-label flex items-center gap-2.5 ${group.primary ? "text-accent-ink" : "text-muted"}`}>
                {group.primary && <span className="h-2 w-2 bg-accent" aria-hidden="true" />}
                {group.label[language]}
              </h3>
              <ul
                className={
                  group.primary
                    ? "type-display mt-6 flex flex-wrap gap-x-[0.5em] gap-y-2 text-[2.6rem] sm:text-6xl lg:text-[4.6rem]"
                    : "mt-5 flex flex-wrap gap-2"
                }
              >
                {group.items.map((item) => {
                  const label = typeof item === "string" ? item : item[language];
                  return group.primary ? (
                    <li key={label} className="group/item flex items-baseline gap-[0.5em]">
                      {label}
                      <span className="text-line-strong group-last/item:hidden" aria-hidden="true">
                        /
                      </span>
                    </li>
                  ) : (
                    <li key={label} className="border border-line bg-surface-2 px-3 py-1.5 text-[0.95rem] font-medium">
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
