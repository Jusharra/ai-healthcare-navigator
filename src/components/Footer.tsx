import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-foreground">First Choice Cyber</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Serving healthcare practices and enterprises in Bakersfield, Los Angeles, and nationwide.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} First Choice Cyber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
