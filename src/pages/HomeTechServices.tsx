import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Wifi,
  Printer,
  Home,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Phone,
  Star,
  Clock,
  MapPin,
  ChevronRight,
  Shield,
} from "lucide-react";

// ─── Client-supplied credentials ─────────────────────────────────────────────
const HOME_TECH_PHONE_DISPLAY = "(661) 520-9241";
const HOME_TECH_PHONE_TEL = "6615209241";
const AIRTABLE_BASE_ID = "YOUR_BASE_ID"; // Replace with client Airtable base ID
const AIRTABLE_TABLE_ID = "YOUR_TABLE_ID"; // Replace with client Airtable table name or ID
const AIRTABLE_API_TOKEN = "YOUR_API_TOKEN"; // Replace with client Airtable personal access token
// ─────────────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Monitor,
    title: "Computer & Laptop Repair",
    description:
      "Slow, crashing, or unresponsive? We diagnose and fix on-site — no drop-off, no waiting.",
  },
  {
    icon: Wifi,
    title: "Network & WiFi Troubleshooting",
    description:
      "Dead zones, dropped connections, slow speeds — resolved at your home with proper equipment placement.",
  },
  {
    icon: Printer,
    title: "Printer Setup & Repair",
    description:
      "Wireless printing that actually works, properly configured and tested before we leave.",
  },
  {
    icon: Home,
    title: "Smart Home Device Setup",
    description:
      "From thermostats to cameras, we integrate your devices into a system that works together.",
  },
  {
    icon: ShieldCheck,
    title: "Home Cybersecurity Assessment",
    description:
      "Know exactly what's exposed in your home network before someone else finds it first.",
  },
  {
    icon: Smartphone,
    title: "Mobile Device Setup & Training",
    description:
      "Get more from your phone or tablet with personalized hands-on training at your kitchen table.",
  },
];

const whyPoints = [
  {
    icon: Star,
    title: "12+ years of IT and cybersecurity experience",
    desc: "Not just a repair tech — a certified cybersecurity professional with enterprise-level training.",
  },
  {
    icon: MapPin,
    title: "We come to you",
    desc: "Mobile service across Kern County and Fresno. No drop-off, no waiting in line.",
  },
  {
    icon: ShieldCheck,
    title: "Security expertise most techs don't have",
    desc: "Every visit includes a security eye. We don't just fix your printer — we spot what's exposed.",
  },
  {
    icon: Clock,
    title: "On time, every time",
    desc: "We respect your schedule. You'll get a clear arrival window and we stick to it.",
  },
];

const expectSteps = [
  {
    step: "01",
    title: "Book your service call",
    body: "Fill out the form below or call us directly. Tell us what you're dealing with and we'll confirm a time that works for you.",
  },
  {
    step: "02",
    title: "We arrive at your door",
    body: "Our technician arrives on time with everything needed to assess and resolve your issue — no surprises, no hidden trips.",
  },
  {
    step: "03",
    title: "Assessment and resolution",
    body: "We diagnose the issue, explain what we found in plain English, and fix or set up what's needed while you watch.",
  },
  {
    step: "04",
    title: "You leave knowing exactly what changed",
    body: "Before we go, we walk you through everything we did, answer your questions, and leave you with a written summary.",
  },
];

const serviceOptions = services.map((s) => s.title);

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  datetime: string;
  description: string;
}

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  datetime: "",
  description: "",
};

