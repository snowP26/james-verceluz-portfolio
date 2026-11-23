"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type CopyFieldProps = {
  /** What is shown and copied. */
  value: string;
  /** Makes the value itself a link, e.g. `mailto:` or `tel:`. */
  href?: string;
  /** Spoken name of the value, e.g. "email address". */
  name: string;
  className?: string;
};

/** The value opens its app; the button beside it copies. Feedback lands in place. */
export function CopyField({ value, href, name, className = "" }: CopyFieldProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
      timer.current = setTimeout(() => setState("idle"), 1800);
    } catch {
      // Stays visible until the next attempt: the reader needs time to act on it.
      setState("failed");
    }
  }, [value]);

  // Break an email before the @ rather than mid-word on narrow screens.
  const at = value.indexOf("@");
  const text =
    at > 0 ? (
      <>
        {value.slice(0, at)}
        <wbr />
        {value.slice(at)}
      </>
    ) : (
      value
    );
  const textClass = "min-w-0 select-text [overflow-wrap:anywhere]";

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="flex items-center gap-1">
        {href ? (
          <a href={href} className={`${textClass} -my-2.5 py-2.5 transition-colors hover:text-accent`}>
            {text}
          </a>
        ) : (
          <span className={textClass}>{text}</span>
        )}
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${name}`}
          className="-my-3 flex size-11 shrink-0 items-center justify-center text-ink-3 transition-colors hover:text-accent"
        >
          {state === "copied" ? (
            <Check aria-hidden className="size-3.5 text-accent" strokeWidth={2.25} />
          ) : (
            <Copy aria-hidden className="size-3.5" />
          )}
        </button>
      </div>
      <p
        aria-live="polite"
        className={state === "failed" ? "mt-1.5 text-xs leading-snug text-ink-3" : "sr-only"}
      >
        {state === "copied"
          ? `Copied ${value}`
          : state === "failed"
            ? `Couldn't copy. Select the ${name} and copy it instead.`
            : ""}
      </p>
    </div>
  );
}
