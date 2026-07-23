"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/data";

/**
 * The dimension rail — a drawing's margin scale.
 * A continuous line down the page, ticked once per section, filled to the
 * reader's position. The one place this page spends its boldness.
 */
export function Rail({ activeId }: { activeId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeLabel =
    SECTIONS.find((s) => s.id === activeId)?.label ?? SECTIONS[0].label;

  return (
    <aside
      aria-label="Page sections"
      data-print="hide"
      className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-18 border-r border-rule lg:block"
    >
      {/* Minor graduations — 8px, matching the sheet grid. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1.5 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--rule) 0 1px, transparent 1px 8px)",
        }}
      />

      <div className="flex h-full flex-col items-center justify-center gap-0 py-24">
        {/* The dimension line itself, filled to reading position. */}
        <div className="relative flex flex-col items-stretch">
          <span
            aria-hidden
            className="absolute inset-y-0 left-6 w-px bg-rule"
          />
          <span
            aria-hidden
            className="absolute left-6 top-0 w-px origin-top bg-accent transition-transform duration-200 ease-out"
            style={{ height: "100%", transform: `scaleY(${progress})` }}
          />

          {SECTIONS.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="pointer-events-auto group relative flex h-11 items-center gap-0"
              >
                <span className="sr-only">{section.label}</span>
                <span
                  aria-hidden
                  className={`annot-sm w-6 text-right tabular-nums transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-ink-3 group-hover:text-ink-2"
                  }`}
                >
                  {section.index}
                </span>
                <span
                  aria-hidden
                  className={`ml-2 h-px transition-all duration-300 ease-out ${
                    isActive
                      ? "w-6 bg-accent"
                      : "w-2.5 bg-rule-strong group-hover:w-4"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Margin annotation: where you are, spelled out. */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <span
            className="annot-sm text-ink-3"
            style={{ writingMode: "vertical-rl" }}
          >
            {activeLabel}
          </span>
          <span className="annot-sm tabular-nums text-ink-3">
            {String(Math.round(progress * 100)).padStart(2, "0")}%
          </span>
        </div>
      </div>
    </aside>
  );
}
