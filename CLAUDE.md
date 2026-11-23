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

**Sections and navigation.** `SECTIONS` in `lib/data.ts` defines the section ids and order. `app/page.tsx` renders a `<section id=…>` for each, and `useScrollSpy` + `Rail` (left rail, desktop) + `Navbar` highlight the active one. Adding or renaming a section means updating `SECTIONS` and the matching `id` in `page.tsx` together.

**Tech icons are generated.** `lib/tech-icons.generated.ts` is produced by `scripts/gen-tech-icons.mjs`, which pulls only the needed SVGs out of the `tech-stack-icons` package so its ~8.7MB registry never ships to the client. Don't edit the generated file. To add an icon for a new stack label, add `"Exact Label": "icon-key"` to `MAP` in the script (label must match the string used in `lib/data.ts` exactly) and rerun it. Labels without a mapping render as text only, which is intentional. `TechTag`/`TechChip` in `app/components/tech-tag.tsx` render only the light mark, since the site is light only.

**Components.** The live UI components are in `app/components/`. The root `components/` directory (`LiquidEther`, `TextType`, `components/ui/*` from shadcn/Aceternity/React Bits registries) is not imported anywhere in `app/`. It is the only consumer of `three`, `gsap`, `motion`, `react-fast-marquee` and `sweetalert2`. `components.json` still points shadcn installs there.

## Styling

- The visual system (the "provenance record": buff paper, ribbon red, unwoven thread for in-progress work) is documented in `DESIGN.md`. Read it before visual changes.
- Tailwind v4 with no `tailwind.config`. Design tokens are CSS variables on `:root` in `app/globals.css`, mapped into Tailwind via `@theme inline`. Use the semantic classes (`bg-paper`, `text-ink`, `text-ink-2/3`, `border-rule`, `text-accent`, `border-thread`, `font-display`, `font-caps`, …), not raw colors.
- `@theme inline` does not emit `--font-display`/`--font-body` at runtime, so hand-written CSS must use the next/font variables (`--font-oranienbaum`, `--font-spectral`, `--font-spectral-sc`) directly.
- Custom utilities in `globals.css`: `paper-grain`, `annot`/`annot-sm`, `display-xl/md/lead/sm`, `prose-sheet`, `silk`, `plate` (bookmark tab; set `--tab` to recolor), `bookmark`, `tag`/`tag-outline`, `photo-corners`, `mounted`, `ornament-rule`, `load-rise/draw/fade`, `ribbon-draw`, `node-arrive`, `reveal`.
- Light only: the site is a paper record and ships no dark theme.
- Fonts (Oranienbaum display, Spectral text, Spectral SC small caps) are loaded with `next/font/google` in `layout.tsx` and exposed as CSS variables.
- Scroll-reveal: `layout.tsx` sets `data-js` on `<html>` with an inline script, and `.reveal` only hides content under `html[data-js]`, so content stays visible without JS. `Reveal` (`app/components/reveal.tsx`) flips `data-shown` via IntersectionObserver. Keep that pairing when adding animated content; `prefers-reduced-motion` disables all of it.
- `html` uses `scroll-padding-top` to clear the sticky nav. Don't add `scroll-margin` to sections, since the two stack.
- Print: elements with `data-print="hide"` and the paper grain are hidden in print.

## Conventions

- Path alias `@/*` maps to the repo root.
