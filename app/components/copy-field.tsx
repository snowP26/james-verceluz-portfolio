"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type CopyFieldProps = {
  /** What lands on the clipboard. */
  value: string;
  /** What the reader sees. Defaults to the value. */
  label?: string;
  className?: string;
};

/** Feedback lands where the action happened — no toast, no dialog. */
export function CopyField({ value, label, className = "" }: CopyFieldProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 1800);
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`group flex w-full items-start gap-2 text-left transition-colors hover:text-accent ${className}`}
    >
      {/* Emails and numbers have no spaces to break on — let them wrap
          anywhere rather than forcing a 250px minimum on narrow screens. */}
      <span className="min-w-0 [overflow-wrap:anywhere]">{label ?? value}</span>
      <span aria-hidden className="mt-0.5 shrink-0">
        {state === "copied" ? (
          <Check className="size-3.5 text-accent" strokeWidth={2.25} />
        ) : (
          <Copy className="size-3.5 text-ink-3 transition-colors group-hover:text-accent" />
        )}
      </span>
      <span aria-live="polite" className="sr-only">
        {state === "copied"
          ? `Copied ${value}`
          : state === "failed"
            ? "Copy failed. Select the text to copy it manually."
            : ""}
      </span>
    </button>
  );
}
