import { HeartPulse, HardHat, Zap } from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Practices, health systems, PE-backed groups navigating HIPAA + AI governance",
    examples: "Dental, primary care, specialty clinics, health systems, PE-backed organizations",
    frameworks: "HIPAA, ISO 42001, ISO 27001, HiTrust",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    desc: "General contractors, owners, and project controls teams managing safety, scheduling, and compliance",
    examples: "GCs, subcontractors, infrastructure owners, project controls firms",
    frameworks: "OSHA, ISO 45001, contractual compliance requirements",
  },
  {
    icon: Zap,
    title: "Energy & Industrial",
    desc: "O&G operators, utilities, and industrial firms with OT/SCADA environments and regulatory burden",
    examples: "Oil & gas operators, utilities, manufacturers, industrial firms",
    frameworks: "EPA, OSHA, API standards, NERC CIP, IEC 62443",
  },
];

const WhoWeServeSection = () => {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Same methodology. Industry-specific expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="rounded-xl border border-border bg-card p-8 shadow-card text-center hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <ind.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{ind.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{ind.desc}</p>
              <div className="space-y-2 text-sm text-left">
                <div>
                  <span className="font-semibold text-foreground">Examples: </span>
                  <span className="text-muted-foreground">{ind.examples}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Frameworks: </span>
                  <span className="text-muted-foreground">{ind.frameworks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
