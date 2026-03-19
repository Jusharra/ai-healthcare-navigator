import { AlertTriangle, FileWarning, ShieldOff, FileX } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The AI Governance Gap
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organizations are deploying AI faster than they can govern it. Boards are asking questions. Regulators are watching. Most firms sell advice — we engineer assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Operational Risk */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-left group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              Operational Risk
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              AI Operating Without Governance Controls
            </h3>
            <ul className="space-y-4">
              {[
                { icon: ShieldOff, text: "AI systems operating without audit trails or accountability records" },
                { icon: AlertTriangle, text: "Compliance gaps hidden until due diligence or regulatory review" },
                { icon: FileX, text: "Vendors with no contractual accountability for AI behavior" },
              ].map((item, idx) => (
                <li key={item.text} className="flex items-start gap-3 opacity-0 animate-fade-in-up hover:translate-x-1 transition-transform duration-200" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Risk */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-right group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              Governance Risk
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              No Framework. No Evidence. No Assurance.
            </h3>
            <ul className="space-y-4">
              {[
                { icon: FileWarning, text: "No framework in place for AI risk management or oversight" },
                { icon: AlertTriangle, text: "Board and regulator questions unanswered — and often unasked" },
                { icon: FileX, text: "Policies that exist on paper only, with no operational evidence" },
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
