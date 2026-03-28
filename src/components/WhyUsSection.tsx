import { Building2, HeartPulse, Landmark } from "lucide-react";

const buyers = [
  {
    icon: Building2,
    tag: "Mid-Market Enterprise",
    title: "Mid-Market Companies Deploying AI Without a Governance Function",
    desc: "Companies with 100–5,000 employees can't justify a full-time Chief AI Officer or AI governance team — but ISO 42001 requires an accountable person. We fill that role as your External Head of Governance & Assurance: fractional, fixed-scope, and fully accountable. We build the system, then either hand it off to your team or manage it on retainer.",
  },
  {
    icon: HeartPulse,
    tag: "Healthcare",
    title: "Healthcare Organizations Navigating AI",
    desc: "Healthcare is deploying AI in clinical decision support, patient scheduling, billing automation, and diagnostic imaging — and every use case has HIPAA implications that intersect with AI governance. Most compliance officers understand HIPAA but have no framework for AI-specific risks: model drift, bias in clinical algorithms, prompt injection in patient-facing chatbots. We bridge that gap.",
  },
  {
    icon: Landmark,
    tag: "Government & Contractors",
    title: "Government Agencies and Contractors Who Must Prove AI Compliance",
    desc: "GSA's proposed contract clause now requires contractors to report AI incidents within 72 hours and document compliance with risk, transparency, and privacy controls. Agencies require NIST AI RMF alignment — identifying and mitigating AI risks, ensuring explainability, and implementing continuous monitoring. Federal and state agencies, and any company that sells to them, now need to prove AI governance capability. First Choice Cyber + SAM.gov registration makes that possible.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why First-Choice Cyber
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We serve three buyer segments each with a distinct AI governance problem we're built to solve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {buyers.map((b, idx) => (
            <div
              key={b.tag}
              className="rounded-xl border border-border bg-background p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up flex flex-col gap-4"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0">
                  <b.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{b.tag}</span>
              </div>
              <h3 className="font-display text-base font-bold text-foreground leading-snug">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="/#audit-offers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base shadow-lg transition-colors"
            style={{ background: "#FF6B35" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e55a28"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35"; }}
          >
            Book Your Customer Growth Audit →
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Schedule Your Customer Growth Audit for $997 · Credited toward full implementation
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
