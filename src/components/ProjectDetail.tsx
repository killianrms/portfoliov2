"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";
import type { TranslationKey } from "@/data/translations";
import { frSpaces, localize } from "@/lib/typo";
import { ArrowIcon, ArrowUpRightIcon } from "./Icons";

// Tiny renderer for the write-ups: paragraphs, "- " / "1. " lists and **bold**.
function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <strong key={key++} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function renderMarkdown(text: string) {
  const elements: ReactNode[] = [];
  let listItems: ReactNode[] = [];
  let listType: "ul" | "ol" | null = null;
  let listKey = 0;

  const flushList = () => {
    if (listItems.length > 0 && listType) {
      const Tag = listType;
      elements.push(
        <Tag key={`list-${listKey++}`} className="my-4 space-y-3">
          {listItems}
        </Tag>
      );
    }
    listItems = [];
    listType = null;
  };

  text.split("\n").forEach((line, i) => {
    if (line.startsWith("- ") || line.startsWith("  - ")) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(
        <li key={i} className="grid grid-cols-[1.25rem_1fr]">
          <span className="font-mono text-accent-ink" aria-hidden="true">-</span>
          <span>{parseInline(line.replace(/^\s*-\s/, ""))}</span>
        </li>
      );
      return;
    }

    const numbered = line.match(/^(\d+)\.\s(.+)$/);
    if (numbered) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(
        <li key={i} className="grid grid-cols-[1.75rem_1fr]">
          <span className="font-mono text-sm text-accent-ink">{numbered[1].padStart(2, "0")}</span>
          <span>{parseInline(numbered[2])}</span>
        </li>
      );
      return;
    }

    flushList();
    if (line.trim() === "") return;
    elements.push(
      <p key={i} className="mb-4">
        {parseInline(line)}
      </p>
    );
  });

  flushList();
  return elements;
}

interface ProjectDetailProps {
  project: Project;
  next: { slug: string; title: Project["title"] };
  /** Pre-highlighted code blocks, rendered on the server. */
  codeBlocks: ReactNode[];
}

