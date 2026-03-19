import { ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const badges = [
  { icon: ShieldCheck, text: "ISO 42001 & 27001 Lead Auditor" },
  { icon: Clock, text: "10+ Years Systems Architecture & Engineering" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {badges.map((b, idx) => (
            <div
              key={b.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border text-sm font-medium text-foreground opacity-0 animate-fade-in-down hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <b.icon className="h-4 w-4 text-primary" />
              {b.text}
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            AI Governance & Assurance Engineering{" "}
            <span className="text-gradient">for Regulated Industries</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            We design, implement, and audit AI governance systems that satisfy regulators, boards, and buyers — not just check boxes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <BookingModal>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 py-6 shadow-xl">
                Schedule a Consultation
              </Button>
            </BookingModal>
            <a href="#industry-challenges">
              <Button size="lg" variant="outline" className="font-semibold text-base px-8 py-6 border-primary/20 text-foreground hover:bg-primary/5">
                See Industry Challenges
              </Button>
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "ISO 42001", label: "Lead Auditor Certified" },
              { value: "ISO 27001", label: "Lead Auditor Certified" },
              { value: "3+", label: "Regulated industries served" },
              { value: "10+", label: "Years systems engineering" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-bounce-in hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${0.9 + idx * 0.1}s` }}
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
