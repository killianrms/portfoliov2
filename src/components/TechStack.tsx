"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Tech {
  name: string;
  category: string;
}

const technologies: Tech[] = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Angular", category: "Frameworks" },
  { name: "Spring Boot", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express", category: "Frameworks" },
  { name: "JavaFX", category: "Frameworks" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Oracle", category: "Database" },
  { name: "MongoDB", category: "Database" },
];

const categoryMeta: Record<string, { icon: string; color: string }> = {
  Languages: { icon: "{ }", color: "text-blue-400" },
  Frameworks: { icon: "< />", color: "text-green-400" },
  DevOps: { icon: ">>_", color: "text-orange-400" },
  Database: { icon: "DB", color: "text-purple-400" },
};

export default function TechStack() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          {...(isMobile ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
          })}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("tech.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const meta = categoryMeta[category] || { icon: "*", color: "text-accent" };
            const techs = technologies.filter((t) => t.category === category);
            return (
              <motion.div
                key={category}
                {...(isMobile ? {} : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-100px" },
                  transition: { duration: 0.5, delay: catIndex * 0.1 },
                })}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-lg font-mono font-bold ${meta.color}`}>
                    {meta.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {category}
                  </h3>
                  <span className="text-xs text-muted ml-auto">{techs.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="text-sm font-medium text-muted bg-background border border-border/50 rounded-md px-3 py-1.5 hover:text-foreground hover:border-accent/40 transition-all duration-200 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
