import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { CONTACT, PROFILE } from "@/lib/data";

/** Display — industrial grotesque, set tight and uppercase for the plate lettering. */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

/** Body — humanist counterweight to the display face. */
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

/** Utility — every annotation, date, and measurement on the sheet. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

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
    { media: "(prefers-color-scheme: light)", color: "#f6f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#090b0f" },
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
        {/* Gates the scroll-reveal styles. Without it the reveal observer
            could never run and the content would stay hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-js','')`,
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
