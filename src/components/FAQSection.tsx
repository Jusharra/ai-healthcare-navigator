import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve regulated industries where AI governance, compliance, and assurance are mission-critical. Our current focus verticals are healthcare (HIPAA, ISO 42001), construction & infrastructure (OSHA, ISO 45001), and energy & industrial (EPA, NERC CIP, API standards). We apply the same governance methodology across each sector with industry-specific expertise.",
  },
  {
    q: "What's the difference between governance consulting and assurance engineering?",
    a: "Governance consulting produces documentation, frameworks, and recommendations. Assurance engineering produces working systems — automated evidence pipelines, policy-as-code, control mapping, and audit-ready outputs that hold up under regulatory scrutiny and due diligence. We deliver the latter. Most firms only deliver the former.",
  },
  {
    q: "How do you work with existing compliance teams?",
    a: "We operate as an extension of your team, not a replacement. If you have a compliance officer, legal counsel, or internal IT/security function, we plug in at the AI governance layer — the gap most compliance teams aren't staffed or trained to cover. We handle the AI-specific frameworks, evidence pipelines, and board reporting so your team can focus on what they already own.",
  },
  {
    q: "What does an engagement typically look like?",
    a: "Most engagements start with an AI Risk & Governance Assessment (2–4 weeks) — a comprehensive audit of AI usage, regulatory exposure, and governance gaps, culminating in a board-ready roadmap. From there, organizations typically move to Compliance Engineering (policy-as-code, control mapping, evidence pipelines), followed by a Governance Implementation and optional Assurance Retainer for ongoing oversight.",
  },
  {
    q: "How quickly will we see value?",
    a: "Assessment engagements deliver a board-ready roadmap within 2–4 weeks. Compliance engineering work typically runs 8–16 weeks depending on scope. Organizations in active due diligence or pre-audit situations can be prioritized for rapid-turnaround diagnostics.",
  },
  {
    q: "How is this different from generic AI vendors or Big 4 consultants?",
    a: "Generic AI vendors lack regulatory compliance expertise and don't build governance systems. Big 4 consultants advise but don't build operational systems — and their rates reflect that overhead. We do both: we engineer working governance systems AND provide the assurance layer that satisfies regulators, boards, and acquirers — at a fraction of the Big 4 cost.",
  },
  {
    q: "Can you help with AI governance during an acquisition or due diligence?",
    a: "Yes. We conduct rapid AI governance diagnostics (2–4 weeks) that provide acquirers and investors with audit-ready documentation of your AI usage, risk posture, and compliance status. Addressing governance gaps before due diligence prevents valuation haircuts and deal friction.",
  },
  {
    q: "Do you work with organizations that aren't using AI yet?",
    a: "Absolutely. An AI governance framework built before deployment is significantly easier and less expensive than retrofitting governance onto systems already in production. We work with organizations at all stages — pre-deployment, actively deploying, and those inheriting ungoverned AI from vendors or acquisitions.",
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
