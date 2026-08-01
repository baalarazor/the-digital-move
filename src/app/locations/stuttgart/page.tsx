import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & SEO in Stuttgart | The Digital Move",
  description: "The Digital Move helps Stuttgart businesses modernize websites, improve SEO, and automate workflows for better growth.",
  alternates: { canonical: "https://thedigitalmove.com/locations/stuttgart" },
};

const serviceSchema = buildServiceSchema({
  name: "Digital Services in Stuttgart",
  description: "Website development, SEO, and workflow automation services for Stuttgart businesses.",
  url: "https://thedigitalmove.com/locations/stuttgart",
  serviceType: "Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Stuttgart", url: "https://thedigitalmove.com/locations/stuttgart" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you support businesses in Stuttgart?",
    answer: "Yes. We help Stuttgart companies improve online visibility, customer experience, and internal automation.",
  },
]);

export default function StuttgartLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Stuttgart</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Digital Growth Services for Stuttgart Companies</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We support Stuttgart SMEs with websites, SEO, and automation that make growth more practical and scalable.
          </p>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
