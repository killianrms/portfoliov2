"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.slug === params.slug);

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

  const renderMarkdown = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*\s*[:：]\s*(.+)$/);
        if (match) {
          return (
            <li key={i} className="mb-2">
              <strong className="text-foreground">{match[1]}</strong>
              <span className="text-muted"> : {match[2]}</span>
            </li>
          );
        }
        const matchSimple = line.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (matchSimple) {
          return (
            <li key={i} className="mb-2">
              <strong className="text-foreground">{matchSimple[1]}</strong>
              <span className="text-muted">{matchSimple[2]}</span>
            </li>
          );
        }
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="mb-1 text-muted">
            {line.substring(2)}
          </li>
        );
      }
      if (/^\d+\.\s\*\*/.test(line)) {
        const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*[:：]\s*(.+)$/);
        if (match) {
          return (
            <li key={i} className="mb-3 list-decimal ml-4">
              <strong className="text-foreground">{match[1]}</strong>
              <span className="text-muted"> : {match[2]}</span>
            </li>
          );
        }
        const matchSimple = line.match(/^\d+\.\s\*\*(.+?)\*\*(.*)$/);
        if (matchSimple) {
          return (
            <li key={i} className="mb-3 list-decimal ml-4">
              <strong className="text-foreground">{matchSimple[1]}</strong>
              <span className="text-muted">{matchSimple[2]}</span>
            </li>
          );
        }
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={i} className="mb-2 list-decimal ml-4 text-muted">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-muted leading-relaxed mb-2">
          {line}
        </p>
      );
    });
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
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-muted">+{project.technologies.length - 3}</span>
                )}
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

        {/* Context */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.context")}
          </h2>
          <div className="prose-custom">{renderMarkdown(project.context[language])}</div>
        </motion.section>

        {/* Objectives */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.objectives")}
          </h2>
          <div className="prose-custom">{renderMarkdown(project.objectives[language])}</div>
        </motion.section>

        {/* Technical Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.approach")}
          </h2>
          <div className="prose-custom">{renderMarkdown(project.approach[language])}</div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.architecture")}
          </h2>
          <div className="bg-surface border border-border rounded-xl p-6">
            {renderMarkdown(project.architecture[language])}
          </div>
        </motion.section>

        {/* Skills Developed */}
        {project.skills.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              {t("project.skills")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {skill.name[language]}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              {t("project.codeHighlights")}
            </h2>
            {project.codeHighlights.map((highlight, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
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
                  <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-[#cdd6f4]">{highlight.code}</code>
                  </pre>
                </div>
                <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg p-4">
                  <p className="text-sm text-muted leading-relaxed italic">
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.results")}
          </h2>
          <div className="prose-custom">{renderMarkdown(project.results[language])}</div>
        </motion.section>

        {/* Reflection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t("project.reflection")}
          </h2>
          <div className="bg-surface border border-border rounded-xl p-6">
            {renderMarkdown(project.reflection[language])}
          </div>
        </motion.section>

        {/* Links */}
        {(project.links?.github || project.links?.live || project.links?.video) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 pt-4"
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
