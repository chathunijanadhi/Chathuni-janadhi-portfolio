import { Mail, Phone } from 'lucide-react'
import { Linkedin, Github } from './icons'
import { portfolio } from '../data/portfolio'
import { cn } from '../lib/utils'

type Props = {
  className?: string
  size?: number
}

export function SocialLinks({ className, size = 18 }: Props) {
  const { linkedin, github, email, phone } = portfolio.contact

  const links = [
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      href: linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      href: github,
      icon: Github,
      external: true,
    },
    {
      id: 'email',
      label: 'Send an Email',
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
    },
    {
      id: 'phone',
      label: 'Call',
      href: `tel:${phone}`,
      icon: Phone,
      external: false,
    },
  ]

  return (
    <ul className={cn('flex items-center gap-2.5', className)}>
      {links.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.id}>
            <a
              href={item.href}
              aria-label={item.label}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer noopener' : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-elevated/70 text-fg transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
            >
              <Icon size={size} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

