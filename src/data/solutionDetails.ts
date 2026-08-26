export interface SolutionDetail {
  capabilities: string[]
  avgOutcome: string
  setupTime: string
  idealFor: string
  keyMetrics: { label: string; value: string }[]
  workflow: string[]
  integrations: string[]
}

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  ecommerce: {
    capabilities: [
      'Dynamic product catalog sync (Shopify, WooCommerce, BigCommerce, custom)',
      'Inventory-aware pacing — auto-pause out-of-stock SKUs',
      'LTV-based bid optimization using predicted 90-day value',
      'Post-purchase upsell & cross-sell sequence builder',
      'Creative auto-generation from product feed',
      'Multi-store management from single dashboard',
    ],
    avgOutcome: '3.2x → 5.8x ROAS',
    setupTime: '< 48 hours',
    idealFor: 'D2C brands with 50+ SKUs scaling from $100k to $10M+ monthly ad spend',
    keyMetrics: [
      { label: 'ROAS Lift', value: '+81%' },
      { label: 'CAC Reduction', value: '-34%' },
      { label: 'Revenue Growth', value: '+127%' },
    ],
    workflow: [
      'Connect product catalog via API or plugin',
      'Set budget rules and ROAS targets',
      'AI builds audiences and generates creatives',
      'Auto-optimize bids hourly based on LTV predictions',
    ],
    integrations: ['Shopify', 'WooCommerce', 'BigCommerce', 'Google Merchant Center', 'Meta Commerce'],
  },
  leadgen: {
    capabilities: [
      'LinkedIn Lead Gen Forms + Meta Instant Forms unified',
      'CRM-integrated lead scoring (HubSpot, Salesforce, Pipedrive)',
      'Automated nurture workflows triggered by engagement signals',
      'Account-based targeting with company-level attribution',
      'Lead quality feedback loop — sales disposition feeds bidding',
      'Multi-touch attribution across LinkedIn, Meta, Google',
    ],
    avgOutcome: '45% lower CPL, 2.3x SQL rate',
    setupTime: '< 1 week',
    idealFor: 'B2B SaaS & services companies with $10k+ monthly lead budget',
    keyMetrics: [
      { label: 'CPL Reduction', value: '-45%' },
      { label: 'SQL Rate', value: '2.3x' },
      { label: 'Pipeline Growth', value: '+89%' },
    ],
    workflow: [
      'Sync CRM and define lead scoring criteria',
      'Launch LinkedIn + Meta lead gen campaigns',
      'Auto-score leads based on engagement signals',
      'Sales gets qualified leads with full attribution data',
    ],
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'LinkedIn', 'Meta Lead Ads'],
  },
  'app-install': {
    capabilities: [
      'SKAN 4.0 + MMP (AppsFlyer, Adjust, Branch) unified attribution',
      'Predictive LTV bidding — optimize for Day 7/30 ROAS, not CPI',
      'Creative iteration loops with automated winner detection',
      'Re-engagement & win-back campaigns with deep linking',
      'Custom conversion value schema designer',
      'iOS 17+ & Android 14 privacy-compliant measurement',
    ],
    avgOutcome: '2.1x → 4.7x D30 ROAS',
    setupTime: '< 1 week',
    idealFor: 'Gaming, fintech, subscription apps with $50k+ monthly install spend',
    keyMetrics: [
      { label: 'D30 ROAS', value: '4.7x' },
      { label: 'CPI Reduction', value: '-38%' },
      { label: 'Retention Lift', value: '+52%' },
    ],
    workflow: [
      'Integrate MMP and configure conversion values',
      'Set up SKAN 4.0 postback schema',
      'Launch predictive LTV bidding campaigns',
      'Auto-rotate creatives based on performance signals',
    ],
    integrations: ['AppsFlyer', 'Adjust', 'Branch', 'Meta MMP', 'SKAN 4.0'],
  },
  marketplace: {
    capabilities: [
      'Keyword harvesting from paid search → retail media',
      'Share-of-voice tracking across Amazon, Walmart, Instacart',
      'Retail media budget pacing aligned with organic rank',
      'Retail-ready creative templates (Sponsored Products, Brands, Display)',
      'Profitability-aware bidding (ACoS + TACoS targets)',
      'New product launch acceleration playbooks',
    ],
    avgOutcome: '35% SOV increase, 28% lower ACoS',
    setupTime: '< 2 weeks',
    idealFor: 'Consumer brands selling on 2+ marketplaces with $100k+ monthly retail media spend',
    keyMetrics: [
      { label: 'SOV Increase', value: '+35%' },
      { label: 'ACoS Reduction', value: '-28%' },
      { label: 'Organic Rank', value: '+12 positions' },
    ],
    workflow: [
      'Connect Amazon, Walmart, Instacart ad accounts',
      'Import search term data for keyword harvesting',
      'Set ACoS and TACoS profitability targets',
      'Auto-optimize bids and budgets across marketplaces',
    ],
    integrations: ['Amazon Ads', 'Walmart Connect', 'Instacart Ads', 'Google Ads', 'TikTok Shop'],
  },
  'brand-awareness': {
    capabilities: [
      'Cross-screen reach planning (CTV, YouTube, Meta, TikTok, Programmatic)',
      'Automated brand lift studies (quarterly, no survey setup)',
      'Frequency cap optimization across all screens',
      'Creative wear-out detection with auto-rotation',
      'Attention metrics (viewability, audibility, active view)',
      'TV/CTV incrementality via geo-matched controls',
    ],
    avgOutcome: '2.4x unique reach per dollar',
    setupTime: '< 2 weeks',
    idealFor: 'Enterprise brands with $500k+ annual upper-funnel budget',
    keyMetrics: [
      { label: 'Reach Efficiency', value: '2.4x' },
      { label: 'Brand Lift', value: '+18%' },
      { label: 'Frequency Reduction', value: '-40%' },
    ],
    workflow: [
      'Define target audience and reach goals',
      'Plan cross-screen media mix (CTV, YouTube, Meta)',
      'Set frequency caps and flight schedules',
      'Auto-optimize for unique reach and brand lift',
    ],
    integrations: ['YouTube', 'Meta', 'TikTok', 'CTV Platforms', 'DV360', 'The Trade Desk'],
  },
  local: {
    capabilities: [
      'Location-level budget pacing by catchment performance',
      'Google Business Profile review sentiment → creative rotation',
      'Local creative automation (500+ locations from single template)',
      'Franchisee self-serve portal with guardrails',
      'Store visit attribution (online-to-offline)',
      'Local inventory ads synced with POS',
    ],
    avgOutcome: '3.1x store visit ROAS',
    setupTime: '< 3 weeks',
    idealFor: 'Franchise & multi-location brands with 50+ physical locations',
    keyMetrics: [
      { label: 'Store Visits', value: '+67%' },
      { label: 'Local ROAS', value: '3.1x' },
      { label: 'Review Score', value: '+0.4 stars' },
    ],
    workflow: [
      'Import location data and define catchment areas',
      'Set location-level budgets and targeting rules',
      'Auto-generate local creatives from templates',
      'Track online-to-offline store visit attribution',
    ],
    integrations: ['Google Business Profile', 'Yelp', 'POS Systems', 'Meta Locations', 'Waze'],
  },
  agency: {
    capabilities: [
      'White-label dashboards & reports with your branding',
      'Multi-client budget governance with spend caps & alerts',
      'Automated QA checks (naming, tracking, creative specs)',
      'Client-facing portals with SSO & role-based access',
      'Bulk operations across 50+ accounts simultaneously',
      'Margin tracking & automated client billing exports',
    ],
    avgOutcome: '10x accounts per strategist',
    setupTime: '< 2 weeks',
    idealFor: 'Agencies managing $50M+ annual spend across 20+ clients',
    keyMetrics: [
      { label: 'Accounts/Strategist', value: '10x' },
      { label: 'QA Time Saved', value: '-75%' },
      { label: 'Client Retention', value: '+32%' },
    ],
    workflow: [
      'Set up white-label dashboards with agency branding',
      'Import client accounts and define budget guardrails',
      'Automate QA checks across naming, tracking, creative',
      'Generate client-facing reports with controlled access',
    ],
    integrations: ['Google Ads', 'Meta', 'LinkedIn', 'TikTok', 'Google Analytics', 'Looker Studio'],
  },
  enterprise: {
    capabilities: [
      'Private cloud / VPC deployment option',
      'Custom ML models trained on your first-party data',
      'Dedicated solutions engineer + 24/7 support tier',
      '99.99% uptime SLA with financial backing',
      'SSO (SAML/OIDC), SCIM provisioning, audit logs',
      'Data residency controls (EU, US, APAC regions)',
    ],
    avgOutcome: 'Custom — defined in POC',
    setupTime: '8–12 weeks',
    idealFor: 'Fortune 500 marketing orgs with strict compliance & data sovereignty needs',
    keyMetrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Data Regions', value: '3' },
      { label: 'Support Tier', value: '24/7 Dedicated' },
    ],
    workflow: [
      'Architecture review and compliance assessment',
      'Private cloud or VPC deployment setup',
      'Custom ML model training on first-party data',
      'Production launch with dedicated solutions engineer',
    ],
    integrations: ['AWS', 'GCP', 'Azure', 'Snowflake', 'BigQuery', 'Custom APIs'],
  },
}