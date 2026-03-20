import { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const demos = [
  {
    emoji: "🍽️",
    industry: "Restaurant",
    name: "La Bella Noches",
    desc: "Full customer capture and reactivation system for a casual dining restaurant. Slow-day promotions, birthday offers, and repeat visit automation.",
    url: "https://labellanoches.netlify.app/",
    live: true,
  },
  {
    emoji: "🧺",
    industry: "Laundromat",
    name: "The Lavanderia Club",
    desc: "QR-based customer database and SMS reactivation system for a self-service laundromat. Welcome offers and mid-week traffic campaigns.",
    url: "https://thelavanderiaclub.netlify.app/",
    live: true,
  },
  {
    emoji: "🔧",
    industry: "Auto Repair",
    name: "Central Valley Auto Care",
    desc: "Maintenance reminder and reactivation system for auto repair shops. Service history-based reminders, seasonal campaigns, and scheduled maintenance automation.",
    url: "https://centralvalleyautocare.netlify.app/",
    live: true,
  },
  {
    emoji: "🏗️",
    industry: "Construction",
    name: "ProBuild USA",
    desc: "Client follow-up and reactivation system for contractors. Project-based maintenance reminders, seasonal campaigns, and repeat client outreach.",
    url: "https://probuildusa.netlify.app/",
    live: true,
  },
  {
    emoji: "🦷",
    industry: "Dental Practice",
    name: "PracticeGuard AI",
    desc: "Patient recall and hygiene schedule automation for dental offices. HIPAA-aware patient reactivation with 6, 12, and 18-month recall campaigns.",
    url: "https://practiceguardai.netlify.app/",
    live: true,
  },
];

const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const nextRef = useRef<() => void>(() => {});

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setVisibleCards(5);
      else if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, demos.length - visibleCards);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  // Keep ref in sync so auto-timer always uses latest next
  nextRef.current = next;

  // Clamp current if visibleCards changes
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  // Auto-advance every 3.5s
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => nextRef.current(), 3500);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const cardWidthPct = 100 / visibleCards;
  const translatePct = -(current * cardWidthPct);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the Systems We Build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Live demo sites built for real industries. Click any card to see exactly what your customers would experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Prev */}
          <button
            onClick={() => { prev(); resetTimer(); }}
            className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-card border border-border shadow-card hover:shadow-card-hover hover:bg-accent/10 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Track */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translatePct}%)` }}
            >
              {demos.map((demo) => (
                <div
                  key={demo.industry}
                  style={{ width: `${cardWidthPct}%` }}
                  className="shrink-0 px-3"
                >
                  <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 flex flex-col h-full group">
                    {/* Icon + Industry */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300 text-xl">
                        {demo.emoji}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                          {demo.industry}
                        </p>
                        <h3 className="font-display font-bold text-foreground text-sm">
                          {demo.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground flex-1 mb-5">
                      {demo.desc}
                    </p>

                    {/* CTA */}
                    {demo.live && demo.url ? (
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200 group/link"
                      >
                        View Demo
                        <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/60">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => { next(); resetTimer(); }}
            className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-card border border-border shadow-card hover:shadow-card-hover hover:bg-accent/10 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-accent"
                  : "w-2 h-2 bg-border hover:bg-accent/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-muted-foreground">
            Don't see your industry?{" "}
            <a href="#audit-offers" className="text-accent font-semibold hover:text-accent/80 transition-colors">
              Book a Revenue Audit
            </a>{" "}
            — we build for any high-foot-traffic business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
