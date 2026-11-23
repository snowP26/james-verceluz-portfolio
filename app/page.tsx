"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  QrCode,
} from "lucide-react";

import { GithubMark, LinkedinMark } from "./components/brand-icons";
import { Navbar } from "./components/navbar";
import { Rail } from "./components/rail";
import { Reveal } from "./components/reveal";
import { SectionHead } from "./components/section-head";
import { ProjectCard } from "./components/project-card";
import { CopyField } from "./components/copy-field";
import { EmailMenu } from "./components/email-menu";
import { Journey } from "./components/journey";
import { QRDialog } from "./components/qr-dialog";
import { Stamp } from "./components/stamp";
import { TechChip, TechTag } from "./components/tech-tag";
import { useScrollSpy } from "./components/useScrollSpy";

import {
  CERTIFICATIONS,
  CONTACT,
  EARLIER_WORK,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  RESUME_PATH,
  SECTIONS,
  SKILLS,
  TRAINING,
} from "@/lib/data";
import { formatMonth, formatSpan } from "@/lib/utils";

const SECTION_IDS = SECTIONS.map((s) => s.id);

/** Every section sits on the same measure. */
const shell = "mx-auto w-full max-w-[76rem] px-5 sm:px-8";

const primaryButton =
  "annot tag group inline-flex min-h-12 items-center gap-2.5 bg-accent px-5 py-3 text-accent-ink transition-opacity hover:opacity-90";
const secondaryButton =
  "annot tag-outline group inline-flex min-h-12 items-center gap-2.5 px-5 py-3 text-ink transition-colors hover:text-accent";
const contactChip =
  "inline-flex h-11 items-center gap-2 border border-rule px-3.5 text-sm text-ink-2 transition-colors hover:border-accent-edge hover:text-accent";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;


