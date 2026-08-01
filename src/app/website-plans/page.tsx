import type { Metadata } from "next";
import { WebsitePlansPage } from "@/components/website-plans-page";

export const metadata: Metadata = {
  title: "Website Plans | Professional Websites with No Upfront Cost | The Digital Move",
  description: "Launch a fast, modern website for your business with no upfront development cost. Simple monthly plans with hosting, support, SEO and maintenance included.",
  alternates: {
    canonical: "https://thedigitalmove.com/website-plans",
  },
  openGraph: {
    title: "Professional Websites with No Upfront Cost | The Digital Move",
    description: "Flexible monthly website plans for local businesses with hosting, SEO, support and maintenance included.",
    url: "https://thedigitalmove.com/website-plans",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites with No Upfront Cost | The Digital Move",
    description: "Flexible monthly website plans for local businesses with hosting, SEO, support and maintenance included.",
    images: ["/og-image.svg"],
  },
};

export default function WebsitePlansRoute() {
  return <WebsitePlansPage />;
}
