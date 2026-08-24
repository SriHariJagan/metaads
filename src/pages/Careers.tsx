import { useState, useCallback } from 'react'
import { Reveal, SectionHeading } from '@/components/common'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { JOBS, DEPARTMENTS, PERKS, CAREER_STATS } from '@/data/jobs'
import { applicationsService } from '@/services/applicationsService'
import { X, CheckCircle2, Loader2 } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  role?: string
  department?: string
  location?: string
  resume?: string
  linkedin?: string
  github?: string
  coverLetter?: string
}

const deptColors: Record<string, string> = {
  Engineering: '#0066FF',
  Design: '#8B5CF6',
  Marketing: '#00B8FF',
  Product: '#D946EF',
  Operations: '#F97316',
}

function CareersHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-18 overflow-hidden bg-meta-navy-950" aria-labelledby="careers-hero-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meta-violet/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 h-full w-full rounded-full bg-meta-cyan opacity-75 motion-safe:animate-ping" />
              <span className="relative h-full w-full rounded-full bg-meta-cyan" />
            </span>
            <span className="text-xs font-medium text-meta-cyan">We're hiring</span>
          </span>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <h1 id="careers-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Build the advertising OS for the AI era
          </h1>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We're a small, high-trust team solving hard problems in advertising technology. Come do the best work of your career.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="relative -mt-10 sm:-mt-12 z-10">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {CAREER_STATS.map((stat, index) => {
                  const hex = ['#0066FF', '#00B8FF', '#8B5CF6'][index]
                  return (
                    <div key={stat.value} className="flex items-center gap-4 p-6 sm:p-8">
                      <div
                        className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${hex}10` }}
                      >
                        <span className="text-2xl font-bold" style={{ color: hex }}>{stat.value}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{stat.label}</p>
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

function PerksSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden" aria-labelledby="perks-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="perks-heading"
            eyebrow="Life at MetaAds"
            title="Benefits that compound"
            description="We invest in people the same way we invest in product — for long-term returns."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PERKS.map((perk, index) => {
                const hex = ['#0066FF', '#00B8FF', '#8B5CF6', '#D946EF', '#EC4899', '#F97316'][index % 6]
                return (
                  <div
                    key={perk}
                    className="group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: hex }} aria-hidden="true" />
                    <div className="flex items-start gap-4">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${hex}12` }}
                      >
                        <CheckCircle2 className="h-5 w-5" style={{ color: hex }} aria-hidden="true" />
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pt-1.5">{perk}</p>
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

