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
      "Deployed automated patient reactivation system. SMS and email campaigns target patients at 6, 12, and 18-month intervals. Birthday campaigns and slow-day promotions fill schedule gaps. All patient data stored in a practice-owned database.",
    results: [
      "147 inactive patients reactivated in 90 days",
      "Hygiene schedule gaps reduced by 34%",
      "$47,000 in recovered revenue (Q1)",
      "Front desk freed from manual recall calls",
    ],
    impact:
      "Improved patient retention tracking. Practice now owns complete patient database with exportable data for valuation and lending.",
  },
  {
    emoji: "🍽️",
    org: "Local Kitchen & Bar",
    type: "Casual Dining • 85 Seats",
    challenge:
      "Strong initial foot traffic but poor repeat visit rates. No system to capture customer contact info. Slow Tuesday and Wednesday nights hurting weekly revenue. Staff had no time for manual outreach.",
    solution:
      "Implemented customer capture form (website + QR at table). Automated reactivation campaigns for customers not seen in 30+ days. Slow-day SMS promotions sent every Tuesday. Birthday offers with 72-hour redemption window.",
    results: [
      "412 customers captured in database (60 days)",
      "23% redemption rate on slow-day offers",
      "Tuesday revenue up 31%",
      "Repeat visit rate increased from 22% to 38%",
    ],
    impact:
      "Restaurant now owns customer list outright. Data exportable for future marketing, valuation, or franchise expansion.",
    quote:
      "We used to just hope customers came back. Now we have a system that brings them back automatically.",
  },
  {
    emoji: "🧺",
    org: "CleanSpin Laundry",
    type: "Self-Service Laundromat • 42 Machines",
    challenge:
      "High foot traffic but no way to capture customer info. Couldn't communicate with customers between visits. No system for promotions or loyalty. Competing laundromats nearby with newer equipment.",
    solution:
      "Deployed QR code capture system at machines and entrance. Automated SMS for first-time visitors with welcome offer. Maintenance alerts and slow-day promos for mid-week traffic.",
    results: [
      "287 customers captured in 45 days",
      "19% redemption on welcome offer",
      "26% increase in mid-week visits",
      "Customer database now owned by operator",
    ],
    impact:
      "Owner now has a direct communication channel with customers. Database adds value to business valuation for future sale or lending.",
  },
  {
    emoji: "🔧",
    org: "Main Street Auto Service",
    type: "Full-Service Auto Repair • 4 Bays",
    challenge:
      "Customers only came in when something broke. No system to remind them of scheduled maintenance (oil changes, tire rotations, inspections). Lost revenue to quick-lube chains. No customer database.",
    solution:
      "Built customer database from existing service records. Automated maintenance reminders at 3, 6, and 12-month intervals based on service history. Birthday discounts. Seasonal campaigns (winter prep, AC check).",
    results: [
      "312 customers added to automated reminder system",
      "41% increase in scheduled maintenance appointments",
      "$8,200 additional monthly revenue (avg)",
      "67% of reminded customers booked within 7 days",
    ],
    impact:
      "Shop now competes with chains on convenience. Customer database owned outright — exportable for valuation or sale.",
    quote:
      "We stopped losing customers to the quick-lube places. Now they come back because we remind them — automatically.",
  },
  {
    emoji: "🏥",
    org: "Valley Health Urgent Care",
    type: "Walk-In Clinic • 2 Locations",
    challenge:
      "18% no-show rate for scheduled appointments. Patients with high no-show probability completing only 11% of visits. Lost revenue from empty slots. No automated follow-up for missed appointments.",
    solution:
      "Deployed automated scheduling with no-show risk prediction. Automated reminders at 7 days, 3 days, and 1 hour before appointment. Reactivation campaigns for patients not seen in 6+ months. All data stored in clinic-owned system.",
    results: [
      "No-show rate reduced from 18% to 7%",
      "89 patients reactivated in 60 days",
      "$34,000 recovered revenue (Q1)",
      "Staff freed from manual reminder calls",
    ],
    impact:
      "Improved schedule predictability. Clinic now has patient database with full ownership — exportable for compliance reporting, valuation, or lending.",
    quote: "We cut our no-show rate in half. The system pays for itself every month.",
  },
  {
    emoji: "❄️",
    org: "Comfort Pro HVAC",
    type: "Residential HVAC • 3 Technicians",
    challenge:
      "Seasonal business with slow months. No system to remind customers of annual maintenance. Losing recurring revenue to competitors who followed up. Customer info scattered across invoices.",
    solution:
      "Consolidated customer database and automated seasonal maintenance reminders (spring AC check, fall heating tune-up). Birthday offers. Referral program with automated follow-up.",
    results: [
      "178 customers added to reminder system",
      "52% increase in scheduled maintenance calls",
      "Slow-season revenue up 28%",
      "3x increase in customer referrals",
    ],
    impact:
      "Business now has a predictable recurring revenue stream. Customer database adds tangible value to business valuation.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="industry-challenges" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable ROI across customer reactivation, no-show reduction, and revenue recovery.
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
            Get Results Like These — Book Your Revenue Recovery Audit →
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Get Your Revenue Recovery Audit for$997 · No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
