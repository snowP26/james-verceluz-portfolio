import type { ReactNode } from "react";

type SectionHeadProps = {
  index: string;
  title: string;
  /** Right-aligned annotation — a count, a date span, a status. */
  meta?: ReactNode;
};

/**
 * A callout on the sheet: numbered index, a rule drawn to the page edge,
 * then the title. The numbering is real — sections are read in order.
 */
export function SectionHead({ index, title, meta }: SectionHeadProps) {
  return (
    <header className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4">
        <span className="annot text-accent tabular-nums">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-rule" />
        {meta ? <span className="annot text-ink-3">{meta}</span> : null}
      </div>
      <h2 className="display-md mt-4 text-ink">{title}</h2>
    </header>
  );
}
