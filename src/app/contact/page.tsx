import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "Contact The Digital Move | Website, SEO and AI Automation",
  description:
    "Contact The Digital Move to discuss website development, SEO strategy, AI automation and digital transformation goals for your business.",
  alternates: { canonical: "https://thedigitalmove.com/contact" },
};

export default function ContactPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Contact</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Start a Strategic Conversation About Your Digital Growth</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Share your goals and current constraints, and we will map the highest-impact next steps for website performance, search visibility and automation readiness.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans#lead-form" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Book a Consultation</Link>
            <Link href="/business-health-check" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Business Health Check</Link>
          </div>
        </section>
      </main>
    </PageWithHeader>
  );
}
