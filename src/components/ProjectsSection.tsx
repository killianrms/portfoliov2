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

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const years = projects.map((p) => Number(p.year));

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader
          title={t("projects.title")}
          meta={`${projects.length} ${t("projects.count")} · ${Math.min(...years)} → ${Math.max(...years)}`}
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-muted md:text-lg">{t("projects.subtitle")}</p>

          {/* Filters */}
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label={t("projects.filterLabel")}>
            <div className="flex w-max border border-line-strong p-0.5">
              {FILTERS.map((f) => {
                const count = f === "all" ? projects.length : projects.filter((p) => p.category === f).length;
                const selected = filter === f;
                return (
                  <button
                    key={f}
                    aria-pressed={selected}
                    onClick={() => setFilter(f)}
                    className={`type-label flex h-9 items-center gap-2 px-3.5 transition-colors ${
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
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} wide={project.cover.tone === "accent"} />
          ))}
        </div>
      </div>
    </section>
  );
}
