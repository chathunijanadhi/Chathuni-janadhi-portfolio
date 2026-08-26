import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Button } from './Button'

const fieldClass =
  'w-full rounded-2xl border border-border/80 bg-bg/70 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-elevated'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? 'Portfolio Inquiry')
    const message = String(data.get('message') ?? '')

    const targetEmail = portfolio.contact.email
    const body = `${message}\n\n— From: ${name} (${email})`
    const mailto = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setStatus('success')
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-border/80 bg-elevated/80 p-6 shadow-sm backdrop-blur-xl sm:p-8"
    >
      <div>
        <h3 className="font-display text-lg font-bold text-fg sm:text-xl">
          Send a message
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
          Tell me a little about your idea and I&apos;ll get back to you soon.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-medium text-fg">
          Name
          <input
            className={`${fieldClass} mt-1.5`}
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block text-xs font-medium text-fg">
          Email
          <input
            className={`${fieldClass} mt-1.5`}
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label className="block text-xs font-medium text-fg">
        Subject
        <input
          className={`${fieldClass} mt-1.5`}
          name="subject"
          type="text"
          placeholder="Collaboration or Project Inquiry"
          required
        />
      </label>

      <label className="block text-xs font-medium text-fg">
        Message
        <textarea
          className={`${fieldClass} mt-1.5 min-h-28 resize-y`}
          name="message"
          placeholder="Write your message here..."
          required
        />
      </label>

      <Button type="submit" className="mt-2">
        <Send size={15} />
        <span>Send Message</span>
      </Button>

      {status === 'success' && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-accent">
          <CheckCircle2 size={14} />
          Opening your email client to send the message.
        </p>
      )}
    </form>
  )
}

