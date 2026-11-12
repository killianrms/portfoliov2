"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectSummary } from "@/data/projects";
import { localize } from "@/lib/typo";

// Approximate advance widths of the condensed capitals, in em. CSS cannot fit
// text to a box, so the poster sizes its word from this estimate.
const NARROW = "I1.,'’:!|";
const WIDE = "MW";
function widthInEm(text: string): number {
  let width = 0;
  for (const char of text.toUpperCase()) {
    if (char === " ") width += 0.34;
    else if (NARROW.includes(char)) width += 0.29;
    else if (WIDE.includes(char)) width += 0.68;
    else width += 0.52;
  }
  return width;
}

type CoverProps = Pick<ProjectSummary, "cover" | "category" | "year"> & {
  className?: string;
  /** Wide strip for the top of a project page: name and fact side by side once there is room. */
  banner?: boolean;
};

/**
 * Typographic poster of a project: its name as large as the frame allows, and
 * one fact. Everything is sized in container units, so the same poster works
 * as a card cover and as the banner of a project page.
 */
export default function ProjectCover({ cover, category, year, className = "", banner = false }: CoverProps) {
  const { language, t } = useLanguage();
  const word = cover.word[language];
  const accent = cover.tone === "accent";
  // Fit the word to the frame (84% of its width, padding excluded).
  const vars = { "--word": `${Math.min(25, 84 / widthInEm(word)).toFixed(2)}cqw` } as CSSProperties;
  const wide = (classes: string) => (banner ? classes : "");

  return (
    <div
      className={`@container relative overflow-hidden ${accent ? "bg-accent text-on-accent" : "bg-surface-2 text-foreground"} ${className}`}
      style={vars}
    >
      <div className={`canvas-dots cover-zoom absolute inset-0 ${accent ? "opacity-70" : ""}`} aria-hidden="true" />
      <div className={`relative flex h-full flex-col justify-between p-[5.5cqw] ${wide("@3xl:p-[3.4cqw]")}`}>
        <p
          className={`type-label flex items-center gap-[2cqw] text-[max(0.625rem,2.1cqw)] ${wide("@3xl:gap-[1cqw] @3xl:text-[max(0.6875rem,1.05cqw)]")} ${
            accent ? "text-on-accent/80" : "text-muted"
          }`}
        >
          <span
            className={`h-[1.6cqw] w-[1.6cqw] shrink-0 ${wide("@3xl:h-[0.8cqw] @3xl:w-[0.8cqw]")} ${accent ? "bg-on-accent" : "bg-accent"}`}
            aria-hidden="true"
          />
          {t(`projects.filter.${category}`)} · {year}
        </p>

        <div className={`contents ${wide("@3xl:flex @3xl:items-end @3xl:justify-between @3xl:gap-[4cqw]")}`}>
          <p
            className={`type-display whitespace-nowrap text-[length:var(--word)] ${wide("@3xl:text-[length:calc(var(--word)*0.56)]")}`}
            aria-hidden="true"
          >
            {word}
          </p>

          <div
            className={`flex items-end justify-between gap-[4cqw] border-t pt-[3.2cqw] ${wide(
              "@3xl:flex-col @3xl:items-start @3xl:justify-end @3xl:gap-[0.8cqw] @3xl:border-l @3xl:border-t-0 @3xl:pb-[0.4cqw] @3xl:pl-[3cqw] @3xl:pt-0"
            )} ${accent ? "border-on-accent/30" : "border-line-strong"}`}
          >
            <p className={`type-display whitespace-nowrap text-[9cqw] ${wide("@3xl:text-[5cqw]")} ${accent ? "" : "text-accent-ink"}`}>
              {cover.metric[language]}
            </p>
            <p
              className={`max-w-[50%] text-right text-[max(0.7rem,2.5cqw)] leading-snug ${wide(
                "@3xl:max-w-none @3xl:whitespace-nowrap @3xl:text-left @3xl:text-[max(0.85rem,1.45cqw)]"
              )} ${accent ? "text-on-accent/85" : "text-muted"}`}
            >
              {localize(cover.caption, language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
