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
  discipline: "Full-Stack Developer and Aspiring Cloud Engineer",
  location: "Naga City, Camarines Sur, Philippines",
  timezone: "UTC+8",
  revision: "2026.11",
  lead: "I ship production software across Next.js and Ruby on Rails, and own features from requirements through testing to deploy. Now training in AWS cloud through AWS re/Start.",
  bio: [
    "I build web applications end to end, and I work best when I own the full product path: clarifying the real need, then building, testing, and shipping it in front of users.",
    "Next, I'm growing into cloud engineering through AWS re/Start (Batch 33, through February 2027), working toward AWS Certified Cloud Practitioner. I keep taking on freelance projects alongside it.",
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
  mailto: "mailto:jamesgabriel.verceluz@gmail.com",
  /** Opens a chat in the Viber app on a phone that has it installed. */
  viber: "viber://chat?number=%2B639995117685",
} as const;

export const RESUME_PATH = "/Resume.pdf";

export const SECTIONS: Section[] = [
  { id: "index", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "profile", label: "Profile" },
  { id: "capabilities", label: "Capabilities" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

/**
 * The custody line through the hero: every stop dated, every claim on the
 * resume, each linked to its evidence. In-progress stops render as thread.
 */
export const JOURNEY = [
  { date: "2025", title: "KILOS", note: "Capstone platform for LGUs", status: "Shipped", inProgress: false, href: "#kilos" },
  { date: "Jan 2026", title: "Nueca", note: "300+ RSpec tests, 100% coverage", status: "Shipped", inProgress: false, href: "#experience" },
  { date: "Jan 2026", title: "Groovy", note: "Live store taking real orders", status: "Live", inProgress: false, href: "https://groovyph.com" },
  { date: "Apr 2026", title: "StadiOps", note: "Booking SaaS for a Canadian client", status: "Live", inProgress: false, href: "https://www.stadiops.com/" },
  { date: "Aug 2026", title: "Entitled", note: "Game server for a Japanese client", status: "In build", inProgress: true, href: "#entitled" },
  { date: "Nov 2026", title: "AWS re/Start", note: "Working toward Cloud Practitioner", status: "In training", inProgress: true, href: "#training" },
] as const;

export const EXPERIENCE: Role[] = [
  {
    start: "2026.02",
    end: null,
    title: "Freelance Full-Stack Developer",
    org: "Self-employed",
    summary:
      "Client web applications for Canada, Japan, and the Philippines, taken from requirements to production release. Groovy, StadiOps, and Entitled under Selected work come from this role.",
    points: [],
    stack: [],
  },
  {
    start: "2026.01",
    end: "2026.04",
    title: "Ruby on Rails Cloud Developer Intern",
    org: "Tindahang Tapat (Nueca Technologies Inc.)",
    summary:
      "Built the internal dashboard the company used to track SMS logs across all of its systems, and the Rails API layer connecting it to their SMS provider.",
    points: [
      "Built the dashboard with one other intern: one place to track SMS logs from every system the company ran, instead of checking each one separately.",
      "Designed and implemented 2 RESTful API endpoints in Ruby on Rails: one to fetch log data from the M360 SMS provider, one to send messages to it.",
      "Wrote 300+ automated tests with RSpec, reaching 100% code coverage across all endpoints, including edge cases.",
      "Debugged and refactored backend services for maintainability, delivering across six-week Agile sprints.",
    ],
    stack: ["Ruby on Rails", "RSpec", "REST", "PostgreSQL", "Agile"],
  },
];

/** Ordered by how easily a reader can check the work: live first, in-build last. */
export const PROJECTS: Project[] = [
  {
    slug: "groovy",
    place: "Philippines",
    name: "Groovy",
    kind: "E-commerce storefront",
    role: "Full-Stack Developer",
    start: "2026.01",
    end: "2026.05",
    status: "live",
    summary:
      "The live store for a Philippine streetwear brand: a Next.js storefront on Shopify, processing real orders end to end.",
    points: [
      "Built and launched the customer-facing storefront, taking the brand from no online presence to processing real orders.",
      "Configured the Shopify side and wired product, cart, and checkout flows through Shopify's APIs.",
    ],
    stack: ["Next.js", "React", "Shopify", "TypeScript"],
    image: "/projects/groovy-metamorphosis.webp",
    imageAlt:
      "Groovy's live Metamorphosis collection page: the collection's story beside its title, above four product cards for the Graphic Tee, Embroidered Longsleeves, Embroidered Tee, and Plaid",
    github: null,
    live: "https://groovyph.com",
    liveLabel: "groovyph.com",
  },
  {
    slug: "stadiops",
    place: "Canada",
    name: "StadiOps",
    kind: "Sports training booking SaaS",
    role: "Frontend Developer",
    start: "2026.04",
    end: "2026.09",
    status: "live",
    summary:
      "Booking and scheduling platform for a Canadian client serving private-training sports teams.",
    points: [
      "Built the front end in Next.js with TanStack Query handling data fetching and server state.",
      "Tested the booking and scheduling flows with Vitest.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Chakra UI",
      "Vitest",
      "Claude Code",
    ],
    image: "/projects/stadiops.webp",
    imageAlt:
      "StadiOps home page with a preview of the coaching dashboard and booking calendar",
    github: null,
    live: "https://www.stadiops.com/",
    liveLabel: "stadiops.com",
  },
  {
    slug: "kilos",
    place: "Naga City",
    name: "KILOS",
    kind: "Youth officials management system",
    role: "Full-Stack Developer (backend-focused) · Undergraduate capstone",
    start: "2025.06",
    end: "2025.12",
    status: "shipped",
    summary:
      "A platform for Local Government Units to manage youth officials: projects, ordinances, announcements, and public feedback in one place.",
    points: [
      "Built the platform on Next.js and Supabase, with content management for officials and a transparent public view of official updates.",
      "Drew adoption interest from a local LGU seeking a tailored deployment; co-authored the accompanying capstone paper.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    image: "/projects/kilos.webp",
    imageAlt:
      "KILOS home screen for a youth official, with recent community feedback and an events calendar",
    github: "https://github.com/snowP26/KILOS-Capstone",
    live: "https://kilos-capstone.vercel.app/",
    liveLabel: "kilos-capstone.vercel.app",
  },
  {
    slug: "entitled",
    place: "Japan",
    name: "Entitled",
    kind: "Multiplayer music guessing game",
    role: "Backend Developer",
    start: "2026.08",
    end: null,
    status: "building",
    summary:
      "A skribbl.io-inspired multiplayer music guessing game for a Japanese client: players upload songs to a theme and race to name each other's tracks in chat.",
    points: [
      "Building the NestJS and socket.io game server: rooms with invite codes, a server-driven round clock, speed-based scoring, and typo-tolerant guess matching.",
      "Store player MP3s on Vercel Blob behind signed links that expire each turn, rejecting files from any other host.",
      "On the shared React client, keep players seated through a refresh and show typed error messages; GitHub Actions runs build, lint, and tests on every PR, and the frontend is hosted on Cloudflare.",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "socket.io",
      "Vercel Blob",
      "GitHub Actions",
      "Cloudflare",
      "Claude Code",
    ],
    image: "/projects/entitled.webp",
    imageAlt:
      "Entitled landing page reading Name the track. Beat your friends., with Create Room and Join with code buttons",
    github: null,
    live: null,
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
      "First team project: a cheapest-nearby-gas locator. Front-end screens only.",
    stack: ["Flutter", "Dart"],
    github: "https://github.com/snowP26/full_tank",
  },
];

/** Only skills the work on this page shows. AWS stays with AWS re/Start until it's finished. */
export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Ruby", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "TanStack Query", "Tailwind CSS", "Chakra UI"],
  },
  {
    label: "Backend",
    items: ["Ruby on Rails", "NestJS", "socket.io", "REST API design", "Shopify"],
  },
  {
    label: "Data & hosting",
    items: ["PostgreSQL", "Supabase", "Vercel", "Vercel Blob", "Cloudflare"],
  },
  {
    label: "Testing & delivery",
    items: ["RSpec", "Vitest", "GitHub Actions", "Git"],
  },
];

export const EDUCATION = {
  degree: "BS Information Technology",
  school: "Ateneo de Naga University",
  start: "2022.08",
  end: "2026.05",
  qpi: "3.25 / 4.00",
  org: "Member, Ateneo Consortium of Technological, Information, and Computing Sciences (TACTICS)",
} as const;

/** In progress. The resume lists it under Education, with the Cloud Practitioner exam as the goal. */
export const TRAINING = {
  name: "AWS re/Start, Batch 33",
  sponsors: "Edukasyon.ph · DigiPlus Foundation",
  start: "2026.11",
  end: "2027.02",
  note: "Linux, Bash, S3, and EC2 so far; working toward AWS Certified Cloud Practitioner.",
  log: "https://github.com/snowP26/AWS-reStart-James-Verceluz",
} as const;

export const CERTIFICATIONS: Credential[] = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Coursera",
  },
  {
    title: "TOPCIT Level 2 Proficiency",
    issuer: "Test of Practical Competency in ICT",
  },
  {
    title: "Prompt engineering, Python, and cloud computing",
    issuer: "DataCamp",
    detail: "3 courses",
    year: "2026",
  },
];

export const STATUS_LABEL: Record<Project["status"], string> = {
  live: "Live",
  building: "In build",
  shipped: "Shipped",
  archived: "Archived",
};
