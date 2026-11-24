"use client";

import { useId, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "system" | "light" | "dark";

const OPTIONS = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
] as const;

// The pinned theme lives on <html data-theme>, set before paint by the layout script.
const subscribe = (onChange: () => void) => {
  window.addEventListener("themechange", onChange);
  return () => window.removeEventListener("themechange", onChange);
};
const read = (): Theme => {
  const value = document.documentElement.getAttribute("data-theme");
  return value === "light" || value === "dark" ? value : "system";
};

function choose(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // Storage blocked: the choice still holds for this visit.
  }
  window.dispatchEvent(new Event("themechange"));
}

/** System / Light / Dark as native radios, so arrow keys work for free. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, read, () => "system" as Theme);
  // Two toggles can be on the page (column and menu); each needs its own radio group.
  const name = useId();

  return (
    <fieldset
      data-print="hide"
      className={cn("inline-flex rounded-lg border border-line bg-surface p-0.5", className)}
    >
      <legend className="sr-only">Theme</legend>
      {OPTIONS.map(({ value, label, Icon }) => (
        <label
          key={value}
          title={label}
          className="relative flex size-8 cursor-pointer items-center justify-center rounded-md text-ink-3 transition-colors hover:text-ink has-checked:bg-surface-2 has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-accent"
        >
          <input
            type="radio"
            name={name}
            value={value}
            checked={theme === value}
            onChange={() => choose(value)}
            className="sr-only"
          />
          <Icon aria-hidden className="size-4" strokeWidth={1.75} />
          <span className="sr-only">{label}</span>
        </label>
      ))}
    </fieldset>
  );
}
