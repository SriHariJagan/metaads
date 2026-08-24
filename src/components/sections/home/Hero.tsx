import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/common/Reveal'

const sparklineData = [12, 18, 15, 25, 22, 30, 28, 35, 32, 42, 38, 48, 45, 52, 50, 58, 55, 62, 60, 68, 65, 72]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-meta-navy-950"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meta-violet/15 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-meta-magenta/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient/10 blur-3xl sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-14 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left: copy */}
          <div className="relative z-10">
            <Reveal variant="up">
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inset-0 h-full w-full rounded-full bg-meta-cyan opacity-75 motion-safe:animate-ping" />
                  <span className="relative h-full w-full rounded-full bg-meta-cyan" />
                </span>
                <span className="truncate text-[10px] font-medium text-white/80 sm:text-[11px]">New: Incrementality testing now in beta</span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h1
                id="hero-heading"
                className="mb-4 text-[clamp(1.5rem,0.9rem+2.2vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-white"
              >
                Turn attention into{' '}
                <span className="text-brand-gradient">measurable growth</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/70 sm:text-sm lg:text-base">
                MetaAds unifies every channel, automates optimization, and proves incrementality — so you invest where it compounds.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button variant="brand" to="/contact" className="w-full justify-center text-xs sm:text-sm sm:w-auto">
                  Start free trial
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button variant="light-outline" to="/solutions" className="w-full justify-center text-xs sm:text-sm sm:w-auto">
                  Explore solutions
                </Button>
              </div>
            </Reveal>

            <Reveal variant="up" delay={400}>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] text-white/60 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-0 sm:text-xs">
                {['No credit card', '14-day trial', 'Cancel anytime', 'Implementation support'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 shrink-0 text-meta-cyan sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={500}>
              <div className="mt-5 border-t border-white/10 pt-7 lg:pt-8">
                <p className="text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">Trusted by growth teams at</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 opacity-60 sm:gap-x-5" aria-label="Customer logos">
                  {['LUMENKART', 'TRAILBLAZE', 'NORTHBEAM', 'AURA', 'VERTICAL'].map((brand) => (
                    <span key={brand} className="whitespace-nowrap text-[10px] font-semibold tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-widest">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: product preview */}
          <div className="relative z-10 mt-14 lg:mt-0">
            <Reveal variant="up" delay={200}>
              <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl sm:max-w-lg lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />

                <div className="relative">
                  {/* Titlebar */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-2 py-1.5">
                    <div className="flex shrink-0 gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-red/60" />
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-amber/60" />
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-cyan/60" />
                    </div>
                    <div className="min-w-0 flex-1 truncate px-2 text-center font-mono text-[10px] text-white/40 sm:text-xs">
                      app.metaads.io / campaigns
                    </div>
                    <div className="hidden w-24 shrink-0 sm:block" />
                  </div>

                  {/* Body */}
                  <div className="space-y-2 p-2.5 sm:space-y-3 sm:p-3 lg:space-y-4 lg:p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-semibold text-white sm:text-sm">Campaign Performance</h3>
                      <span className="rounded-full bg-meta-cyan/20 px-2 py-1 text-[10px] font-medium text-meta-cyan sm:text-xs">Live</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2 sm:rounded-xl sm:p-2.5">
                        <p className="text-[10px] text-white/50 sm:text-xs">Impressions</p>
                        <p className="mt-1 text-sm font-bold tabular-nums text-white sm:text-base">1.84M</p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-meta-cyan sm:text-[11px]">▲ 23% vs last period</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2 sm:rounded-xl sm:p-2.5">
                        <p className="text-[10px] text-white/50 sm:text-xs">Clicks</p>
                        <p className="mt-1 text-sm font-bold tabular-nums text-white sm:text-base">84.2K</p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-meta-cyan sm:text-[11px]">▲ 18%</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2 sm:rounded-xl sm:p-2.5">
                        <p className="text-[10px] text-white/50 sm:text-xs">CTR</p>
                        <p className="mt-1 text-sm font-bold tabular-nums text-white sm:text-base">4.58%</p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-meta-cyan sm:text-[11px]">▲ 0.4pp</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2 sm:rounded-xl sm:p-2.5">
                        <p className="text-[10px] text-white/50 sm:text-xs">ROAS</p>
                        <p className="mt-1 text-sm font-bold tabular-nums text-white sm:text-base">4.82x</p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-meta-cyan sm:text-[11px]">▲ 0.34x</p>
                      </div>
                    </div>

                    <div className="relative h-16 sm:h-20 lg:h-24" aria-label="Performance trend chart">
                      <svg viewBox="0 0 400 160" className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="Performance trend line chart trending upward">
                        <defs>
                          <linearGradient id="heroSparkline" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00B8FF" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00B8FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d={sparklineData.map((y, i) => `${i === 0 ? 'M' : 'L'}${i * 18} ${160 - y * 2}`).join(' ')}
                          stroke="#00B8FF"
                          strokeWidth="2.5"
                          fill="url(#heroSparkline)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {sparklineData.map((y, i) => (
                          <circle key={i} cx={i * 18} cy={160 - y * 2} r="3" fill="#00B8FF" opacity={i === sparklineData.length - 1 ? 1 : 0.3} />
                        ))}
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-white/50 sm:text-[11px]">
                      <span>Last 30 days</span>
                      <span>Updated 2 min ago</span>
                    </div>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-5 right-3 hidden animate-float motion-reduce:animate-none sm:block sm:-right-4 lg:-bottom-5 lg:-right-4">
                  <div className="min-w-[160px] rounded-xl border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl sm:min-w-[180px] sm:p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] text-white/50 sm:text-xs">Conversions</p>
                      <span className="text-[10px] font-medium text-meta-cyan sm:text-[11px]">▲ 18%</span>
                    </div>
                    <p className="text-base font-bold text-white sm:text-lg">12,842</p>
                    <p className="text-[10px] text-white/50 sm:text-[11px]">This week</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-3 hidden animate-float-slow motion-reduce:animate-none sm:block sm:-left-4 lg:-bottom-6 lg:-left-4" style={{ animationDelay: '2s' }}>
                  <div className="min-w-[150px] rounded-xl border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl sm:min-w-[170px] sm:p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-blue" />
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-cyan" />
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-violet" />
                      <div className="h-1.5 w-1.5 rounded-full bg-meta-magenta" />
                    </div>
                    <p className="text-sm font-bold text-white sm:text-base">ROAS 4.82x</p>
                    <p className="text-[10px] text-white/50 sm:text-[11px]">Blended across channels</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 motion-safe:animate-bounce lg:block" aria-hidden="true">
        <svg className="h-5 w-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
