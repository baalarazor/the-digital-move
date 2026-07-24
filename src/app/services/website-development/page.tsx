import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development in Berlin | SEO-Friendly Websites | The Digital Move",
  description: "Professional website development in Berlin. Modern, high-converting, SEO-friendly business websites and landing pages that drive results.",
  keywords: ["website development Berlin", "web design Berlin", "SEO website development", "business website Berlin", "landing page development"],
  alternates: {
    canonical: "https://thedigitalmove.com/services/website-development",
  },
  openGraph: {
    title: "Website Development in Berlin | The Digital Move",
    description: "SEO-friendly websites and landing pages in Berlin built for lead generation and growth.",
    url: "https://thedigitalmove.com/services/website-development",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development in Berlin | The Digital Move",
    description: "Modern websites and landing pages for Berlin businesses that need speed, SEO, and conversions.",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "Website Development Services in Berlin",
  description: "Modern, high-converting, SEO-friendly business websites and landing pages in Berlin.",
  url: "https://thedigitalmove.com/services/website-development",
  serviceType: "Website Development",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
  { name: "Website Development", url: "https://thedigitalmove.com/services/website-development" },
]);

export default function WebsiteDevelopmentPage() {
  return (
    <>
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We build modern websites and landing pages designed to convert visitors, improve SEO, and support your business growth goals.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Responsive websites built for performance and accessibility</li>
            <li>• Landing pages optimized for lead generation and conversion</li>
            <li>• SEO-friendly content structure, metadata, and page speed</li>
            <li>• Ongoing site support, analytics, and growth recommendations</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This service is for businesses that want a professional online presence that attracts prospects, communicates value clearly, and converts visitors into leads.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We define your website goals, audience, and conversion targets.</li>
            <li>2. We design the customer experience, page layout, and content flow.</li>
            <li>3. We build the site with modern web technology and SEO best practices.</li>
            <li>4. We launch, monitor performance, and iterate based on visitor data.</li>
          </ol>
        </section>
      </div>
    </main>
    <JsonLd data={serviceSchema} />
    <JsonLd data={breadcrumbSchema} />
    </>
  );
}
