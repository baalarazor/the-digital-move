import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Digital Move | AI Automation & Digital Transformation",
  description: "The Digital Move helps businesses move from manual operations to intelligent automation with AI, workflow automation, custom software, and modern websites.",
  keywords: ["AI automation", "workflow automation", "digital transformation", "custom software", "websites"],
  metadataBase: new URL("https://thedigitalmove.com"),
  openGraph: {
    title: "The Digital Move",
    description: "Helping businesses move from manual operations to intelligent automation.",
    url: "https://thedigitalmove.com",
    siteName: "The Digital Move",
    locale: "en_US",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital Move",
    description: "AI automation and digital transformation for modern businesses.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://thedigitalmove.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-white text-slate-950">
        {/* Google Analytics (gtag.js) - uses NEXT_PUBLIC_GA_ID if set, otherwise falls back to provided ID */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? "G-ES538VSWD8"}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID ?? "G-ES538VSWD8"}');`}
        </Script>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
