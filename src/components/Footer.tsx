"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const BUILD_SHA = process.env.NEXT_PUBLIC_BUILD_SHA;
const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE;

export default function Footer() {
  const { t, path } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="@container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <p
          className="type-display select-none whitespace-nowrap pt-10 text-[16vw] leading-[0.78] text-surface supports-[font-size:1cqw]:text-[17.5cqw]"
          aria-hidden="true"
        >
          Killian Ramus
        </p>
        <div className="type-label flex flex-col gap-3 border-t border-line py-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {BUILD_DATE?.slice(0, 4)} Killian Ramus. {t("footer.rights")}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t("footer.build")} {BUILD_SHA} · {BUILD_DATE}
          </span>
          <Link href={path("/legal")} className="hover:text-foreground transition-colors">
            {t("nav.legal")}
          </Link>
          <a href="#" className="text-foreground hover:text-accent-ink transition-colors">
            ↑ {t("footer.top")}
          </a>
        </div>
      </div>
    </footer>
  );
}
