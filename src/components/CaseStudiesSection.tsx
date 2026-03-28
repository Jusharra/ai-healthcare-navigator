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
    emoji: "🏛️",
    org: "Meridian Federal Solutions",
    type: "Federal IT Services Contractor • 450 Employees",
    challenge:
      "A proposed GSA contract clause required AI incident reporting within 72 hours and documented compliance with risk, transparency, and privacy controls. No AI system inventory existed, no governance framework was in place, and no evidence pipeline had been built. The firm risked losing an $8M contract vehicle at renewal.",
    solution:
      "Built an AI governance infrastructure aligned to NIST AI RMF and ISO 42001. Completed a full AI system inventory across all active contract vehicles. Deployed automated evidence collection for continuous compliance documentation. Implemented a 72-hour incident response playbook with designated AI System Owners across business units.",
    results: [
      "Contract vehicle retained at renewal",
      "Full AI system inventory documented across 6 active contracts",
      "72-hour incident response capability deployed",
      "ISO 42001 gap assessment completed and remediated",
    ],
    impact:
      "Firm can now respond to contracting officer AI compliance inquiries within 24 hours. Governance posture documented and reusable for new contract bids.",
    quote:
      "We had 60 days to demonstrate AI governance capability or risk losing the contract. They built the system we needed.",
  },
  {
    emoji: "🏢",
    org: "Tri-County Regional Planning Commission",
    type: "State Government Agency • AI in Public Operations",
    challenge:
      "Deployed AI tools for permit processing and infrastructure prioritization. State legislature passed new AI transparency requirements. No documentation of how models made decisions, no bias assessments, and no audit trail for AI-assisted determinations. Facing public records requests for AI decision logs that did not exist.",
    solution:
      "Deployed an AI governance framework aligned to NIST AI RMF. Built model documentation, explainability reports, and a bias assessment pipeline. Created audit-ready AI decision logs and a real-time risk register. Implemented governance dashboards for agency leadership.",
    results: [
      "Full compliance with state AI transparency requirements",
      "All AI decision systems documented and risk-rated",
      "3 public records requests fulfilled with complete documentation",
      "Zero regulatory findings at legislative review",
    ],
    impact:
      "Agency leadership now has a real-time dashboard of AI risk posture. Governance documentation is defensible in public hearings and legislative inquiries.",
    quote:
      "We had no idea what our exposure was until they mapped every system. Now we can answer any question about our AI in under an hour.",
  },
  {
    emoji: "⚙️",
    org: "NorthStar Software Group",
    type: "Mid-Market SaaS Company • 600 Employees",
    challenge:
      "Deployed AI features across their product suite — recommendation engines, customer-facing chatbots, and automated decision tools — with no governance framework around any of it. Enterprise procurement teams began requiring ISO 42001 alignment in vendor questionnaires. Deals were stalling. The board requested an AI risk briefing and no documentation existed.",
    solution:
      "Built an ISO 42001-aligned AI governance operating model. Completed a full AI system inventory across all product lines. Named AI System Owners for each feature in production. Deployed automated evidence collection and a board-ready AI risk dashboard.",
    results: [
      "ISO 42001 readiness assessment completed in 6 weeks",
      "AI inventory documented across 12 product features",
      "Board AI risk briefing delivered with full governance posture",
      "3 enterprise procurement questionnaires fulfilled with documented evidence",
    ],
    impact:
      "Sales team now uses AI governance documentation as a competitive differentiator in enterprise deals. Board has continuous visibility into AI risk posture.",
    quote:
      "Enterprise deals were stalling on AI governance questions we couldn't answer. Now we close faster.",
  },
  {
    emoji: "🛡️",
    org: "Irongate Defense Systems",
    type: "Defense Contractor • CMMC Level 2 Certified",
    challenge:
      "DoD program office required NIST AI RMF alignment for an AI-enabled analytics platform integrated into contract deliverables. No existing AI governance documentation. The program manager faced a contract modification requiring demonstrated AI risk management capability within 90 days or risk of default.",
    solution:
      "Deployed a NIST AI RMF-aligned governance framework scoped to AI systems on the contract. Completed a structured AI risk assessment for the analytics platform. Built an automated evidence pipeline. Produced a full contractor-deliverable governance documentation package.",
    results: [
      "NIST AI RMF alignment documented within 90 days",
      "Contract modification requirement met before deadline",
      "AI risk assessment package delivered to DoD program office",
      "Ongoing evidence collection automated for future reviews",
    ],
    impact:
      "Contractor now has reusable AI governance artifacts applicable to future DoD and federal engagements. Program manager has a documented risk posture defensible in program reviews.",
    quote:
      "The DoD wanted AI governance capability we'd never had to prove before. They built it — on time.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="industry-challenges" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results Across Healthcare, Construction, Government, Oil & Gas &amp; Energy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable outcomes in patient reactivation, AI governance deployment, and compliance documentation across the three verticals we serve.
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
            Get Results Like These — Book a Discovery Call →
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Healthcare · Government &amp; Contractors · Mid-Market Enterprise · No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
