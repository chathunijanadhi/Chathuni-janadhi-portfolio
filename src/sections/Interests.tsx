import { motion } from 'motion/react'
import { Code2, Brain, Sparkles, BookOpen } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'
import type { Interest } from '../types/portfolio'

const iconMap: Record<Interest['icon'], typeof Code2> = {
  code: Code2,
  lightbulb: Brain,
  sparkles: Sparkles,
  book: BookOpen,
}

export function Interests() {
  const reduced = usePrefersReducedMotion()
  const { interests } = portfolio

  return (
    <section id="interests" className="section-band relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Core Focus"
          title="Areas of Interest & Focus"
          description="Key domains and software disciplines that drive my curiosity, technical growth, and problem-solving mindset."
        />

        <motion.div
          variants={stagger(reduced, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6"
        >
          {interests.map((item: Interest, index: number) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.id}
                variants={fadeUp(reduced)}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-8"
              >
                {/* Subtle Ambient Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition duration-500 group-hover:bg-accent/20"
                  aria-hidden
                />

                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg dark:bg-accent/15">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-accent/80 tracking-wider">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-fg sm:text-xl transition group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
