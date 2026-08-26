import { ArrowUpRight, Eye } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { cn } from '../lib/utils'

type Props = {
  project: Project
  onOpenDetails: (p: Project) => void
}

export function ProjectCard({ project, onOpenDetails }: Props) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-8">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-accent">
            {project.number}
          </span>
          <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent dark:bg-accent/15">
            {project.year} · {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-xl font-bold text-fg transition group-hover:text-accent sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
          {project.description}
        </p>

        {/* Tech list */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/70 bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-fg"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="rounded-lg border border-border/70 bg-bg/70 px-2 py-1 text-[11px] font-medium text-muted">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/60">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg/80 px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg/80 px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={13} />
          </a>
        )}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-fg shadow-xs transition hover:opacity-90 active:scale-[0.98]',
            !project.links && 'w-full justify-center',
          )}
        >
          <Eye size={13} />
          <span>View Details</span>
        </button>
      </div>
    </article>
  )
}
