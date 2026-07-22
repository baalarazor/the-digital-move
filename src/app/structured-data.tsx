export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Digital Move",
    "url": "https://thedigitalmove.com",
    "description": "The Digital Move helps businesses move from manual operations to intelligent automation with AI, workflow automation, custom software, and modern websites.",
    "email": "hello@thedigitalmove.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE",
      "streetAddress": "Berlin, Germany"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Berlin"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Europe"
      }
    ],
    "sameAs": ["https://www.linkedin.com/company/the-digital-move", "https://github.com"],
    "foundingDate": new Date().getFullYear().toString(),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Digital Move",
    "image": "https://thedigitalmove.com/og-image.svg",
    "description": "AI automation and workflow automation company in Berlin providing digital transformation services",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE",
      "streetAddress": "Berlin, Germany"
    },
    "url": "https://thedigitalmove.com",
    "telephone": "+49-123-456789",
    "email": "hello@thedigitalmove.com",
    "priceRange": "€€",
    "areaServed": ["Berlin", "Germany", "Europe"],
    "serviceType": ["AI Automation", "Workflow Automation", "Software Development", "Digital Transformation"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Digital Move",
    "url": "https://thedigitalmove.com",
    "description": "Professional AI automation and digital transformation consulting for businesses in Berlin",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE",
    },
    "areaServed": "Berlin, Germany",
    "sameAs": ["https://www.linkedin.com/company/the-digital-move", "https://github.com"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
