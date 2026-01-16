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
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [finishedTyping, setFinishedTyping] = useState(false);
  const isDark = theme === "dark";

  const techStack = [
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
    "materialui",
    "npm",
    "openai",
    "postman",
    "prettier",
    "railway",
    "shadcnui",
    "slack",
    "tailwindcss",
    "vitejs",
    "vscode",
  ];

  return (
    <div className="min-h-screen">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100 transition-all duration-500"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      {/* Nav Bar */}
      <div className="flex py-5 items-center px-6 sticky top-0 z-50">
        {/* Left */}
        <h1 className="text-blue-700 font-bold dark:text-blue-400">
          James.dev
        </h1>

        {/* Center */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 rounded-full px-6 py-2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm"
        >
          <button className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button>
          <button className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</button>
          <button className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
          <button className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certifications</button>
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
      {/* Nav Bar end */}

      <div className="flex flex-col items-center text-center py-20">
        <div className="text-4xl sm:text-5xl font-semibold tracking-tight">
          <span>Hey, I&apos;m </span>

          <span className="text-blue-700 dark:text-blue-400">
            <TextType
              text={["James Gabriel!"]}
              typingSpeed={50}
              deletingSpeed={10000}
              loop={false}
              showCursor
              hideCursorWhileTyping={true}
              cursorCharacter="|"
              variableSpeed={false}
              onSentenceComplete={() => setFinishedTyping(true)}
            />
          </span>
        </div>
        <p className="mt-4 text-xl sm:text-2xl opacity-80 animate-in fade-in duration-500">
          A full-stack developer building clean, scalable web and mobile
          applications.
        </p>
        <Marquee className="mt-10 w-full max-w-3xl p-3 rounded-2x">
          <MarqueeContent>
            {techStack.map((tech) => (
              <MarqueeItem
                key={tech}
                className="mx-6 flex items-center text-zinc-800/70 hover:text-zinc-800 dark:text-zinc-200/70 dark:hover:text-zinc-50 transition"
                title={tech.toUpperCase()}
              >
                <StackIcon
                  name={tech}
                  className="h-10 w-10"
                  variant={isDark ? "dark" : "light"}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

    </div>
  );
}
