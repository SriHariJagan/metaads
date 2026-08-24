export interface CompanyValue {
  id: string
  title: string
  description: string
  iconPath: string
}

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'accountability',
    title: 'Accountability over activity',
    description: 'We measure what matters: incremental revenue, not vanity metrics. Every feature ships with a hypothesis and a holdout test.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 'compounding',
    title: 'Compounding > linear',
    description: 'We build systems that improve themselves. Automation that learns. Creative that iterates. Audiences that refine. The platform gets better while you sleep.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    id: 'transparency',
    title: 'Radical transparency',
    description: 'No black boxes. Every optimization decision is explainable. Every dollar traced. Customers own their data and their models.',
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7z',
  },
  {
    id: 'customer-obsession',
    title: 'Customer obsession, not competition',
    description: 'We don\'t build features because competitors have them. We build because customers have problems that compound.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]