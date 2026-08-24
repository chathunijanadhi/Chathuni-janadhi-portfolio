import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Layers,
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Database,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  HeartPulse,
} from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'
import { cn } from '../lib/utils'

const moduleIcons = [
  Layers,
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Database,
]

export function Projects() {
  const reduced = usePrefersReducedMotion()
  const { project } = portfolio
  const [activeModule, setActiveModule] = useState<number>(0)

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Project"
          title="Elderly Care Management System"
          description="A comprehensive healthcare platform designed to streamline elderly care workflows, clinical coordination, and doctor operations."
        />

        {/* Main Project Overview Card */}
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 overflow-hidden rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl sm:p-8 md:p-10"
        >
          {/* Header Banner */}
          <div className="flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent dark:bg-accent/15">
                <HeartPulse size={24} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-muted">
                    Individual Contribution
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-fg sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {project.role}
                </p>
              </div>
            </div>
          </div>

          {/* Overview text */}
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            {project.overview}
          </p>

          {/* Technology Badges */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-1.5">
              <Sparkles size={13} className="text-accent" />
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-border/80 bg-bg/80 px-3.5 py-1.5 text-xs font-medium text-fg shadow-2xs transition hover:border-accent/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Modular Breakdown */}
        <div className="mt-10">
          <h4 className="font-display text-xl font-bold text-fg sm:text-2xl mb-6">
            Key Architecture & Contribution Areas
          </h4>

          {/* Interactive Desktop Tabs / Mobile Accordion */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Module Selector List */}
            <div className="flex flex-col gap-2.5">
              {project.modules.map((mod, idx) => {
                const Icon = moduleIcons[idx % moduleIcons.length]
                const isActive = activeModule === idx
                return (
                  <button
                    key={mod.title}
                    type="button"
                    onClick={() => setActiveModule(idx)}
                    className={cn(
                      'group flex items-center justify-between rounded-2xl border p-4 text-left transition duration-200 focus:outline-none',
                      isActive
                        ? 'border-accent bg-elevated shadow-md'
                        : 'border-border/70 bg-elevated/50 hover:border-accent/40 hover:bg-elevated/80',
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition',
                          isActive
                            ? 'bg-accent text-accent-fg'
                            : 'bg-accent-soft text-accent group-hover:bg-accent/20 dark:bg-accent/15',
                        )}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-fg sm:text-base">
                          {mod.title}
                        </span>
                        <span className="block text-xs text-muted line-clamp-1">
                          {mod.description}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        'text-muted transition duration-200 lg:-rotate-90',
                        isActive && 'rotate-180 text-accent lg:-rotate-90',
                      )}
                    />
                  </button>
                )
              })}
            </div>

            {/* Active Module Details Card */}
            <div className="rounded-3xl border border-border/80 bg-elevated/90 p-6 shadow-sm backdrop-blur-xl sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    <span>Module Deep Dive</span>
                  </div>
                  <h5 className="mt-2 font-display text-xl font-bold text-fg sm:text-2xl">
                    {project.modules[activeModule].title}
                  </h5>
                  <p className="mt-2 text-sm text-muted">
                    {project.modules[activeModule].description}
                  </p>

                  <div className="mt-6 border-t border-border/60 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">
                      Key Highlights & Implementation:
                    </p>
                    <ul className="space-y-3">
                      {project.modules[activeModule].points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Full Comprehensive Highlights Grid */}
        <motion.div
          variants={stagger(reduced, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 rounded-3xl border border-border/80 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            <Sparkles size={14} className="text-rose-accent" />
            <span>Summary of Responsibilities</span>
          </div>
          <h4 className="font-display text-xl font-bold text-fg mb-6">
            Engineering Contributions Overview
          </h4>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {project.keyContributions.map((contribution, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(reduced)}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-bg/60 p-4 transition hover:border-accent/40"
              >
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  {contribution}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
