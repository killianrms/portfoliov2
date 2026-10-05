"use client";

import { useLanguage } from "@/context/LanguageContext";

/** First focusable element: lets keyboard users jump past the navigation. */
export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="type-label fixed left-4 top-2 z-[70] -translate-y-[200%] bg-accent px-4 py-3 text-on-accent transition-transform focus:translate-y-0"
    >
      {t("nav.skip")}
    </a>
  );
}
