import type { Metadata } from "next";
import { FounderPage } from "@/components/founder-page";

export const metadata: Metadata = {
  title: "Meet the Founder | The Digital Move",
  description: "Learn about Baala, the founder of The Digital Move, and the story behind the studio’s founder-led website initiative.",
  alternates: {
    canonical: "https://thedigitalmove.com/founder",
  },
  openGraph: {
    title: "Meet the Founder | The Digital Move",
    description: "Founder-led storytelling, premium web design, and a personal approach to helping local businesses grow online.",
    url: "https://thedigitalmove.com/founder",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
};

export default function FounderRoute() {
  return <FounderPage />;
}
