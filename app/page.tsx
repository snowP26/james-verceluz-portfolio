"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Navbar } from "./components/navbar";
import { ProjectCard } from "./components/project-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import LiquidEther from "@/components/LiquidEther"

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

// projects data
const PROJECTS = [
  {
    title: "KILOS: Kabataan's Integrated Leadership and Organizational System",
    description:
      "A capstone all-in-one management platform for youth officials to manage the local youth officials' projects, ordinances, announcements, community feedback, and Facebook page through the Facebook GraphAPI. It streamlines internal content management while giving the public a centralized and transparent view of official updates.",
    tech: ["nextjs", "Vercel", "Supabase", "tailwindcss", "typescript"],
    image: "/projects/kilos.png",
    github: "https://github.com/snowP26/KILOS-Capstone",
    live: "https://kilos-capstone.vercel.app/",
  },
  {
    title: "SkillBridge",
    description:
      "A mobile application designed to help beginners enter a hobby by connecting them with experienced hobbyists who offer their services in exchange for payment. The platform allows users to post job requests, discover mentors, and learn hands-on from experts within the community.",
    tech: ["Expo", "Firebase", "TypeScript", "Tailwind CSS"],
    image: null,
    github: "https://github.com/snowP26/SkillBridge",
    live: null,
  },
  {
    title: "MoveIn",
    description:
      "A dorm-finding web application that connects tenants to available rentals while giving landowners a dashboard to manage properties, listings, and tenant details in one place.",
    tech: ["Python", "Django", "HTML", "Railway", "Bootstrap CSS"],
    image: "/projects/taskapp.jpg",
    github: "https://github.com/snowP26/MoveIn",
    live: null,
  },
  {
    title: "TicTacToe",
    description:
      "This is a simple yet fun implementation of the classic Tic Tac Toe game where you can challenge your friends. The game features a user-friendly interface and is designed to be engaging for players of all ages.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: null,
    github: "https://github.com/snowP26/TicTacToe",
    live: "https://snowp26.github.io/TicTacToe/",
  },
  {
    title: "Power-Me-Up",
    description:
      "Turnbased game using the terminal, written in C. This system was created to practice web sockets between two computers.",
    tech: ["C"],
    github: "https://github.com/snowP26/Power-Me-Up",
    live: null,
  },
  {
    title: "FullTank",
    description:
      "This is app was the first ever application to be brainstormed together with a team. It was supposed to be a gas station locator to locate the cheapest gas within an area. Sadly, only few frontend pages were developed",
    tech: ["Flutter", "Dart"],
    image: "/projects/fitness.jpg",
    github: "https://github.com/snowP26/full_tank",
    live: null,
  },
];

