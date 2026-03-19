import { useState } from "react";
import { ExternalLink } from "lucide-react";

type FilterCategory = "All" | "Cross-Industry" | "Enterprise" | "Healthcare" | "Construction" | "Regulatory";

interface Insight {
  title: string;
  tag: string;
  filterCategory: FilterCategory;
  summary: string;
  source: string;
  link: string;
  image: string;
  imageAlt: string;
}

const insights: Insight[] = [
  {
    title: "78% of Organizations Use AI — Only 14% Have Governance Frameworks",
    tag: "Cross-Industry",
    filterCategory: "Cross-Industry",
    summary:
      "AI adoption is racing ahead while governance trails dangerously behind. This gap creates shadow AI deployments, compliance blind spots, and mounting risks that could wipe out everything organizations have gained from AI.",
    source: "2025 AI Governance Benchmark Report",
    link: "https://www.aligne.ai/blog-posts/the-ai-governance-crisis-every-executive-must-address-in-2025",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    imageAlt: "AI neural network visualization",
  },
  {
    title: "87% of Enterprise AI Projects Fail — Governance is the Root Cause",
    tag: "Enterprise",
    filterCategory: "Enterprise",
    summary:
      "42% of companies abandoned most AI initiatives in 2025, up from 17% in 2024. AI governance failures stem from treating AI adoption as technical implementation rather than organizational transformation.",
    source: "AIM Councils / McKinsey Research, October 2025",
    link: "https://councils.aimmediahouse.com/the-440-million-ai-lesson-why-87-of-enterprise-ai-projects-fail-and-how-global-leaders-beat-the-odds/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Executive at desk",
  },
  {
    title: "Board-Level AI Oversight Triples: 48% of Fortune 100 Now Cite AI Risk",
    tag: "Enterprise / Governance",
    filterCategory: "Enterprise",
    summary:
      "Nearly half of Fortune 100 companies now specifically cite AI risk as part of board oversight responsibilities — a threefold increase from 16% in 2024. AI-related expertise in director biographies jumped to 44% from 26%.",
    source: "EY Center for Board Matters, October 2025",
    link: "https://www.corporatecomplianceinsights.com/news-roundup-october-31-2025/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Corporate boardroom meeting",
  },
  {
    title: "Healthcare Breaches Average $7.42M — Highest Across All Industries",
    tag: "Healthcare",
    filterCategory: "Healthcare",
    summary:
      "In 2024, 720 healthcare data breaches exposed 186 million patient records. 80% of stolen protected health information was taken from third-party vendors and business associates — not directly from hospitals.",
    source: "IBM Cost of a Data Breach 2025 / HHS Office for Civil Rights",
    link: "https://sprinto.com/blog/healthcare-data-breach-statistics/",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Healthcare technology and medical data",
  },
  {
    title: "AI Governance Market to Hit $5.8B by 2029 — Growing at 45% CAGR",
    tag: "Cross-Industry",
    filterCategory: "Cross-Industry",
    summary:
      "Organizations deploying AI governance platforms are 3.4x more likely to achieve high effectiveness. By 2030, AI regulation will extend to 75% of the world's economies, driving over $1 billion in total compliance spend.",
    source: "Gartner Q2 2025 Survey / MarketsandMarkets",
    link: "https://www.gartner.com/en/newsroom/press-releases/2026-02-17-gartner-global-ai-regulations-fuel-billion-dollar-market-for-ai-governance-platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Data analytics charts and graphs",
  },
  {
    title: "ISO 42001: The New Baseline for Enterprise AI Governance",
    tag: "Cross-Industry",
    filterCategory: "Cross-Industry",
    summary:
      "76% of organizations plan to pursue ISO 42001 certification. Companies already ISO 27001-certified can achieve ISO 42001 compliance up to 40% faster. Major certifications include IBM Granite, Anthropic, KPMG Australia, and Changi Airport.",
    source: "CSA 2025 Compliance Benchmark / Schellman",
    link: "https://www.schellman.com/blog/iso-certifications/iso-42001-lessons-learned",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Security and compliance framework",
  },
  {
    title: '72% Have AI in Production — Only 9% Call Their Governance "Mature"',
    tag: "Enterprise",
    filterCategory: "Enterprise",
    summary:
      "Most organizations measure AI activity (deployments, pilot count, tool spend) rather than assurance (risk coverage, compliance posture, evidence quality). The gap between AI ambition and governance reality is widening at an alarming rate.",
    source: "McKinsey State of AI 2024 Report",
    link: "https://ajithp.com/2025/12/14/enterprise-ai-governance-framework/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Business data and analytics dashboard",
  },
  {
    title: "Documented AI Safety Incidents Up 56% Year-Over-Year",
    tag: "Cross-Industry",
    filterCategory: "Cross-Industry",
    summary:
      "AI safety incidents rose from 149 in 2023 to 233 in 2024. The AI Incident Database now tracks over 1,200 real-life incidents — with many more likely unreported. Unauthorized access and disclosure incidents increased 240% in healthcare alone.",
    source: "AI Incident Database / Fortified Health Security 2025",
    link: "https://elevateconsult.com/insights/iso-iec-42001-aims-scope-ai-platforms/",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Technology circuit board representing AI systems",
  },
  {
    title: "AI Governance Gaps Are Creating Valuation Risk in M&A",
    tag: "Enterprise / PE",
    filterCategory: "Enterprise",
    summary:
      "Buyers struggle to price AI assets correctly — the difference between perceived value and validated value can be substantial. AI-focused M&A transactions increasingly require deeper legal and technical due diligence, tighter valuation frameworks, and stronger contractual protections.",
    source: "Skadden M&A Insights, February 2026",
    link: "https://www.skadden.com/insights/publications/2026/2026-insights/sector-spotlights/ma-in-the-ai-era",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Business professional working on laptop",
  },
  {
    title: "Falls Remain #1 Cause of Construction Fatalities — AI Changes the Game",
    tag: "Construction",
    filterCategory: "Construction",
    summary:
      "Construction fatalities account for 21% of all workplace deaths despite employing only 7% of the workforce. OSHA's 2025 updates expand PPE requirements, electronic reporting, and fall protection enforcement. AI-powered compliance monitoring is transforming risk management.",
    source: "Bureau of Labor Statistics / OSHA 2025 Updates",
    link: "https://www.spot.ai/blog/ai-powered-osha-compliance-construction-safety-2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Construction site with workers and safety equipment",
  },
  {
    title: "EU AI Act Enforcement Begins February 2026 — Penalties Up to €35 Million",
    tag: "Cross-Industry / Regulatory",
    filterCategory: "Regulatory",
    summary:
      "The EU AI Act entered into force August 1, 2024 and will be fully applicable by August 2, 2026. Organizations proactively adopting AI governance frameworks like ISO 42001 will be better positioned to navigate multi-jurisdictional compliance demands.",
    source: "EU AI Act / ISACA 2025",
    link: "https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2025/iso-42001-balancing-ai-speed-safety",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Team meeting discussing compliance and regulation",
  },
  {
    title: "80% of Healthcare Breaches Originate from Third-Party Vendors",
    tag: "Healthcare",
    filterCategory: "Healthcare",
    summary:
      "Over 80% of attacks reported to the federal government originate from entities other than hospitals — third-party vendors, business associates, and technology providers. The Change Healthcare breach alone affected 192.7 million Americans.",
    source: "American Hospital Association / HHS OCR 2025",
    link: "https://www.aha.org/news/aha-cyber-intel/2025-10-07-2025-cybersecurity-year-review-part-one-breaches-and-defensive-measures",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Medical professionals and healthcare data",
  },
];

