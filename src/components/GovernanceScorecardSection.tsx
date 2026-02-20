import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  calculateGovernanceScore,
  sanitizeText,
  isValidEmail,
  isValidPhone,
} from "@/lib/calculators";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  organizationSize: string;
  industry: string;
  currentlyUsingAI: string;
}

type FormErrors = Partial<Record<keyof FormData | "general", string>>;

// NOTE: In production, replace this direct webhook call with a backend proxy
// (e.g., a serverless function) so the URL is not exposed in client-side code.
const WEBHOOK_URL = import.meta.env.VITE_LEAD_CAPTURE_WEBHOOK_URL as string | undefined;

export default function GovernanceScorecardSection() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    organizationSize: "",
    industry: "",
    currentlyUsingAI: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  // Honeypot – must stay empty
  const [honeypot, setHoneypot] = useState("");

  function validate(): FormErrors {
    const e: FormErrors = {};
    const firstName = sanitizeText(form.firstName);
    const lastName = sanitizeText(form.lastName);

    if (!firstName || firstName.length < 2 || firstName.length > 50)
      e.firstName = "First name must be 2–50 characters.";
    if (!lastName || lastName.length < 2 || lastName.length > 50)
      e.lastName = "Last name must be 2–50 characters.";
    if (!isValidEmail(form.email))
      e.email = "Please enter a valid email address.";
    if (!isValidPhone(form.phone))
      e.phone = "Please enter a valid phone number (10+ digits).";
    if (!form.jobTitle) e.jobTitle = "Please select your role.";
    if (!form.organizationSize)
      e.organizationSize = "Please select your organization size.";
    if (!form.industry) e.industry = "Please select your industry.";
    if (!form.currentlyUsingAI)
      e.currentlyUsingAI = "Please indicate whether you currently use AI.";

    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check – silent rejection for bots
    if (honeypot) return;

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      firstName: sanitizeText(form.firstName),
      lastName: sanitizeText(form.lastName),
      email: form.email.trim(),
      phone: form.phone.trim(),
      jobTitle: form.jobTitle,
      organizationSize: form.organizationSize,
      industry: form.industry,
      currentlyUsingAI: form.currentlyUsingAI,
    };

    // Calculate score client-side for the results page
    const scoreResult = calculateGovernanceScore(
      payload.jobTitle,
      payload.organizationSize,
      payload.currentlyUsingAI
    );

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Webhook response not OK");
      }
    } catch {
      setErrors({
        general:
          "Something went wrong sending your data. Please try again or email us directly.",
      });
      setLoading(false);
      return;
    }

    // Persist data for the results page
    sessionStorage.setItem(
      "governanceScorecardData",
      JSON.stringify({ ...payload, ...scoreResult })
    );

    navigate("/governance-scorecard-results");
  }

  function setField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const selectClass = (field: keyof FormErrors, hasValue: boolean) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    } ${hasValue ? "text-gray-900" : "text-gray-400"}`;

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    }`;

  return (
    <div
      className="mt-10 rounded-xl p-8 sm:p-10"
      style={{
        background: "#D9F0FF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-3xl mb-2">🛡️</div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          FREE AI GOVERNANCE READINESS SCORECARD
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          Discover Your AI Governance Gaps Before Audit, Due Diligence, or
          Board Review
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
          <span>✓ Takes 90 seconds</span>
          <span>✓ Instant maturity score (1–100)</span>
          <span>✓ Detailed gap analysis report</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot – hidden from real users */}
        <div aria-hidden="true" style={{ display: "none" }}>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              maxLength={50}
              className={inputClass("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              maxLength={50}
              className={inputClass("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="sarah.johnson@healthsystem.com"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone + Job Title + Org Size */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <input
              type="tel"
              placeholder="555-987-6543"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className={inputClass("phone")}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <select
              value={form.jobTitle}
              onChange={(e) => setField("jobTitle", e.target.value)}
              className={selectClass("jobTitle", !!form.jobTitle)}
            >
              <option value="">Select your role</option>
              <option value="CISO">CISO</option>
              <option value="Chief Compliance Officer">
                Chief Compliance Officer
              </option>
              <option value="CIO">CIO</option>
              <option value="VP Risk & Compliance">VP Risk &amp; Compliance</option>
              <option value="VP Information Security">
                VP Information Security
              </option>
              <option value="Other">Other</option>
            </select>
            {errors.jobTitle && (
              <p className="text-red-600 text-xs mt-1">{errors.jobTitle}</p>
            )}
          </div>
          <div>
            <select
              value={form.organizationSize}
              onChange={(e) => setField("organizationSize", e.target.value)}
              className={selectClass("organizationSize", !!form.organizationSize)}
            >
              <option value="">Select organization size</option>
              <option value="Less than 50">Less than 50</option>
              <option value="50-500">50–500</option>
              <option value="500-5000">500–5,000</option>
              <option value="5000+">5,000+</option>
            </select>
            {errors.organizationSize && (
              <p className="text-red-600 text-xs mt-1">
                {errors.organizationSize}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Industry + AI Usage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <select
              value={form.industry}
              onChange={(e) => setField("industry", e.target.value)}
              className={selectClass("industry", !!form.industry)}
            >
              <option value="">Select industry</option>
              <option value="Healthcare Provider">Healthcare Provider</option>
              <option value="Health System">Health System</option>
              <option value="Payer/Insurance">Payer/Insurance</option>
              <option value="Medical Device">Medical Device</option>
              <option value="Other Healthcare">Other Healthcare</option>
            </select>
            {errors.industry && (
              <p className="text-red-600 text-xs mt-1">{errors.industry}</p>
            )}
          </div>
          <div>
            <select
              value={form.currentlyUsingAI}
              onChange={(e) => setField("currentlyUsingAI", e.target.value)}
              className={selectClass("currentlyUsingAI", !!form.currentlyUsingAI)}
            >
              <option value="">Currently using AI?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
            {errors.currentlyUsingAI && (
              <p className="text-red-600 text-xs mt-1">
                {errors.currentlyUsingAI}
              </p>
            )}
          </div>
        </div>

        {/* General error */}
        {errors.general && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {errors.general}
          </p>
        )}

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: loading ? "#006666" : "#008B8B",
              minWidth: 280,
            }}
            onMouseEnter={(e) => {
              if (!loading)
                (e.currentTarget as HTMLButtonElement).style.background = "#007777";
            }}
            onMouseLeave={(e) => {
              if (!loading)
                (e.currentTarget as HTMLButtonElement).style.background = "#008B8B";
            }}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Processing...
              </>
            ) : (
              "GET MY FREE SCORECARD →"
            )}
          </button>
        </div>
      </form>

      {/* Social proof */}
      <p className="text-center text-sm text-gray-600 mt-6">
        📊 Used by 50+ healthcare enterprises
      </p>
    </div>
  );
}
