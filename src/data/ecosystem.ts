import type { LucideIcon } from 'lucide-react'
import {
  Megaphone,
  BadgeCheck,
  Receipt,
  UserPlus,
  Workflow,
  Package,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Leaf,
  Navigation,
} from 'lucide-react'

export interface EcosystemProduct {
  id: string
  name: string
  subtitle: string
  description: string
  benefitForMetaAds: string
  icon: LucideIcon
  href: string
  accent: string // hex color
  external: boolean
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  metahealth: HeartPulse,
  metaedu: GraduationCap,
  metagreen: Leaf,
  metaflow: Workflow,
  metahire: UserPlus,
  metacheck: BadgeCheck,
  metaads: Megaphone,
  metanav: Navigation,
  metaledger: Receipt,
  metacard: CreditCard,
  metaim: Package,
}

const ACCENTS: Record<string, string> = {
  metahealth: '#14B8A6',
  metaedu: '#0066FF',
  metagreen: '#10B981',
  metaflow: '#8B5CF6',
  metahire: '#0066FF',
  metacheck: '#F59E0B',
  metaads: '#8B5CF6',
  metanav: '#F97316',
  metaledger: '#10B981',
  metacard: '#6366F1',
  metaim: '#06B6D4',
}

// All products — mirrors MetaDev constants/products.ts but includes benefit copy for MetaAds
export const ALL_ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'metahealth',
    name: 'MetaHealth',
    subtitle: 'Healthcare Platform',
    description: 'Hospital & clinic operating system.',
    benefitForMetaAds: 'Healthcare brands running HIPAA-compliant campaigns on MetaAds use MetaHealth audiences without PHI exposure.',
    icon: PRODUCT_ICONS.metahealth,
    href: 'https://metahealth.metadev.io',
    accent: ACCENTS.metahealth,
    external: true,
  },
  {
    id: 'metaedu',
    name: 'MetaEdu',
    subtitle: 'EdTech Platform',
    description: 'Learning management & live classrooms.',
    benefitForMetaAds: 'Education marketers sync MetaEdu enrollments to MetaAds for true ROAS on student acquisition.',
    icon: PRODUCT_ICONS.metaedu,
    href: 'https://metaedu.metadev.io',
    accent: ACCENTS.metaedu,
    external: true,
  },
  {
    id: 'metagreen',
    name: 'MetaGreen',
    subtitle: 'Sustainability',
    description: 'Carbon & ESG tracking.',
    benefitForMetaAds: 'Purpose brands certify green claims in MetaGreen then surface verified badges in MetaAds creatives.',
    icon: PRODUCT_ICONS.metagreen,
    href: 'https://metagreen.metadev.io',
    accent: ACCENTS.metagreen,
    external: true,
  },
  {
    id: 'metaflow',
    name: 'MetaFlow',
    subtitle: 'Enterprise Workflow',
    description: 'Approvals & automation.',
    benefitForMetaAds: 'Route campaign briefs, creatives and budgets through MetaFlow approvals — no Slack chaos.',
    icon: PRODUCT_ICONS.metaflow,
    href: 'https://metaflow.metadev.io',
    accent: ACCENTS.metaflow,
    external: true,
  },
  {
    id: 'metahire',
    name: 'MetaHire',
    subtitle: 'Hiring & Talent',
    description: 'Talent pipeline & interviews.',
    benefitForMetaAds: 'Hire certified MetaAds operators and scales team: strategists, media buyers, creatives.',
    icon: PRODUCT_ICONS.metahire,
    href: 'https://metahire.metadev.io',
    accent: ACCENTS.metahire,
    external: true,
  },
  {
    id: 'metacheck',
    name: 'MetaCheck',
    subtitle: 'Verification',
    description: 'Fraud & compliance shield.',
    benefitForMetaAds: 'MetaCheck verifies impressions and blocks fraud pre-bid, cutting wasted spend by 30%+.',
    icon: PRODUCT_ICONS.metacheck,
    href: 'https://metacheck.metadev.io',
    accent: ACCENTS.metacheck,
    external: true,
  },
  {
    id: 'metaads',
    name: 'MetaAds',
    subtitle: 'AdTech & Marketing',
    description: 'Unified campaigns, attribution and AI optimization.',
    benefitForMetaAds: 'The core: every channel, one dashboard, autonomous optimization that proves incrementality.',
    icon: PRODUCT_ICONS.metaads,
    href: '/',
    accent: ACCENTS.metaads,
    external: false,
  },
  {
    id: 'metanav',
    name: 'MetaNav',
    subtitle: 'Fleet & Logistics',
    description: 'Route & fleet control.',
    benefitForMetaAds: 'Location brands sync store & fleet data to MetaAds for geo-targeted promos that actually arrive.',
    icon: PRODUCT_ICONS.metanav,
    href: 'https://metanav.metadev.io',
    accent: ACCENTS.metanav,
    external: true,
  },
  {
    id: 'metaledger',
    name: 'MetaLedger',
    subtitle: 'Billing & Finance',
    description: 'Invoicing & revenue reconciliation.',
    benefitForMetaAds: 'MetaLedger reconciles MetaAds spend to invoices and revenue, closing loop from click to cash.',
    icon: PRODUCT_ICONS.metaledger,
    href: 'https://metaledger.metadev.io',
    accent: ACCENTS.metaledger,
    external: true,
  },
  {
    id: 'metacard',
    name: 'MetaCard',
    subtitle: 'Digital ID',
    description: 'Verified identity cards.',
    benefitForMetaAds: 'Advertisers verify once with MetaCard and launch faster with trusted identity across the ecosystem.',
    icon: PRODUCT_ICONS.metacard,
    href: 'https://metacard.metadev.io',
    accent: ACCENTS.metacard,
    external: true,
  },
  {
    id: 'metaim',
    name: 'MetaIM',
    subtitle: 'Inventory',
    description: 'Stock & catalog sync.',
    benefitForMetaAds: 'MetaIM keeps catalog & inventory live, so MetaAds never promotes out-of-stock SKUs.',
    icon: PRODUCT_ICONS.metaim,
    href: 'https://metaim.metadev.io',
    accent: ACCENTS.metaim,
    external: true,
  },
]

// For MetaAds: only show useful companions (not every product). Curated for advertising relevance.
export const METAADS_ECOSYSTEM_IDS = ['metacheck', 'metaledger', 'metahire', 'metaflow', 'metaim', 'metacard'] as const

export function getUsefulFor(productId: string): EcosystemProduct[] {
  if (productId === 'metaads') {
    return ALL_ECOSYSTEM_PRODUCTS.filter((p) => (METAADS_ECOSYSTEM_IDS as readonly string[]).includes(p.id))
  }
  // Generic fallback: show 4 others that are most commonly useful (used when reusing section in other product pages)
  // Highlights current product elsewhere; for other pages we can show MetaAds + 3 complementary.
  const priority: Record<string, string[]> = {
    metahire: ['metaads', 'metacheck', 'metacard', 'metaflow'],
    metacheck: ['metaads', 'metahire', 'metaledger', 'metacard'],
    metaledger: ['metaads', 'metacheck', 'metaflow', 'metaim'],
    metahealth: ['metaads', 'metacheck', 'metahire', 'metacard'],
    metaedu: ['metaads', 'metahire', 'metacheck', 'metacard'],
    default: ['metaads', 'metacheck', 'metaledger', 'metahire'],
  }
  const ids = priority[productId] || priority.default
  return ALL_ECOSYSTEM_PRODUCTS.filter((p) => ids.includes(p.id))
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ALL_ECOSYSTEM_PRODUCTS.find((p) => p.id === id)
}
