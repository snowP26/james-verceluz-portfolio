"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/type";
import { STATUS_LABEL } from "@/lib/data";
import { GithubMark } from "./brand-icons";
import { TechTag } from "./tech-tag";

function StatusMark({ status }: { status: Project["status"] }) {
  const isLive = status === "live";
  return (
    <span className="annot inline-flex items-center gap-2 text-ink-2">
      <span
        aria-hidden
        className={`size-1.5 ${
          isLive
            ? "bg-live"
            : status === "building"
              ? "bg-accent"
              : "border border-ink-3"
        }`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

/** A spec entry: metadata in the margin, the work itself in the field. */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const span = `${project.start} — ${project.end ?? "Present"}`;

  return (
    <article className="plate relative border border-rule bg-paper-raised">
      <div className="grid gap-x-10 gap-y-6 p-6 sm:p-8 lg:grid-cols-[13rem_1fr] lg:p-10">
        {/* Margin: the facts you scan for. */}
        <div className="flex flex-col gap-4 lg:border-r lg:border-rule lg:pr-8">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
            <span className="annot text-accent tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span aria-hidden className="h-px w-6 bg-rule lg:w-8" />
            <StatusMark status={project.status} />
          </div>

          <dl className="space-y-3">
            <div>
              <dt className="annot-sm text-ink-3">Dates</dt>
              <dd className="mt-1.5 font-mono text-xs tabular-nums text-ink-2">
                {span}
              </dd>
            </div>
            <div>
              <dt className="annot-sm text-ink-3">Role</dt>
              <dd className="mt-1.5 text-sm leading-snug text-ink-2">
                {project.role}
              </dd>
            </div>
          </dl>

          {project.image && (
            <div className="relative mt-1 aspect-16/10 overflow-hidden border border-rule">
              <Image
                src={project.image}
                alt={`${project.name} interface`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 13rem"
              />
            </div>
          )}
        </div>

        {/* Field: the work. */}
        <div className="min-w-0">
          <p className="annot-sm text-ink-3">{project.kind}</p>
          <h3 className="display-md mt-2 text-ink">{project.name}</h3>

          <p className="prose-sheet mt-4 max-w-2xl">{project.summary}</p>

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

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </ul>
          </div>

          {(project.live || project.github) && (
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="annot group inline-flex items-center gap-2 text-accent"
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
                  rel="noreferrer"
                  className="annot inline-flex items-center gap-2 text-ink-3 transition-colors hover:text-ink"
                >
                  <GithubMark className="size-3.5" />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
