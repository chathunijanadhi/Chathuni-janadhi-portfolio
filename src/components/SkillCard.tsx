import type { Skill } from '../types/portfolio'

export function SkillCard({ name }: Skill) {
  return (
    <div className="flex items-center rounded-xl border border-border/80 bg-bg/80 px-3.5 py-2 text-xs sm:text-sm font-medium text-fg shadow-2xs transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
      <span>{name}</span>
    </div>
  )
}

