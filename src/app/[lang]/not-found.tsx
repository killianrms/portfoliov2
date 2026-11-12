"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowIcon } from "@/components/Icons";

export default function NotFound() {
  const { t, path } = useLanguage();

  return (
    <div className="canvas-dots mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-14 sm:px-6 md:px-10">
      <p className="type-label flex items-center gap-2.5 text-accent-ink">
        <span className="h-2 w-2 bg-accent" aria-hidden="true" />
        exit code 404
      </p>
      <p className="type-display mt-6 text-[42vw] md:text-[22rem]" aria-hidden="true">
        404
      </p>
      <h1 className="type-headline mt-4 text-3xl md:text-5xl">{t("notFound.title")}</h1>
      <p className="mt-4 max-w-xl text-muted">{t("notFound.text")}</p>
      <Link href={path("/")} className="btn btn-primary group mt-10 w-fit">
        <ArrowIcon className="rotate-180 transition-transform group-hover:-translate-x-1" />
        {t("legal.back")}
      </Link>
    </div>
  );
}
