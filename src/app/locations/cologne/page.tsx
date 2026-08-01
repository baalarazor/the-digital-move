import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & SEO in Cologne | The Digital Move",
  description: "The Digital Move helps Cologne businesses improve websites, SEO, and automation with practical digital services.",
  alternates: { canonical: "https://thedigitalmove.com/locations/cologne" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Services in Cologne",
  description: "Website development, SEO, and workflow automation services for Cologne businesses.",
  url: "https://thedigitalmove.com/locations/cologne",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Cologne", url: "https://thedigitalmove.com/locations/cologne" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you work with companies in Cologne?",
    answer: "Yes. We support Cologne businesses with modern websites, search optimization, and workflow automation.",
  },
]);

export default function CologneLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Cologne</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Cologne Companies</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We help Cologne SMEs build stronger digital foundations, improve online visibility, and streamline operations through automation.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
