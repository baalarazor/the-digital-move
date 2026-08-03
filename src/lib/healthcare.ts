export const healthcareBasePath = "/solutions";

export type HealthcareSlug =
  | "dentists"
  | "physiotherapists"
  | "dermatologists"
  | "pediatricians"
  | "general-practitioners"
  | "orthopedic-clinics"
  | "eye-clinics"
  | "mental-health-clinics"
  | "medical-centers";

export type HealthcareArticle = {
  title: string;
  excerpt: string;
};

export type HealthcareFaq = {
  question: string;
  answer: string;
};

export type HealthcareJourneyStep = {
  title: string;
  detail: string;
};

export type HealthcareProfile = {
  slug: HealthcareSlug;
  name: string;
  h1: string;
  heroLead: string;
  cardDescription: string;
  icon: "tooth" | "activity" | "sparkles" | "baby" | "stethoscope" | "bone" | "eye" | "brain" | "hospital";
  schemaType: "Dentist" | "Physician" | "Dermatology" | "Pediatric" | "GeneralPractice" | "Orthopedic" | "Ophthalmologic" | "Psychiatric" | "MedicalClinic";
  specialty: string;
  challenges: string[];
  solutionNarrative: string;
  tailoredFeatures: string[];
  patientJourney: HealthcareJourneyStep[];
  seoBenefits: string[];
  mapEmbedQuery: string;
  bookingFlow: string[];
  teamProfileFocus: string;
  galleryIdeas: string[];
  openingHoursExample: string[];
  insuranceInfo: string;
  faq: HealthcareFaq[];
  blogArticles: HealthcareArticle[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTertiary: string;
};

export const healthcareProfiles: HealthcareProfile[] = [
  {
    slug: "dentists",
    name: "Dentists",
    h1: "Website Solutions for Dental Practices in Germany",
    heroLead:
      "Help new patients trust your clinic before the first call with a modern dental website built for credibility, treatment clarity, and effortless booking.",
    cardDescription:
      "Turn high-intent searches for implants, whitening, and emergency appointments into qualified patient enquiries.",
    icon: "tooth",
    schemaType: "Dentist",
    specialty: "Dentistry",
    challenges: [
      "Patients compare multiple dental clinics in one session and choose the clearest, most trustworthy website.",
      "Complex services such as implants, aligners, and cosmetic packages are hard to explain in short phone calls.",
      "Reception teams lose time repeating insurance and first-visit instructions manually.",
      "Premium treatment positioning gets diluted when websites look outdated or generic.",
    ],
    solutionNarrative:
      "A dedicated dental website organizes treatment pages, before/after trust elements, transparent financing information, and one-click appointment requests so visitors move from search to consultation with confidence.",
    tailoredFeatures: [
      "Service pages for implants, orthodontics, prophylaxis, and cosmetic dentistry",
      "Interactive treatment timelines with expected duration and aftercare",
      "Emergency appointment banner with routing by urgency",
      "Consent-ready patient forms and downloadable pre-visit checklists",
      "Smile gallery blocks with treatment context and disclaimers",
      "Integration-ready booking widgets for private and statutory patients",
    ],
    patientJourney: [
      { title: "Search", detail: "A patient searches for a dentist near home and lands on your SEO-optimized treatment page." },
      { title: "Trust", detail: "Credentials, team introductions, and authentic patient stories reduce uncertainty quickly." },
      { title: "Clarity", detail: "The visitor reviews pricing guidance, insurance notes, and procedure steps without calling." },
      { title: "Action", detail: "They request an appointment through a simple booking form with preferred slots." },
      { title: "Retention", detail: "Automated reminders and oral-care follow-up content improve return visits." },
    ],
    seoBenefits: [
      "Target long-tail intent like Invisalign dentist in Berlin Mitte",
      "Build local authority with treatment-specific location pages",
      "Improve click-through rates with rich snippets from FAQs",
      "Capture urgent search traffic for emergency dental care",
    ],
    mapEmbedQuery: "dentist+clinic+berlin",
    bookingFlow: [
      "Choose treatment intent and urgency",
      "Pick preferred clinic time",
      "Receive confirmation and preparation checklist",
    ],
    teamProfileFocus:
      "Highlight clinical specializations, languages spoken, and continuing education badges so patients can choose the right dentist confidently.",
    galleryIdeas: [
      "Reception and waiting area atmosphere",
      "Treatment room equipment highlights",
      "Before/after case snapshot cards",
      "Sterilization and hygiene process visuals",
    ],
    openingHoursExample: ["Mon-Fri: 08:00-19:00", "Sat: 09:00-14:00", "Emergency slots: same day"],
    insuranceInfo:
      "Explain statutory coverage boundaries, private billing options, and installment plans in plain language to reduce friction before booking.",
    faq: [
      {
        question: "How can a dental website increase consultation bookings?",
        answer:
          "By combining treatment-specific landing pages, trust signals, and a frictionless booking flow, your site converts visitors while reducing unanswered phone calls.",
      },
      {
        question: "Can we show different pathways for private and statutory insurance?",
        answer:
          "Yes. We can structure booking forms and content sections so patients self-select insurance type and receive the correct information instantly.",
      },
      {
        question: "Is it possible to promote high-value treatments without aggressive sales tone?",
        answer:
          "Absolutely. We focus on educational storytelling, transparent outcomes, and clinical credibility to communicate premium care naturally.",
      },
      {
        question: "Do you optimize for local dental SEO in Germany?",
        answer:
          "Yes, including city-specific service pages, schema markup, and conversion-focused metadata tailored to local patient search behavior.",
      },
    ],
    blogArticles: [
      {
        title: "Importance of Regular Dental Checkups",
        excerpt: "How prevention-oriented content builds trust and supports recurring appointments.",
      },
      {
        title: "Teeth Whitening Facts Patients Should Know",
        excerpt: "Educational myths-vs-facts content that improves conversion on cosmetic pages.",
      },
      {
        title: "Children's Dental Care at Every Stage",
        excerpt: "A family-focused content model that attracts parents searching for pediatric-safe treatment.",
      },
    ],
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Request a Website Audit",
    ctaTertiary: "Get a Homepage Mockup",
  },
  {
    slug: "physiotherapists",
    name: "Physiotherapists",
    h1: "Website Solutions for Physiotherapy Clinics",
    heroLead:
      "Present your therapy approach clearly, attract motivated patients, and reduce front-desk admin with a performance-focused physiotherapy website.",
    cardDescription:
      "Convert searches for sports recovery, post-op rehab, and pain relief into structured treatment enquiries.",
    icon: "activity",
    schemaType: "Physician",
    specialty: "Physiotherapy",
    challenges: [
      "Patients often do not understand which therapy path fits their injury or pain profile.",
      "Limited visibility for niche services such as manual therapy and neurological rehabilitation.",
      "Reception teams spend too much time clarifying referral requirements and insurance details.",
      "Drop-offs occur when potential patients cannot find availability quickly.",
    ],
    solutionNarrative:
      "A tailored physiotherapy website guides visitors by condition, treatment goal, and urgency, while automating intake details before the first appointment.",
    tailoredFeatures: [
      "Condition-based entry pages for back pain, sports injuries, and post-surgery rehabilitation",
      "Therapist matching forms based on goals and mobility level",
      "Exercise library previews for patient education between sessions",
      "Referral and prescription upload workflow",
      "Session package overview with transparent timelines",
      "Integrated reminders for recurring appointments",
    ],
    patientJourney: [
      { title: "Discovery", detail: "The patient finds a local page for lower-back rehabilitation in Google." },
      { title: "Selection", detail: "They compare therapy approaches and therapist expertise by condition." },
      { title: "Intake", detail: "Referral notes and injury history are submitted through a guided form." },
      { title: "Booking", detail: "A treatment start date is reserved with immediate confirmation." },
      { title: "Progress", detail: "Follow-up content and reminders support adherence and retention." },
    ],
    seoBenefits: [
      "Rank for pain-specific and injury-specific local searches",
      "Create educational authority with recovery-focused content clusters",
      "Improve map pack relevance through service-page consistency",
      "Increase organic leads for long-term therapy packages",
    ],
    mapEmbedQuery: "physiotherapy+clinic+berlin",
    bookingFlow: [
      "Select issue type and duration",
      "Upload referral or medical notes",
      "Book first assessment and receive care plan summary",
    ],
    teamProfileFocus:
      "Show therapist qualifications, treatment philosophy, and sport/condition specialization to help patients feel matched from the start.",
    galleryIdeas: [
      "Rehabilitation training area",
      "Manual therapy treatment rooms",
      "Mobility assessment equipment",
      "Therapist-led exercise demonstrations",
    ],
    openingHoursExample: ["Mon-Thu: 07:30-20:00", "Fri: 07:30-18:00", "Sat: 09:00-13:00"],
    insuranceInfo:
      "Clarify prescription pathways, private physiotherapy options, and reimbursement expectations for self-pay patients.",
    faq: [
      {
        question: "Can your website design help reduce appointment no-shows?",
        answer:
          "Yes. We include structured confirmations, reminder flows, and clear pre-session instructions that improve attendance consistency.",
      },
      {
        question: "How do we explain different therapy methods clearly online?",
        answer:
          "We use condition-based pathways with plain language, expected outcomes, and therapist matching to remove confusion early.",
      },
      {
        question: "Can patients upload referrals before booking?",
        answer:
          "Yes. Intake forms can collect referral documents, symptoms, and availability preferences before the first visit.",
      },
      {
        question: "Will this support local SEO for physiotherapists?",
        answer:
          "Absolutely. We optimize treatment pages, structured metadata, and regional intent keywords for local discovery.",
      },
    ],
    blogArticles: [
      {
        title: "Lower Back Pain Exercises That Actually Help",
        excerpt: "Educational exercises that improve engagement and authority for physiotherapy websites.",
      },
      {
        title: "Recovery After Sports Injury: Week-by-Week Guide",
        excerpt: "Structured content that aligns rehab expectations with patient retention.",
      },
      {
        title: "Desk Posture Tips for Daily Pain Prevention",
        excerpt: "Preventive SEO content for high-volume office-worker search intent.",
      },
    ],
    ctaPrimary: "Improve My Practice Online",
    ctaSecondary: "Book a Consultation",
    ctaTertiary: "Request a Website Audit",
  },
  {
    slug: "dermatologists",
    name: "Dermatologists",
    h1: "Website Solutions for Dermatology Clinics",
    heroLead:
      "Build patient confidence in both medical and aesthetic services with a dermatology website that communicates expertise, outcomes, and clear next steps.",
    cardDescription:
      "Support high-value consultations for skin diagnostics, chronic conditions, and aesthetic dermatology.",
    icon: "sparkles",
    schemaType: "Dermatology",
    specialty: "Dermatology",
    challenges: [
      "Dermatology clinics must balance clinical authority with aesthetic service communication.",
      "Patients arrive with varied concerns, from urgent rashes to long-term cosmetic planning.",
      "Visual trust is essential, yet many clinic sites lack structured case storytelling.",
      "Teams struggle to triage appointment requests by urgency and treatment type.",
    ],
    solutionNarrative:
      "A modern dermatology website separates medical care journeys from cosmetic consultations while preserving one consistent premium brand experience.",
    tailoredFeatures: [
      "Dual pathways for medical dermatology and aesthetic procedures",
      "Condition library with clear escalation guidance",
      "Procedure pages for laser, acne, scar revision, and anti-aging plans",
      "Photo-ready case modules with compliance-friendly disclaimers",
      "Pre-screening form for symptom urgency and skin history",
      "Integrated consultation booking with treatment category routing",
    ],
    patientJourney: [
      { title: "Intent", detail: "A user searches for acne specialist or skin check in their city." },
      { title: "Evaluation", detail: "They compare medical credentials and treatment evidence quickly." },
      { title: "Qualification", detail: "A guided form captures concern type, timeline, and urgency." },
      { title: "Consultation", detail: "The right appointment type is booked with preparation notes." },
      { title: "Continuity", detail: "After-visit skincare and follow-up reminders drive long-term care loyalty." },
    ],
    seoBenefits: [
      "Capture both medical intent and aesthetic intent without cannibalization",
      "Rank for condition-specific searches with authoritative structured pages",
      "Enhance rich results using FAQ and medical business schema",
      "Increase conversion from high-value treatment queries",
    ],
    mapEmbedQuery: "dermatology+clinic+berlin",
    bookingFlow: [
      "Choose medical or aesthetic path",
      "Provide concern details and prior treatment history",
      "Book specialist consultation with follow-up instructions",
    ],
    teamProfileFocus:
      "Show specialist focus areas such as acne, skin cancer screening, laser medicine, and pediatric dermatology to improve matching confidence.",
    galleryIdeas: [
      "Consultation rooms and diagnostic tools",
      "Treatment technology highlights",
      "Educational skincare product display",
      "Clinic interior and patient comfort spaces",
    ],
    openingHoursExample: ["Mon-Fri: 08:30-18:30", "Late consults: Tue-Thu until 20:00"],
    insuranceInfo:
      "Differentiate statutory-covered dermatology services from private aesthetic procedures to set accurate expectations before contact.",
    faq: [
      {
        question: "Can one website present both medical and aesthetic dermatology effectively?",
        answer:
          "Yes. We structure separate user journeys while keeping one coherent brand and trust experience.",
      },
      {
        question: "How do we handle patient photo content responsibly?",
        answer:
          "We design compliant visual modules with contextual education and consent-aware presentation standards.",
      },
      {
        question: "Can appointment requests be triaged by urgency?",
        answer:
          "Absolutely. Intake forms can classify symptom severity and route requests to the right care path.",
      },
      {
        question: "Will this support city-level dermatology SEO?",
        answer:
          "Yes, with condition pages, location intent targeting, and technical metadata tailored for search visibility.",
      },
    ],
    blogArticles: [
      {
        title: "Seasonal Skin Health Guide for German Patients",
        excerpt: "A recurring-content format that builds topical authority and repeat traffic.",
      },
      {
        title: "Acne Treatment Myths vs. Medical Reality",
        excerpt: "Educational article structures that pre-qualify cosmetic and medical consultations.",
      },
      {
        title: "When to Book a Skin Check: Early Warning Signs",
        excerpt: "High-intent preventive content that supports dermatology appointment demand.",
      },
    ],
    ctaPrimary: "Get a Homepage Mockup",
    ctaSecondary: "Book a Consultation",
    ctaTertiary: "Improve My Practice Online",
  },
  {
    slug: "pediatricians",
    name: "Pediatricians",
    h1: "Website Solutions for Pediatric Practices",
    heroLead:
      "Support parents with clarity and reassurance through a pediatric website designed for trust, accessibility, and smoother communication.",
    cardDescription:
      "Help families quickly find guidance on checkups, vaccinations, and urgent child-care concerns.",
    icon: "baby",
    schemaType: "Pediatric",
    specialty: "Pediatrics",
    challenges: [
      "Parents need immediate answers, especially outside consultation hours.",
      "Vaccination, preventive care, and growth milestones are often scattered across paper and calls.",
      "Practice teams receive repetitive non-urgent questions that can be addressed digitally.",
      "New families often choose clinics based on communication quality and trust signals.",
    ],
    solutionNarrative:
      "A pediatric practice website centralizes family guidance, age-specific care pathways, and booking flows that reduce anxiety while improving operational efficiency.",
    tailoredFeatures: [
      "Age-based care hub for newborn, toddler, school-age, and adolescent needs",
      "Vaccination information center with downloadable schedules",
      "Parent FAQ and symptom guidance pathways",
      "Secure forms for first-visit child history",
      "Same-day urgent inquiry routing",
      "Multilingual communication blocks for diverse families",
    ],
    patientJourney: [
      { title: "Need", detail: "A parent searches for trusted pediatric care in their district." },
      { title: "Comfort", detail: "They review doctor profiles and care philosophy tailored to families." },
      { title: "Preparation", detail: "First-visit forms and vaccination notes are submitted online." },
      { title: "Booking", detail: "An appointment is reserved with clear arrival instructions." },
      { title: "Support", detail: "Follow-up reminders and preventive articles keep families engaged." },
    ],
    seoBenefits: [
      "Rank for family and child-health local searches",
      "Increase appointment conversion from preventive care keywords",
      "Build trust with medically reviewed educational content",
      "Improve branded searches through parent-focused FAQs",
    ],
    mapEmbedQuery: "pediatric+clinic+berlin",
    bookingFlow: [
      "Select child age group and concern",
      "Submit prior records or vaccination book details",
      "Choose visit type and receive preparation checklist",
    ],
    teamProfileFocus:
      "Present pediatricians and nurses with warmth, languages spoken, and child-focused expertise to help parents choose confidently.",
    galleryIdeas: [
      "Family-friendly waiting area",
      "Child-safe examination rooms",
      "Nursing and care team introductions",
      "Vaccination and preventive care visuals",
    ],
    openingHoursExample: ["Mon-Fri: 08:00-18:00", "Infant checkup slots: daily mornings"],
    insuranceInfo:
      "Explain preventive coverage, statutory vaccination reimbursements, and private pediatric service options clearly for parents.",
    faq: [
      {
        question: "How can our website reduce repetitive calls from parents?",
        answer:
          "By publishing clear symptom guidance, vaccination FAQs, and first-visit instructions in structured, easy-to-scan formats.",
      },
      {
        question: "Can we support urgent questions without overwhelming the team?",
        answer:
          "Yes. We can separate urgent from non-urgent requests through triage forms and clear expectation messaging.",
      },
      {
        question: "Can the site help onboard new families faster?",
        answer:
          "Absolutely. Digital intake flows collect history and logistics before the first appointment, reducing front-desk pressure.",
      },
      {
        question: "Do pediatric websites benefit from local SEO?",
        answer:
          "Strongly. Parent intent is highly local, and optimized pages improve both visibility and trust conversion.",
      },
    ],
    blogArticles: [
      {
        title: "Childhood Vaccination Timeline Explained",
        excerpt: "A parent-focused article format that increases trust and repeat visits.",
      },
      {
        title: "When to Call a Pediatrician for Fever",
        excerpt: "High-clarity guidance content that balances safety and reassurance.",
      },
      {
        title: "Healthy Sleep Routines by Age Group",
        excerpt: "Preventive care content that strengthens long-term family engagement.",
      },
    ],
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Request a Website Audit",
    ctaTertiary: "Improve My Practice Online",
  },
  {
    slug: "general-practitioners",
    name: "General Practitioners",
    h1: "Website Solutions for General Practitioners",
    heroLead:
      "Create a digital front door that helps patients find the right care path quickly while reducing avoidable administrative overhead.",
    cardDescription:
      "Streamline everyday patient communication for family medicine, chronic care, and preventive services.",
    icon: "stethoscope",
    schemaType: "GeneralPractice",
    specialty: "General Practice",
    challenges: [
      "High call volume for repeat prescription, referrals, and routine checkup requests.",
      "Patients struggle to identify when a GP visit versus specialist referral is appropriate.",
      "Operational bottlenecks emerge when intake information is missing at appointment time.",
      "Many GP websites do not reflect modern continuity-of-care expectations.",
    ],
    solutionNarrative:
      "A GP website built around common patient intents can reduce friction for both patients and staff while improving continuity, trust, and local visibility.",
    tailoredFeatures: [
      "Care-path pages for preventive checks, chronic disease follow-up, and urgent same-day advice",
      "Prescription and referral request routing workflows",
      "Digital pre-visit forms for recurring patients",
      "Integrated map and arrival logistics",
      "Policy pages for sick notes, cancellations, and tele-consults",
      "Automated reminders for recurring care schedules",
    ],
    patientJourney: [
      { title: "Search", detail: "A patient looks for a GP accepting new patients nearby." },
      { title: "Orientation", detail: "They understand offered services and required documents in minutes." },
      { title: "Request", detail: "They submit a targeted request for appointment, referral, or prescription." },
      { title: "Visit", detail: "The clinic receives pre-visit context and prepares efficiently." },
      { title: "Follow-up", detail: "Digital reminders support continuity for chronic and preventive care." },
    ],
    seoBenefits: [
      "Capture intent for GP near me and family doctor searches",
      "Support authority with preventive-care content clusters",
      "Improve discoverability of practice-specific service offerings",
      "Increase conversion through clear service-to-booking pathways",
    ],
    mapEmbedQuery: "general+practitioner+berlin",
    bookingFlow: [
      "Choose visit reason",
      "Provide insurance and prior records information",
      "Reserve appointment and receive policy reminders",
    ],
    teamProfileFocus:
      "Feature each physician's focus areas such as preventive medicine, chronic care, and geriatric support with approachable, trust-building bios.",
    galleryIdeas: [
      "Consultation rooms",
      "Nurse station and care coordination spaces",
      "Reception and accessibility features",
      "Preventive screening environment",
    ],
    openingHoursExample: ["Mon-Fri: 08:00-18:30", "Same-day acute care windows: daily"],
    insuranceInfo:
      "Clarify statutory pathways, private coverage differences, and documentation requirements to minimize confusion before visits.",
    faq: [
      {
        question: "Can a GP website reduce administrative workload?",
        answer:
          "Yes. Structured request flows for prescriptions, referrals, and routine appointments significantly reduce repetitive manual handling.",
      },
      {
        question: "How do we communicate policies without overwhelming patients?",
        answer:
          "We design concise policy modules with plain language and context-based linking from booking actions.",
      },
      {
        question: "Can we improve continuity for chronic care patients online?",
        answer:
          "Absolutely. Reminder systems and dedicated chronic-care content pathways strengthen follow-up adherence.",
      },
      {
        question: "Will this support local SEO growth for family practices?",
        answer:
          "Yes. We optimize for local intent keywords, service relevance, and metadata that improves map and organic performance.",
      },
    ],
    blogArticles: [
      {
        title: "Annual Health Checkups: What to Prepare",
        excerpt: "Patient education content that reduces missed information during visits.",
      },
      {
        title: "Managing Chronic Conditions with Better Follow-up",
        excerpt: "Content-driven retention strategy for long-term primary care relationships.",
      },
      {
        title: "When to Visit Your GP vs. Specialist",
        excerpt: "Decision-support article ideas that reduce confusion and improve triage quality.",
      },
    ],
    ctaPrimary: "Request a Website Audit",
    ctaSecondary: "Book a Consultation",
    ctaTertiary: "Get a Homepage Mockup",
  },
  {
    slug: "orthopedic-clinics",
    name: "Orthopedic Clinics",
    h1: "Website Solutions for Orthopedic Clinics",
    heroLead:
      "Position your orthopedic clinic as the trusted destination for pain diagnosis, mobility restoration, and surgical follow-up with a conversion-ready website.",
    cardDescription:
      "Capture high-intent traffic for knee, shoulder, spine, and sports injury treatment pathways.",
    icon: "bone",
    schemaType: "Orthopedic",
    specialty: "Orthopedics",
    challenges: [
      "Orthopedic patients often compare conservative treatment versus surgery options online before contacting clinics.",
      "Clinics must communicate diagnostics, imaging, and multidisciplinary care clearly.",
      "Injury-related traffic is high-intent but highly competitive in local search.",
      "Care continuity suffers when post-treatment guidance is not digitized.",
    ],
    solutionNarrative:
      "An orthopedic website built around pain zones, injury scenarios, and treatment pathways helps patients self-identify faster and contact your team with better context.",
    tailoredFeatures: [
      "Pain-zone navigation for knee, hip, spine, shoulder, and hand issues",
      "Conservative vs. surgical care comparison modules",
      "Imaging and diagnostic process explainer sections",
      "Sports medicine and post-op rehabilitation pathways",
      "Procedure FAQ blocks for informed consent support",
      "Booking flow that captures symptom timeline and prior imaging",
    ],
    patientJourney: [
      { title: "Problem", detail: "A patient searches for persistent knee pain specialist." },
      { title: "Assessment", detail: "They review likely causes, diagnostics, and treatment pathways." },
      { title: "Confidence", detail: "They understand physician expertise and clinic capabilities." },
      { title: "Appointment", detail: "They submit history and book a consultation efficiently." },
      { title: "Rehabilitation", detail: "They access follow-up resources that support recovery adherence." },
    ],
    seoBenefits: [
      "Rank for joint-specific and sports injury local keywords",
      "Improve authority with education-led condition pages",
      "Increase conversion from high-value surgery-adjacent searches",
      "Strengthen map relevance with structured specialty metadata",
    ],
    mapEmbedQuery: "orthopedic+clinic+berlin",
    bookingFlow: [
      "Choose pain area and severity",
      "Upload imaging or prior reports",
      "Book consultation with preparatory checklist",
    ],
    teamProfileFocus:
      "Present orthopedic surgeons, sports medicine specialists, and rehabilitation partners with measurable experience indicators.",
    galleryIdeas: [
      "Diagnostic consultation suites",
      "Rehabilitation collaboration spaces",
      "Imaging partner workflow visuals",
      "Mobility assessment equipment",
    ],
    openingHoursExample: ["Mon-Fri: 08:00-19:00", "Sat consultations: by appointment"],
    insuranceInfo:
      "Explain statutory referrals, private specialist access, and post-operative reimbursement guidance to simplify patient decisions.",
    faq: [
      {
        question: "Can orthopedic websites help qualify serious inquiries faster?",
        answer:
          "Yes. Pain-specific pathways and structured intake forms collect the context your team needs before consultation.",
      },
      {
        question: "How do we explain conservative vs. surgical options online?",
        answer:
          "We design clear comparison modules that educate without replacing clinical diagnosis.",
      },
      {
        question: "Can patients upload scans before appointments?",
        answer:
          "Absolutely. We can integrate secure upload steps into the booking journey.",
      },
      {
        question: "Will this improve search visibility for orthopedic services?",
        answer:
          "Yes, through specialized pages, localized metadata, and schema aligned with musculoskeletal intent keywords.",
      },
    ],
    blogArticles: [
      {
        title: "Knee Pain Causes and Early Action Steps",
        excerpt: "Educational orthopedic content that drives high-intent consultation traffic.",
      },
      {
        title: "Shoulder Injury Recovery Milestones",
        excerpt: "A structured recovery-content model for sports and lifestyle patients.",
      },
      {
        title: "Arthritis Guide for Daily Mobility",
        excerpt: "Long-form authority content supporting chronic orthopedic patient journeys.",
      },
    ],
    ctaPrimary: "Improve My Practice Online",
    ctaSecondary: "Request a Website Audit",
    ctaTertiary: "Book a Consultation",
  },
  {
    slug: "eye-clinics",
    name: "Eye Clinics",
    h1: "Website Solutions for Eye Clinics and Ophthalmology Centers",
    heroLead:
      "Elevate trust for diagnostics, surgery pathways, and preventive eye care with an ophthalmology website designed for clarity and conversion.",
    cardDescription:
      "Support growth for cataract, glaucoma, dry-eye, and vision correction consultation demand.",
    icon: "eye",
    schemaType: "Ophthalmologic",
    specialty: "Ophthalmology",
    challenges: [
      "Eye clinics provide both preventive and procedure-driven services that require different communication styles.",
      "Patients often delay care because symptoms and urgency are not clearly explained online.",
      "Surgical trust depends on transparent process education and team credibility.",
      "Older patient segments need simple, accessible digital experiences.",
    ],
    solutionNarrative:
      "A modern eye clinic website combines accessible information architecture, procedure education, and intuitive booking so patients can act confidently and earlier.",
    tailoredFeatures: [
      "Service pathways for cataract, glaucoma, retinal checks, and refractive consultations",
      "Accessibility-first typography and contrast controls",
      "Procedure preparation and recovery guidance modules",
      "Vision screening information hub",
      "Referring doctor collaboration details",
      "Integrated booking for consultation and follow-up visits",
    ],
    patientJourney: [
      { title: "Awareness", detail: "A user searches for blurred vision or cataract consultation." },
      { title: "Understanding", detail: "They review symptom guidance and recommended next steps." },
      { title: "Trust", detail: "They evaluate surgeon profiles, technologies, and clinic outcomes." },
      { title: "Scheduling", detail: "They book diagnostics with clear preparation instructions." },
      { title: "Aftercare", detail: "They access post-visit guidance and follow-up reminders." },
    ],
    seoBenefits: [
      "Capture preventive and surgical-intent ophthalmology searches",
      "Boost trust via medical FAQ rich results",
      "Improve accessibility signals that support engagement metrics",
      "Increase local conversion from age-diverse audiences",
    ],
    mapEmbedQuery: "eye+clinic+berlin",
    bookingFlow: [
      "Choose concern or procedure type",
      "Provide vision history and urgency details",
      "Book exam slot with preparation checklist",
    ],
    teamProfileFocus:
      "Feature ophthalmologists, surgical leads, and optometry partners with areas of specialization and language support.",
    galleryIdeas: [
      "Diagnostic and imaging equipment",
      "Procedure room environment",
      "Patient guidance materials",
      "Clinic accessibility features",
    ],
    openingHoursExample: ["Mon-Fri: 08:00-18:00", "Selected evening diagnostics: Tue/Thu"],
    insuranceInfo:
      "Clarify coverage boundaries for preventive exams, surgical procedures, and private lens options in straightforward patient language.",
    faq: [
      {
        question: "Can our website better educate patients about procedure readiness?",
        answer:
          "Yes. We create clear pre-op and post-op guidance sections that reduce uncertainty and improve preparedness.",
      },
      {
        question: "How do we make the site easier for older visitors?",
        answer:
          "We prioritize readability, contrast, accessible navigation, and clear action pathways optimized for all age groups.",
      },
      {
        question: "Can we support both urgent symptom concerns and routine checks?",
        answer:
          "Absolutely. We structure distinct pathways for urgent concerns, preventive exams, and elective procedures.",
      },
      {
        question: "Will local ophthalmology SEO improve with this setup?",
        answer:
          "Yes. Specialized service pages and structured metadata increase relevance for local eye-care searches.",
      },
    ],
    blogArticles: [
      {
        title: "Dry Eye Syndrome: Daily Relief Strategies",
        excerpt: "Preventive care content that drives recurring informational traffic.",
      },
      {
        title: "Cataract Surgery Preparation Checklist",
        excerpt: "High-intent educational content supporting pre-consultation confidence.",
      },
      {
        title: "Digital Eye Strain in Office Workers",
        excerpt: "Modern lifestyle content that broadens organic discovery for eye clinics.",
      },
    ],
    ctaPrimary: "Get a Homepage Mockup",
    ctaSecondary: "Book a Consultation",
    ctaTertiary: "Request a Website Audit",
  },
  {
    slug: "mental-health-clinics",
    name: "Mental Health Clinics",
    h1: "Website Solutions for Mental Health Clinics",
    heroLead:
      "Create a compassionate and structured digital experience that helps people take the first step toward support without confusion or stigma.",
    cardDescription:
      "Guide patients from uncertainty to safe, informed appointment requests for counseling and psychiatric care.",
    icon: "brain",
    schemaType: "Psychiatric",
    specialty: "Mental Health",
    challenges: [
      "Potential patients may feel overwhelmed, hesitant, or unsure where to begin.",
      "Clinics need to communicate service scope, crisis boundaries, and intake expectations carefully.",
      "Different care pathways such as therapy, diagnostics, and medication support are often unclear online.",
      "Trust is fragile when website language feels overly clinical or impersonal.",
    ],
    solutionNarrative:
      "A thoughtfully designed mental health website combines empathy, clarity, and clinical structure to help people seek care sooner and with greater confidence.",
    tailoredFeatures: [
      "Care pathways for counseling, psychiatric assessment, and ongoing therapy",
      "Crisis guidance section with immediate emergency instructions",
      "Therapist matching questionnaire by concern area",
      "Secure inquiry flow with privacy-first messaging",
      "Insurance and reimbursement explainer modules",
      "Resource library for pre- and post-session support",
    ],
    patientJourney: [
      { title: "Recognition", detail: "A person searches privately for anxiety or burnout support options." },
      { title: "Safety", detail: "They find clear crisis boundaries and compassionate onboarding language." },
      { title: "Fit", detail: "They review therapist approaches and choose a preferred care pathway." },
      { title: "Contact", detail: "They submit an intake request with confidence in confidentiality." },
      { title: "Continuity", detail: "Follow-up guidance supports consistent participation in care." },
    ],
    seoBenefits: [
      "Capture intent for therapy and psychiatric care in local markets",
      "Improve trust metrics with supportive and structured content",
      "Increase qualified inquiries through pathway-specific landing pages",
      "Strengthen discoverability with compliant mental health schema signals",
    ],
    mapEmbedQuery: "mental+health+clinic+berlin",
    bookingFlow: [
      "Choose support type and urgency",
      "Complete a confidential intake questionnaire",
      "Select first session preference and confirmation method",
    ],
    teamProfileFocus:
      "Introduce clinicians with therapeutic approach, languages, and specialization areas such as anxiety, trauma, youth care, or workplace stress.",
    galleryIdeas: [
      "Calm reception and consultation spaces",
      "Private therapy rooms",
      "Mindfulness and group session environments",
      "Team introduction portraits",
    ],
    openingHoursExample: ["Mon-Fri: 09:00-20:00", "Sat: 10:00-15:00", "Online sessions: flexible"],
    insuranceInfo:
      "Present transparent information for statutory psychotherapy pathways, private sessions, and reimbursement documentation requirements.",
    faq: [
      {
        question: "How can a website encourage first-time mental health inquiries?",
        answer:
          "By combining compassionate language, clear care pathways, and low-friction confidential contact options.",
      },
      {
        question: "Can we clearly communicate crisis boundaries online?",
        answer:
          "Yes. We create explicit emergency guidance and route urgent situations appropriately without ambiguity.",
      },
      {
        question: "Will intake forms compromise privacy?",
        answer:
          "No. We design privacy-first inquiry flows with transparent consent messaging and secure data handling practices.",
      },
      {
        question: "Can local SEO work for sensitive mental health topics?",
        answer:
          "Yes, with respectful keyword strategy and educational content aligned to real patient search intent.",
      },
    ],
    blogArticles: [
      {
        title: "Recognizing Early Burnout Warning Signs",
        excerpt: "Supportive educational content that helps people seek help earlier.",
      },
      {
        title: "How to Prepare for Your First Therapy Session",
        excerpt: "Onboarding-focused article ideas that reduce anxiety before contact.",
      },
      {
        title: "Healthy Daily Habits for Anxiety Management",
        excerpt: "Evidence-aligned lifestyle content that drives recurring engagement.",
      },
    ],
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Improve My Practice Online",
    ctaTertiary: "Request a Website Audit",
  },
  {
    slug: "medical-centers",
    name: "Medical Centers",
    h1: "Website Solutions for Multi-Specialty Medical Centers",
    heroLead:
      "Coordinate complex patient journeys across departments with a scalable medical center website that improves trust, logistics, and conversion.",
    cardDescription:
      "Unify specialties, referrals, and patient communication in one premium digital platform.",
    icon: "hospital",
    schemaType: "MedicalClinic",
    specialty: "Multi-Specialty Care",
    challenges: [
      "Medical centers juggle multiple specialties, each with different patient intents and booking requirements.",
      "Fragmented information causes drop-offs when visitors cannot locate the right department quickly.",
      "Referral workflows and cross-department handoffs are often unclear online.",
      "Brand consistency suffers when each specialty page follows different standards.",
    ],
    solutionNarrative:
      "A modular, scalable medical center architecture aligns all specialties under one strong brand while preserving department-level SEO and conversion performance.",
    tailoredFeatures: [
      "Department directory with intent-based navigation",
      "Unified booking gateway with specialty-specific routing",
      "Referral and records handoff workflows",
      "Doctor finder by expertise, language, and location",
      "Cross-department patient pathway pages",
      "Centralized announcements for diagnostics and preventive campaigns",
    ],
    patientJourney: [
      { title: "Navigation", detail: "A patient lands on the center homepage and identifies the right department quickly." },
      { title: "Qualification", detail: "They review specialist profiles and expected care process." },
      { title: "Coordination", detail: "Referral data and prior records are submitted before booking." },
      { title: "Visit", detail: "Appointment logistics are clear across location, time, and preparation." },
      { title: "Continuity", detail: "Follow-up and inter-department communication remain consistent." },
    ],
    seoBenefits: [
      "Build domain authority through structured specialty clusters",
      "Improve internal linking between departments and services",
      "Rank for broad and specialty-specific local healthcare queries",
      "Increase conversion by matching search intent to exact departments",
    ],
    mapEmbedQuery: "medical+center+berlin",
    bookingFlow: [
      "Choose specialty or symptom cluster",
      "Submit referral and insurance details",
      "Receive department-specific appointment confirmation",
    ],
    teamProfileFocus:
      "Showcase department leads, interdisciplinary care teams, and referral coordinators to communicate integrated clinical quality.",
    galleryIdeas: [
      "Reception and wayfinding zones",
      "Specialty department environments",
      "Diagnostic and imaging infrastructure",
      "Patient services and support desk",
    ],
    openingHoursExample: ["Mon-Fri: 07:00-21:00", "Sat: 08:00-16:00", "Select departments: Sunday emergency consults"],
    insuranceInfo:
      "Provide centralized insurance and billing guidance with department-level exceptions to reduce confusion and scheduling delays.",
    faq: [
      {
        question: "Can one website support many specialties without becoming confusing?",
        answer:
          "Yes. We design modular architecture with clear pathways so each patient reaches the right department quickly.",
      },
      {
        question: "How do we manage referrals and inter-department patient flow online?",
        answer:
          "We implement structured intake and handoff logic so referrals, records, and appointments stay coordinated.",
      },
      {
        question: "Can we keep one premium brand while supporting unique specialty content?",
        answer:
          "Absolutely. Our component system ensures consistent visual language with flexible department-level messaging.",
      },
      {
        question: "Will this architecture scale as we add departments?",
        answer:
          "Yes. The page framework is designed for growth with reusable components, metadata templates, and schema support.",
      },
    ],
    blogArticles: [
      {
        title: "How Medical Centers Improve Patient Navigation Online",
        excerpt: "UX content strategy for multi-specialty healthcare websites.",
      },
      {
        title: "Building Digital Referral Pathways That Reduce Delays",
        excerpt: "Operational SEO content focused on care coordination performance.",
      },
      {
        title: "Department Landing Pages That Convert Healthcare Searches",
        excerpt: "A conversion-focused framework for specialty cluster growth.",
      },
    ],
    ctaPrimary: "Get a Homepage Mockup",
    ctaSecondary: "Book a Consultation",
    ctaTertiary: "Improve My Practice Online",
  },
];

export const healthcareProfileBySlug = Object.fromEntries(
  healthcareProfiles.map((profile) => [profile.slug, profile]),
) as Record<HealthcareSlug, HealthcareProfile>;

export const healthcareNavItems = healthcareProfiles.map((profile) => ({
  label: profile.name,
  href: `${healthcareBasePath}/${profile.slug}`,
}));

export function getHealthcareProfile(slug: string): HealthcareProfile | undefined {
  return healthcareProfileBySlug[slug as HealthcareSlug];
}

export function getOtherHealthcareProfiles(slug: HealthcareSlug): HealthcareProfile[] {
  return healthcareProfiles.filter((profile) => profile.slug !== slug);
}
