import { TrendingUp, PhoneCall, Phone, CalendarCheck, DollarSign, Shield } from "lucide-react";

interface CaseStudy {
  icon: React.ElementType;
  org: string;
  type: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: { text: string; attribution?: string };
  application?: string[];
}

const studies: CaseStudy[] = [
  {
    icon: TrendingUp,
    org: "Phoebe Physician Group",
    type: "Primary Care • 41-County Rural Service Area",
    challenge:
      "12% no-show rate—more than double the national average of 5%. Rural patient population where missing appointments had become culturally acceptable. Traditional reminders helped but didn't solve the problem.",
    solution:
      "Deployed AI scheduling and no-show prediction system. Machine learning analyzes patient visit data to predict no-show probability and automatically creates adjacent appointment slots for high-risk appointments.",
    results: [
      "168 additional encounters per week (average increase)",
      "7,800 additional annual encounters",
      "$1.4 million in net patient revenue generated from Jan 2023 to Feb 2024",
    ],
    application: [
      "Improved patient access monitoring (utilization, no-show volumes, completed visits)",
      "Enhanced referral management (leakage/keepage rates, competitor volumes)",
      "Better provider productivity (work RVUs, visit types, E&M coding)",
    ],
  },
  {
    icon: PhoneCall,
    org: "Multi-Location Orthopedic Practice",
    type: "40+ Clinicians • 6 Locations",
    challenge:
      "Hold times averaging 11 minutes during peak periods. Patients frustrated with wait times. Staff overwhelmed managing calls across multiple locations and specialties. Complex scheduling requirements.",
    solution:
      "Deployed voice AI scheduling system that navigates complex scheduling algorithms across 40+ clinicians, handles 6 specialties with location-specific routing, and integrates with EHR for real-time availability.",
    results: [
      "Hold times reduced from 11 min to 1 min (91% reduction)",
      "More accurate appointments (right provider, location, specialty)",
      "Operational efficiency equivalent to half the team's capacity",
      "Meaningful gains in patient satisfaction and revenue",
    ],
    quote: {
      text: "Voice AI isn't just automation—it's about performance. In just 30 days, we cut hold times from 11 minutes to 1 minute and booked more accurate appointments with operational efficiency.",
    },
  },
  {
    icon: Phone,
    org: "Orthopedic Surgery Center",
    type: "Joint Replacements & Sports Medicine",
    challenge:
      "Call center stretched thin. Patients faced long wait times before reaching scheduling staff. High call abandonment rates creating patient frustration. Scheduling team stressed trying to keep up with demand.",
    solution:
      "Implemented AI voice system that handles over 50% of call volume. Provides immediate attention for orthopedic patients calling in. Human staff steps in only where truly needed for complex cases.",
    results: [
      "57% reduction in call abandonment rates",
      "Orthopedic patients greeted with immediate attention",
      "More positive patient journey",
      "Staff able to focus on higher-value interactions",
    ],
    quote: {
      text: "By integrating AI, we experienced a 57% reduction in call abandonment rates—our staff can focus on higher-value interactions while the AI efficiently manages everyday inquiries.",
    },
  },
  {
    icon: CalendarCheck,
    org: "Total Health Care",
    type: "Primary Care Practice",
    challenge:
      "High no-show rates (industry average 18.8% for outpatient). Patients with 80%+ no-show probability completing only 11% of appointments. Lost revenue from empty slots. Schedule unpredictability affecting provider productivity.",
    solution:
      "Deployed AI-driven scheduling with no-show risk prediction. Predictor model identifies patients with 80%+ no-show probability. Automated interventions for high-risk appointments.",
    results: [
      "Completion rates jumped from 11% to 36% (227% increase)",
      "Transformed schedule productivity",
      "More predictable provider schedules",
    ],
    quote: {
      text: "The predictor model shows us the probability of patients that are likely to be a no-show. By focusing on those patients at an 80% probability and higher, we've transformed our schedule productivity.",
      attribution: "Howard Shpritz, Revenue Cycle Manager",
    },
  },
  {
    icon: DollarSign,
    org: "Regional Orthopedic Group",
    type: "Multi-Location Specialty Practice",
    challenge:
      "Missing payments from payers due to billing errors, authorization gaps, and underpayments. Manual audits to identify payment discrepancies took months. Revenue leakage from undetected payer issues.",
    solution:
      "Deployed predictive analytics to identify patterns in payer behavior. AI system flags underpayments and authorization issues. Real-time detection of billing discrepancies with automated recovery workflows.",
    results: [
      "Recovered $250K+ in missed payments in one year",
      "Real-time payer discrepancy detection (previously took months)",
      "Prevented future revenue leakage through pattern identification",
    ],
    application: [
      "Demonstrates revenue cycle management capabilities",
      "Predictive analytics for multi-location specialty practices",
    ],
  },
  {
    icon: Shield,
    org: "Health Insurance Organization",
    type: "Special Investigations Unit",
    challenge:
      "Fraud, waste, and abuse in provider payments. Manual review team could only review limited data. Traditional rule-based methods slow to detect changing fraud patterns.",
    solution:
      "Deployed AI fraud detection alongside human audit team. AI reviews massive data volumes that the human team cannot process. Machine learning identifies changing behaviors sooner than traditional methods.",
    results: [
      "$260 million in savings from fraud, waste & abuse (2019)",
      "Earlier detection of unusual patterns and fraud schemes",
      "Became competitive advantage for insurer's sales team",
      "Advanced techniques lower member costs",
    ],
    application: [
      "Enterprise-scale AI governance and claims processing",
      "Track 2 ICP validation for health insurance companies",
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results for Real Practices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable ROI across revenue recovery, scheduling optimization, and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((s, idx) => (
            <div
              key={s.org}
              className="rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up group"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <s.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{s.org}</h3>
                  <p className="text-sm text-muted-foreground">{s.type}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Challenge:</span> {s.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Solution:</span> {s.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Results:</p>
                <div className="space-y-1.5">
                  {s.results.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {s.quote && (
                <blockquote className="border-l-2 border-primary/30 pl-4 mb-4">
                  <p className="text-sm italic text-muted-foreground">"{s.quote.text}"</p>
                  {s.quote.attribution && (
                    <cite className="text-xs text-muted-foreground mt-1 block not-italic">
                      — {s.quote.attribution}
                    </cite>
                  )}
                </blockquote>
              )}

              {/* Application / Impact */}
              {s.application && (
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Impact
                  </p>
                  <div className="space-y-1">
                    {s.application.map((a) => (
                      <p key={a} className="text-xs text-muted-foreground">{a}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
