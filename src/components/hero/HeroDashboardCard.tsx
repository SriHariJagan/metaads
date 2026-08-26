import { ArrowUpRight, Radar, Sparkles } from 'lucide-react'
import { HERO_METRICS, HERO_TREND } from '@/data/dashboard'
import { MiniLineChart } from '@/components/dashboard/MiniLineChart'

/**
 * Custom advertising-tech hero visual: a floating "Campaign Performance"
 * dashboard card plus two smaller satellite cards. Pure React/SVG/CSS —
 * no external image assets.
 */
export function HeroDashboardCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">Campaign Performance</p>
            <p className="mt-1 text-sm font-semibold text-white">Festive Launch — All Channels</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{metric.label}</p>
              <p className="mt-1 text-lg font-bold text-white sm:text-xl">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-slate-400">Conversions trend</p>
            <p className="text-xs font-semibold text-meta-cyan">+18.6%</p>
          </div>
          <MiniLineChart points={HERO_TREND} strokeId="hero-trend" className="mt-2 h-16 w-full" />
        </div>
      </div>

      <div className="absolute -left-6 -top-6 hidden w-44 rotate-[-6deg] rounded-xl border border-white/10 bg-white/[0.08] p-3.5 shadow-xl shadow-black/30 backdrop-blur-xl animate-float sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient">
            <Radar className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </span>
          <p className="text-xs font-semibold text-white">Audience match</p>
        </div>
        <p className="mt-2 text-2xl font-bold text-white">92%</p>
        <p className="text-[11px] text-slate-400">High-intent segment</p>
      </div>

      <div className="absolute -bottom-8 -right-4 hidden w-48 rotate-[5deg] rounded-xl border border-white/10 bg-white/[0.08] p-3.5 shadow-xl shadow-black/30 backdrop-blur-xl animate-float-slow sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient">
            <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </span>
          <p className="text-xs font-semibold text-white">Auto-optimized</p>
        </div>
        <p className="mt-2 text-[13px] leading-snug text-slate-300">Budget shifted to top-performing ad set</p>
      </div>
    </div>
  )
}
