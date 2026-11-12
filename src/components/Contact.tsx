"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import { ArrowIcon, ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

const fieldClass =
  "w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-lg text-foreground placeholder:text-muted/60 focus:border-accent-ink focus:outline-none focus:ring-0 transition-colors";

const EMPTY = { name: "", email: "", message: "", company: "" };

type Status = "idle" | "sending" | "success" | "error" | "limited";

export default function Contact() {
  const { t, path } = useLanguage();
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  // The API ignores messages sent within a few seconds of the page opening
  // (bots). The delay is measured here, on one clock: comparing a browser
  // timestamp with the server's would drop real messages from visitors whose
  // device clock is a few minutes off.
  const openedAt = useRef(0);
  const clearStatus = useRef<number | undefined>(undefined);
  useEffect(() => {
    openedAt.current = performance.now();
    return () => window.clearTimeout(clearStatus.current);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    window.clearTimeout(clearStatus.current);
    setStatus("sending");
    let result: Status = "error";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, elapsed: Math.round(performance.now() - openedAt.current) }),
      });
      if (res.ok) {
        result = "success";
        setFormData(EMPTY);
      } else if (res.status === 429) {
        result = "limited";
      }
    } catch {
      // Network failure: reported as an error below.
    }
    setStatus(result);
    clearStatus.current = window.setTimeout(() => setStatus("idle"), 8000);
  };

  const set = (field: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setFormData((data) => ({ ...data, [field]: e.target.value }));

  const links = [
    { href: "https://linkedin.com/in/killianrms", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://github.com/killianrms", label: "GitHub", icon: <GitHubIcon /> },
    { href: t("cv.href"), label: t("contact.downloadCV"), icon: <DownloadIcon size={18} /> },
  ];

  return (
    <section id="contact" className="relative overflow-clip border-t border-line">
      <div className="glow-blob pointer-events-none absolute -bottom-72 -left-56 h-[44rem] w-[44rem] opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
        <SectionHeader title={t("nav.contact")} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="reveal lg:col-span-5">
            <p className="type-headline max-w-md text-balance text-2xl sm:text-3xl">{t("contact.subtitle")}</p>

            <p className="type-label mt-10 text-muted">{t("contact.elsewhere")}</p>
            <ul className="mt-3 border-t border-line">
              {links.map((l) => (
                <li key={l.label} className="border-b border-line">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 text-lg font-semibold transition-colors hover:text-accent-ink"
                  >
                    <span className="text-muted transition-colors group-hover:text-accent-ink">{l.icon}</span>
                    <span className="flex-1">{l.label}</span>
                    <ArrowUpRightIcon className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="reveal card space-y-8 p-5 md:p-9 lg:col-span-7">
            {/* Honeypot: hidden from people and screen readers, filled in by bots */}
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" value={formData.company} onChange={set("company")} />
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
                  onChange={set("name")}
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
                  onChange={set("email")}
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
                onChange={set("message")}
                className={`${fieldClass} resize-none`}
                placeholder={t("contact.messagePlaceholder")}
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" disabled={status === "sending"} className="btn btn-primary group w-full sm:w-auto sm:min-w-[11rem]">
                {status === "sending" ? t("contact.sending") : t("contact.send")}
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </button>
              <p role="status" aria-live="polite" className="type-label">
                {status === "success" && <span className="text-foreground">✓ {t("contact.success")}</span>}
                {status === "error" && <span className="text-signal-ink">✕ {t("contact.error")}</span>}
                {status === "limited" && <span className="text-signal-ink">✕ {t("contact.limited")}</span>}
              </p>
            </div>
            <p className="text-sm text-muted">
              {t("contact.privacy")}{" "}
              <Link href={path("/legal")} className="underline decoration-accent-ink underline-offset-4 hover:text-foreground">
                {t("nav.legal")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
