"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import { ArrowIcon, ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors";

export default function Contact() {
  const { t, path } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "limited">("idle");
  // When the form became usable; the API rejects messages sent too fast (bots).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, startedAt: startedAt.current }),
      });
      if (res.status === 429) {
        setStatus("limited");
        return;
      }
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const links = [
    { href: "https://linkedin.com/in/killianrms", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://github.com/killianrms", label: "GitHub", icon: <GitHubIcon /> },
    { href: t("cv.href"), label: t("contact.downloadCV"), icon: <DownloadIcon size={18} /> },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("nav.contact")} />

        <p className="-mt-4 max-w-xl text-muted md:-mt-8 md:text-lg">{t("contact.subtitle")}</p>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <form onSubmit={handleSubmit} className="relative space-y-8 lg:col-span-7">
            {/* Honeypot: hidden from people and screen readers, filled in by bots */}
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </label>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="type-label text-muted">{t("contact.name")}</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={fieldClass}
                  placeholder={t("contact.namePlaceholder")}
                />
              </label>
              <label className="block">
                <span className="type-label text-muted">{t("contact.email")}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={fieldClass}
                  placeholder={t("contact.emailPlaceholder")}
                />
              </label>
            </div>
            <label className="block">
              <span className="type-label text-muted">{t("contact.message")}</span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={5000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder={t("contact.messagePlaceholder")}
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="type-label group flex h-12 w-full items-center justify-between gap-6 bg-accent px-5 text-on-accent transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? t("contact.sending") : t("contact.send")}
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </button>
              <p role="status" aria-live="polite" className="type-label">
                {status === "success" && <span className="text-foreground">✓ {t("contact.success")}</span>}
                {status === "error" && <span className="text-accent-ink">✕ {t("contact.error")}</span>}
                {status === "limited" && <span className="text-accent-ink">✕ {t("contact.limited")}</span>}
              </p>
            </div>
            <p className="text-sm text-muted">
              {t("contact.privacy")}{" "}
              <Link href={path("/legal")} className="underline decoration-accent underline-offset-4 hover:text-foreground">
                {t("nav.legal")}
              </Link>
            </p>
          </form>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="type-label text-muted">{t("contact.elsewhere")}</p>
            <ul className="mt-3 border-t border-line">
              {links.map((l) => (
                <li key={l.label} className="border-b border-line">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 text-lg font-semibold transition-colors hover:text-accent-ink"
                  >
                    <span className="text-muted group-hover:text-accent-ink">{l.icon}</span>
                    <span className="flex-1">{l.label}</span>
                    <ArrowUpRightIcon className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
