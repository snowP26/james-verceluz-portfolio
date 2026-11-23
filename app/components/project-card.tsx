"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/type";
import { STATUS_LABEL } from "@/lib/data";
import { formatSpan } from "@/lib/utils";
import { GithubMark } from "./brand-icons";
import { Stamp } from "./stamp";
import { TechTag } from "./tech-tag";

function StatusMark({ status }: { status: Project["status"] }) {
  const open = status === "building";
  return (
    <span className="annot inline-flex items-center gap-2 text-ink-2">
      {/* The journey's node: solid ribbon for shipped work, thread for open work. */}
      <span
        aria-hidden
        className={`size-2.5 rounded-full border-2 ${
          open ? "border-dashed border-thread" : "border-accent bg-accent"
        }`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * A catalogued object: what it is and where it stands, the work itself at a
 * size you can judge with its evidence captioned beneath, then the detail.
 * Work still in progress is drawn in unwoven thread rather than ribbon. The
 * lead object gets the most room for its evidence, so the record isn't four equals.
 */
export function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  const open = project.status === "building";

  const frame = project.image && (
    <div className="photo-corners">
      <div className="mounted relative aspect-16/10 overflow-hidden bg-paper-sunk">
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-[1.015]"
          sizes={lead ? "(max-width: 1024px) 100vw, 44rem" : "(max-width: 1024px) 100vw, 36rem"}
        />
      </div>
    </div>
  );

  return (
    <article
      id={project.slug}
      className={`plate relative bg-paper-raised ${
        open
          ? "border border-dashed border-rule-strong [--tab:var(--thread)]"
          : "border border-rule"
      }`}
    >
      <div
        className={`grid gap-x-12 gap-y-7 p-6 sm:p-8 lg:grid-rows-[auto_auto_1fr] ${
          lead
            ? "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:p-12"
            : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:p-10"
        }`}
      >
        <header className="relative min-w-0 pr-20 sm:pr-24 lg:col-start-1 lg:row-start-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <StatusMark status={project.status} />
            <span className="font-caps text-sm tabular-nums text-ink-2">
              {formatSpan(project.start, project.end)}
            </span>
          </div>
          <h3
            className={`mt-4 text-ink ${
              lead ? "display-md display-lead" : "display-md"
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-snug text-ink-2">
            {project.kind} · {project.role}
          </p>
          <Stamp
            top={STATUS_LABEL[project.status]}
            middle={project.start.slice(0, 4)}
            bottom={project.place}
            label={`Stamped ${STATUS_LABEL[project.status]}, ${project.start.slice(0, 4)}, ${project.place}`}
            className={`absolute -right-2 -top-2 size-20 sm:size-24 ${lead ? "lg:size-28" : ""} ${
              open ? "text-ink-2" : "text-accent"
            }`}
          />
        </header>

        <figure className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {frame &&
            (project.live ? (
              // Pointer shortcut to the live site; keyboard users get the caption link.
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="group/shot block"
              >
                {frame}
              </a>
            ) : (
              frame
            ))}

          {/* The object label: where the evidence can be checked. */}
          <figcaption className="mt-4 flex flex-wrap items-center gap-x-6 border-b border-rule">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="annot group inline-flex min-h-11 items-center gap-2 text-accent"
              >
                {project.liveLabel ?? "Visit site"}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="annot inline-flex min-h-11 items-center gap-2 text-ink-3 transition-colors hover:text-ink"
              >
                <GithubMark className="size-3.5" />
                Source
              </a>
            )}
            {!project.live && !project.github && (
              <span className="annot inline-flex min-h-11 items-center text-ink-3">
                No public URL yet · private repos
              </span>
            )}
          </figcaption>
        </figure>

        <div className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-2">
          <p className="prose-sheet max-w-2xl">{project.summary}</p>

          <ul className="mt-6 space-y-3 border-t border-rule pt-6">
            {project.points.map((point) => (
              <li
                key={point}
                className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-2"
              >
                <span
                  aria-hidden
                  className="mt-2.5 h-px w-3 shrink-0 bg-rule-strong"
                />
                <span className="text-pretty">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap content-start gap-1.5 lg:col-start-2 lg:row-start-3">
          {project.stack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </ul>
      </div>
    </article>
  );
}
