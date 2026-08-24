import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline, TimelineItem } from '../components/TimelineItem'
import { portfolio } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Foundational education building scientific knowledge, analytical thought, and problem-solving fundamentals."
        />
        <div className="mt-10 sm:mt-12">
          <Timeline>
            {portfolio.education.map((entry) => (
              <TimelineItem
                key={entry.id}
                institution={entry.institution}
                stream={entry.stream}
                location={entry.location}
                description={entry.description}
                subjects={entry.subjects}
              />
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  )
}

