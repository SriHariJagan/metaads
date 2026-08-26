import { Reveal, Counter, Container } from '@/components/common'
import { METRICS } from '@/data/metrics'

const UPTIME_NOTE = { value: '24/7', label: 'Campaign intelligence', detail: 'Automated monitoring, day and night.' }

export function TrustMetrics() {
  return (
    <section className="border-b border-slate-100 bg-white py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.id} variant="up" delay={i * 80} className="text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight text-meta-navy sm:text-4xl">
                <Counter end={metric.value} decimals={metric.decimals ?? 0} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-500">{metric.label}</p>
            </Reveal>
          ))}
          <Reveal variant="up" delay={METRICS.length * 80} className="text-center sm:text-left">
            <p className="text-3xl font-bold tracking-tight text-meta-navy sm:text-4xl">{UPTIME_NOTE.value}</p>
            <p className="mt-1.5 text-sm font-medium text-slate-500">{UPTIME_NOTE.label}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
