---
name: James Verceluz Portfolio
description: A conventional developer portfolio at Linear / Vercel polish, in cool neutrals with one blue, in light and dark.
colors:
  bg: "#fafafa"
  surface: "#ffffff"
  surface-2: "#f4f4f5"
  ink: "#09090b"
  ink-2: "#3f3f46"
  ink-3: "#63636b"
  line: "#e4e4e7"
  line-strong: "#d4d4d8"
  accent: "#2453d4"
  ok: "#16a34a"
  bg-dark: "#0b0b0d"
  surface-dark: "#131316"
  surface-2-dark: "#1b1b1f"
  ink-dark: "#f4f4f5"
  ink-2-dark: "#c4c4cc"
  ink-3-dark: "#94949d"
  line-dark: "#26262b"
  line-strong-dark: "#3a3a41"
  accent-dark: "#86a6ff"
  ok-dark: "#4ade80"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-2}"
  tech-tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.full}"
    padding: "0 10px"
    height: "28px"
  project-row-hover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
  theme-toggle:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "2px"
---

# Design System: James Verceluz Portfolio

## Overview

**Creative North Star: "The Well-Kept Repo"**

A conventional developer portfolio, executed with Linear / Vercel polish: a pinned profile column beside a scrolling column of work, in near-white or near-black neutrals with one blue. Nothing is novel in structure; the quality is in the restraint, the spacing, and the contrast. It reads as a tool someone cared about, not a poster.

One typeface (Geist) carries display, text and tabular dates. Hierarchy comes from weight, size and the three ink tiers, not from decoration. The site ships two themes (System, Light, Dark), both first-class. Product truth lives in PRODUCT.md and is not repeated here.

**Key Characteristics:**
- Cool neutrals, one blue accent, one green for shipped.
- Flat at rest; depth appears only as response to hover and in the one resume card.
- One load animation, no scroll reveals.
- Status is drawn, not worded: solid green dot is live, hollow ring is in progress.
- Content width capped near 62ch; the page never feels dense.

## Colors

Cool zinc neutrals in two themes, with a single blue for interaction and a single green for status. Light tokens sit on `:root`; dark tokens apply under `prefers-color-scheme: dark` unless `html[data-theme="light"]`, and always under `html[data-theme="dark"]`. Dark-theme values are the `-dark` keys in the frontmatter. Print forces light.

