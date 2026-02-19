import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { formatCurrency } from "@/lib/calculators";

interface ResultsData {
  firstName: string;
  lastName: string;
  email: string;
  specialty: string;
  monthlyAppointments: number;
  afterHoursLoss: number;
  holdTimeLoss: number;
  noShowLoss: number;
  totalLoss: number;
  monthlyLoss: number;
  dailyLoss: number;
}

const CAL_LINK =
  "https://cal.com/first-choicecyber/healthcare-practice-automation-systems";

export default function RevenueCalculatorResults() {
  const navigate = useNavigate();
  const [data, setData] = useState<ResultsData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("revenueCalculatorData");
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
            Your Revenue Recovery Report
          </h1>
          <p className="text-gray-500 text-lg">
            Hi {data.firstName} — based on your practice details
          </p>
        </div>

        {/* ── Practice Details ──────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-3">
            Your Practice
          </h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <strong>Practice Type:</strong> {data.specialty}
            </li>
            <li>
              <strong>Monthly Appointments:</strong>{" "}
              {data.monthlyAppointments.toLocaleString()}
            </li>
          </ul>
        </div>

        {/* ── Big Number ───────────────────────────────────────────────── */}
        <div
          className="rounded-xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #FF6B35, #e55a28)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-1 opacity-90">
            YOUR ANNUAL REVENUE LOSS
          </p>
          <p
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}
          >
            {formatCurrency(data.totalLoss)}
          </p>
          <div className="text-sm space-y-1 opacity-90">
            <p>💸 After-hours voicemail: {formatCurrency(data.afterHoursLoss)}</p>
            <p>💸 Hold time abandonment: {formatCurrency(data.holdTimeLoss)}</p>
            <p>💸 No-show revenue drain: {formatCurrency(data.noShowLoss)}</p>
          </div>
        </div>

        {/* ── Monthly / Daily breakdown ─────────────────────────────────── */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
          <p className="text-gray-800 text-base">
            That&apos;s{" "}
            <strong className="text-orange-600">
              {formatCurrency(data.monthlyLoss)}/month
            </strong>{" "}
            or{" "}
            <strong className="text-orange-600">
              {formatCurrency(data.dailyLoss)}/day
            </strong>{" "}
            walking out the door.
          </p>
        </div>

        {/* ── Good News / Solution ──────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-display font-bold text-gray-900 mb-3 text-xl">
            The Good News
          </h2>
          <p className="text-gray-700 mb-4">
            Practices like yours are capturing{" "}
            <strong>70–90% of this lost revenue</strong> with our AI systems.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">
            What that looks like:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li>✅ 24/7 voice AI answers every call instantly</li>
            <li>✅ 45% reduction in no-show rates</li>
            <li>✅ Zero hold times during peak hours</li>
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded p-4 text-sm text-gray-800">
            <strong>Real example:</strong> A {data.specialty} practice with
            similar volume recovered over $1.4M in 12 months using our platform.
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center space-y-4">
          <h2 className="font-display font-bold text-gray-900 text-xl">
            Want to see how this would work for your practice?
          </h2>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white text-base transition-colors"
            style={{
              background: "#FF6B35",
              minHeight: 52,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#e55a28")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#FF6B35")
            }
          >
            📅 BOOK YOUR FREE 15-MIN STRATEGY CALL
          </a>
          <p className="text-sm text-gray-500">
            ✉️ We&apos;ve also sent your detailed report to{" "}
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
                action: "You'll receive your detailed revenue report via email",
              },
              {
                day: "Day 2",
                action: `Case study: How a ${data.specialty} practice recovered $1.4M`,
              },
              {
                day: "Day 5",
                action: "Common objections answered (Will AI replace staff?)",
              },
              {
                day: "Day 7",
                action: "Local social proof from Bakersfield practices",
              },
            ].map(({ day, action }) => (
              <div key={day} className="flex gap-4 items-start">
                <span
                  className="shrink-0 w-16 text-xs font-bold text-white rounded-full px-2 py-1 text-center"
                  style={{ background: "#FF6B35" }}
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
