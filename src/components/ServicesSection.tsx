import { RefreshCw, Database, Plug, ShieldCheck, Settings, FileSearch } from "lucide-react";
import RevenueCalculatorSection from "./RevenueCalculatorSection";
import GovernanceScorecardSection from "./GovernanceScorecardSection";

const track1 = [
  {
    icon: RefreshCw,
    title: "24/7 Customer Reactivation Engine",
    desc: "Automated recalls, birthday campaigns, maintenance alerts, slow-day promotions. SMS, email, and voice — reaching inactive customers automatically while you focus on serving customers.",
    result: "Recover lost revenue from inactive customers on autopilot.",
  },
  {
    icon: Database,
    title: "You Own Your Customer Data",
    desc: "Your customer list lives in your own database. You own it outright. Export anytime for lending applications, M&A valuation, or business operations. No vendor lock-in. Your data, your control.",
    result: "100% data ownership. Export anytime. No lock-in.",
  },
  {
    icon: Plug,
    title: "Done-For-You Implementation",
    desc: "We build the entire system for you — customer capture forms, SMS and email automations, campaign setup, and database architecture. Live in 2 weeks. Runs on autopilot.",
    result: "Live in 2 weeks. Zero ongoing management required.",
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
            Build Revenue. Own Your Data. Run on Autopilot.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two tracks built for business owners and enterprises. Start with reactivation revenue recovery — layer in AI governance when ready.
          </p>
        </div>

        {/* Track 1 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            Reactivation &amp; Revenue Recovery Systems
          </div>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            Stop chasing new leads. Start recovering the customers you already earned. Automated outreach, you own the data, and the system runs on autopilot.
          </p>
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

        {/* Track 2 — secondary / minimized */}
        <div className="mt-16 border border-border/60 rounded-xl p-8 bg-background/40 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            AI Governance &amp; Compliance (For Healthcare)
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Already running AI systems? We audit and govern for compliance. Dental and medical practices — HIPAA governance built into your reactivation system. Healthcare enterprises — full governance frameworks available.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {track2.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-background p-4 shadow-sm hover:shadow-card transition-all duration-300 opacity-0 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <s.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
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
