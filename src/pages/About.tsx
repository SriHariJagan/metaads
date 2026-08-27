import { Reveal, SectionHeading } from "@/components/common";
import { Button } from "@/components/ui/Button";
import { COMPANY_VALUES } from "@/data/values";
import { MILESTONES } from "@/data/milestones";
import { BELIEFS } from "@/data/about";
import {
  UserCheck,
  Rocket,
  Users,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";

const valueColors = ["#0066FF", "#00B8FF", "#8B5CF6", "#D946EF"];

const FOUNDERS = [
  {
    name: "Kishore Kodali",
    role: "Founder & CEO",
    image: "/kishore.png",
    initials: "KK",
    bio: "Kishore founded MetaFlow to replace fragmented tools with one connected business platform. He sets product vision, growth strategy, and partnerships so companies can launch a website, admin, payments, and operations without rebuilding from scratch. His focus is simple: clear outcomes for every business that starts on MetaFlow.",
    highlights: [
      {
        icon: Rocket,
        label: "Product Vision",
        desc: "Defines roadmap & category strategy",
      },
      {
        icon: Target,
        label: "Growth Strategy",
        desc: "Scales from 0 → $10M+ ARR",
      },
      {
        icon: UserCheck,
        label: "Partnerships",
        desc: "Builds ecosystem alliances",
      },
    ],
    accent: "#0066FF",
    accentLight: "#0066FF15",
    gradient: "from-meta-blue to-meta-cyan",
  },
  {
    name: "Satya Kavipurapu",
    role: "COO",
    image: "/satya.png",
    initials: "SK",
    bio: "Satya runs MetaFlow's day-to-day operations—delivery, support systems, and process quality. He keeps onboarding, module activation, and customer success moving in sync so teams can scale without losing reliability. Customers feel that discipline as faster launches and smoother handoffs.",
    highlights: [
      {
        icon: Shield,
        label: "Operations",
        desc: "Delivery, support & process quality",
      },
      {
        icon: Users,
        label: "Customer Success",
        desc: "Onboarding & activation at scale",
      },
      {
        icon: Sparkles,
        label: "Reliability",
        desc: "Systems that scale without breaking",
      },
    ],
    accent: "#8B5CF6",
    accentLight: "#8B5CF615",
    gradient: "from-meta-violet to-meta-magenta",
  },
];

function FoundersSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="founders-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 h-[400px] w-[400px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #0066FF 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[400px] w-[400px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="founders-heading"
            eyebrow="Founders"
            title="Two operators. One mission."
            description="Built by people who've lived the problem. Kishore and Satya have scaled ad spend from $0 to $1B+ across D2C, SaaS, gaming, and enterprise. They know the chaos — and they built MetaFlow to end it."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <article
                key={founder.name}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-slate-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r"
                  style={{ background: founder.gradient }}
                  aria-hidden="true"
                />
                {/* Subtle glow */}
                <div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: founder.gradient }}
                  aria-hidden="true"
                />

                <div className="p-7 sm:p-9 lg:p-10 flex flex-col h-full">
                  {/* Image + Role badge */}
                  <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div
                        className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[1.2rem] overflow-hidden ring-4 ring-white shadow-xl"
                        style={{
                          boxShadow: `0 0 0 1px ${founder.accent}20, 0 20px 40px -12px ${founder.accent}25`,
                        }}
                      >
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Role badge */}
                      <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-lg"
                          style={{ color: founder.accent }}
                        >
                          {founder.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-black">
                        {founder.name}
                      </h3>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: founder.accent }}
                      >
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-base leading-relaxed text-slate-600 mb-6 flex-1">
                    {founder.bio}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {founder.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 text-left sm:block sm:text-center"
                      >
                        <div
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:mb-3"
                          style={{ backgroundColor: founder.accentLight }}
                        >
                          <h.icon
                            className="h-5 w-5"
                            style={{ color: founder.accent }}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            {h.label}
                          </p>
                          <p className="text-[11px] font-medium text-slate-700 leading-snug">
                            {h.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Shared philosophy */}
        <Reveal variant="up" delay={300}>
          <div className="mt-16 relative overflow-hidden rounded-[2rem] bg-meta-navy-950 p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-meta-violet/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                Shared philosophy
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Clear outcomes. No rebuilding from scratch.
              </h3>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Every feature we ship, every partnership we sign, every decision
                we make comes back to one question: does this give our customers
                a clear, measurable outcome — without forcing them to stitch
                together fragmented tools?
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <UserCheck
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  Outcome-first
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Rocket
                    className="h-4 w-4 text-meta-cyan"
                    aria-hidden="true"
                  />
                  Ship fast
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Users
                    className="h-4 w-4 text-meta-violet"
                    aria-hidden="true"
                  />
                  Customer-obsessed
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-meta-navy-950 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meta-violet/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #D946EF 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-xs font-medium tracking-wide text-meta-cyan">
              About MetaAds
            </span>
          </span>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[0.98]"
          >
            Building the advertising operating system for the AI era
          </h1>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-7 text-lg sm:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed">
            We started MetaAds because the best marketers were spending 80% of
            their time on busywork and 20% on strategy. We flipped that ratio.
          </p>
        </Reveal>
        <Reveal variant="up" delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { value: "200+", label: "Growth teams" },
              { value: "$10M+", label: "ARR" },
              { value: "50+", label: "Team members" },
              { value: "3", label: "Continents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block rounded-full border border-meta-blue/20 bg-meta-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-meta-blue mb-4">
              Our mission
            </span>
            <h2
              id="mission-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight"
            >
              Make every advertising dollar{" "}
              <span className="text-brand-gradient">accountable</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              The industry has tolerated waste for too long. We're changing
              that.
            </p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {COMPANY_VALUES.map((value, index) => {
              const hex = valueColors[index % valueColors.length];
              return (
                <div
                  key={value.id}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: hex }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="h-12 w-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${hex}12` }}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke={hex}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={value.iconPath}
                          />
                        </svg>
                      </div>
                      <span
                        className="text-4xl font-bold opacity-10"
                        style={{ color: hex }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-meta-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BeliefsSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden"
      aria-labelledby="beliefs-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 right-0 h-[400px] w-[400px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #0066FF 0%, transparent 60%)",
          }}
        />
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
                const hex = valueColors[index % valueColors.length];
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
                        <p className="text-lg font-medium text-meta-navy leading-relaxed">
                          &ldquo;{belief}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="journey-heading"
    >
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
              <div
                className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-meta-blue via-meta-cyan to-meta-violet -translate-y-1/2"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {MILESTONES.map((milestone, index) => {
                  const hex = valueColors[index % valueColors.length];
                  const isTop = index % 2 === 0;

                  return (
                    <div
                      key={milestone.year}
                      className={`relative flex flex-col ${isTop ? "md:order-none" : "md:order-none"}`}
                    >
                      <div
                        className={`hidden md:block absolute left-1/2 -translate-x-1/2 ${isTop ? "-top-4" : "top-full mt-4"} z-10`}
                      >
                        <div
                          className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                          style={{ backgroundColor: hex }}
                        >
                          {milestone.year.slice(2)}
                        </div>
                      </div>

                      <div
                        className={`md:pt-16 ${isTop ? "md:pb-0" : "md:pt-16"}`}
                      >
                        <div
                          className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:shadow-lg transition-all duration-300 ${isTop ? "" : ""}`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs font-bold uppercase tracking-wider"
                              style={{ color: hex }}
                            >
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-meta-navy mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {milestone.description}
                          </p>
                          {milestone.metric && (
                            <div className="mt-3 pt-3 border-t border-slate-100">
                              <p
                                className="text-sm font-semibold"
                                style={{ color: hex }}
                              >
                                {milestone.metric}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="about-cta-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-meta-blue/5 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <h2
            id="about-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight"
          >
            Ready to build <span className="text-brand-gradient">with us</span>?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            We're hiring across engineering, design, and growth. Come solve the
            hardest problems in advertising technology.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="brand"
              to="/careers"
              size="lg"
              className="w-full sm:w-auto"
            >
              View open roles
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button
              variant="secondary"
              to="/contact"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get in touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <BeliefsSection />
      <JourneySection />
      <FoundersSection />
      <CTASection />
    </>
  );
}
