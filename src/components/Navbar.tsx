import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
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
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <div
          className={cn(
            'flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all duration-300 sm:px-4 sm:py-2',
            scrolled
              ? 'border-border/80 bg-bg/85 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
              : 'border-border/50 bg-bg/50 backdrop-blur-md',
          )}
        >
          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {portfolio.navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition duration-200 sm:text-sm',
                      active === item.id
                        ? 'bg-accent text-accent-fg shadow-xs'
                        : 'text-muted hover:text-fg hover:bg-elevated/80',
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Label / Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-1.5 rounded-full bg-elevated/70 px-3 py-1.5 text-xs font-semibold text-fg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
              <span className="capitalize">{active || 'Menu'}</span>
            </button>
          </div>

          <div className="h-4 w-px bg-border/60" aria-hidden />

          {/* Theme Toggle */}
          <ThemeToggle />
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
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


