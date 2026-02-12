"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

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

export default function TechStack() {
  const { t } = useLanguage();

  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("tech.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies
                  .filter((t) => t.category === category)
                  .map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2.5 hover:border-accent/50 transition-colors duration-300 cursor-default"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
