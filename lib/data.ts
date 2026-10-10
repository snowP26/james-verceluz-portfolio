import type {
  Credential,
  EarlierProject,
  Project,
  Role,
  Section,
  SkillGroup,
} from "./type";

export const PROFILE = {
  firstName: "James Gabriel",
  lastName: "Verceluz",
  shortName: "James Verceluz",
  discipline: "AI Developer",
  location: "Naga City, Camarines Sur, Philippines",
  revision: "2026.10",
  lead: "I ship production software across Next.js and Ruby on Rails. I own features from requirements through testing to deploy.",
  bio: [
    "I build web applications end to end. Most recently that meant a Shopify storefront for a Philippine streetwear brand that now takes real orders, and an internal dashboard at Nueca Technologies that gave the team one place to track SMS logs across every system they ran.",
    "I work best when I own the full product path, from clarifying the real need to building, testing, and shipping in front of users. I wrapped up my work on Stadiops in September and continue taking on freelance projects alongside it.",
  ],
} as const;

export const CONTACT = {
  email: "jamesgabriel.verceluz@gmail.com",
  phone: "(+63) 999 511 7685",
  phoneRaw: "+639995117685",
  github: "https://github.com/snowP26",
  githubHandle: "github.com/snowP26",
  linkedin: "https://linkedin.com/in/jamesverceluz",
  linkedinHandle: "linkedin.com/in/jamesverceluz",
  mailto:
    "https://mail.google.com/mail/?view=cm&fs=1&to=jamesgabriel.verceluz@gmail.com",
} as const;

export const RESUME_PATH = "/James_Verceluz_Resume.pdf";

export const SECTIONS: Section[] = [
  { id: "index", index: "00", label: "Index" },
  { id: "profile", index: "01", label: "Profile" },
  { id: "experience", index: "02", label: "Experience" },
  { id: "work", index: "03", label: "Work" },
  { id: "capabilities", index: "04", label: "Capabilities" },
  { id: "credentials", index: "05", label: "Credentials" },
  { id: "contact", index: "06", label: "Contact" },
];

/** What shipped and who used it — not vanity metrics. */
export const MEASURES = [
  {
    value: "Live",
    label: "groovyph.com",
    note: "Storefront taking real orders",
  },
  { value: "3", label: "Client projects", note: "Philippines · Canada · Japan" },
  {
    value: "Company-wide",
    label: "Internal SMS dashboard",
    note: "Nueca Technologies",
  },
] as const;

