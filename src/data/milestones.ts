export interface Milestone {
  year: string
  title: string
  description: string
  metric?: string
}

export const MILESTONES: Milestone[] = [
  {
    year: '2021',
    title: 'Founded in a Bengaluru garage',
    description: 'Priya and Arjun quit their FAANG jobs to build the platform they wished existed. First 10 customers from YC network.',
    metric: '$0 → $100k ARR in 6 months',
  },
  {
    year: '2022',
    title: 'Series A & product-market fit',
    description: 'Launched cross-channel automation. First enterprise customer (Lumenkart) hits 4.2x ROAS. Team grows to 15.',
    metric: '200% YoY revenue growth',
  },
  {
    year: '2023',
    title: 'Incrementality engine ships',
    description: 'Geo-lift testing automated. Creative intelligence module launches. Series B led by Sequoia. 100+ customers.',
    metric: '4.8x avg blended ROAS',
  },
  {
    year: '2024',
    title: 'Platform maturity & scale',
    description: '200+ customers. 50-person team across 3 continents. Private cloud option for enterprise. 99.9% uptime SLA.',
    metric: '$10M+ ARR • Profitable',
  },
]