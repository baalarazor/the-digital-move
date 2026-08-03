import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio | Website, SEO and Automation Projects | The Digital Move",
  description:
    "Explore selected digital projects across website development, SEO growth and automation systems built for German businesses.",
  alternates: { canonical: "https://thedigitalmove.com/portfolio" },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Portfolio", url: "https://thedigitalmove.com/portfolio" },
]);

const samples = [
  {
    title: "Healthcare Conversion Architecture",
    detail: "Specialty landing ecosystem for medical providers with booking-focused patient journeys.",
  },
  {
    title: "B2B Services SEO Expansion",
    detail: "Service + city page architecture designed to increase qualified inbound pipeline from organic search.",
  },
  {
    title: "Automation Readiness Framework",
    detail: "Operational workflow analysis and staged automation rollout for SME teams.",
  },
];

export default function PortfolioPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Portfolio</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Portfolio: Strategic Digital Execution with Commercial Outcomes</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            This section showcases the type of work The Digital Move delivers for businesses focused on long-term digital growth and operational clarity.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {samples.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Looking for industry-specific project examples?</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Explore Industries</Link>
            <Link href="/case-studies" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">View Case Studies</Link>
          </div>
        </section>
      </main>
      <JsonLd data={breadcrumb} />
    </PageWithHeader>
  );
}
