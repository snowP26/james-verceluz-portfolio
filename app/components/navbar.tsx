"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PROFILE, RESUME_PATH, SECTIONS } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const NAV = SECTIONS.filter((s) => s.id !== "index");

/** Desktop: the pinned column's section list. The active line grows and turns accent. */
export function SectionNav({ activeId }: { activeId: string }) {
  return (
    <nav aria-label="Sections" data-print="hide">
      <ul>
        {NAV.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? "true" : undefined}
                className="group flex items-center gap-3 py-1.5 text-sm font-medium"
              >
                <span
                  aria-hidden
                  className={`h-px transition-[width,background-color] duration-300 ease-out ${
                    active
                      ? "w-14 bg-accent"
                      : "w-6 bg-line-strong group-hover:w-10 group-hover:bg-ink-3"
                  }`}
                />
                <span
                  className={`transition-colors ${
                    active ? "text-ink" : "text-ink-3 group-hover:text-ink"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Below 1024px: a slim sticky bar with the resumé one tap away, and a full-screen menu. */
export function Navbar({ activeId }: { activeId: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Native modal: focus trap, Esc, and focus return to the trigger come free.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (menuOpen && !menu.open) {
      menu.showModal();
      closeRef.current?.focus();
    } else if (!menuOpen && menu.open) {
      menu.close();
    }
  }, [menuOpen]);

  // The menu covers the page; the page behind it must not scroll.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // The bar is hidden at lg; never leave an invisible modal holding the page.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 64rem)");
    const onChange = () => wide.matches && setMenuOpen(false);
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        data-print="hide"
        className={`sticky top-0 z-50 border-b bg-bg transition-colors duration-200 lg:hidden ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-5 sm:px-8">
          <a
            href="#index"
            className="text-[0.9375rem] font-semibold tracking-tight text-ink"
            aria-label={`${PROFILE.shortName}, back to top`}
          >
            {PROFILE.shortName}
          </a>

          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
          >
            Resumé
            <ArrowUpRight aria-hidden className="size-3.5 text-ink-3" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center rounded-lg text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <dialog
        ref={menuRef}
        aria-label="Menu"
        onClose={() => setMenuOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-ink backdrop:bg-transparent lg:hidden"
      >
        <div className="mx-auto flex h-full max-w-2xl flex-col">
          <div className="flex h-14 items-center gap-2 border-b border-line px-5 sm:px-8">
            <span className="text-[0.9375rem] font-semibold tracking-tight">{PROFILE.shortName}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="ml-auto flex size-9 items-center justify-center rounded-lg text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav aria-label="Sections" className="flex-1 overflow-y-auto px-5 py-4 sm:px-8">
            <ul>
              {NAV.map((section) => {
                const active = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "true" : undefined}
                      className="flex items-center gap-2.5 border-b border-line py-4"
                    >
                      <span
                        className={`text-2xl font-semibold tracking-tight ${
                          active ? "text-ink" : "text-ink-3"
                        }`}
                      >
                        {section.label}
                      </span>
                      {active && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex h-12 items-center justify-center gap-2 rounded-lg bg-ink text-[0.9375rem] font-medium text-bg"
            >
              Resumé (PDF)
              <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
            </a>

            <div className="mt-8 flex items-center justify-between gap-4">
              <span className="text-sm text-ink-3">Theme</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
