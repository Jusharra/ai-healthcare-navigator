import { Workflow, CalendarX2, BarChart3, ShieldCheck, Settings, FileSearch } from "lucide-react";
import RevenueCalculatorSection from "./RevenueCalculatorSection";
import GovernanceScorecardSection from "./GovernanceScorecardSection";

const track1 = [
  {
    icon: Workflow,
    title: "Workflow Automation & Intelligent Response",
    desc: "AI-powered systems that handle scheduling, intake, and customer response — available 24/7, compliant by design, integrated with your existing operational tools.",
    result: "Reduce response times by 90% and capture revenue lost to delays.",
  },
  {
    icon: CalendarX2,
    title: "Predictive Operations & Scheduling Optimization",
    desc: "Machine learning models that forecast demand, optimize resource allocation, and trigger proactive interventions before problems become losses.",
    result: "35–45% reduction in scheduling gaps. Recover $90K–$150K annually.",
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence & Scalability",
    desc: "Enterprise analytics, performance dashboards, and infrastructure that scales across multiple locations — with strategic advisory to drive continuous improvement.",
    result: "$50K–$135K annual cost avoidance without adding headcount.",
  },
];

const track2 = [
  {
    icon: FileSearch,
    title: "AI Risk & Governance Diagnostic",
    desc: "Comprehensive AI usage audit, regulatory compliance gap analysis, ISO 42001 assessment, and board-ready remediation roadmap.",
  },
  {
    icon: Settings,
    title: "Governance System Design & Implementation",
    desc: "AI governance operating model, policy frameworks, control mapping, evidence pipelines, and executive dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Assurance",
    desc: "Quarterly board reporting, ongoing policy maintenance, vendor management, and incident response.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Engineering Governance, Not Just Advising It
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two integrated tracks — operational AI systems and enterprise governance — delivered by engineers, not just consultants.
          </p>
        </div>

        {/* Track 1 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            Track 1: Operational AI Systems
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {track1.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-background p-6 shadow-card hover:shadow-card-hover hover:scale-105 hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <s.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
            Track 2: Enterprise AI Governance
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {track2.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-background p-6 shadow-card hover:shadow-card-hover hover:scale-105 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <s.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
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
