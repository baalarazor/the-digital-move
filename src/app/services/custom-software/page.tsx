import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Software Development in Berlin | The Digital Move",
  description: "Custom software development services in Berlin for internal dashboards, reporting tools, and business automation platforms. Tailored solutions for your business.",
  keywords: ["custom software development Berlin", "software development Berlin", "business software Berlin", "internal tools development", "software consulting"],
  alternates: {
    canonical: "https://thedigitalmove.com/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Development in Berlin | The Digital Move",
    description: "Custom software, dashboards, internal tools, and automation platforms for businesses in Berlin.",
    url: "https://thedigitalmove.com/services/custom-software",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development in Berlin | The Digital Move",
    description: "Tailored software solutions for dashboards, reporting, and operations in Berlin.",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "Custom Software Development in Berlin",
  description: "Custom software development in Berlin for dashboards, reporting tools, and business automation platforms.",
  url: "https://thedigitalmove.com/services/custom-software",
  serviceType: "Custom Software Development",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
  { name: "Custom Software", url: "https://thedigitalmove.com/services/custom-software" },
]);

export default function CustomSoftwarePage() {
  return (
    <>
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Custom Software</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We build custom internal tools, dashboards, and automation platforms that solve your unique business challenges.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Tailored internal dashboards and reporting systems</li>
            <li>• Business automation platforms for operations and finance</li>
            <li>• Data integration, analytics, and decision support tools</li>
            <li>• Production-ready software built for reliability and scale</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Ideal for businesses that need custom workflows, visibility into operations, and software that supports growth without forcing teams into manual workarounds.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We understand your current systems, data, and reporting needs.</li>
            <li>2. We design a custom solution to automate and consolidate critical workflows.</li>
            <li>3. We develop, test, and deploy a secure software platform.</li>
            <li>4. We provide handover, training, and ongoing improvement support.</li>
          </ol>
        </section>
      </div>
    </main>
    <JsonLd data={serviceSchema} />
    <JsonLd data={breadcrumbSchema} />
    </>
  );
}
