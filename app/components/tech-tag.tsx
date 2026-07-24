import { TECH_ICONS } from "@/lib/tech-icons.generated";

/**
 * A stack tag. Renders the brand mark when one exists and falls back to the
 * label alone otherwise — a missing icon should never leave a gap or a
 * placeholder box.
 *
 * Light and dark marks are both emitted and switched by the theme class, so
 * there is no mount gate and no hydration mismatch.
 */
export function TechTag({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  return (
    <li className="annot-sm inline-flex items-center gap-2 border border-rule px-2.5 py-1.5 text-ink-3">
      {icon && (
        <span aria-hidden className="relative block size-3.5 shrink-0">
          <span
            className={`block size-full ${icon.dark ? "dark:hidden" : ""}`}
            dangerouslySetInnerHTML={{ __html: icon.light }}
          />
          {icon.dark && (
            <span
              className="hidden size-full dark:block"
              dangerouslySetInnerHTML={{ __html: icon.dark }}
            />
          )}
        </span>
      )}
      {name}
    </li>
  );
}

/** Same mark, sized for the capabilities table where tags sit on their own. */
export function TechChip({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  return (
    <span className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-mono text-xs text-ink-2">
      {icon && (
        <span aria-hidden className="relative block size-4 shrink-0">
          <span
            className={`block size-full ${icon.dark ? "dark:hidden" : ""}`}
            dangerouslySetInnerHTML={{ __html: icon.light }}
          />
          {icon.dark && (
            <span
              className="hidden size-full dark:block"
              dangerouslySetInnerHTML={{ __html: icon.dark }}
            />
          )}
        </span>
      )}
      {name}
    </span>
  );
}
