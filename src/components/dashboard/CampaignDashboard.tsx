import { TrendingUp, TrendingDown } from 'lucide-react'
import {
  DASHBOARD_OVERVIEW,
  DASHBOARD_TREND,
  DASHBOARD_CHANNEL_SPEND,
  CAMPAIGN_ROWS,
  AUDIENCE_BREAKDOWN,
  type CampaignStatus,
} from '@/data/dashboard'
import { MiniLineChart } from './MiniLineChart'
import { MiniBarChart } from './MiniBarChart'

const STATUS_STYLES: Record<CampaignStatus, string> = {
  Active: 'bg-meta-blue/15 text-meta-blue',
  Scaling: 'bg-emerald-400/15 text-emerald-600',
  Paused: 'bg-slate-200 text-slate-500',
}

/** Large "Campaign Overview" dashboard mockup — a visual product mockup, not a live backend. */
export function CampaignDashboard() {
  const donutStops = (() => {
    let acc = 0
    return AUDIENCE_BREAKDOWN.map((seg) => {
      const start = acc
      acc += seg.share
      return { ...seg, start, end: acc }
    })
  })()
  const circumference = 2 * Math.PI * 42

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-meta-navy">Campaign Overview</p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">Last 30 days</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DASHBOARD_OVERVIEW.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{item.label}</p>
            <p className="mt-1 text-xl font-bold text-meta-navy sm:text-2xl">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <div className="rounded-xl border border-slate-200 p-4 lg:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-meta-navy">Revenue trend</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> +22.4%
            </span>
          </div>
          <MiniLineChart points={DASHBOARD_TREND} strokeId="dash-trend" className="mt-3 h-28 w-full" />
        </div>

        <div className="rounded-xl border border-slate-200 p-4 lg:col-span-2">
          <p className="text-sm font-semibold text-meta-navy">Spend by channel</p>
          <MiniBarChart values={DASHBOARD_CHANNEL_SPEND} className="mt-4 h-24 w-full" />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <div className="overflow-hidden rounded-xl border border-slate-200 lg:col-span-3">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Campaign</th>
                <th className="px-4 py-3 font-medium">Spend</th>
                <th className="px-4 py-3 font-medium">ROAS</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CAMPAIGN_ROWS.map((row) => (
                <tr key={row.name}>
                  <td className="px-4 py-3">
                    <p className="font-medium text-meta-navy">{row.name}</p>
                    <p className="text-xs text-slate-500">{row.channel}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.spend}</td>
                  <td className="px-4 py-3 font-semibold text-meta-navy">
                    <span className="inline-flex items-center gap-1">
                      {Number(row.roas.replace('x', '')) >= 4 ? (
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5 text-meta-red" aria-hidden="true" />
                      )}
                      {row.roas}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4 lg:col-span-2">
          <p className="self-start text-sm font-semibold text-meta-navy">Audience breakdown</p>
          <svg viewBox="0 0 100 100" className="mt-3 h-32 w-32 -rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="12" />
            {donutStops.map((seg) => (
              <circle
                key={seg.label}
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={seg.color}
                strokeWidth="12"
                strokeDasharray={`${(circumference * seg.share) / 100} ${circumference}`}
                strokeDashoffset={-((circumference * seg.start) / 100)}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <ul className="mt-3 w-full space-y-1.5">
            {AUDIENCE_BREAKDOWN.map((seg) => (
              <li key={seg.label} className="flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
                  {seg.label}
                </span>
                <span className="font-semibold text-meta-navy">{seg.share}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
