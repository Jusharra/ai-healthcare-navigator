import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import type { RiskLevel } from "@/lib/calculators";

interface ResultsData {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  organizationSize: string;
  industry: string;
  currentlyUsingAI: string;
  score: number;
  riskLevel: RiskLevel;
  riskColor: string;
}

const CAL_LINK =
  "https://cal.com/first-choicecyber/healthcare-practice-automation-systems";

const GAP_AREAS = [
  {
    icon: "📋",
    title: "AI Usage Visibility",
    desc: "Most organizations discover 3–5x more AI usage than documented",
  },
  {
    icon: "🔒",
    title: "Data & Information Risks",
    desc: "AI risk almost always begins as a data exposure problem",
  },
  {
    icon: "👤",
    title: "Identity & Access Governance",
    desc: "AI actions must be attributable for true accountability",
  },
  {
    icon: "🤝",
    title: "Vendor Oversight",
    desc: "Third-party AI risk transfers directly to your organization",
  },
  {
    icon: "📊",
    title: "Audit Readiness",
    desc: "Can you defend AI decisions under regulatory scrutiny?",
  },
  {
    icon: "⚙️",
    title: "Change Control",
    desc: "Governance must survive new vendors, data, and use cases",
  },
];

export default function GovernanceScorecardResults() {
  const navigate = useNavigate();
  const [data, setData] = useState<ResultsData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("governanceScorecardData");
    if (!raw) {
      navigate("/", { replace: true });
      return;
    }
    try {
      setData(JSON.parse(raw));
    } catch {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  if (!data) return null;

  const isHigh = data.riskLevel === "High Risk";
  const isMedium = data.riskLevel === "Medium Risk";
  const isLow = data.riskLevel === "Low Risk";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Back to home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Your AI Governance Readiness Score
          </h1>
          <p className="text-gray-500 text-lg">
            Enterprise AI Governance Assessment — {data.firstName}{" "}
            {data.lastName}
          </p>
        </div>

        {/* ── Organization Details ──────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-3">
            Your Organization
          </h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <strong>Role:</strong> {data.jobTitle}
            </li>
            <li>
              <strong>Organization Size:</strong> {data.organizationSize}
            </li>
            <li>
              <strong>Industry:</strong> {data.industry}
            </li>
            <li>
              <strong>Currently Using AI:</strong> {data.currentlyUsingAI}
            </li>
          </ul>
        </div>

        {/* ── Big Score ─────────────────────────────────────────────────── */}
        <div
          className="rounded-xl p-8 text-center bg-white shadow-sm"
          style={{ border: `3px solid ${data.riskColor}` }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
            YOUR GOVERNANCE SCORE
          </p>
          <p
            className="font-display font-bold text-gray-900 mb-4"
            style={{
              fontSize: "clamp(3rem, 10vw, 5rem)",
              color: data.riskColor,
            }}
          >
            {data.score}
            <span className="text-2xl text-gray-400">/100</span>
          </p>
          <span
            className="inline-block px-5 py-2 rounded-full font-bold text-white text-sm"
            style={{ background: data.riskColor }}
          >
            {data.riskLevel}
          </span>
        </div>

        {/* ── Risk Interpretation ───────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-4 text-xl">
            What This Means for Your Organization
          </h2>

          {isHigh && (
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
              <h3 className="font-bold text-red-700 mb-2">
                ⚠️ CRITICAL GAPS DETECTED
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Your organization has significant AI governance exposure.
                Organizations with scores below 40 typically face:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>
                  10–20% valuation haircuts in due diligence ($5M–$50M for
                  healthcare companies)
                </li>
                <li>$100K–$500K+ regulatory exposure</li>
                <li>Board fiduciary liability concerns</li>
              </ul>
            </div>
          )}

          {isMedium && (
            <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg p-4">
              <h3 className="font-bold text-yellow-700 mb-2">
                ⚠️ MODERATE RISK
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                You have basic governance in place, but critical gaps remain.
                Organizations in this range struggle during:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>PE investor due diligence</li>
                <li>Regulatory audits (OCR HIPAA)</li>
                <li>Board presentations on AI risk</li>
              </ul>
            </div>
          )}

          {isLow && (
            <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
              <h3 className="font-bold text-green-700 mb-2">
                ✅ STRONG FOUNDATION
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                You&apos;re ahead of most healthcare organizations, but there are
                still opportunities to strengthen your governance posture for:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>ISO 42001 certification</li>
                <li>Complete audit readiness</li>
                <li>Competitive advantage in RFPs</li>
              </ul>
            </div>
          )}
        </div>

        {/* ── Key Findings ─────────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-3 text-xl">
            Key Findings for {data.jobTitle} Role
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Your organization size ({data.organizationSize}) requires:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Formal AI governance committee structure</li>
            <li>✓ Board-level risk reporting framework</li>
            <li>✓ ISO 42001-aligned governance system</li>
            <li>✓ Continuous assurance processes</li>
          </ul>
        </div>

        {/* ── Gap Areas Grid ────────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-5 text-xl">
            Common Gap Areas (Based on Industry Benchmarks)
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {GAP_AREAS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {icon} {title}
                </h3>
                <p className="text-xs text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Next Steps ───────────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-4 text-xl">
            Recommended Next Steps
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "Schedule AI Governance Strategy Call (30 minutes)",
                desc: "Discuss your specific governance gaps and remediation roadmap",
              },
              {
                title: "Review Detailed Scorecard Breakdown",
                desc: "We'll send your complete assessment to your email",
              },
              {
                title: "Develop 90-Day Rapid Remediation Plan",
                desc: "Healthcare enterprises reduce gaps by 60–80% in 90 days with our framework",
              },
            ].map(({ title, desc }, i) => (
              <li key={i} className="flex gap-4 items-start text-sm">
                <span
                  className="shrink-0 w-6 h-6 rounded-full font-bold text-white flex items-center justify-center text-xs"
                  style={{ background: "#008B8B" }}
                >
                  {i + 1}
                </span>
                <div>
                  <strong className="text-gray-900">{title}</strong>
                  <p className="text-gray-600 mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center space-y-4">
          <h2 className="font-display font-bold text-gray-900 text-xl">
            Ready to Close Your Governance Gaps?
          </h2>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white text-base transition-colors"
            style={{ background: "#008B8B", minHeight: 52 }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#007777")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#008B8B")
            }
          >
            📅 SCHEDULE YOUR GOVERNANCE STRATEGY CALL
          </a>
          <p className="text-sm text-gray-500">
            ✉️ We&apos;ve also sent your detailed scorecard to{" "}
            <strong>{data.email}</strong>
          </p>
        </div>

        {/* ── What Happens Next / Timeline ─────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-5 text-xl">
            What Happens Next?
          </h2>
          <div className="space-y-4">
            {[
              {
                day: "Today",
                action: "Receive your detailed governance scorecard via email",
              },
              {
                day: "Day 2",
                action:
                  "Case study: How an enterprise avoided $10M valuation haircut",
              },
              {
                day: "Day 5",
                action: "4 questions your board is about to ask",
              },
              {
                day: "Day 7",
                action: "ISO 42001 explained for healthcare",
              },
            ].map(({ day, action }) => (
              <div key={day} className="flex gap-4 items-start">
                <span
                  className="shrink-0 w-16 text-xs font-bold text-white rounded-full px-2 py-1 text-center"
                  style={{ background: "#008B8B" }}
                >
                  {day}
                </span>
                <span className="text-sm text-gray-700 pt-0.5">{action}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Don&apos;t want these emails? Reply &ldquo;UNSUBSCRIBE&rdquo; to any
            message.
          </p>
        </div>
      </div>

      {/* Footer padding */}
      <div className="pb-16" />
    </div>
  );
}
