// ─── Track 1: Revenue Recovery Calculator ────────────────────────────────────

export interface SpecialtyData {
  avgApptValue: number;
  afterHoursRate: number;
  weeklyAfterHoursCalls: number;
  holdAbandonRate: number;
  noShowRate: number;
  noShowMultiplier: number;
}

export const specialtyData: Record<string, SpecialtyData> = {
  Dental: {
    avgApptValue: 200,
    afterHoursRate: 0.25,
    weeklyAfterHoursCalls: 15,
    holdAbandonRate: 0.167,
    noShowRate: 0.22,
    noShowMultiplier: 1.2,
  },
  "Primary Care": {
    avgApptValue: 175,
    afterHoursRate: 0.2,
    weeklyAfterHoursCalls: 12,
    holdAbandonRate: 0.18,
    noShowRate: 0.2,
    noShowMultiplier: 1.0,
  },
  Orthopedics: {
    avgApptValue: 350,
    afterHoursRate: 0.3,
    weeklyAfterHoursCalls: 18,
    holdAbandonRate: 0.15,
    noShowRate: 0.18,
    noShowMultiplier: 1.5,
  },
  Cardiology: {
    avgApptValue: 400,
    afterHoursRate: 0.28,
    weeklyAfterHoursCalls: 16,
    holdAbandonRate: 0.14,
    noShowRate: 0.16,
    noShowMultiplier: 1.6,
  },
  Dermatology: {
    avgApptValue: 225,
    afterHoursRate: 0.22,
    weeklyAfterHoursCalls: 14,
    holdAbandonRate: 0.17,
    noShowRate: 0.19,
    noShowMultiplier: 1.1,
  },
  Ophthalmology: {
    avgApptValue: 275,
    afterHoursRate: 0.24,
    weeklyAfterHoursCalls: 13,
    holdAbandonRate: 0.16,
    noShowRate: 0.17,
    noShowMultiplier: 1.3,
  },
  Other: {
    avgApptValue: 225,
    afterHoursRate: 0.22,
    weeklyAfterHoursCalls: 13,
    holdAbandonRate: 0.17,
    noShowRate: 0.21,
    noShowMultiplier: 1.1,
  },
};

export interface RevenueLossResult {
  afterHoursLoss: number;
  holdTimeLoss: number;
  noShowLoss: number;
  totalLoss: number;
  monthlyLoss: number;
  dailyLoss: number;
}

export function calculateRevenueLoss(
  specialty: string,
  monthlyAppointments: number
): RevenueLossResult {
  const data = specialtyData[specialty];

  const afterHoursLoss =
    data.avgApptValue * data.afterHoursRate * data.weeklyAfterHoursCalls * 52;

  const holdTimeLoss =
    monthlyAppointments * 12 * data.holdAbandonRate * data.avgApptValue;

  const noShowLoss =
    monthlyAppointments *
    12 *
    data.noShowRate *
    data.avgApptValue *
    data.noShowMultiplier;

  const totalLoss = afterHoursLoss + holdTimeLoss + noShowLoss;

  return {
    afterHoursLoss: Math.round(afterHoursLoss),
    holdTimeLoss: Math.round(holdTimeLoss),
    noShowLoss: Math.round(noShowLoss),
    totalLoss: Math.round(totalLoss),
    monthlyLoss: Math.round(totalLoss / 12),
    dailyLoss: Math.round(totalLoss / 365),
  };
}

// ─── Track 2: AI Governance Readiness Scorecard ───────────────────────────────

export type RiskLevel = "High Risk" | "Medium Risk" | "Low Risk";

export interface GovernanceScoreResult {
  rawScore: number;
  score: number; // scaled 0–100
  riskLevel: RiskLevel;
  riskColor: string;
}

export function calculateGovernanceScore(
  jobTitle: string,
  orgSize: string,
  currentlyUsingAI: string
): GovernanceScoreResult {
  let score = 0;

  const aiUsagePoints: Record<string, number> = {
    Yes: 20,
    No: 5,
    "Not Sure": 10,
  };
  const jobTitlePoints: Record<string, number> = {
    CISO: 20,
    "Chief Compliance Officer": 20,
    CIO: 15,
    "VP Risk & Compliance": 15,
    "VP Information Security": 18,
    Other: 8,
  };
  const orgSizePoints: Record<string, number> = {
    "Less than 50": 5,
    "50-500": 10,
    "500-5000": 15,
    "5000+": 20,
  };

  score += aiUsagePoints[currentlyUsingAI] ?? 0;
  score += jobTitlePoints[jobTitle] ?? 0;
  score += orgSizePoints[orgSize] ?? 0;

  // No scaling - just use the raw score (max 60)
  const riskLevel: RiskLevel =
    score < 40 ? "High Risk" : score < 70 ? "Medium Risk" : "Low Risk";

  const riskColor =
    riskLevel === "High Risk"
      ? "#DC2626"
      : riskLevel === "Medium Risk"
        ? "#F59E0B"
        : "#10B981";

  return { rawScore: score, score, riskLevel, riskColor };
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Strip HTML tags and trim – basic XSS guard for text inputs. */
export function sanitizeText(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** Returns true if phone has 10+ digits. */
export function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length >= 10;
}

/** Returns true for a valid email address. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
