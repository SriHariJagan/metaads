import type { Metric } from '@/types'

export const METRICS: Metric[] = [
  {
    id: 'ads-optimized',
    value: 10,
    suffix: 'M+',
    label: 'Ads optimized',
    detail: 'Creative variations tested and improved by the platform.',
  },
  {
    id: 'roas',
    value: 4.8,
    decimals: 1,
    suffix: 'x',
    label: 'Average ROAS',
    detail: 'Illustrative blended return across active customers.',
  },
  {
    id: 'uptime',
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Platform uptime',
    detail: 'Measured over the trailing twelve months.',
  },
]

export const CAREER_STATS = [
  { value: '85+', label: 'Teammates across product, engineering and growth' },
  { value: '24', label: 'Open roles across five teams' },
  { value: '97%', label: 'Of teammates say they do meaningful work here' },
]
