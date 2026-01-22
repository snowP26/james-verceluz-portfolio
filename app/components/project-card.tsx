import { Project } from "@/lib/type";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import StackIcon from "tech-stack-icons";

const stack: Record<
  string,
  {
    label: string;
    bg: string;
    text: string;
    border: string;
    icon?: string;
  }
> = {
  html: {
    label: "HTML",
    bg: "bg-orange-500/15",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-500/30",
    icon: "html5",
  },
  css: {
    label: "CSS",
    bg: "bg-blue-500/15",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-500/30",
    icon: "css3",
  },
  javascript: {
    label: "JavaScript",
    bg: "bg-yellow-400/20",
    text: "text-yellow-800 dark:text-yellow-300",
    border: "border-yellow-400/30",
    icon: "js",
  },
  typescript: {
    label: "TypeScript",
    bg: "bg-blue-600/15",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30",
    icon: "typescript",
  },
  python: {
    label: "Python",
    bg: "bg-emerald-500/15",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-500/30",
    icon: "python",
  },
  react: {
    label: "React",
    bg: "bg-sky-500/15",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-500/30",
    icon: "react",
  },
  nextjs: {
    label: "Next.js",
    bg: "bg-zinc-800/15",
    text: "text-zinc-900 dark:text-zinc-100",
    border: "border-zinc-700/40",
    icon: "nextjs2",
  },
  rails: {
    label: "Ruby on Rails",
    bg: "bg-red-500/15",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-500/30",
    icon: "rails",
  },
  postgresql: {
    label: "PostgreSQL",
    bg: "bg-indigo-500/15",
    text: "text-indigo-700 dark:text-indigo-300",
    border: "border-indigo-500/30",
    icon: "postgresql",
  },
  git: {
    label: "Git",
    bg: "bg-orange-600/15",
    text: "text-orange-800 dark:text-orange-300",
    border: "border-orange-600/30",
    icon: "git",
  },
  django: {
    label: "Django",
    bg: "bg-green-700/15",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-700/30",
    icon: "django",
  },
  expo: {
    label: "Expo",
    bg: "bg-neutral-800/15",
    text: "text-neutral-900 dark:text-neutral-100",
    border: "border-neutral-700/40",
    icon: "expo",
  },
  expressjs: {
    label: "Express.js",
    bg: "bg-zinc-600/15",
    text: "text-zinc-800 dark:text-zinc-300",
    border: "border-zinc-600/30",
    icon: "express",
  },
  github: {
    label: "GitHub",
    bg: "bg-zinc-700/15",
    text: "text-zinc-900 dark:text-zinc-100",
    border: "border-zinc-700/40",
    icon: "github",
  },
  npm: {
    label: "npm",
    bg: "bg-red-600/15",
    text: "text-red-800 dark:text-red-300",
    border: "border-red-600/30",
    icon: "npm",
  },
  railway: {
    label: "Railway",
    bg: "bg-purple-500/15",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500/30",
    icon: "railway",
  },
  shadcnui: {
    label: "shadcn/ui",
    bg: "bg-zinc-900/15",
    text: "text-zinc-900 dark:text-zinc-100",
    border: "border-zinc-800/40",
    icon: "shadcnui",
  },
  tailwindcss: {
    label: "Tailwind CSS",
    bg: "bg-cyan-500/15",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-500/30",
    icon: "tailwindcss",
  },
  vitejs: {
    label: "Vite",
    bg: "bg-purple-400/15",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-400/30",
    icon: "vite",
  },
  supabase: {
    label: "Supabase",
    bg: "bg-emerald-500/15",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-500/30",
    icon: "supabase",
  },
  vercel: {
    label: "Vercel",
    bg: "bg-zinc-800/15",
    text: "text-zinc-900 dark:text-zinc-100",
    border: "border-zinc-700/40",
    icon: "vercel",
  },
  facebookapi: {
    label: "Facebook Graph API",
    bg: "bg-blue-600/15",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30",
  },
  bootstrapcss: {
    label: "Bootstrap",
    bg: "bg-purple-600/15",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-600/30",
    icon: "bootstrap5",
  },
  c: {
    label: "C",
    bg: "bg-slate-600/15",
    text: "text-slate-800 dark:text-slate-300",
    border: "border-slate-600/30",
  },
  firebase: {
    label: "Firebase",
    bg: "bg-amber-500/15",
    text: "text-amber-800 dark:text-amber-300",
    border: "border-amber-500/30",
    icon: "firebase",
  },
  flutter: {
    label: "Flutter",
    bg: "bg-sky-500/15",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-500/30",
    icon: "flutter",
  },
  dart: {
    label: "Dart",
    bg: "bg-cyan-600/15",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-600/30",
    icon: "dart",
  },
};

type ProjectCardProps = {
  project: Project;
};


export function ProjectCard({ project }: ProjectCardProps) {
  const normalizeTech = (tech: string) =>
    tech.toLowerCase().replace(/\s+/g, "").replace(".", "").replace("-", "");
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="group rounded-2xl overflow-hidden border-zinc-200/50 dark:border-zinc-700/50 bg-gray-200/70 dark:bg-zinc-900/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col min-h-100">
      {/* Image Section */}
      <div className="relative h-40 overflow-hidden bg-linear-to-br from-blue-500 to-purple-600 shrink-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-1 overflow-hidden">
        {/* Top Content */}
        <div className="flex flex-col gap-3 overflow-hidden">
          <h3 className="text-xl font-bold line-clamp-2">{project.title}</h3>
          <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed line-clamp-3 overflow-hidden">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 max-h-16 overflow-y-auto">
            {project.tech.map((tech) => {
              const key = normalizeTech(tech);

              const meta = stack[key] ?? {
                label: tech,
                bg: "bg-zinc-500/15",
                text: "text-zinc-700 dark:text-zinc-300",
                border: "border-zinc-500/30",
              };

              return (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs rounded-full border ${meta.bg} ${meta.text} ${meta.border} flex items-center justify-center gap-1 shrink-0`}
                >
                  {meta.icon && (
                    <StackIcon name={meta.icon} className="h-3.5 w-3.5" variant={isDark ? "dark" : "light"} />
                  )}
                  {meta.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 pt-4 shrink-0 items-center flex-row-reverse">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center cursor-pointer justify-center h-8 w-8 rounded-md bg-gray-300/40 dark:bg-zinc-700 hover:opacity-70 transition"
          >
            <StackIcon
              name="github"
              variant={isDark ? "dark" : "light"}
              className="h-5 w-5"
            />
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-300 dark:bg-zinc-700 hover:opacity-70 transition"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
