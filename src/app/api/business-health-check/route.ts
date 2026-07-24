import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Answer = "Yes" | "Partially" | "No";

type LeadRequest = {
  businessName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  city?: string;
  industry?: string;
  score?: number;
  answers?: Record<string, Answer>;
};

function getScoreBand(score: number): "Excellent" | "Good" | "Needs Improvement" | "High Growth Potential" {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Needs Improvement";
  return "High Growth Potential";
}

function getRecommendedServices(answers: Record<string, Answer>): string[] {
  const serviceMap: Record<string, string> = {
    "Do you have a professional website?": "Professional Website",
    "Can customers contact you easily online?": "AI Customer Assistant",
    "Is your business easy to find on Google?": "Google Business Optimisation",
    "Do you have at least 50 Google reviews?": "Google Business Optimisation",
    "Can customers book appointments online?": "Online Booking Automation",
    "Are you active on social media?": "Social Media Growth Support",
    "Do you respond quickly to customer enquiries?": "AI Customer Assistant",
    "Is your business information up to date online?": "Local SEO & Listing Cleanup",
    "Do you know where your customers come from?": "Analytics & Lead Tracking",
    "Are you using digital tools to save time?": "Workflow Automation",
  };

  const weights = new Map<string, number>();

  Object.entries(answers).forEach(([question, answer]) => {
    const service = serviceMap[question];
    if (!service) return;

    const weight = answer === "No" ? 2 : answer === "Partially" ? 1 : 0;
    if (weight === 0) return;
    weights.set(service, (weights.get(service) ?? 0) + weight);
  });

  const ranked = [...weights.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([service]) => service);

  const fallback = [
    "Professional Website",
    "Google Business Optimisation",
    "AI Customer Assistant",
  ];

  return [...new Set([...ranked, ...fallback])].slice(0, 3);
}

async function insertLeadInSupabase(lead: {
  businessName: string | null;
  contactPerson: string;
  email: string | null;
  phone: string;
  city: string | null;
  industry: string | null;
  score: number;
  answers: Record<string, Answer>;
}) {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/business_health_leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      business_name: lead.businessName,
      contact_person: lead.contactPerson,
      email: lead.email,
      phone: lead.phone,
      city: lead.city,
      industry: lead.industry,
      score: lead.score,
      answers_json: lead.answers,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Supabase insert failed: ${response.status} ${details}`);
  }

  const inserted = (await response.json()) as Array<{ created_at?: string }>;
  return inserted[0]?.created_at ?? new Date().toISOString();
}

async function sendLeadEmail(lead: {
  businessName: string | null;
  contactPerson: string;
  email: string | null;
  phone: string;
  city: string | null;
  industry: string | null;
  score: number;
  answers: Record<string, Answer>;
  submittedAt: string;
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const recipient = process.env.BUSINESS_HEALTH_NOTIFY_EMAIL ?? "scbaala@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("Email is not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS.");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const answerLines = Object.entries(lead.answers)
    .map(([question, answer]) => `<li><strong>${question}</strong><br/>${answer}</li>`)
    .join("");

  await transporter.sendMail({
    from: `The Digital Move <${smtpUser}>`,
    to: recipient,
    replyTo: lead.email || undefined,
    subject: "New Business Health Check Lead",
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="color: #2563eb;">New Business Health Check Lead</h2>
        <p><strong>Business Name:</strong> ${lead.businessName || "Not provided"}</p>
        <p><strong>Contact Person:</strong> ${lead.contactPerson}</p>
        <p><strong>Email:</strong> ${lead.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>City:</strong> ${lead.city || "Not provided"}</p>
        <p><strong>Industry:</strong> ${lead.industry || "Not provided"}</p>
        <p><strong>Score:</strong> ${lead.score} / 100</p>
        <p><strong>Submission Date:</strong> ${new Date(lead.submittedAt).toLocaleString("en-GB", {
          dateStyle: "medium",
          timeStyle: "short",
          timeZone: "Europe/Berlin",
        })}</p>
        <h3 style="margin-top: 20px;">Question Answers</h3>
        <ol>${answerLines}</ol>
      </div>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadRequest;

    const businessName = body.businessName?.trim() || null;
    const contactPerson = body.contactPerson?.trim() ?? "";
    const email = body.email?.trim() || null;
    const phone = body.phone?.trim() ?? "";
    const city = body.city?.trim() || null;
    const industry = body.industry?.trim() || null;
    const score = Number(body.score ?? NaN);
    const answers = body.answers ?? {};

    if (!contactPerson || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Contact Person and Phone Number are required.",
        },
        { status: 400 }
      );
    }

    if (!Number.isFinite(score) || score < 0 || score > 100) {
      return NextResponse.json({ success: false, error: "Score must be between 0 and 100." }, { status: 400 });
    }

    if (Object.keys(answers).length !== 10) {
      return NextResponse.json(
        { success: false, error: "All 10 assessment questions must be answered." },
        { status: 400 }
      );
    }

    const submittedAt = await insertLeadInSupabase({
      businessName,
      contactPerson,
      email,
      phone,
      city,
      industry,
      score,
      answers,
    });

    await sendLeadEmail({
      businessName,
      contactPerson,
      email,
      phone,
      city,
      industry,
      score,
      answers,
      submittedAt,
    });

    return NextResponse.json({
      success: true,
      scoreBand: getScoreBand(score),
      recommendations: getRecommendedServices(answers),
      submittedAt,
    });
  } catch (error) {
    console.error("Business health check submission failed", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "We could not submit your Business Health Check right now. Please try again.",
      },
      { status: 500 }
    );
  }
}