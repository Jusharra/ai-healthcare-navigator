import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";

const CAL_LINK = "https://cal.com/first-choicecyber/ai-government-assessment";

const DELIVERABLES = [
  {
    title: "AI Usage & Risk Inventory",
    desc: "Complete mapping of AI systems, data flows, and risk exposure across your organization",
  },
  {
    title: "Governance Gap Analysis",
    desc: "Assessment across 7 domains: visibility, data risk, identity, vendor oversight, maturity, audit readiness, change control",
  },
  {
    title: "Regulatory Exposure Report",
    desc: "Compliance gaps against HIPAA, NIST AI RMF, ISO 42001, and applicable frameworks",
  },
  {
    title: "Remediation Roadmap",
    desc: "Prioritized action plan with 30/60/90-day milestones not a checklist, a path forward",
  },
  {
    title: "Executive Summary & Board Brief",
    desc: "Non-technical summary for leadership, legal, and board-level stakeholders",
  },
  {
    title: "Evidence Architecture Blueprint",
    desc: "Design for continuous evidence collection that survives auditor scrutiny",
  },
];

const TIERS = [
  {
    label: "SIGNAL REVIEW",
    price: "$5,000",
    duration: "1 Week",
    description: "AI inventory + high-level gap scan + executive brief",
    recommended: false,
  },
  {
    label: "READINESS ASSESSMENT",
    price: "$12,500",
    duration: "2–3 Weeks",
    description:
      "Full 7-domain assessment + remediation roadmap + evidence blueprint",
    recommended: true,
  },
  {
    label: "GOVERNANCE FOUNDATION",
    price: "$25,000+",
    duration: "4–6 Weeks",
    description:
      "Assessment + policy implementation + evidence pipeline + ongoing advisory",
    recommended: false,
  },
];

const BUILT_FOR = [
  "Healthcare organizations deploying or scaling AI",
  "Government agencies and contractors under compliance mandates",
  "Organizations pursuing ISO 42001 or NIST AI RMF alignment",
  "Leadership teams preparing for AI-related audits or due diligence",
];

export default function GovernanceAssessment() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d1f2d", color: "#e2e8f0" }}
    >
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm transition-colors"
          style={{ color: "#008B8B" }}
        >
          ← Back to home
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-8 border-b border-white/10">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "#008B8B" }}
        >
          FIRST-CHOICE CYBER
        </p>
        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
        >
          AI Governance Readiness Assessment
        </h1>
        <p style={{ color: "#008B8B", fontSize: "1.1rem" }}>
          Fixed-scope engagement for organizations preparing to govern AI
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {/* ── The Problem ─────────────────────────────────────────────────── */}
        <div
          className="rounded-xl p-6"
          style={{ border: "1px solid #1e3a4a", background: "#122333" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#e6a817" }}
          >
            THE PROBLEM
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
            Most organizations have AI in production but no governance structure
            around it. When regulators, auditors, or board members ask how AI
            decisions are made, monitored, or controlled and the answer is
            silence. This engagement closes that gap.
          </p>
        </div>

        {/* ── What You Get ────────────────────────────────────────────────── */}
        <div>
          <h2
            className="font-display font-bold text-xl mb-6 pb-2"
            style={{ borderBottom: "2px solid #008B8B", display: "inline-block" }}
          >
            What You Get
          </h2>
          <ul className="space-y-5">
            {DELIVERABLES.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span
                  className="mt-1 shrink-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#008B8B" }}
                />
                <div>
                  <strong className="block mb-0.5" style={{ color: "#f1f5f9" }}>
                    {title}
                  </strong>
                  <span className="text-sm" style={{ color: "#94a3b8" }}>
                    {desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Engagement Tiers ────────────────────────────────────────────── */}
        <div>
          <h2
            className="font-display font-bold text-xl mb-6 pb-2"
            style={{ borderBottom: "2px solid #008B8B", display: "inline-block" }}
          >
            Engagement Tiers
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {TIERS.map((tier) => (
              <div
                key={tier.label}
                className="rounded-xl p-5 flex flex-col relative"
                style={
                  tier.recommended
                    ? { border: "2px solid #008B8B", background: "#122333" }
                    : { border: "1px solid #1e3a4a", background: "#0f1c28" }
                }
              >
                {tier.recommended && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "#008B8B",
                      color: "#fff",
                      letterSpacing: "0.05em",
                    }}
                  >
                    RECOMMENDED
                  </span>
                )}
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "#008B8B" }}
                >
                  {tier.label}
                </p>
                <p
                  className="font-display font-bold text-3xl mb-1"
                  style={{ color: "#f1f5f9" }}
                >
                  {tier.price}
                </p>
                <p className="text-xs mb-3" style={{ color: "#64748b" }}>
                  {tier.duration}
                </p>
                <p className="text-sm mt-auto" style={{ color: "#94a3b8" }}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Built For ───────────────────────────────────────────────────── */}
        <div>
          <h2
            className="font-display font-bold text-xl mb-6 pb-2"
            style={{ borderBottom: "2px solid #008B8B", display: "inline-block" }}
          >
            Built For
          </h2>
          <ul className="space-y-3">
            {BUILT_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  className="font-bold mt-0.5"
                  style={{ color: "#008B8B" }}
                >
                  →
                </span>
                <span style={{ color: "#cbd5e1" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          className="rounded-xl p-8 text-center"
          style={{ border: "1px solid #1e3a4a", background: "#122333" }}
        >
          <h2 className="font-display font-bold text-2xl mb-2">
            Ready to assess your AI governance posture?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
            Schedule a strategy call to discuss your governance gaps and the
            right engagement tier for your organization.
          </p>
          <BookingModal url={CAL_LINK} title="AI Governance Assessment">
            <Button
              className="font-bold text-white px-8 py-4 text-base rounded-lg"
              style={{ background: "#008B8B", minHeight: 52 }}
            >
              Schedule Your Governance Assessment Call
            </Button>
          </BookingModal>
        </div>
      </div>

      {/* ── Footer strip ─────────────────────────────────────────────────── */}
      <div
        className="border-t mt-8 px-6 py-6"
        style={{ borderColor: "#1e3a4a" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p
              className="font-bold text-sm"
              style={{ color: "#008B8B" }}
            >
              Jusharra Goree
            </p>
            <p className="text-xs" style={{ color: "#64748b" }}>
              External Head of AI Governance &amp; Assurance | ISO 42001 &amp; ISO
              27001 Lead Auditor
            </p>
          </div>
          <p className="text-xs" style={{ color: "#475569" }}>
            © 2026 First-Choice Cyber. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
