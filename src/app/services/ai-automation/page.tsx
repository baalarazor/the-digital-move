import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import Link from "next/link";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Automation Services in Berlin | The Digital Move",
  description: "AI automation services in Berlin to reduce manual work, improve decision-making, and create intelligent workflows. Expert consultation for digital transformation.",
  keywords: ["AI automation", "artificial intelligence automation", "AI services Berlin", "intelligent automation", "AI consulting Berlin"],
  alternates: {
    canonical: "https://thedigitalmove.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation Services in Berlin | The Digital Move",
    description: "AI automation services in Berlin for intelligent workflows, decision support, and business productivity.",
    url: "https://thedigitalmove.com/services/ai-automation",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services in Berlin | The Digital Move",
    description: "AI automation consulting and implementation for businesses in Berlin.",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "AI Automation Services in Berlin",
  description: "AI automation services in Berlin to reduce manual work, improve decision-making, and create intelligent workflows.",
  url: "https://thedigitalmove.com/services/ai-automation",
  serviceType: "AI Automation",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
  { name: "AI Automation", url: "https://thedigitalmove.com/services/ai-automation" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How can AI automation help a small business?",
    answer: "It can reduce repetitive tasks, improve response times, and help teams work from structured data and smart workflows instead of manual effort.",
  },
  {
    question: "Do you implement AI chatbots and automation together?",
    answer: "Yes. We often combine AI chatbots, lead capture, and internal automation to create a more connected customer experience.",
  },
]);

export default function AIAutomationPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="font-medium text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">AI Automation</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">AI Automation for German Businesses That Want Faster Decisions</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We help companies use AI and automation to reduce repetitive work, improve customer response times, and make knowledge and operations easier to manage.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              We build AI chatbots, document processing flows, decision support tools, sales assistants, and workflow automations that fit into real business processes. This is a practical route to AI adoption without adding unnecessary complexity.
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>• AI copilots for sales, customer service, or internal process guidance</li>
              <li>• Intelligent data capture, classification, and decision support</li>
              <li>• Automated document handling, approvals, and customer responses</li>
              <li>• Custom AI workflows that integrate with your existing tools</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              AI automation is ideal for businesses that rely on repeatable decisions, customer outreach, knowledge search, or document review. We help teams move from manual effort to smart digital assistance without disrupting day-to-day operations.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>1. We map your current process and identify AI-enabled opportunities.</li>
              <li>2. We design the automation workflow and data flow across systems.</li>
              <li>3. We build, test, and deploy a production-ready AI workflow.</li>
              <li>4. We review results, refine outcomes, and scale the solution.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Search terms we help target</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">AI chatbot Germany, AI automation agency, business automation Germany, AI automation services Berlin, AI consultant Germany.</p>
          </section>
        </div>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
