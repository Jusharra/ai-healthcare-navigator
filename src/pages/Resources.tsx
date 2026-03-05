import { Link } from "react-router-dom";
import { Download, Shield } from "lucide-react";
import { RESOURCES } from "@/lib/resources";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Shield className="h-4 w-4" />
            Free Resources
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            AI Security Resources &amp; Templates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical tools, frameworks, and guides to accelerate your AI
            security and governance initiatives. Download free.
          </p>
        </div>

        {/* Resource grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource) => (
            <div
              key={resource.slug}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Card visual */}
              <div
                className="relative h-44 flex flex-col items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${resource.categoryColor}22 0%, ${resource.categoryColor}44 100%)`,
                }}
              >
                <span className="text-5xl mb-2">{resource.icon}</span>
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ background: resource.categoryColor }}
                >
                  {resource.category}
                </span>
                <span className="absolute top-3 right-3 text-xs font-bold bg-white text-gray-700 rounded-full px-2.5 py-0.5 shadow-sm">
                  Free
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-display font-bold text-foreground text-base mb-2 leading-tight">
                  {resource.title}
                </h2>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {resource.description}
                </p>
                <Link
                  to={`/resources/${resource.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: "#008B8B" }}
                >
                  <Download className="h-4 w-4" />
                  Download
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
