import type { NavLinkItem } from '@/types'

export const NAV_LINKS: NavLinkItem[] = [
  { to: '/', label: 'Platform' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export const FOOTER_LINKS = [
  {
    heading: 'Platform',
    links: [
      { to: '/', label: 'Overview' },
      { to: '/solutions', label: 'Solutions' },
      { to: '/solutions/ecommerce', label: 'E-commerce' },
      { to: '/solutions/leadgen', label: 'B2B Lead Gen' },
      { to: '/solutions/app-install', label: 'Mobile App' },
      { to: '/solutions/marketplace', label: 'Marketplace' },
      { to: '/solutions/brand-awareness', label: 'Brand Awareness' },
      { to: '/solutions/local', label: 'Multi-Location' },
      { to: '/solutions/agency', label: 'Agency' },
      { to: '/solutions/enterprise', label: 'Enterprise' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About us' },
      { to: '/careers', label: 'Careers' },
      { to: '/contact', label: 'Contact' },
      { to: '/contact?reason=press', label: 'Press' },
      { to: '/contact?reason=partnership', label: 'Partnerships' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { to: '/contact?reason=demo', label: 'Request demo' },
      { to: '/contact?reason=pricing', label: 'Pricing' },
      { to: '/contact', label: 'Help center' },
      { to: '/contact', label: 'API docs' },
      { to: '/contact', label: 'Status page' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { to: '/contact', label: 'Privacy policy' },
      { to: '/contact', label: 'Terms of service' },
      { to: '/contact', label: 'Cookie policy' },
      { to: '/contact', label: 'Security' },
      { to: '/contact', label: 'GDPR' },
    ],
  },
]