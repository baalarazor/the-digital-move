import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import Link from "next/link";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

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

const faqSchema = buildFaqSchema([
  {
    question: "Do you build SEO-friendly websites for small businesses in Berlin?",
    answer: "Yes. We design and build websites with fast performance, clear structure, strong calls to action, and technical SEO foundations that support local and national visibility.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely. We often improve older sites to make them faster, easier to use, and more aligned with conversion goals.",
  },
]);

export default function WebsiteDevelopmentPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="font-medium text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Website Development</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development for Berlin Businesses That Need More Leads</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We build modern, conversion-focused websites for dentists, clinics, lawyers, restaurants, retailers, and service businesses that want stronger visibility in Google and better lead generation from their online presence.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What we deliver</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Every site is built with a clear strategy: fast loading, strong mobile UX, clear messaging, compelling calls to action, and structured content that supports search visibility. We focus on pages that help visitors understand your offer quickly and take the next step.
            </p>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-slate-700 md:grid-cols-2">
              <li>• Responsive websites built for performance and accessibility</li>
              <li>• Landing pages optimized for lead generation and conversion</li>
              <li>• SEO-friendly content structure, metadata, and page speed</li>
              <li>• Ongoing site support, analytics, and growth recommendations</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Who benefits most</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              This service is ideal for businesses that want a professional online presence that attracts prospects, communicates value clearly, and converts visitors into leads. We work especially well with local service providers, clinics, law firms, restaurants, and startups that need a more modern digital front door.
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

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Common search terms we help target</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              website development Berlin, professional website for small business Germany, modern business website, web design Berlin, SEO-friendly website development.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-lg font-semibold text-slate-900">Do you build SEO-friendly websites for small businesses in Berlin?</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Yes. We design and build websites with fast performance, clear structure, strong calls to action, and technical SEO foundations that support local and national visibility.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-lg font-semibold text-slate-900">Can you redesign an existing website?</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Absolutely. We often improve older sites to make them faster, easier to use, and more aligned with conversion goals.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
