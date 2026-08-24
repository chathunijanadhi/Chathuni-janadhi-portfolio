import { Sparkles, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const { profileImage, profileImageAlt, name, location } = portfolio.person

  return (
    <div className={cn('relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]', className)}>
      {/* Ambient background glows */}
      <div
        className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-accent/25 via-rose-accent/20 to-accent/10 blur-2xl sm:-inset-6 sm:blur-3xl"
        aria-hidden
      />

      {/* Decorative Outer Thin Geometric Rings */}
      <div
        className="pointer-events-none absolute -inset-3 -rotate-2 rounded-[2.75rem] border border-accent/25 sm:-inset-4"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rotate-2 rounded-[2.5rem] border border-rose-accent/20 sm:-inset-2"
        aria-hidden
      />

      {/* Floating Accent Sparkle (Top Right) */}
      <div
        className="absolute -top-3 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-elevated/90 shadow-md backdrop-blur-sm sm:-top-4 sm:-right-3 sm:h-10 sm:w-10"
        aria-hidden
      >
        <Sparkles size={16} className="text-accent" />
      </div>

      {/* Main Framed Container */}
      <div className="relative overflow-hidden rounded-[2.25rem] border border-border/90 bg-elevated/80 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-2.5 dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        <div className="relative overflow-hidden rounded-[1.85rem] sm:rounded-[2.1rem]">
          <img
            src={profileImage}
            alt={profileImageAlt || name}
            className="aspect-[3/4] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle gradient vignette overlay at the bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            aria-hidden
          />
        </div>
      </div>

      {/* Floating Info Pill (Bottom Left) */}
      <div className="absolute -bottom-3 left-3 z-20 flex items-center gap-2 rounded-full border border-border/90 bg-elevated/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md sm:-bottom-4 sm:left-4 sm:px-4 sm:py-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="flex items-center gap-1 text-[11px] font-medium text-fg sm:text-xs">
          <MapPin size={12} className="text-accent" />
          {location}
        </span>
      </div>
    </div>
  )
}

