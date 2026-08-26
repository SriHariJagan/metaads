export interface WorkflowStep {
  id: string
  number: string
  title: string
  description: string
  icon: string
  color: string
  details: string[]
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'connect',
    number: '01',
    title: 'Connect your channels',
    description: 'Link Meta, Google, TikTok, LinkedIn, and programmatic in minutes. OAuth-based, read/write permissions you control.',
    icon: 'Link2',
    color: 'meta-blue',
    details: ['One-click OAuth for all major platforms', 'Granular permission scopes', 'Automatic account structure import', 'Historical data backfill (up to 24 months)'],
  },
  {
    id: 'unify',
    number: '02',
    title: 'Unify data & attribution',
    description: 'MetaAds normalizes schemas, deduplicates conversions, and builds a cross-channel identity graph. You get one truth.',
    icon: 'GitMerge',
    color: 'meta-cyan',
    details: ['Automatic schema normalization', 'Cross-device identity resolution', 'Algorithmic attribution models', 'Custom attribution window settings'],
  },
  {
    id: 'create',
    number: '03',
    title: 'Create & launch campaigns',
    description: 'Build once, deploy everywhere. Dynamic creative assembly. Bulk editing. Version control. Approval workflows built in.',
    icon: 'PlusCircle',
    color: 'meta-violet',
    details: ['Cross-channel campaign builder', 'Dynamic creative templates', 'Bulk operations via spreadsheet', 'Role-based approval chains'],
  },
  {
    id: 'optimize',
    number: '04',
    title: 'Autonomous optimization',
    description: 'AI agents shift budgets hourly, pause fatigued creative, expand winning audiences. You set guardrails; they execute.',
    icon: 'Bot',
    color: 'meta-magenta',
    details: ['Hourly budget rebalancing', 'Creative fatigue detection', 'Audience expansion loops', 'Custom rule engine with guardrails'],
  },
  {
    id: 'measure',
    number: '05',
    title: 'Measure incrementality',
    description: 'Geo-lift tests and holdout experiments run automatically. Know true causal impact, not just attributed credit.',
    icon: 'FlaskConical',
    color: 'meta-pink',
    details: ['Automated geo-lift experiments', 'Synthetic control construction', 'Statistical significance alerts', 'Incrementality-adjusted ROAS'],
  },
]