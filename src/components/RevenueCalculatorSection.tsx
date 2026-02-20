import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  calculateRevenueLoss,
  sanitizeText,
  isValidEmail,
  isValidPhone,
} from "@/lib/calculators";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  monthlyAppointments: string;
}

type FormErrors = Partial<Record<keyof FormData | "general", string>>;

const SPECIALTIES = [
  "Dental",
  "Primary Care",
  "Orthopedics",
  "Cardiology",
  "Dermatology",
  "Ophthalmology",
  "Other",
];

// NOTE: In production, replace this direct webhook call with a backend proxy
// (e.g., a serverless function) so the URL is not exposed in client-side code.
const WEBHOOK_URL = import.meta.env.VITE_LEAD_CAPTURE_WEBHOOK_URL as string | undefined;

export default function RevenueCalculatorSection() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialty: "",
    monthlyAppointments: "",
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
    if (!form.specialty) e.specialty = "Please select your specialty.";

    const appts = Number(form.monthlyAppointments);
    if (!form.monthlyAppointments || isNaN(appts) || appts < 1 || appts > 10000)
      e.monthlyAppointments = "Please enter a number between 1 and 10,000.";

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
      specialty: form.specialty,
      monthlyAppointments: Number(form.monthlyAppointments),
    };

    // Calculate results client-side for the results page
    const results = calculateRevenueLoss(payload.specialty, payload.monthlyAppointments);

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
      "revenueCalculatorData",
      JSON.stringify({ ...payload, ...results })
    );

    navigate("/revenue-calculator-results");
  }

  function setField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div
      className="mt-10 rounded-xl p-8 sm:p-10"
      style={{
        background: "#FFE5D9",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-3xl mb-2">💰</div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          FREE REVENUE RECOVERY CALCULATOR
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          See How Much Revenue You're Losing to Missed Calls, No-Shows, and Hold
          Times
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
          <span>✓ Takes 60 seconds</span>
          <span>✓ Instant personalized report</span>
          <span>✓ No credit card required</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              maxLength={50}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              maxLength={50}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="john.smith@clinic.com"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="555-123-4567"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.phone ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Practice Specialty */}
          <div>
            <select
              value={form.specialty}
              onChange={(e) => setField("specialty", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.specialty ? "border-red-500" : "border-gray-200"
              } ${!form.specialty ? "text-gray-400" : ""}`}
            >
              <option value="">Select your specialty</option>
              {SPECIALTIES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <p className="text-red-600 text-xs mt-1">{errors.specialty}</p>
            )}
          </div>

          {/* Monthly Appointments */}
          <div>
            <input
              type="number"
              placeholder="Monthly Appointments (e.g. 800)"
              min={1}
              max={10000}
              value={form.monthlyAppointments}
              onChange={(e) => setField("monthlyAppointments", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.monthlyAppointments ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.monthlyAppointments && (
              <p className="text-red-600 text-xs mt-1">
                {errors.monthlyAppointments}
              </p>
            )}
          </div>
        </div>

        {/* General error */}
        {errors.general && (
          <p className="text-red-600 text-sm mb-4 text-center">{errors.general}</p>
        )}

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: loading ? "#c45220" : "#FF6B35",
              minWidth: 260,
            }}
            onMouseEnter={(e) => {
              if (!loading)
                (e.currentTarget as HTMLButtonElement).style.background = "#e55a28";
            }}
            onMouseLeave={(e) => {
              if (!loading)
                (e.currentTarget as HTMLButtonElement).style.background = "#FF6B35";
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
                Calculating...
              </>
            ) : (
              "GET MY FREE CALCULATOR →"
            )}
          </button>
        </div>
      </form>

      {/* Social proof */}
      <p className="text-center text-sm text-gray-600 mt-6">
        📊 Used by 500+ healthcare practices
      </p>
    </div>
  );
}
