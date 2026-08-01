import type { Metadata } from "next";
import { PageWithHeader } from "@/components/page-with-header";
import { BusinessHealthCheckClient } from "./business-health-check-client";

export const metadata: Metadata = {
  title: "Business Health Check | The Digital Move",
  description:
    "Answer 10 quick questions in 2 minutes and discover your Business Health Score. Get practical recommendations from The Digital Move.",
  keywords: [
    "business health check",
    "digital business assessment Berlin",
    "online presence check Berlin",
    "local business marketing Berlin",
    "The Digital Move assessment",
  ],
  alternates: {
    canonical: "https://thedigitalmove.com/business-health-check",
  },
  openGraph: {
    title: "Business Health Check | The Digital Move",
    description:
      "Find out how your business performs online and get a personalised recommendation report.",
    url: "https://thedigitalmove.com/business-health-check",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Health Check | The Digital Move",
    description: "Take the 2-minute assessment and get your Business Health Score.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BusinessHealthCheckPage() {
  return (
    <PageWithHeader>
      <BusinessHealthCheckClient />
    </PageWithHeader>
  );
}