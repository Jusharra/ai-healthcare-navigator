import { Server, Clock, RefreshCw, Layers, TrendingDown } from "lucide-react";

const results = [
  {
    icon: Server,
    number: "01",
    title: "A Certified-Ready AI Management System — Not a Binder",
    body: "We build the actual governance infrastructure: policy-as-code that enforces controls automatically, automated evidence collection pipelines that generate audit-ready documentation continuously, risk registers that update in real time, and control mappings across ISO 42001, NIST AI RMF, OSHA, ISO 27001, HIPAA, and SOC 2 simultaneously. You don't get a consultant report and a handshake. You get a system that runs.",
  },
  {
    icon: Clock,
    number: "02",
    title: "Audit Readiness in 90 Days Instead of 12+ Months",
    body: "ISO 27001-certified organizations achieve ISO 42001 compliance 30–40% faster than those starting from scratch. We leverage your existing ISO 27001 and SOC 2 controls and extend them into AI governance, compressing timelines dramatically. We're not rebuilding from scratch. We're building the AI governance layer on top of what already exists.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Continuous Compliance, Not Point-in-Time Audits",
    body: "Most consultants prepare you for a single audit. We build the ongoing machine automated evidence collectors, continuous monitoring, drift detection, and incident response playbooks that trigger automatically. When the auditor comes back next year, the evidence is already there. When a regulator asks for documentation, it exists in real time, not in a scramble.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Cross-Framework Compliance From a Single System",
    body: "ISO 42001, ISO 27001, NIST AI RMF, OSHA, HIPAA, SOC 2, CMMC, and state-level AI laws (Colorado, Texas TRAIGA) we build one governance control plane that maps controls across all frameworks simultaneously. A single implementation satisfies multiple compliance obligations, eliminating duplicated effort and audit fatigue.",
  },
  {
    icon: TrendingDown,
    number: "05",
    title: "Reduced Liability and Insurance Costs",
    body: "The insurance industry now prices AI liability risk differently for certified versus uncertified organizations. ISO 42001-aligned companies receive premium discounts of 15–25% on AI liability coverage. Our work directly reduces your financial exposure, governance isn't just a compliance checkbox, it's a balance sheet decision.",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Results We Create
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't deliver reports. We deliver working systems. Here's what that means in practice.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {results.map((r, idx) => (
            <div
              key={r.number}
              className="flex gap-6 rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
            >
              {/* Icon + number */}
              <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-muted-foreground/50 tracking-widest">{r.number}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-foreground mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
