---
name: James Verceluz Portfolio
description: A provenance record on archival buff paper, with one red silk ribbon carrying the work from Naga City to its evidence.
colors:
  paper: "#ece3cf"
  paper-raised: "#f5efe2"
  paper-sunk: "#e2d7bf"
  ink: "#2a241c"
  ink-2: "#4b4235"
  ink-3: "#61574a"
  rule: "#cdbf9f"
  rule-strong: "#8f826d"
  ribbon-red: "#a3201b"
  ribbon-selvedge: "#7e1814"
  ribbon-sheen: "#cf5145"
  accent-ink: "#f7f0e1"
  thread: "#9b958a"
typography:
  display-xl:
    fontFamily: "Oranienbaum, Times New Roman, serif"
    fontSize: "clamp(3.5rem, 7.8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  display-lead:
    fontFamily: "Oranienbaum, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  display-md:
    fontFamily: "Oranienbaum, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  display-sm:
    fontFamily: "Oranienbaum, Times New Roman, serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.05
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Spectral SC, Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.09em"
  label-sm:
    fontFamily: "Spectral SC, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.09em"
rounded:
  sheet: "6px"
  node: "9999px"
spacing:
  shell-gutter: "20px"
  shell-gutter-sm: "32px"
  section-y: "80px"
  section-y-sm: "96px"
  plate-pad: "24px"
  plate-pad-lg: "40px"
  plate-pad-lead: "48px"
components:
  tag-primary:
    backgroundColor: "{colors.ribbon-red}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    height: "48px"
    padding: "12px 28px 12px 20px"
  tag-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "48px"
    padding: "12px 28px 12px 20px"
  tag-outline-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ribbon-red}"
  plate:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    padding: "24px"
  plate-in-progress:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
  stack-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-sm}"
    padding: "6px 10px"
  nav-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.label-sm}"
    padding: "10px 12px"
  nav-link-active:
    textColor: "{colors.ribbon-red}"
---

# Design System: James Verceluz Portfolio

## Overview

**Creative North Star: "The Provenance Record"**

The site is an archival record, not a showcase. Buff paper with a faint laid grain is the stock; one red silk ribbon is the custody line that runs from Naga City to each client, folding at every project with its evidence attached. Everything that is not ribbon is ledger: taupe hairlines, small-caps dated annotations, circular ink stamps, mounted prints. Work that is shipped is drawn in solid red; work still in progress is drawn in unwoven gray thread. That one binary is the system's state vocabulary and it recurs everywhere a status can appear.

The mood is quiet, tactile and exact. Density is moderate and reading-first: generous section padding, a 76rem shell, long Spectral paragraphs held to a readable measure. Red is not decoration; it marks custody, display type and every action, so its presence always means "this is real and you can follow it". The light theme is the only theme, by decision: a paper record has no night mode.

The earlier cobalt blueprint look (Archivo, Plex Mono, grid, dark mode) was replaced, not extended; none of it carries over.

**Key Characteristics:**
- Buff paper ground with an SVG-noise grain; three paper tones for depth by tint, not by shadow.
- One saturated hue, ribbon red, on display type, actions, bookmarks, the spine and the journey.
- Gray thread (dashed) for every in-progress state; solid red for shipped.
- Condensed ledger serif display (Oranienbaum) over Spectral text and Spectral SC small caps.
- Swallow-tail bookmarks, notched tag buttons, circular stamps, photo corners: the object vocabulary of an archive.
- One orchestrated load where the journey ribbon draws once; quiet reveals after.

## Colors

A warm, low-chroma paper-and-ink palette with a single deep silk red and one neutral gray thread.

