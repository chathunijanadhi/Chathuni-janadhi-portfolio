import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { Button } from './Button'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border/80 bg-elevated p-6 shadow-2xl sm:p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-bg/80 text-fg transition hover:border-accent hover:text-accent sm:right-6 sm:top-6"
              aria-label="Close project modal"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1 text-xs font-medium text-muted">
                {project.year}
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              {project.title}
            </h3>

            {project.role && (
              <p className="mt-1 text-sm font-semibold text-accent">
                {project.role}
              </p>
            )}

            {/* Description / Overview */}
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {project.overview || project.description}
            </p>

            {/* Individual Contributions if present */}
            {project.myContributions && project.myContributions.length > 0 && (
              <div className="mt-6 border-t border-border/60 pt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  <Sparkles size={14} className="text-rose-accent" />
                  Key Individual Contributions
                </h4>
                <ul className="space-y-2.5">
                  {project.myContributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-6 border-t border-border/60 pt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-border/80 bg-bg/80 px-3 py-1 text-xs font-medium text-fg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {project.links && (
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                {project.links.github && (
                  <Button
                    variant="secondary"
                    href={project.links.github}
                    external
                    className="text-xs sm:text-sm"
                  >
                    <Github size={15} />
                    GitHub Repo
                    <ArrowUpRight size={14} />
                  </Button>
                )}
                {project.links.live && (
                  <Button
                    href={project.links.live}
                    external
                    className="text-xs sm:text-sm"
                  >
                    Live Demo
                    <ArrowUpRight size={14} />
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
