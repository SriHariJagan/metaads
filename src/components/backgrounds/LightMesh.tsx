import { cn } from '@/utils/cn'

interface LightMeshProps {
  className?: string
}

/**
 * Subtle light-section background: faint grid plus a couple of low-opacity
 * brand-color washes, kept quiet so foreground content stays dominant.
 */
export function LightMesh({ className }: LightMeshProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_30%,transparent_100%)]" />
      <div className="absolute -right-1/4 top-0 h-[50%] w-[50%] rounded-full bg-meta-blue/10 blur-[120px]" />
      <div className="absolute -left-1/4 bottom-0 h-[45%] w-[45%] rounded-full bg-meta-magenta/10 blur-[120px]" />
    </div>
  )
}
