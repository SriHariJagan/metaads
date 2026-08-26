import { Reveal } from '@/components/common'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-meta-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] opacity-[0.03]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 50%)' }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-meta-blue/20 bg-meta-blue/5 px-4 py-1.5 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 h-full w-full rounded-full bg-meta-blue opacity-75 motion-safe:animate-ping" />
              <span className="relative h-full w-full rounded-full bg-meta-blue" />
            </span>
            <span className="text-xs font-medium text-meta-blue">Limited spots available</span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight">
            Ready to turn ad spend into{' '}
            <span className="text-brand-gradient">predictable growth</span>?
          </h2>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Join 500+ brands who stopped guessing and started compounding. Setup takes 48 hours.
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="brand" to="/contact" size="lg" className="w-full sm:w-auto">
              Start free trial
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="secondary" to="/solutions" size="lg" className="w-full sm:w-auto">
              Explore solutions
            </Button>
          </div>
        </Reveal>

        <Reveal variant="up" delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {['No credit card required', '14-day free trial', 'Cancel anytime', 'Implementation support'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-meta-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
