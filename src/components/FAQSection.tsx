import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I know your AI systems are actually HIPAA compliant?",
    a: "We're ISO 27001/42001 certified with 6 years healthcare cybersecurity experience. Every system includes a Business Associate Agreement (BAA), encrypted data transmission, audit trails, and full compliance documentation for your HIPAA officer.",
  },
  {
    q: "Will this replace our front desk staff?",
    a: "No—it augments them. Your team handles in-person patients and complex issues. The AI handles overflow, after-hours, and routine inquiries. We've never seen a practice reduce headcount; they reallocate staff to higher-value work.",
  },
  {
    q: "What if patients don't like talking to AI?",
    a: "Industry data shows 89% patient approval ratings because patients get instant answers vs. voicemail. If someone needs a human, the system transfers seamlessly with full context. Patients prefer immediate help over waiting hours for callbacks.",
  },
  {
    q: "How quickly will we see ROI?",
    a: "Most practices see positive ROI within 3–6 months. Revenue capture starts immediately (first incremental appointment booked), no-show reduction is visible within 30 days, and staff efficiency gains accumulate weekly.",
  },
  {
    q: "What about integration with our existing practice management system?",
    a: "We have pre-built integrations with Dentrix, Eaglesoft, Athenahealth, eClinicalWorks, NextGen, Epic, and other major systems. Direct two-way sync means AI books appointments that instantly appear in your calendar.",
  },
  {
    q: "How is this different from generic AI vendors or Big 4 consultants?",
    a: "Generic AI vendors lack healthcare compliance expertise (no HIPAA, no ISO 42001, no BAAs). Big 4 consultants advise but don't build operational systems. We do both: we build revenue-generating AI systems AND govern them with ISO 42001 frameworks—specifically for healthcare.",
  },
  {
    q: "Can you help with AI governance during an acquisition or due diligence?",
    a: "Yes. We conduct rapid AI governance diagnostics (2–4 weeks) that provide acquirers/investors with audit-ready documentation of your AI usage, risk posture, and compliance status. Prevents valuation haircuts due to governance gaps.",
  },
  {
    q: "What if our practice can't afford to disrupt operations during implementation?",
    a: "We use phased rollouts starting with low-risk deployments (after-hours voice AI first, then expand to peak hours). Implementation typically takes 8\u201312 weeks with minimal staff training (2\u20133 hours). No 'flip the switch' disruption.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
