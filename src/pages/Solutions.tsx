import { useState } from 'react'
import { Reveal, SectionHeading } from '@/components/common'
import { Button } from '@/components/ui/Button'
import { SOLUTIONS } from '@/data/solutions'
import { SOLUTION_DETAILS } from '@/data/solutionDetails'
import * as LucideIcons from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  ShoppingBag: LucideIcons.ShoppingBag,
  Users: LucideIcons.Users,
  Smartphone: LucideIcons.Smartphone,
  Store: LucideIcons.Store,
  Tv: LucideIcons.Tv,
  MapPin: LucideIcons.MapPin,
  Briefcase: LucideIcons.Briefcase,
  Shield: LucideIcons.Shield,
}

const COLOR_HEX: Record<string, string> = {
  'meta-blue': '#0066FF',
  'meta-violet': '#8B5CF6',
  'meta-cyan': '#00B8FF',
  'meta-orange': '#F97316',
  'meta-magenta': '#D946EF',
  'meta-pink': '#EC4899',
  'meta-navy': '#000E41',
  'meta-purple': '#7C3AED',
  'meta-red': '#EF4444',
  'meta-amber': '#F59E0B',
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function SolutionsHero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-meta-navy-950" aria-labelledby="solutions-hero-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[600px] w-[700px] opacity-20" style={{ background: 'radial-gradient(ellipse at center, #0066FF 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[600px] opacity-15" style={{ background: 'radial-gradient(ellipse at center, #8B5CF6 0%, transparent 60%)' }} />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 60%)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 h-full w-full rounded-full bg-meta-cyan opacity-75 motion-safe:animate-ping" />
                <span className="relative h-full w-full rounded-full bg-meta-cyan" />
              </span>
              <span className="text-xs font-medium text-meta-cyan">Eight specialized solutions</span>
            </span>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h1 id="solutions-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Solutions built for how you{' '}
              <span className="text-brand-gradient">advertise</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mt-5 text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
              Each solves a distinct growth challenge. All run on the same unified platform with shared data, attribution, and automation.
            </p>
          </Reveal>

          <Reveal variant="up" delay={300}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-xl mx-auto">
              {[
                { value: '8', label: 'Solutions' },
                { value: '4.8x', label: 'Avg. ROAS' },
                { value: '<48h', label: 'Setup Time' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="brand" to="/contact" className="w-full sm:w-auto text-sm">
                Talk to an expert
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="light-outline" to="#solutions-grid" className="w-full sm:w-auto text-sm">
                View all solutions
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="py-10 sm:py-14 lg:py-18 bg-white" aria-labelledby="solutions-grid-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="solutions-grid-heading"
            eyebrow="All solutions"
            title="Find your fit"
            description="Every solution includes unified dashboard, cross-channel attribution, and autonomous optimization."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {SOLUTIONS.map((solution, index) => {
              const hex = COLOR_HEX[solution.color] || '#0066FF'
              const CardIcon = iconMap[solution.icon]
              return (
                <article
                  key={solution.id}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${hexToRgba(hex, 0.03)}, transparent)` }} aria-hidden="true" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-4">
                      <div
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: hexToRgba(hex, 0.1) }}
                      >
                        <CardIcon className="h-7 w-7" color={hex} aria-hidden="true" />
                      </div>
                    </div>
                    <span
                      className="inline-flex self-start px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3"
                      style={{ backgroundColor: hexToRgba(hex, 0.08), color: hex }}
                    >
                      {solution.category}
                    </span>
                    <h3 className="text-lg font-bold text-meta-navy mb-2">{solution.title}</h3>
                    <p className="text-sm text-slate-500 mb-4 flex-1 leading-relaxed">{solution.shortDescription}</p>
                    <ul className="space-y-2 mb-5" role="list">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: hex }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100">
                      <Button variant="ghost" className="w-full text-sm" to={`/solutions/${solution.id}`}>
                        Explore
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SolutionShowcase() {
  const [activeSolution, setActiveSolution] = useState(0)
  const solution = SOLUTIONS[activeSolution]
  const detail = SOLUTION_DETAILS[solution.id]
  const hex = COLOR_HEX[solution.color] || '#0066FF'
  const ShowcaseIcon = iconMap[solution.icon]

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-slate-50" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="showcase-heading"
            eyebrow="Deep dive"
            title="Explore each solution"
            description="Select a solution to see capabilities, workflow, and expected outcomes."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {SOLUTIONS.map((s, i) => {
                const sHex = COLOR_HEX[s.color] || '#0066FF'
                const isActive = i === activeSolution
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSolution(i)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? sHex : 'transparent',
                      color: isActive ? '#fff' : hexToRgba(sHex, 0.8),
                      border: `1px solid ${isActive ? sHex : hexToRgba(sHex, 0.2)}`,
                    }}
                  >
                    {s.title}
                  </button>
                )
              })}
            </div>

            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative p-8 sm:p-12" style={{ background: `linear-gradient(135deg, ${hexToRgba(hex, 0.05)}, ${hexToRgba(hex, 0.02)})` }}>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6" style={{ backgroundColor: hexToRgba(hex, 0.15) }}>
                    <ShowcaseIcon className="h-8 w-8" color={hex} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-meta-navy mb-3">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{solution.description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    {detail?.keyMetrics.map((metric, i) => (
                      <div key={i} className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                        <p className="text-xl sm:text-2xl font-bold" style={{ color: hex }}>{metric.value}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Capabilities</h4>
                  <div className="space-y-3">
                    {detail?.capabilities.slice(0, 5).map((cap, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 h-5 w-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: hexToRgba(hex, 0.1) }}>
                          <svg className="h-3 w-3" fill="none" stroke={hex} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate-500">Avg. outcome</span>
                      <span className="text-lg font-bold" style={{ color: hex }}>{detail?.avgOutcome}</span>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-sm text-slate-500">Setup time</span>
                      <span className="font-semibold text-meta-navy">{detail?.setupTime}</span>
                    </div>
                    <Button variant="brand" to="/contact" className="w-full">
                      Get started
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="workflow-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="workflow-heading"
            eyebrow="How it works"
            title="From setup to scale in days"
            description="Every solution follows a proven workflow. Here's how each one gets you from zero to optimized."
            align="center"
          />
        </Reveal>

        <div className="mt-14 max-w-5xl mx-auto">
          {SOLUTIONS.slice(0, 4).map((solution, idx) => {
            const detail = SOLUTION_DETAILS[solution.id]
            const hex = COLOR_HEX[solution.color] || '#0066FF'
            const isEven = idx % 2 === 0

            return (
              <Reveal key={solution.id} variant="up" delay={idx * 100}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 last:mb-0`}>
                  <div className="lg:w-1/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: hexToRgba(hex, 0.1) }}>
                        <span className="text-lg font-bold" style={{ color: hex }}>{idx + 1}</span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: hex }}>{solution.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-meta-navy mb-2">{solution.title}</h3>
                    <p className="text-slate-500 text-sm">{solution.shortDescription}</p>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                      <div className="space-y-4">
                        {detail?.workflow.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-start gap-4">
                            <div className="relative flex flex-col items-center">
                              <div
                                className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                style={{ backgroundColor: hex }}
                              >
                                {stepIdx + 1}
                              </div>
                              {stepIdx < (detail?.workflow.length || 0) - 1 && (
                                <div className="w-0.5 h-6 mt-1" style={{ backgroundColor: hexToRgba(hex, 0.2) }} />
                              )}
                            </div>
                            <div className="pt-1">
                              <p className="text-sm font-medium text-meta-navy">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-8 text-center">
            <Button variant="secondary" to="#solutions-grid">
              View all 8 workflows
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function IntegrationsSection() {
  const allIntegrations = [...new Set(Object.values(SOLUTION_DETAILS).flatMap((d) => d.integrations))]

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-meta-navy-950 relative overflow-hidden" aria-labelledby="integrations-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] opacity-10" style={{ background: 'radial-gradient(circle, #00B8FF 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] opacity-10" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="integrations-heading"
            eyebrow="Integrations"
            title="Connects to everything you use"
            description="50+ native integrations. Every solution works with your existing stack from day one."
            align="center"
            dark
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allIntegrations.map((integration, i) => (
              <div
                key={integration}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 hover:border-white/20"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {integration}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Native integrations', desc: 'Connect to platforms you already use' },
              { value: '<5min', label: 'Setup per integration', desc: 'One-click OAuth or API key setup' },
              { value: 'Real-time', label: 'Data sync', desc: 'Bidirectional data flow in seconds' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-white/80 mt-2">{stat.label}</p>
                <p className="text-xs text-white/40 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-slate-50" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="comparison-heading"
            eyebrow="Compare"
            title="Side by side"
            description="See how each solution stacks up across key dimensions."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 overflow-x-auto max-w-6xl mx-auto">
            <div className="min-w-[800px]">
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
                <div className="grid grid-cols-9 gap-px bg-slate-200">
                  <div className="col-span-1 bg-slate-50 p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Solution</span>
                  </div>
                  {SOLUTIONS.map((s) => {
                    const hex = COLOR_HEX[s.color] || '#0066FF'
                    return (
                      <div key={s.id} className="bg-slate-50 p-3 text-center">
                        <div className="h-8 w-8 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: hexToRgba(hex, 0.1) }}>
                          {(() => { const I = iconMap[s.icon]; return <I className="h-4 w-4" color={hex} /> })()}
                        </div>
                        <span className="text-[10px] font-medium text-slate-600 leading-tight block">{s.title.split(' ')[0]}</span>
                      </div>
                    )
                  })}
                </div>

                {[
                  { label: 'Setup Time', getValue: (id: string) => SOLUTION_DETAILS[id]?.setupTime || '—' },
                  { label: 'Key Metric', getValue: (id: string) => SOLUTION_DETAILS[id]?.keyMetrics[0]?.value || '—' },
                  { label: 'Integrations', getValue: (id: string) => `${SOLUTION_DETAILS[id]?.integrations.length || 0}` },
                ].map((row, rowIdx) => (
                  <div key={row.label} className={`grid grid-cols-9 gap-px ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="col-span-1 bg-white p-4 flex items-center">
                      <span className="text-xs font-medium text-slate-600">{row.label}</span>
                    </div>
                    {SOLUTIONS.map((s) => (
                      <div key={s.id} className="bg-white p-3 flex items-center justify-center">
                        <span className="text-xs font-semibold text-meta-navy text-center">{row.getValue(s.id)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function UseCasesSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white" aria-labelledby="usecases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="usecases-heading"
            eyebrow="Use cases"
            title="Who each solution is for"
            description="Find your match based on business model, team size, and growth stage."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {SOLUTIONS.map((solution) => {
              const detail = SOLUTION_DETAILS[solution.id]
              const hex = COLOR_HEX[solution.color] || '#0066FF'
              const UseCaseIcon = iconMap[solution.icon]

              return (
                <div
                  key={solution.id}
                  className="group relative rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] rounded-bl-full transition-opacity duration-300 group-hover:opacity-[0.08]" style={{ backgroundColor: hex }} aria-hidden="true" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: hexToRgba(hex, 0.1) }}>
                      <UseCaseIcon className="h-6 w-6" color={hex} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-meta-navy">{solution.title}</h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{detail?.idealFor}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: hexToRgba(hex, 0.08), color: hex }}>
                          {solution.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{detail?.setupTime} setup</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function OutcomesSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="outcomes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="outcomes-heading"
            eyebrow="Outcomes"
            title="What you can expect"
            description="Average results across all solutions. Your results will vary based on spend, vertical, and implementation."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '+81%', label: 'ROAS improvement', desc: 'Average lift within first 90 days', color: '#0066FF' },
              { value: '-34%', label: 'CAC reduction', desc: 'Cost per acquisition decrease', color: '#00B8FF' },
              { value: '10x', label: 'Account efficiency', desc: 'Accounts managed per strategist', color: '#8B5CF6' },
              { value: '99.9%', label: 'Platform uptime', desc: 'Enterprise-grade reliability', color: '#D946EF' },
            ].map((stat, i) => (
              <div key={i} className="relative rounded-2xl bg-white border border-slate-200 p-6 text-center hover:shadow-xl transition-all duration-500 group">
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: stat.color }} aria-hidden="true" />
                <p className="text-4xl sm:text-5xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-sm font-semibold text-meta-navy mt-2">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-meta-navy-950 relative overflow-hidden" aria-labelledby="solutions-cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-meta-blue/20 via-transparent to-meta-magenta/15" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-meta-cyan">Free consultation</span>
            </span>
            <h2 id="solutions-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Not sure which solution fits?
            </h2>
            <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              Our solutions engineers will audit your current stack and recommend the right starting point — no commitment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="brand" to="/contact">
                Get a free audit
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button size="lg" variant="light-outline" to="/solutions">
                Compare all solutions
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/30">No credit card required • 14-day trial • Cancel anytime</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionShowcase />
      <WorkflowSection />
      <IntegrationsSection />
      <ComparisonSection />
      <UseCasesSection />
      <OutcomesSection />
      <CTASection />
    </>
  )
}
