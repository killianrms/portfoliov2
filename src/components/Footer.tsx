"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const BUILD_SHA = process.env.NEXT_PUBLIC_BUILD_SHA;
const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE;

export default function Footer() {
  const { t, path } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="type-label mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 text-muted sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="flex items-center gap-3">
          <span className="type-display grid h-6 w-6 place-items-center bg-accent pt-px text-base text-on-accent" aria-hidden="true">
            KR
          </span>
          © {BUILD_DATE?.slice(0, 4)} Killian Ramus. {t("footer.rights")}
        </span>
        <span className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-ink" aria-hidden="true" />
          {t("footer.build")} {BUILD_SHA} · {BUILD_DATE}
        </span>
        <span className="flex items-center gap-6">
          <Link href={path("/legal")} className="transition-colors hover:text-foreground">
            {t("nav.legal")}
          </Link>
          <a href="#top" className="text-foreground transition-colors hover:text-accent-ink">
            ↑ {t("footer.top")}
          </a>
        </span>
      </div>
    </footer>
  );
}
