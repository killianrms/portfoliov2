"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Filter = "all" | "professional" | "personal" | "university" | "competition";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.filter.all") },
    { key: "professional", label: t("projects.filter.professional") },
    { key: "personal", label: t("projects.filter.personal") },
    { key: "university", label: t("projects.filter.university") },
    { key: "competition", label: t("projects.filter.competition") },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? "bg-accent text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
