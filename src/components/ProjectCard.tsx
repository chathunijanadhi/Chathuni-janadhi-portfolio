import { ArrowUpRight, Eye } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { isPlaceholder } from '../lib/utils'

type Props = {
  project: Project
  onOpenDetails: (p: Project) => void
}

export function ProjectCard({ project, onOpenDetails }: Props) {
  const hasGithub = !isPlaceholder(project.links?.github)
  const hasLive = !isPlaceholder(project.links?.live)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-elevated/80 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl">
      {/* Full-bleed Project Image Container (16:8 Aspect Ratio) */}
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-bg/50 border-b border-border/60">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-elevated via-elevated/20 to-transparent" />

        {/* Top-Left Project Number Pill */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs font-bold text-white shadow-sm backdrop-blur-md">
            {project.number}
          </span>
        </div>

        {/* Top-Right Badges */}
        <div className="absolute right-4 top-4 flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-fg shadow-sm backdrop-blur-md">
              Featured
            </span>
          )}
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-white/90 shadow-sm backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Bottom Category Pill Overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-soft/90 px-3 py-1 text-[11px] font-semibold text-accent backdrop-blur-md dark:bg-accent/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          <h3 className="font-display text-xl font-bold text-fg transition duration-300 group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>

          {project.role && (
            <p className="mt-1.5 text-xs font-semibold text-accent/90 sm:text-sm">
              {project.role}
            </p>
          )}

          <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
            {project.description}
          </p>

          {/* Technology Chips */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/70 bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-fg shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-5 border-t border-border/60">
          {hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg/80 px-3.5 py-2 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          )}

          {hasLive && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg/80 px-3.5 py-2 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-sm transition duration-300 hover:opacity-90 hover:shadow-md active:scale-[0.98]"
          >
            <Eye size={14} />
            <span>View Case Study</span>
          </button>
        </div>
      </div>
    </article>
  )
}
