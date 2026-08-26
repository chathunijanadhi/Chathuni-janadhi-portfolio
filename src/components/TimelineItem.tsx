import type { ReactNode } from 'react'
import { GraduationCap, BookOpen, MapPin, Sparkles } from 'lucide-react'
import type { EducationSubject } from '../types/portfolio'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  location?: string
  description?: string
  subjects?: EducationSubject[]
  isLast?: boolean
}

export function TimelineItem({
  eyebrow,
  title,
  subtitle,
  location,
  description,
  subjects,
  isLast,
}: Props) {
  const isCurrentlyStudying = eyebrow.toLowerCase().includes('currently')

  return (
    <article className="relative grid gap-4 pl-8 md:grid-cols-[190px_1fr] md:pl-0">
      {/* Left Eyebrow / Status column on desktop */}
      <div className="md:text-right">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
            isCurrentlyStudying
              ? 'bg-accent text-accent-fg shadow-xs'
              : 'bg-accent/10 text-accent dark:bg-accent/15'
          }`}
        >
          {isCurrentlyStudying && <Sparkles size={12} className="animate-pulse" />}
          <span>{eyebrow}</span>
        </span>
        {location && (
          <p className="mt-2 flex items-center gap-1 text-xs text-muted md:justify-end">
            <MapPin size={12} className="text-accent shrink-0" />
            <span>{location}</span>
          </p>
        )}
      </div>

      {/* Main timeline content */}
      <div className="relative">
        {/* Timeline Dot & Line */}
        <span
          className="absolute -left-[1.65rem] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-xs md:left-[-2.2rem]"
          aria-hidden
        />
        {!isLast && (
          <span
            className="absolute -left-[1.3rem] top-6 h-[calc(100%+1.8rem)] w-0.5 bg-border/80 md:left-[-1.85rem]"
            aria-hidden
          />
        )}

        <div className="rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition hover:border-accent/40 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition duration-300 dark:bg-accent/15">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-fg sm:text-xl">
                {title}
              </h3>
              {subtitle && (
                <p className="mt-1 text-sm font-semibold text-accent sm:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {description && (
            <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
              {description}
            </p>
          )}

          {subjects && subjects.length > 0 && (
            <div className="mt-5 border-t border-border/60 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted flex items-center gap-1.5 mb-2.5">
                <BookOpen size={13} className="text-accent" />
                Subjects & Examination Results
              </p>
              <div className="flex flex-wrap gap-2">
                {subjects.map((sub) => (
                  <span
                    key={sub.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-bg/80 px-3 py-1 text-xs font-medium text-fg shadow-2xs"
                  >
                    <span>{sub.name}</span>
                    {sub.grade && (
                      <span className="rounded-md bg-accent/15 px-1.5 py-0.5 text-[11px] font-bold text-accent">
                        {sub.grade}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="space-y-8 md:ml-8">{children}</div>
}
