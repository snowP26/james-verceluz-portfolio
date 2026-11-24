import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CONTACT, PROFILE } from "@/lib/data";
import { Analytics } from "@vercel/analytics/next"

/** One family for everything: display, text and tabular dates. */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

/** Runs before paint: a pinned theme applies with no flash; otherwise CSS follows the system. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description = `${PROFILE.discipline} in ${PROFILE.location}. ${PROFILE.lead}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.discipline}`,
    template: `%s — ${PROFILE.shortName}`,
  },
  description,
  keywords: [
    "James Verceluz",
    "full-stack developer",
    "Next.js developer",
    "Ruby on Rails developer",
    "Philippines",
    "Naga City",
  ],
  authors: [{ name: `${PROFILE.firstName} ${PROFILE.lastName}`, url: siteUrl }],
  creator: `${PROFILE.firstName} ${PROFILE.lastName}`,
  openGraph: {
    type: "profile",
    title: `${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.discipline}`,
    description,
    url: siteUrl,
    siteName: PROFILE.shortName,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.discipline}`,
    description,
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${PROFILE.firstName} ${PROFILE.lastName}`,
  jobTitle: PROFILE.discipline,
  email: `mailto:${CONTACT.email}`,
  telephone: CONTACT.phoneRaw,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naga City",
    addressRegion: "Camarines Sur",
    addressCountry: "PH",
  },
  sameAs: [CONTACT.github, CONTACT.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ateneo de Naga University",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body
        className={`${geist.variable} font-sans antialiased`}
      >
          <a
            href="#main"
            className="sr-only rounded-lg text-sm font-medium focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
          >
            Skip to content
          </a>
          {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
