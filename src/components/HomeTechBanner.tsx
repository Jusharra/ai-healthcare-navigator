import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Shield } from "lucide-react";

const HomeTechBanner = () => {
  return (
    <section className="py-14" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Icon + copy */}
          <div className="flex items-start gap-5">
            <div className="shrink-0 p-4 rounded-xl border border-accent/30" style={{ background: "rgba(255,107,53,0.12)" }}>
              <Smartphone className="h-7 w-7 text-accent" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2" style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35" }}>
                <Shield className="h-3 w-3" />
                New — Home Tech Services
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                Now serving homeowners and home offices in Kern County and Fresno
              </h2>
              <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-xl">
                Expert mobile tech support and home cybersecurity — we come to you.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0 self-center">
            <Link
              to="/home-tech-services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white text-sm sm:text-base shadow-lg whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#FF6B35" }}
            >
              See home tech services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechBanner;
