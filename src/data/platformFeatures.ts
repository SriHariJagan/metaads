export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export const PLATFORM_FEATURES: Feature[] = [
  {
    id: 'unified-dashboard',
    title: 'Unified cross-channel dashboard',
    description: 'One view across Meta, Google, TikTok, LinkedIn, and programmatic. Normalized metrics, shared filters, real-time sync.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'smart-attribution',
    title: 'Data-driven attribution modeling',
    description: 'Algorithmic credit assignment across touchpoints. Compare last-click, linear, time-decay, and custom models side by side.',
    icon: 'GitBranch',
  },
  {
    id: 'auto-optimization',
    title: 'Autonomous budget optimization',
    description: 'AI shifts spend hourly toward highest-margin combinations. Guardrails keep brand safety and pacing in your control.',
    icon: 'TrendingUp',
  },
  {
    id: 'creative-intelligence',
    title: 'Creative performance intelligence',
    description: 'Frame-level video analysis, hook retention curves, asset-level ROAS. Know exactly which creative elements drive action.',
    icon: 'Image',
  },
  {
    id: 'audience-builder',
    title: 'Predictive audience builder',
    description: 'Seed lists expand into high-propensity segments using conversion patterns, not just demographics. Refreshes daily.',
    icon: 'Users',
  },
  {
    id: 'automated-reporting',
    title: 'Automated executive reporting',
    description: 'Scheduled, branded reports delivered to Slack, email, or Notion. Narrative summaries written by LLM, verified by you.',
    icon: 'FileText',
  },
  {
    id: 'incrementality-testing',
    title: 'Built-in incrementality testing',
    description: 'Geo-lift and holdout experiments run automatically. Statistical significance calculated. No data science degree required.',
    icon: 'FlaskConical',
  },
]