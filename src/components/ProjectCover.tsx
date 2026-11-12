"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectCover as Cover, ProjectSummary } from "@/data/projects";
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

const LINE = "var(--line-strong)";
const INK = "var(--accent-ink)";
const SOFT = "var(--accent-soft)";
const AMBER = "var(--signal)";

/**
 * A small drawing that says what the project is, so no two posters look
 * alike: the workflow steps, the occupancy curve, the load across bots…
 */
function Motif({ kind }: { kind: Cover["motif"] }) {
  const svg = {
    viewBox: "0 0 160 44",
    fill: "none",
    strokeWidth: 1.4,
    preserveAspectRatio: "xMaxYMin meet",
    className: "h-full w-full",
  };

  switch (kind) {
    // AutoInit: six steps on a wire
    case "flow":
      return (
        <svg {...svg}>
          <path d="M13 22h135" stroke={INK} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={3 + i * 29} y={17} width={10} height={10} fill="var(--surface-2)" stroke={INK} />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={3 + i * 29} y={17} width={10} height={10} fill={SOFT} />
          ))}
          <circle cx={105.5} cy={22} r={2.6} fill={AMBER} />
        </svg>
      );

    // TamaStat: the occupancy rate climbing to 100%
    case "chart": {
      const values = [75, 78, 82, 79, 85, 100];
      const points = values.map((v, i) => `${4 + i * 30.4},${(40 - ((v - 70) / 30) * 34).toFixed(1)}`);
      return (
        <svg {...svg}>
          <path d="M4 6h152" stroke={LINE} strokeDasharray="3 3" />
          <path d="M4 40h152" stroke={LINE} />
          <path d={`M4,40 L${points.join(" L")} L156,40 Z`} fill={SOFT} />
          <polyline points={points.join(" ")} stroke={INK} strokeWidth={1.8} />
          <circle cx={156} cy={6} r={3} fill={INK} />
        </svg>
      );
    }

    // LobbyBot: friends spread across bots, the newest one almost empty
    case "bars":
      return (
        <svg {...svg}>
          {[34, 32, 29, 23, 13, 3].map((h, i) => (
            <g key={i}>
              <rect x={5 + i * 26.5} y={40 - h} width={16} height={h} fill={i === 5 ? AMBER : INK} opacity={i === 5 ? 1 : 0.55} />
              <rect x={5 + i * 26.5} y={4} width={16} height={36} stroke={LINE} />
            </g>
          ))}
        </svg>
      );

    // Referendum: the two halves of an ElGamal ciphertext
    case "cipher":
      return (
        <svg {...svg} fontFamily="var(--font-mono)" fontSize={10.5} textAnchor="end" strokeWidth={0}>
          <text x={159} y={15} fill="var(--muted)">
            c1 = g^k mod p
          </text>
          <text x={159} y={35} fill={INK}>
            c2 = m · h^k mod p
          </text>
        </svg>
      );

    // Scroll Party: the two gauges of the game
    case "gauges":
      return (
        <svg {...svg}>
          <rect x={1} y={6} width={124} height={11} fill={AMBER} />
          <rect x={1} y={6} width={158} height={11} stroke={LINE} />
          <rect x={1} y={27} width={70} height={11} fill={INK} opacity={0.7} />
          <rect x={1} y={27} width={158} height={11} stroke={LINE} />
        </svg>
      );

    // Nuit de l'Info: one night, from dusk to dawn
    case "night":
      return (
        <svg {...svg}>
          <path d="M4 38h152" stroke={LINE} />
          <path d="M12 38 Q80 -22 148 38" stroke={LINE} strokeDasharray="3 3" />
          <circle cx={80} cy={11} r={7} fill={INK} />
          <circle cx={84} cy={8.5} r={6} fill="var(--surface-2)" />
          <circle cx={44} cy={15} r={1.2} fill={INK} />
          <circle cx={116} cy={13} r={1.2} fill={INK} />
          <circle cx={60} cy={5} r={1} fill={INK} opacity={0.7} />
          <circle cx={12} cy={38} r={2.4} fill={LINE} />
          <circle cx={148} cy={38} r={3.2} fill="var(--surface-2)" stroke={AMBER} />
        </svg>
      );

    // Backup: ten copies of a file, two actually stored
    case "dedup":
      return (
        <svg {...svg}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
            i < 2 ? (
              <rect key={i} x={2.5 + i * 15.7} y={16} width={11} height={11} fill={INK} />
            ) : (
              <rect key={i} x={2.5 + i * 15.7} y={16} width={11} height={11} stroke={LINE} strokeDasharray="2.5 2" />
            )
          )}
        </svg>
      );
  }
}

type CoverProps = Pick<ProjectSummary, "cover" | "category" | "year"> & {
  className?: string;
  /** Wide strip for the top of a project page: name and fact side by side once there is room. */
  banner?: boolean;
};

/**
 * Typographic poster of a project: its name as large as the frame allows, one
 * fact and a small drawing. Everything is sized in container units, so the
 * same poster works as a card cover and as the banner of a project page.
 */
export default function ProjectCover({ cover, category, year, className = "", banner = false }: CoverProps) {
  const { language, t } = useLanguage();
  const word = cover.word[language];
  // Fit the word to the frame (84% of its width, padding excluded).
  const vars = { "--word": `${Math.min(25, 84 / widthInEm(word)).toFixed(2)}cqw` } as CSSProperties;
  const wide = (classes: string) => (banner ? classes : "");

  return (
    <div className={`@container relative overflow-hidden bg-surface-2 text-foreground ${className}`} style={vars}>
      <div className="canvas-dots cover-zoom absolute inset-0" aria-hidden="true" />

      <div
        className={`pointer-events-none absolute right-[5.5cqw] top-[4.4cqw] h-[11.5cqw] w-[42cqw] ${wide(
          "@3xl:right-[3.4cqw] @3xl:top-[3cqw] @3xl:h-[5.6cqw] @3xl:w-[20cqw]"
        )}`}
        aria-hidden="true"
      >
        <Motif kind={cover.motif} />
      </div>

      <div className={`relative flex h-full flex-col justify-between p-[5.5cqw] ${wide("@3xl:p-[3.4cqw]")}`}>
        <p
          className={`type-label flex items-center gap-[2cqw] text-[max(0.625rem,2.1cqw)] text-muted ${wide(
            "@3xl:gap-[1cqw] @3xl:text-[max(0.6875rem,1.05cqw)]"
          )}`}
        >
          <span className={`h-[1.6cqw] w-[1.6cqw] shrink-0 bg-accent ${wide("@3xl:h-[0.8cqw] @3xl:w-[0.8cqw]")}`} aria-hidden="true" />
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
            className={`flex items-end justify-between gap-[4cqw] border-t border-line-strong pt-[3.2cqw] ${wide(
              "@3xl:flex-col @3xl:items-start @3xl:justify-end @3xl:gap-[0.8cqw] @3xl:border-l @3xl:border-t-0 @3xl:pb-[0.4cqw] @3xl:pl-[3cqw] @3xl:pt-0"
            )}`}
          >
            <p className={`type-display whitespace-nowrap text-[9cqw] text-accent-ink ${wide("@3xl:text-[5cqw]")}`}>{cover.metric[language]}</p>
            <p
              className={`max-w-[50%] text-right text-[max(0.7rem,2.5cqw)] leading-snug text-muted ${wide(
                "@3xl:max-w-none @3xl:whitespace-nowrap @3xl:text-left @3xl:text-[max(0.85rem,1.45cqw)]"
              )}`}
            >
              {localize(cover.caption, language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
