import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-hero-gradient p-12 sm:p-16 shadow-lg opacity-0 animate-scale-in hover:shadow-2xl transition-all duration-500" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: "0.4s" }}>
            Ready to Build AI Governance That Actually Works?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Schedule a discovery call to see exactly where your organization is exposed and what it takes to build a working governance system. No obligation, just a clear path forward.
          </p>

          <a href="tel:6614898106">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 py-6 shadow-lg">
              Click to Call (661) 489-8106
            </Button>
          </a>

          <p className="text-primary-foreground/60 text-sm mt-6 flex items-center justify-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <ShieldCheck className="h-4 w-4 animate-pulse" />
            ISO 42001 · NIST AI RMF · HIPAA · OSHA · Healthcare, Government, Oil &amp; Gas, and Energy
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
