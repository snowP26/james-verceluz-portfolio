"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-16 items-center rounded-full
        bg-gray-200 dark:bg-zinc-800
        transition-all duration-300
      "
    >
      <span
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full
          bg-white  dark:bg-black
          shadow-md
          transition-all duration-300
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-black" />
        )}
      </span>
    </button>
  );
}
