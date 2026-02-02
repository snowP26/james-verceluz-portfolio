import { ModeToggle } from "./mode-switch";
import { useScrollSpy } from "./useScrollSpy";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact-me", label: "Contact Me" },
];

function scroll_to(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Navbar() {
  const activeSection = useScrollSpy(sections.map(s => s.id));
  const containerRef = useRef<HTMLDivElement>(null);

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (!containerRef.current || !activeSection) return;

    const activeButton = containerRef.current.querySelector(
      `[data-id="${activeSection}"]`
    ) as HTMLButtonElement | null;

    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <div className="bg-transparent flex min-h-16 items-center px-6 sticky top-0 z-50">
      {/* Center */}
      <nav
        ref={containerRef}
        className="relative left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-full px-3 min-h-10 bg-transparent dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm"
      >
        {/* Sliding indicator */}
        <span
          className="absolute top-1/2 inset-y-0 min-h-7  -translate-y-1/2  rounded-xl
          bg-blue-50 border-blue-500 dark:bg-neutral-800 dark:border-gray-400/30 border
          transition-all duration-300 ease-out "
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
        {sections.map(({ id, label }) => (
          <button
            key={id}
            data-id={id}
            onClick={() => scroll_to(id)}
            className={`relative z-10 px-5 rounded-full text-md transition-colors
              ${activeSection === id
                ? " text-blue-500 dark:text-zinc-300"
                : "font-medium text-zinc-700 hover:text-blue-500 hover:bg-white/30  hover:shadow-xs dark:text-zinc-300/50 hover:dark:bg-zinc-700 hover:dark:border-zinc-200/30 border border-transparent"
              }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Right */}
      <div className="ml-auto flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
}