function JobsSection() {
  const [selectedDept, setSelectedDept] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    location: '',
    resume: '',
    linkedin: '',
    github: '',
    coverLetter: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const filteredJobs = selectedDept === 'All'
    ? JOBS
    : JOBS.filter(job => job.department === selectedDept)

  const openModal = useCallback((job: typeof JOBS[0]) => {
    setSelectedJob(job)
    setFormData({
      name: '',
      email: '',
      role: job.title,
      department: job.department,
      location: job.location,
      resume: '',
      linkedin: '',
      github: '',
      coverLetter: '',
    })
    setErrors({})
    setSubmitStatus('idle')
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.linkedin.trim()) newErrors.linkedin = 'LinkedIn profile is required'
    else if (!formData.linkedin.includes('linkedin.com')) newErrors.linkedin = 'Please provide a valid LinkedIn URL'
    if (!formData.resume.trim()) newErrors.resume = 'Resume/portfolio link is required'
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Tell us why you\'re a fit'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await applicationsService.submit({
        jobId: selectedJob!.id,
        jobTitle: selectedJob!.title,
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin,
        github: formData.github || undefined,
        resume: formData.resume,
        coverLetter: formData.coverLetter,
      })
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="jobs-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <SectionHeading
              id="jobs-heading"
              eyebrow="Open roles"
              title={`We're hiring for ${JOBS.length} positions across ${DEPARTMENTS.length - 1} teams`}
              description="Filter by department or browse all. Every role includes equity, remote flexibility, and meaningful ownership."
              align="center"
            />
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter by department">
              {DEPARTMENTS.map((dept) => {
                const hex = deptColors[dept] || '#0066FF'
                const isActive = selectedDept === dept
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? hex : 'transparent',
                      color: isActive ? '#fff' : hex,
                      border: `1px solid ${isActive ? hex : `${hex}30`}`,
                    }}
                    aria-pressed={isActive}
                  >
                    {dept}
                    {dept !== 'All' && (
                      <span className="ml-1.5 text-xs opacity-70">
                        ({JOBS.filter(j => j.department === dept).length})
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredJobs.map((job, index) => {
                const hex = deptColors[job.department] || '#0066FF'
                return (
                  <article
                    key={job.id}
                    className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: hex }} aria-hidden="true" />
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: `${hex}12`, color: hex }}
                            >
                              {job.department}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">{job.type}</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">{job.model}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-meta-navy group-hover:text-meta-blue transition-colors">{job.title}</h3>
                          <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{job.summary}</p>
                          <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Button
                            variant="brand"
                            size="sm"
                            onClick={() => openModal(job)}
                            className="whitespace-nowrap"
                          >
                            Apply now
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </Reveal>

          {filteredJobs.length === 0 && (
            <Reveal variant="up" delay={200}>
              <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 max-w-4xl mx-auto">
                <p className="text-slate-500">No roles match your filter. Try another department.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 rounded-lg p-2 text-slate-400 hover:text-meta-navy hover:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-meta-blue"
              aria-label="Close application form"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-6 sm:p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-12" role="status">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-meta-cyan/10 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-meta-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-meta-navy">Application submitted!</h2>
                  <p className="mt-2 text-slate-600">Thanks for your interest in the {selectedJob.title} role. Our team will review and get back to you within 3 business days.</p>
                  <Button variant="brand" className="mt-6" onClick={closeModal}>
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 id="modal-title" className="text-2xl font-bold text-meta-navy mb-1">Apply for {selectedJob.title}</h2>
                  <p className="text-slate-600 mb-6">{selectedJob.location} • {selectedJob.model} • {selectedJob.type}</p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="Full name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                      required
                      placeholder="Priya Sharma"
                    />
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      required
                      placeholder="priya@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="Role applying for"
                      name="role"
                      value={formData.role}
                      readOnly
                      className="bg-slate-50"
                    />
                    <Select
                      label="Department"
                      name="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      options={DEPARTMENTS.filter(d => d !== 'All').map(d => ({ value: d, label: d }))}
                      error={errors.department}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="Location preference"
                      name="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      error={errors.location}
                      required
                      placeholder="Bengaluru, India"
                    />
                    <Input
                      label="LinkedIn profile"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      error={errors.linkedin}
                      required
                      placeholder="linkedin.com/in/priyasharma"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="GitHub (optional)"
                      name="github"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="github.com/priyasharma"
                    />
                    <Input
                      label="Resume / Portfolio URL"
                      name="resume"
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      error={errors.resume}
                      required
                      placeholder="drive.google.com/... or portfolio.site"
                    />
                  </div>

                  <Textarea
                    label="Why MetaAds? Why this role?"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    error={errors.coverLetter}
                    required
                    rows={5}
                    placeholder="Tell us what excites you about this problem space and why you're a great fit..."
                  />

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="brand" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Submitting...
                        </>
                      ) : (
                        'Submit application'
                      )}
                    </Button>
                    <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>

                  {submitStatus === 'error' && (
                    <p className="mt-4 text-center text-sm text-meta-red" role="alert">
                      Something went wrong. Please try again or email careers@metaads.com directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden" aria-labelledby="careers-cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-meta-blue/5 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <h2 id="careers-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight">
            Don't see your perfect role?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            We're always looking for exceptional people. Send us your profile and we'll reach out when something fits.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-10">
            <Button variant="brand" to="/contact" size="lg">
              General application
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Careers() {
  return (
    <>
      <CareersHero />
      <StatsSection />
      <PerksSection />
      <JobsSection />
      <CTASection />
    </>
  )
}
