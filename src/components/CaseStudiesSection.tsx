import { TrendingUp, PhoneCall, CalendarCheck, DollarSign } from "lucide-react";

const studies = [
  {
    icon: TrendingUp,
    org: "Phoebe Physician Group",
    type: "Primary Care • 41-County Service Area",
    challenge: "12% no-show rate—more than double the national average in a rural population.",
    results: [
      "168 additional encounters per week",
      "7,800 additional annual encounters",
      "$1.4M net patient revenue generated in 14 months",
    ],
  },
  {
    icon: PhoneCall,
    org: "Multi-Location Orthopedic Practice",
    type: "40+ Clinicians • 6 Locations",
    challenge: "Hold times averaging 11 minutes during peak periods across 6 specialties.",
    results: [
      "Hold times cut from 11 min to 1 min (91% reduction)",
      "More accurate provider-specialty-location matching",
      "Operational efficiency equal to half the team's capacity",
    ],
  },
  {
    icon: CalendarCheck,
    org: "Total Health Care",
    type: "Primary Care Practice",
    challenge: "High-risk patients (80%+ no-show probability) completing only 11% of appointments.",
    results: [
      "Completion rates jumped from 11% to 36% (227% increase)",
      "Transformed schedule productivity",
      "More predictable provider schedules",
    ],
  },
  {
    icon: DollarSign,
    org: "Regional Orthopedic Group",
    type: "Multi-Location Specialty Practice",
    challenge: "Missing payments from billing errors, authorization gaps, and underpayments.",
    results: [
      "Recovered $250K+ in missed payments in one year",
      "Real-time payer discrepancy detection",
      "Prevented future revenue leakage through pattern ID",
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results for Real Practices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable ROI across revenue recovery, scheduling optimization, and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((s) => (
            <div
              key={s.org}
              className="rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{s.org}</h3>
                  <p className="text-sm text-muted-foreground">{s.type}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 text-sm">
                <span className="font-semibold text-foreground">Challenge:</span> {s.challenge}
              </p>

              <div className="space-y-2">
                {s.results.map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
