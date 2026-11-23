"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PROFILE, RESUME_PATH, SECTIONS } from "@/lib/data";

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

  // The menu is hidden at xl; never leave an invisible modal holding the page.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 80rem)");
    const onChange = () => wide.matches && setMenuOpen(false);
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        data-print="hide"
        className={`sticky top-0 z-50 border-b transition-colors duration-300 lg:pl-18 ${
          scrolled
            ? "border-rule bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[76rem] items-center gap-6 px-5 sm:px-8">
          <a
            href="#index"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${PROFILE.shortName}, back to top`}
          >
            <span aria-hidden className="bookmark self-start text-[1.375rem]" />
            <span className="font-display text-xl leading-none text-accent">
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
                      className={`annot-sm block px-3 py-2.5 transition-colors ${
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
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="annot-sm tag-outline group inline-flex h-10 items-center gap-2 pl-3.5 text-ink transition-colors hover:text-accent"
            >
              Resumé
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center border border-rule text-ink-2 transition-colors hover:text-ink xl:hidden"
            >
              <Menu className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Contents page: the numbering is the point. */}
      <dialog
        ref={menuRef}
        aria-label="Menu"
        onClose={() => setMenuOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-transparent xl:hidden"
      >
        <div className="paper-grain absolute inset-0 opacity-60" aria-hidden />
        <div className="relative flex h-full flex-col">
          <div className="flex h-16 items-center gap-2 border-b border-rule px-5 sm:px-8">
            <span className="annot text-ink-3">Contents</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="ml-auto flex size-9 items-center justify-center border border-rule text-ink-2"
            >
              <X className="size-4" strokeWidth={1.75} />
            </button>
          </div>

          <nav aria-label="Sections" className="flex-1 overflow-y-auto px-5 py-4 sm:px-8">
            <ul>
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={section.id === activeId ? "true" : undefined}
                    className="flex items-center gap-4 border-b border-rule py-5"
                  >
                    <span
                      aria-hidden
                      className={`bookmark text-2xl ${
                        section.id === activeId ? "" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`display-sm ${
                        section.id === activeId ? "text-accent" : "text-ink"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="annot tag mt-8 flex min-h-12 items-center justify-center gap-2.5 bg-accent px-5 py-3 text-accent-ink"
            >
              Resumé (PDF)
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </a>
          </nav>
        </div>
      </dialog>
    </>
  );
}
