import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development, SEO and AI Automation in Leipzig | The Digital Move",
  description:
    "Helping Leipzig businesses grow with website development, SEO strategy, AI automation and digital transformation support.",
  alternates: { canonical: "https://thedigitalmove.com/locations/leipzig" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Growth Services in Leipzig",
  description: "Website development, SEO and automation for businesses in Leipzig.",
  url: "https://thedigitalmove.com/locations/leipzig",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Leipzig", url: "https://thedigitalmove.com/locations/leipzig" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you support Leipzig businesses with local SEO?",
    answer: "Yes. We create city-intent pages, technical SEO improvements and conversion-focused website structures for Leipzig companies.",
  },
]);

export default function LeipzigLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Leipzig</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development, SEO and AI Automation for Leipzig Businesses</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We help Leipzig businesses build high-trust websites, improve Google visibility and automate operational workflows for sustainable growth.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
