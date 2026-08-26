export const HERO_METRICS = [
  { label: 'Impressions', value: '1.84M' },
  { label: 'Clicks', value: '84.2K' },
  { label: 'CTR', value: '4.58%' },
  { label: 'Conversions', value: '12,842' },
  { label: 'ROAS', value: '4.82x' },
]

export const HERO_TREND = [42, 48, 45, 58, 55, 66, 62, 74, 70, 82, 78, 91]

export const DASHBOARD_OVERVIEW = [
  { label: 'Total spend', value: '₹8,42,500' },
  { label: 'Revenue', value: '₹40,56,000' },
  { label: 'ROAS', value: '4.81x' },
  { label: 'Conversions', value: '18,420' },
]

export const DASHBOARD_TREND = [38, 44, 40, 52, 49, 60, 57, 68, 64, 76, 73, 85, 82, 94]

export const DASHBOARD_CHANNEL_SPEND = [62, 84, 48, 96, 70, 55, 40]

export type CampaignStatus = 'Active' | 'Paused' | 'Scaling'

export interface CampaignRow {
  name: string
  channel: string
  spend: string
  roas: string
  status: CampaignStatus
}

export const CAMPAIGN_ROWS: CampaignRow[] = [
  { name: 'Festive Launch — Search', channel: 'Search', spend: '₹1,84,200', roas: '5.62x', status: 'Scaling' },
  { name: 'Retarget — Cart Abandoners', channel: 'Display', spend: '₹96,400', roas: '6.14x', status: 'Active' },
  { name: 'Brand Awareness — Video', channel: 'Video', spend: '₹2,10,000', roas: '3.28x', status: 'Active' },
  { name: 'New Collection — Social', channel: 'Social', spend: '₹1,42,800', roas: '4.05x', status: 'Active' },
  { name: 'Off-Season Clearance', channel: 'Search', spend: '₹58,900', roas: '2.11x', status: 'Paused' },
]

export const AUDIENCE_BREAKDOWN = [
  { label: 'Intent', share: 42, color: '#0066FF' },
  { label: 'Interest', share: 33, color: '#7200FF' },
  { label: 'Behavior', share: 25, color: '#FF0066' },
]
