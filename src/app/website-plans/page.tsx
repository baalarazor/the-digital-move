import type { Metadata } from "next";
import { WebsitePlansPage } from "@/components/website-plans-page";

export const metadata: Metadata = {
  title: "Founder Initiative | A Founder-Led Passion Project | The Digital Move",
  description: "Explore the founder initiative, a founder-led collaboration for selected businesses who want a thoughtful, purpose-built website experience.",
  alternates: {
    canonical: "https://thedigitalmove.com/website-plans",
  },
  openGraph: {
    title: "Founder-Led Website Experiences | The Digital Move",
    description: "A thoughtful, purpose-built website experience for selected businesses who value craftsmanship and long-term partnership.",
    url: "https://thedigitalmove.com/website-plans",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder-Led Website Experiences | The Digital Move",
    description: "A thoughtful, purpose-built website experience for selected businesses who value craftsmanship and long-term partnership.",
    images: ["/og-image.svg"],
  },
};

export default function WebsitePlansRoute() {
  return <WebsitePlansPage />;
}
