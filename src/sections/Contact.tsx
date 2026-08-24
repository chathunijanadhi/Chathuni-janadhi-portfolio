import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { Linkedin, Github } from '../components/icons'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Contact() {
  const reduced = usePrefersReducedMotion()
  const { contact } = portfolio

  const contactCards = [
    {
      id: 'email',
      title: 'Email',
      value: contact.email,
      description: 'Send an inquiry or message directly',
      href: `mailto:${contact.email}`,
      btnText: 'Email Me',
      icon: Mail,
      isExternal: false,
    },
    {
      id: 'phone',
      title: 'Phone',
      value: contact.phone,
      description: 'Available for direct calls and inquiries',
      href: `tel:${contact.phone}`,
      btnText: 'Call',
      icon: Phone,
      isExternal: false,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'Chathuni Janadhi',
      description: 'Connect professionally on LinkedIn',
      href: contact.linkedin,
      btnText: 'LinkedIn Profile',
      icon: Linkedin,
      isExternal: true,
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'chathunijanadhi',
      description: 'Explore code repositories & work',
      href: contact.github,
      btnText: 'GitHub Profile',
      icon: Github,
      isExternal: true,
    },
  ]

  return (
    <section id="contact" className="section-band relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          description="Feel free to reach out for academic discussions, collaborations, or professional networking."
        />

        {/* Location & Name Highlight Banner */}
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-border/80 bg-elevated/70 p-6 shadow-sm backdrop-blur-md sm:flex-row sm:p-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent dark:bg-accent/15 sm:flex">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
                {contact.name}
              </h3>
              <p className="text-xs text-muted sm:text-sm">{contact.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/80 bg-bg/80 px-4 py-2 text-xs font-medium text-muted sm:text-sm">
            <MapPin size={15} className="text-accent" />
            <span>{contact.location}</span>
          </div>
        </motion.div>

        {/* Contact Method Cards */}
        <motion.div
          variants={stagger(reduced, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                variants={fadeUp(reduced)}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-7"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-fg dark:bg-accent/15">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-fg">
                    {card.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    {card.description}
                  </p>
                  <p className="mt-3 truncate text-sm font-semibold text-fg">
                    {card.value}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href={card.href}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noreferrer noopener' : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-accent-fg shadow-xs transition duration-200 hover:opacity-90 active:scale-[0.98] sm:text-sm"
                    aria-label={`${card.btnText} (${card.value})`}
                  >
                    <span>{card.btnText}</span>
                    {card.isExternal ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <Icon size={14} />
                    )}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

