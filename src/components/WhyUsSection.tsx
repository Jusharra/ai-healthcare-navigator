import { Wrench, Stethoscope, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "We Build AND Govern AI",
    desc: "Most governance consultants advise—they don't build. We deploy operational AI systems AND govern them with ISO 42001 frameworks. We understand both sides because we operate on both sides.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare-Specific Expertise",
    desc: "We specialize exclusively in healthcare. We understand HIPAA compliance, clinical workflows, EHR integrations (Dentrix, Epic, Athenahealth), and regulatory requirements that generic AI agencies simply don't.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 42001 + ISO 27001 Certified",
    desc: "Not just consultants with a framework—engineers with certifications. Your AI is compliant from day one with audit-ready documentation and proven security controls.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why First Choice Cyber
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Operational vendors can't govern. Governance consultants can't build. We do both.
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
      </div>
    </section>
  );
};

export default WhyUsSection;
