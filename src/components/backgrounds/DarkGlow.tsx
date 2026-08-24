import { cn } from '@/utils/cn'

interface DarkGlowProps {
  className?: string
  intensity?: 'default' | 'soft'
}

/**
 * Reusable dark-navy background with radial glows tracing the logo's
 * blue -> violet -> magenta -> orange path, plus a faint grid. Pure CSS,
 * no external assets.
 */
export function DarkGlow({ className, intensity = 'default' }: DarkGlowProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 bg-meta-navy" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div
        className={cn(
          'absolute -left-1/4 -top-1/3 h-[60%] w-[60%] rounded-full bg-meta-blue blur-[120px]',
          intensity === 'soft' ? 'opacity-20' : 'opacity-30',
        )}
      />
      <div
        className={cn(
          'absolute right-[5%] top-[10%] h-[50%] w-[50%] rounded-full bg-meta-violet blur-[130px]',
          intensity === 'soft' ? 'opacity-15' : 'opacity-25',
        )}
      />
      <div
        className={cn(
          'absolute bottom-[-15%] left-[15%] h-[45%] w-[45%] rounded-full bg-meta-magenta blur-[130px]',
          intensity === 'soft' ? 'opacity-10' : 'opacity-20',
        )}
      />
      <div
        className={cn(
          'absolute bottom-[-10%] right-[-5%] h-[40%] w-[40%] rounded-full bg-meta-orange blur-[120px]',
          intensity === 'soft' ? 'opacity-10' : 'opacity-15',
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-meta-navy" />
    </div>
  )
}