### Primary
- **Link Blue** (#2453d4 light, #86a6ff dark): links, the active section-nav line, the active menu dot, focus rings, caret and selection tint. Contrast 5.9:1 or better on light, 7.3:1 or better on dark.

### Secondary
- **Shipped Green** (#16a34a light, #4ade80 dark): the solid dot meaning shipped or live, and the copy-confirmed check. Nothing else.

### Neutral
- **Page** (#fafafa / #0b0b0d): page background and browser theme-color.
- **Surface** (#ffffff / #131316): hovered work rows, the resume card, the Resumé button, toggle track.
- **Surface 2** (#f4f4f5 / #1b1b1f): tech tags, hover fills, image placeholders, active toggle option.
- **Ink** (#09090b / #f4f4f5): headings, primary text, the primary button fill.
- **Ink 2** (#3f3f46 / #c4c4cc): body copy and secondary labels.
- **Ink 3** (#63636b / #94949d): metadata, dates, quiet bullets. 5.4:1 or better on every light surface, 5.7:1 or better on dark.
- **Line** (#e4e4e7 / #26262b) and **Line Strong** (#d4d4d8 / #3a3a41): section rules, card borders, inactive nav lines.

### Named Rules
**The Status Vocabulary Rule.** A solid green dot means shipped or live and nothing else. A hollow ink-3 ring means in progress. "Open to work" and "Current" are plain text with no dot.

**The One Blue Rule.** Blue appears only on links, the active nav mark, and focus. It is never a fill, a badge, or decoration.

**The Contrast Floor Rule.** The quietest text tier is ink-3 and it must hold its measured contrast on every surface it sits on. Never dim text with opacity.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist (same family)
**Label/Mono Font:** none; dates and counts use Geist with tabular numerals.

**Character:** One neutral, precise grotesque used at a tight scale. Semibold with negative tracking for headings; regular with generous leading for reading.

### Hierarchy
- **Display** (600, 2.25rem rising to 2.625rem at sm and 2.875rem at xl, 1.04, -0.035em): the name in the profile column, once.
- **Headline** (600, 1.25rem, -0.025em): section headings, each over a hairline rule. The mobile menu uses 1.5rem semibold links.
- **Title** (600, 1.0625rem, snug): project names.
- **Body** (400, 0.9375rem, relaxed leading, `text-pretty`, max 62ch): summaries and prose in ink-2.
- **Label** (500, 0.8125rem to 0.875rem): nav items, metadata lines, tags (0.75rem). Tabular figures via the `nums` utility for dates, spans, counts.

### Named Rules
**The One Family Rule.** Geist only. No second display face, no mono accent for decoration.

**The Sentence Case Rule.** Labels are sentence case; no all-caps eyebrows or letter-spaced kickers.

## Layout

Below 1024px: a slim sticky 3.5rem bar (name, Resumé, menu) over one column, `max-w-2xl`, 20px gutters (32px at sm). At lg and up: an 80rem shell with a pinned, viewport-tall profile column (5fr) beside the scrolling column (7fr), 64px gap (96px at xl). The pinned column holds the name, the section nav, and the theme toggle; below lg the toggle moves to the foot of the page and the menu.

Sections are separated by top padding (5rem, 6rem at lg), not by boxes. Work rows are inset 16px with a negative margin so text aligns with the column while the hover surface bleeds outward. Project rows place the thumbnail at 12rem beside the text (sm), full width above it (lg, 1024-1279px, where the column is narrow), and 14rem beside it (xl). Definition-style rows use a 9rem label column from sm up. `scroll-padding-top` (4.5rem, 5rem at lg) clears the sticky bar; sections never add scroll-margin.

## Elevation & Depth

Flat by default, with tonal layering (page, surface, surface-2) and hairline borders doing most of the work. Shadows are a response, not a resting state.

### Shadow Vocabulary
- **Lift** (`0 1px 2px rgb(9 9 11 / 0.04), 0 8px 24px -12px rgb(9 9 11 / 0.12)`; dark adds a 1px top inset highlight and a deeper black ambient): hovered work row at lg and up, and the resume card.
- **Pop** (`0 1px 2px rgb(9 9 11 / 0.06), 0 16px 40px -16px rgb(9 9 11 / 0.28)`): reserved for dialogs such as the QR dialog.

### Named Rules
**The Hover Lift Rule.** The hovered work row lifts (surface background plus Lift). Siblings dim only their screenshots to 0.4 opacity; text never dims.

## Shapes

Soft, small radii; nothing sharp, nothing pill-shaped except tags. 4px focus-ring corners, 6px thumbnails, 8px (lg) for buttons, inputs and toggle, 12px for work rows and the resume card, full-round for tech tags and status dots. Borders are 1px in line or line-strong. Thumbnails are cropped screenshots (16:10, top-anchored) in a 1px line border.

## Components

### Buttons
- **Shape:** 8px radius, 40px high (36px in the mobile bar, 48px in the menu).
- **Primary:** ink fill with page-colored text, 16px horizontal padding; hover drops opacity to 0.85.
- **Secondary:** surface fill, line-strong border, ink text; hover fills surface-2. An arrow-up-right icon in ink-3 marks external links.
- **Focus:** 2px accent outline, 2px offset.

### Tech tags
28px high pill, surface-2 fill, ink-2 text at 0.75rem medium, with the brand mark (14px) when one exists and text alone otherwise. Dark variants of marks swap with the theme.

### Work row
Thumbnail, a metadata line (status dot, label, span, place), a title that is a stretched link with an arrow nudging up-right on hover, role line, summary, bullet points in ink-3, stack tags, then live and source links with 44px touch height. Earlier work sits in a details disclosure.

### Theme toggle
A System / Light / Dark radio group of 32px icon cells in a bordered track; the checked cell takes surface-2 and ink. Choice persists in `localStorage.theme`; an inline script in the layout applies it before paint.

### Navigation
- **Desktop section nav:** a short hairline plus a label per section. Inactive: 1.5rem line in line-strong, ink-3 label. Hover: line grows to 2.5rem. Active: line grows to 3.5rem in accent, label turns ink.
- **Mobile:** sticky bar with a bottom border that appears after 8px of scroll; the menu is a native full-screen dialog with large semibold links, an accent dot on the active one, a full-width primary Resumé button, and the theme toggle.

### Journey timeline
A vertical list of stops with 10px dots (solid green or hollow ring), a hairline connector, and right-aligned tabular dates; rows tint to surface-2 on hover.

### Resume card
At every width /resume shows a bordered surface card with Open PDF (primary) and Download (secondary); there is no inline PDF viewer because its chrome cannot be themed.

### Motion
One load moment: `.settle` (opacity 0 to 1, 8px rise, 4px blur to none, 0.6s `cubic-bezier(0.16, 1, 0.3, 1)`, staggered by `--d`) on the profile column and the journey. No scroll reveals. State transitions are 200-300ms color, width or transform. Reduced motion collapses every animation and transition to 0.01ms and disables smooth scroll.

## Do's and Don'ts

### Do:
- **Do** use semantic classes (`bg-bg`, `bg-surface`, `text-ink-2/3`, `border-line`, `text-accent`), never raw hex, so both themes follow.
- **Do** keep a pair of values for every new color token: light on `:root`, dark in both the media query block and `html[data-theme="dark"]`.
- **Do** check ink-3 contrast on any new surface before using it for text.
- **Do** keep touch targets at 44px for in-row links and copy buttons.
- **Do** keep `data-print="hide"` on chrome that must not print.

### Don't:
- **Don't** use green for anything but shipped or live, or add dots to "Open to work" or "Current".
- **Don't** use the blue as a fill, badge, or decoration.
- **Don't** dim text with opacity; dim images only.
- **Don't** add scroll-triggered reveals or a second entrance animation.
- **Don't** add a second typeface, uppercase eyebrows, or resting shadows.
- **Don't** embed an inline PDF viewer on /resume.

Not canonized: `app/components/useIsVisible.tsx` is unused and predates this build; `public/projects/kilos.png`, `Entitled.png`, `groovy.png`, `groovy2.png`, `stadiops.png` are unreferenced source screenshots (shipped plates are the `.webp` crops); the dev-only Next.js indicator is not part of the design.
