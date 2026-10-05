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
    items: ["n8n", "Docker", "Azure DevOps", "CI/CD", "Linux", "Git", "Grafana", "Kubernetes", "Azure"],
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
      "Code review",
      { fr: "Gestion de projet", en: "Project management" },
      "ISO 27001",
    ],
  },
];

export default function TechStack() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("tech.title")} />
        <p className="-mt-4 mb-10 max-w-2xl text-muted md:-mt-8 md:text-lg">{t("tech.subtitle")}</p>

        <dl className="border-t border-line">
          {stack.map((group) => (
            <div key={group.label.fr} className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8 md:py-8">
              <dt className="type-label flex items-center gap-3 text-muted md:col-span-3 md:pt-2">
                {group.primary && <span className="h-2 w-2 bg-accent" aria-hidden="true" />}
                {group.label[language]}
              </dt>
              <dd className="md:col-span-9">
                <ul
                  className={`flex flex-wrap gap-x-5 gap-y-1 ${
                    group.primary ? "type-wide text-[1.7rem] md:text-4xl" : "text-xl font-semibold text-foreground/85 md:text-2xl"
                  }`}
                >
                  {group.items.map((item) => {
                    const label = typeof item === "string" ? item : item[language];
                    return (
                      <li key={label} className="group/item flex items-baseline gap-5">
                        {label}
                        <span className="text-line group-last/item:hidden" aria-hidden="true">/</span>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
