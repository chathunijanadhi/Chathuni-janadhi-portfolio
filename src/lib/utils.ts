export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function isPlaceholder(url?: string): boolean {
  if (!url) return true
  const lower = url.trim().toLowerCase()
  return (
    lower.includes('your_site_url') ||
    lower.includes('your_live_url') ||
    lower.includes('example.com') ||
    lower === '#' ||
    lower === ''
  )
}

export function resolveSocialHref(type: 'email' | 'github' | 'linkedin', val: string): string {
  if (!val) return '#'
  if (type === 'email' && !val.startsWith('mailto:')) {
    return `mailto:${val}`
  }
  return val
}
