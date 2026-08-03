import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "AI Automation for German SMEs: Where to Start | The Digital Move",
  description: "A practical guide to AI automation for German SMEs, with clear first steps for improving workflows and customer support.",
  alternates: { canonical: "https://thedigitalmove.com/blog/ai-automation-german-smes-where-to-start" },
};

export default function BlogPostPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Automation for German SMEs: Where to Start",
    description: "A practical guide to AI automation for German SMEs, with clear first steps for improving workflows and customer support.",
    author: {
      "@type": "Person",
      name: "Baala",
    },
    publisher: {
      "@type": "Organization",
      name: "The Digital Move",
      logo: {
        "@type": "ImageObject",
        url: "https://thedigitalmove.com/og-image.svg",
      },
    },
    mainEntityOfPage: "https://thedigitalmove.com/blog/ai-automation-german-smes-where-to-start",
  };

  return (
    <PageWithHeader>
      <main className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="font-medium text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">AI Automation for German SMEs</span>
        </nav>
        <article className="mt-8 space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">AI Automation for German SMEs: Where to Start</h1>
            <p className="text-lg leading-8 text-slate-600">Many SMEs hesitate to adopt AI because they do not know which problem to solve first. The best starting point is usually a repetitive workflow or a customer interaction that already consumes too much time.</p>
          </div>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Start with the biggest friction point</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">The fastest results often come from automating lead routing, FAQ responses, document handling, or appointment scheduling. Once the workflow is simple and reliable, it becomes easier to expand to larger use cases.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Related implementation pages</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/services/ai-automation" className="text-blue-600 hover:text-blue-700">AI Automation Service</Link>
              <Link href="/services/automation" className="text-blue-600 hover:text-blue-700">Business Automation Service</Link>
              <Link href="/services/ai-chatbots" className="text-blue-600 hover:text-blue-700">AI Chatbots Service</Link>
            </div>
          </section>
        </article>
      </main>
      <JsonLd data={articleSchema} />
    </PageWithHeader>
  );
}
