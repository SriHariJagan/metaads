import { LucideIcon } from 'lucide-react'

export interface AnalyticsMetric {
  id: string
  label: string
  description: string
  icon: LucideIcon
  color: string
  sparkline: string
}

import { TrendingUp, MousePointerClick, Users, DollarSign, RotateCcw, Target } from 'lucide-react'

export const ANALYTICS_METRICS: AnalyticsMetric[] = [
  {
    id: 'impressions',
    label: 'Impressions',
    description: 'Cross-channel reach with frequency breakdown',
    icon: Users,
    color: 'meta-blue',
    sparkline: 'M10 80 L25 65 L40 70 L55 50 L70 55 L85 40 L100 45 L115 30 L130 35 L145 20 L160 25 L175 15 L190 10',
  },
  {
    id: 'clicks',
    label: 'Clicks',
    description: 'Click-through rates by channel, creative, audience',
    icon: MousePointerClick,
    color: 'meta-cyan',
    sparkline: 'M10 75 L25 60 L40 68 L55 45 L70 52 L85 38 L100 42 L115 28 L130 32 L145 18 L160 22 L175 12 L190 8',
  },
  {
    id: 'ctr',
    label: 'CTR',
    description: 'Click-through rate trends with statistical significance',
    icon: Target,
    color: 'meta-violet',
    sparkline: 'M10 50 L25 48 L40 52 L55 45 L70 49 L85 42 L100 46 L115 40 L130 44 L145 38 L160 42 L175 36 L190 34',
  },
  {
    id: 'conversions',
    label: 'Conversions',
    description: 'Attributed and incrementality-adjusted conversions',
    icon: TrendingUp,
    color: 'meta-magenta',
    sparkline: 'M10 70 L25 55 L40 60 L55 42 L70 48 L85 35 L100 40 L115 28 L130 32 L145 20 L160 25 L175 15 L190 10',
  },
  {
    id: 'cpa',
    label: 'CPA',
    description: 'Cost per acquisition by channel, campaign, creative',
    icon: DollarSign,
    color: 'meta-pink',
    sparkline: 'M10 30 L25 42 L40 38 L55 50 L70 44 L85 55 L100 50 L115 58 L130 52 L145 62 L160 56 L175 65 L190 60',
  },
  {
    id: 'roas',
    label: 'ROAS',
    description: 'Blended and channel-level return on ad spend',
    icon: RotateCcw,
    color: 'meta-orange',
    sparkline: 'M10 60 L25 45 L40 52 L55 38 L70 44 L85 32 L100 38 L115 28 L130 32 L145 24 L160 28 L175 20 L190 18',
  },
]