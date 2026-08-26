export interface AutomationRule {
  id: string
  title: string
  description: string
  icon: string
  color: string
  frequency: string
  triggers: string[]
  actions: string[]
}

export const AUTOMATION_RULES: AutomationRule[] = [
  {
    id: 'budget-rebalance',
    title: 'Hourly budget rebalancing',
    description: 'AI shifts spend toward highest-ROAS campaigns across channels. Respects daily caps, pacing targets, and brand safety lists.',
    icon: 'Bot',
    color: 'meta-blue',
    frequency: 'Every hour',
    triggers: ['ROAS delta > 15%', 'Pacing < 90%', 'New winner detected'],
    actions: ['Increase budget', 'Decrease budget', 'Pause campaign'],
  },
  {
    id: 'creative-fatigue',
    title: 'Creative fatigue detection',
    description: 'Monitors frequency, CTR decay, and conversion rate drops. Auto-pauses fatigued assets and requests fresh creative from your team.',
    icon: 'AlertTriangle',
    color: 'meta-orange',
    frequency: 'Every 4 hours',
    triggers: ['Frequency > 3.5', 'CTR drop > 30%', 'CVR drop > 25%'],
    actions: ['Pause creative', 'Alert creative team', 'Rotate to backup'],
  },
  {
    id: 'audience-expansion',
    title: 'Winning audience expansion',
    description: 'High-performing segments automatically expand to lookalikes. Broadening controlled by similarity thresholds you set.',
    icon: 'TrendingUp',
    color: 'meta-cyan',
    frequency: 'Daily',
    triggers: ['ROAS > 4x', 'Volume > 50 conv.', 'Stability > 7 days'],
    actions: ['Create 1% LAL', 'Create 3% LAL', 'Increase bid cap'],
  },
  {
    id: 'brand-safety',
    title: 'Brand safety guardrails',
    description: 'Placement exclusions, topic blocks, and publisher allowlists enforced across all channels. Violations auto-remediated.',
    icon: 'Shield',
    color: 'meta-violet',
    frequency: 'Real-time',
    triggers: ['Blocked placement', 'Sensitive topic', 'Unapproved publisher'],
    actions: ['Exclude placement', 'Add to blocklist', 'Alert compliance'],
  },
  {
    id: 'performance-alerts',
    title: 'Anomaly detection alerts',
    description: 'Statistical outliers in spend, ROAS, or volume trigger Slack/email alerts. False positive rate < 2% via ML filtering.',
    icon: 'Zap',
    color: 'meta-pink',
    frequency: 'Every 15 min',
    triggers: ['Spend spike > 3σ', 'ROAS drop > 2σ', 'Volume anomaly'],
    actions: ['Send alert', 'Auto-pause (opt-in)', 'Create incident'],
  },
  {
    id: 'seasonal-adjustment',
    title: 'Seasonal pace adjustment',
    description: 'Learns your seasonal patterns. Pre-emptively adjusts bids and budgets before holidays, sales events, and industry cycles.',
    icon: 'RefreshCw',
    color: 'meta-magenta',
    frequency: 'Weekly forecast',
    triggers: ['Upcoming holiday', 'Historical pattern match', 'Competitor activity'],
    actions: ['Increase bid multiplier', 'Pre-load budgets', 'Expand audiences'],
  },
]