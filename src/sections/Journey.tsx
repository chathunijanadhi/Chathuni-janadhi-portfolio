import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Journey() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="journey" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Path"
          title="My Journey"
          description="Milestones shaping my engineering foundation, software development experience, and academic growth."
        />

        <motion.div
          variants={stagger(reduced, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.journey.map((item, idx) => (
            <motion.article
              key={item.id}
              variants={fadeUp(reduced)}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/40 sm:p-7"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-fg sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-accent/90">
                  {item.context}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
