"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-switch";
import { PROFILE, SECTIONS } from "@/lib/data";

export function Navbar({ activeId }: { activeId: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The menu is a full-screen overlay; the page behind it must not scroll.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-print="hide"
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-rule bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[76rem] items-center gap-6 px-5 sm:px-8">
          <a
            href="#index"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${PROFILE.shortName} — back to top`}
          >
            <span aria-hidden className="block h-3 w-px bg-accent" />
            <span className="font-display text-[0.8125rem] font-extrabold uppercase leading-none tracking-[-0.02em] text-ink">
              {PROFILE.shortName}
            </span>
          </a>

          <nav aria-label="Sections" className="ml-auto hidden xl:block">
            <ul className="flex items-center gap-1">
              {SECTIONS.filter((s) => s.id !== "index").map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`annot-sm block px-3 py-2 transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-ink-3 hover:text-ink"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-4">
            <Link
              href="/resume"
              className="annot-sm hidden items-center gap-2 border border-rule px-3.5 py-2.5 text-ink-2 transition-colors hover:border-accent-edge hover:text-accent sm:inline-flex"
            >
              <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
              Resume
            </Link>
            <ModeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center border border-rule text-ink-2 transition-colors hover:text-ink xl:hidden"
            >
              <Menu className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Contents page — the numbering is the point. */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-paper xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="sheet-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex h-full flex-col">
            <div className="flex h-16 items-center border-b border-rule px-5 sm:px-8">
              <span className="annot text-ink-3">Contents</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="ml-auto flex size-9 items-center justify-center border border-rule text-ink-2"
              >
                <X className="size-4" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4 sm:px-8">
              <ul>
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-5 border-b border-rule py-5"
                    >
                      <span
                        className={`annot-sm tabular-nums ${
                          section.id === activeId ? "text-accent" : "text-ink-3"
                        }`}
                      >
                        {section.index}
                      </span>
                      <span className="display-sm text-ink">
                        {section.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="annot mt-8 flex items-center justify-center gap-2.5 bg-accent px-5 py-4 text-accent-ink"
              >
                <ArrowDownToLine className="size-4" strokeWidth={1.75} />
                Resume
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
