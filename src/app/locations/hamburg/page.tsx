import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & SEO in Hamburg | The Digital Move",
  description: "The Digital Move helps Hamburg businesses improve websites, SEO, and digital automation to grow more efficiently.",
  alternates: { canonical: "https://thedigitalmove.com/locations/hamburg" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Services in Hamburg",
  description: "Website development, SEO, and automation services for Hamburg businesses.",
  url: "https://thedigitalmove.com/locations/hamburg",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Hamburg", url: "https://thedigitalmove.com/locations/hamburg" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can you help Hamburg businesses with SEO and automation?",
    answer: "Yes. We support Hamburg companies with search optimization, lead-focused websites, and automation tools that reduce manual effort.",
  },
]);

export default function HamburgLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Hamburg</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Hamburg Companies</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We help Hamburg SMEs build stronger online presence, attract more qualified leads, and simplify operations with automation and AI.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
