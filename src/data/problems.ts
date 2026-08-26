export interface Problem {
  id: string
  title: string
  description: string
  impact: string
  icon: 'fragmented' | 'unclear' | 'manual' | 'wasted'
}

export const PROBLEMS: Problem[] = [
  {
    id: 'fragmented',
    title: 'Fragmented campaigns across platforms',
    description: 'Meta, Google, TikTok, LinkedIn — each with its own dashboard, naming conventions, and reporting cadence. You spend more time stitching CSVs than optimizing creative.',
    impact: '6–10 hrs/week lost to manual consolidation',
    icon: 'fragmented',
  },
  {
    id: 'unclear',
    title: 'No single source of truth for performance',
    description: 'Attribution models differ by channel. Last-click, data-driven, view-through — none agree. Budget decisions become political, not analytical.',
    impact: '23% avg. budget misallocation per quarter',
    icon: 'unclear',
  },
  {
    id: 'manual',
    title: 'Manual optimization that can\'t keep up',
    description: 'Rules-based automations break when seasonality shifts. Creative fatigue goes unnoticed for days. You\'re always reacting, never predicting.',
    impact: '15–30% ROAS left on the table',
    icon: 'manual',
  },
  {
    id: 'wasted',
    title: 'Wasted spend on audiences that don\'t convert',
    description: 'Broad targeting burns budget before lookalikes mature. Exclusion lists are stale. Frequency caps are ignored. Every dollar of waste is a dollar not spent on growth.',
    impact: '18–40% of spend on non-converting impressions',
    icon: 'wasted',
  },
]