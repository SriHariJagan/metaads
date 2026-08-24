export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Priya Sharma',
    role: 'Co-founder & CEO',
    bio: 'Ex-Meta, Google. Scaled ad products to $500M+ ARR. IIT Bombay + Stanford GSB.',
    initials: 'PS',
  },
  {
    name: 'Arjun Patel',
    role: 'Co-founder & CTO',
    bio: 'Ex-Airbnb, Stripe. Built real-time bidding systems handling 10M+ QPS. IIT Delhi + MIT.',
    initials: 'AP',
  },
  {
    name: 'Sarah Chen',
    role: 'VP Engineering',
    bio: 'Ex-Uber, Snowflake. Distributed systems & ML infrastructure. Carnegie Mellon.',
    initials: 'SC',
  },
  {
    name: 'Rajesh Kumar',
    role: 'VP Product',
    bio: 'Ex-Amazon Ads, Criteo. Product-led growth for ad platforms. IIM Ahmedabad.',
    initials: 'RK',
  },
]