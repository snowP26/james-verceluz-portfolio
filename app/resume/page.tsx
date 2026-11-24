import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { CONTACT, PROFILE, RESUME_PATH } from "@/lib/data";
import { formatMonth } from "@/lib/utils";
import { SectionHead } from "../components/section-head";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: "Resumé",
  description: `Resumé of ${PROFILE.firstName} ${PROFILE.lastName}, ${PROFILE.discipline} in ${PROFILE.location}.`,
  alternates: { canonical: "/resume" },
};

const FILE_NAME = "Resume.pdf";

const primaryButton =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85";
const secondaryButton =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line-strong bg-surface px-4 text-sm font-medium text-ink transition-colors hover:bg-surface-2";

export default function ResumePage() {
  return (
    <>
      <header data-print="hide" className="sticky top-0 z-50 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-5 sm:px-8">
          <Link
            href="/"
            className="group inline-flex h-9 items-center gap-2 rounded-lg pr-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
            <span className="hidden sm:inline">{PROFILE.shortName}</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <a href={RESUME_PATH} download={FILE_NAME} className={primaryButton}>
              <ArrowDownToLine aria-hidden className="size-4" strokeWidth={1.75} />
              Download
            </a>
          </div>
        </div>
      </header>

      <main
        id="main"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl px-5 pb-24 pt-12 focus:outline-none sm:px-8 sm:pt-16"
      >
        <SectionHead as="h1" title="Resumé" meta={`Updated ${formatMonth(PROFILE.revision)}`} />
        <p className="-mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-2 text-pretty">
          {PROFILE.firstName} {PROFILE.lastName}, {PROFILE.discipline.toLowerCase()}{" "}
          based in {PROFILE.location}. One page,{" "}
          <span className="whitespace-nowrap">updated {formatMonth(PROFILE.revision)}.</span>
        </p>

        {/* No inline viewer: the browser's PDF chrome is dark and unthemeable, so the page hands the file over. */}
        <div className="mt-10 flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden
              className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-ink-2"
            >
              <FileText className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-[0.9375rem] font-medium text-ink">{FILE_NAME}</p>
              <p className="mt-0.5 text-sm text-ink-3">Open the PDF to read it, or download a copy.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <a href={RESUME_PATH} target="_blank" rel="noreferrer" className={primaryButton}>
              Open PDF
              <ExternalLink aria-hidden className="size-3.5" strokeWidth={1.75} />
            </a>
            <a href={RESUME_PATH} download={FILE_NAME} className={secondaryButton}>
              <ArrowDownToLine aria-hidden className="size-4" strokeWidth={1.75} />
              Download
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-ink-3">Prefer to reach out?</span>
          <a
            href={CONTACT.mailto}
            className="font-medium text-accent hover:underline hover:underline-offset-4"
          >
            {CONTACT.email}
          </a>
          <Link href="/#contact" className="text-ink-3 transition-colors hover:text-ink">
            All contact details
          </Link>
        </div>
      </main>
    </>
  );
}
