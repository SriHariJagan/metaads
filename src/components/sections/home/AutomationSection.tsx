import { useState } from 'react'
import { Reveal, SectionHeading } from '@/components/common'
import { AUTOMATION_RULES } from '@/data/automation'

const iconColorMap: Record<string, string> = {
  'meta-blue': '#0066FF',
  'meta-orange': '#F97316',
  'meta-cyan': '#06B6D4',
  'meta-violet': '#8B5CF6',
  'meta-pink': '#EC4899',
  'meta-magenta': '#D946EF',
}

const iconMap: Record<string, JSX.Element> = {
  Bot: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  AlertTriangle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  TrendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  Shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Zap: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  RefreshCw: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
}

export function AutomationSection() {
  const [activeTab, setActiveTab] = useState(0)
  const activeRule = AUTOMATION_RULES[activeTab]
  const activeColor = iconColorMap[activeRule.color] || '#0066FF'

  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="automation-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="automation-heading"
            eyebrow="Automation"
            title="Set guardrails. Let agents execute."
            description="Hourly budget shifts. Creative fatigue detection. Audience expansion. You define the strategy; MetaAds handles the tactics — 24/7."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal variant="up" delay={200}>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 flex flex-col gap-2">
                {AUTOMATION_RULES.map((rule, index) => {
                  const color = iconColorMap[rule.color] || '#0066FF'
                  const isActive = index === activeTab
                  return (
                    <button
                      key={rule.id}
                      onClick={() => setActiveTab(index)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'border-transparent bg-white shadow-lg'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                      style={isActive ? { borderLeftColor: color, borderLeftWidth: '3px' } : {}}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: isActive ? `${color}18` : '#f1f5f9', color: isActive ? color : '#94a3b8' }}
                        >
                          {iconMap[rule.icon] || iconMap.Bot}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm font-semibold truncate ${isActive ? 'text-meta-navy' : 'text-slate-600'}`}>{rule.title}</p>
                          <p className="text-[10px] text-slate-400">{rule.frequency}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="lg:w-2/3">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${activeColor}12` }}
                    >
                      <div style={{ color: activeColor }}>{iconMap[activeRule.icon] || iconMap.Bot}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-meta-navy">{activeRule.title}</h3>
                      <p className="text-xs text-slate-400">{activeRule.frequency}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{activeRule.description}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Triggers</p>
                      <div className="flex flex-wrap gap-2">
                        {activeRule.triggers.map((trigger) => (
                          <span key={trigger} className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                            {trigger}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Actions</p>
                      <div className="flex flex-wrap gap-2">
                        {activeRule.actions.map((action) => (
                          <span key={action} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: `${activeColor}12`, color: activeColor }}>
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
