import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Linkedin, Github } from './icons'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useScrolled } from '../hooks/useScrolled'
import { cn, scrollToId } from '../lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ids = portfolio.navigation.map((item) => item.id)
  const active = useActiveSection(ids)
  const scrolled = useScrolled()
  const reduced = usePrefersReducedMotion()

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    scrollToId(id)
  }

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.4 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <div
          className={cn(
            'mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6',
            scrolled
              ? 'border-border/80 bg-bg/85 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
              : 'border-border/40 bg-bg/40 backdrop-blur-md',
          )}
        >
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Chathuni Janadhi Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-accent to-rose-accent text-xs font-bold text-white shadow-sm transition group-hover:scale-105">
              CJ
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-tight text-fg transition group-hover:text-accent sm:text-base">
                {portfolio.person.name}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <ul className="flex items-center gap-1 rounded-full border border-border/50 bg-elevated/50 p-1 backdrop-blur-sm">
              {portfolio.navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-1.5 text-xs font-medium transition duration-200 sm:text-sm',
                      active === item.id
                        ? 'bg-accent text-accent-fg shadow-sm'
                        : 'text-muted hover:text-fg hover:bg-elevated/80',
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2">
            <a
              href={portfolio.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-1.5 rounded-full border border-border/80 bg-elevated/60 px-3 py-1.5 text-xs font-medium text-fg transition duration-200 hover:border-accent hover:text-accent lg:inline-flex"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={14} className="text-accent" />
              <span>GitHub</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>

            <a
              href={portfolio.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-1.5 rounded-full border border-border/80 bg-elevated/60 px-3.5 py-1.5 text-xs font-medium text-fg transition duration-200 hover:border-accent hover:text-accent sm:inline-flex"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={14} className="text-accent" />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-elevated/70 text-fg transition hover:border-accent md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-4 mt-20 overflow-hidden rounded-3xl border border-border bg-elevated/95 p-6 shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-2">
                  {portfolio.navigation.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition',
                          active === item.id
                            ? 'bg-accent text-accent-fg'
                            : 'text-fg hover:bg-border/30',
                        )}
                      >
                        <span>{item.label}</span>
                        {active === item.id && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-border flex flex-col gap-2">
                  <a
                    href={portfolio.contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between rounded-2xl border border-border/80 bg-bg/80 px-4 py-2.5 text-xs font-medium text-fg"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={15} className="text-accent" />
                      GitHub Profile
                    </span>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>

                  <a
                    href={portfolio.contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between rounded-2xl border border-border/80 bg-bg/80 px-4 py-2.5 text-xs font-medium text-fg"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin size={15} className="text-accent" />
                      Connect on LinkedIn
                    </span>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

