"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";
import FadeIn from "./FadeIn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { language, t } = useLanguage();

  const categoryColors: Record<string, string> = {
    professional: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    personal: "bg-green-500/10 text-green-400 border-green-500/20",
    university: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    competition: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };

  const categoryLabels: Record<string, string> = {
    professional: t("projects.filter.professional"),
    personal: t("projects.filter.personal"),
    university: t("projects.filter.university"),
    competition: t("projects.filter.competition"),
  };

  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/projects/${project.slug}`} prefetch={false}>
        <div className="group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
          {/* Thumbnail */}
          <div className={`relative h-48 overflow-hidden ${project.thumbnail.includes("itesoft") ? "bg-white" : "bg-surface-hover"}`}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 768px) 95vw, (max-width: 1200px) 45vw, 30vw"
              className={`group-hover:scale-110 transition-transform duration-500 ${project.thumbnail.includes("itesoft") ? "object-contain p-4" : "object-cover"}`}
            />
            {!project.thumbnail.includes("itesoft") && (
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            )}
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[project.category]}`}>
                {categoryLabels[project.category]}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted line-clamp-2">
              {project.shortDescription[language]}
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted bg-surface-hover px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs text-muted bg-surface-hover px-2 py-0.5 rounded">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* View link */}
            <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>{t("projects.viewProject")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
