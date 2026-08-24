export interface Solution {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: string
  color: string
  gradient: string
  features: string[]
  useCase: string
  category: string
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Growth',
    shortDescription: 'Scale D2C revenue with predictable CAC',
    description: 'Connect product catalogs to dynamic creative. Auto-pause underperforming SKUs. Scale winners across Meta, Google, and TikTok Shop simultaneously.',
    icon: 'ShoppingBag',
    color: 'meta-blue',
    gradient: 'from-meta-blue to-meta-cyan',
    features: ['Dynamic product ads', 'Inventory-aware pacing', 'LTV-based bidding', 'Post-purchase upsell flows'],
    useCase: 'D2C brands scaling from $100k to $10M+ monthly spend',
    category: 'E-commerce',
  },
  {
    id: 'leadgen',
    title: 'B2B Lead Generation',
    shortDescription: 'Fill pipeline with qualified prospects at scale',
    description: 'LinkedIn + Meta funnel orchestration. Lead scoring syncs to CRM. Automated nurture sequences trigger from engagement signals.',
    icon: 'Users',
    color: 'meta-violet',
    gradient: 'from-meta-violet to-meta-purple',
    features: ['LinkedIn lead gen forms', 'CRM-integrated scoring', 'Automated nurture workflows', 'Account-based targeting'],
    useCase: 'SaaS companies reducing CPL by 35% while increasing SQL rate',
    category: 'Lead Gen',
  },
  {
    id: 'app-install',
    title: 'Mobile App Growth',
    shortDescription: 'Acquire high-LTV users across app stores',
    description: 'SKAN 4.0 + MMP unified attribution. Creative testing at scale. Bid to predicted Day 7/30 ROAS, not just install cost.',
    icon: 'Smartphone',
    color: 'meta-cyan',
    gradient: 'from-meta-cyan to-meta-blue',
    features: ['SKAN 4.0 conversion values', 'Predictive LTV bidding', 'Creative iteration loops', 'Re-engagement campaigns'],
    useCase: 'Gaming & fintech apps hitting 4.5x+ D30 ROAS',
    category: 'App Install',
  },
  {
    id: 'marketplace',
    title: 'Marketplace & Retail Media',
    shortDescription: 'Dominate Amazon, Walmart, Instacart search',
    description: 'Keyword harvesting from paid search. Share-of-voice tracking. Retail media budget pacing aligned with organic rank.',
    icon: 'Store',
    color: 'meta-orange',
    gradient: 'from-meta-orange to-meta-amber',
    features: ['Keyword bid automation', 'Share-of-voice monitoring', 'Organic rank correlation', 'Retail-ready creative templates'],
    useCase: 'Consumer brands capturing 40%+ category SOV',
    category: 'Marketplace',
  },
  {
    id: 'brand-awareness',
    title: 'Brand Awareness & Reach',
    shortDescription: 'Efficient upper-funnel that feeds the funnel',
    description: 'TV/CTV + digital reach planning. Brand lift studies automated. Frequency optimization across screens. Creative wear-out detection.',
    icon: 'Tv',
    color: 'meta-magenta',
    gradient: 'from-meta-magenta to-meta-pink',
    features: ['Cross-screen reach planning', 'Automated brand lift studies', 'Frequency cap optimization', 'Creative fatigue alerts'],
    useCase: 'Enterprise brands maximizing unique reach per dollar',
    category: 'Brand',
  },
  {
    id: 'local',
    title: 'Multi-Location & Franchise',
    shortDescription: 'Hundreds of locations. One strategy.',
    description: 'Local budget allocation by catchment performance. Google Business Profile sync. Review sentiment feeds creative rotation.',
    icon: 'MapPin',
    color: 'meta-pink',
    gradient: 'from-meta-pink to-meta-red',
    features: ['Location-level budget pacing', 'GBP review integration', 'Local creative automation', 'Franchisee self-serve portal'],
    useCase: 'Franchise networks managing 500+ locations centrally',
    category: 'Local',
  },
  {
    id: 'agency',
    title: 'Agency & Holding Company',
    shortDescription: 'Operate client portfolios at 10x efficiency',
    description: 'White-label reporting. Multi-client budget governance. Automated QA checks. Client-facing portals with controlled access.',
    icon: 'Briefcase',
    color: 'meta-navy',
    gradient: 'from-meta-navy to-meta-blue',
    features: ['White-label dashboards', 'Multi-client budget guards', 'Automated QA workflows', 'Client portal with SSO'],
    useCase: 'Agencies managing $50M+ annual ad spend across 50+ clients',
    category: 'Agency',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Custom Solutions',
    shortDescription: 'Your stack, your rules, our engine',
    description: 'Private cloud deployment. Custom ML models on your data. Dedicated solutions engineering. SLA-backed uptime.',
    icon: 'Shield',
    color: 'meta-purple',
    gradient: 'from-meta-purple to-meta-violet',
    features: ['Private cloud / VPC option', 'Custom model training', 'Dedicated solutions engineer', '99.99% SLA available'],
    useCase: 'Fortune 500 marketing orgs with strict compliance needs',
    category: 'Enterprise',
  },
]