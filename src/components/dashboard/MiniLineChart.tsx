interface MiniLineChartProps {
  points: number[]
  width?: number
  height?: number
  className?: string
  strokeId: string
}

/**
 * Dependency-free SVG sparkline used across dashboard mockups. Normalizes
 * `points` into the given viewbox and fills beneath the line with the same
 * gradient used for its stroke.
 */
export function MiniLineChart({ points, width = 320, height = 96, className, strokeId }: MiniLineChartProps) {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const stepX = width / (points.length - 1)

  const coords = points.map((p, i) => {
    const x = i * stepX
    const y = height - ((p - min) / range) * (height - 8) - 4
    return [x, y] as const
  })

  const linePath = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00B8FF" />
          <stop offset="35%" stopColor="#4F00FF" />
          <stop offset="70%" stopColor="#D600FF" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id={`${strokeId}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F00FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4F00FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${strokeId}-fill)`} />
      <path d={linePath} fill="none" stroke={`url(#${strokeId})`} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
