"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ModeToggle } from "./components/mode-switch";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Nav Bar */}
      <div className="relative flex h-10 items-center px-6">
        {/* Left */}
        <h1 className="text-amber-400 font-bold">James</h1>

        {/* Center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-5">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About Me</span>
          <span className="cursor-pointer">Projects</span>
          <span className="cursor-pointer">Certifications</span>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
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
      {/* Nav Bar end */}
    </div>
  );
}
