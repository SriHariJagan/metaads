import { Reveal, SectionHeading } from '@/components/common'
import { PROBLEMS } from '@/data/problems'
import { AlertCircle, Target, Zap, Wallet } from 'lucide-react'

const problemIcons = {
  fragmented: AlertCircle,
  unclear: Target,
  manual: Zap,
  wasted: Wallet,
}

const hexMap: Record<string, string> = {
  meta_blue: '#0066FF',
  meta_violet: '#8B5CF6',
  meta_orange: '#F97316',
  meta_red: '#EF4444',
}

const colorKeys: Record<string, string> = {
  fragmented: 'meta_blue',
  unclear: 'meta_violet',
  manual: 'meta_orange',
  wasted: 'meta_red',
}

export function ProblemSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-slate-50 overflow-hidden" aria-labelledby="problems-heading">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="problems-heading"
            eyebrow="The problem"
            title="Why most ad stacks fall apart at scale"
            description="You didn't choose fragmented tools. They just accumulated. Here's what that costs you."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-meta-blue via-meta-violet to-meta-red hidden sm:block" aria-hidden="true" />

              <div className="space-y-6">
                {PROBLEMS.map((problem, index) => {
                  const Icon = problemIcons[problem.icon]
                  const hex = hexMap[colorKeys[problem.icon]] || '#0066FF'
                  const isEven = index % 2 === 0

                  return (
                    <div key={problem.id} className={`relative flex items-start gap-6 sm:gap-8 ${isEven ? '' : 'sm:flex-row-reverse'}`}>
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: hex }}
                        >
                          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                      </div>

                      <div className={`flex-1 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${isEven ? '' : 'sm:text-right'}`}>
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? '' : 'sm:justify-end'}`}>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: hex }}>
                            Problem {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-meta-navy mb-2">{problem.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
                        <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${isEven ? '' : 'sm:ml-auto'}`} style={{ backgroundColor: `${hex}10`, color: hex }}>
                          <Zap className="h-3 w-3" />
                          {problem.impact}
                        </div>
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
