export type ServiceNode = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  intent: string;
  keywords: string[];
  capabilities: string[];
  outcomes: string[];
  faq: Array<{ question: string; answer: string }>;
  href: string;
  canonical: string;
};

export type IndustryNode = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  keywords: string[];
  painPoints: string[];
  websiteSolutions: string[];
  cta: string;
  faq: Array<{ question: string; answer: string }>;
};

export type CityNode = {
  slug: string;
  city: string;
  region: string;
  summary: string;
  businessFocus: string[];
  localKeywords: string[];
};

export const serviceNodes: ServiceNode[] = [
  {
    slug: "website-development",
    name: "Website Development",
    headline: "Website Development for Growth-Focused Businesses in Germany",
    summary:
      "Build conversion-ready, fast and scalable websites that communicate your value clearly and generate qualified inbound enquiries.",
    intent: "Commercial investigation and provider selection",
    keywords: [
      "website development germany",
      "website developer germany",
      "business website development",
      "responsive website germany",
    ],
    capabilities: [
      "Information architecture for conversion",
      "Performance-first frontend engineering",
      "SEO metadata and technical foundations",
      "Content systems that scale with services and locations",
    ],
    outcomes: [
      "Higher trust from first-time visitors",
      "Stronger lead quality from organic search",
      "Improved mobile conversion performance",
    ],
    faq: [
      {
        question: "How long does a professional business website project take?",
        answer:
          "Most projects start with strategy and architecture, then move into design and development in phased milestones, depending on scope complexity.",
      },
      {
        question: "Can you build service and location pages for SEO growth?",
        answer:
          "Yes. We structure sites to support scalable service clusters, industry relevance and city-level landing pages without duplication.",
      },
    ],
    href: "/services/website-development",
    canonical: "https://thedigitalmove.com/services/website-development",
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    headline: "Website Redesign Services for Businesses Outgrowing Their Current Site",
    summary:
      "Modernize outdated websites with better UX, stronger messaging and improved conversion flow while preserving search equity.",
    intent: "Commercial intent with redesign requirement",
    keywords: [
      "website redesign germany",
      "business website redesign",
      "website relaunch agency",
      "website redesign berlin",
    ],
    capabilities: [
      "UX and conversion audit",
      "Content restructuring and messaging upgrade",
      "SEO-safe migration planning",
      "Visual refresh aligned to trust and authority",
    ],
    outcomes: [
      "Reduced bounce rate on key pages",
      "Clearer service positioning",
      "Better lead conversion without traffic loss",
    ],
    faq: [
      {
        question: "Will redesigning hurt existing Google rankings?",
        answer:
          "Not when migration is handled carefully with URL mapping, metadata continuity and technical SEO controls.",
      },
      {
        question: "Can redesign happen without full replatforming?",
        answer:
          "Yes. We can redesign selectively or fully depending on business priorities and technical constraints.",
      },
    ],
    href: "/services/website-redesign",
    canonical: "https://thedigitalmove.com/services/website-redesign",
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    headline: "Website Maintenance Services for Stability, Security and Consistent Performance",
    summary:
      "Keep business websites reliable with proactive updates, technical checks and issue resolution before they affect conversions.",
    intent: "Transactional maintenance support search",
    keywords: [
      "website maintenance germany",
      "website support service",
      "website maintenance berlin",
      "business website upkeep",
    ],
    capabilities: [
      "Plugin and dependency updates",
      "Security monitoring and hardening",
      "Performance and uptime checks",
      "Technical issue resolution and QA",
    ],
    outcomes: [
      "Lower downtime risk",
      "Smoother user experience",
      "Improved long-term SEO reliability",
    ],
    faq: [
      {
        question: "Do you maintain sites built by other agencies?",
        answer:
          "Yes. We run a technical assessment first, then create a maintenance workflow suited to your current stack.",
      },
      {
        question: "Can maintenance include monthly SEO checks?",
        answer:
          "Yes. We can combine technical maintenance with search performance monitoring and optimization recommendations.",
      },
    ],
    href: "/services/website-maintenance",
    canonical: "https://thedigitalmove.com/services/website-maintenance",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    headline: "AI Chatbot Development for Lead Capture, Support and Qualification",
    summary:
      "Deploy AI chatbots that answer service questions, qualify inbound leads and route conversations to the right business process.",
    intent: "Commercial chatbot implementation",
    keywords: ["ai chatbot germany", "ai chatbot berlin", "website chatbot development", "business ai assistant"],
    capabilities: [
      "Website chatbot deployment",
      "Knowledge base integration",
      "Lead qualification and routing",
      "Multilingual conversational design",
    ],
    outcomes: [
      "Faster first response",
      "Higher qualified lead capture",
      "Reduced repetitive support effort",
    ],
    faq: [
      {
        question: "Can AI chatbots integrate with CRM and forms?",
        answer:
          "Yes. We can connect chatbot journeys to your CRM, lead forms and notification workflows.",
      },
      {
        question: "Will the chatbot match our tone and industry context?",
        answer:
          "Yes. We design prompt logic and conversation pathways around your service positioning and audience expectations.",
      },
    ],
    href: "/services/ai-chatbots",
    canonical: "https://thedigitalmove.com/services/ai-chatbots",
  },
  {
    slug: "seo-optimisation",
    name: "SEO Optimisation",
    headline: "SEO Optimisation Services for Commercial Intent Visibility in Germany",
    summary:
      "Improve rankings for high-intent service keywords with technical SEO, content architecture and conversion-oriented optimization.",
    intent: "Commercial SEO service evaluation",
    keywords: ["seo agency germany", "seo optimisation berlin", "technical seo germany", "local seo services germany"],
    capabilities: [
      "Technical SEO audits",
      "Information architecture and internal linking",
      "Service and location landing page strategy",
      "Schema implementation and metadata optimization",
    ],
    outcomes: ["Improved keyword coverage", "Better crawl efficiency", "Higher organic lead potential"],
    faq: [
      {
        question: "Do you optimize for local and national rankings together?",
        answer:
          "Yes. We design layered strategies for city-level discoverability and broader commercial intent visibility.",
      },
      {
        question: "How do you avoid keyword stuffing?",
        answer:
          "We use intent-driven content, semantic relevance and natural language structure designed for users first.",
      },
    ],
    href: "/services/seo-optimisation",
    canonical: "https://thedigitalmove.com/services/seo-optimisation",
  },
  {
    slug: "automation",
    name: "Business Automation",
    headline: "Business Automation Services for Operational Efficiency and Scale",
    summary:
      "Reduce manual bottlenecks by automating repetitive workflows across marketing, sales, operations and support.",
    intent: "Automation provider comparison",
    keywords: ["business automation germany", "workflow automation berlin", "operations automation"],
    capabilities: ["Workflow mapping", "Rule-based automations", "Cross-tool integrations", "Exception and alert handling"],
    outcomes: ["Shorter process cycle times", "Lower manual error rates", "More predictable operational throughput"],
    faq: [
      {
        question: "Where should a business start with automation?",
        answer:
          "Start with repetitive, high-volume tasks that currently consume team time and create avoidable delays.",
      },
      {
        question: "Can automation work with legacy tools?",
        answer:
          "In most cases yes, through APIs, middleware and structured workflow orchestration.",
      },
    ],
    href: "/services/automation",
    canonical: "https://thedigitalmove.com/services/automation",
  },
  {
    slug: "performance-optimisation",
    name: "Performance Optimisation",
    headline: "Performance Optimisation for Core Web Vitals and Better Conversion Speed",
    summary:
      "Improve loading performance and user experience to support stronger rankings, engagement and conversion outcomes.",
    intent: "Site speed and CWV optimization",
    keywords: ["core web vitals optimization", "website speed optimization germany", "technical performance seo"],
    capabilities: ["LCP and CLS optimization", "Asset optimization", "Code splitting and lazy loading", "Runtime performance tuning"],
    outcomes: ["Faster interactive pages", "Improved Lighthouse metrics", "Lower abandonment from slow pages"],
    faq: [
      {
        question: "Can speed improvements increase lead generation?",
        answer:
          "Yes. Faster pages reduce drop-off during evaluation and make conversion actions easier to complete.",
      },
      {
        question: "Do you optimize both mobile and desktop performance?",
        answer:
          "Yes. We prioritize mobile-first performance while maintaining desktop quality.",
      },
    ],
    href: "/services/performance-optimisation",
    canonical: "https://thedigitalmove.com/services/performance-optimisation",
  },
  {
    slug: "hosting",
    name: "Hosting and Infrastructure",
    headline: "Hosting and Infrastructure Services for Reliable Business Websites",
    summary:
      "Set up dependable hosting architecture with uptime resilience, security controls and scalable deployment workflows.",
    intent: "Managed hosting and infrastructure",
    keywords: ["website hosting germany", "managed hosting business website", "secure hosting berlin"],
    capabilities: ["Deployment pipelines", "Monitoring and alerts", "CDN and caching strategy", "Disaster recovery planning"],
    outcomes: ["More stable availability", "Safer releases", "Better user trust through reliability"],
    faq: [
      {
        question: "Can you migrate existing websites to new hosting?",
        answer:
          "Yes. We plan migration with downtime minimization, integrity checks and SEO-safe cutover.",
      },
      {
        question: "Do you provide ongoing infrastructure support?",
        answer:
          "Yes. Ongoing support can include monitoring, incident response and capacity planning.",
      },
    ],
    href: "/services/hosting",
    canonical: "https://thedigitalmove.com/services/hosting",
  },
  {
    slug: "analytics",
    name: "Analytics and Measurement",
    headline: "Analytics Implementation for Revenue-Focused Decision Making",
    summary:
      "Track meaningful website and funnel performance with clear measurement models aligned to lead and revenue goals.",
    intent: "Analytics setup and optimization",
    keywords: ["website analytics setup", "conversion tracking germany", "ga4 implementation berlin"],
    capabilities: ["GA4 and event architecture", "Dashboard design", "Funnel performance analysis", "Attribution diagnostics"],
    outcomes: ["Clearer growth decisions", "Better campaign accountability", "Faster optimization cycles"],
    faq: [
      {
        question: "Can analytics reveal why leads are dropping?",
        answer:
          "Yes. We map user journeys and identify friction points across key conversion paths.",
      },
      {
        question: "Do you build executive dashboards?",
        answer:
          "Yes. We provide dashboards focused on actionable KPIs, not vanity metrics.",
      },
    ],
    href: "/services/analytics",
    canonical: "https://thedigitalmove.com/services/analytics",
  },
  {
    slug: "maintenance",
    name: "Technical Maintenance",
    headline: "Technical Maintenance for Continuous Website Quality and Trust",
    summary:
      "Keep frontend quality, accessibility and SEO technical health consistent through proactive maintenance cycles.",
    intent: "Technical maintenance provider search",
    keywords: ["technical website maintenance", "seo maintenance service", "website support germany"],
    capabilities: ["Accessibility checks", "Broken link and crawl error monitoring", "Technical SEO QA", "Content and template upkeep"],
    outcomes: ["Sustained trust signals", "Healthier crawl status", "Lower regression risk"],
    faq: [
      {
        question: "How is technical maintenance different from hosting support?",
        answer:
          "Technical maintenance focuses on site quality, UX, SEO integrity and content-system reliability beyond infrastructure uptime.",
      },
      {
        question: "Can maintenance include regular reporting?",
        answer:
          "Yes. We provide concise reports covering fixes, risks and next optimization priorities.",
      },
    ],
    href: "/services/maintenance",
    canonical: "https://thedigitalmove.com/services/maintenance",
  },
];

