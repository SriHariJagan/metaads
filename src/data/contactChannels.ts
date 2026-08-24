import { Briefcase, LifeBuoy, Handshake, UserPlus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ContactChannel {
  icon: LucideIcon
  title: string
  description: string
  value: string
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  { icon: Briefcase, title: 'Sales', description: 'Talk to us about plans and pricing.', value: 'sales@metaads.example' },
  { icon: LifeBuoy, title: 'Support', description: 'Get help with your account or campaigns.', value: 'support@metaads.example' },
  { icon: Handshake, title: 'Partnerships', description: 'Explore integrations and collaborations.', value: 'partners@metaads.example' },
  { icon: UserPlus, title: 'Careers', description: 'Questions about open roles.', value: 'careers@metaads.example' },
]

export const CONTACT_SUBJECTS = [
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
  { value: 'partnerships', label: 'Partnerships' },
  { value: 'careers', label: 'Careers' },
]
