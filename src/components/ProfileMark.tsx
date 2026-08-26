import { portfolio } from '../data/portfolio'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const { profileImage, profileImageAlt, name } = portfolio.person

  return (
    <div className={cn('group relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]', className)}>
      {/* Soft light purple ambient glow aura */}
      <div
        className="absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-accent via-purple-400 to-rose-accent opacity-35 blur-2xl sm:-inset-8 sm:blur-3xl transition duration-500 group-hover:opacity-50"
        aria-hidden
      />

      {/* Secondary core purple glow */}
      <div
        className="absolute -inset-3 rounded-[2.25rem] bg-accent/20 blur-xl sm:-inset-4 sm:blur-2xl"
        aria-hidden
      />

      {/* Clean portrait frame with subtle accent glow */}
      <div className="relative overflow-hidden rounded-[2rem] border border-accent/30 bg-elevated shadow-[0_15px_35px_rgba(0,0,0,0.1)] sm:rounded-[2.25rem] dark:shadow-[0_0_35px_rgba(167,139,250,0.2)]">
        <img
          src={profileImage}
          alt={profileImageAlt || name}
          className="aspect-[3/4] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}