### Primary
- **Ribbon Red** (#a3201b, `--accent`, also `--live`): the custody line. Display type (name, section titles, nav brand), every action (primary tag, links, focus ring), bookmarks, the spine ribbon, shipped nodes, and shipped stamps. Selection background.
- **Ribbon Selvedge** (#7e1814): the darker woven edge of the silk. Used only in the `.silk` gradient and the journey ribbon's outer stroke.
- **Ribbon Sheen** (#cf5145): the highlight of the silk on the journey ribbon (75% opacity, 1.5px). The `.silk` gradient peaks at #c0392f; this is a build-specific highlight of the same family.

### Neutral
- **Buff Paper** (#ece3cf, `--paper`): page ground, with the grain overlay in the mobile menu. Also the theme-color.
- **Raised Paper** (#f5efe2, `--paper-raised`): plates, the journey panel, dropdowns, dialog. The lighter sheet laid on the ground.
- **Sunk Paper** (#e2d7bf, `--paper-sunk`): the matte behind a mounted screenshot.
- **Ink** (#2a241c): primary text and project names.
- **Ink 2** (#4b4235): body prose and secondary text.
- **Ink 3** (#61574a): the quietest text tier, labels and dates. It clears 4.5:1 on paper and carries real information, so no lighter tier exists.
- **Ledger Rule** (#cdbf9f, `--rule`): hairlines, card borders, stack-tag borders.
- **Strong Rule** (#8f826d, `--rule-strong`): section head top rule, tag-outline border, photo corners, dashed in-progress borders.
- **Accent Ink** (#f7f0e1): text on red surfaces.
- **Unwoven Thread** (#9b958a, `--thread`): the in-progress state: dashed journey segment and nodes, thread-gray plate tab, in-progress status node. Never used for text.

### Named Rules
**The One Ribbon Rule.** Red marks custody and action only. If something is red it is either shipped work, display type, or something you can press. Decorative red does not exist.

**The Thread Rule.** In progress is dashed thread gray, shipped is solid ribbon red. Any new status-bearing element must pick one of the two; do not invent a third state color.

**The Ink Floor Rule.** No text tier is lighter than Ink 3 (#61574a) on paper, and annotation type is never below 0.75rem.

## Typography

**Display Font:** Oranienbaum (400, with Times New Roman, serif)
**Body Font:** Spectral (400/500/600, with Georgia, serif)
**Label Font:** Spectral SC (400/500/600, with Georgia, serif)

**Character:** A tall, condensed ledger display serif paired with a screen-first reading serif, and its small-cap sibling for everything dated or catalogued. All three are serifs; the voice is archival, not editorial-fashion.

### Hierarchy
- **Display XL** (400, clamp 3.5rem to 7rem, 0.9): the name in the first viewport, set in ribbon red on two lines.
- **Display Lead** (400, clamp 2.25rem to 4.75rem, 0.92): the lead project's name, one step below hero.
- **Display MD** (400, clamp 2.25rem to 3.5rem, 0.98): section titles in ribbon red, project names in ink, contact statement.
- **Display SM** (400, clamp 1.625rem to 2.125rem, 1.05): mobile menu entries and dialog titles.
- **Body / prose-sheet** (400, 1.0625rem, 1.7, ink-2, `text-wrap: pretty`): paragraphs, held to roughly 32 to 42rem (`max-w-lg` to `max-w-2xl`).
- **Label** (Spectral SC 500, 0.8125rem, 0.09em, lowercase rendered as small caps): `annot`, for dates, statuses, link captions, tag buttons.
- **Label SM** (Spectral SC 500, 0.75rem, 0.09em): `annot-sm`, for nav, journey dates, rail labels, legends. This is the floor.

### Named Rules
**The Small-Caps Record Rule.** Every date, status, place and catalogue label is Spectral SC with lining tabular numerals, lowercased so the font renders true small caps. Do not use uppercase text-transform or letter-spaced sans labels.

**The Red Display Rule.** Oranienbaum is set at weight 400 only and is red for page and section titles, ink for object names. It is never used for running text.

## Layout

A single 76rem shell (`max-w-[76rem]`, 20px gutters, 32px from sm up). Sections stack vertically with 80px (96px from sm) vertical padding; each opens with a section head. The first viewport is an asymmetric split: name and lead left, avatar mounted on an object-label card right, with the journey panel beneath.

Project plates are not a grid of equals. They stack one per row, each a two-column grid (text left, evidence right) at 1024px and up. The lead plate gives the evidence column more room (0.8fr / 1.4fr against 1fr / 1.1fr) and larger padding (48px against 40px). Below 1024px everything collapses to a single column.

At 1024px and up a fixed 72px left margin carries the spine; the navbar and journey panel offset for it (`pl-18`, `pl-14`). The horizontal section nav appears at 1280px; below that a full-screen contents dialog opens from a menu button. The journey is a six-column wave at 1024px and up and a vertical spine on narrow screens. `scroll-padding-top` is 5rem; sections never also set scroll-margin.

Spacing is Tailwind's 4px scale: gaps of 6 to 12 (24 to 48px) within plates, 10 and 14 (40 and 56px) below section heads, hairline-separated lists at py-3 to py-6 rhythm.

## Elevation & Depth

Flat by default, tinted not shadowed. Depth is carried by three paper tones (ground, raised, sunk) and hairline borders. Shadows exist only where an object physically lies on the sheet: a mounted screenshot (`0 1px 2px rgb(42 36 28 / 0.12), 0 10px 22px -14px rgb(42 36 28 / 0.45)`), the silk ribbons (a soft drop-shadow lifting them off the page), and the email dropdown (`0 10px 30px -12px rgb(42 36 28 / 0.45)`). All shadows are soft, ink-tinted and offset downward; none are hard offset.

### Named Rules
**The Lies-On-The-Paper Rule.** Only things that are physically laid on the sheet (prints, ribbon, a floating menu) cast a shadow. Cards, tags, headers and stamps do not.

## Shapes

Mostly square-cornered ledger geometry: plates, tags, stack tags and buttons have no radius (`--radius-sheet` 6px exists in the theme but the shipped components lean on straight edges). The distinguishing silhouettes are clipped, not rounded: the swallow-tail bookmark (`polygon(0 0,100% 0,100% 100%,50% 76%,0 100%)`) on section heads, plate tabs (14 x 26px at left 18px) and the spine ribbon's end; the notched tag (12px point on the right) for actions; the circular stamp. Journey and rail nodes are circles with a 2px border. Mounted prints sit in four photo corners over a 5px mat. Hairlines carry diamond ornaments (7px square rotated 45deg) at the page's closing rule.

## Components

### Buttons (tag-shaped)
Action buttons are archive tags with a notched right end, 48px minimum height, `annot` type.
- **Primary (`tag`):** ribbon-red fill, accent-ink text, 12px/28px/12px/20px padding, 90% opacity on hover.
- **Outline (`tag-outline`):** a 1.5px strong-rule border built by a paper-colored inner clip over a rule-strong fill, ink text; hover lightens the fill to raised paper and turns the text red. The navbar Resumé uses a 40px-high small variant.
- **Focus:** global 2px ribbon-red outline, 3px offset, on every focusable element.

### Plates (project cards)
A catalogued object: raised paper, 1px rule border, red bookmark tab hanging from the top-left corner, a status mark and dated span, name, kind and role, a rotated stamp at the top right, the evidence print mounted in photo corners with a caption row of links beneath, then prose, a hairline-ruled list with 12px dashes, and stack tags. An in-progress plate swaps to a dashed strong-rule border and a thread-gray tab (`--tab`). The lead plate enlarges the name (`display-lead`) and stamp (112px against 96px).

### Stamps
A circular dealer's ink stamp: two rings, status arced over the top, year large in the middle, place arced beneath, rotated -9deg at 85% opacity, run through an SVG ink-absorption filter (displacement plus patchy alpha). Red when shipped, ink-2 when open. Hidden from assistive tech unless a `label` is given; project plates give one because the place is stated nowhere else.

### Section heads
A strong-rule top hairline, a 16 x 48px red swallow-tail bookmark hanging from its left, the title in Display MD ribbon red indented 36px, and optional right-aligned `annot` meta (counts or status only). No numbers, no kickers.

### Navigation
- **Navbar:** sticky 64px; transparent at rest, 85% paper with blur and a rule once scrolled. Brand is a red bookmark plus the short name in Oranienbaum; links in `annot-sm` ink-3, active ribbon red with `aria-current`; Resumé as a small outline tag.
- **Spine (Rail):** fixed left margin at 1024px and up. A 1px strong-rule thread runs the height; a silk ribbon unrolls with scroll progress and ends in a swallow-tail; a node sits at each section's real document position (red when reached, paper with strong border when not); the active section's label is set vertically in red beside its node.
- **Mobile contents dialog:** full-screen paper with grain, Oranienbaum entries, a red bookmark beside the active entry, and a red tag for the resumé.

### The Journey (signature)
A panel on raised paper with a red swallow-tail label read down its left margin. A wavy silk ribbon (selvedge, face, sheen strokes, drop-shadowed) runs through shipped stops as solid and continues as a dashed thread through in-progress ones. Each node is a dated, linked stop: `annot-sm` date and status, Oranienbaum title, short note. A legend maps solid to "shipped or live" and dashed to "in progress". The ribbon draws once left to right by clip-path over 1.6s; nodes fade in as the draw reaches them.

### Work ribbon
Between project plates, one silk segment runs down into the next plate's tab, so the work section reads as a single custody line.

### Stack tags
Bordered 1px rule, small caps at 0.75rem, 14px brand mark when one exists; text only otherwise. No fill, no radius.

### Menus, fields and dialogs
- **Email chooser / QR dialog:** a raised-paper plate with the red tab, strong-rule border, small-caps heading, ink-3 list icons at 14px; the QR dialog uses a 45% ink backdrop with blur.
- **Copy field:** text link plus a 44px icon button, ink-3 turning red on hover, check mark in red on success.

### Motion
One orchestrated load: `load-rise` (14px, 0.7s) and `load-fade` (0.8s) with staggered delays, `load-draw` (scaleX 0.9s) for rules, the journey ribbon's clip-path draw (1.6s, `cubic-bezier(0.65,0,0.35,1)`), and `node-arrive` (0.35s fade timed to the draw, 1024px and up). After load only `reveal` (18px rise, 0.7s, `cubic-bezier(0.22,1,0.36,1)`) on scroll. Content stays visible without script (`html[data-js]` gates hiding). `prefers-reduced-motion` removes all animation and transitions. Print hides `data-print="hide"` elements and the grain, and sets white ground.

## Do's and Don'ts

### Do:
- **Do** mark every shipped, live or custody element in solid ribbon red (#a3201b) and every in-progress element in dashed thread gray (#9b958a).
- **Do** set every date, status, place and label in Spectral SC at 0.75rem or larger, ink-3 or darker.
- **Do** head each section with the ledger rule and red swallow-tail bookmark; titles in Oranienbaum red.
- **Do** give actions the notched tag silhouette at 48px minimum height with a 2px ribbon-red focus ring.
- **Do** carry depth by paper tone and hairline; shadow only what lies on the sheet.
- **Do** pair every motion with a reduced-motion fallback and keep content visible without script.

### Don't:
- **Don't** add a dark theme or dark-mode variants; the record is paper only.
- **Don't** use red decoratively, or add a second saturated accent or a third status color.
- **Don't** use sans-serif, mono, uppercase text-transform or Oranienbaum for running text.
- **Don't** put hard offset shadows, rounded pills, or gradient text on this surface; the only gradient is the silk cross-width sheen.
- **Don't** return to the hero-over-equal-card-grid composition; plates stack one per row and the lead plate is larger.
- **Don't** describe or rely on the ribbon as photographic; it is vector (see below).

### Known gap and drift (not canonized)
- **Vector material, not photographed.** The ribbon is built from layered vector strokes (selvedge #7e1814, face #a3201b, sheen #cf5145, feDropShadow lift) and the spine uses the `.silk` gradient with a drop-shadow; stamps use an SVG ink filter; paper grain is an SVG noise tile at 0.18 alpha. The finish bar called for a photographed silk ribbon on aged paper; no image tool was available. A produced raster silk and paper material is the upgrade path. User-accepted at finish.
- **Unused dark icon data.** `lib/tech-icons.generated.ts` still carries an `icon.dark` variant per mark; `tech-tag.tsx` renders only `icon.light`. Harmless until the generator script is next touched.
- **Glass blur.** The scrolled navbar and the QR dialog backdrop use backdrop-blur. It is a build detail, not a system rule; do not extend it to new surfaces.
