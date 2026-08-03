import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "About The Digital Move | Founder-Led Digital Growth Partner",
  description:
    "Learn how The Digital Move helps German businesses grow through website development, SEO strategy and AI-driven digital transformation.",
  alternates: { canonical: "https://thedigitalmove.com/about" },
};

export default function AboutPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">About</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">About The Digital Move</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The Digital Move is a founder-led digital studio focused on helping businesses grow through clear website positioning, search visibility and practical automation.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We combine strategy, technical execution and conversion-centered UX so businesses can compete for high-intent commercial searches and turn traffic into qualified leads.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Explore Services</Link>
            <Link href="/website-plans" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Founder Initiative</Link>
          </div>
        </section>
      </main>
    </PageWithHeader>
  );
}
