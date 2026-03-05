import { useState, FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { getResourceBySlug } from "@/lib/resources";
import { sanitizeText, isValidEmail, isValidPhone } from "@/lib/calculators";
import NotFound from "./NotFound";

const WEBHOOK_URL = import.meta.env.VITE_LEAD_CAPTURE_WEBHOOK_URL as
  | string
  | undefined;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceName: string;
}

type FormErrors = Partial<Record<keyof FormData | "general", string>>;

export default function ResourceCapture() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const resource = slug ? getResourceBySlug(slug) : undefined;

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  if (!resource) return <NotFound />;

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

    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      source: "resource-download",
      resourceSlug: resource!.slug,
      resourceTitle: resource!.title,
      firstName: sanitizeText(form.firstName),
      lastName: sanitizeText(form.lastName),
      email: form.email.trim(),
      phone: form.phone.trim(),
      practiceName: sanitizeText(form.practiceName) || undefined,
    };

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
          "Something went wrong. Please try again or email us directly.",
      });
      setLoading(false);
      return;
    }

    navigate(`/download/${resource!.slug}`);
  }

  function setField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    }`;

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

      {/* Capture form */}
      <main className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-6"
          >
            ← Back to resources
          </Link>

          {/* Headline */}
          <div className="mb-8">
            <div
              className="inline-block text-3xl mb-3 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: `${resource.categoryColor}22` }}
            >
              {resource.icon}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {resource.captureHeadline}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              {resource.captureSubtext}
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
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

              <div className="space-y-4">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={(e) => setField("firstName", e.target.value)}
                      maxLength={50}
                      className={inputClass("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => setField("lastName", e.target.value)}
                      maxLength={50}
                      className={inputClass("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jane@yourpractice.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
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

                {/* Practice Name (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Practice / Organization Name{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sunshine Dental Group"
                    value={form.practiceName}
                    onChange={(e) => setField("practiceName", e.target.value)}
                    maxLength={100}
                    className={inputClass("practiceName")}
                  />
                </div>

                {/* General error */}
                {errors.general && (
                  <p className="text-red-600 text-sm text-center">
                    {errors.general}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white text-sm transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: "#008B8B" }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#007777";
                  }}
                  onMouseLeave={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#008B8B";
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
                    resource.buttonLabel
                  )}
                </button>
              </div>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
