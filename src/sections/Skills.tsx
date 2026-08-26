import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Skills() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Technologies grouped by how I use them — without fake percentage scores."
        />
        <motion.div
          variants={stagger(reduced, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2"
        >
          {portfolio.skills.map((group) => (
            <motion.article
              key={group.id}
              variants={fadeUp(reduced)}
              className="rounded-3xl border border-border/80 bg-elevated/80 p-5 sm:p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <h3 className="font-display text-base font-bold text-fg sm:text-lg">
                {group.title}
              </h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
