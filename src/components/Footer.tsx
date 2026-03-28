import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="shrink-0 space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-foreground">First-Choice Cyber</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-0.5 rounded-full border border-border">ISO 42001</span>
              <span className="px-2 py-0.5 rounded-full border border-border">NIST AI RMF</span>
              <span className="px-2 py-0.5 rounded-full border border-border">HIPAA</span>
              <span className="px-2 py-0.5 rounded-full border border-border">OSHA</span>
            </div>
          </div>

          {/* Value proposition */}
          <div className="max-w-xl space-y-2">
            <p className="text-sm font-semibold text-foreground">
              AI Governance as Compliance Engineering
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don't write policy documents, we build working technical systems that achieve ISO 42001, NIST AI RMF, OSHA and HIPAA compliance in 90 days, with automated evidence collection that keeps you audit-ready continuously.
            </p>
            <p className="text-xs text-muted-foreground/70 pt-1">
              Serving dental practices, medical clinics, health insurance plans, construction companies and regulated enterprises.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground shrink-0 md:text-right">
            © {new Date().getFullYear()} First-Choice Cyber.<br className="hidden md:block" /> All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
