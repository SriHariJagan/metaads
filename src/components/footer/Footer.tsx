import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram, Send, CheckCircle2 } from 'lucide-react'
import { FOOTER_LINKS } from '@/data/navigation'
import { Logo } from '@/components/common/Logo'

const SOCIALS = [
  { label: 'MetaAds on Twitter', icon: Twitter },
  { label: 'MetaAds on LinkedIn', icon: Linkedin },
  { label: 'MetaAds on Instagram', icon: Instagram },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (event: FormEvent) => {
    event.preventDefault()
    if (!email.includes('@')) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-meta-navy text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Advertising technology built for measurable growth. Create, target,
              launch and optimize campaigns with intelligence in the loop.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-slate-500">
              Part of the Meta ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_LINKS.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h3 className="text-sm font-semibold text-white">{group.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <form onSubmit={onSubscribe} className="w-full max-w-md" noValidate>
            <label htmlFor="newsletter-email" className="text-sm font-medium text-white">
              Growth insights, monthly
            </label>
            {subscribed ? (
              <p className="mt-3 flex items-center gap-2 text-sm text-meta-cyan" role="status">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                You&apos;re subscribed. Talk soon.
              </p>
            ) : (
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-meta-cyan focus:outline-none focus:ring-1 focus:ring-meta-cyan"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            )}
          </form>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (placeholder link)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} MetaAds. All rights reserved.</p>
          <p className="text-slate-500">Built for marketers who measure.</p>
        </div>
      </div>
    </footer>
  )
}
