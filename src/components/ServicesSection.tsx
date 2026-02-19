import { Phone, CalendarX2, BarChart3, ShieldCheck, Settings, FileSearch } from "lucide-react";
import RevenueCalculatorSection from "./RevenueCalculatorSection";
import GovernanceScorecardSection from "./GovernanceScorecardSection";

const track1 = [
  {
    icon: Phone,
    title: "Revenue Capture & Instant Response",
    desc: "24/7 HIPAA-compliant voice AI receptionist with zero-hold-time management, insurance verification, and direct EHR integration.",
    result: "Capture $100K–$150K in previously-lost revenue annually.",
  },
  {
    icon: CalendarX2,
    title: "No-Show Prevention & Schedule Optimization",
    desc: "AI-powered no-show risk prediction (86% accuracy), automated multi-channel reminders, and waitlist slot-fill system.",
    result: "45% reduction in no-show rates. Recover $90K–$125K annually.",
  },
  {
    icon: BarChart3,
    title: "Operational Excellence & Competitive Advantage",
    desc: "Enterprise call analytics, scalability infrastructure, and multi-location readiness with strategic advisory.",
    result: "$55K–$135K annual cost avoidance without new hires.",
  },
];

const track2 = [
  {
    icon: FileSearch,
    title: "AI Risk & Governance Diagnostic",
    desc: "Comprehensive AI usage audit, HIPAA AI compliance gap analysis, ISO 42001 assessment, and board-ready remediation roadmap.",
  },
  {
    icon: Settings,
    title: "Governance System Design & Implementation",
    desc: "AI governance operating model, policy frameworks, control mapping, evidence pipelines, and executive dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous AI Assurance Retainer",
    desc: "External Head of AI Governance—quarterly board reporting, ongoing policy maintenance, vendor management, and incident response.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete AI Systems, Not Standalone Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two integrated tracks designed for healthcare practices and enterprises.
          </p>
        </div>

        {/* Track 1 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8">
            Track 1: Revenue Recovery Platform
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {track1.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-background p-6 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <p className="text-sm font-semibold text-accent">{s.result}</p>
              </div>
            ))}
          </div>

          {/* Track 1 Lead Magnet */}
          <RevenueCalculatorSection />
        </div>

        {/* Track 2 */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
            Track 2: Enterprise AI Governance
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {track2.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-background p-6 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Track 2 Lead Magnet */}
          <GovernanceScorecardSection />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
