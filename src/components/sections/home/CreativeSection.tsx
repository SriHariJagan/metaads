import { Reveal, SectionHeading } from '@/components/common'
import { Sparkles, Brain, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Variant Generation',
    desc: 'Auto-generating top-performing ad variants from your existing assets.',
    icon: Sparkles,
    color: '#00B8FF',
    stat: '340%',
    statLabel: 'more variants tested',
  },
  {
    title: 'AI Optimization',
    desc: 'AI-powered optimization of creative performance in real-time.',
    icon: Brain,
    color: '#8B5CF6',
    stat: '2.4x',
    statLabel: 'faster iteration',
  },
  {
    title: 'Real-time Tracking',
    desc: 'Monitor creative performance with real-time analytics and insights.',
    icon: BarChart3,
    color: '#D946EF',
    stat: '<1hr',
    statLabel: 'to detect fatigue',
  },
]

export function CreativeSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="creative-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #00B8FF 0%, transparent 70%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="creative-heading"
            eyebrow="Creative intelligence"
            title="Variants that win. Assets that scale."
            description="Auto-generating top-performing ad variants from your existing assets. AI-powered optimization. Real-time performance tracking."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal variant="up" delay={200}>
            <div className="grid grid-cols-1 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={feature.title}
                    className={`group flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="sm:w-2/3 p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${feature.color}12` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: feature.color }} aria-hidden="true" />
                        </div>
                        <h4 className="font-bold text-meta-navy">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                    <div className={`sm:w-1/3 flex items-center justify-center p-6 ${isEven ? 'bg-gradient-to-br from-slate-50 to-white' : 'bg-gradient-to-bl from-slate-50 to-white'}`}>
                      <div className="text-center">
                        <p className="text-4xl sm:text-5xl font-bold" style={{ color: feature.color }}>{feature.stat}</p>
                        <p className="text-xs text-slate-400 mt-1">{feature.statLabel}</p>
                      </div>
                    </div>
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
