import { ExternalLink } from "lucide-react";

const demos = [
  {
    emoji: "🦷",
    industry: "Dental Practice",
    name: "PracticeGuard AI",
    desc: "Patient recall and hygiene schedule automation for dental offices. HIPAA-compliant patient reactivation with 6, 12, and 18-month recall campaigns.",
    url: "https://practiceguardai.netlify.app/",
  },
  {
    emoji: "🏥",
    industry: "Medical Triage",
    name: "IntriageFlow",
    desc: "Intelligent patient intake and triage flow system for medical practices. Streamlined intake, automated routing, and patient communication automation.",
    url: "https://intriageflow.network/",
  },
  {
    emoji: "💊",
    industry: "Concierge Medicine",
    name: "Vitale Health Concierge",
    desc: "Premium concierge medicine platform with automated patient engagement, appointment reminders, and personalized health outreach for private practices.",
    url: "https://vitalehealthconcierge.doctor/",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the Systems We Build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Live demo sites built for healthcare practices. Click any card to see exactly what your patients would experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {demos.map((demo) => (
            <div
              key={demo.name}
              className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 flex flex-col group"
            >
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

              <p className="text-sm text-muted-foreground flex-1 mb-5">
                {demo.desc}
              </p>

              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200 group/link"
              >
                View Demo
                <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground">
            Don't see your practice type?{" "}
            <a href="#audit-offers" className="text-accent font-semibold hover:text-accent/80 transition-colors">
              Book a Patient Growth Audit
            </a>{" "}
            — we build for dental, medical, and health insurance organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
