import { JOURNEY } from "@/lib/data";

const W = 600;
const H = 64;
const N = JOURNEY.length;
// Each node sits on its column's left edge, so the wave meets it at i/N of the width.
const x = (i: number) => (i / N) * W;
const y = (i: number) => (i % 2 === 0 ? 14 : 50);

/** A smooth wave through stops [from, to]. */
function wave(from: number, to: number) {
  let d = `M ${x(from)} ${y(from)}`;
  for (let i = from; i < to; i++) {
    const mid = (x(i) + x(i + 1)) / 2;
    d += ` C ${mid} ${y(i)}, ${mid} ${y(i + 1)}, ${x(i + 1)} ${y(i + 1)}`;
  }
  return d;
}

// The ribbon is solid through shipped work and becomes thread where work is still open.
const lastKnown = JOURNEY.findLastIndex((stop) => !stop.inProgress);

// When the 1.6s eased draw reaches node i (it sits at i/N of the width).
// shortcut: a linear fit to the ease-in-out curve, good to ~60ms; recompute if the easing changes.
const arrival = (i: number) => 700 + 1600 * (i === 0 ? 0 : 0.5 + (i / N - 0.5) * 0.6);

/**
 * The custody line: one ribbon through every stop, each dated and linked to
 * its evidence. A wave across wide screens, a straight spine on narrow ones.
 */
export function Journey() {
  return (
    <section
      aria-labelledby="journey-title"
      className="relative border border-rule-strong/60 bg-paper-raised/60 lg:pl-14"
    >
      {/* The bookmark label, read down the margin on wide screens. */}
      <h2
        id="journey-title"
        className="annot flex items-center gap-2 border-b border-rule px-5 py-3 text-accent lg:absolute lg:inset-y-6 lg:left-0 lg:w-10 lg:justify-center lg:border-0 lg:bg-accent lg:px-0 lg:py-0 lg:text-accent-ink lg:[clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-12px),0_100%)]"
      >
        <span className="lg:rotate-180 lg:[writing-mode:vertical-rl]">The journey</span>
      </h2>

      <div className="relative px-5 py-6 sm:px-8 lg:pb-7 lg:pt-8">
        {/* Wide: the wave. */}
        <svg
          aria-hidden
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="ribbon-draw absolute inset-x-8 top-8 hidden h-16 w-[calc(100%-4rem)] overflow-visible lg:block"
          style={{ "--d": "700ms" } as React.CSSProperties}
        >
          <defs>
            <filter id="ribbon-lift" x="-2%" y="-60%" width="104%" height="220%">
              <feDropShadow dx="0" dy="1.6" stdDeviation="1.1" floodColor="#2a241c" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Silk, built up in layers: dark selvedge, the ribbon's face, then its sheen. */}
          <g
            fill="none"
            strokeLinecap="butt"
            vectorEffect="non-scaling-stroke"
            filter="url(#ribbon-lift)"
          >
            <path d={wave(0, lastKnown)} stroke="#7e1814" strokeWidth="9" vectorEffect="non-scaling-stroke" />
            <path d={wave(0, lastKnown)} stroke="var(--accent)" strokeWidth="6.5" vectorEffect="non-scaling-stroke" />
            <path d={wave(0, lastKnown)} stroke="#cf5145" strokeOpacity="0.75" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </g>
          <path
            d={wave(lastKnown, N - 1)}
            fill="none"
            stroke="var(--thread)"
            strokeWidth="2.5"
            strokeDasharray="5 7"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="relative grid lg:grid-cols-6">
          {JOURNEY.map((stop, i) => {
            const external = stop.href.startsWith("http");
            return (
              <li key={stop.title} className="relative lg:pr-5">
                {/* Narrow: the spine segment leading to the next stop. */}
                {i < N - 1 && (
                  <span
                    aria-hidden
                    className={`absolute left-[7px] top-5 h-full lg:hidden ${
                      JOURNEY[i + 1].inProgress
                        ? "border-l-2 border-dashed border-thread"
                        : "w-[3px] bg-accent"
                    }`}
                  />
                )}
                <a
                  href={stop.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group relative grid grid-cols-[1.25rem_1fr] gap-x-3 pb-6 last:pb-0 lg:block lg:pb-0 lg:pt-20"
                  style={{ "--y": `${(y(i) / H) * 4}rem` } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    style={{ "--n": `${arrival(i)}ms` } as React.CSSProperties}
                    className={`node-arrive relative z-10 mt-1 block size-4 rounded-full border-2 lg:absolute lg:-left-2 lg:top-[calc(var(--y)-0.5rem)] lg:mt-0 ${
                      stop.inProgress
                        ? "border-dashed border-thread bg-paper"
                        : "border-accent bg-paper group-hover:bg-accent"
                    }`}
                  />
                  <span className="block">
                    <span className="annot-sm block text-ink-3">
                      {stop.date} · <span className={stop.inProgress ? "text-ink-3" : "text-accent"}>{stop.status}</span>
                    </span>
                    <span className="mt-1 block font-display text-[1.4rem] leading-tight text-ink transition-colors group-hover:text-accent">
                      {stop.title}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-ink-2">
                      {stop.note}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>

        <p className="annot-sm mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-4 text-ink-3 xl:absolute xl:right-8 xl:top-5 xl:mt-0 xl:flex-col xl:items-start xl:border-0 xl:pt-0">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-[3px] w-6 bg-accent" />
            Shipped or live
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="w-6 border-t-2 border-dashed border-thread" />
            In progress
          </span>
        </p>
      </div>
    </section>
  );
}
