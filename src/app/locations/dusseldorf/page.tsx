import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & SEO in Düsseldorf | The Digital Move",
  description: "The Digital Move helps Düsseldorf businesses improve websites, SEO, and automation with practical digital services.",
  alternates: { canonical: "https://thedigitalmove.com/locations/dusseldorf" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Services in Düsseldorf",
  description: "Website development, SEO, and workflow automation services for Düsseldorf businesses.",
  url: "https://thedigitalmove.com/locations/dusseldorf",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Düsseldorf", url: "https://thedigitalmove.com/locations/dusseldorf" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you support companies in Düsseldorf?",
    answer: "Yes. We work with Düsseldorf businesses to improve digital presence and operations through modern websites and automation.",
  },
]);

export default function DusseldorfLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Düsseldorf</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Düsseldorf Companies</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We help Düsseldorf companies improve online visibility and adopt more efficient digital processes with modern websites and automation.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
