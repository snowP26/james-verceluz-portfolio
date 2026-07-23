import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ExternalLink } from "lucide-react";
import { ModeToggle } from "../components/mode-switch";
import {
  CERTIFICATIONS,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  RESUME_PATH,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.discipline} in ${PROFILE.location}.`,
  alternates: { canonical: "/resume" },
};

const FILE_NAME = "James_Verceluz_Resume.pdf";

const summary = [
  { k: "Roles", v: `${EXPERIENCE.length} · Rails internship, freelance` },
  { k: "Projects", v: `${PROJECTS.length} selected` },
  { k: "Certifications", v: String(CERTIFICATIONS.length) },
  { k: "Degree", v: `${EDUCATION.degree}, ${EDUCATION.end.split(".")[0]}` },
];

export default function ResumePage() {
  return (
    <>
      <div
        aria-hidden
        data-print="hide"
        className="sheet-grid pointer-events-none fixed inset-0 -z-10"
      />

      <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[76rem] items-center gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="annot-sm group inline-flex items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft
              className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1"
              strokeWidth={1.75}
            />
            <span className="hidden sm:inline">{PROFILE.shortName}</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={RESUME_PATH}
              download={FILE_NAME}
              className="annot-sm inline-flex items-center gap-2 bg-accent px-3.5 py-2.5 text-accent-ink transition-opacity hover:opacity-90"
            >
              <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
              Download
            </a>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[76rem] px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="flex items-center gap-4">
          <span className="annot text-accent">PDF</span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
          <span className="annot text-ink-3">Rev {PROFILE.revision}</span>
        </div>

        <h1 className="display-md mt-5 text-ink">Resume</h1>
        <p className="prose-sheet mt-4 max-w-xl">
          {PROFILE.firstName} {PROFILE.lastName} — {PROFILE.discipline.toLowerCase()},{" "}
          {PROFILE.location}. Two pages, current as of rev {PROFILE.revision}.
        </p>

        <dl className="mt-10 grid divide-y divide-rule border-y border-rule sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {summary.map((row) => (
            <div key={row.k} className="py-5 sm:px-6 sm:first:pl-0">
              <dt className="annot-sm text-ink-3">{row.k}</dt>
              <dd className="mt-2.5 font-mono text-sm text-ink-2">{row.v}</dd>
            </div>
          ))}
        </dl>

        {/* Inline viewer — desktop browsers render PDFs natively. */}
        <div className="plate relative mt-12 hidden border border-rule bg-paper-raised md:block">
          <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-3">
            <span className="annot-sm text-ink-3">{FILE_NAME}</span>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="annot-sm inline-flex items-center gap-2 text-ink-3 transition-colors hover:text-accent"
            >
              Open in new tab
              <ExternalLink className="size-3.5" strokeWidth={1.75} />
            </a>
          </div>
          <object
            data={`${RESUME_PATH}#view=FitH`}
            type="application/pdf"
            className="block h-[calc(100vh-9rem)] min-h-[34rem] w-full"
            aria-label={`Resume of ${PROFILE.firstName} ${PROFILE.lastName}`}
          >
            {/* Shown only when the browser has no inline PDF viewer. */}
            <div className="flex h-full flex-col items-center justify-center p-10 text-center">
              <p className="prose-sheet">
                This browser can&apos;t display PDFs inline.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="annot inline-flex items-center gap-2.5 bg-accent px-5 py-4 text-accent-ink"
                >
                  Open PDF
                  <ExternalLink className="size-3.5" strokeWidth={1.75} />
                </a>
                <a
                  href={RESUME_PATH}
                  download={FILE_NAME}
                  className="annot inline-flex items-center gap-2.5 border border-rule px-5 py-4 text-ink-2"
                >
                  <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
                  Download
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Small screens: inline PDF rendering is unreliable, so don't try. */}
        <div className="plate relative mt-12 border border-rule bg-paper-raised p-8 text-center md:hidden">
          <p className="annot-sm text-ink-3">{FILE_NAME}</p>
          <p className="prose-sheet mt-4">
            Open the PDF to read it, or download a copy.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="annot inline-flex items-center justify-center gap-2.5 bg-accent px-5 py-4 text-accent-ink"
            >
              Open PDF
              <ExternalLink className="size-3.5" strokeWidth={1.75} />
            </a>
            <a
              href={RESUME_PATH}
              download={FILE_NAME}
              className="annot inline-flex items-center justify-center gap-2.5 border border-rule px-5 py-4 text-ink-2"
            >
              <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
              Download
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="annot-sm text-ink-3">Prefer to reach out?</span>
          <a
            href={CONTACT.mailto}
            target="_blank"
            rel="noopener noreferrer"
            className="annot-sm text-accent transition-opacity hover:opacity-80"
          >
            {CONTACT.email}
          </a>
          <Link
            href="/#contact"
            className="annot-sm text-ink-3 transition-colors hover:text-ink"
          >
            All contact details
          </Link>
        </div>
      </main>
    </>
  );
}
