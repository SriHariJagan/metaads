import { Reveal, SectionHeading } from '@/components/common'
import { SOLUTIONS } from '@/data/solutions'
import { Button } from '@/components/ui/Button'

const COLOR_MAP: Record<string, string> = {
  'meta-blue': '#0066FF',
  'meta-cyan': '#00B8FF',
  'meta-violet': '#8B5CF6',
  'meta-magenta': '#D946EF',
  'meta-pink': '#EC4899',
  'meta-red': '#EF4444',
  'meta-orange': '#F97316',
  'meta-amber': '#F59E0B',
}

const iconSvgs: Record<string, JSX.Element> = {
  ShoppingBag: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  Users: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Smartphone: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  Store: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  Tv: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  MapPin: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Briefcase: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Shield: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
}

export function SolutionsGrid() {
  return (
    <section
      className="relative py-10 sm:py-14 lg:py-18 bg-slate-50 overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at center, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="solutions-heading"
            eyebrow="Solutions"
            title="Built for how you advertise"
            description="Eight specialized solutions. Each solves a distinct growth challenge. All run on the same unified platform."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible min-w-max sm:min-w-0">
              {SOLUTIONS.map((solution, index) => {
                const hex = COLOR_MAP[solution.color] ?? '#0066FF'
                return (
                  <article
                    key={solution.id}
                    className="group relative w-[280px] sm:w-auto flex-shrink-0 rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="h-2" style={{ background: `linear-gradient(to right, ${hex}, ${hex}88)` }} aria-hidden="true" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${hex}12`, color: hex }}>
                          {iconSvgs[solution.icon]}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: `${hex}10`, color: hex }}>
                          {solution.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-meta-navy mb-1">{solution.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{solution.shortDescription}</p>
                      <ul className="space-y-1.5 mb-5">
                        {solution.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <div className="h-1 w-1 rounded-full" style={{ backgroundColor: hex }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="w-full text-sm group-hover:bg-slate-50" to={`/solutions/${solution.id}`}>
                        Learn more
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
