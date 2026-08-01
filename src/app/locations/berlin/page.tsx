import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development, SEO & AI Automation in Berlin | The Digital Move",
  description: "The Digital Move helps Berlin businesses improve their websites, SEO, AI automation, and workflow systems with practical digital solutions.",
  alternates: { canonical: "https://thedigitalmove.com/locations/berlin" },
  openGraph: {
    title: "Website Development, SEO & AI Automation in Berlin | The Digital Move",
    description: "Practical digital growth support for Berlin businesses, from website development to AI automation and SEO.",
    url: "https://thedigitalmove.com/locations/berlin",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "Website Development, SEO and AI Automation in Berlin",
  description: "Local digital services for Berlin businesses including website development, SEO, AI automation, and workflow optimization.",
  url: "https://thedigitalmove.com/locations/berlin",
  serviceType: "Local Digital Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Berlin", url: "https://thedigitalmove.com/locations/berlin" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you work with Berlin businesses?",
    answer: "Yes. We support Berlin-based companies with websites, SEO, automation, and digital transformation projects tailored to local business goals.",
  },
  {
    question: "Can you help with local SEO in Berlin?",
    answer: "Yes. We improve local visibility, technical SEO, and conversion-focused pages so businesses are easier to find in search results.",
  },
]);

export default function BerlinLocationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Berlin</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development, SEO & AI Automation for Berlin Businesses</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            The Digital Move helps Berlin companies modernize their websites, strengthen local search visibility, and build smarter internal processes with automation and AI.
          </p>
        </div>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Why Berlin businesses choose us</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We combine SEO, website development, AI automation, and business workflow consulting in one service model. Our approach is practical for founders, managers, and marketing teams that want thoughtful growth without unnecessary complexity.
          </p>
        </section>
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-950">SEO for local visibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">We improve technical SEO, local relevance, and conversion-focused pages for Google search.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Modern websites</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">We build campaigns and digital experiences that make your work easier to understand and act on.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Automation and AI</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">We help teams remove manual bottlenecks and create smarter internal and customer-facing processes.</p>
          </div>
        </section>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
