"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState, useCallback } from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = useMemo(
    () => mounted && resolvedTheme === "dark",
    [mounted, resolvedTheme]
  );

  const toggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  // Prevent incorrect initial state + layout shift
  if (!mounted) {
    return (
      <div className="h-8 w-16 rounded-full bg-gray-200 dark:bg-zinc-800" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="relative flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-zinc-800 transition-colors cursor-pointer"
    >
      <span
        className={[
          "absolute left-1 flex h-6 w-6 items-center justify-center rounded-full ",
          "bg-white dark:bg-black shadow-md",
          "transition-transform duration-300 will-change-transform",
          isDark ? "translate-x-8" : "translate-x-0",
        ].join(" ")}
      >
        <Sun className={`h-4 w-4 text-black dark:text-white ${isDark ? "hidden" : "block"}`} />
        <Moon className={`h-4 w-4 text-black dark:text-white ${isDark ? "block" : "hidden"}`} />
      </span>
    </button>
  );
}
