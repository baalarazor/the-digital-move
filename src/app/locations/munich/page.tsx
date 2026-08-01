import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & SEO in Munich | The Digital Move",
  description: "The Digital Move supports Munich businesses with modern websites, SEO, AI automation, and workflow improvement projects.",
  alternates: { canonical: "https://thedigitalmove.com/locations/munich" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Growth Services in Munich",
  description: "SEO, website development, and automation services for Munich-based businesses.",
  url: "https://thedigitalmove.com/locations/munich",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Munich", url: "https://thedigitalmove.com/locations/munich" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you work with companies in Munich?",
    answer: "Yes. We help Munich companies improve their online presence and build digital systems that support growth.",
  },
]);

export default function MunichLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Munich</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Munich Companies</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We support Munich SMEs with websites that convert, SEO that improves visibility, and automation that saves time across daily operations.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
