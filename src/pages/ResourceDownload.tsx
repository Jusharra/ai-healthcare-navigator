import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, CheckCircle, Mail, Shield } from "lucide-react";
import { getResourceBySlug } from "@/lib/resources";
import NotFound from "./NotFound";

export default function ResourceDownload() {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? getResourceBySlug(slug) : undefined;

  // Auto-trigger download after a short delay
  useEffect(() => {
    if (!resource) return;
    const timer = setTimeout(() => {
      const a = document.createElement("a");
      a.href = resource.pdfPath;
      a.download = resource.pdfPath.split("/").pop() ?? "resource.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1500);
    return () => clearTimeout(timer);
  }, [resource]);

  if (!resource) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Minimal header */}
      <header className="py-4 px-6 border-b border-gray-200 bg-white">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Shield className="h-4 w-4 text-teal-600" />
          <span className="font-semibold text-teal-700">First Choice Cyber</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Your {resource.category.slice(0, -1)} is ready.
          </h1>
          <p className="text-gray-600 mb-2">
            <strong>{resource.title}</strong>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Your download should start automatically. If it doesn&apos;t, use
            the button below.
          </p>

          {/* Manual download button */}
          <a
            href={resource.pdfPath}
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-opacity hover:opacity-90 mb-6"
            style={{ background: "#008B8B" }}
          >
            <Download className="h-5 w-5" />
            Download {resource.category.slice(0, -1)}
          </a>

          {/* Email note */}
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-left">
            <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              We&apos;ve also sent this to your email so you always have it on
              hand.
            </p>
          </div>

          {/* Back to resources */}
          <div className="mt-8">
            <Link
              to="/resources"
              className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              ← Browse more resources
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
