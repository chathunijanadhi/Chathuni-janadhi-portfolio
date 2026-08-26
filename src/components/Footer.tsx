import { Mail, ArrowUpRight, MapPin } from 'lucide-react'
import { Linkedin, Github } from './icons'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/utils'
import { Container } from './Container'

export function Footer() {
  const { person, contact, navigation } = portfolio

  return (
    <footer className="border-t border-border/80 bg-elevated/40 py-12 backdrop-blur-sm">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Brand info */}
        <div>
          <span className="font-display text-2xl font-bold tracking-tight text-fg">
            {person.name}
          </span>
          <p className="mt-1 text-sm font-medium text-accent">
            {person.shortTitle}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
            <MapPin size={13} className="text-accent" />
            {person.location}
          </p>

          {/* Social Links */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/70 px-3.5 py-1.5 text-xs font-medium text-fg transition duration-200 hover:border-accent hover:text-accent"
              aria-label="LinkedIn (opens in new tab)"
            >
              <Linkedin size={14} className="text-accent" />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/70 px-3.5 py-1.5 text-xs font-medium text-fg transition duration-200 hover:border-accent hover:text-accent"
              aria-label="GitHub (opens in new tab)"
            >
              <Github size={14} className="text-accent" />
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/70 px-3.5 py-1.5 text-xs font-medium text-fg transition duration-200 hover:border-accent hover:text-accent"
              aria-label="Email Chathuni"
            >
              <Mail size={14} className="text-accent" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:flex-col md:gap-y-2.5 md:text-right">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="text-xs font-medium text-muted transition duration-200 hover:text-accent sm:text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="mt-8 border-t border-border/40 pt-6">
        <p className="text-center text-xs text-muted sm:text-left">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

