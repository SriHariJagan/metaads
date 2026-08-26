import { Zap, Heart, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AudienceLayer {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const AUDIENCE_LAYERS: AudienceLayer[] = [
  { icon: Zap, title: 'Intent', description: 'People actively searching and comparing right now.', color: 'meta-blue' },
  { icon: Heart, title: 'Interest', description: 'Affinity signals from content and category engagement.', color: 'meta-violet' },
  { icon: Activity, title: 'Behavior', description: 'Past purchase and on-site activity patterns.', color: 'meta-pink' },
]
