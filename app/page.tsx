"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown, Mail, QrCode } from "lucide-react";

import { GithubMark, LinkedinMark } from "./components/brand-icons";
import { CopyField } from "./components/copy-field";
import { EmailMenu } from "./components/email-menu";
import { Journey } from "./components/journey";
import { Navbar, SectionNav } from "./components/navbar";
import { ProjectRow, StatusDot } from "./components/project-row";
import { QRDialog } from "./components/qr-dialog";
import { SectionHead } from "./components/section-head";
import { TechChip, TechTag } from "./components/tech-tag";
import { ThemeToggle } from "./components/theme-toggle";
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

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const primaryButton =
  "group inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85";
const secondaryButton =
  "group inline-flex h-10 items-center gap-2 rounded-lg border border-line-strong bg-surface px-4 text-sm font-medium text-ink transition-colors hover:bg-surface-2";
const iconLink =
  "flex size-9 items-center justify-center rounded-lg text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink";
const chip =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink";

/** Rows sit on one label column, so dates and labels line up down the page. */
const row = "grid gap-1.5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6";
const section = "pt-20 lg:pt-24";
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const NewTab = () => (
  <ArrowUpRight
    aria-hidden
    className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    strokeWidth={2}
  />
);

export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS);
  const updated = formatMonth(PROFILE.revision);

  return (
    <>
      <Navbar activeId={activeId} />

      <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:grid lg:max-w-[80rem] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-12 xl:gap-24 xl:px-16">
        {/* ── The pinned profile column ─────────────────────── */}
        <header
          id="index"
          className="pb-14 pt-8 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:py-14 print:static print:h-auto"
        >
          <div className="settle flex items-center gap-4 sm:gap-5" style={delay(0)}>
            <div className="group relative size-16 shrink-0 overflow-hidden rounded-full border border-line bg-white sm:size-[4.5rem]">
              <Image
                src="/james_verceluz_grin.png"
                alt={`Illustrated portrait of ${PROFILE.shortName}`}
                width={144}
                height={144}
                priority
                className="size-full object-cover transition-opacity duration-200 group-hover:opacity-0"
              />
              <Image
                src="/james_verceluz_smile.png"
                alt=""
                aria-hidden
                width={144}
                height={144}
                className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
            <h1 className="text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.035em] text-balance text-ink sm:text-[2.625rem] xl:text-[2.875rem]">
              {PROFILE.firstName} {PROFILE.lastName}
            </h1>
          </div>

          <div className="settle" style={delay(80)}>
            <p className="mt-5 text-[1.0625rem] font-medium leading-snug tracking-tight text-ink">
              {PROFILE.discipline}
            </p>
            <p className="mt-3 max-w-[34rem] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
              {PROFILE.lead}
            </p>
          </div>

          <div className="settle" style={delay(160)}>
            <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Status</dt>
                <dd className="font-semibold text-ink">Open to work</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="text-ink-3">Based</dt>
                <dd className="text-ink-2">Naga City, PH</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="text-ink-3">Ongoing</dt>
                {/* Entitled is a work's title, so it is set in italics like one. */}
                <dd className="text-ink-2">
                  AWS re/Start &amp; <i>Entitled</i>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href={RESUME_PATH} {...external} className={primaryButton}>
                Resumé (PDF)
                <NewTab />
              </a>
              <EmailMenu subject="Full-time role" triggerClassName={secondaryButton}>
                <Mail aria-hidden className="size-4 text-ink-3" strokeWidth={1.75} />
                Email me
              </EmailMenu>
            </div>
          </div>

          <div className="settle mt-10 hidden lg:block" style={delay(240)}>
            <SectionNav activeId={activeId} />
          </div>

          <div
            data-print="hide"
            className="settle mt-auto hidden items-center justify-between gap-4 pt-8 lg:flex"
            style={delay(320)}
          >
            <div className="-ml-2 flex items-center gap-1">
              <a href={CONTACT.github} {...external} aria-label="GitHub" className={iconLink}>
                <GithubMark className="size-[1.125rem]" />
              </a>
              <a href={CONTACT.linkedin} {...external} aria-label="LinkedIn" className={iconLink}>
                <LinkedinMark className="size-[1.125rem]" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* ── The scrolling column of work ───────────────────── */}
        <main id="main" tabIndex={-1} className="pb-16 focus:outline-none lg:pb-24 lg:pt-14">
          <div className="settle" style={delay(200)}>
            <Journey />
          </div>

          <section id="work" className={section}>
            <SectionHead title="Selected work" meta={`${PROJECTS.length} projects`} />

            <ol className="group/list space-y-4">
              {PROJECTS.map((project, i) => (
                <li key={project.slug}>
                  <ProjectRow project={project} eager={i === 0} />
                </li>
              ))}
            </ol>

            {/* Earlier work: kept honest, kept out of the way. */}
            <details className="group/earlier mt-10">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 rounded-lg text-sm [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-ink">Earlier work</span>
                <span className="nums text-ink-3">{EARLIER_WORK.length} student repos</span>
                <ChevronDown
                  aria-hidden
                  className="size-4 shrink-0 text-ink-3 transition-transform duration-200 group-open/earlier:rotate-180"
                  strokeWidth={1.75}
                />
              </summary>

              <ul className="mt-2 divide-y divide-line border-y border-line">
                {EARLIER_WORK.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.live ?? item.github}
                      {...external}
                      className="group grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
                    >
                      <span className="inline-flex items-center gap-1 text-[0.9375rem] font-medium text-ink transition-colors group-hover:text-accent">
                        {item.name}
                        <NewTab />
                      </span>
                      <span>
                        <span className="block text-sm leading-relaxed text-ink-2">{item.blurb}</span>
                        <span className="mt-1 block text-[0.8125rem] text-ink-3">
                          {item.stack.join(" · ")}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </section>

          <section id="experience" className={section}>
            <SectionHead title="Experience" meta={`${EXPERIENCE.length} roles`} />

            <ol className="space-y-12">
              {EXPERIENCE.map((role) => (
                <li key={role.title} className={row}>
                  <p className="nums pt-0.5 text-[0.8125rem] text-ink-3">
                    {formatSpan(role.start, role.end)}
                    {role.end === null && (
                      <span className="mt-1.5 block font-medium text-ink-2">Current</span>
                    )}
                  </p>
                  <div className="min-w-0">
                    <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-2">{role.org}</p>
                    <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
                      {role.summary}
                    </p>

                    {role.points.length > 0 && (
                      <ul className="mt-3 max-w-[62ch] space-y-1.5">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-3">
                            <span aria-hidden className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-line-strong" />
                            <span className="text-pretty">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {role.stack.length > 0 && (
                      <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-1.5">
                        {role.stack.map((tech) => (
                          <TechTag key={tech} name={tech} />
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="profile" className={section}>
            <SectionHead title="Profile" />

            <div className={row}>
              <div className="relative aspect-3/4 w-32 overflow-hidden rounded-xl border border-line bg-surface-2 sm:w-full">
                <Image
                  src="/profile-pic.jpg"
                  alt={PROFILE.shortName}
                  fill
                  className="object-cover"
                  sizes="9rem"
                />
              </div>
              <div className="mt-4 space-y-4 sm:mt-0">
                {PROFILE.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section id="capabilities" className={section}>
            <SectionHead title="Capabilities" />

            <dl className="divide-y divide-line">
              {SKILLS.map((group) => (
                <div key={group.label} className={`${row} py-4 first:pt-0`}>
                  <dt className="pt-1.5 text-sm text-ink-3">{group.label}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <TechChip key={item} name={item} />
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="credentials" className={section}>
            <SectionHead title="Credentials" />

            <div className="space-y-10">
              <div className={row}>
                <p className="nums pt-0.5 text-[0.8125rem] text-ink-3">
                  {formatSpan(EDUCATION.start, EDUCATION.end)}
                </p>
                <div className="min-w-0">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink">
                    {EDUCATION.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-2">{EDUCATION.school}</p>
                  <p className="nums mt-3 text-sm text-ink-2">
                    <span className="text-ink-3">QPI (GPA)</span> {EDUCATION.qpi}
                  </p>
                  <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-ink-3">{EDUCATION.org}</p>
                </div>
              </div>

              <div id="training" className={row}>
                <p className="nums pt-0.5 text-[0.8125rem] text-ink-3">
                  {formatSpan(TRAINING.start, TRAINING.end)} (expected)
                  <span className="mt-1.5 flex items-center gap-1.5 font-medium text-ink-2">
                    <StatusDot open />
                    In progress
                  </span>
                </p>
                <div className="min-w-0">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink">
                    {TRAINING.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-2">{TRAINING.sponsors}</p>
                  <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-ink-3">
                    {TRAINING.note}
                  </p>
                  <a
                    href={TRAINING.log}
                    {...external}
                    className="group mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
                  >
                    Practice log
                    <NewTab />
                  </a>
                </div>
              </div>

              <div className={row}>
                <p className="pt-0.5 text-[0.8125rem] text-ink-3">Certifications</p>
                <ul className="min-w-0 space-y-4">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.title}>
                      <p className="text-[0.9375rem] font-medium leading-snug text-ink">{cert.title}</p>
                      <p className="nums mt-0.5 text-sm text-ink-3">
                        {[cert.issuer, cert.detail, cert.year].filter(Boolean).join(" · ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="contact" className={section}>
            <SectionHead title="Get in touch" meta="Open to work" />

            <p className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-ink text-balance">
              Hiring a full-stack developer? I&apos;m open to full-time roles.
            </p>
            <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
              I work from Naga City, Philippines ({PROFILE.timezone}) and have shipped for
              clients in Canada and Japan, so working remotely across time zones is
              familiar. Email is the fastest way to reach me.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <EmailMenu subject="Full-time role" triggerClassName={primaryButton}>
                <Mail aria-hidden className="size-4" strokeWidth={1.75} />
                Email me
              </EmailMenu>
              <a href={RESUME_PATH} {...external} className={secondaryButton}>
                Resumé (PDF)
                <NewTab />
              </a>
            </div>

            {/* A div, not a p: the email menu's popover holds block content. */}
            <div className="mt-6 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
              Have a project to build instead? I take freelance work too.{" "}
              <EmailMenu
                subject="Freelance project"
                triggerClassName="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Tell me what it has to do.
              </EmailMenu>
            </div>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              <div className={`${row} py-3.5`}>
                <dt className="text-sm text-ink-3 sm:pt-px">Location</dt>
                <dd className="text-[0.9375rem] text-ink-2">
                  {PROFILE.location} · {PROFILE.timezone}
                </dd>
              </div>
              <div className={`${row} py-3.5`}>
                <dt className="text-sm text-ink-3 sm:pt-px">Email</dt>
                <dd className="min-w-0">
                  <CopyField value={CONTACT.email} name="email address" className="text-[0.9375rem] text-ink-2" />
                </dd>
              </div>
              <div className={`${row} py-3.5`}>
                <dt className="text-sm text-ink-3 sm:pt-px">Phone</dt>
                <dd className="min-w-0">
                  <CopyField
                    value={CONTACT.phone}
                    href={`tel:${CONTACT.phoneRaw}`}
                    name="phone number"
                    className="nums text-[0.9375rem] text-ink-2"
                  />
                </dd>
              </div>
              <div className={`${row} py-4`}>
                <dt className="text-sm text-ink-3 sm:pt-2">Elsewhere</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <a href={CONTACT.github} {...external} className={chip}>
                        <GithubMark className="size-4" />
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href={CONTACT.linkedin} {...external} className={chip}>
                        <LinkedinMark className="size-4" />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <QRDialog triggerClassName={chip}>
                        <QrCode aria-hidden className="size-4" strokeWidth={1.75} />
                        Viber
                      </QRDialog>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </section>

          <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[0.8125rem] text-ink-3">
            <p className="nums">
              © {new Date().getFullYear()} {PROFILE.shortName} · Updated {updated} · Next.js
            </p>
            <ThemeToggle className="lg:hidden" />
          </footer>
        </main>
      </div>
    </>
  );
}
