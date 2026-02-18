import { ShieldCheck, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const badges = [
  { icon: ShieldCheck, text: "ISO 42001 & 27001 Certified" },
  { icon: Award, text: "HIPAA Compliant by Design" },
  { icon: Clock, text: "6 Years Healthcare Cybersecurity" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border text-sm font-medium text-foreground"
            >
              <b.icon className="h-4 w-4 text-primary" />
              {b.text}
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
            We Build & Govern{" "}
            <span className="text-gradient">HIPAA-Compliant AI</span>{" "}
            for Healthcare
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The only firm that both builds revenue-generating AI systems and governs them with ISO 42001 frameworks—exclusively for healthcare practices and enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <BookingModal>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 shadow-lg">
                Schedule Your AI Strategy Session
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
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
