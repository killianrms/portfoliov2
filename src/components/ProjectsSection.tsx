"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

type Filter = "all" | "professional" | "personal" | "university" | "competition";

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [showArchived, setShowArchived] = useState(false);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.filter.all") },
    { key: "professional", label: t("projects.filter.professional") },
    { key: "personal", label: t("projects.filter.personal") },
    { key: "university", label: t("projects.filter.university") },
    { key: "competition", label: t("projects.filter.competition") },
  ];

  const activeProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  const filteredProjects =
    filter === "all" ? activeProjects : activeProjects.filter((p) => p.category === filter);

  const filteredArchived =
    filter === "all" ? archivedProjects : archivedProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
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
        </FadeIn>

        {/* Grid - projets actifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Toggle archives */}
        {(filteredArchived.length > 0 || showArchived) && (
          <FadeIn className="mt-12 text-center">
            <button
              onClick={() => setShowArchived((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border rounded-lg text-sm text-muted hover:text-foreground hover:border-accent/50 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showArchived ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              {showArchived
                ? (language === "fr" ? "Masquer les projets archivés" : "Hide archived projects")
                : (language === "fr" ? `Voir les projets archivés (${filteredArchived.length})` : `View archived projects (${filteredArchived.length})`)}
            </button>
          </FadeIn>
        )}

        {/* Grille archivés */}
        {showArchived && filteredArchived.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted uppercase tracking-widest">
                {language === "fr" ? "Projets archivés" : "Archived projects"}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
              {filteredArchived.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
