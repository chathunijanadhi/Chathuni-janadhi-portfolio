import { motion } from 'motion/react'
import { MapPin, Sparkles, BookOpen, Layers } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function About() {
  const reduced = usePrefersReducedMotion()
  const { person } = portfolio

  const highlights = [
    {
      icon: MapPin,
      label: 'Location',
      value: person.location,
    },
    {
      icon: BookOpen,
      label: 'Field of Study',
      value: 'Information Technology',
    },
    {
      icon: Layers,
      label: 'Primary Focus',
      value: 'Software Development & Problem Solving',
    },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Profile" title="About Chathuni" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
          {/* Biography Paragraph */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5 rounded-3xl border border-border/80 bg-elevated/70 p-6 shadow-sm backdrop-blur-xl sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Sparkles size={14} className="text-rose-accent" />
              <span>Biography</span>
            </div>
            <p className="font-display text-xl font-medium leading-snug text-fg sm:text-2xl">
              Building efficient, reliable, and user-friendly software solutions.
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {person.bio}
            </p>
          </motion.div>

          {/* Quick Info Highlight Card */}
          <motion.div
            variants={stagger(reduced, 0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3.5"
          >
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp(reduced)}
                  className="flex items-start gap-4 rounded-2xl border border-border/80 bg-elevated/80 p-5 shadow-xs transition duration-300 hover:border-accent/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent dark:bg-accent/15">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <p className="mt-0.5 text-sm font-semibold text-fg sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

