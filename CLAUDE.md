# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site: Next.js 16 App Router, React 19, Tailwind CSS v4, deployed on Vercel (with `@vercel/analytics`).

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also the type-check)
npm run lint     # eslint (flat config, next core-web-vitals + typescript)
node scripts/gen-tech-icons.mjs   # regenerate lib/tech-icons.generated.ts
npm run resume   # render resume/resume.html → public/Resume.pdf (macOS: needs Google Chrome in /Applications)
```

There is no test suite.

## Architecture

**Content is data, not markup.** Every piece of copy (profile, contact, experience, projects, skills, education, certifications, section list) lives in `lib/data.ts`, typed by `lib/type.ts`. Both pages render from it: `app/page.tsx` (the single-page portfolio) and `app/resume/page.tsx` (an HTML resumé that links to `public/Resume.pdf`). `app/layout.tsx` also builds SEO metadata and the Person JSON-LD from `PROFILE`/`CONTACT`. Updating content almost always means editing `lib/data.ts` only, plus images in `public/projects/`.

**The resume PDF is generated, and it is the source of truth for claims.** `public/Resume.pdf` is rendered from `resume/resume.html` (CMU Serif, self-hosted in `resume/fonts/`) by `npm run resume`. Never edit or replace the PDF by hand. It must stay one US Letter page: after any copy change, rerun the command and check the page count. Site copy in `lib/data.ts` should not claim figures or facts the resume doesn't.

**Sections and navigation.** `SECTIONS` in `lib/data.ts` defines the section ids and order. `app/page.tsx` renders a `<section id=…>` for each (`index` is the profile column itself), and `useScrollSpy` drives `SectionNav` (desktop, in the pinned profile column) and `Navbar` (the sticky bar and menu below 1024px). Adding or renaming a section means updating `SECTIONS` and the matching `id` in `page.tsx` together.

**Tech icons are generated.** `lib/tech-icons.generated.ts` is produced by `scripts/gen-tech-icons.mjs`, which pulls only the needed SVGs out of the `tech-stack-icons` package so its ~8.7MB registry never ships to the client. Don't edit the generated file. To add an icon for a new stack label, add `"Exact Label": "icon-key"` to `MAP` in the script (label must match the string used in `lib/data.ts` exactly) and rerun it. Labels without a mapping render as text only, which is intentional. `TechTag`/`TechChip` in `app/components/tech-tag.tsx` render the light mark, and swap to the dark mark in dark mode when the icon set ships one (`.mark-light`/`.mark-dark` in `globals.css`).

**Components.** The live UI components are in `app/components/`. The root `components/` directory (`LiquidEther`, `TextType`, `components/ui/*` from shadcn/Aceternity/React Bits registries) is not imported anywhere in `app/`. It is the only consumer of `three`, `gsap`, `motion`, `react-fast-marquee` and `sweetalert2`. `components.json` still points shadcn installs there.

## Styling

- The visual system (the developer-portfolio standard: a pinned profile column beside one scrolling column of work, cool neutrals, one blue accent) is documented in `DESIGN.md`. Read it before visual changes.
- Tailwind v4 with no `tailwind.config`. Design tokens are CSS variables in `app/globals.css`, mapped into Tailwind via `@theme inline`. Use the semantic classes (`bg-bg`, `bg-surface`, `bg-surface-2`, `text-ink`, `text-ink-2/3`, `border-line`, `border-line-strong`, `text-accent`, `bg-ok`, `shadow-lift`, `shadow-pop`), not raw colors.
- Two themes. Light tokens sit on `:root`; dark tokens apply under `prefers-color-scheme: dark` unless `<html data-theme="light">`, and always under `data-theme="dark"`. Change a token in both dark blocks. `ThemeToggle` (System / Light / Dark) stores the choice in `localStorage.theme`, and an inline script in `layout.tsx` applies it before paint. Print always uses the light tokens.
- Status vocabulary: a solid green dot (`bg-ok`) is shipped or live; a hollow ring is in progress. The accent is for links, the active nav mark and focus only.
- One font, Geist, loaded with `next/font/google` in `layout.tsx` as `--font-geist-sans` and mapped to `font-sans`. Dates and counts use the `nums` utility (tabular numerals).
- Motion: one load moment (`.settle`, staggered with `--d`) on the profile column and the journey; hover transitions after that. No scroll reveals. `prefers-reduced-motion` disables all of it.
- `html` uses `scroll-padding-top` to clear the sticky bar. Don't add `scroll-margin` to sections, since the two stack.
- Print: elements with `data-print="hide"` are hidden in print.

## Conventions

- Path alias `@/*` maps to the repo root.
