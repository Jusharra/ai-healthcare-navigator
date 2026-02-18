import { Building, Building2, Hospital } from "lucide-react";

const segments = [
  {
    icon: Building,
    title: "Small-Mid Healthcare Practices",
    desc: "3–10 providers, 1–2 locations",
    revenue: "$1M–$10M annual revenue",
    need: "Operational AI that captures revenue and improves patient access",
    examples: "Dental, primary care, specialty clinics",
  },
  {
    icon: Building2,
    title: "Multi-Location Practice Groups",
    desc: "10–40 providers, 3–8 locations",
    revenue: "$5M–$50M annual revenue",
    need: "Operational AI + governance maturity + scalability",
    examples: "Growing practices, DSOs, regional groups",
  },
  {
    icon: Hospital,
    title: "Healthcare Enterprises",
    desc: "50+ providers, health systems, PE-backed",
    revenue: "$50M–$500M+ annual revenue",
    need: "Enterprise AI governance, regulatory compliance, board-level assurance",
    examples: "Health systems, PE-backed organizations",
  },
];

const WhoWeServeSection = () => {
  return (
    <section id="who-we-serve" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built solutions for every stage of healthcare growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {segments.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-8 shadow-card text-center hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="space-y-2 text-sm text-left">
                <div>
                  <span className="font-semibold text-foreground">Revenue: </span>
                  <span className="text-muted-foreground">{s.revenue}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Need: </span>
                  <span className="text-muted-foreground">{s.need}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Examples: </span>
                  <span className="text-muted-foreground">{s.examples}</span>
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
