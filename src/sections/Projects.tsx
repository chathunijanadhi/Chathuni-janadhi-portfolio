import { useState } from 'react'
import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp } from '../lib/motion'
import type { Project } from '../types/portfolio'

export function Projects() {
  const reduced = usePrefersReducedMotion()
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-band py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          description="Production-grade full-stack applications built with modern technologies — from comprehensive healthcare platforms to e-commerce experiences."
        />

        {/* Projects Grid — single column on mobile, two columns on lg+ */}
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2"
        >
          {portfolio.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </Container>
    </section>
  )
}
