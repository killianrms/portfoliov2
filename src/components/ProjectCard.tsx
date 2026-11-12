"use client";

import type { PointerEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectSummary } from "@/data/projects";
import { localize } from "@/lib/typo";
import { ArrowUpRightIcon } from "./Icons";
import ProjectCover from "./ProjectCover";

interface ProjectCardProps {
  project: ProjectSummary;
  /** The main project takes the full width, cover and text side by side. */
  wide?: boolean;
}

// The card's highlight follows the pointer (see .spot in globals.css).
function trackPointer(e: PointerEvent<HTMLAnchorElement>) {
  const box = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
}

export default function ProjectCard({ project, wide = false }: ProjectCardProps) {
  const { language, t, path } = useLanguage();
  const shown = wide ? 6 : 3;
  const extra = project.technologies.length - shown;

  return (
    <Link
      href={path(`/projects/${project.slug}`)}
      prefetch={false}
      onPointerMove={trackPointer}
      className={`reveal card spot group flex flex-col overflow-hidden outline-offset-4 transition-colors duration-300 hover:border-accent-ink ${
        wide ? "border-line-strong md:col-span-2 lg:col-span-3 lg:flex-row" : ""
      }`}
    >
      {/* The main project carries the same violet edge as its entry in the journey */}
      {wide && <span className="absolute inset-y-0 left-0 z-20 w-[3px] bg-accent" aria-hidden="true" />}

      <ProjectCover
        cover={project.cover}
        category={project.category}
        year={project.year}
        className={`aspect-[16/10] shrink-0 border-line ${wide ? "border-b lg:aspect-auto lg:min-h-[23rem] lg:w-[54%] lg:border-b-0 lg:border-r" : "border-b"}`}
      />

      <div className={`relative z-10 flex flex-1 flex-col p-5 md:p-6 ${wide ? "lg:justify-center lg:p-10" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-bold leading-tight tracking-tight transition-colors group-hover:text-accent-ink ${
              wide ? "text-2xl lg:text-[2rem]" : "text-[1.3rem]"
            }`}
          >
            {project.title[language]}
          </h3>
          <span className="sr-only">{t("projects.viewProject")}</span>
          <ArrowUpRightIcon
            size={wide ? 22 : 18}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
          />
        </div>

        <p className={`mt-3 leading-relaxed text-muted ${wide ? "line-clamp-4 sm:line-clamp-none lg:text-[1.05rem]" : "line-clamp-3 text-[0.95rem] sm:line-clamp-4"}`}>
          {localize(project.shortDescription, language)}
        </p>

        <p className={`type-label mt-auto pt-5 text-foreground/70 ${wide ? "lg:mt-7 lg:pt-0" : ""}`}>
          {project.technologies.slice(0, shown).join(" · ")}
          {extra > 0 && <span className="text-muted"> · +{extra}</span>}
        </p>
      </div>
    </Link>
  );
}
