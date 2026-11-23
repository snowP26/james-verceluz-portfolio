"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/data";

/**
 * The spine: a red silk ribbon that unrolls down the margin as the record is
 * read. Each section is a node at its real place in the document, so the
 * ribbon reaches a node exactly when that section reaches the top.
 */
export function Rail({ activeId }: { activeId: string }) {
  const [progress, setProgress] = useState(0);
  const [stops, setStops] = useState<number[]>([]);

  useEffect(() => {
    let frame = 0;

    const scrollable = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const measureStops = () => {
      const max = scrollable();
      const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      setStops(
        SECTIONS.map(({ id }) => {
          const el = document.getElementById(id);
          if (!el || max <= 0) return 0;
          const top = el.getBoundingClientRect().top + window.scrollY - pad;
          return Math.min(1, Math.max(0, top / max));
        }),
      );
    };

    const measure = () => {
      frame = 0;
      const max = scrollable();
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    // Lazy images change the page height, which moves every node.
    const resize = new ResizeObserver(() => {
      measureStops();
      onScroll();
    });
    resize.observe(document.body);

    measure();
    measureStops();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside
      aria-hidden
      data-print="hide"
      className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-18 lg:block"
    >
      <div className="absolute inset-x-0 bottom-10 top-24">
        {/* The unwoven thread the ribbon lies along. */}
        <span className="absolute inset-y-0 left-6 w-px -translate-x-1/2 bg-rule-strong/60" />

        {/* The ribbon, cut swallow-tail where it has unrolled to. The shadow sits on a
            wrapper because clip-path would cut a shadow cast by the ribbon itself. */}
        <span
          className="absolute left-6 top-0 -translate-x-1/2 [filter:drop-shadow(0_1px_1.5px_rgb(42_36_28/0.35))]"
          style={{ height: `calc(${progress * 100}% + 8px)` }}
        >
          <span className="silk block h-full w-2 [clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-8px),0_100%)]" />
        </span>

        {stops.length > 0 &&
          SECTIONS.map((section, i) => {
            const reached = progress >= stops[i] - 0.001;
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                tabIndex={-1}
                className="pointer-events-auto group absolute left-6 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                style={{ top: `${stops[i] * 100}%` }}
              >
                <span className="sr-only">{section.label}</span>
                <span
                  className={`block size-2.5 rounded-full border-2 transition-colors duration-300 ${
                    reached
                      ? "border-accent bg-accent"
                      : "border-rule-strong bg-paper group-hover:border-accent"
                  }`}
                />
                <span
                  className={`annot-sm absolute left-7 top-1 whitespace-nowrap transition-opacity duration-300 [writing-mode:vertical-rl] ${
                    isActive
                      ? "text-accent opacity-100"
                      : "text-ink-3 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            );
          })}
      </div>
    </aside>
  );
}
