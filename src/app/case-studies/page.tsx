import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies | Digital Growth Results | The Digital Move",
  description:
    "Case-study style breakdowns of website development, SEO and automation initiatives designed for measurable business outcomes.",
  alternates: { canonical: "https://thedigitalmove.com/case-studies" },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Case Studies", url: "https://thedigitalmove.com/case-studies" },
]);

const caseStudies = [
  {
    title: "From fragmented pages to lead-focused service architecture",
    h3: "Website architecture, metadata, and content cluster redesign",
    summary:
      "How restructuring services, internal links and conversion pathways improves commercial intent visibility and lead quality.",
  },
  {
    title: "Local SEO expansion across German cities",
    h3: "Location strategy, schema coverage and query-to-page mapping",
    summary:
      "How city landing pages aligned to user intent increase local discoverability and qualified inbound enquiries.",
  },
  {
    title: "Healthcare solution cluster rollout",
    h3: "Industry segmentation, patient journey UX and trust content",
    summary:
      "How profession-specific pages improve topical authority and conversion confidence for specialized service categories.",
  },
];

export default function CaseStudiesPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Case Studies</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Case Studies: Strategy to Execution to Business Impact</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            These case-study frameworks explain how digital architecture decisions connect to organic growth and lead generation outcomes.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
              <h3 className="mt-3 text-lg font-semibold text-slate-800">{item.h3}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </section>
      </main>
      <JsonLd data={breadcrumb} />
    </PageWithHeader>
  );
}
