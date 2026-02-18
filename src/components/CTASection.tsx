import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import BookingModal from "./BookingModal";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-hero-gradient p-12 sm:p-16 shadow-lg">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Capture Revenue and Ensure Compliance?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Book a 30-minute AI Strategy Session to discuss your practice's unique challenges. No sales pressure—just clarity on whether AI can help you achieve your goals.
          </p>

          <BookingModal>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 py-6 shadow-lg">
              Schedule Your AI Strategy Session
            </Button>
          </BookingModal>

          <p className="text-primary-foreground/60 text-sm mt-6 flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            30-day pilot program available. See results before full commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
