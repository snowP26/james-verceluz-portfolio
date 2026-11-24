import { TECH_ICONS } from "@/lib/tech-icons.generated";

/** The brand mark, with its dark variant when the icon set ships one. */
function Mark({ name, size }: { name: string; size: string }) {
  const icon = TECH_ICONS[name];
  if (!icon) return null;
  return (
    <>
      <span
        aria-hidden
        className={`mark-light block shrink-0 ${size}`}
        dangerouslySetInnerHTML={{ __html: icon.light }}
      />
      {icon.dark && (
        <span
          aria-hidden
          className={`mark-dark shrink-0 ${size}`}
          dangerouslySetInnerHTML={{ __html: icon.dark }}
        />
      )}
    </>
  );
}

/**
 * A stack tag. Renders the brand mark when one exists and the label alone
 * otherwise; a missing icon never leaves a gap or a placeholder box.
 */
export function TechTag({ name }: { name: string }) {
  return (
    <li className="inline-flex h-7 items-center gap-1.5 rounded-full bg-surface-2 px-2.5 text-xs font-medium text-ink-2">
      <Mark name={name} size="size-3.5" />
      {name}
    </li>
  );
}

/** Same mark, a size up, for the capabilities table where tags sit on their own. */
export function TechChip({ name }: { name: string }) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-full border border-line bg-surface px-3 text-[0.8125rem] font-medium text-ink-2">
      <Mark name={name} size="size-4" />
      {name}
    </span>
  );
}
