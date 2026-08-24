import { ArrowDown, ArrowUpRight, Sparkles, User, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { HeroBackdrop } from '../components/HeroBackdrop'
import { ProfileMark } from '../components/ProfileMark'
import { SocialLinks } from '../components/SocialLinks'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, scaleIn } from '../lib/motion'
import { scrollToId } from '../lib/utils'

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const { person, contact } = portfolio

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-20 pb-8 sm:pt-24 lg:pt-28 lg:pb-12"
    >
      <HeroBackdrop />

      <Container className="relative my-auto flex flex-1 flex-col items-center justify-center lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 xl:gap-16">
        {/* MOBILE & TABLET LAYOUT (< lg) */}
        <div className="flex w-full max-w-md flex-col items-center text-center lg:hidden">
          {/* Greeting & Badge */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 rounded-full border border-border/80 bg-elevated/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm"
          >
            <Sparkles size={13} className="text-rose-accent" />
            <span>{person.greeting}</span>
          </motion.div>

          {/* Profile Image Prominent on Mobile */}
          <motion.div
            variants={scaleIn(reduced)}
            initial="hidden"
            animate="visible"
            className="my-5 w-full shrink-0"
          >
            <ProfileMark className="max-w-[260px] sm:max-w-[300px]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.08 }}
            className="font-display text-[2rem] font-bold leading-tight tracking-tight text-fg sm:text-4xl"
          >
            {person.name}
          </motion.h1>

          {/* Professional / Student Title */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.12 }}
            className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm"
          >
            {person.role}
          </motion.p>

          {/* Short Introduction */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.16 }}
            className="mt-3 text-xs leading-relaxed text-muted sm:text-sm px-2 max-w-sm"
          >
            {person.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.22 }}
            className="mt-5 flex w-full max-w-xs items-center justify-center gap-3"
          >
            <Button
              onClick={() => scrollToId('about')}
              className="flex-1 py-2.5 text-xs font-medium sm:text-sm"
            >
              <User size={15} />
              About Me
            </Button>
            <Button
              variant="secondary"
              href={contact.linkedin}
              external
              className="flex-1 py-2.5 text-xs font-medium sm:text-sm"
              ariaLabel="Connect on LinkedIn (opens in new tab)"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </Button>
          </motion.div>

          {/* Social Quick Bar */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.28 }}
            className="mt-5"
          >
            <SocialLinks size={16} />
          </motion.div>
        </div>

        {/* DESKTOP TWO-COLUMN LAYOUT (lg:) */}
        <div className="hidden flex-col items-start text-left lg:flex">
          {/* Greeting Badge */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-elevated/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent backdrop-blur-sm shadow-sm"
          >
            <Sparkles size={14} className="text-rose-accent" />
            <span>{person.greeting}</span>
          </motion.div>

          {/* Large Name */}
          <motion.h1
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.08 }}
            className="mt-4 font-display text-5xl font-bold leading-[1.08] tracking-tight text-fg xl:text-6xl"
          >
            {person.name}
          </motion.h1>

          {/* Role / Title */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.14 }}
            className="mt-3 text-lg font-semibold tracking-wide text-accent xl:text-xl"
          >
            {person.role}
          </motion.p>

          {/* Short Introduction */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.2 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted xl:text-lg"
          >
            {person.heroDescription}
          </motion.p>

          {/* Location Badge */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.24 }}
            className="mt-5 flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/80 px-3.5 py-1 text-xs font-medium text-muted">
              <MapPin size={13} className="text-accent" />
              {person.location}
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <Button onClick={() => scrollToId('about')}>
              <User size={16} />
              About Me
            </Button>
            <Button
              variant="secondary"
              href={contact.linkedin}
              external
              ariaLabel="Connect on LinkedIn (opens in new tab)"
            >
              Connect with Me
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          {/* Social / Contact Links */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.36 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* DESKTOP PROFILE IMAGE (lg:) */}
        <motion.div
          variants={scaleIn(reduced)}
          initial="hidden"
          animate="visible"
          className="hidden w-full min-w-0 justify-center self-center lg:flex"
        >
          <ProfileMark />
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        variants={fadeUp(reduced)}
        initial="hidden"
        animate="visible"
        transition={{ delay: reduced ? 0 : 0.45 }}
        className="relative mx-auto mt-2 flex flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted sm:text-xs"
      >
        <button
          type="button"
          onClick={() => scrollToId('about')}
          className="group flex flex-col items-center gap-1 transition hover:text-accent focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="grid h-8 w-5 place-items-center rounded-full border border-border/80 bg-elevated/50 shadow-xs transition group-hover:border-accent">
            <ArrowDown size={11} className="motion-safe:animate-bounce text-accent" />
          </span>
          <span className="text-[10px]">Scroll</span>
        </button>
      </motion.div>
    </section>
  )
}

