import { Hero } from '@/components/sections/home/Hero'
import { MetricsSection } from '@/components/sections/home/MetricsSection'
import { ProblemSection } from '@/components/sections/home/ProblemSection'
import { PlatformIntroSection } from '@/components/sections/home/PlatformIntro'
import { EcosystemSection } from '@/components/sections/home/EcosystemSection'
import { SolutionsGrid } from '@/components/sections/home/SolutionsGrid'
import { DashboardSection } from '@/components/sections/home/DashboardSection'
import { HowItWorksSection } from '@/components/sections/home/HowItWorks'
import { AnalyticsSection } from '@/components/sections/home/AnalyticsSection'
import { AudienceSection } from '@/components/sections/home/AudienceSection'
import { CreativeSection } from '@/components/sections/home/CreativeSection'
import { AutomationSection } from '@/components/sections/home/AutomationSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { CTASection } from '@/components/sections/home/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <ProblemSection />
      <PlatformIntroSection />
      <EcosystemSection currentId="metaads" />
      <SolutionsGrid />
      <DashboardSection />
      <HowItWorksSection />
      <AnalyticsSection />
      <AudienceSection />
      <CreativeSection />
      <AutomationSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
