import { Reveal, SectionHeading } from '@/components/common'
import { Users, Palette, Zap, Eye } from 'lucide-react'

const featureIcons = [Users, Palette, Zap, Eye]
const featureHex = ['#0066FF', '#00B8FF', '#8B5CF6', '#D946EF']

export function PlatformIntroSection() {
  const features = [
    { title: 'Predictive Audiences', desc: 'AI-built audiences from conversion patterns, refreshed daily.' },
    { title: 'Creative Optimization', desc: 'Auto-generating and testing top-performing ad variants.' },
    { title: 'Real-time Automation', desc: 'Hourly budget shifts and fatigue detection working 24/7.' },
    { title: 'Full Transparency', desc: 'Complete audit logs, rollback, and historical backtesting.' },
  ]

  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="platformintro-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="platformintro-heading"
            eyebrow="The MetaAds platform"
            title="Built for performance. Designed for scale."
            description="Enterprise-grade infrastructure with agency-level control, all from a single dashboard."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal variant="up" delay={200}>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[index] || Users
                const hex = featureHex[index] || '#0066FF'
                const isLarge = index === 0 || index === 3

                return (
                  <div
                    key={feature.title}
                    className={`group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                      isLarge ? 'col-span-2 lg:col-span-1 p-8' : 'p-6'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: hex }}
                      aria-hidden="true"
                    />
                    <div
                      className={`rounded-2xl flex items-center justify-center mb-4 ${isLarge ? 'h-16 w-16' : 'h-12 w-12'}`}
                      style={{ backgroundColor: `${hex}10` }}
                    >
                      <Icon className={isLarge ? 'h-8 w-8' : 'h-6 w-6'} style={{ color: hex }} aria-hidden="true" />
                    </div>
                    <h4 className={`font-bold text-meta-navy ${isLarge ? 'text-xl mb-3' : 'text-base mb-2'}`}>{feature.title}</h4>
                    <p className={`text-slate-500 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>{feature.desc}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
