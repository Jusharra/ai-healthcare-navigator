import { Check, Clock } from "lucide-react";
import BookingModal from "./BookingModal";

const includes = [
  "Review your current customer retention gaps",
  "Identify your top 3 reactivation opportunities",
  "Estimate your monthly revenue leakage",
  "Full customer journey analysis",
  "Competitor gap assessment",
  "Custom automation strategy for your business",
  "Live demo of reactivation system for your industry",
  "Personalized recovery roadmap",
  "Priority implementation scheduling",
];

const CAL_LINK = "https://cal.com/first-choicecyber/deep-revenue-recovery-audit";

const AuditOffersSection = () => {
  return (
    <section id="audit-offers" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start With a Revenue Recovery Audit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Revenue Recovery Audit is $997 credited toward your system setup. In 60 minutes, I'll show you exactly where you're leaking revenue and what it takes to recover it.
          </p>
        </div>

        <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-xl border-2 border-accent bg-background p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">

            {/* Header */}
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Revenue Recovery Audit
              </h3>
              <div className="flex items-end gap-3 mb-2">
                <span className="font-display text-4xl font-bold text-accent">
                  $997
                </span>
                <span className="text-muted-foreground mb-1 text-sm">
                  credited toward system setup
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                60 minutes · Full revenue breakdown · No obligation
              </div>
            </div>

            {/* Includes */}
            <div className="flex-1 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                What's Included
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <BookingModal url={CAL_LINK} title="Revenue Recovery Audit">
              <button
                className="block w-full text-center px-6 py-4 rounded-lg font-bold text-white text-base transition-colors"
                style={{ background: "#FF6B35" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#e55a28";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#FF6B35";
                }}
              >
                Book Your Revenue Recovery Audit
              </button>
            </BookingModal>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Audit cost applies toward your full system if you move forward. No obligation.
        </p>
      </div>
    </section>
  );
};

export default AuditOffersSection;
