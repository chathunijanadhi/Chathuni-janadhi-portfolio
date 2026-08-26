import { motion } from 'motion/react'
import { Layers, Server, Database, Cloud } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

const serviceIcons = {
  layers: Layers,
  server: Server,
  database: Database,
  cloud: Cloud,
}

export function Services() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="section-band py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Focus"
          title="What I Do"
          description="Areas of practical expertise and engineering focus applied across academic and project workflows."
        />

        <motion.div
          variants={stagger(reduced, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {portfolio.services.map((svc) => {
            const Icon = serviceIcons[svc.icon]
            return (
              <motion.article
                key={svc.id}
                variants={fadeUp(reduced)}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/40 sm:p-7"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-fg dark:bg-accent/15">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-fg sm:text-lg">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {svc.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