export const EXPERIENCE: Role[] = [
  {
    start: "2026.02",
    end: null,
    title: "Freelance Full-Stack Developer",
    org: "Self-employed",
    summary:
      "Client web applications, front to back, from requirements to production release.",
    points: [
      "Build client applications in Next.js and React, integrating with Shopify and Laravel back ends over REST APIs.",
      "Work directly with clients to gather requirements, iterate on features, and ship production-ready releases.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Shopify", "REST"],
  },
  {
    start: "2026.01",
    end: "2026.04",
    title: "Ruby on Rails Cloud Developer Intern",
    org: "Tindahang Tapat — Nueca Technologies Inc.",
    summary:
      "Built the internal dashboard the company used to track SMS logs across all of its systems, and the Rails API layer connecting it to their SMS provider.",
    points: [
      "Built the dashboard with one other intern — one place to track SMS logs from every system the company ran, instead of checking each one separately.",
      "Designed and implemented 2 RESTful API endpoints in Ruby on Rails: one to fetch log data from the M360 SMS provider, one to send messages to it.",
      "Wrote 300+ automated tests with RSpec, reaching 100% code coverage across all endpoints, including edge cases.",
      "Debugged and refactored backend services for maintainability, delivering across six-week Agile sprints.",
    ],
    stack: ["Ruby on Rails", "RSpec", "REST", "PostgreSQL", "Agile"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "entitled",
    name: "Entitled",
    kind: "Web Music Guessing Game",
    role: "AI Backend Developer",
    start: "2026.08",
    end: null,
    status: "building",
    summary:
      "A skribbl.io inspired music guessing game.",
    points: [
      "Developing API endpoints and WebSockets powered by NestJs.",
      "Responsible for the DevOps tasks through Cloudflare and Github Actions",
    ],
    stack: [
      "NestJs",
      "TypeScript",
      "Cloudflare",
      "Claude Code",
    ],
    image: null,
    github: null,
    live: null,
  },
  {
    slug: "stadiops",
    name: "StadiOps",
    kind: "Sports training booking SaaS",
    role: "AI Frontend Developer",
    start: "2026.04",
    end: "2026.10",
    status: "live",
    summary:
      "Booking and scheduling platform for a Canadian client serving private-training sports teams.",
    points: [
      "Built the front end in Next.js with TanStack Query handling data fetching and server state.",
      "Covering booking and scheduling flows with end-to-end tests in Vitest.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Vitest",
      "Claude Code",
    ],
    image: "/projects/stadiops.png",
    github: null,
    live: "https://www.stadiops.com/",
    liveLabel: "StadiOps.com"
  },
  {
    slug: "groovy",
    name: "Groovy",
    kind: "E-commerce storefront",
    role: "Full-Stack Developer",
    start: "2026.01",
    end: "2026.05",
    status: "live",
    summary:
      "The live store for a Philippine streetwear brand — a Next.js storefront on Shopify, processing real orders end to end.",
    points: [
      "Built and launched the customer-facing storefront, taking the brand from no online presence to processing real orders.",
      "Configured the Shopify side and wired product, cart, and checkout flows through Shopify's APIs.",
    ],
    stack: ["Next.js", "React", "Shopify", "TypeScript"],
    image: "/projects/groovy.png",
    github: null,
    live: "https://groovyph.com",
    liveLabel: "groovyph.com",
  },
  {
    slug: "kilos",
    name: "KILOS",
    kind: "Youth officials management system",
    role: "Full-Stack Developer (backend-focused) · Undergraduate capstone",
    start: "2025.06",
    end: "2025.12",
    status: "shipped",
    summary:
      "A platform for Local Government Units to manage youth officials — projects, ordinances, announcements, and public feedback in one place.",
    points: [
      "Built the platform on Next.js and Supabase, with content management for officials and a transparent public view of official updates.",
      "Drew adoption interest from a local LGU seeking a tailored deployment; co-authored the accompanying capstone paper.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    image: "/projects/kilos.png",
    github: "https://github.com/snowP26/KILOS-Capstone",
    live: "https://kilos-capstone.vercel.app/",
    liveLabel: "kilos-capstone.vercel.app",
  },
];

export const EARLIER_WORK: EarlierProject[] = [
  {
    name: "SkillBridge",
    blurb:
      "Mobile app connecting hobby beginners with experienced hobbyists offering paid lessons.",
    stack: ["Expo", "Firebase", "TypeScript"],
    github: "https://github.com/snowP26/SkillBridge",
  },
  {
    name: "MoveIn",
    blurb:
      "Dorm-finding web app pairing tenants with rentals and giving landowners a property dashboard.",
    stack: ["Django", "Python", "Railway"],
    github: "https://github.com/snowP26/MoveIn",
  },
  {
    name: "Power-Me-Up",
    blurb:
      "Turn-based terminal game in C, written to practice sockets between two machines.",
    stack: ["C", "Sockets"],
    github: "https://github.com/snowP26/Power-Me-Up",
  },
  {
    name: "TicTacToe",
    blurb: "Two-player browser take on the classic. Early vanilla JS build.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/snowP26/TicTacToe",
    live: "https://snowp26.github.io/TicTacToe/",
  },
  {
    name: "FullTank",
    blurb:
      "First team project — a cheapest-nearby-gas locator. Front-end screens only.",
    stack: ["Flutter", "Dart"],
    github: "https://github.com/snowP26/full_tank",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Ruby", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "TanStack Query", "Tailwind CSS", "Chakra UI"],
  },
  {
    label: "Backend",
    items: ["Ruby on Rails", "NestJS", "ExpressJS", "REST API design", "Shopify"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    label: "Testing & tools",
    items: ["RSpec", "Git", "Postman", "Vercel"],
  },
];

export const EDUCATION = {
  degree: "BS Information Technology",
  school: "Ateneo de Naga University",
  start: "2022.08",
  end: "2026.05",
  qpi: "3.25 / 4.00",
  org: "Member — Ateneo Consortium of Technological, Information, and Computing Sciences (TACTICS)",
} as const;

export const CERTIFICATIONS: Credential[] = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Coursera",
  },
  {
    title: "TOPCIT — Level 2 Proficiency",
    issuer: "Test of Practical Competency in ICT",
  },
  {
    title: "Introduction to Programming with Python",
    issuer: "DataCamp",
    detail: "2.6 CPE credits",
    year: "2026",
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    detail: "2 CPE credits",
    year: "2026",
  },
  {
    title: "Understanding Prompt Engineering",
    issuer: "DataCamp",
    detail: "2 CPE credits",
    year: "2026",
  },
];

export const STATUS_LABEL: Record<Project["status"], string> = {
  live: "Live",
  building: "In build",
  shipped: "Shipped",
  archived: "Archived",
};
