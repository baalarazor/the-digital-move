import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "The Digital Move | AI Automation, Workflow Automation & Digital Transformation in Berlin",
  description:
    "The Digital Move helps Berlin businesses grow with AI automation, workflow automation, website development, system integration, and digital transformation consulting.",
  keywords: [
    "AI automation Berlin",
    "workflow automation Berlin",
    "digital transformation Berlin",
    "website development Berlin",
    "system integration Berlin",
    "business automation Berlin",
    "The Digital Move Berlin",
  ],
  alternates: {
    canonical: "https://thedigitalmove.com/",
  },
  openGraph: {
    title: "The Digital Move | AI Automation & Digital Transformation in Berlin",
    description:
      "Helping Berlin businesses replace manual work with AI automation, modern websites, and connected workflows.",
    url: "https://thedigitalmove.com/",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital Move | AI Automation & Digital Transformation in Berlin",
    description:
      "AI automation, workflow automation, websites, and digital transformation for modern businesses in Berlin.",
    images: ["/og-image.svg"],
  },
};

const faqSchema = buildFaqSchema([
  {
    question: "What is workflow automation?",
    answer:
      "Workflow automation connects tasks, approvals, data, and communications so repetitive work happens automatically with fewer errors and faster turnaround.",
  },
  {
    question: "Can AI automate my business?",
    answer:
      "Yes. We use AI to structure information, suggest decisions, answer questions, and trigger actions inside the workflows your team depends on.",
  },
  {
    question: "Do you build websites?",
    answer:
      "Absolutely. We design and build premium websites, landing pages, and portals that are fast, accessible, and conversion focused.",
  },
  {
    question: "Do you integrate existing software?",
    answer:
      "Yes. We connect platforms such as Microsoft 365, Google Workspace, Slack, Jira, CRMs, and other internal or third-party systems.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most engagements start with discovery in weeks and then move into delivery with a timeline tailored to the size and complexity of the project.",
  },
]);

export default function Home() {
  return (
    <>
      <SiteShell />
      <JsonLd data={faqSchema} />
    </>
  );
}
