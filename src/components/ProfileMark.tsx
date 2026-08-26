import { portfolio } from '../data/portfolio'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const { profileImage, profileImageAlt, name } = portfolio.person

  return (
    <div className={cn('relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]', className)}>
      {/* Subtle soft ambient glow */}
      <div
        className="absolute -inset-2 rounded-[2.25rem] bg-accent/15 blur-2xl sm:-inset-3 sm:rounded-[2.75rem] sm:blur-3xl"
        aria-hidden
      />

      {/* Clean, professional framed portrait */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-elevated shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:rounded-[2.25rem] dark:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
        <img
          src={profileImage}
          alt={profileImageAlt || name}
          className="aspect-[3/4] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}


