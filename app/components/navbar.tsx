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
    <div className="flex min-h-20 items-center px-6 sticky top-0 z-50 mt-4">
      {/* Center */}
      <nav
        ref={containerRef}
        className="relative left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-3 py-1
        bg-gray-200 dark:bg-zinc-900/70 backdrop-blur-md
        border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm"
      >
        {/* Sliding indicator */}
        <span
          className="absolute top-1/2 -translate-y-1/2 h-10.5 rounded-full
          bg-white dark:bg-zinc-700 shadow-md
          transition-all duration-300 ease-out"
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
            className={`relative z-10 px-5 py-3 rounded-full text-md transition-colors
              ${
                activeSection === id
                  ? " text-blue-500 dark:text-blue-400"  
                  : "font-medium text-zinc-700 hover:text-blue-500  hover:bg-white/30  hover:shadow-xs dark:text-zinc-300 hover:dark:bg-zinc-700 "
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
