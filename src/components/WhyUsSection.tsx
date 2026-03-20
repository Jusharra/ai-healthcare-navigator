import { HeartPulse, Wrench, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: HeartPulse,
    title: "Healthcare-Specific Systems",
    desc: "Built for dental offices, medical clinics, and health insurance plans. Every system is HIPAA-compliant from day one, with patient data ownership and audit trails built in.",
  },
  {
    icon: Wrench,
    title: "We Build AND Govern",
    desc: "Most vendors advise or build. We do both. We deploy the patient recall system and govern it with ISO 42001 and HIPAA frameworks — so you're covered operationally and for compliance.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 42001 + ISO 27001 Certified",
    desc: "Not just consultants with a framework — engineers with certifications. HIPAA-ready documentation included. Your practice is audit-ready from day one.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why First-Choice Cyber
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just consult — we build HIPAA-compliant patient growth systems and govern them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5">
                <r.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/#audit-offers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base shadow-lg transition-colors"
            style={{ background: "#FF6B35" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e55a28"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35"; }}
          >
            Book Your Patient Growth Audit →
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Schedule Your Patient Growth Audit for $997 · Credited toward full implementation
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
