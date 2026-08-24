import { Reveal, SectionHeading } from '@/components/common'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    num: 1,
    title: 'Connect',
    description: 'Link your ad accounts and import campaign history. We support Meta, Google, TikTok, LinkedIn, and 40+ platforms.',
    detail: 'OAuth or API key — takes 2 minutes',
  },
  {
    num: 2,
    title: 'Configure',
    description: 'Set your goals, budget guardrails, and automation rules. Our AI pre-fills recommendations based on your data.',
    detail: 'AI-assisted setup, full manual control',
  },
  {
    num: 3,
    title: 'Launch',
    description: 'Go live and watch MetaAds optimize in real-time. Hourly budget shifts, creative rotation, and audience expansion.',
    detail: 'Average 4.8x ROAS within 90 days',
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-white overflow-hidden" aria-labelledby="howitworks-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="howitworks-heading"
            eyebrow="How it works"
            title="Three steps to success"
            description="From sign-up to optimization in under 48 hours."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-meta-blue via-meta-cyan to-meta-violet hidden md:block" aria-hidden="true" />

              {steps.map((step, i) => (
                <div key={step.num} className="relative text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-meta-blue to-meta-violet flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-meta-blue/20">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 w-8 h-px bg-meta-blue/30 hidden md:block" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-meta-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto mb-3">{step.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-meta-cyan">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {step.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="brand" to="/contact">
                Start your free trial
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
