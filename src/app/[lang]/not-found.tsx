"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language, path } = useLanguage();
  const fr = language === "fr";

  return (
    <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-14 sm:px-6 md:px-10">
      <p className="type-label flex items-center gap-2 text-accent-ink">
        <span className="h-2 w-2 bg-accent" aria-hidden="true" />
        exit code 404
      </p>
      <p className="type-display mt-6 text-[42vw] md:text-[22rem]" aria-hidden="true">404</p>
      <h1 className="type-wide mt-4 text-3xl md:text-5xl">{fr ? "Page introuvable." : "Page not found."}</h1>
      <p className="mt-4 max-w-xl text-muted">
        {fr ? "Cette page n'existe pas ou a été déplacée." : "This page doesn't exist or has moved."}
      </p>
      <Link
        href={path("/")}
        className="type-label mt-10 flex h-12 w-fit items-center gap-6 bg-accent px-5 text-on-accent transition-transform hover:-translate-y-0.5"
      >
        ← {fr ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}
