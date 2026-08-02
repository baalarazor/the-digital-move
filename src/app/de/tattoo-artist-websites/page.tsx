import type { Metadata } from "next";
import { TattooArtistWebsitesPage } from "@/components/tattoo-artist-websites-page";

export const metadata: Metadata = {
  title: "Websites für Tattoo-Künstler | Tattoo Studio Website Design | The Digital Move",
  description: "Schöne Websites für Tattoo-Künstler und Tattoo-Studios, die mehr Buchungen, bessere Portfolio-Präsentation und eine starke Online-Präsenz schaffen.",
  alternates: {
    canonical: "https://thedigitalmove.com/de/tattoo-artist-websites",
  },
  openGraph: {
    title: "Websites für Tattoo-Künstler | The Digital Move",
    description: "Premium-Websites für Tattoo-Künstler und Studios, die mehr Kunden, mehr Vertrauen und mehr Buchungen bringen.",
    url: "https://thedigitalmove.com/de/tattoo-artist-websites",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites für Tattoo-Künstler | The Digital Move",
    description: "Schöne und hochwertige Websites für Tattoo-Studio-Websites mit mehr Buchungsanfragen.",
    images: ["/og-image.svg"],
  },
};

export default function TattooArtistWebsitesGermanPage() {
  return <TattooArtistWebsitesPage locale="de" />;
}
