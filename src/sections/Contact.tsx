import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Linkedin, Github } from '../components/icons'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: (props: { size?: number; className?: string }) => ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = href ? (
    <a
      href={href}
      className="text-fg transition hover:text-accent font-medium break-all"
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noreferrer noopener'}
    >
      {value}
    </a>
  ) : (
    <span className="text-muted font-medium">{value}</span>
  )

  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-elevated/80 p-4 shadow-2xs transition hover:border-accent/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent dark:bg-accent/15">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="mt-0.5 text-xs sm:text-sm">{content}</p>
      </div>
    </div>
  )
}

export function Contact() {
  const { contact } = portfolio

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          title="Let's Build Something Together"
          description="Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out."
        />
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <ContactRow
              icon={Mail}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={contact.location}
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="GitHub profile"
              href={contact.github}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="LinkedIn profile"
              href={contact.linkedin}
            />
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}


