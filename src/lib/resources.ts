export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  pdfPath: string;
  captureHeadline: string;
  captureSubtext: string;
  buttonLabel: string;
  icon: string; // emoji for card visual
}

export const RESOURCES: Resource[] = [
  {
    slug: "dental-ai-success-guide",
    title: "Dental AI Success Guide",
    description:
      "A practical guide for dental practices on adopting AI tools to automate scheduling, reduce no-shows, and grow patient revenue.",
    category: "Guides",
    categoryColor: "#ea580c",
    pdfPath: "/assets/resources/Dental_AI_Success_Guide.pdf",
    captureHeadline: "Dental AI Success Guide",
    captureSubtext:
      "A practical guide for dental practices on adopting AI tools to automate scheduling, reduce no-shows, and grow patient revenue.",
    buttonLabel: "Download Guide",
    icon: "🦷",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
