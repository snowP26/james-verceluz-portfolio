import { ArrowUpRight } from "lucide-react";
import { JOURNEY } from "@/lib/data";

/**
 * Every stop dated and linked to its evidence, on one line: solid through
 * shipped or live work, dashed into work still in progress.
 */
export function Journey() {
  return (
    <section aria-labelledby="journey-title">
      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-3">
        <h2 id="journey-title" className="text-xl font-semibold tracking-tight text-ink">
          The journey
        </h2>
        <p className="flex items-center gap-4 text-xs text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="size-2 rounded-full bg-ok" />
            Shipped or live
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="size-2 rounded-full border border-ink-3" />
            In progress
          </span>
        </p>
      </div>

      <ol>
        {JOURNEY.map((stop, i) => {
          const next = JOURNEY[i + 1];
          const external = stop.href.startsWith("http");
          return (
            <li key={stop.title} className="relative">
              {next && (
                <span
                  aria-hidden
                  className={`absolute left-[4.5px] top-[1.1875rem] h-full ${
                    next.inProgress
                      ? "border-l border-dashed border-ink-3"
                      : "w-px bg-line-strong"
                  }`}
                />
              )}
              <a
                href={stop.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative -mx-3 grid grid-cols-[0.625rem_minmax(0,1fr)] items-start gap-x-4 rounded-lg px-3 py-2 transition-colors hover:bg-surface-2 sm:grid-cols-[0.625rem_minmax(0,1fr)_auto]"
              >
                <span
                  aria-hidden
                  className={`relative mt-[0.4375rem] size-2.5 rounded-full ring-4 ring-bg transition-shadow group-hover:ring-surface-2 ${
                    stop.inProgress ? "border-[1.5px] border-ink-3 bg-bg" : "bg-ok"
                  }`}
                />
                <span className="min-w-0 text-[0.9375rem] leading-6">
                  <span className="font-medium text-ink">
                    {stop.title}
                    {external && (
                      <ArrowUpRight
                        aria-hidden
                        className="ml-0.5 inline size-3.5 align-[-0.125em] text-ink-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={2}
                      />
                    )}
                  </span>
                  <span className="text-ink-3"> · {stop.note}</span>
                </span>
                <span className="nums col-start-2 text-[0.8125rem] leading-6 text-ink-3 sm:col-start-3 sm:text-right">
                  {stop.date} · {stop.status}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
