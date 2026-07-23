import fs from "fs";

const SRC = "/Users/james/portfolio/node_modules/tech-stack-icons/dist/index.js";
const OUT = "/Users/james/portfolio/lib/tech-icons.generated.ts";

// Exact label (as written in lib/data.ts) → icon key in tech-stack-icons.
// Labels with no entry render as text only, which is the correct fallback.
const MAP = {
  // "nextjs" is a wordmark that turns to mush at 14px; nextjs2 is the circle mark.
  "Next.js": "nextjs2",
  TypeScript: "typescript",
  JavaScript: "js",
  React: "react",
  // "tanstack" is a 58KB mascot illustration; reactquery is the same
  // product's mark at a sixth of the size.
  "TanStack Query": "reactquery",
  Playwright: "playwright",
  "Claude Code": "claude",
  Supabase: "supabase",
  "Tailwind CSS": "tailwindcss",
  Vercel: "vercel",
  "Ruby on Rails": "rails",
  Ruby: "ruby",
  RSpec: "rspec",
  PostgreSQL: "postgresql",
  Expo: "expo",
  Firebase: "firebase",
  Django: "django",
  Python: "python",
  Railway: "railway",
  Flutter: "flutter",
  Dart: "dart",
  HTML: "html5",
  CSS: "css3",
  Git: "git",
  Postman: "postman",
  "Chakra UI": "chakraui",
};

const src = fs.readFileSync(SRC, "utf8");

/** Pull one variant's SVG string out of the bundled registry. */
function extract(key, variant) {
  const start = src.indexOf(`${key}:{svg:{`);
  if (start === -1) return null;
  const chunk = src.slice(start, start + 60000);
  const at = chunk.indexOf(`${variant}:'`);
  if (at === -1) return null;
  const from = at + variant.length + 2;
  let out = "";
  for (let i = from; i < chunk.length; i++) {
    const c = chunk[i];
    if (c === "\\") {
      out += chunk[i + 1];
      i++;
      continue;
    }
    if (c === "'") break;
    out += c;
  }
  return out || null;
}

/** Strip fixed dimensions so the icon scales with its box. */
function normalize(svg) {
  return svg
    .replace(/\s(width|height)="[^"]*"/g, "")
    .replace(/<svg /, '<svg width="100%" height="100%" ')
    .trim();
}

/** ids inside an svg are global once inlined — namespace them per icon. */
function namespaceIds(svg, key) {
  const ids = [...svg.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
  let out = svg;
  for (const id of new Set(ids)) {
    const safe = `${key}-${id}`;
    out = out
      .replaceAll(`id="${id}"`, `id="${safe}"`)
      .replaceAll(`url(#${id})`, `url(#${safe})`)
      .replaceAll(`href="#${id}"`, `href="#${safe}"`)
      .replaceAll(`xlink:href="#${id}"`, `xlink:href="#${safe}"`);
  }
  return out;
}

const entries = [];
const missing = [];

for (const [label, key] of Object.entries(MAP)) {
  const light = extract(key, "light");
  const dark = extract(key, "dark");
  if (!light) {
    missing.push(`${label} (${key})`);
    continue;
  }
  const L = namespaceIds(normalize(light), `${key}-l`);
  const D = dark ? namespaceIds(normalize(dark), `${key}-d`) : null;
  entries.push({ label, light: L, dark: D && D !== L ? D : null });
}

const body = entries
  .map(
    (e) =>
      `  ${JSON.stringify(e.label)}: {\n    light: ${JSON.stringify(e.light)},\n` +
      (e.dark ? `    dark: ${JSON.stringify(e.dark)},\n` : "") +
      `  },`,
  )
  .join("\n");

const file = `// Generated from tech-stack-icons — do not edit by hand.
// Only the icons this site actually uses are inlined, so the 8.7MB icon
// registry never reaches the client bundle.
// Regenerate with: node scripts/gen-tech-icons.mjs

export type TechIconSvg = { light: string; dark?: string };

export const TECH_ICONS: Record<string, TechIconSvg> = {
${body}
};
`;

fs.writeFileSync(OUT, file);
const bytes = Buffer.byteLength(file);
console.log(`wrote ${entries.length} icons → ${OUT} (${(bytes / 1024).toFixed(1)} KB)`);
console.log(`with separate dark variant: ${entries.filter((e) => e.dark).length}`);
if (missing.length) console.log(`MISSING: ${missing.join(", ")}`);
