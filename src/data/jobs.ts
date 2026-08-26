import type { Job } from '@/types'

export const CAREER_STATS = [
  { value: '85+', label: 'Teammates across product, engineering and growth' },
  { value: '24', label: 'Open roles across five teams' },
  { value: '97%', label: 'Of teammates say they do meaningful work here' },
]

export const JOBS: Job[] = [
  {
    id: 'sfe-01',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (India)',
    model: 'Remote',
    type: 'Full Time',
    summary: 'Build the dashboards and visualizations marketers live in every day.',
  },
  {
    id: 'bke-02',
    title: 'Backend Engineer, Real-time Bidding',
    department: 'Engineering',
    location: 'Bengaluru, India',
    model: 'Hybrid',
    type: 'Full Time',
    summary: 'Design low-latency services that evaluate millions of auction signals.',
  },
  {
    id: 'dle-03',
    title: 'Data Engineer, Analytics Pipeline',
    department: 'Engineering',
    location: 'Remote (Global)',
    model: 'Remote',
    type: 'Full Time',
    summary: 'Own the pipelines that turn raw ad events into trusted insight.',
  },
  {
    id: 'des-04',
    title: 'Product Designer',
    department: 'Design',
    location: 'Mumbai, India',
    model: 'Hybrid',
    type: 'Full Time',
    summary: 'Make complex advertising workflows feel effortless and fast.',
  },
  {
    id: 'gmm-05',
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'Remote (India)',
    model: 'Remote',
    type: 'Full Time',
    summary: 'Run the playbooks you will build for thousands of customers.',
  },
  {
    id: 'cmm-06',
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'Remote (Global)',
    model: 'Remote',
    type: 'Full Time',
    summary: 'Turn performance insights into stories marketers can act on.',
  },
  {
    id: 'pdm-07',
    title: 'Senior Product Manager, Automation',
    department: 'Product',
    location: 'Bengaluru, India',
    model: 'Hybrid',
    type: 'Full Time',
    summary: 'Shape how campaigns optimize themselves without losing human control.',
  },
  {
    id: 'ops-08',
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'Delhi NCR, India',
    model: 'On-site',
    type: 'Full Time',
    summary: 'Guide enterprise advertisers from first campaign to best quarter ever.',
  },
]

export const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Marketing', 'Product', 'Operations'] as const

export const PERKS = [
  'Competitive salary with performance bonuses',
  'Meaningful equity from day one',
  'Remote-first culture with flexible hours',
  'Annual learning & conference budget',
  'Comprehensive health coverage for family',
  'Latest hardware and co-working allowance',
]
