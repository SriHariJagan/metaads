import { Reveal, SectionHeading } from '@/components/common'
import { ANALYTICS_METRICS } from '@/data/analytics'

const cardColors = ['#0066FF', '#00B8FF', '#8B5CF6', '#D946EF', '#EC4899', '#F97316']

export function AnalyticsSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-slate-50 overflow-hidden" aria-labelledby="analytics-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="analytics-heading"
            eyebrow="Analytics"
            title="See what's working. Fix what isn't."
            description="Granular, cross-channel analytics that answer the only question that matters: where should the next dollar go?"
            align="center"
          />
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ANALYTICS_METRICS.map((metric, index) => {
                const hex = cardColors[index % cardColors.length]
                const Icon = metric.icon
                return (
                  <article
                    key={metric.id}
                    className="group relative rounded-2xl bg-white border border-slate-200 p-5 transition-all duration-500 hover:shadow-lg overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${hex}12` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: hex }} aria-hidden="true" />
                      </div>
                      <div className="w-20 h-8 opacity-40 group-hover:opacity-70 transition-opacity">
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                          <path
                            d={metric.sparkline}
                            fill="none"
                            stroke={hex}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-semibold text-meta-navy text-sm">{metric.label}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{metric.description}</p>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: hex }}
                      aria-hidden="true"
                    />
                  </article>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
