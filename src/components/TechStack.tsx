"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "./FadeIn";

interface Tech {
  name: string;
  category: string;
  color: string;
}

const technologies: Tech[] = [
  { name: "Java", category: "Languages", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
  { name: "Python", category: "Languages", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { name: "JavaScript", category: "Languages", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5" },
  { name: "TypeScript", category: "Languages", color: "text-blue-500 border-blue-600/30 bg-blue-600/5" },
  { name: "C", category: "Languages", color: "text-slate-400 border-slate-500/30 bg-slate-500/5" },
  { name: "C#", category: "Languages", color: "text-purple-400 border-purple-500/30 bg-purple-500/5" },
  { name: "PHP", category: "Languages", color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5" },
  { name: "SQL", category: "Languages", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  { name: "HTML / CSS", category: "Languages", color: "text-orange-500 border-orange-600/30 bg-orange-600/5" },
  { name: "React", category: "Frameworks", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  { name: "Next.js", category: "Frameworks", color: "text-foreground border-border bg-surface-hover" },
  { name: "Angular", category: "Frameworks", color: "text-red-400 border-red-500/30 bg-red-500/5" },
  { name: "Node.js", category: "Frameworks", color: "text-green-500 border-green-600/30 bg-green-600/5" },
  { name: "JavaFX", category: "Frameworks", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
  { name: "Docker", category: "DevOps", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { name: "Kubernetes", category: "DevOps", color: "text-blue-600 border-blue-700/30 bg-blue-700/5" },
  { name: "Git", category: "DevOps", color: "text-orange-500 border-orange-600/30 bg-orange-600/5" },
  { name: "Linux", category: "DevOps", color: "text-yellow-500 border-yellow-600/30 bg-yellow-600/5" },
  { name: "PostgreSQL", category: "Database", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { name: "MySQL", category: "Database", color: "text-blue-300 border-blue-400/30 bg-blue-400/5" },
  { name: "Oracle", category: "Database", color: "text-red-400 border-red-500/30 bg-red-500/5" },
  { name: "MongoDB", category: "Database", color: "text-green-400 border-green-500/30 bg-green-500/5" },
];

const categoryMeta: Record<string, { icon: JSX.Element; color: string; label: { fr: string; en: string } }> = {
  Languages: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: "text-blue-400",
    label: { fr: "Langages", en: "Languages" },
  },
  Frameworks: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    color: "text-green-400",
    label: { fr: "Frameworks", en: "Frameworks" },
  },
  DevOps: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    color: "text-orange-400",
    label: { fr: "DevOps & Outils", en: "DevOps & Tools" },
  },
  Database: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    color: "text-purple-400",
    label: { fr: "Bases de données", en: "Databases" },
  },
};

export default function TechStack() {
  const { language, t } = useLanguage();
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("tech.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const meta = categoryMeta[category];
            const techs = technologies.filter((t) => t.category === category);
            return (
              <FadeIn
                key={category}
                delay={catIndex * 0.1}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={meta.color}>{meta.icon}</span>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {meta.label[language]}
                  </h3>
                  <span className="text-xs text-muted ml-auto bg-surface-hover px-2 py-0.5 rounded-full">
                    {techs.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-sm font-medium border rounded-md px-3 py-1.5 hover:scale-105 transition-all duration-200 cursor-default ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
