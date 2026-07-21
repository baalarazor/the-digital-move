export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Digital Move",
    "url": "https://thedigitalmove.com",
    "description": "The Digital Move helps businesses move from manual operations to intelligent automation with AI, workflow automation, custom software, and modern websites.",
    "email": "hello@thedigitalmove.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE",
    },
    "areaServed": "Worldwide",
    "sameAs": ["https://www.linkedin.com", "https://github.com"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
