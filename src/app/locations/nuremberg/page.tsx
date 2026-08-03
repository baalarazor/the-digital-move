import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development and Digital Transformation in Nuremberg | The Digital Move",
  description:
    "Helping Nuremberg businesses improve web presence, SEO performance and automation maturity with practical digital strategy.",
  alternates: { canonical: "https://thedigitalmove.com/locations/nuremberg" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Growth Services in Nuremberg",
  description: "Website development, SEO and automation services for Nuremberg businesses.",
  url: "https://thedigitalmove.com/locations/nuremberg",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Nuremberg", url: "https://thedigitalmove.com/locations/nuremberg" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you work with small and medium businesses in Nuremberg?",
    answer: "Yes. We help Nuremberg SMEs improve lead generation through better websites, search visibility and digital process optimization.",
  },
]);

export default function NurembergLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Nuremberg</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development and SEO for Nuremberg Businesses</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            The Digital Move partners with Nuremberg businesses to build modern websites, improve Google rankings and create scalable digital growth systems.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