const FILTERS: FilterCategory[] = ["All", "Cross-Industry", "Enterprise", "Healthcare", "Construction", "Regulatory"];

function tagColor(tag: string): string {
  if (tag.includes("Healthcare")) return "bg-emerald-100 text-emerald-700";
  if (tag.includes("Construction")) return "bg-orange-100 text-orange-700";
  if (tag.includes("Energy")) return "bg-yellow-100 text-yellow-800";
  if (tag.includes("Regulatory")) return "bg-purple-100 text-purple-700";
  if (tag.includes("Enterprise")) return "bg-blue-100 text-blue-700";
  return "bg-primary/10 text-primary";
}

const CaseStudiesSection = () => {
  const [active, setActive] = useState<FilterCategory>("All");

  const visible = active === "All" ? insights : insights.filter((i) => i.filterCategory === active);

  return (
    <section id="industry-challenges" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industry Insights & Research
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world data on AI risk, governance gaps, and operational impact across regulated industries.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((ins, idx) => (
            <div
              key={ins.title}
              className="rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up overflow-hidden group"
              style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
            >
              {/* Card image */}
              <div className="h-44 overflow-hidden shrink-0">
                <img
                  src={ins.image}
                  alt={ins.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${tagColor(ins.tag)}`}>
                    {ins.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-base leading-snug mb-3">
                  {ins.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {ins.summary}
                </p>
                <a
                  href={ins.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-200 mt-auto group-hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  {ins.source}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-14 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground text-lg mb-5">Want to know where your organization stands?</p>
          <a href="#services">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-colors"
              style={{ background: "#008B8B" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#007777";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#008B8B";
              }}
            >
              Get Your Free AI Governance Readiness Scorecard →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
