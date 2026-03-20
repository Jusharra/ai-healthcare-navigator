interface CaseStudy {
  emoji: string;
  org: string;
  type: string;
  challenge: string;
  solution: string;
  results: string[];
  impact: string;
  quote?: string;
}

const studies: CaseStudy[] = [
  {
    emoji: "🦷",
    org: "Valley Dental Group",
    type: "General Dentistry • 3 Providers",
    challenge:
      "22% of patients were inactive (no visit in 18+ months). Front desk was overwhelmed with manual recall outreach. Hygiene schedule had consistent gaps. No system to track lapsed patients or automate follow-up.",
    solution:
      "Deployed automated patient recall system. SMS and email campaigns target patients at 6, 12, and 18-month intervals. Birthday campaigns and slow-day promotions fill schedule gaps. All patient data stored in a practice-owned HIPAA-compliant database.",
    results: [
      "147 inactive patients reactivated in 90 days",
      "Hygiene schedule gaps reduced by 34%",
      "$47,000 in recovered revenue (Q1)",
      "Front desk freed from manual recall calls",
    ],
    impact:
      "Improved patient retention tracking. Practice now owns complete patient database with exportable data for valuation and compliance reporting.",
  },
  {
    emoji: "🏥",
    org: "Valley Health Urgent Care",
    type: "Walk-In Clinic • 2 Locations",
    challenge:
      "18% no-show rate for scheduled appointments. Lost revenue from empty slots. No automated follow-up for missed appointments or lapsed patients not seen in 6+ months.",
    solution:
      "Deployed automated appointment reminders at 7 days, 3 days, and 1 hour before each visit. Reactivation campaigns for patients not seen in 6+ months. All data stored in a clinic-owned HIPAA-compliant database.",
    results: [
      "No-show rate reduced from 18% to 7%",
      "89 patients reactivated in 60 days",
      "$34,000 recovered revenue (Q1)",
      "Staff freed from manual reminder calls",
    ],
    impact:
      "Improved schedule predictability. Clinic now has full patient database ownership — exportable for compliance reporting, valuation, or lending.",
    quote: "We cut our no-show rate in half. The system pays for itself every month.",
  },
  {
    emoji: "🩺",
    org: "Riverside Family Medicine",
    type: "Primary Care Practice • 4 Providers",
    challenge:
      "Patients not returning for annual wellness exams. Appointment slots consistently empty on certain days. No automated system to follow up after visits or remind patients about annual checkups. Front desk manually calling patients with low success rate.",
    solution:
      "Deployed automated patient recall targeting patients overdue for annual visits at 10, 12, and 14-month intervals. Appointment reminders at 48 hours and 2 hours before each visit. All patient data stored in practice-owned HIPAA-compliant database.",
    results: [
      "94 lapsed patients reactivated in 60 days",
      "No-show rate reduced from 21% to 9%",
      "$31,000 in recovered revenue (Q1)",
      "Front desk freed from manual reminder calls",
    ],
    impact:
      "Practice now has full visibility into patient retention. Patient database owned by the practice — exportable for compliance reporting, valuation, or lending.",
    quote:
      "Patients who hadn't been in for years started booking again. The system did what our front desk never had time to do.",
  },
  {
    emoji: "🏢",
    org: "Central Valley Health Plan",
    type: "Regional Health Insurance • 12,000 Members",
    challenge:
      "Low preventive care utilization impacting quality scores and HEDIS compliance. Members not completing annual wellness visits, screenings, or chronic condition follow-ups. No automated outreach for preventive care gaps.",
    solution:
      "Deployed automated member re-engagement campaigns targeting identified care gaps. SMS and email outreach for wellness visits, screenings, and chronic condition follow-ups tied to member-specific intervals. All member data stored in plan-owned database with full audit trail.",
    results: [
      "HEDIS preventive care rates improved by 18%",
      "1,240 members re-engaged in preventive care (Q2)",
      "Reduced compliance risk exposure",
      "Member outreach automated across all care gap categories",
    ],
    impact:
      "Plan now has documented outreach records for compliance audits. Member engagement data owned by the plan — not locked in a vendor platform.",
    quote:
      "We went from reactive to proactive on member engagement. Our quality scores improved in a single quarter.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="industry-challenges" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results for Healthcare Practices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable ROI across patient reactivation, no-show reduction, and revenue recovery for dental, medical, and health insurance organizations.
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
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300 text-xl">
                  {s.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{s.org}</h3>
                  <p className="text-sm text-muted-foreground">{s.type}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Challenge: </span>
                  {s.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Solution: </span>
                  {s.solution}
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
                  <p className="text-sm italic text-muted-foreground">"{s.quote}"</p>
                </blockquote>
              )}

              {/* Impact */}
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Impact
                </p>
                <p className="text-xs text-muted-foreground">{s.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="/#audit-offers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base shadow-lg transition-colors"
            style={{ background: "#FF6B35" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e55a28"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35"; }}
          >
            Get Results Like These — Book Your Patient Growth Audit →
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Patient Growth Audit · $997 credited toward full implementation · No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
