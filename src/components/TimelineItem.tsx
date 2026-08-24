import type { ReactNode } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

type Props = {
  institution: string
  stream: string
  location?: string
  description?: string
  subjects?: string[]
}

export function TimelineItem({
  institution,
  stream,
  location,
  description,
  subjects,
}: Props) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:border-accent/40 sm:p-8 md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent dark:bg-accent/15">
            <GraduationCap size={24} />
          </div>
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Academic Background
            </span>
            <h3 className="mt-2 font-display text-xl font-bold text-fg sm:text-2xl">
              {institution}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted sm:text-base">
              {stream}
            </p>
            {location && (
              <p className="mt-0.5 text-xs text-muted/80">
                {location}
              </p>
            )}
          </div>
        </div>
      </div>

      {description && (
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}

      {subjects && subjects.length > 0 && (
        <div className="mt-6 border-t border-border/60 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-1.5 mb-3">
            <BookOpen size={13} className="text-accent" />
            Curriculum Subjects
          </p>
          <div className="flex flex-wrap gap-2.5">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-bg/80 px-4 py-2 text-xs font-medium text-fg shadow-2xs transition hover:border-accent/40 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {subject}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-6">{children}</div>
}

