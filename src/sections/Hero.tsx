import { ArrowDown, ArrowRight, ArrowDownRight, Download, MapPin, Sparkles } from 'lucide-react'
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
  const { person } = portfolio

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-20 pb-8 sm:pt-24 lg:pt-28 lg:pb-10"
    >
      <HeroBackdrop />

      <Container className="relative my-auto flex flex-1 flex-col items-center justify-center lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 xl:gap-16">
        {/* MOBILE & TABLET LAYOUT (< lg) */}
        <div className="flex w-full max-w-md flex-col items-center text-center lg:hidden">
          {/* Greeting */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm"
          >
            <Sparkles size={13} className="text-rose-accent" />
            <span>{person.greeting}</span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={scaleIn(reduced)}
            initial="hidden"
            animate="visible"
            className="my-5 w-full shrink-0"
          >
            <ProfileMark className="max-w-[240px] sm:max-w-[280px]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.08 }}
            className="font-display text-[2.2rem] font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl"
          >
            {person.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.12 }}
            className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm"
          >
            {person.shortTitle}
          </motion.p>

          {/* Intro Description */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.16 }}
            className="mt-3 text-xs leading-relaxed text-muted sm:text-sm px-2 max-w-sm"
          >
            {person.heroDescription}
          </motion.p>

          {/* Location & University Badges */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.2 }}
            className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/70 px-3 py-1">
              <MapPin size={12} className="text-accent shrink-0" />
              {person.location}
            </span>
            <span className="rounded-full border border-border/80 bg-elevated/70 px-3 py-1">
              {person.university}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.24 }}
            className="mt-5 flex w-full max-w-xs flex-col items-center gap-2"
          >
            <div className="flex w-full items-center gap-2">
              <Button
                onClick={() => scrollToId('projects')}
                className="flex-1 py-2.5 text-xs font-semibold sm:text-sm"
              >
                View Work
                <ArrowRight size={14} />
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToId('contact')}
                className="flex-1 py-2.5 text-xs font-semibold sm:text-sm"
              >
                Connect
                <ArrowDownRight size={14} />
              </Button>
            </div>
            {person.cvUrl && (
              <a
                href={person.cvUrl}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-elevated/70 py-2.5 px-4 text-xs font-semibold text-fg transition hover:border-accent hover:text-accent sm:text-sm"
              >
                <Download size={14} />
                Download CV
              </a>
            )}
          </motion.div>

          {/* Social Quick Bar */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.3 }}
            className="mt-5"
          >
            <SocialLinks size={16} />
          </motion.div>
        </div>

        {/* DESKTOP TWO-COLUMN LAYOUT (lg:) */}
        <div className="hidden flex-col items-start text-left lg:flex">
          {/* Greeting */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
          >
            <span className="h-px w-6 bg-accent" aria-hidden />
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
            {person.shortTitle}
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

          {/* Location & University Badges */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-2.5 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/80 px-3.5 py-1 text-xs font-medium">
              <MapPin size={13} className="text-accent" />
              {person.location}
            </span>
            <span className="rounded-full border border-border/80 bg-elevated/80 px-3.5 py-1 text-xs font-medium">
              {person.university}
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button onClick={() => scrollToId('projects')}>
              View Work
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => scrollToId('contact')}>
              Connect
              <ArrowDownRight size={16} />
            </Button>
            {person.cvUrl && (
              <a
                href={person.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-elevated/70 px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
              >
                <Download size={15} />
                Download CV
              </a>
            )}
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

