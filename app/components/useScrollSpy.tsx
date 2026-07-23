import { useEffect, useState } from "react";

/**
 * Reports which section owns the reading line (a third down the viewport).
 * Always resolves to a section so the rail never blanks out — falls back to
 * the first section above the line, or the first section overall.
 */
export function useScrollSpy(ids: string[]) {
  const key = ids.join("|");
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const sectionIds = key.split("|").filter(Boolean);
    if (sectionIds.length === 0) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.34;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      // The bottom of the page always belongs to the last section, however short.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActiveId(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key]);

  return activeId;
}