const CERTIFICATIONS = [
  {
    title: "Smartbooks And Power BI Smartbooks Advance With Analytics",
    issuer: "FIT Academy",
    date: "2024",
    image: "/certs/aws.jpg",
    link: "https://aws.amazon.com/certification/",
  },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  if (!mounted) {
    return null;
  }


  function showViberQR() {
    Swal.fire({
      title: "Connect on Viber",
      html: `
      <img
        src="/viber-qr.svg"
        alt="Viber QR Code"
        class="swal-qr"
      />
    `,
      showConfirmButton: true,
      confirmButtonText: "Close",
      customClass: {
        popup:
          "rounded-xl bg-white dark:bg-zinc-900 text-black dark:text-white",
        title: "text-lg font-semibold",
        confirmButton:
          "rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700",
      },
    });
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);

      Swal.fire({
        icon: "success",
        title: "Copied!",
        text: "Copied to clipboard",
        toast: true,
        position: "top",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Unable to copy to clipboard",
        toast: true,
        position: "top",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  }

  return (
    <div className="">
      {/* Nav Bar */}
      <Navbar />
      {/* Nav Bar end */}

      {/* Home div */}
      <div
        className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden -mt-20"
        id="home"
      >
        {/* Background */} 
        <div className="group w-50 h-50 rounded-full overflow-hidden mb-5 shadow-2xl shadow-accent border-2 border-accent">

          <Image
            src="/james_verceluz_grin.png"
            alt="James Verceluz Grin"
            className="block group-hover:hidden"
            width={200}
            height={200}
          />

          <Image
            src="/james_verceluz_smile.png"
            alt="James Verceluz Smile"
            className="hidden group-hover:block"
            width={200}
            height={200}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 text-4xl font-semibold tracking-tight transition-all animate-in fade-in duration-500">
          <span>Hey, I&apos;m </span>
          <span className="text-blue-700 dark:text-blue-400">
            James Verceluz!
          </span>
        </div>

        <p className="relative z-10 mt-4 text-xl opacity-80 animate-in fade-in duration-1000">
          A full-stack developer building clean, scalable web and mobile
          applications.
        </p>

        <Marquee className="relative z-10 mt-10 w-full max-w-3xl p-3 rounded-2xl">
          <MarqueeContent>
            {TECH_STACK.map((tech) => (
              <MarqueeItem key={tech} className="mx-6 flex items-center">
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

      {/* About me Section */}
      <div
        id="about-me"
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="flex justify-center">
              <BackgroundGradient
                className="relative w-72 h-100 rounded-2xl overflow-hidden shadow-2xl"
                animate={true}
              >

                <Image
                  src="/profile-pic.jpg"
                  alt="James Verceluz"
                  fill
                  className="object-cover"
                />
              </BackgroundGradient>
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                I'm a passionate full-stack developer based in Naga City,
                Philippines, with expertise in building modern web and mobile
                applications. I specialize in creating user-friendly, performant
                solutions using cutting-edge technologies.
              </p>
              <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                With a strong foundation in both front-end and back-end
                development, I love turning complex problems into simple,
                beautiful, and intuitive designs. When I'm not coding, you can
                find me exploring new technologies and contributing to
                open-source projects.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                  What I Do
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gray-200/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="font-semibold">Web Development</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Full-stack solutions
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-200/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="font-semibold">Mobile Apps</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Cross-platform
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-200/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="font-semibold">UI/UX Design</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      User-centered
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-200/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="font-semibold">API Development</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      RESTful APIs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div
        id="certifications"
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400">
            Certifications
          </h2>
          <div className="space-y-6">
            {/* {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-gray-200/70 dark:bg-zinc-900/70 shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  >
                    View
                  </a>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {/* Contact me Section */}
      <div
        id="contact-me"
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-gray-200/70 dark:bg-zinc-900/70">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-black/70 dark:text-white/70">
                        Naga City, Camarines Sur, Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <button
                        onClick={() =>
                          copyToClipboard("jamesgabriel.verceluz@gmail.com")
                        }
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        jamesgabriel.verceluz@gmail.com
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <button
                        onClick={() => copyToClipboard("+63 993 950 7116")}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        (+63) 993 950 7116
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-gray-200/70 dark:bg-zinc-900/70">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/snowP26"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <Image
                      src={`${isDark ? "/tech_stack/GitHub_Invertocat_White.svg" : "/tech_stack/GitHub_Invertocat_Black.svg"}`}
                      alt="GitHub"
                      height={24}
                      width={24}
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/james-gabriel-verceluz/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <Image
                      src="/tech_stack/linked-in.svg"
                      alt="LinkedIn"
                      height={24}
                      width={24}
                    />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesgabriel.verceluz@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <Image
                      src="/tech_stack/gmail.svg"
                      alt="Gmail"
                      height={24}
                      width={24}
                    />
                  </a>
                  <button
                    onClick={showViberQR}
                    className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <Image
                      src="/tech_stack/viber.svg"
                      alt="Viber"
                      height={24}
                      width={24}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-8 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-linear-to-br from-blue-500/10 to-purple-500/10">
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out through any of the channels listed.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesgabriel.verceluz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-black/10 dark:border-white/10 bg-gray-200/70 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">
                James Verceluz
              </h2>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70 leading-relaxed">
                Focused on continuous learning and building purposeful software
                that balances functionality, clarity, and long-term growth.
              </p>
            </div>

            {/* Contact */}
            <div className="md:justify-self-end ">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
                Contact
              </h3>

              <div className="mt-4 space-y-3 text-sm text-black/80 dark:text-white/80">
                <p>
                  <span className="font-bold">Location:</span> Naga City,
                  Camarines Sur, Philippines
                </p>

                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    className="relative inline-block text-black/80 dark:text-white/80 transition-colors duration-300 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
                    onClick={async () =>
                      await copyToClipboard("jamesgabriel.verceluz@gmail.com")
                    }
                  >
                    jamesgabriel.verceluz@gmail.com
                  </a>
                </p>

                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  <a
                    onClick={async () =>
                      await copyToClipboard("+63 993 950 7116")
                    }
                    className="relative inline-block text-black/80 dark:text-white/80 transition-colors duration-300 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
                  >
                    (+63) 993 950 7116
                  </a>
                </p>
              </div>
            </div>
            {/* Socials */}
            <div className="md:justify-self-center ">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Socials
              </h3>
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
                <a
                  onClick={showViberQR}
                  aria-label="Show Viber QR Code"
                  target="_blank"
                  rel="noreferrer"
                  className=" rounded-lg border border-black/10 dark:border-white/10 p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Image
                    src="/tech_stack/viber.svg"
                    alt="Viber"
                    height={30}
                    width={30}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between
                    border-t border-black/10 dark:border-white/10 pt-6 text-xs text-black/60 dark:text-white/60"
          >
            <p>
              © {new Date().getFullYear()} James Verceluz. All rights reserved.
            </p>
            <p className="flex gap-4"></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
