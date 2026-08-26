import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(8)
  const location = useLocation()
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    firstMobileLinkRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // The home hero is dark navy: keep navbar transparent with light text at
  // the very top of the home page, solid glass everywhere else.
  const overDarkHero = location.pathname === '/' && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overDarkHero
          ? 'border-b border-transparent bg-transparent'
          : scrolled && !open
            ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md'
            : 'border-b border-slate-100 bg-white',
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? overDarkHero
                        ? 'text-white'
                        : 'text-meta-blue'
                      : overDarkHero
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-meta-navy',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-gradient transition-all duration-300',
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" size="sm" variant="brand">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta-blue md:hidden',
            overDarkHero ? 'text-white hover:bg-white/10' : 'text-meta-navy hover:bg-slate-100',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-5">
            <Menu
              className={cn(
                'absolute inset-0 h-5 w-5 transition-all duration-300',
                open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
              )}
              aria-hidden="true"
            />
            <X
              className={cn(
                'absolute inset-0 h-5 w-5 transition-all duration-300',
                open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0',
              )}
              aria-hidden="true"
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-out md:hidden',
          open ? 'max-h-[420px] opacity-100 shadow-lg' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((item, index) => (
            <li key={item.to}>
              <NavLink
                ref={index === 0 ? firstMobileLinkRef : undefined}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive ? 'bg-meta-blue/10 text-meta-blue' : 'text-meta-navy hover:bg-slate-50',
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Button to="/contact" fullWidth onClick={() => setOpen(false)}>
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
