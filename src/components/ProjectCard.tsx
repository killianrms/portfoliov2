"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectSummary } from "@/data/projects";
import { localize } from "@/lib/typo";
import { ArrowUpRightIcon } from "./Icons";

interface ProjectCardProps {
  project: ProjectSummary;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language, t, path } = useLanguage();
  const isLogo = project.thumbnail.includes("itesoft");
  const extra = project.technologies.length - 4;

  return (
    <Link
      href={path(`/projects/${project.slug}`)}
      prefetch={false}
      className="group grid gap-5 border-b border-line py-8 outline-offset-4 md:grid-cols-12 md:gap-8 md:py-10"
    >
      {/* Thumbnail (first on mobile, last on desktop) */}
      <div
        className={`relative aspect-[16/9] overflow-hidden border border-line md:order-last md:col-span-4 md:aspect-[16/10] ${
          isLogo ? "bg-white" : "bg-surface"
        }`}
      >
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
          className={`thumb-mono ${isLogo ? "object-contain p-8" : "object-cover"}`}
        />
      </div>

      <div className="md:col-span-8 md:flex md:gap-8">
        <p className="type-label flex items-center gap-3 text-muted md:w-24 md:shrink-0 md:flex-col md:items-start md:gap-2">
          <span className="text-foreground">{t(`projects.filter.${project.category}`)}</span>
          <span>{project.year}</span>
        </p>

        <div className="mt-3 min-w-0 flex-1 md:mt-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[1.4rem] font-bold leading-tight transition-colors group-hover:text-accent-ink md:text-[1.75rem]">
              {project.title[language]}
            </h3>
            <ArrowUpRightIcon
              size={22}
              className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
            />
          </div>
          {project.featured && (
            <p className="type-label mt-2 inline-block bg-accent px-1.5 py-0.5 text-on-accent">
              {t("projects.featured")}
            </p>
          )}
          <p className="mt-3 line-clamp-3 max-w-2xl leading-relaxed text-muted">
            {localize(project.shortDescription, language)}
          </p>
          <p className="type-label mt-4 text-foreground/70">
            {project.technologies.slice(0, 4).join(" · ")}
            {extra > 0 && <span className="text-muted"> · +{extra}</span>}
          </p>
        </div>
      </div>
    </Link>
  );
}
