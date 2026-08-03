import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development and SEO in Dresden | The Digital Move",
  description:
    "The Digital Move helps Dresden businesses improve website performance, local SEO visibility and digital transformation readiness.",
  alternates: { canonical: "https://thedigitalmove.com/locations/dresden" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Growth Services in Dresden",
  description: "Website development, SEO and automation support for Dresden companies.",
  url: "https://thedigitalmove.com/locations/dresden",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Dresden", url: "https://thedigitalmove.com/locations/dresden" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can you help Dresden companies with service-page SEO?",
    answer: "Yes. We structure service pages around search intent and conversion actions to improve qualified inbound enquiries.",
  },
]);

export default function DresdenLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Dresden</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Dresden Businesses</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We support Dresden businesses with conversion-focused websites, technical SEO and AI-enabled workflow improvements that strengthen long-term growth.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
