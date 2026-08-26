import { Reveal, SectionHeading } from '@/components/common'
import { TESTIMONIALS } from '@/data/testimonials'

const avatarColors = ['#0066FF', '#D946EF', '#F97316']

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

export function TestimonialsSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 bg-slate-50 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Trusted by leaders"
            title="Hear from teams who transformed their advertising."
            description="Real results from real marketers. No jargon. Just growth."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal variant="up" delay={200}>
            <div className="rounded-3xl bg-gradient-to-br from-meta-navy-950 to-meta-navy-900 p-8 sm:p-12 text-white mb-6">
              <div className="max-w-3xl">
                <span className="text-6xl font-serif leading-none opacity-20">&ldquo;</span>
                <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed -mt-6 ml-4">
                  {TESTIMONIALS[0].quote}
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: avatarColors[0] }}
                  >
                    {getInitials(TESTIMONIALS[0].name)}
                  </div>
                  <div>
                    <p className="font-semibold">{TESTIMONIALS[0].name}</p>
                    <p className="text-sm text-white/60">{TESTIMONIALS[0].role}, {TESTIMONIALS[0].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(1).map((testimonial, idx) => (
              <Reveal key={testimonial.id} variant="up" delay={300 + idx * 100}>
                <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-4xl font-serif leading-none opacity-15">&ldquo;</span>
                  <blockquote className="text-sm text-slate-600 leading-relaxed -mt-4 ml-2">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: avatarColors[(idx + 1) % avatarColors.length] }}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-meta-navy">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
