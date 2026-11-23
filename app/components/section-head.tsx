import type { ReactNode } from "react";

type SectionHeadProps = {
  title: string;
  /** Right-aligned annotation: a count, a date, a status. */
  meta?: ReactNode;
  /** The resumé page's head is its h1; every section on the home page is an h2. */
  as?: "h1" | "h2";
};

/** A ledger page's top rule with a silk bookmark hanging from it. */
export function SectionHead({ title, meta, as: Heading = "h2" }: SectionHeadProps) {
  return (
    <header className="relative mb-10 border-t border-rule-strong/70 pt-6 sm:mb-14">
      <span
        aria-hidden
        className="absolute -top-px left-0 h-12 w-4 bg-accent [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pl-9">
        <Heading className="display-md text-accent">{title}</Heading>
        {meta ? <p className="annot text-ink-3">{meta}</p> : null}
      </div>
    </header>
  );
}
