import { useState } from "react";
import { Menu, X, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border opacity-0 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Shield className="h-7 w-7 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <span className="font-display font-bold text-lg text-foreground">First Choice Cyber</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:661-489-8106">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold flex items-center gap-2 animate-pulse">
                <Phone className="h-4 w-4" />
                Call AI Agent: 661-489-8106
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in-down">
          {links.map((l, idx) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 opacity-0 animate-slide-in-left"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="tel:661-489-8106" className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold flex items-center justify-center gap-2 animate-pulse">
              <Phone className="h-4 w-4" />
              Call AI Agent: 661-489-8106
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
