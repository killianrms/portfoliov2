import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  /** A short fact about the section, shown beside the title (period, count…). */
  meta?: ReactNode;
}

export default function SectionHeader({ title, meta }: SectionHeaderProps) {
  return (
    <header className="reveal mb-8 flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between md:mb-14 md:pb-7">
      <h2 className="type-display text-[3.6rem] sm:text-7xl lg:text-[6.75rem]">{title}</h2>
      {meta && (
        <p className="type-label flex items-center gap-2.5 text-muted sm:pb-1.5 lg:pb-3">
          <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
          {meta}
        </p>
      )}
    </header>
  );
}
