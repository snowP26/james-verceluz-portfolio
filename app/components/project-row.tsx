import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/type";
import { STATUS_LABEL } from "@/lib/data";
import { formatSpan } from "@/lib/utils";
import { GithubMark } from "./brand-icons";
import { TechTag } from "./tech-tag";

export function StatusDot({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2 shrink-0 rounded-full ${
        open ? "border-[1.5px] border-ink-3" : "bg-ok"
      }`}
    />
  );
}

/**
 * One piece of work: the whole row opens the live site (a stretched link on
 * the title), with the source link lifted above it. The row you point at lifts
 * and the other rows' screenshots dim.
 */
export function ProjectRow({ project, eager = false }: { project: Project; eager?: boolean }) {
  const open = project.status === "building";
  const raise = "relative z-10";

  return (
    <article
      id={project.slug}
      className="group/row relative -mx-4 grid gap-4 rounded-xl p-4 transition-[background-color,box-shadow] duration-200 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-1 lg:hover:bg-surface lg:hover:shadow-lift xl:grid-cols-[14rem_minmax(0,1fr)]"
    >
      {project.image && (
        // Only the pictures dim when a sibling is hovered: dimmed text would fall below contrast.
        <div className="relative aspect-16/10 overflow-hidden rounded-md border border-line bg-surface-2 transition-opacity duration-200 sm:mt-1 lg:group-hover/list:opacity-40 lg:group-hover/row:opacity-100!">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            fill
            loading={eager ? "eager" : "lazy"}
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 12rem, (max-width: 1280px) 40rem, 14rem"
          />
        </div>
      )}

      <div className="min-w-0">
        <p className="nums flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-ink-2">
            <StatusDot open={open} />
            {STATUS_LABEL[project.status]}
          </span>
          <span aria-hidden>·</span>
          <span>{formatSpan(project.start, project.end)}</span>
          <span aria-hidden>·</span>
          <span>{project.place}</span>
        </p>

        <h3 className="mt-1.5 text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-baseline gap-1 transition-colors before:absolute before:inset-0 before:rounded-xl hover:text-accent focus-visible:text-accent"
            >
              {project.name}
              <ArrowUpRight
                aria-hidden
                className="size-4 shrink-0 self-center transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-0.5 text-sm text-ink-2">
          {project.kind} · {project.role}
        </p>

        <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
          {project.summary}
        </p>

        <ul className="mt-3 max-w-[62ch] space-y-1.5">
          {project.points.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-sm leading-relaxed text-ink-3"
            >
              <span aria-hidden className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-line-strong" />
              <span className="text-pretty">{point}</span>
            </li>
          ))}
        </ul>

        <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className={`${raise} inline-flex min-h-11 items-center gap-1 font-medium text-accent hover:underline hover:underline-offset-4`}
            >
              {project.liveLabel ?? "Visit site"}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${raise} inline-flex min-h-11 items-center gap-1.5 text-ink-3 transition-colors hover:text-ink`}
            >
              <GithubMark className="size-3.5" />
              Source
            </a>
          )}
          {!project.live && !project.github && (
            <span className="inline-flex min-h-11 items-center text-ink-3">
              No public URL yet · private repos
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