export const serviceNodeBySlug = Object.fromEntries(serviceNodes.map((node) => [node.slug, node])) as Record<string, ServiceNode>;

export const industryNodes: IndustryNode[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    headline: "Healthcare Website and Digital Experience Solutions",
    summary: "Support patient trust, appointment conversion and operational clarity with healthcare-focused digital architecture.",
    keywords: ["healthcare website germany", "medical website development", "clinic seo germany"],
    painPoints: [
      "Patients struggle to compare providers quickly",
      "Appointment and insurance details are unclear",
      "Clinical trust signals are inconsistently presented",
      "Operational communication relies on repetitive calls",
    ],
    websiteSolutions: [
      "Structured treatment and service pages",
      "Clear booking and intake workflows",
      "Medical schema and FAQ implementation",
      "Local SEO and city-intent optimization",
    ],
    cta: "Explore Healthcare Solutions",
    faq: [
      {
        question: "How can healthcare websites improve patient conversion?",
        answer: "By combining trust-driven content, booking clarity and localized SEO structure.",
      },
      {
        question: "Do you build specialty pages for medical professions?",
        answer: "Yes. We design profession-specific journeys for clinics and healthcare providers.",
      },
    ],
  },
  {
    slug: "dentists",
    name: "Dentists",
    headline: "Website Development for Dental Practices",
    summary: "Convert high-intent treatment searches into quality consultation requests with a trust-first dental website.",
    keywords: ["website development for dentists", "dental clinic website germany", "dentist seo berlin"],
    painPoints: [
      "Treatment value is hard to communicate quickly",
      "Competitive local search for dental services",
      "Insurance and procedure confusion before contact",
      "Low conversion from cosmetic treatment pages",
    ],
    websiteSolutions: [
      "Service pages by treatment type",
      "Visual trust and team credential modules",
      "Insurance and appointment guidance",
      "Local SEO pages for high-intent queries",
    ],
    cta: "Improve My Dental Practice Website",
    faq: [
      {
        question: "Can dental websites target implants and cosmetic intent?",
        answer: "Yes. We structure content around treatment-specific search intent and conversion pathways.",
      },
      {
        question: "Do dentist websites need FAQ schema?",
        answer: "Yes. FAQ schema helps improve SERP visibility and pre-qualifies patient expectations.",
      },
    ],
  },
  {
    slug: "doctors",
    name: "Doctors",
    headline: "Business Websites for Doctors and Private Practices",
    summary: "Help patients understand services, book efficiently and trust your expertise with modern doctor websites.",
    keywords: ["website for doctors", "doctor website germany", "medical practice web design"],
    painPoints: ["High inquiry volume", "Unclear patient preparation", "Weak digital trust", "Limited local visibility"],
    websiteSolutions: ["Service taxonomy", "Structured booking", "Profile credibility modules", "Practice FAQ architecture"],
    cta: "Upgrade My Practice Presence",
    faq: [
      { question: "Can doctor websites support recurring care communication?", answer: "Yes. We build pathways for preventive and follow-up communication." },
      { question: "Is local SEO important for doctors?", answer: "Absolutely. Most medical intent is geographic and trust-sensitive." },
    ],
  },
  {
    slug: "physiotherapists",
    name: "Physiotherapists",
    headline: "Physiotherapy Website Solutions for Better Patient Qualification",
    summary: "Guide injury-specific patient journeys from search to treatment booking with clear care pathways.",
    keywords: ["website for physiotherapists", "physiotherapy web design", "rehab clinic seo"],
    painPoints: ["Unclear treatment fit", "Referral confusion", "Scheduling friction", "Low therapy-package visibility"],
    websiteSolutions: ["Condition pages", "Intake forms", "Referral upload", "Retention-focused content"],
    cta: "Scale My Physio Enquiries",
    faq: [
      { question: "Can physiotherapy pages rank for specific injuries?", answer: "Yes, condition-level pages create stronger topical relevance." },
      { question: "Can we reduce no-shows with web flows?", answer: "Yes, structured booking and reminders improve attendance consistency." },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    headline: "Restaurant Website Development for Reservations and Local Discovery",
    summary: "Turn search traffic into bookings with menu clarity, location trust and frictionless reservation flows.",
    keywords: ["restaurant website", "restaurant web design germany", "restaurant seo berlin"],
    painPoints: ["Low direct reservations", "Reliance on third-party platforms", "Unclear menu positioning", "Weak local search performance"],
    websiteSolutions: ["Reservation-first UX", "Menu architecture", "Event landing pages", "Local SEO markup"],
    cta: "Improve My Restaurant Website",
    faq: [
      { question: "Can restaurants reduce platform dependency?", answer: "Yes, direct booking UX improves owned-channel conversion." },
      { question: "Do menu pages impact SEO?", answer: "Yes, structured menu and location content improve discoverability." },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    headline: "Law Firm Websites Built for Authority and Qualified Leads",
    summary: "Position legal expertise clearly and generate stronger consultation inquiries through high-trust digital experiences.",
    keywords: ["law firm website", "legal website design germany", "lawyer seo"],
    painPoints: ["Trust barriers", "Complex service communication", "Weak conversion paths", "Low visibility for practice areas"],
    websiteSolutions: ["Practice area pages", "Case-type FAQ sections", "Authority signals", "Consultation funnels"],
    cta: "Strengthen My Firm Visibility",
    faq: [
      { question: "Can legal pages rank by practice area?", answer: "Yes, structured clusters by legal intent improve relevance." },
      { question: "How can a law firm site improve lead quality?", answer: "By clarifying service scope, qualification and next steps early." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Real Estate Websites for Listings, Trust and Local Lead Generation",
    summary: "Create listing experiences and authority content that turn market attention into viewing and consultation requests.",
    keywords: ["real estate website germany", "property agency website", "real estate lead generation"],
    painPoints: ["Listing discoverability", "Lead qualification", "Market differentiation", "Slow mobile experience"],
    websiteSolutions: ["Property landing templates", "Neighborhood content", "Lead filters", "Performance-first mobile UX"],
    cta: "Grow My Property Leads",
    faq: [
      { question: "Can a real estate site rank for area-specific searches?", answer: "Yes, location clusters and structured listing content support that." },
      { question: "How do we qualify serious buyers faster?", answer: "Intelligent forms and segmented pathways improve lead quality." },
    ],
  },
  {
    slug: "beauty-salons",
    name: "Beauty Salons",
    headline: "Beauty Salon Websites for Appointment Growth and Brand Trust",
    summary: "Showcase services, styling quality and social proof to convert local beauty searches into bookings.",
    keywords: ["beauty salon website", "salon website design", "beauty business seo"],
    painPoints: ["Low direct bookings", "Portfolio visibility gaps", "Price uncertainty", "Weak local differentiation"],
    websiteSolutions: ["Service and treatment pages", "Visual gallery systems", "Booking integration", "Local SEO pages"],
    cta: "Improve My Salon Enquiries",
    faq: [
      { question: "Can salon websites convert Instagram traffic better?", answer: "Yes, landing pages can turn social attention into booked appointments." },
      { question: "Do galleries help SEO?", answer: "When optimized with metadata and context, they improve engagement and relevance signals." },
    ],
  },
  {
    slug: "gyms",
    name: "Gyms",
    headline: "Gym and Fitness Studio Websites for Membership Conversion",
    summary: "Support trial signups, class engagement and membership growth with conversion-focused fitness website architecture.",
    keywords: ["gym website", "fitness studio website", "gym seo germany"],
    painPoints: ["Poor trial conversion", "Class info fragmentation", "Low local visibility", "Weak retention messaging"],
    websiteSolutions: ["Membership pathway UX", "Class schedule architecture", "Trainer profile pages", "Transformation story content"],
    cta: "Increase Gym Membership Leads",
    faq: [
      { question: "Can gym websites improve trial signups?", answer: "Yes, clear conversion paths and social proof increase trial completions." },
      { question: "Should gyms publish trainer pages?", answer: "Yes, trainer authority pages strengthen trust and topical depth." },
    ],
  },
  {
    slug: "hotels",
    name: "Hotels",
    headline: "Hotel Website Development for Direct Booking and Revenue Control",
    summary: "Increase direct booking performance with clearer room pages, trust signals and search-ready hospitality content.",
    keywords: ["hotel website", "hotel booking website", "hospitality website germany"],
    painPoints: ["OTA dependence", "Low direct conversion", "Room information gaps", "Weak mobile booking UX"],
    websiteSolutions: ["Room category architecture", "Direct booking UX", "Local attraction content", "Structured schema"],
    cta: "Increase Direct Hotel Bookings",
    faq: [
      { question: "Can hotel websites reduce OTA commission dependency?", answer: "Yes, direct conversion flows help rebalance channel mix." },
      { question: "Do local guides support SEO for hotels?", answer: "Yes, destination content strengthens relevance and long-tail visibility." },
    ],
  },
  {
    slug: "accounting-firms",
    name: "Accounting Firms",
    headline: "Accounting Firm Websites Built for Credibility and Client Enquiries",
    summary: "Clarify tax and advisory services, build trust and generate qualified business inquiries with professional accounting websites.",
    keywords: ["accounting firm website", "tax advisor website germany", "steuerberater website"],
    painPoints: ["Complex service communication", "Trust gaps", "Weak lead qualification", "Limited sector-specific visibility"],
    websiteSolutions: ["Service segmentation", "Industry-focused landing pages", "Authority-based content hubs", "Lead qualification forms"],
    cta: "Improve My Firm's Inbound Leads",
    faq: [
      { question: "Can accounting firms rank by service niche?", answer: "Yes, niche pages increase relevance for commercial tax and advisory searches." },
      { question: "How can websites improve trust for financial services?", answer: "Clear credentials, process transparency and case context improve confidence." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    headline: "Education and Training Websites for Enrollment and Trust",
    summary: "Support student decision journeys with structured program content, authority signals and conversion-first enrollment flows.",
    keywords: ["education website", "training institute website", "course website germany"],
    painPoints: ["Program clarity issues", "Application friction", "Weak differentiation", "Low content discoverability"],
    websiteSolutions: ["Program pathway architecture", "Enrollment UX", "Student success content", "SEO topic hubs"],
    cta: "Improve Enrollment Conversion",
    faq: [
      { question: "Can education websites improve lead quality?", answer: "Yes, clear program pages and qualification steps improve fit before inquiry." },
      { question: "Do topic clusters help course visibility?", answer: "Yes, structured topic coverage improves topical authority and discoverability." },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    headline: "Construction Company Websites for Tender Visibility and Trust",
    summary: "Showcase project quality, specialization and reliability to generate stronger inbound opportunities.",
    keywords: ["construction company website", "bauunternehmen website", "construction seo germany"],
    painPoints: ["Project proof visibility", "Service differentiation", "Weak mobile usability", "Low tender-intent discoverability"],
    websiteSolutions: ["Project portfolio systems", "Specialization pages", "Certification trust modules", "Inquiry workflows"],
    cta: "Strengthen My Construction Presence",
    faq: [
      { question: "Can project portfolios improve search performance?", answer: "Yes, project-specific pages add relevance and authority for niche services." },
      { question: "Should construction websites include certifications prominently?", answer: "Yes, certifications support trust and conversion quality." },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    headline: "Automotive Business Websites for Service Bookings and Lead Capture",
    summary: "Support garages, dealerships and specialist workshops with conversion-ready automotive websites.",
    keywords: ["automotive website", "car workshop website", "auto service website germany"],
    painPoints: ["Service clarity issues", "Low online booking", "Weak local trust", "Poor mobile navigation"],
    websiteSolutions: ["Service package pages", "Booking and quote pathways", "Trust and review modules", "Local SEO optimization"],
    cta: "Get More Automotive Enquiries",
    faq: [
      { question: "Can auto workshops use websites to increase bookings?", answer: "Yes, clear service pathways and booking UX improve conversion substantially." },
      { question: "Do reviews impact local automotive SEO?", answer: "Yes, review-rich trust signals influence visibility and click behavior." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    headline: "Retail Websites for Omnichannel Growth and Customer Trust",
    summary: "Help retail businesses connect digital discovery with in-store action through clear product and category architecture.",
    keywords: ["retail website germany", "local retail website", "shop website optimization"],
    painPoints: ["Category confusion", "Low conversion from local traffic", "Weak product storytelling", "Disconnected online-offline experience"],
    websiteSolutions: ["Category architecture", "Store locator and inventory context", "Campaign landing pages", "Conversion optimization"],
    cta: "Improve Retail Conversion",
    faq: [
      { question: "Can retail websites drive in-store visits?", answer: "Yes, local product and store-intent pages can increase store navigation starts." },
      { question: "How should retail sites handle seasonal campaigns?", answer: "With dedicated landing pages and internal linking to relevant categories." },
    ],
  },
  {
    slug: "veterinary-clinics",
    name: "Veterinary Clinics",
    headline: "Veterinary Clinic Websites for Patient Trust and Appointment Flow",
    summary: "Support pet-owner confidence with clear treatment information and smooth booking experiences for veterinary practices.",
    keywords: ["veterinary clinic website", "vet website germany", "animal clinic seo"],
    painPoints: ["Urgent contact confusion", "Service information gaps", "Weak local visibility", "Low trust for new pet owners"],
    websiteSolutions: ["Service pathways by pet type", "Urgent contact visibility", "Team and clinic trust sections", "Local SEO + FAQ schema"],
    cta: "Improve My Veterinary Website",
    faq: [
      { question: "Can veterinary websites improve emergency routing?", answer: "Yes, clear urgent pathways reduce delays and confusion." },
      { question: "Do pet-owner FAQs help conversion?", answer: "Yes, they reduce uncertainty and improve first-contact quality." },
    ],
  },
];

export const industryNodeBySlug = Object.fromEntries(industryNodes.map((node) => [node.slug, node])) as Record<string, IndustryNode>;

export const cityNodes: CityNode[] = [
  {
    slug: "berlin",
    city: "Berlin",
    region: "Berlin",
    summary: "Helping Berlin businesses improve website performance, SEO visibility and digital operating efficiency.",
    businessFocus: ["Professional services", "Healthcare practices", "Local commerce", "Growth-stage SMEs"],
    localKeywords: ["website developer berlin", "website design berlin", "seo services berlin", "ai automation berlin"],
  },
  {
    slug: "munich",
    city: "Munich",
    region: "Bavaria",
    summary: "Supporting Munich companies with conversion-focused web development and measurable digital growth systems.",
    businessFocus: ["B2B service firms", "Consultancies", "Healthcare", "Tech-enabled businesses"],
    localKeywords: ["website development munich", "website agency munich", "seo munich business"],
  },
  {
    slug: "hamburg",
    city: "Hamburg",
    region: "Hamburg",
    summary: "Building strong digital foundations for Hamburg businesses through SEO, websites and workflow automation.",
    businessFocus: ["Hospitality", "Professional services", "Retail", "Regional service providers"],
    localKeywords: ["website agency hamburg", "website redesign hamburg", "seo services hamburg"],
  },
  {
    slug: "frankfurt",
    city: "Frankfurt",
    region: "Hesse",
    summary: "Helping Frankfurt companies create trustworthy websites and scalable digital client acquisition systems.",
    businessFocus: ["Finance-adjacent firms", "Professional services", "Healthcare", "SME operators"],
    localKeywords: ["website developer frankfurt", "business website frankfurt", "digital transformation frankfurt"],
  },
  {
    slug: "cologne",
    city: "Cologne",
    region: "North Rhine-Westphalia",
    summary: "Delivering practical digital growth architecture for Cologne businesses focused on long-term visibility.",
    businessFocus: ["Creative services", "Retail", "Healthcare", "Local business networks"],
    localKeywords: ["website design cologne", "seo agency cologne", "website maintenance cologne"],
  },
  {
    slug: "stuttgart",
    city: "Stuttgart",
    region: "Baden-Wurttemberg",
    summary: "Supporting Stuttgart businesses with performance-led websites and process-driven digital transformation.",
    businessFocus: ["Industrial services", "B2B specialists", "Healthcare", "Consulting firms"],
    localKeywords: ["website agency stuttgart", "website redesign stuttgart", "seo stuttgart"],
  },
  {
    slug: "dusseldorf",
    city: "Dusseldorf",
    region: "North Rhine-Westphalia",
    summary: "Helping Dusseldorf businesses convert digital traffic into qualified sales and consultation opportunities.",
    businessFocus: ["Professional advisory", "Retail brands", "Healthcare", "Local SMEs"],
    localKeywords: ["website developer dusseldorf", "web design dusseldorf", "seo dusseldorf"],
  },
  {
    slug: "leipzig",
    city: "Leipzig",
    region: "Saxony",
    summary: "Creating high-trust websites and growth-ready SEO systems for Leipzig businesses in competitive service markets.",
    businessFocus: ["Service companies", "Education providers", "Healthcare", "Regional SMEs"],
    localKeywords: ["website development leipzig", "seo leipzig", "digital agency leipzig"],
  },
  {
    slug: "dresden",
    city: "Dresden",
    region: "Saxony",
    summary: "Helping Dresden companies modernize digital visibility with better websites, structure and conversion pathways.",
    businessFocus: ["Engineering-led services", "Healthcare", "Local retail", "Professional firms"],
    localKeywords: ["website design dresden", "website agency dresden", "seo dresden"],
  },
  {
    slug: "nuremberg",
    city: "Nuremberg",
    region: "Bavaria",
    summary: "Supporting Nuremberg businesses with practical digital transformation focused on leads, trust and efficiency.",
    businessFocus: ["SME operations", "Consultancies", "Healthcare", "Service sectors"],
    localKeywords: ["website developer nuremberg", "seo agency nuremberg", "business website nuremberg"],
  },
];

export const cityNodeBySlug = Object.fromEntries(cityNodes.map((city) => [city.slug, city])) as Record<string, CityNode>;

export const keywordOpportunityClusters: Array<{ cluster: string; terms: string[] }> = [
  {
    cluster: "Core commercial keywords",
    terms: [
      "website development germany",
      "website developer germany",
      "website agency germany",
      "website company germany",
      "professional website germany",
      "business website germany",
      "responsive website germany",
      "small business website germany",
      "website redesign germany",
      "website maintenance germany",
      "seo agency germany",
      "digital transformation germany",
      "ai automation germany",
      "ai chatbot germany",
      "website design berlin",
      "website developer berlin",
      "website maintenance berlin",
      "seo services berlin",
      "restaurant website germany",
      "law firm website germany",
      "website development for dentists",
      "website for doctors",
      "website for physiotherapists",
      "local business website germany",
    ],
  },
  {
    cluster: "Long-tail service intent",
    terms: [
      "nextjs website development germany",
      "conversion focused website design germany",
      "technical seo for service websites germany",
      "core web vitals optimization service germany",
      "website redesign without traffic loss",
      "website migration seo checklist germany",
      "ai chatbot for lead generation germany",
      "automation workflows for small businesses germany",
      "website maintenance retainer germany",
      "local seo landing pages for service businesses",
      "website accessibility audit germany",
      "high converting service page design",
      "website speed optimization for local businesses",
      "schema markup implementation service germany",
      "google business profile and website strategy",
      "b2b website design germany",
      "small business seo roadmap germany",
      "website analytics setup for lead generation",
      "booking funnel optimization for clinics",
      "industry landing pages seo germany",
      "city pages for local seo germany",
      "service page internal linking strategy",
      "seo content architecture for agencies",
      "website trust signal optimization",
    ],
  },
];

const blogSeedTopics = [
  "How much does a business website cost in Germany",
  "Website redesign checklist for SMEs",
  "Website maintenance essentials",
  "Core Web Vitals explained for business owners",
  "SEO basics for local service companies",
  "AI chatbots for lead qualification",
  "Website vs social media-only presence",
  "Google indexing and crawlability fundamentals",
  "Website accessibility for German businesses",
  "Conversion optimization for service websites",
];

const industriesForIdeas = [
  "dentists",
  "doctors",
  "physiotherapists",
  "restaurants",
  "law firms",
  "real estate",
  "beauty salons",
  "gyms",
  "hotels",
  "accounting firms",
  "education",
  "construction",
  "automotive",
  "retail",
  "veterinary clinics",
];

const cityForIdeas = ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Dusseldorf", "Leipzig", "Dresden", "Nuremberg"];

export const blogIdeaBank: string[] = [
  ...blogSeedTopics.flatMap((topic) => cityForIdeas.map((city) => `${topic} in ${city}`)),
  ...industriesForIdeas.flatMap((industry) => [
    `How to build a high-converting website for ${industry} in Germany`,
    `${industry} SEO strategy for local lead generation`,
    `Best website structure for ${industry} businesses`,
    `How ${industry} businesses can use AI chatbots`,
  ]),
].slice(0, 120);
