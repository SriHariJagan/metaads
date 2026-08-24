import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  imgClassName?: string
}

/**
 * MetaAds brand logo.
 *
 * Uses the official logo asset from `public/logo.png`. The white chip keeps
 * the wordmark legible on dark sections (hero, footer) and light ones alike.
 */
export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <Link to="/" aria-label="MetaAds home" className={cn('group inline-flex shrink-0', className)}>
      <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-[1.03]">
        <img
          src="/logo.png"
          alt="MetaAds"
          width={112}
          height={40}
          className={cn('h-7 w-auto sm:h-8', imgClassName)}
        />
      </span>
    </Link>
  )
}
