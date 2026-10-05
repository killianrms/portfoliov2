import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  /** A short fact about the section, shown in the label row (period, count…). */
  meta?: ReactNode;
}

export default function SectionHeader({ title, meta }: SectionHeaderProps) {
  return (
    <header className="mb-10 md:mb-16">
      <div className="type-label flex items-center gap-3 text-muted">
        <span className="h-2 w-2 bg-accent" aria-hidden="true" />
        <span className="h-px flex-1 bg-line" />
        {meta && <span>{meta}</span>}
      </div>
      <h2 className="type-wide mt-5 text-balance text-[2.6rem] sm:text-6xl lg:text-7xl">{title}</h2>
    </header>
  );
}
