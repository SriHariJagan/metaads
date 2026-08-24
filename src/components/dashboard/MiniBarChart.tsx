interface MiniBarChartProps {
  values: number[]
  width?: number
  height?: number
  className?: string
}

const BAR_COLORS = ['#00B8FF', '#0066FF', '#4F00FF', '#7200FF', '#D600FF', '#FF0066', '#FF6A00']

/** Dependency-free SVG bar chart for dashboard mockups. */
export function MiniBarChart({ values, width = 320, height = 120, className }: MiniBarChartProps) {
  const max = Math.max(...values) || 1
  const gap = 10
  const barWidth = (width - gap * (values.length - 1)) / values.length

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      {values.map((v, i) => {
        const barHeight = Math.max((v / max) * (height - 4), 4)
        const x = i * (barWidth + gap)
        const y = height - barHeight
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx={4}
            fill={BAR_COLORS[i % BAR_COLORS.length]}
            fillOpacity={0.85}
          />
        )
      })}
    </svg>
  )
}
