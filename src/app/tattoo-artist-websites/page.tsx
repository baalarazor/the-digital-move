import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { TattooArtistWebsitesPage } from "@/components/tattoo-artist-websites-page";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tattoo Artist Websites | Tattoo Studio Website Design | The Digital Move",
  description: "Beautiful tattoo artist websites and tattoo studio websites built to attract more clients, showcase your portfolio, and improve bookings through a premium online experience.",
  keywords: [
    "tattoo artist website",
    "tattoo studio website",
    "website for tattoo artists",
    "tattoo website design",
    "tattoo portfolio website",
    "tattoo studio booking website",
    "Berlin tattoo website",
    "SEO for tattoo artists",
    "tattoo artist online portfolio",
  ],
  alternates: {
    canonical: "https://thedigitalmove.com/tattoo-artist-websites",
  },
  openGraph: {
    title: "Tattoo Artist Websites | The Digital Move",
    description: "Premium websites for tattoo artists and tattoo studios that help you attract clients, build trust and grow bookings.",
    url: "https://thedigitalmove.com/tattoo-artist-websites",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Artist Websites | The Digital Move",
    description: "Beautiful website design for tattoo artists and studios that want stronger personal brands and more enquiries.",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "Tattoo Artist Website Design and SEO",
  description: "Premium website design and digital strategy for tattoo artists and tattoo studios that want stronger branding, better discovery and more bookings.",
  url: "https://thedigitalmove.com/tattoo-artist-websites",
  serviceType: "Website Design",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
  { name: "Tattoo Artist Websites", url: "https://thedigitalmove.com/tattoo-artist-websites" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do I need a website if I already have Instagram?",
    answer: "Instagram is useful for visibility, but a website gives you a permanent home for your portfolio, booking enquiries, reviews and studio details. It helps clients discover and trust you beyond social media posts.",
  },
  {
    question: "Can clients request appointments online?",
    answer: "Yes. A tattoo studio booking website can include consultation forms, WhatsApp integration and a clear path from interest to inquiry.",
  },
  {
    question: "Will my website work on mobile?",
    answer: "Yes. A modern tattoo studio website should feel polished and easy to use on mobile, where many clients begin their research.",
  },
  {
    question: "Can I update my tattoo portfolio later?",
    answer: "Yes. These websites are designed to grow with your work so you can add new pieces, artist pages and studio updates as you evolve.",
  },
]);

export default function TattooArtistWebsitesRoutePage() {
  return (
    <>
      <TattooArtistWebsitesPage />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