export default function HomeTechServices() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: form.name,
              Phone: form.phone,
              Email: form.email,
              Service: form.service,
              "Preferred Date/Time": form.datetime,
              "Issue Description": form.description,
            },
          }),
        }
      );

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setForm(emptyForm);
    } catch {
      setError(
        "Something went wrong. Please try again or call us directly at " +
          HOME_TECH_PHONE_DISPLAY
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition";

  return (
    <div className="min-h-screen bg-background">

      {/* ── Minimal header ────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-accent" />
            <span className="font-display font-bold text-foreground text-base">
              First-Choice Cyber
            </span>
          </Link>
          <a
            href={`tel:${HOME_TECH_PHONE_TEL}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <Phone className="h-4 w-4" />
            {HOME_TECH_PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="py-24 sm:py-32"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35" }}
            >
              <MapPin className="h-3 w-3" />
              Kern County &amp; Fresno · Mobile Service
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Home Tech Support &amp; Cybersecurity —{" "}
              <span style={{ color: "#FF6B35" }}>We Come to You</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              From WiFi dead zones to smart home setup to making sure your home
              network is actually secure — expert help that arrives at your front
              door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base shadow-lg transition-opacity hover:opacity-90"
                style={{ background: "#FF6B35" }}
              >
                Book a service call
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${HOME_TECH_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {HOME_TECH_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* ── Services grid ─────────────────────────────────────────────────── */}
        <section id="services" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                On-site services for homeowners and home office professionals.
                Every visit includes a security check — standard practice, not
                an add-on.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="group rounded-xl border border-border bg-background p-7 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div
                    className="inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 transition-colors"
                    style={{ background: "rgba(255,107,53,0.1)" }}
                  >
                    <svc.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-5">
                    {svc.description}
                  </p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: "#FF6B35" }}
                  >
                    Book this service
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why First-Choice Cyber ────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Why First-Choice Cyber?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Most home tech companies send a tech. We send a cybersecurity
                  professional who also happens to fix your WiFi.
                </p>
                <ul className="space-y-6">
                  {whyPoints.map((pt) => (
                    <li key={pt.title} className="flex items-start gap-4">
                      <div
                        className="shrink-0 p-2.5 rounded-lg"
                        style={{ background: "rgba(255,107,53,0.1)" }}
                      >
                        <pt.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {pt.title}
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          {pt.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating Book Now CTA */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="rounded-2xl p-10 text-center max-w-sm w-full border border-accent/20"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  }}
                >
                  <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    Book a service call or give us a ring. No obligation, no
                    pressure.
                  </p>
                  <a
                    href="#booking"
                    className="block w-full px-6 py-3.5 rounded-lg font-bold text-white text-sm mb-3 transition-opacity hover:opacity-90"
                    style={{ background: "#FF6B35" }}
                  >
                    Book now
                  </a>
                  <a
                    href={`tel:${HOME_TECH_PHONE_TEL}`}
                    className="block w-full px-6 py-3.5 rounded-lg font-bold text-white text-sm border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4 inline mr-2" />
                    {HOME_TECH_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What to expect ────────────────────────────────────────────────── */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                No surprises. No tech-speak. A clear process from booking to
                sign-off.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectSteps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-xl border border-border bg-background p-7"
                >
                  <div
                    className="font-display text-3xl font-bold mb-4"
                    style={{ color: "#FF6B35" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Booking form ──────────────────────────────────────────────────── */}
        <section id="booking" className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Book Your Service Call
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form and we'll confirm your appointment within one
                business day.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  We've got your request!
                </h3>
                <p className="text-muted-foreground">
                  We'll reach out within one business day to confirm your
                  appointment. If you need faster service, call us directly at{" "}
                  <a
                    href={`tel:${HOME_TECH_PHONE_TEL}`}
                    className="font-semibold text-accent"
                  >
                    {HOME_TECH_PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-card p-8 space-y-5 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Phone number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(661) 555-0100"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Email address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Service needed <span className="text-accent">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                    <option value="Not sure / other">Not sure / other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Preferred date &amp; time
                  </label>
                  <input
                    type="text"
                    name="datetime"
                    value={form.datetime}
                    onChange={handleChange}
                    placeholder="e.g. Weekday mornings, any Saturday, ASAP"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Brief description of the issue
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us what's going on — as much or as little detail as you have…"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 rounded-lg font-bold text-white text-base transition-opacity disabled:opacity-60"
                  style={{ background: "#FF6B35" }}
                >
                  {submitting ? "Sending…" : "Request my service call"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We'll confirm within one business day. For urgent requests,
                  call{" "}
                  <a
                    href={`tel:${HOME_TECH_PHONE_TEL}`}
                    className="text-accent font-semibold"
                  >
                    {HOME_TECH_PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </section>

        {/* ── Footer CTA strip ──────────────────────────────────────────────── */}
        <section
          className="py-16"
          style={{ background: "#FF6B35" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to secure and simplify your home tech?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's talk. No obligation — just straight answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-accent text-base bg-white shadow hover:shadow-md transition"
              >
                Book now
              </a>
              <a
                href={`tel:${HOME_TECH_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base border-2 border-white/60 hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {HOME_TECH_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-white/20">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Shield className="h-4 w-4" />
                ← Back to First-Choice Cyber main site
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
