export interface CreativeVariant {
  id: string
  name: string
  platform: string
  format: string
  color: string
  status: string
  winner: boolean
  metrics: {
    ctr: string
    cpa: string
    roas: string
    spendShare: number
  }
}

export const CREATIVE_VARIATIONS: CreativeVariant[] = [
  {
    id: 'cr-1',
    name: 'Summer Launch - UGC Montage',
    platform: 'Meta',
    format: 'Reels',
    color: 'meta-cyan',
    status: 'Scaling',
    winner: true,
    metrics: { ctr: '3.2', cpa: '₹142', roas: '5.8', spendShare: 34 },
  },
  {
    id: 'cr-2',
    name: 'Product Demo - Split Screen',
    platform: 'TikTok',
    format: 'In-feed',
    color: 'meta-blue',
    status: 'Testing',
    winner: false,
    metrics: { ctr: '2.8', cpa: '₹187', roas: '4.2', spendShare: 22 },
  },
  {
    id: 'cr-3',
    name: 'Carousel - Feature Highlights',
    platform: 'Meta',
    format: 'Feed',
    color: 'meta-violet',
    status: 'Stable',
    winner: false,
    metrics: { ctr: '1.9', cpa: '₹203', roas: '3.9', spendShare: 18 },
  },
  {
    id: 'cr-4',
    name: 'Search - Responsive Ad',
    platform: 'Google',
    format: 'RSA',
    color: 'meta-magenta',
    status: 'Optimizing',
    winner: false,
    metrics: { ctr: '4.1', cpa: '₹156', roas: '6.1', spendShare: 15 },
  },
  {
    id: 'cr-5',
    name: 'Spark Ad - Creator Collab',
    platform: 'TikTok',
    format: 'Spark',
    color: 'meta-pink',
    status: 'Learning',
    winner: false,
    metrics: { ctr: '3.7', cpa: '₹168', roas: '5.2', spendShare: 8 },
  },
  {
    id: 'cr-6',
    name: 'LinkedIn - Single Image',
    platform: 'LinkedIn',
    format: 'Feed',
    color: 'meta-navy',
    status: 'Paused',
    winner: false,
    metrics: { ctr: '0.8', cpa: '₹412', roas: '2.1', spendShare: 3 },
  },
]