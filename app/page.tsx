"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ModeToggle } from "./components/mode-switch";
import TextType from "@/components/TextType";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";



const TECH_STACK = [
  "html5",
  "css3",
  "js",
  "typescript",
  "python",
  "react",
  "nextjs",
  "rails",
  "postgresql",
  "git",
  "django",
  "c++",
  "ruby",
  "expo",
  "expressjs",
  "figma",
  "firebase",
  "github",
  "gitlab",
  "jira",
  "npm",
  "openai",
  "postman",
  "railway",
  "shadcnui",
  "tailwindcss",
  "vitejs",
  "vscode",
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  if (!mounted) {
    return null; // or a skeleton / placeholder
  }

  function scroll_to(id: string) {
    const element = document.getElementById(id)

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="min-h-screen">

      {/* Nav Bar */}
      <div className="flex py-5 items-center px-6 sticky top-0 z-50 mt-4">
        {/* Left */}
        <h1 className="text-blue-700 font-bold dark:text-blue-400">
          James.dev
        </h1>

        {/* Center */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 rounded-full px-6 py-2 bg-gray-200/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm"
        >
          <button className="text-md font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => scroll_to("home")}>Home</button>
          <button className="text-md font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => scroll_to("about-me")}>About Me</button>
          <button className="text-md font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => scroll_to("projects")}>Projects</button>
          <button className="text-md font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => scroll_to("certifications")}>Certifications</button>
          <button className="text-md font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => scroll_to("contact-me")}>Connect with me</button>
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
      {/* Nav Bar end */}

      {/* Home div */}
      <div className="flex flex-col items-center text-center py-20  h-screen" id="home">
        <div className="text-4xl sm:text-5xl font-semibold tracking-tight transition-all animate-in fade-in duration-500">
          <span>Hey, I&apos;m </span>
          <span className="text-blue-700 dark:text-blue-400 ">
            James Verceluz!
          </span>
        </div>
        <p className="mt-4 text-xl sm:text-2xl opacity-80 animate-in fade-in duration-1000">
          A full-stack developer building clean, scalable web and mobile
          applications.
        </p>
        <Marquee className="mt-10 w-full max-w-3xl p-3 rounded-2x">
          <MarqueeContent>
            {TECH_STACK.map((tech) => (
              <MarqueeItem key={tech} className="mx-6 flex items-center" title={tech.toUpperCase()}>
                {mounted && (
                  <StackIcon
                    name={tech}
                    className="h-6 w-6"
                    variant={isDark ? "dark" : "light"}
                  />
                )}
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      {/* About me Section  */}
      <div id="about-me" className=" h-screen">

      </div>
      {/* Projects Section  */}
      <div id="projects" className=" h-screen">

      </div>
      {/* Certifications Section  */}
      <div id="certifications" className=" h-screen">

      </div>
      {/* Contact me Section  */}
      <div id="contact-me" className=" h-screen">

      </div>

      {/* footer */}
      {/* Footer */}
      <footer className="mt-20 border-t border-black/10 dark:border-white/10 bg-gray-200 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold tracking-tight bg-">James Gabriel Verceluz</h2>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70 leading-relaxed">
                Full-stack developer focused on building clean, fast, and user-friendly experiences.
              </p>

              {/* Socials */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/snowP26"
                  target="_blank"
                  rel="noreferrer"
                  className=" rounded-lg border border-black/10 dark:border-white/10 p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Image
                    src={`${isDark ? "/tech_stack/GitHub_Invertocat_White.svg" : "/tech_stack/GitHub_Invertocat_Black.svg"}`}
                    alt="GithubIcon"
                    height={30}
                    width={30}
                  />
                </a>
                <a
                  href="https://linkedin.com/in/james-gabriel-verceluz/"
                  target="_blank"
                  rel="noreferrer"
                  className=" rounded-lg border border-black/10 dark:border-white/10 p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Image
                    src="/tech_stack/linked-in.svg"
                    alt="GithubIcon"
                    height={30}
                    width={30}
                  />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesgabriel.verceluz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded-lg border border-black/10 dark:border-white/10 p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Image
                    src="/tech_stack/gmail.svg"
                    alt="GithubIcon"
                    height={30}
                    width={30}
                  />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="md:justify-self-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-black/70 dark:text-white/70">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Me", id: "about" },
                  { label: "Projects", id: "projects" },
                  { label: "Certifications", id: "certifications" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() =>
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="relative inline-blocktext-black/80 dark:text-white/80 transition-colors duration-300 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[0.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:justify-self-end">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-black/70 dark:text-white/70">
                Contact
              </h3>
              <div className="mt-4 space-y-3 text-sm text-black/80 dark:text-white/80">
                <p>
                  <span className="font-bold">Location:</span> Philippines
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:jamesgabriel.verceluz@email.com"
                    className="relative inline-blocktext-black/80 dark:text-white/80 transition-colors duration-300 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[0.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 "
                  >
                    jamesgabriel.verceluz@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-bold">Open to:</span> Junior Developer Roles, Freelance Projects, Cloud Computing Opportunities, and Internships
                </p>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                ↑ Back to top
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between
                    border-t border-black/10 dark:border-white/10 pt-6 text-xs text-black/60 dark:text-white/60">
            <p>© {new Date().getFullYear()} James Gabriel Verceluz. All rights reserved.</p>
            <p className="flex gap-4">

            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}
