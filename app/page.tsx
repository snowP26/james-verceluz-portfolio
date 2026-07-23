"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  QrCode,
} from "lucide-react";

import { GithubMark, LinkedinMark } from "./components/brand-icons";
import { Navbar } from "./components/navbar";
import { Rail } from "./components/rail";
import { Reveal } from "./components/reveal";
import { SectionHead } from "./components/section-head";
import { ProjectCard } from "./components/project-card";
import { CopyField } from "./components/copy-field";
import { QRDialog } from "./components/qr-dialog";
import { TechChip, TechTag } from "./components/tech-tag";
import { useScrollSpy } from "./components/useScrollSpy";

import {
  CERTIFICATIONS,
  CONTACT,
  EARLIER_WORK,
  EDUCATION,
  EXPERIENCE,
  MEASURES,
  PROFILE,
  PROJECTS,
  RESUME_PATH,
  SECTIONS,
  SKILLS,
} from "@/lib/data";

const SECTION_IDS = SECTIONS.map((s) => s.id);

/** Every section sits on the same measure. */
const shell = "mx-auto w-full max-w-[76rem] px-5 sm:px-8";

export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      {/* The sheet everything is drawn on. */}
      <div
        aria-hidden
        data-print="hide"
        className="sheet-grid pointer-events-none fixed inset-0 -z-10"
      />

      <Rail activeId={activeId} />

      <div className="lg:pl-18">
        <Navbar activeId={activeId} />

        <main>
          {/* ── 00 · Title block ─────────────────────────────── */}
          <section id="index" className="pb-20 pt-10 sm:pt-16">
            <div className={shell}>
              <div className="load-fade flex items-center gap-4" style={{ "--d": "80ms" } as React.CSSProperties}>
                <span className="annot text-ink-3">Portfolio</span>
                <span aria-hidden className="load-draw h-px flex-1 bg-rule" style={{ "--d": "150ms" } as React.CSSProperties} />
                <span className="annot text-ink-3">Rev {PROFILE.revision}</span>
              </div>

              <h1 className="mt-10 sm:mt-14">
                <span className="sr-only">
                  {PROFILE.firstName} {PROFILE.lastName}
                </span>
                <span
                  aria-hidden
                  className="display-xl load-rise block text-ink"
                  style={{ "--d": "180ms" } as React.CSSProperties}
                >
                  {PROFILE.firstName}
                </span>
                <span
                  aria-hidden
                  className="display-xl load-rise block text-ink"
                  style={{ "--d": "280ms" } as React.CSSProperties}
                >
                  {PROFILE.lastName}
                </span>
              </h1>

              <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
                {/* Statement + actions */}
                <div
                  className="load-rise max-w-xl"
                  style={{ "--d": "420ms" } as React.CSSProperties}
                >
                  <p className="display-sm text-ink">{PROFILE.discipline}.</p>
                  <p className="prose-sheet mt-4">{PROFILE.lead}</p>

                  <div className="mt-9 flex flex-wrap items-stretch gap-3">
                    <a
                      href="#work"
                      className="annot group inline-flex items-center gap-2.5 bg-accent px-5 py-4 text-accent-ink transition-opacity hover:opacity-90"
                    >
                      See the work
                      <ArrowRight
                        className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </a>
                    <Link
                      href="/resume"
                      className="annot inline-flex items-center gap-2.5 border border-rule px-5 py-4 text-ink-2 transition-colors hover:border-accent-edge hover:text-accent"
                    >
                      <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
                      Resume
                    </Link>
                  </div>
                </div>

                {/* Portrait plate + title-block fields */}
                <div
                  className="load-rise flex flex-col gap-6 sm:flex-row lg:flex-col lg:items-end"
                  style={{ "--d": "540ms" } as React.CSSProperties}
                >
                  <div className="group plate relative size-40 shrink-0 border border-rule bg-paper-sunk">
                    <Image
                      src="/james_verceluz_grin.png"
                      alt={`${PROFILE.shortName}`}
                      width={200}
                      height={200}
                      priority
                      className="size-full object-cover object-top transition-opacity duration-200 group-hover:opacity-0"
                    />
                    <Image
                      src="/james_verceluz_smile.png"
                      alt=""
                      aria-hidden
                      width={200}
                      height={200}
                      className="absolute inset-0 size-full object-cover object-top opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </div>

                  <dl className="w-full min-w-56 divide-y divide-rule border-y border-rule sm:w-56">
                    {[
                      { k: "Based", v: "Naga City, PH" },
                      { k: "Building", v: "Stadiops" },
                      { k: "Status", v: "Open to work" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="flex items-baseline justify-between gap-4 py-2.5"
                      >
                        <dt className="annot-sm text-ink-3">{row.k}</dt>
                        <dd className="font-mono text-xs text-ink-2">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Measures — every figure here is on the resume. */}
              <dl
                className="load-fade mt-16 grid divide-y divide-rule border-y border-rule sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
                style={{ "--d": "700ms" } as React.CSSProperties}
              >
                {MEASURES.map((m) => (
                  <div key={m.label} className="px-0 py-6 sm:px-8 sm:first:pl-0">
                    <dd className="display-md tabular-nums text-ink">
                      {m.value}
                    </dd>
                    <dt className="annot-sm mt-3 text-ink-2">{m.label}</dt>
                    <p className="mt-2 font-mono text-xs text-ink-3">{m.note}</p>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── 01 · Profile ─────────────────────────────────── */}
          <section id="profile" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead index="01" title="Profile" meta="Who you'd be hiring" />

              <div className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
                <Reveal>
                  <figure className="plate relative border border-rule">
                    <div className="relative aspect-3/4">
                      <Image
                        src="/profile-pic.jpg"
                        alt={PROFILE.shortName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 18rem"
                      />
                    </div>
                    <figcaption className="annot-sm flex items-center justify-between gap-3 border-t border-rule px-4 py-3 text-ink-3">
                      <span>{PROFILE.shortName}</span>
                      <span>Naga City</span>
                    </figcaption>
                  </figure>
                </Reveal>

                <div>
                  {PROFILE.bio.map((paragraph, i) => (
                    <Reveal
                      key={i}
                      delay={80 + i * 90}
                      className="mb-6 last:mb-0"
                    >
                      <p className="prose-sheet max-w-2xl">{paragraph}</p>
                    </Reveal>
                  ))}

                  <Reveal delay={260}>
                    <dl className="mt-10 divide-y divide-rule border-t border-rule">
                      {[
                        {
                          k: "Now",
                          v: "Front end for Stadiops, a booking platform for a Canadian client",
                        },
                        {
                          k: "Built",
                          v: "An internal SMS log dashboard at Nueca Technologies, plus the Rails endpoints behind it",
                        },
                        {
                          k: "Studied",
                          v: `${EDUCATION.degree}, ${EDUCATION.school}`,
                        },
                      ].map((row) => (
                        <div
                          key={row.k}
                          className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
                        >
                          <dt className="annot-sm pt-1 text-ink-3">{row.k}</dt>
                          <dd className="text-[0.9375rem] leading-relaxed text-ink-2">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ── 02 · Experience ──────────────────────────────── */}
          <section id="experience" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                index="02"
                title="Experience"
                meta={`${EXPERIENCE.length} roles`}
              />

              <ol className="relative">
                {/* The through-line: this section really is a sequence. */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0.75 hidden w-px bg-rule sm:block"
                />

                {EXPERIENCE.map((role, i) => (
                  <Reveal
                    as="li"
                    key={role.title}
                    delay={i * 110}
                    className="relative block pb-14 last:pb-0 sm:pl-12"
                  >
                    <span
                      aria-hidden
                      className={`absolute left-0 top-2 hidden size-1.75 sm:block ${
                        role.end === null
                          ? "bg-accent"
                          : "border border-rule-strong bg-paper"
                      }`}
                    />

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <span className="annot tabular-nums text-ink-3">
                        {role.start} — {role.end ?? "Present"}
                      </span>
                      {role.end === null && (
                        <span className="annot-sm text-accent">Current</span>
                      )}
                    </div>

                    <h3 className="display-sm mt-3 text-ink">{role.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] text-ink-2">
                      {role.org}
                    </p>

                    <p className="prose-sheet mt-5 max-w-2xl">{role.summary}</p>

                    <ul className="mt-5 max-w-2xl space-y-3">
                      {role.points.map((point) => (
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

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {role.stack.map((tech) => (
                        <TechTag key={tech} name={tech} />
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* ── 03 · Work ────────────────────────────────────── */}
          <section id="work" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                index="03"
                title="Selected work"
                meta={`${PROJECTS.length} projects`}
              />

              <div className="space-y-6">
                {PROJECTS.map((project, i) => (
                  <Reveal key={project.slug} delay={i * 90}>
                    <ProjectCard project={project} index={i} />
                  </Reveal>
                ))}
              </div>

              {/* Earlier work — kept honest, kept small. */}
              <Reveal delay={120}>
                <div className="mt-16">
                  <div className="flex items-center gap-4">
                    <span className="annot text-ink-3">Earlier work</span>
                    <span aria-hidden className="h-px flex-1 bg-rule" />
                    <span className="annot text-ink-3">
                      {EARLIER_WORK.length} repos
                    </span>
                  </div>

                  <ul className="mt-2 divide-y divide-rule border-b border-rule">
                    {EARLIER_WORK.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.live ?? item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="group grid gap-2 py-5 transition-colors sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6"
                        >
                          <span className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
                            {item.name}
                          </span>
                          <span className="text-[0.9375rem] leading-relaxed text-ink-2">
                            {item.blurb}
                          </span>
                          <span className="annot-sm flex items-center gap-3 text-ink-3">
                            {item.stack.join(" · ")}
                            <ArrowUpRight
                              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              strokeWidth={1.75}
                            />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── 04 · Capabilities ────────────────────────────── */}
          <section id="capabilities" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                index="04"
                title="Capabilities"
                meta="What I reach for"
              />

              <dl className="divide-y divide-rule border-y border-rule">
                {SKILLS.map((group, i) => (
                  <Reveal key={group.label} delay={i * 70}>
                    <div className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                      <dt className="annot pt-2 text-ink-3">{group.label}</dt>
                      <dd className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <TechChip key={item} name={item} />
                        ))}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>

          {/* ── 05 · Credentials ─────────────────────────────── */}
          <section id="credentials" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                index="05"
                title="Credentials"
                meta="Education & certifications"
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <Reveal>
                  <div className="plate relative h-full border border-rule bg-paper-raised p-6 sm:p-8">
                    <p className="annot-sm text-ink-3">Education</p>
                    <h3 className="display-sm mt-3 text-ink">
                      {EDUCATION.degree}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-2">
                      {EDUCATION.school}
                    </p>

                    <dl className="mt-7 divide-y divide-rule border-t border-rule">
                      {[
                        { k: "Dates", v: `${EDUCATION.start} — ${EDUCATION.end}` },
                        { k: "QPI", v: EDUCATION.qpi },
                      ].map((row) => (
                        <div
                          key={row.k}
                          className="flex items-baseline justify-between gap-4 py-3"
                        >
                          <dt className="annot-sm text-ink-3">{row.k}</dt>
                          <dd className="font-mono text-xs tabular-nums text-ink-2">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-6 text-sm leading-relaxed text-ink-2">
                      {EDUCATION.org}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={90}>
                  <div className="plate relative h-full border border-rule bg-paper-raised p-6 sm:p-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="annot-sm text-ink-3">Certifications</p>
                      <p className="annot-sm text-ink-3 tabular-nums">
                        {CERTIFICATIONS.length}
                      </p>
                    </div>

                    <ul className="mt-4 divide-y divide-rule">
                      {CERTIFICATIONS.map((cert) => (
                        <li key={cert.title} className="py-4">
                          <p className="text-[0.9375rem] font-medium leading-snug text-ink">
                            {cert.title}
                          </p>
                          <p className="annot-sm mt-2 text-ink-3">
                            {[cert.issuer, cert.detail, cert.year]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ── 06 · Contact ─────────────────────────────────── */}
          <section id="contact" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead index="06" title="Get in touch" meta="Open to work" />

              <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
                <Reveal>
                  <div>
                    <p className="display-md max-w-xl text-balance text-ink">
                      Have something that needs building? Tell me what it has to
                      do.
                    </p>
                    <p className="prose-sheet mt-6 max-w-lg">
                      I&apos;m taking on freelance work and open to full-time
                      roles. Email is the fastest way to reach me.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <a
                        href={CONTACT.mailto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="annot group inline-flex items-center gap-2.5 bg-accent px-5 py-4 text-accent-ink transition-opacity hover:opacity-90"
                      >
                        <Mail className="size-3.5" strokeWidth={1.75} />
                        Send an email
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </a>
                      <Link
                        href="/resume"
                        className="annot inline-flex items-center gap-2.5 border border-rule px-5 py-4 text-ink-2 transition-colors hover:border-accent-edge hover:text-accent"
                      >
                        <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
                        Resume
                      </Link>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={110}>
                  <dl className="divide-y divide-rule border-y border-rule">
                    <div className="flex items-start gap-4 py-4">
                      <dt className="annot-sm w-20 shrink-0 pt-1 text-ink-3">
                        Location
                      </dt>
                      <dd className="flex min-w-0 items-center gap-2 text-[0.9375rem] text-ink-2">
                        <MapPin className="size-3.5 shrink-0 text-ink-3" strokeWidth={1.75} />
                        {PROFILE.location}
                      </dd>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                      <dt className="annot-sm w-20 shrink-0 pt-1 text-ink-3">
                        Email
                      </dt>
                      <dd className="min-w-0 flex-1">
                        <CopyField
                          value={CONTACT.email}
                          className="text-[0.9375rem] text-ink-2"
                        />
                      </dd>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                      <dt className="annot-sm w-20 shrink-0 pt-1 text-ink-3">
                        Phone
                      </dt>
                      <dd className="flex min-w-0 flex-1 items-center gap-2">
                        <Phone className="size-3.5 shrink-0 text-ink-3" strokeWidth={1.75} />
                        <CopyField
                          value={CONTACT.phone}
                          className="text-[0.9375rem] text-ink-2"
                        />
                      </dd>
                    </div>

                    <div className="py-5">
                      <p className="annot-sm mb-4 text-ink-3">Elsewhere</p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={CONTACT.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          className="flex size-10 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-accent-edge hover:text-accent"
                        >
                          <GithubMark className="size-4" />
                        </a>
                        <a
                          href={CONTACT.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn"
                          className="flex size-10 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-accent-edge hover:text-accent"
                        >
                          <LinkedinMark className="size-4" />
                        </a>
                        <a
                          href={CONTACT.mailto}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Email"
                          className="flex size-10 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-accent-edge hover:text-accent"
                        >
                          <Mail className="size-4" strokeWidth={1.75} />
                        </a>
                        <QRDialog triggerClassName="flex size-10 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-accent-edge hover:text-accent">
                          <QrCode className="size-4" strokeWidth={1.75} />
                        </QRDialog>
                      </div>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        {/* ── Title block, bottom of sheet ───────────────────── */}
        <footer className="border-t border-rule">
          <div className={`${shell} py-12`}>
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="font-display text-lg font-extrabold uppercase leading-none tracking-[-0.03em] text-ink">
                  {PROFILE.firstName} {PROFILE.lastName}
                </p>
                <p className="annot-sm mt-3 text-ink-3">
                  {PROFILE.discipline} · {PROFILE.location}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="annot-sm text-ink-3 transition-colors hover:text-ink"
                >
                  {CONTACT.githubHandle}
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="annot-sm text-ink-3 transition-colors hover:text-ink"
                >
                  {CONTACT.linkedinHandle}
                </a>
                <a
                  href={RESUME_PATH}
                  download
                  className="annot-sm text-ink-3 transition-colors hover:text-ink"
                >
                  Resume.pdf
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6">
              <p className="annot-sm text-ink-3">
                © {new Date().getFullYear()} {PROFILE.shortName}
              </p>
              <p className="annot-sm text-ink-3">
                Rev {PROFILE.revision} · Next.js
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
