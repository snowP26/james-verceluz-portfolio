# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers: recruiters and engineering leads screening James for a full-time or contract developer role. They need to judge quickly what he has actually shipped, then take the resume or a contact route away. Freelance clients are a confirmed secondary audience. The page's closing speaks to employers first, with one line for prospective clients after it.

## Product Purpose

The personal portfolio and resume of James Gabriel Verceluz, a developer in Naga City, Philippines. It exists to get him shortlisted. It shows shipped work and who used it, then puts the resume and contact routes one click away. Success means a hiring manager understands his shipped work and downloads the resume or gets in touch.

## Positioning

A full-stack developer who owns features end to end, from requirements through testing to deployment, across Next.js front ends and Ruby on Rails and NestJS back ends. He is an aspiring cloud engineer, training through AWS re/Start (Batch 33, November 2026 to February 2027, expected). AI tools such as Claude Code are part of how he works, not the headline. What sets him apart is proof: production work with real users, for clients in Canada, Japan, and the Philippines.

The headline everywhere (hero, page title, metadata, footer) is "Full-Stack Developer and Aspiring Cloud Engineer" (`PROFILE.discipline`), matching the resume summary.

## Operating Context

- Two routes: `/` is a single-page portfolio (Intro, Work, Experience, Profile, Capabilities, Credentials, Contact), ordered so checkable proof comes first. `/resume` shows `public/Resume.pdf` inline; every resume button on the site opens the PDF directly.
- Contact routes: email (`mailto:`), phone (`tel:`), Viber (QR code, plus a deep link for phones), LinkedIn, GitHub. The closing speaks to employers first, then one line for freelance clients.
- The hero title block shows Based (Naga City, PH), Ongoing (AWS re/Start & Entitled), and Status (Open to work).
- Deployed on Vercel with Vercel Analytics.
- James keeps per-application tailored resumes outside this repo. The site's PDF is the general version.

## Capabilities and Constraints

- Only figures on the resume: the site makes no metric, claim, or testimonial that `public/Resume.pdf` does not back.
- The resume download and the contact routes stay one click away from anywhere on the site.
- The resume is the source of truth for claims. `public/Resume.pdf` is generated from `resume/resume.html` by `npm run resume` and must stay one US Letter page.
- All content (profile, experience, projects, skills, credentials) lives in `lib/data.ts`. Both routes and the SEO metadata render from it.
- Client projects (StadiOps, Groovy, Entitled) currently show live links only, with no source links.
- The current build keeps content visible without JavaScript, prints cleanly, and honors reduced motion. These were not confirmed as binding requirements.
- Terminology: the site spells it "Resumé"; the PDF file is `Resume.pdf`.

## Brand Commitments

- Name: James Gabriel Verceluz (short form James Verceluz). Domain: jamesverceluz.dev. GitHub: snowP26.
- Voice: first person, plain and factual. The code's own rule for the measures row is "what shipped and who used it, not vanity metrics".
- Portrait: the illustrated avatar pair `public/james_verceluz_grin.png` and `public/james_verceluz_smile.png`.
- Layout preference (standing, chosen 2026-11-24): the conventional developer-portfolio layout, a pinned profile column beside one scrolling column of work, executed at Linear / Vercel polish (brittanychiang.com as the layout reference). Redesigns refine this convention rather than roll new visual worlds, unless the owner asks for one.

## Evidence on Hand

- Groovy: live Shopify storefront at groovyph.com, taking real orders (Jan to May 2026).
- StadiOps: booking SaaS for a Canadian client at stadiops.com. He built the front end, April to September 2026.
- Entitled: multiplayer music guessing game for a Japanese client. In development, with no public URL and private repos. Backend in NestJS and socket.io, MP3s on Vercel Blob, frontend hosted on Cloudflare, CI on GitHub Actions.
- KILOS: undergraduate capstone at kilos-capstone.vercel.app, with a public GitHub repo. A local LGU showed adoption interest.
- Nueca Technologies internship (Jan to Apr 2026): 2 Rails REST endpoints, 300+ RSpec tests, 100% endpoint coverage.
- Credentials: BS Information Technology, Ateneo de Naga University (QPI 3.25 / 4.0). Google AI Professional Certificate. Three DataCamp courses (2026). TOPCIT Level 2. AWS re/Start Batch 33 is in progress, with a practice log at github.com/snowP26/AWS-reStart-James-Verceluz. AWS Certified Cloud Practitioner is in progress, not held.
- Assets: project screenshots in `public/projects/`, the resume PDF, and the Viber QR in `public/viber-qr.svg`.
- Absent, and not to be fabricated: testimonials, references, client quotes, user counts, revenue, or performance figures.

## Product Principles

1. Proof before adjectives. Lead with what shipped and who used it.
2. The site never outruns the resume. A new claim goes on the resume first.
3. One click to act. The resume and contact are always within reach.
4. Full-stack first, cloud next. Present an end-to-end developer growing into cloud engineering, with AI tooling as method rather than identity.
5. Honest status. In-progress work (Entitled, AWS re/Start, Cloud Practitioner) is labeled as in progress.
