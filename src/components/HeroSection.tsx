import { ShieldCheck, Award, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const badges = [
  { icon: ShieldCheck, text: "ISO 42001 & 27001 Lead Auditor" },
  { icon: Award, text: "HIPAA Compliant by Design" },
  { icon: Clock, text: "6+ Years Healthcare Cybersecurity" },
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
            We Build & Govern{" "}
            <span className="text-gradient">HIPAA-Compliant AI</span>{" "}
            for Healthcare
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            The only firm that both builds revenue-generating AI systems and governs them with HiTrust, ISO 27001, 27701 and 42001 frameworks exclusively for healthcare practices and enterprises.
          </p>

          {/* AI Voice Agent CTA */}
          <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 max-w-2xl mx-auto opacity-0 animate-scale-in hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone className="h-5 w-5 text-accent animate-glow" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Try Our AI Voice Agent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience our HIPAA-compliant AI receptionist firsthand. Call now to book your strategy session instantly.
            </p>
            <a href="tel:661-489-8106">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-xl">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 661-489-8106
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <BookingModal>
              <Button size="lg" variant="outline" className="font-semibold text-base px-8 py-6 border-primary/20 text-foreground hover:bg-primary/5">
                Or Schedule Online
              </Button>
            </BookingModal>
            <a href="#case-studies">
              <Button size="lg" variant="outline" className="font-semibold text-base px-8 py-6 border-primary/20 text-foreground hover:bg-primary/5">
                See Case Studies
              </Button>
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "$150B", label: "Lost annually to no-shows in US healthcare" },
              { value: "98%+", label: "Answer rate with our AI receptionist" },
              { value: "45%", label: "Average no-show reduction" },
              { value: "3-6 mo", label: "Time to positive ROI" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-bounce-in hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${1.1 + idx * 0.1}s` }}
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
