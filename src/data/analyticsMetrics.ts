import { Eye, MousePointerClick, Percent, Target, Coins, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AnalyticsMetric {
  icon: LucideIcon
  label: string
  value: string
  trend: string
}

export const ANALYTICS_METRICS: AnalyticsMetric[] = [
  { icon: Eye, label: 'Impressions', value: '1.84M', trend: '+12.4%' },
  { icon: MousePointerClick, label: 'Clicks', value: '84.2K', trend: '+8.1%' },
  { icon: Percent, label: 'CTR', value: '4.58%', trend: '+0.6%' },
  { icon: Target, label: 'Conversions', value: '12,842', trend: '+15.2%' },
  { icon: Coins, label: 'CPA', value: '₹65.60', trend: '-9.3%' },
  { icon: TrendingUp, label: 'ROAS', value: '4.82x', trend: '+0.4x' },
]
