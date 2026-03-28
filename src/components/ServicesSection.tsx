import { RefreshCw, Database, Plug, ShieldCheck, Settings, FileSearch, Check, ExternalLink, Shield, ScanLine, Cloud, HeartPulse, BookOpen, Compass, AlertTriangle, FileX, Users } from "lucide-react";
import { Link } from "react-router-dom";
import RevenueCalculatorSection from "./RevenueCalculatorSection";
import GovernanceScorecardSection from "./GovernanceScorecardSection";

const track1 = [
  {
    icon: RefreshCw,
    title: "24/7 Customer Recall Engine",
    desc: "Automated recall campaigns at 6, 12, and 18-month intervals. Birthday reminders, slow-day promotions, and missed-appointment follow-ups. SMS and email, running while your staff focuses on customer care.",
    result: "Recover lapsed customers and fill empty slots on autopilot.",
  },
  {
    icon: Database,
    title: "Compliant Customer Database",
    desc: "Your customer list lives in your own compliant database. You own it outright, with an audit trail built in. Export anytime for lending applications, M&A valuation, or compliance reporting. No vendor lock-in.",
    result: "100% data ownership. Audit trail included. HIPAA-ready.",
  },
  {
    icon: Plug,
    title: "Done-For-You Implementation",
    desc: "We build the entire system for you, including intake forms, SMS and email automations, compliant database, and campaign setup. Live in 2 weeks. Runs on autopilot.",
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
            Grow Your Practice. Own Your Customer Data. Run on Autopilot.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two tracks built for practices and enterprises. Start with customer reactivation, then layer in AI governance when ready.
          </p>
        </div>

        {/* Track 1 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            Customer Reactivation &amp; Growth Systems
          </div>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            Stop paying for new customer ads when your existing customers aren't coming back. Automated recall, including HIPAA-compliant, and the system runs on autopilot.
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

        {/* AI Governance Pain Points */}
        <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              The AI Governance Gap Is Real And It's Getting Harder to Ignore
            </h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Three compounding problems every organization deploying AI is facing right now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0">
                <AlertTriangle className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-display font-bold text-foreground leading-snug">
                Organizations Are Deploying AI With No Governance Infrastructure
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most organizations adopted AI fast Copilot, ChatGPT, Salesforce Einstein, custom models, but built no management system around any of it. 83% of Fortune 500 procurement teams plan to require ISO 42001 alignment from vendors by 2027. The top two barriers to deploying generative AI are regulatory compliance worries (38%, up 10% YoY) and difficulty managing risk (32%, up 6%). Texas TRAIGA and the Colorado AI Act which explicitly recognizes ISO 42001 adherence as a safe harbor mean state-level legal exposure is already here.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0">
                <FileX className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-display font-bold text-foreground leading-snug">
                Compliance Programs Produce Documents And Not Working Systems
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most GRC consultants deliver a PDF, a policy manual that sits in a SharePoint folder. Nobody reads it. Nobody enforces it. When auditors arrive, organizations scramble to produce evidence that was never collected because the controls were never operationalized. ISO 42001 directly addresses unclear accountability, inconsistent risk assessments, and weak lifecycle management. The gap between "we have a policy" and "we have a working system" is where organizations get fined, lose contracts, and suffer breaches.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-display font-bold text-foreground leading-snug">
                Security Teams and AI Engineering Teams Don't Talk to Each Other
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading organizations use a federated model: risk and compliance teams define guardrails, legal interprets regulations, and technical teams operationalize controls. Most organizations haven't built that bridge. The CISO doesn't understand model risk. The data science team doesn't understand compliance. Nobody owns the gap. ISO 42001 requires naming an AI System Owner for every production system,a human accountable for behavior, outputs, and compliance. Most organizations haven't identified who that person is.
              </p>
            </div>
          </div>
        </div>

        {/* Governance Assessment CTA */}
        <div className="mt-14">
          <div className="text-center mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Start With an AI Governance Readiness Assessment
            </h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Fixed-scope engagement for organizations preparing to govern AI. Know your gaps, your regulatory exposure, and your path forward.
            </p>
          </div>

          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
            <div className="relative rounded-xl border-2 border-accent bg-background p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h4 className="font-display text-2xl font-bold text-foreground mb-3">Readiness Assessment</h4>
                <div className="flex items-end gap-3 mb-2">
                  <span className="font-display text-4xl font-bold text-accent">$12,500</span>
                  <span className="text-muted-foreground mb-1 text-sm">recommended tier · 2–3 weeks</span>
                </div>
                <p className="text-sm text-muted-foreground">Signal Review ($5,000) and Governance Foundation ($25,000+) also available.</p>
              </div>

              <div className="flex-1 mb-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What's Included</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {[
                    "AI usage & risk inventory",
                    "Regulatory exposure report",
                    "Full 7-domain governance gap analysis",
                    "Remediation roadmap (30/60/90-day)",
                    "Executive summary & board brief",
                    "Evidence architecture blueprint",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/ai-governance-assessment"
                className="block w-full text-center px-6 py-4 rounded-lg font-bold text-white text-base transition-colors"
                style={{ background: "#FF6B35" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#e55a28")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35")}
              >
                View Full Assessment Details
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
            HIPAA · ISO 42001 · NIST AI RMF · OSHA · Built for healthcare, government, and regulated industries.
          </p>
        </div>

        {/* Governance Tools Section */}
        <div className="mt-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              The Governance &amp; Compliance Tools We Build
            </h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Open-source tools built for regulated industries available on GitHub.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                name: "Compliance-as-Code-Terraform-Guardrails",
                desc: "Infrastructure-level compliance controls enforced automatically via Terraform.",
                url: "https://github.com/Jusharra/Compliance-as-Code-Terraform-Guardrails",
              },
              {
                icon: ScanLine,
                name: "GRC Evidence Snapshot API",
                desc: "API for capturing and storing audit-ready governance evidence on demand.",
                url: "https://github.com/Jusharra/GRC-Evidence-Snapshot-API",
              },
              {
                icon: Cloud,
                name: "AWS-AI-Continuous-Compliance",
                desc: "Continuous compliance monitoring for AI workloads running on AWS.",
                url: "https://github.com/Jusharra/AWS-AI-Continuous-Compliance",
              },
              {
                icon: HeartPulse,
                name: "Healthcare-AI-Risk-Register-Microservice",
                desc: "Microservice for maintaining a live AI risk register in healthcare environments.",
                url: "https://github.com/Jusharra/Healthcare-AI-Risk-Register-Microservice",
              },
              {
                icon: BookOpen,
                name: "AI-Governance-Knowledge-Base",
                desc: "Structured knowledge base for AI governance policies, controls, and frameworks.",
                url: "https://github.com/Jusharra/AI-Governance-Knowledge-Base",
              },
              {
                icon: Compass,
                name: "FieldOps-SOP-Navigator-MCP-Verification-Gateway",
                desc: "SOP navigation and verification gateway for field operations compliance.",
                url: "https://github.com/Jusharra/FieldOps-SOP-Navigator-MCP-Verification-Gateway",
              },
            ].map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-background p-5 shadow-sm hover:shadow-card hover:border-accent/30 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <tool.icon className="h-4 w-4 text-accent" />
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors duration-200 mt-1" />
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm leading-snug">
                  {tool.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Track 2 — secondary / minimized */}
        <div className="mt-16 border border-border/60 rounded-xl p-8 bg-background/40 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            AI Governance &amp; Compliance (For Regulated Industries)
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Already running AI systems? We audit and govern for compliance. Healthcare enterprises — HIPAA governance built into your reactivation system. Government, Oil & Gas, and Energy enterprises full governance frameworks available.
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
