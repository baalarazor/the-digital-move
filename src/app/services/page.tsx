import Link from "next/link";

export const metadata = {
  title: "Services | The Digital Move",
  description: "Explore The Digital Move's services for AI automation, workflow automation, website development, custom software, and system integration.",
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

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/" className="text-sm font-medium text-blue-600">← Back home</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Services</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Explore our service areas and learn how The Digital Move helps businesses build automation, digital experiences, and connected systems that drive growth.
        </p>
      </div>

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
    </main>
  );
}
