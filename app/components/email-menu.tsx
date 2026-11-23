"use client";

import { Check, Copy, ExternalLink, Mail } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { CONTACT } from "@/lib/data";

type EmailMenuProps = {
  /** Prefilled subject line, so the message arrives already labelled. */
  subject: string;
  /** Contents of the trigger. */
  children: ReactNode;
  triggerClassName?: string;
  /** Which edge of the trigger the menu aligns to. */
  align?: "left" | "right";
};

/**
 * "Email me" for whatever the visitor writes with: a mailto: link does nothing
 * for people who live in Gmail or Outlook on the web, so they pick.
 */
export function EmailMenu({ subject, children, triggerClassName = "", align = "left" }: EmailMenuProps) {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState<"idle" | "copied" | "failed">("idle");
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const to = CONTACT.email;
  const su = encodeURIComponent(subject);
  const options = [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`, web: true },
    { label: "Outlook", href: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}`, web: true },
    { label: "Mail app", href: `${CONTACT.mailto}?subject=${su}`, web: false },
  ];

  // Close on Escape (focus back to the trigger) and on any press outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPress = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPress);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPress);
    };
  }, [open]);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(to);
      setCopy("copied");
      setTimeout(() => setCopy("idle"), 1800);
    } catch {
      setCopy("failed");
    }
  };

  const item =
    "flex min-h-11 w-full items-center justify-between gap-6 px-4 text-left text-[0.9375rem] text-ink transition-colors hover:bg-accent-soft hover:text-accent";

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={triggerClassName}
      >
        {children}
      </button>

      {open && (
        <div
          id={listId}
          className={`plate absolute top-full z-30 mt-2 w-64 border border-rule-strong bg-paper-raised pb-2 pt-9 shadow-[0_10px_30px_-12px_rgb(42_36_28/0.45)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <p className="annot-sm px-4 pb-2 text-ink-3">Write with</p>
          <ul>
            {options.map((option) => (
              <li key={option.label}>
                <a
                  href={option.href}
                  {...(option.web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className={item}
                >
                  {option.label}
                  {option.web ? (
                    <ExternalLink aria-hidden className="size-3.5 text-ink-3" strokeWidth={1.75} />
                  ) : (
                    <Mail aria-hidden className="size-3.5 text-ink-3" strokeWidth={1.75} />
                  )}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-rule pt-1">
              <button type="button" onClick={copyAddress} className={item}>
                {copy === "copied" ? "Copied" : "Copy address"}
                {copy === "copied" ? (
                  <Check aria-hidden className="size-3.5 text-accent" strokeWidth={2.25} />
                ) : (
                  <Copy aria-hidden className="size-3.5 text-ink-3" strokeWidth={1.75} />
                )}
              </button>
            </li>
          </ul>
          <p
            aria-live="polite"
            className={copy === "failed" ? "px-4 pb-1 pt-1 text-xs leading-snug text-ink-3" : "sr-only"}
          >
            {copy === "copied"
              ? `Copied ${to}`
              : copy === "failed"
                ? `Couldn't copy. The address is ${to}.`
                : ""}
          </p>
        </div>
      )}
    </div>
  );
}
