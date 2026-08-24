export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: 'Create', description: 'Build your campaign with structured budgets, placements and schedules.' },
  { step: '02', title: 'Target', description: 'Reach the right audience using intent, interest and behavior signals.' },
  { step: '03', title: 'Launch', description: 'Put your campaign into motion across every connected channel.' },
  { step: '04', title: 'Measure', description: 'Understand performance in real time, from impressions to revenue.' },
  { step: '05', title: 'Optimize', description: 'Improve results continuously with automated, signal-driven tuning.' },
]
