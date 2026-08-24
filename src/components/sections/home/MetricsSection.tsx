import { Reveal } from '@/components/common'
import { METRICS } from '@/data/metrics'
import { TrendingUp, BarChart3, Shield } from 'lucide-react'

const metricIcons = [TrendingUp, BarChart3, Shield]
const hexColors = ['#0066FF', '#00B8FF', '#8B5CF6']

export function MetricsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="metrics-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="relative">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {METRICS.map((metric, index) => {
                  const Icon = metricIcons[index] || TrendingUp
                  const hex = hexColors[index] || '#0066FF'
                  return (
                    <div key={metric.id} className="flex items-center gap-4 p-6 sm:p-8">
                      <div
                        className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${hex}10` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: hex }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-3xl sm:text-4xl font-bold text-meta-navy tabular-nums leading-none">
                          {metric.value}{metric.suffix}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">{metric.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
