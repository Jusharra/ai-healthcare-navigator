import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does the reactivation system cost?",
    a: "We offer two Revenue Recovery Audits to get started: a Quick Audit ($197, 30 min) or a Deep Audit ($397, 45–60 min). Both include a personalized recovery plan. Full reactivation systems range from $3,000–$7,000 depending on your business size and complexity. You own the system outright — no subscriptions.",
  },
  {
    q: "What if I don't have a customer database?",
    a: "We build one. Website capture form, QR codes, database setup, and automation — all included. You own it from day one.",
  },
  {
    q: "Do I own my customer data?",
    a: "100%. Your list lives in your own database. You can export it anytime for lending, M&A, or any business purpose. No vendor lock-in.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are live within 2 weeks. You'll see the first reactivation campaigns running within 14 days of starting.",
  },
  {
    q: "What about compliance (HIPAA, etc.)?",
    a: "For dental and medical practices, HIPAA governance is built in. For other industries, standard data privacy practices apply.",
  },
  {
    q: "How quickly will we see results?",
    a: "For reactivation systems, most businesses see the first campaigns running within 14 days and start recovering inactive customers in the first month. For AI governance engagements, assessment deliverables are typically ready within 2–4 weeks.",
  },
  {
    q: "How is this different from generic AI vendors or Big 4 consultants?",
    a: "Generic AI vendors lack compliance expertise and don't build governance systems. Big 4 consultants advise but don't build operational systems. We do both: we engineer working reactivation and governance systems — at a fraction of the Big 4 cost.",
  },
  {
    q: "Can you help with AI governance during an acquisition or due diligence?",
    a: "Yes. We conduct rapid AI governance diagnostics (2–4 weeks) that provide acquirers and investors with audit-ready documentation of your AI usage, risk posture, and compliance status. Addressing governance gaps before due diligence prevents valuation haircuts and deal friction.",
  },
  {
    q: "How do you work with existing compliance teams?",
    a: "We operate as an extension of your team, not a replacement. If you have a compliance officer, legal counsel, or internal IT/security function, we plug in at the AI governance layer — the gap most compliance teams aren't staffed or trained to cover.",
  },
  {
    q: "What does an engagement typically look like?",
    a: "Reactivation engagements start with a 15-minute demo, then a scoped proposal. Most businesses are live within 2 weeks. Governance engagements start with an AI Risk & Governance Assessment (2–4 weeks), followed by system design and implementation.",
  },
  {
    q: "Do you work with businesses that aren't using AI yet?",
    a: "Absolutely. Our reactivation systems work for any business with a customer list — no prior AI experience needed. For governance, a framework built before AI deployment is significantly easier and less expensive than retrofitting governance onto systems already in production.",
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
