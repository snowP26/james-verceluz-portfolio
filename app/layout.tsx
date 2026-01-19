import type { Metadata } from "next";
import {
  Lexend,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "James Gabriel Verceluz",
  description: "Portfolio website of James Gabriel Verceluz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.className}

        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