export default function ProjectDetail({ project, next, codeBlocks }: ProjectDetailProps) {
  const { language, t, path } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = selectedImage !== null;

  // Lightbox: move focus into the dialog, keep it there, give it back on close.
  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const count = project.images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") setSelectedImage((i) => (i === null ? i : Math.min(i + 1, count - 1)));
      if (e.key === "ArrowLeft") setSelectedImage((i) => (i === null ? i : Math.max(i - 1, 0)));
      if (e.key === "Tab" && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [isOpen, project.images.length]);

  const links = [
    project.links?.live && { href: project.links.live, label: language === "fr" ? "Voir en ligne" : "View live" },
    project.links?.github && { href: project.links.github, label: "GitHub" },
    project.links?.video && { href: project.links.video, label: language === "fr" ? "Vidéo de présentation" : "Presentation video" },
    project.links?.discord && { href: project.links.discord, label: "Discord" },
    project.links?.report && { href: project.links.report, label: language === "fr" ? "Rapport technique" : "Technical report" },
    project.links?.download && { href: project.links.download, label: language === "fr" ? "Sujet / énoncé" : "Subject / brief" },
    project.links?.event && { href: project.links.event, label: language === "fr" ? "Site de l'événement" : "Event website" },
  ].filter(Boolean) as { href: string; label: string }[];

  const prose = (text: string) => (
    <div className="max-w-3xl leading-relaxed text-foreground/80 md:text-[1.05rem]">
      {renderMarkdown(language === "fr" ? frSpaces(text) : text)}
    </div>
  );

  // Numbered write-up blocks, in reading order. Optional ones drop out and the numbering follows.
  const blocks: { key: TranslationKey; content: ReactNode }[] = [
    { key: "project.context", content: prose(project.context[language]) },
    { key: "project.objectives", content: prose(project.objectives[language]) },
    { key: "project.approach", content: prose(project.approach[language]) },
    { key: "project.architecture", content: prose(project.architecture[language]) },
  ];

  if (project.images.length > 0) {
    blocks.push({
      key: "project.screenshots",
      content: (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {project.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setSelectedImage(i)}
              className="group relative aspect-video overflow-hidden border border-line bg-surface"
              aria-label={`${project.title[language]} - ${i + 1}`}
            >
              <Image src={img} alt="" fill sizes="(max-width: 768px) 50vw, 300px" className="thumb-mono object-cover" />
            </button>
          ))}
        </div>
      ),
    });
  }

  if (project.skills.length > 0) {
    blocks.push({
      key: "project.skills",
      content: (
        <div className="grid border-l border-t border-line sm:grid-cols-2">
          {project.skills.map((skill) => (
            <div key={skill.name.fr} className="border-b border-r border-line p-5">
              <h3 className="font-bold leading-snug">{skill.name[language]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{localize(skill.description, language)}</p>
            </div>
          ))}
        </div>
      ),
    });
  }

  if (project.codeHighlights.length > 0) {
    blocks.push({
      key: "project.codeHighlights",
      content: (
        <div className="min-w-0 space-y-10">
          {project.codeHighlights.map((h, i) => (
            <figure key={i} className="min-w-0">
              <figcaption className="mb-3 font-bold">{h.title[language]}</figcaption>
              <div className="overflow-hidden border border-line bg-[#121211]">
                <div className="type-label flex items-center justify-between border-b border-white/10 px-4 py-2 text-[#8f8d86]">
                  <span>{h.language}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                </div>
                {codeBlocks[i]}
              </div>
              <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">{localize(h.explanation, language)}</p>
            </figure>
          ))}
        </div>
      ),
    });
  }

  blocks.push(
    { key: "project.results", content: prose(project.results[language]) },
    { key: "project.reflection", content: prose(project.reflection[language]) }
  );

  if (links.length > 0) {
    blocks.push({
      key: "project.links",
      content: (
        <ul className="border-t border-line">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-4 text-lg font-semibold transition-colors hover:text-accent-ink"
              >
                {l.label}
                <ArrowUpRightIcon className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
              </a>
            </li>
          ))}
        </ul>
      ),
    });
  }

  return (
    <article className="pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Link href={path("/#projects")} className="type-label group inline-flex items-center gap-2 py-2 text-muted hover:text-foreground transition-colors">
            <ArrowIcon size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
            {t("project.back")}
          </Link>

          <p className="type-label mt-8 flex gap-3 text-muted">
            <span className="text-foreground">{t(`projects.filter.${project.category}`)}</span>
            <span>{project.year}</span>
          </p>
          <h1 className="type-wide mt-4 max-w-5xl text-[2.1rem] sm:text-5xl lg:text-[4.2rem]">{project.title[language]}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{localize(project.shortDescription, language)}</p>
        </div>

        {/* Spec sheet */}
        <dl className="grid border-t border-line md:grid-cols-3">
          {([
            ["project.duration", project.duration[language]],
            ["project.team", project.team[language]],
            ["project.role", project.role[language]],
          ] as const).map(([key, value]) => (
            <div key={key} className="border-b border-line py-5 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <dt className="type-label text-muted">{t(key)}</dt>
              <dd className="mt-2 leading-snug">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center gap-2 border-b border-line py-5">
          <span className="type-label mr-2 text-muted">{t("project.technologies")}</span>
          {project.technologies.map((tech) => (
            <span key={tech} className="type-label border border-line px-2 py-1 text-foreground/80">
              {tech}
            </span>
          ))}
        </div>

        {/* Visual */}
        <div className={`relative mt-10 aspect-[16/9] overflow-hidden border border-line md:mt-14 bg-surface`}>
          <Image
            src={project.poster ?? project.thumbnail}
            alt={project.title[language]}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className={project.poster ? "object-contain" : "object-cover object-top"}
          />
        </div>

        {/* Write-up */}
        <div className="mt-6 divide-y divide-line">
          {blocks.map((b) => (
            <section key={b.key} className="grid gap-4 py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <div className="md:col-span-3">
                <h2 className="type-label flex items-center gap-3 text-muted md:sticky md:top-20">
                  <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                  {t(b.key)}
                </h2>
              </div>
              <div className="min-w-0 md:col-span-9">{b.content}</div>
            </section>
          ))}
        </div>

        {/* Next project */}
        <Link href={path(`/projects/${next.slug}`)} className="group mt-6 block border-t border-line py-12 md:py-16">
          <span className="type-label text-muted">{t("project.next")}</span>
          <span className="type-wide mt-4 flex items-end justify-between gap-6 text-3xl transition-colors group-hover:text-accent-ink md:text-5xl">
            {next.title[language]}
            <ArrowIcon size={40} className="shrink-0 transition-transform group-hover:translate-x-2" />
          </span>
        </Link>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t("project.screenshots")}
        >
          <button ref={closeRef} onClick={() => setSelectedImage(null)} className="type-label absolute right-4 top-4 z-10 p-2 text-white/80 hover:text-white">
            {t("nav.close")} ✕
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title[language]} - ${selectedImage + 1}/${project.images.length}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="type-label absolute bottom-4 flex items-center gap-6 text-white/70">
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(Math.max(selectedImage - 1, 0)); }}
              disabled={selectedImage === 0}
              className="p-2 disabled:opacity-30"
              aria-label={language === "fr" ? "Image précédente" : "Previous image"}
            >
              ←
            </button>
            {selectedImage + 1} / {project.images.length}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(Math.min(selectedImage + 1, project.images.length - 1)); }}
              disabled={selectedImage === project.images.length - 1}
              className="p-2 disabled:opacity-30"
              aria-label={language === "fr" ? "Image suivante" : "Next image"}
            >
              →
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
