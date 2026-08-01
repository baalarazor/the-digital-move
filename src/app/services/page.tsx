import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services in Berlin | AI Automation, Websites & System Integration | The Digital Move",
  description: "Explore The Digital Move services in Berlin: AI automation, workflow automation, website development, custom software, and system integration.",
  keywords: [
    "AI automation services Berlin",
    "workflow automation services Berlin",
    "website development services Berlin",
    "custom software Berlin",
    "system integration Berlin",
    "digital transformation services Berlin",
  ],
  alternates: {
    canonical: "https://thedigitalmove.com/services",
  },
  openGraph: {
    title: "Services in Berlin | The Digital Move",
    description: "AI automation, workflow automation, websites, custom software, and integration services for Berlin businesses.",
    url: "https://thedigitalmove.com/services",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services in Berlin | The Digital Move",
    description: "Explore AI automation, websites, custom software, and system integration services in Berlin.",
    images: ["/og-image.svg"],
  },
};

const serviceItems = [
  {
    title: "AI Automation",
    description: "Intelligent automation that reduces manual work, speeds decision making, and powers digital assistants.",
    href: "/services/ai-automation",
  },
  {
    title: "Workflow Automation",
    description: "Automated business workflows for approvals, CRM updates, email routing, and repeatable operational tasks.",
    href: "/services/workflow-automation",
  },
  {
    title: "Website Development",
    description: "Modern websites and landing pages built for lead generation, SEO, and fast, reliable business experiences.",
    href: "/services/website-development",
  },
  {
    title: "Custom Software",
    description: "Bespoke internal tools, dashboards, reporting systems, and automation platforms tailored to your business.",
    href: "/services/custom-software",
  },
  {
    title: "System Integration",
    description: "CRM, collaboration, and API integrations that keep your data flowing across tools and teams.",
    href: "/services/system-integration",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Digital Transformation Services in Berlin",
  description: "Website development, AI automation, workflow automation, SEO, and system integration services for German small and medium businesses.",
  url: "https://thedigitalmove.com/services",
  serviceType: "Digital Transformation Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
]);

const faqItems = [
  {
    question: "Which services do you offer for small businesses in Berlin?",
    answer: "We help companies with website development, SEO, AI chatbots, workflow automation, business automation, and system integration.",
  },
  {
    question: "Can you help a business improve its Google rankings?",
    answer: "Yes. We combine technical SEO, on-page optimization, local SEO, and conversion-focused website improvements to improve visibility and lead generation.",
  },
  {
    question: "Do you support companies outside Berlin?",
    answer: "Yes. We support businesses across Germany and Europe, with strong local expertise for Berlin-based organizations.",
  },
];

const faqSchema = buildFaqSchema(faqItems);

export default function ServicesPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Services</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development, AI Automation, SEO & Digital Transformation in Berlin</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            The Digital Move helps small and medium businesses in Berlin and across Germany build faster websites, smarter AI workflows, better SEO visibility, and more reliable internal systems.
          </p>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Why companies work with us</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <li>• We combine website development, SEO, automation, and system integration in one partner.</li>
              <li>• Our projects are designed to improve lead generation, reduce manual work, and strengthen trust online.</li>
              <li>• We explain the strategy clearly and build solutions that are practical for daily operations.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Common goals we help with</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Generate more inbound enquiries from Google</li>
              <li>• Replace repetitive manual tasks with automation</li>
              <li>• Improve website speed, trust, and mobile experience</li>
            </ul>
            <Link href="/website-plans#lead-form" className="mt-8 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Book a free consultation
            </Link>
          </div>
        </section>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <Link href={item.href} className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                Learn more about {item.title}
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </PageWithHeader>
  );
}
