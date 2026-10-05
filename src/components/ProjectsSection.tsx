"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectSummary } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

type Filter = "all" | ProjectSummary["category"];

const FILTERS: Filter[] = ["all", "professional", "university", "personal", "competition"];

export default function ProjectsSection({ projects }: { projects: ProjectSummary[] }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [showArchived, setShowArchived] = useState(false);

  const matches = (p: ProjectSummary) => filter === "all" || p.category === filter;
  const active = projects.filter((p) => !p.archived);
  const visible = active.filter(matches);
  const archived = projects.filter((p) => p.archived && matches(p));
  const years = active.map((p) => Number(p.year));

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader
          title={t("projects.title")}
          meta={`${active.length} ${t("about.stat.projects")} · ${Math.min(...years)} → ${Math.max(...years)}`}
        />

        <p className="-mt-4 mb-10 max-w-2xl text-muted md:-mt-8 md:text-lg">{t("projects.subtitle")}</p>

        {/* Filters */}
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label={t("projects.filterLabel")}>
          <div className="flex w-max gap-0 border border-line">
            {FILTERS.map((f) => {
              const count = f === "all" ? active.length : active.filter((p) => p.category === f).length;
              const selected = filter === f;
              return (
                <button
                  key={f}
                  aria-pressed={selected}
                  onClick={() => setFilter(f)}
                  className={`type-label flex h-10 items-center gap-2 border-r border-line px-4 last:border-r-0 transition-colors ${
                    selected ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {t(`projects.filter.${f}`)}
                  <span className={selected ? "opacity-60" : "text-accent-ink"}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-line">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {archived.length > 0 && (
          <div className="mt-10">
            <button
              onClick={() => setShowArchived((v) => !v)}
              aria-expanded={showArchived}
              className="type-label flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <span className="font-mono text-accent-ink">{showArchived ? "−" : "+"}</span>
              {showArchived ? t("projects.archived.hide") : t("projects.archived.show")} ({archived.length})
            </button>
            {showArchived && (
              <div className="mt-4 border-t border-line opacity-80">
                {archived.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
