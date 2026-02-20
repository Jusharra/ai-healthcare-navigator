import { PhoneOff, CalendarX, AlertTriangle, FileWarning } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Healthcare's Dual AI Challenge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practices bleed revenue from operational gaps. Enterprises face mounting governance risk. Most firms solve only one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Operational Pain */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-left group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              Revenue Loss
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Your Practice Is Losing $100K–$300K Annually
            </h3>
            <ul className="space-y-4">
              {[
                { icon: PhoneOff, text: "67% of after-hours calls go to voicemail—patients book with competitors" },
                { icon: CalendarX, text: "No-shows cost the average practice $100K–$300K per year" },
                { icon: AlertTriangle, text: "Hold times of 5–11 minutes drive patients away" },
              ].map((item, idx) => (
                <li key={item.text} className="flex items-start gap-3 opacity-0 animate-fade-in-up hover:translate-x-1 transition-transform duration-200" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Pain */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-right group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              Governance Risk
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Your AI Is Ungoverned and Exposed
            </h3>
            <ul className="space-y-4">
              {[
                { icon: FileWarning, text: "Board asking about AI risk exposure with no answers ready" },
                { icon: AlertTriangle, text: "Regulatory audits approaching with no AI compliance framework" },
                { icon: CalendarX, text: "Due diligence gaps creating valuation haircuts in M&A" },
              ].map((item, idx) => (
                <li key={item.text} className="flex items-start gap-3 opacity-0 animate-fade-in-up hover:translate-x-1 transition-transform duration-200" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
