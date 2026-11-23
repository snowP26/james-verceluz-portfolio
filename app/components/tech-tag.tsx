import { TECH_ICONS } from "@/lib/tech-icons.generated";

/**
 * A stack tag. Renders the brand mark when one exists and falls back to the
 * label alone otherwise — a missing icon should never leave a gap or a
 * placeholder box. The site is light only, so only the light mark is used.
 */
export function TechTag({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  return (
    <li className="inline-flex items-center gap-2 border border-rule px-2.5 py-1.5 font-caps text-xs text-ink-2">
      {icon && (
        <span
          aria-hidden
          className="block size-3.5 shrink-0"
          dangerouslySetInnerHTML={{ __html: icon.light }}
        />
      )}
      {name}
    </li>
  );
}

/** Same mark, sized for the capabilities table where tags sit on their own. */
export function TechChip({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  return (
    <span className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-caps text-xs text-ink-2">
      {icon && (
        <span
          aria-hidden
          className="block size-4 shrink-0"
          dangerouslySetInnerHTML={{ __html: icon.light }}
        />
      )}
      {name}
    </span>
  );
}
