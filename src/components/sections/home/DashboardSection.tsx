import { Reveal, SectionHeading } from '@/components/common'

export function DashboardSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="dashboard-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at center, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="dashboard-heading"
            eyebrow="Platform preview"
            title="Campaign intelligence at a glance"
            description="Real-time unified view across every channel. No more tab-switching. No more CSV stitching."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] font-mono text-slate-400">app.metaads.io/dashboard</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 mb-6">
                {[
                  { title: 'Total Spend', value: '\u20B98,42,500', change: '+12.3%', color: '#0066FF' },
                  { title: 'Total Revenue', value: '\u20B940,56,000', change: '+18.7%', color: '#00B8FF' },
                  { title: 'Blended ROAS', value: '4.81x', change: '+0.34x', color: '#8B5CF6' },
                  { title: 'Conversions', value: '18,420', change: '+2,140', color: '#EC4899' },
                ].map((kpi) => (
                  <div key={kpi.title} className="rounded-xl border border-slate-200 p-3 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">{kpi.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-meta-navy tabular-nums mt-1">{kpi.value}</p>
                    <p className="text-[10px] sm:text-xs font-medium text-emerald-600 mt-1">
                      <svg className="inline h-2.5 w-2.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                      {kpi.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-meta-navy">Daily Performance</h4>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />ROAS</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#00B8FF]" />Revenue</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-sm bg-slate-200" />Spend</span>
                  </div>
                </div>
                <div className="relative" aria-label="Daily ROAS and spend chart">
                  <svg viewBox="0 0 700 200" className="w-full" role="img" aria-label="Chart showing ROAS trending upward with spend bars">
                    <defs>
                      <linearGradient id="homeAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line key={i} x1="50" y1={20 + i * 36} x2="670" y2={20 + i * 36} stroke="#E2E8F0" strokeWidth="1" />
                    ))}
                    {[85, 175, 265, 355, 445, 535, 625].map((x, i) => (
                      <rect key={i} x={x - 12} y={170 - [55, 68, 62, 80, 75, 85, 78][i]} width="24" height={[55, 68, 62, 80, 75, 85, 78][i]} rx="3" fill="#E2E8F0" />
                    ))}
                    <path d="M85 170 L175 135 L265 142 L355 120 L445 128 L535 108 L625 95" fill="none" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M85 135 L175 135 L265 142 L355 120 L445 128 L535 108 L625 95 L625 170 L85 170 Z" fill="url(#homeAreaFill)" />
                    {[85, 175, 265, 355, 445, 535, 625].map((x, i) => (
                      <circle key={i} cx={x} cy={[135, 142, 120, 128, 108, 95, 88][i]} r="3.5" fill="white" stroke="#0066FF" strokeWidth="2" />
                    ))}
                    {[85, 175, 265, 355, 445, 535, 625].map((x, i) => (
                      <text key={i} x={x} y="192" textAnchor="middle" fontSize="9" fill="#94A3B8">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</text>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
