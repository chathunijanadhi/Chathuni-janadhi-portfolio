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
          eyebrow="Featured System"
          title="Featured Project"
          description="A production-grade full-stack web system engineered to connect administrators, doctors, caregivers, patients, and family members."
        />

        {/* Featured Case Study Single Card Wrapper */}
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 max-w-3xl mx-auto sm:mt-12"
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
