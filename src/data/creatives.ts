export interface CreativeVariant {
  id: string
  label: string
  headline: string
  body: string
  cta: string
  ctr: string
  gradient: string
}

export const CREATIVE_VARIANTS: CreativeVariant[] = [
  {
    id: 'a',
    label: 'Variant A',
    headline: 'New Collection',
    body: 'Launch your next idea with a campaign built to convert.',
    cta: 'Shop Now',
    ctr: '5.2% CTR',
    gradient: 'from-meta-blue to-meta-violet',
  },
  {
    id: 'b',
    label: 'Variant B',
    headline: 'Limited Drop',
    body: 'Selling fast — reserve yours before the collection is gone.',
    cta: 'Learn More',
    ctr: '4.6% CTR',
    gradient: 'from-meta-violet to-meta-magenta',
  },
  {
    id: 'c',
    label: 'Variant C',
    headline: 'Made For You',
    body: 'Personalized picks based on what you already love.',
    cta: 'Explore',
    ctr: '6.1% CTR',
    gradient: 'from-meta-magenta to-meta-orange',
  },
]
