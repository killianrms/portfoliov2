"use client";

import { useState, ReactNode } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">404</h1>
          <p className="text-muted mb-8">
            {language === "fr" ? "Projet introuvable" : "Project not found"}
          </p>
          <Link href="/#projects" className="text-accent hover:underline">
            {t("project.back")}
          </Link>
        </div>
      </div>
    );
  }

  // Parse inline bold: **text** → <strong>
  const parseInline = (text: string): ReactNode[] => {
    const parts: ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={key++} className="text-foreground font-semibold">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: ReactNode[] = [];
    let listItems: ReactNode[] = [];
    let listType: "ul" | "ol" | null = null;
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        if (listType === "ul") {
          elements.push(
            <ul key={`list-${listKey++}`} className="space-y-2 my-3">
              {listItems}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`list-${listKey++}`} className="space-y-2 my-3 list-decimal list-inside">
              {listItems}
            </ol>
          );
        }
        listItems = [];
        listType = null;
      }
    };

    lines.forEach((line, i) => {
      // Bullet list items: - **bold** : text  OR  - text
      if (line.startsWith("- ") || line.startsWith("  - ")) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        const content = line.replace(/^[\s]*-\s/, "");
        listItems.push(
          <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
            <span>{parseInline(content)}</span>
          </li>
        );
        return;
      }

      // Numbered list items: 1. **bold** : text  OR  1. text
      if (/^\d+\.\s/.test(line)) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        const match = line.match(/^(\d+)\.\s(.+)$/);
        if (match) {
          listItems.push(
            <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
              <span className="text-accent font-semibold shrink-0">{match[1]}.</span>
              <span>{parseInline(match[2])}</span>
            </li>
          );
        }
        return;
      }

      // Empty line
      if (line.trim() === "") {
        flushList();
        elements.push(<div key={i} className="h-2" />);
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={i} className="text-sm text-muted leading-relaxed mb-2">
          {parseInline(line)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            {t("project.back")}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {project.title}
          </h1>

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">
                {t("project.duration")}
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.duration[language]}
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">
                {t("project.team")}
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.team[language]}
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">
                {t("project.role")}
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.role[language]}
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">
                {t("project.technologies")}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies full list */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-surface border border-border px-3 py-1.5 rounded-full text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Poster */}
        {project.poster && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-border">
              <Image
                src={project.poster}
                alt={`${project.title} - Affiche`}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        )}

        {/* Image Gallery */}
        {project.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              {language === "fr" ? "Captures d'écran" : "Screenshots"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer"
                  onClick={() => setSelectedImage(i)}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              {selectedImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
                  className="absolute left-4 text-white/80 hover:text-white z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
              )}
              {selectedImage < project.images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
                  className="absolute right-4 text-white/80 hover:text-white z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              )}
              <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={project.images[selectedImage]}
                  alt={`${project.title} - ${selectedImage + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 text-white/60 text-sm">
                {selectedImage + 1} / {project.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content sections in cards */}
        <div className="space-y-8">
          {/* Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.context")}
              </h2>
              <div>{renderMarkdown(project.context[language])}</div>
            </div>
          </motion.section>

          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.objectives")}
              </h2>
              <div>{renderMarkdown(project.objectives[language])}</div>
            </div>
          </motion.section>

          {/* Technical Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.approach")}
              </h2>
              <div>{renderMarkdown(project.approach[language])}</div>
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.architecture")}
              </h2>
              <div>{renderMarkdown(project.architecture[language])}</div>
            </div>
          </motion.section>

          {/* Skills Developed */}
          {project.skills.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.skills")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300"
                  >
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {skill.name[language]}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {skill.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Code Highlights */}
          {project.codeHighlights.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-serif font-bold mb-6 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.codeHighlights")}
              </h2>
              {project.codeHighlights.map((highlight, i) => (
                <div key={i} className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {highlight.title[language]}
                  </h3>
                  <div className="bg-[#1e1e2e] rounded-xl overflow-hidden mb-4">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
                      <span className="text-xs text-[#a6adc8]">{highlight.language}</span>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#f38ba8]" />
                        <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
                        <div className="w-3 h-3 rounded-full bg-[#f9e2af]" />
                      </div>
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
                      <code className="text-[#cdd6f4]">{highlight.code}</code>
                    </pre>
                  </div>
                  <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg p-4">
                    <p className="text-xs text-muted leading-relaxed italic">
                      {highlight.explanation[language]}
                    </p>
                  </div>
                </div>
              ))}
            </motion.section>
          )}

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.results")}
              </h2>
              <div>{renderMarkdown(project.results[language])}</div>
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 border-l-2 border-l-accent">
              <h2 className="text-lg font-serif font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="w-6 h-0.5 bg-accent" />
                {t("project.reflection")}
              </h2>
              <div>{renderMarkdown(project.reflection[language])}</div>
            </div>
          </motion.section>
        </div>

        {/* Links */}
        {(project.links?.github || project.links?.live || project.links?.video || project.links?.download) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 pt-8"
          >
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {language === "fr" ? "Voir en ligne" : "View live"}
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                {language === "fr" ? "Vidéo de présentation" : "Presentation video"}
              </a>
            )}
            {project.links.discord && (
              <a
                href={project.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] text-white rounded-lg text-sm font-medium hover:bg-[#4752C4] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>
                Discord
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                {language === "fr" ? "Rapport technique" : "Technical report"}
              </a>
            )}
            {project.links.download && (
              <a
                href={project.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {language === "fr" ? "Sujet / Énoncé" : "Subject / Brief"}
              </a>
            )}
          </motion.div>
        )}

        {/* Back to projects */}
        <div className="section-separator mt-12 mb-8" />
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          {t("project.back")}
        </Link>
      </div>
    </div>
  );
}
