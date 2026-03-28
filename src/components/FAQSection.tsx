import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does the customer recall system cost?",
    a: "Start with a Customer Growth Audit ($997, 60 min) credited toward full system setup. Full customer reactivation systems range from $3,000–$7,000 depending on organization size and complexity. You own the system outright no ongoing subscriptions.",
  },
  {
    q: "Is the system HIPAA compliant?",
    a: "Yes, built in from day one. Your patient database includes an audit trail of all outreach communications, data is stored in a practice-owned environment, and we document the setup for compliance review.",
  },
  {
    q: "What if I don't have a customer database?",
    a: "We build one. Intake forms, database setup, and automation are all included. You own it from day one exportable anytime for compliance reporting, lending, or M&A.",
  },
  {
    q: "Do I own my customer data?",
    a: "100%. Your customer list lives in your own database. You can export it anytime for compliance reporting, lending applications, M&A valuation, or any business purpose. No vendor lock-in.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are live within 2 weeks. You'll see the first recall campaigns running within 14 days of starting.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "Dental practices, primary care clinics, urgent care centers, specialty practices, health insurance plans, construction companies, and more. Any organization with a customer, patient or member list that needs automated re-engagement.",
  },
  {
    q: "How quickly will we see results?",
    a: "Most businesses see the first recall campaigns running within 14 days and start recovering lapsed customers within the first 30–90 days. No-show rates typically improve within the first month once automated reminders are live.",
  },
  {
    q: "How does this help with no-shows?",
    a: "Automated appointment reminders go out at 7 days, 3 days, and 1 hour before each scheduled visit. This alone typically reduces no-show rates by 40–60% for practices we work with.",
  },
  {
    q: "Can you help with AI governance for a healthcare, construction, or enterprise?",
    a: "Yes. We offer full HIPAA, OSHA + ISO 42001 governance frameworks for enterprises and health insurance plans. Governance engagements start with an AI Risk & Governance Assessment (2–4 weeks), followed by system design and implementation.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Start with a 60-minute Customer Growth Audit ($997). We identify your retention gaps, show you a live demo of the recall system, and deliver a scoped implementation plan. Most practices are fully live within 2 weeks of starting.",
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
