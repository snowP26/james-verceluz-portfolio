"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className="flex size-9 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-rule-strong hover:text-ink"
    >
      {/* Switched by the theme class on <html>, so server and client markup
          match and there is no mount gate or flash. */}
      <Sun className="size-4 dark:hidden" strokeWidth={1.75} />
      <Moon className="hidden size-4 dark:block" strokeWidth={1.75} />
    </button>
  );
}
