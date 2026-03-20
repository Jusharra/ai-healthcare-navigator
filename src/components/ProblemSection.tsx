import { AlertTriangle, UserX, DatabaseZap, Lock, FileX, CalendarOff, Users } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Patient Retention Problem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Most practices focus on new patient acquisition while lapsed patients slip away unnoticed. The result? Empty slots, lost revenue, and preventable no-shows. We build systems that keep patients coming back automatically.
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="max-w-3xl mx-auto mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-card"
              src="https://www.youtube.com/embed/Ssg57rD45o4"
              title="The Patient Retention Problem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Operational Risk */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-left group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              Operational Risk
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Patients Lapsing Without Follow-Up
            </h3>
            <ul className="space-y-4">
              {[
                { icon: UserX, text: "No automated recall system for patients overdue for care" },
                { icon: CalendarOff, text: "Missed follow-ups mean missed appointments and empty slots" },
                { icon: AlertTriangle, text: "Empty hygiene and exam slots that could have been filled" },
                { icon: Users, text: "Front desk overwhelmed with manual recall calls — or not making them at all" },
              ].map((item, idx) => (
                <li key={item.text} className="flex items-start gap-3 opacity-0 animate-fade-in-up hover:translate-x-1 transition-transform duration-200" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Risk */}
          <div className="rounded-xl border border-border p-8 bg-background shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-right group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              Compliance Risk
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Patient Data Scattered. HIPAA Exposure. No Audit Trail.
            </h3>
            <ul className="space-y-4">
              {[
                { icon: DatabaseZap, text: "Patient records fragmented across software with no central ownership" },
                { icon: FileX, text: "No audit trail of recall communications sent or actions taken" },
                { icon: Lock, text: "Vendor lock-in leaves you exposed if a platform changes its terms" },
                { icon: AlertTriangle, text: "No documentation ready for HIPAA audits or compliance reviews" },
              ].map((item, idx) => (
                <li key={item.text} className="flex items-start gap-3 opacity-0 animate-fade-in-up hover:translate-x-1 transition-transform duration-200" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="tel:6614898106"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base shadow-lg transition-colors"
            style={{ background: "#FF6B35" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e55a28"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35"; }}
          >
            📞 Click to Call — Schedule Your Patient Growth Audit
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            (661) 489-8106 · No obligation · 60-min session available
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