export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS);
  const updated = formatMonth(PROFILE.revision);

  return (
    <>
      {/* The sheet everything is drawn on. */}
      <div
        aria-hidden
        data-print="hide"
        className="paper-grain pointer-events-none fixed inset-0 -z-10"
      />

      <Navbar activeId={activeId} />

      <div className="lg:pl-18">

        <main id="main" tabIndex={-1} className="focus:outline-none">
          {/* ── 00 · Title block ─────────────────────────────── */}
          <section id="index" className="pb-16 pt-6 sm:pb-20 sm:pt-10">
            <div className={shell}>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14">
                <div>
                  <h1>
                    <span className="sr-only">
                      {PROFILE.firstName} {PROFILE.lastName}
                    </span>
                    <span
                      aria-hidden
                      className="display-xl load-rise block text-accent"
                      style={{ "--d": "120ms" } as React.CSSProperties}
                    >
                      {PROFILE.firstName}
                    </span>
                    <span
                      aria-hidden
                      className="display-xl load-rise block text-accent"
                      style={{ "--d": "220ms" } as React.CSSProperties}
                    >
                      {PROFILE.lastName}
                    </span>
                  </h1>

                  {/* Statement + actions */}
                  <div
                    className="load-rise mt-6 max-w-2xl"
                    style={{ "--d": "380ms" } as React.CSSProperties}
                  >
                    <p className="display-sm text-balance text-ink">{PROFILE.discipline}.</p>
                    <p className="prose-sheet mt-4">{PROFILE.lead}</p>

                    <div className="mt-7 flex flex-wrap items-stretch gap-3">
                      <a href="#work" className={primaryButton}>
                        See the work
                        <ArrowDown
                          className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                          strokeWidth={2}
                        />
                      </a>
                      <a href={RESUME_PATH} {...external} className={secondaryButton}>
                        Resumé (PDF)
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.75}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* The portrait, mounted, with its catalogue label. */}
                <figure
                  className="load-rise grid grid-cols-[8.5rem_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[11rem_minmax(0,20rem)] lg:block"
                  style={{ "--d": "520ms" } as React.CSSProperties}
                >
                  <div className="relative">
                    <div className="photo-corners group bg-paper-raised">
                      <div className="mounted relative aspect-square overflow-hidden bg-white">
                        <Image
                          src="/james_verceluz_grin.png"
                          alt={`Illustrated portrait of ${PROFILE.shortName}`}
                          width={280}
                          height={280}
                          priority
                          className="size-full object-cover object-top transition-opacity duration-200 group-hover:opacity-0"
                        />
                        <Image
                          src="/james_verceluz_smile.png"
                          alt=""
                          aria-hidden
                          width={280}
                          height={280}
                          className="absolute inset-0 size-full object-cover object-top opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                    <Stamp
                      top="Open to work"
                      middle="2026"
                      bottom="Naga City"
                      className="absolute -left-12 bottom-8 hidden size-24 text-accent lg:block"
                    />
                  </div>

                  <figcaption className="plate relative border border-rule-strong/60 bg-paper-raised px-4 pb-3 pt-8 sm:px-5 lg:mt-4">
                    <p className="annot text-accent">{PROFILE.shortName}</p>
                    <p className="mt-0.5 text-sm italic text-ink-2">
                      Illustrated portrait
                    </p>
                    <dl className="mt-3 divide-y divide-rule border-t border-rule">
                      {[
                        { k: "Based", v: <>Naga City, PH</> },
                        // Entitled is a work's title, so it is set in italics like one.
                        { k: "Ongoing", v: <>AWS re/Start &amp; <i>Entitled</i></> },
                        { k: "Status", v: <>Open to work</> },
                      ].map((row) => (
                        <div
                          key={row.k}
                          className="flex flex-wrap items-baseline justify-between gap-x-4 py-1.5"
                        >
                          <dt className="annot-sm text-ink-3">{row.k}</dt>
                          <dd className="text-sm text-ink">{row.v}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="annot-sm border-t border-rule pt-2.5 text-ink-3">
                      Updated {updated}
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="load-fade mt-8 sm:mt-10" style={{ "--d": "640ms" } as React.CSSProperties}>
                <Journey />
              </div>
            </div>
          </section>

          {/* ── 01 · Work ────────────────────────────────────── */}
          <section id="work" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                title="Selected work"
                meta={`${PROJECTS.length} projects`}
              />

              <div className="space-y-12">
                {PROJECTS.map((project, i) => (
                  <Reveal key={project.slug} delay={i * 90} className="relative">
                    {/* The custody line between objects: it runs into this card's tab.
                        Ribbon into shipped work, unwoven thread into work still open. */}
                    {i > 0 && (
                      <span
                        aria-hidden
                        className={`absolute -top-12 h-12 ${
                          project.status === "building"
                            ? "left-6 w-0 border-l-2 border-dashed border-thread"
                            : "silk left-4.5 w-3.5"
                        }`}
                      />
                    )}
                    <ProjectCard project={project} lead={i === 0} />
                  </Reveal>
                ))}
              </div>

              {/* Earlier work: kept honest, kept out of the way. */}
              <Reveal delay={120}>
                <details className="group/earlier mt-16">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="annot text-ink-2">Earlier work</span>
                    <span aria-hidden className="h-px flex-1 bg-rule" />
                    <span className="annot text-ink-3">
                      {EARLIER_WORK.length} student repos
                    </span>
                    <ChevronDown
                      aria-hidden
                      className="size-4 shrink-0 text-ink-3 transition-transform duration-200 group-open/earlier:rotate-180"
                      strokeWidth={1.75}
                    />
                  </summary>

                  <ul className="mt-2 divide-y divide-rule border-b border-rule">
                    {EARLIER_WORK.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.live ?? item.github}
                          {...external}
                          className="group grid gap-2 py-5 transition-colors sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6"
                        >
                          <span className="font-display text-xl leading-tight text-ink transition-colors group-hover:text-accent">
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
                </details>
              </Reveal>
            </div>
          </section>

          {/* ── 02 · Experience ──────────────────────────────── */}
          <section id="experience" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead
                title="Experience"
                meta={`${EXPERIENCE.length} roles`}
              />

              <ol className="relative">
                {/* The through-line: this section really is a sequence. */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-[6.5px] top-2 hidden w-[3px] bg-accent sm:block"
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
                      className={`absolute left-0 top-1 hidden size-4 rounded-full border-2 border-accent sm:block ${
                        role.end === null ? "bg-accent" : "bg-paper"
                      }`}
                    />

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <span className="annot tabular-nums text-ink-3">
                        {formatSpan(role.start, role.end)}
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

                    {role.points.length > 0 && (
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
                    )}

                    {role.stack.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-1.5">
                        {role.stack.map((tech) => (
                          <TechTag key={tech} name={tech} />
                        ))}
                      </ul>
                    )}
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* ── 03 · Profile ─────────────────────────────────── */}
          <section id="profile" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead title="Profile" />

              <div className="grid gap-10 sm:grid-cols-[13rem_1fr] lg:grid-cols-[18rem_1fr] lg:gap-16">
                <Reveal>
                  <figure className="plate relative max-w-64 border border-rule sm:max-w-none">
                    <div className="relative aspect-3/4">
                      <Image
                        src="/profile-pic.jpg"
                        alt={PROFILE.shortName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 16rem, (max-width: 1024px) 13rem, 18rem"
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
                </div>
              </div>
            </div>
          </section>

          {/* ── 04 · Capabilities ────────────────────────────── */}
          <section id="capabilities" className="py-20 sm:py-24">
            <div className={shell}>
              <SectionHead title="Capabilities" />

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
              <SectionHead title="Credentials" />

              <div className="grid gap-6 lg:grid-cols-2">
                <Reveal>
                  <div className="plate relative h-full border border-rule bg-paper-raised p-6 pt-10 sm:p-8 sm:pt-11">
                    <h3 className="display-sm text-ink">
                      {EDUCATION.degree}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-2">
                      {EDUCATION.school}
                    </p>

                    <dl className="mt-7 divide-y divide-rule border-t border-rule">
                      {[
                        { k: "Dates", v: formatSpan(EDUCATION.start, EDUCATION.end) },
                        { k: "QPI (GPA)", v: EDUCATION.qpi },
                      ].map((row) => (
                        <div
                          key={row.k}
                          className="flex items-baseline justify-between gap-4 py-3"
                        >
                          <dt className="annot-sm text-ink-3">{row.k}</dt>
                          <dd className="font-caps text-sm tabular-nums text-ink-2">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-6 text-sm leading-relaxed text-ink-2">
                      {EDUCATION.org}
                    </p>

                    {/* Unwoven thread: this one is still in progress. */}
                    <div id="training" className="mt-7 border-t-2 border-dashed border-thread pt-6">
                      <p className="text-[0.9375rem] font-medium leading-snug text-ink">
                        {TRAINING.name}
                      </p>
                      <p className="annot-sm mt-2 text-ink-3">{TRAINING.sponsors}</p>
                      <p className="mt-2 font-caps text-sm tabular-nums text-ink-2">
                        {formatSpan(TRAINING.start, TRAINING.end)} (expected)
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-2">
                        {TRAINING.note}
                      </p>
                      <a
                        href={TRAINING.log}
                        {...external}
                        className="annot-sm mt-2 inline-flex min-h-11 items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
                      >
                        Practice log
                        <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={90}>
                  <div className="plate relative h-full border border-rule bg-paper-raised p-6 pt-10 sm:p-8 sm:pt-11">
                    <h3 className="display-sm text-ink">Certifications</h3>

                    <ul className="mt-3 divide-y divide-rule">
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
              <SectionHead title="Get in touch" meta="Open to work" />

              <div className="grid gap-12 lg:grid-cols-[1fr_25rem] lg:gap-16">
                <Reveal>
                  <div>
                    <p className="display-md max-w-xl text-balance text-ink">
                      Hiring a full-stack developer? I&apos;m open to full-time
                      roles.
                    </p>
                    <p className="prose-sheet mt-6 max-w-lg">
                      I work from Naga City, Philippines ({PROFILE.timezone}) and
                      have shipped for clients in Canada and Japan, so working
                      remotely across time zones is familiar. Email is the
                      fastest way to reach me.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <EmailMenu subject="Full-time role" triggerClassName={primaryButton}>
                        <Mail className="size-3.5" strokeWidth={1.75} />
                        Email me
                      </EmailMenu>
                      <a href={RESUME_PATH} {...external} className={secondaryButton}>
                        Resumé (PDF)
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.75}
                        />
                      </a>
                    </div>

                    {/* A div, not a p: the email menu's popover holds block content. */}
                    <div className="mt-10 max-w-lg text-pretty border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-ink-2">
                      Have a project to build instead? I take freelance work too.{" "}
                      <EmailMenu
                        subject="Freelance project"
                        triggerClassName="text-accent underline decoration-accent-edge underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        Tell me what it has to do.
                      </EmailMenu>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={110}>
                  <dl className="divide-y divide-rule border-y border-rule">
                    <div className="grid gap-1.5 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                      <dt className="annot-sm pt-1 text-ink-3">Location</dt>
                      <dd className="flex min-w-0 items-start gap-2 text-[0.9375rem] text-ink-2">
                        <MapPin className="mt-1 size-3.5 shrink-0 text-ink-3" strokeWidth={1.75} />
                        <span>
                          {PROFILE.location} · {PROFILE.timezone}
                        </span>
                      </dd>
                    </div>

                    <div className="grid gap-1.5 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                      <dt className="annot-sm pt-1 text-ink-3">Email</dt>
                      <dd className="min-w-0">
                        <CopyField
                          value={CONTACT.email}
                          name="email address"
                          className="text-[0.9375rem] text-ink-2"
                        />
                      </dd>
                    </div>

                    <div className="grid gap-1.5 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                      <dt className="annot-sm pt-1 text-ink-3">Phone</dt>
                      <dd className="min-w-0">
                        <CopyField
                          value={CONTACT.phone}
                          href={`tel:${CONTACT.phoneRaw}`}
                          name="phone number"
                          className="text-[0.9375rem] text-ink-2"
                        />
                      </dd>
                    </div>

                    <div className="py-5">
                      <dt className="annot-sm mb-4 text-ink-3">Elsewhere</dt>
                      <dd>
                        <ul className="flex flex-wrap gap-2">
                          <li>
                            <a href={CONTACT.github} {...external} className={contactChip}>
                              <GithubMark className="size-4" />
                              GitHub
                            </a>
                          </li>
                          <li>
                            <a href={CONTACT.linkedin} {...external} className={contactChip}>
                              <LinkedinMark className="size-4" />
                              LinkedIn
                            </a>
                          </li>
                          <li>
                            <QRDialog triggerClassName={contactChip}>
                              <QrCode className="size-4" strokeWidth={1.75} />
                              Viber
                            </QRDialog>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        {/* ── Title block, bottom of sheet ───────────────────── */}
        <footer>
          <div className={`${shell} pb-12`}>
            <div aria-hidden className="ornament-rule mb-12" />
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="font-display text-3xl leading-none text-accent">
                  {PROFILE.firstName} {PROFILE.lastName}
                </p>
                <p className="mt-3 text-pretty text-sm leading-snug text-ink-3">
                  {PROFILE.discipline} · {PROFILE.location}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6">
                <a
                  href={CONTACT.github}
                  {...external}
                  className="annot-sm inline-flex min-h-11 items-center text-ink-3 transition-colors hover:text-ink"
                >
                  {CONTACT.githubHandle}
                </a>
                <a
                  href={CONTACT.linkedin}
                  {...external}
                  className="annot-sm inline-flex min-h-11 items-center text-ink-3 transition-colors hover:text-ink"
                >
                  {CONTACT.linkedinHandle}
                </a>
                <a
                  href={RESUME_PATH}
                  download
                  className="annot-sm inline-flex min-h-11 items-center text-ink-3 transition-colors hover:text-ink"
                >
                  Resume.pdf
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6">
              <p className="annot-sm text-ink-3">
                © {new Date().getFullYear()} {PROFILE.shortName}
              </p>
              <p className="annot-sm text-ink-3">Updated {updated} · Next.js</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Last in the DOM: a visual instrument, not a second navigation. */}
      <Rail activeId={activeId} />
    </>
  );
}
