import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = {
  title: "The Digital Move | Website Development, AI Automation & SEO in Berlin",
  description: "The Digital Move helps Berlin and German SMEs grow with modern websites, AI chatbots, workflow automation, SEO services, business automation, and digital transformation.",
  keywords: [
    "website development Berlin",
    "AI automation Berlin",
    "SEO agency Berlin",
    "business automation Germany",
    "AI chatbot Germany",
    "digital transformation consultant Germany",
    "custom website development",
    "Google Business Profile optimization",
    "small business website Germany",
    "The Digital Move",
  ],
  metadataBase: new URL("https://thedigitalmove.com"),
  alternates: {
    canonical: "https://thedigitalmove.com",
    languages: {
      en: "https://thedigitalmove.com",
      de: "https://thedigitalmove.com/de",
    },
  },
  openGraph: {
    title: "The Digital Move | AI Automation & Website Development in Berlin",
    description: "Helping businesses modernize their website, automate workflows, and attract more leads from Google search.",
    url: "https://thedigitalmove.com",
    siteName: "The Digital Move",
    locale: "en_US",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital Move | AI Automation & SEO in Berlin",
    description: "Modern websites, AI chatbots, workflow automation, and SEO for ambitious small and medium businesses.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-[linear-gradient(180deg,_#fbf7f0_0%,_#f5efe7_100%)] text-slate-950">
        {/* Google Analytics (gtag.js) - uses NEXT_PUBLIC_GA_ID if set, otherwise falls back to provided ID */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? "G-ES538VSWD8"}`} strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID ?? "G-ES538VSWD8"}');`}
        </Script>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
