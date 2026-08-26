import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight, CheckCircle2, Sparkles, AlertCircle, Lightbulb, Target, Layers } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { Button } from './Button'
import { isPlaceholder } from '../lib/utils'

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

  if (!project) return null

  const hasGithub = !isPlaceholder(project.links?.github)
  const hasLive = !isPlaceholder(project.links?.live)

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
          aria-hidden
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border/80 bg-elevated p-6 shadow-2xl sm:p-8 md:p-10"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Top Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-bg/80 text-fg transition hover:border-accent hover:text-accent sm:right-6 sm:top-6"
            aria-label="Close case study modal"
          >
            <X size={18} />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-accent">
              {project.number}
            </span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <span className="rounded-full border border-border/80 px-3 py-1 text-xs font-medium text-muted">
              {project.year}
            </span>
          </div>

          {/* Main Title & Role */}
          <h2 id="modal-project-title" className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl lg:text-4xl">
            {project.title}
          </h2>

          {project.role && (
            <p className="mt-2 text-sm font-semibold text-accent sm:text-base">
              {project.role}
            </p>
          )}

          {/* Large Hero Project Image */}
          {project.image && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/80 bg-bg/60 shadow-inner">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className="h-full max-h-[380px] w-full object-cover object-center"
              />
            </div>
          )}

          {/* Overview */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/90 sm:text-base">
              {project.overview || project.description}
            </p>
          </div>

          {/* Key Individual Contributions */}
          {project.myContributions && project.myContributions.length > 0 && (
            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft/30 p-5 dark:bg-accent/10 sm:p-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles size={16} className="text-rose-accent" />
                Key Individual Contributions
              </h3>
              <ul className="mt-4 space-y-3">
                {project.myContributions.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-fg sm:text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Two-Column Details (Problem & Solution) */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.problem && (
              <div className="rounded-2xl border border-border/80 bg-bg/60 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                  <Target size={15} className="text-accent" />
                  Problem Statement
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="rounded-2xl border border-border/80 bg-bg/60 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                  <Lightbulb size={15} className="text-rose-accent" />
                  Solution Architecture
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Optional Challenges Section (Only rendered if non-empty) */}
          {project.challenges && project.challenges.trim().length > 0 && (
            <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 sm:p-6">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                <AlertCircle size={15} />
                Key Challenges
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Features Grid */}
          {project.features && project.features.length > 0 && (
            <div className="mt-8 border-t border-border/60 pt-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted mb-4">
                <Layers size={15} className="text-accent" />
                Key System Capabilities & Features
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-bg/50 px-3.5 py-2.5 text-xs font-medium text-fg">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Learnings */}
          {project.learnings && (
            <div className="mt-6 border-t border-border/60 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                Key Takeaways & Engineering Learnings
              </h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                {project.learnings}
              </p>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="mt-6 border-t border-border/60 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-border/80 bg-bg/80 px-3 py-1 text-xs font-medium text-fg shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons Footer */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-border/60">
            {hasGithub && (
              <Button
                variant="secondary"
                href={project.links.github}
                external
                className="text-xs sm:text-sm"
              >
                <Github size={15} />
                <span>GitHub Repository</span>
                <ArrowUpRight size={14} />
              </Button>
            )}

            {hasLive && (
              <Button
                href={project.links.live}
                external
                className="text-xs sm:text-sm"
              >
                <span>Live Demonstration</span>
                <ArrowUpRight size={14} />
              </Button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="ml-auto rounded-full border border-border/80 bg-bg/80 px-5 py-2.5 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
