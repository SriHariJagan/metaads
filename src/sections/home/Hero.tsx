import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/common'
import { DarkGlow } from '@/components/backgrounds/DarkGlow'
import { HeroDashboardCard } from '@/components/hero/HeroDashboardCard'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-meta-navy pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32">
      <DarkGlow />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8">
        <div>
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-meta-cyan">
              Advertising intelligence platform
            </span>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn attention into <span className="text-brand-gradient">measurable growth.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Create, launch, optimize and scale high-performing campaigns from one
              intelligent advertising platform — built for teams who measure everything.
            </p>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg" variant="brand" className="group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button to="/solutions" size="lg" variant="light-outline">
                Explore Solutions
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <HeroDashboardCard />
        </Reveal>
      </div>
    </section>
  )
}
