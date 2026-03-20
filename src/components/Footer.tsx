import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-foreground">First-Choice Cyber</span>
          </div>
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm font-semibold text-foreground">
              Reactivation Revenue Recovery Specialist
            </p>
            <p className="text-sm text-muted-foreground max-w-md">
              Serving dental offices, restaurants, laundromats, auto repair, medical clinics, HVAC, plumbing, and high-foot-traffic businesses across Bakersfield and Fresno.
            </p>
            <p className="text-xs text-muted-foreground/70 pt-1">
              We also provide AI governance audits for healthcare practices.{" "}
              <a href="#services" className="underline hover:text-foreground transition-colors">Ask us.</a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground shrink-0">
            © {new Date().getFullYear()} First-Choice Cyber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
