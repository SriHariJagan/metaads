import { useState, useCallback } from "react";
import { Reveal, SectionHeading } from "@/components/common";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { contactService } from "@/services/contactService";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  Send,
  LifeBuoy,
  Handshake,
  UserPlus,
  Clock,
} from "lucide-react";

const CONTACT_REASONS = [
  { value: "demo", label: "Request a live demo" },
  { value: "pricing", label: "Pricing & plans" },
  { value: "enterprise", label: "Enterprise / custom deployment" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const AD_SPENDS = [
  { value: "under-10k", label: "Under $10k/month" },
  { value: "10k-50k", label: "$10k-$50k/month" },
  { value: "50k-100k", label: "$50k-$100k/month" },
  { value: "100k-500k", label: "$100k-$500k/month" },
  { value: "500k-1m", label: "$500k-$1M/month" },
  { value: "1m+", label: "$1M+/month" },
  { value: "not-sure", label: "Not sure yet" },
];

const channels = [
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Account & campaign help",
    color: "#00B8FF",
    value: "support@metadev.in",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Integrations & collaborations",
    color: "#8B5CF6",
    value: "partnership@metadev.in",
  },
  {
    icon: UserPlus,
    title: "Careers",
    desc: "Questions about open roles",
    color: "#D946EF",
    value: "careers@metadev.in",
  },
  {
    icon: Phone,
    title: "General",
    desc: "Main contact line",
    color: "#F97316",
    value: "+91 95595 59143",
  },
];

const METADEV_CONTACT_EMAILS = [
  "info@metadev.in",
  "contact@metadev.in",
  "support@metadev.in",
  "business@metadev.in",
];

const METADEV_OFFICES = [
  "Hyderabad, Telangana (HQ)",
  "Amaravathi, Andhra Pradesh",
  "Bangalore, Karnataka",
  "Bengaluru, Karnataka (HQ)",
];

const METADEV_PHONES = ["+91 95595 59143"];

const METADEV_HOURS = [
  "Monday – Friday: 9AM – 6PM",
  "Saturday: 10AM – 4PM",
  "Sunday: Closed",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  companySize: string;
  adSpend: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
}

function ContactHero() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-meta-navy-950"
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-meta-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-meta-violet/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-meta-magenta/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 h-full w-full rounded-full bg-meta-cyan opacity-75 motion-safe:animate-ping" />
                <span className="relative h-full w-full rounded-full bg-meta-cyan" />
              </span>
              <span className="text-xs font-medium text-white/80">
                We're here to help
              </span>
            </span>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Let's talk about your{" "}
              <span className="text-brand-gradient">growth</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mt-5 text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
              Whether you're ready to start a trial, need enterprise pricing, or
              just have questions — our solutions engineers are here to help.
            </p>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="brand"
                to="#contact-form"
                className="w-full sm:w-auto text-sm"
              >
                Send us a message
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
                variant="light-outline"
                href="mailto:hello@metaads.com"
                className="w-full sm:w-auto text-sm"
              >
                Email us directly
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChannelsSection() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="channels-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: ch.color }}
                    aria-hidden="true"
                  />
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${ch.color}10` }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: ch.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-semibold text-meta-navy text-sm">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{ch.desc}</p>
                  <p
                    className="text-xs font-medium mt-3 truncate"
                    style={{ color: ch.color }}
                  >
                    {ch.value}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "demo",
    companySize: "",
    adSpend: "not-sure",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20)
      newErrors.message = "Please provide more detail (at least 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        companySize: formData.companySize,
        adSpend: formData.adSpend,
        subject: formData.reason,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        reason: "demo",
        companySize: "",
        adSpend: "not-sure",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact-form"
      className="relative py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden"
      aria-labelledby="contact-form-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #0066FF 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left column — Info */}
          <div>
            <Reveal variant="up">
              <SectionHeading
                id="contact-form-heading"
                eyebrow="Contact us"
                title="Start the conversation"
                description="Fill out the form and we'll route you to the right person. Most inquiries get a response within 4 business hours."
                align="left"
              />
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="mt-12 space-y-5">
                {[
                  {
                    icon: Mail,
                    color: "#0066FF",
                    title: "Email",
                    lines: METADEV_CONTACT_EMAILS,
                  },
                  {
                    icon: MapPin,
                    color: "#00B8FF",
                    title: "Offices",
                    lines: METADEV_OFFICES,
                  },
                  {
                    icon: Phone,
                    color: "#8B5CF6",
                    title: "Phone",
                    lines: METADEV_PHONES,
                  },
                  {
                    icon: Clock,
                    color: "#F97316",
                    title: "Working Hours",
                    lines: METADEV_HOURS,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 group"
                    >
                      <div
                        className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-meta-navy text-sm">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-slate-500 mt-0.5"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right column — Form */}
          <div>
            <Reveal variant="up" delay={150}>
              {submitStatus === "success" ? (
                <div
                  className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center"
                  role="status"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-meta-cyan/10 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-meta-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-meta-navy">
                    Message sent!
                  </h2>
                  <p className="mt-3 text-slate-600 max-w-md mx-auto">
                    Thanks for reaching out. Our team will review and get back
                    to you within our committed response time.
                  </p>
                  <Button
                    variant="brand"
                    className="mt-8"
                    onClick={() => setSubmitStatus("idle")}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="Full name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      error={errors.name}
                      required
                      placeholder="Priya Sharma"
                      autoComplete="name"
                    />
                    <Input
                      label="Work email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      error={errors.email}
                      required
                      placeholder="priya@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    error={errors.company}
                    required
                    placeholder="Lumenkart"
                    autoComplete="organization"
                    className="mb-4"
                  />
                  <Select
                    label="How can we help?"
                    name="reason"
                    value={formData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    options={CONTACT_REASONS}
                    error={errors.reason}
                    required
                    className="mb-4"
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Select
                      label="Company size"
                      name="companySize"
                      value={formData.companySize}
                      onChange={(e) =>
                        handleChange("companySize", e.target.value)
                      }
                      options={COMPANY_SIZES}
                      placeholderOption="Select company size"
                    />
                    <Select
                      label="Monthly ad spend"
                      name="adSpend"
                      value={formData.adSpend}
                      onChange={(e) => handleChange("adSpend", e.target.value)}
                      options={AD_SPENDS}
                      placeholderOption="Select ad spend range"
                    />
                  </div>
                  <Textarea
                    label="Tell us more"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    error={errors.message}
                    required
                    rows={5}
                    placeholder="What challenges are you facing? What outcomes are you looking for?"
                    className="mb-6"
                  />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="h-4 w-4 animate-spin mr-2"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4 ml-2" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          reason: "demo",
                          companySize: "",
                          adSpend: "not-sure",
                          message: "",
                        });
                        setErrors({});
                      }}
                    >
                      Clear form
                    </Button>
                  </div>
                  {submitStatus === "error" && (
                    <p
                      className="mt-4 text-center text-sm text-meta-red"
                      role="alert"
                    >
                      Something went wrong. Please try again or email
                      hello@metaads.com directly.
                    </p>
                  )}
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-meta-blue/5 via-transparent to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #0066FF 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-meta-blue/20 bg-meta-blue/5 px-4 py-1.5 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 h-full w-full rounded-full bg-meta-blue opacity-75 motion-safe:animate-ping" />
              <span className="relative h-full w-full rounded-full bg-meta-blue" />
            </span>
            <span className="text-xs font-medium text-meta-blue">
              Stay in the loop
            </span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meta-navy leading-tight"
          >
            Growth insights, monthly
          </h2>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            No spam. Just actionable ad strategy, platform updates, and customer
            stories. Unsubscribe anytime.
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <form
            className="mt-10 max-w-md mx-auto"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-meta-navy placeholder:text-slate-400 focus:border-meta-blue focus:ring-2 focus:ring-meta-blue/20 focus:outline-none transition-all"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
                <Send className="h-4 w-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Join 2,000+ marketers. We respect your inbox.
            </p>
          </form>
        </Reveal>

        <Reveal variant="up" delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
              "Implementation support",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-meta-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <ContactHero />
      <ChannelsSection />
      <ContactFormSection />
      <NewsletterSection />
    </>
  );
}
