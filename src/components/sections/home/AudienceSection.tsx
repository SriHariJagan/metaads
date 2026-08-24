import { Reveal, SectionHeading } from '@/components/common'

const audienceNodes = [
  { id: 'intent', label: ['High', 'Intent'], x: 120, y: 70, color: '#0066FF' },
  { id: 'interest', label: ['Interest &', 'Affinity'], x: 360, y: 40, color: '#00B8FF' },
  { id: 'behavior', label: ['Behavioral', 'Patterns'], x: 540, y: 100, color: '#8B5CF6' },
  { id: 'lookalike', label: ['Predictive', 'Lookalikes'], x: 160, y: 200, color: '#D946EF' },
  { id: 'retarget', label: ['Retargeting', 'Pools'], x: 480, y: 210, color: '#EC4899' },
  { id: 'conversion', label: ['Conversion'], x: 330, y: 130, color: '#000E41' },
]

const edges = ['intent', 'interest', 'behavior', 'lookalike', 'retarget']

const legendItems = [
  { label: 'High Intent', color: '#0066FF' },
  { label: 'Interest & Affinity', color: '#00B8FF' },
  { label: 'Behavioral Patterns', color: '#8B5CF6' },
  { label: 'Predictive Lookalikes', color: '#D946EF' },
  { label: 'Retargeting Pools', color: '#EC4899' },
]

export function AudienceSection() {
  const conv = audienceNodes.find((n) => n.id === 'conversion')!

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden" aria-labelledby="audience-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="audience-heading"
            eyebrow="Audience intelligence"
            title="Reach the people who matter. Exclude those who don't."
            description="Predictive audiences built from conversion patterns, not just demographics. Refreshed daily."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-5xl">
          <Reveal variant="up">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <svg viewBox="0 0 660 260" className="w-full h-auto" role="img" aria-label="Network diagram showing audience segments flowing into a central conversion node">
                  <defs>
                    <filter id="nodeGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {edges.map((id) => {
                    const node = audienceNodes.find((n) => n.id === id)!
                    const lineLen = Math.sqrt((node.x - conv.x) ** 2 + (node.y - conv.y) ** 2)
                    const nx = (conv.x - node.x) / lineLen
                    const ny = (conv.y - node.y) / lineLen
                    const x1 = node.x + nx * 44
                    const y1 = node.y + ny * 44
                    const x2 = conv.x - nx * 52
                    const y2 = conv.y - ny * 52
                    return (
                      <line
                        key={id}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke={node.color}
                        strokeWidth={2}
                        strokeDasharray="6,4"
                        opacity={0.35}
                      />
                    )
                  })}

                  {audienceNodes.map((node) => {
                    const isCenter = node.id === 'conversion'
                    const r = isCenter ? 46 : 36
                    return (
                      <g key={node.id} filter={isCenter ? 'url(#nodeGlow)' : undefined}>
                        {isCenter && (
                          <circle cx={node.x} cy={node.y} r={54} fill="none" stroke={node.color} strokeWidth={2} strokeDasharray="8,6" opacity={0.3} />
                        )}
                        <circle cx={node.x} cy={node.y} r={r} fill={node.color} />
                        {node.label.map((line, i) => (
                          <text
                            key={i}
                            x={node.x}
                            y={node.y + (isCenter ? -4 : -4) + i * 14}
                            textAnchor="middle"
                            fill="white"
                            fontSize={isCenter ? 13 : 11}
                            fontWeight={isCenter ? 700 : 600}
                            fontFamily="Inter, system-ui, sans-serif"
                          >
                            {line}
                          </text>
                        ))}
                      </g>
                    )
                  })}

                  {edges.map((id) => {
                    const node = audienceNodes.find((n) => n.id === id)!
                    const lineLen = Math.sqrt((node.x - conv.x) ** 2 + (node.y - conv.y) ** 2)
                    const nx = (conv.x - node.x) / lineLen
                    const ny = (conv.y - node.y) / lineLen
                    const ax = conv.x - nx * 52
                    const ay = conv.y - ny * 52
                    return (
                      <polygon
                        key={`arrow-${id}`}
                        points={`${ax},${ay} ${ax - nx * 8 + ny * 4},${ay - ny * 8 - nx * 4} ${ax - nx * 8 - ny * 4},${ay - ny * 8 + nx * 4}`}
                        fill={node.color}
                        opacity={0.5}
                      />
                    )
                  })}
                </svg>
              </div>
              <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                  {legendItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs sm:text-sm text-slate-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
