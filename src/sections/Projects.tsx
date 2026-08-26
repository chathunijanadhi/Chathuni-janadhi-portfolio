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
          eyebrow="Selected work"
          title="Featured Projects"
          description="The Elderly Care Management System is the primary full-stack system designed to connect administrators, doctors, caregivers, patients, and family members."
        />

        {/* Projects Grid */}
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 max-w-2xl mx-auto sm:mt-10"
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

