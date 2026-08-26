import { Reveal, SectionHeading } from '@/components/common'
import { Button } from '@/components/ui/Button'
import { TEAM_MEMBERS } from '@/data/team'
import { COMPANY_VALUES } from '@/data/values'
import { MILESTONES } from '@/data/milestones'
import { BELIEFS } from '@/data/about'

const valueColors = ['#0066FF', '#00B8FF', '#8B5CF6', '#D946EF']

function AboutHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 overflow-hidden bg-meta-navy-950" aria-labelledby="about-hero-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meta-violet/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-meta-cyan">About MetaAds</span>
          </span>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Building the advertising operating system for the AI era
          </h1>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We started MetaAds because the best marketers were spending 80% of their time on busywork and 20% on strategy. We flipped that ratio.
          </p>
        </Reveal>
        <Reveal variant="up" delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { value: '200+', label: 'Growth teams' },
              { value: '$10M+', label: 'ARR' },
              { value: '50+', label: 'Team members' },
              { value: '3', label: 'Continents' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="mission-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block rounded-full border border-meta-blue/20 bg-meta-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-meta-blue mb-4">
              Our mission
            </span>
            <h2 id="mission-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight">
              Make every advertising dollar{' '}
              <span className="text-brand-gradient">accountable</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              The industry has tolerated waste for too long. We're changing that.
            </p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {COMPANY_VALUES.map((value, index) => {
              const hex = valueColors[index % valueColors.length]
              return (
                <div
                  key={value.id}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: hex }} aria-hidden="true" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="h-12 w-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${hex}12` }}
                      >
                        <svg className="h-6 w-6" fill="none" stroke={hex} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.iconPath} />
                        </svg>
                      </div>
                      <span className="text-4xl font-bold opacity-10" style={{ color: hex }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-meta-navy mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BeliefsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden" aria-labelledby="beliefs-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="beliefs-heading"
            eyebrow="Our philosophy"
            title="What we believe"
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BELIEFS.map((belief, index) => {
                const hex = valueColors[index % valueColors.length]
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ backgroundColor: hex }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-meta-navy leading-relaxed">&ldquo;{belief}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="journey-heading"
            eyebrow="Our journey"
            title="Milestones that define us"
            description="From a hackathon prototype to the platform of choice for 200+ growth teams."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-meta-blue via-meta-cyan to-meta-violet -translate-y-1/2" aria-hidden="true" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {MILESTONES.map((milestone, index) => {
                  const hex = valueColors[index % valueColors.length]
                  const isTop = index % 2 === 0

                  return (
                    <div key={milestone.year} className={`relative flex flex-col ${isTop ? 'md:order-none' : 'md:order-none'}`}>
                      <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 ${isTop ? '-top-4' : 'top-full mt-4'} z-10`}>
                        <div
                          className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                          style={{ backgroundColor: hex }}
                        >
                          {milestone.year.slice(2)}
                        </div>
                      </div>

                      <div className={`md:pt-16 ${isTop ? 'md:pb-0' : 'md:pt-16'}`}>
                        <div className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:shadow-lg transition-all duration-300 ${isTop ? '' : ''}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: hex }}>{milestone.year}</span>
                          </div>
                          <h3 className="text-base font-bold text-meta-navy mb-1">{milestone.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{milestone.description}</p>
                          {milestone.metric && (
                            <div className="mt-3 pt-3 border-t border-slate-100">
                              <p className="text-sm font-semibold" style={{ color: hex }}>{milestone.metric}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TeamSection() {
  const featured = TEAM_MEMBERS[0]
  const rest = TEAM_MEMBERS.slice(1)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden" aria-labelledby="team-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="team-heading"
            eyebrow="Leadership"
            title="Built by operators, for operators"
            description="Our founding team has scaled ad spend from $0 to $1B+ across D2C, SaaS, gaming, and enterprise."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 bg-gradient-to-br from-meta-blue to-meta-violet flex items-center justify-center p-8 sm:p-10">
                  <div className="text-center">
                    <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-white">{featured.initials}</span>
                    </div>
                    <p className="text-sm text-white/70">Co-founder & CEO</p>
                  </div>
                </div>
                <div className="sm:w-2/3 p-8 sm:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-meta-blue mb-2">Featured Leader</span>
                  <h3 className="text-2xl font-bold text-meta-navy">{featured.name}</h3>
                  <p className="text-slate-500 mt-3 leading-relaxed">{featured.bio}</p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Ex-Meta, Google
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
                      IIT Bombay + Stanford GSB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {rest.map((member, index) => {
                const hex = valueColors[(index + 1) % valueColors.length]
                return (
                  <div key={member.name} className="group rounded-2xl bg-white border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div
                      className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${hex}12` }}
                    >
                      <span className="text-xl font-bold" style={{ color: hex }}>{member.initials}</span>
                    </div>
                    <h3 className="font-bold text-meta-navy">{member.name}</h3>
                    <p className="text-xs font-medium mt-1" style={{ color: hex }}>{member.role}</p>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="about-cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-meta-blue/5 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <h2 id="about-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight">
            Ready to build{' '}
            <span className="text-brand-gradient">with us</span>?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            We're hiring across engineering, design, and growth. Come solve the hardest problems in advertising technology.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="brand" to="/careers" size="lg" className="w-full sm:w-auto">
              View open roles
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="secondary" to="/contact" size="lg" className="w-full sm:w-auto">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <BeliefsSection />
      <JourneySection />
      <TeamSection />
      <CTASection />
    </>
  )
}
