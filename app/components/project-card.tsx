import { Project } from "@/lib/type";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};


// [ ] Color coded technology used
// [ ] Implement Tech Logo
// [ ] Implement animations/styles to the card

export function ProjectCard({project}: ProjectCardProps ) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 bg-gray-200/70 dark:bg-zinc-900/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-blue-500 to-purple-600">
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
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Code →
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
