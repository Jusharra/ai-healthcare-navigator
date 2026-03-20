import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-hero-gradient p-12 sm:p-16 shadow-lg opacity-0 animate-scale-in hover:shadow-2xl transition-all duration-500" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: "0.4s" }}>
            Ready to Stop Losing Patients to Lapsed Follow-Up?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Schedule a 60-minute Patient Growth Audit to see exactly where your practice is losing patients and what it takes to automate recovery. No obligation — just a clear action plan.
          </p>

          <a href="tel:6614898106">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 py-6 shadow-lg">
              Click to Call (661) 489-8106
            </Button>
          </a>

          <p className="text-primary-foreground/60 text-sm mt-6 flex items-center justify-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <ShieldCheck className="h-4 w-4 animate-pulse" />
            HIPAA-compliant systems · You own your patient data · Live in 2 weeks
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
