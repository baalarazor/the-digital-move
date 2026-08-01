import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function generateICS(data: {
  clientName: string;
  clientEmail: string;
  businessName: string;
  date: string;
  time: string;
  notes: string;
  businessType: string;
  duration?: string; // minutes as string, e.g. "30" or "60"
}): string {
  const { clientName, clientEmail, businessName, date, time, notes, businessType, duration } = data;
  const durationMins = parseInt(duration ?? "60", 10);

  // Parse date and time — support both YYYY-MM-DD and natural language best-effort
  let dtStart = "";
  let dtEnd = "";
  try {
    const [year, month, day] = date.split("-");
    // time is always HH:MM from the chatbot normaliser
    const [hRaw, mRaw] = time.split(":");
    const h = parseInt(hRaw, 10);
    const m = parseInt(mRaw ?? "0", 10);
    const hStr = String(h).padStart(2, "0");
    const mStr = String(m).padStart(2, "0");
    const endDate = new Date(`${year}-${month}-${day}T${hStr}:${mStr}:00`);
    endDate.setMinutes(endDate.getMinutes() + durationMins);
    dtStart = `${year}${month}${day}T${hStr}${mStr}00`;
    dtEnd = `${endDate.getFullYear()}${String(endDate.getMonth() + 1).padStart(2, "0")}${String(endDate.getDate()).padStart(2, "0")}T${String(endDate.getHours()).padStart(2, "0")}${String(endDate.getMinutes()).padStart(2, "0")}00`;
  } catch {
    // Fallback: use current time + 1 hour if parsing fails
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    dtStart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T${pad(now.getHours())}${pad(now.getMinutes())}00`;
    const end = new Date(now.getTime() + durationMins * 60000);
    dtEnd = `${end.getFullYear()}${pad(end.getMonth() + 1)}${pad(end.getDate())}T${pad(end.getHours())}${pad(end.getMinutes())}00`;
  }

  const now = new Date();
  const dtStamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const uid = `tdm-${Date.now()}@thedigitalmove.com`;
  const ownerEmail = process.env.OWNER_EMAIL ?? "scbaala@gmail.com";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Digital Move//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${durationMins}-min Consultation - ${clientName}`,
    `DESCRIPTION:Business Type: ${businessType}\\nBusiness Name: ${businessName}\\nClient: ${clientName}\\nDuration: ${durationMins} minutes\\nNotes: ${notes || "None"}`,
    `ORGANIZER;CN=The Digital Move:MAILTO:${ownerEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;CN=${clientName}:MAILTO:${clientEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;CN=The Digital Move:MAILTO:${ownerEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Consultation in 15 minutes — The Digital Move",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

async function insertWebsitePlanLead(data: Record<string, unknown>): Promise<void> {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase not configured — skipping website plan lead storage");
    return;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/website_plan_leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    body: JSON.stringify({
      business_name: data.businessName ?? null,
      contact_person: data.contactPerson ?? data.fullName ?? null,
      email: data.email ?? null,
      phone: data.phone ?? null,
      business_type: data.businessType ?? null,
      website: data.website ?? null,
      current_website: data.currentWebsite ?? null,
      business_address: data.businessAddress ?? null,
      preferred_plan: data.preferredPlan ?? null,
      domain_ownership: data.domainOwnership ?? null,
      timeline: data.timeline ?? null,
      budget: data.budget ?? null,
      project_details: data.notes ?? data.details ?? null,
      source: "website-plans",
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Supabase insert failed: ${response.status} ${details}`);
  }
}

async function sendWebsitePlanEmail(data: Record<string, unknown>): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const ownerEmail = process.env.OWNER_EMAIL ?? "scbaala@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured — skipping website plan email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT ?? "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="color: #2563eb;">New Website Plan Enquiry</h2>
      <p><strong>Business Name:</strong> ${data.businessName ?? "Not provided"}</p>
      <p><strong>Contact Person:</strong> ${data.contactPerson ?? data.fullName ?? "Not provided"}</p>
      <p><strong>Email:</strong> ${data.email ?? "Not provided"}</p>
      <p><strong>Phone:</strong> ${data.phone ?? "Not provided"}</p>
      <p><strong>Business Type:</strong> ${data.businessType ?? "Not provided"}</p>
      <p><strong>Website:</strong> ${data.website ?? "Not provided"}</p>
      <p><strong>Current Website:</strong> ${data.currentWebsite ?? "Not provided"}</p>
      <p><strong>Business Address:</strong> ${data.businessAddress ?? "Not provided"}</p>
      <p><strong>Preferred Plan:</strong> ${data.preferredPlan ?? "Not provided"}</p>
      <p><strong>Domain Ownership:</strong> ${data.domainOwnership ?? "Not provided"}</p>
      <p><strong>Timeline:</strong> ${data.timeline ?? "Not provided"}</p>
      <p><strong>Budget:</strong> ${data.budget ?? "Not provided"}</p>
      <p><strong>Project Details:</strong><br/>${data.notes ?? data.details ?? "No details provided"}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `The Digital Move <${smtpUser}>`,
    to: ownerEmail,
    replyTo: (data.email as string | undefined) || undefined,
    subject: `New website plan enquiry from ${data.businessName ?? data.contactPerson ?? "a business"}`,
    html,
  });
}

async function sendCalendarEmail(data: {
  clientName: string;
  clientEmail: string;
  businessName: string;
  phone: string;
  city: string;
  date: string;
  time: string;
  notes: string;
  businessType: string;
  challenge: string;
  transcript?: string;
  duration?: string;
}): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const ownerEmail = process.env.OWNER_EMAIL ?? "scbaala@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured — skipping calendar email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT ?? "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const hasDateTime = data.date && data.time;
  const icsContent = hasDateTime ? generateICS({
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    businessName: data.businessName,
    date: data.date,
    time: data.time,
    notes: data.notes,
    businessType: data.businessType,
    duration: data.duration,
  }) : null;

  const dateLabel = hasDateTime
    ? `${data.date} at ${data.time}`
    : "To be confirmed";

  const ownerEmailBody = `
New consultation booking from The Digital Move chatbot.

Client Details:
- Name: ${data.clientName}
- Business: ${data.businessName}
- Email: ${data.clientEmail}
- Phone: ${data.phone || "Not provided"}
- City: ${data.city || "Not provided"}
- Business Type: ${data.businessType || "Not specified"}
- Challenge: ${data.challenge || "Not specified"}
- Preferred Date/Time: ${dateLabel}
- Notes: ${data.notes || "None"}

${hasDateTime ? "A calendar invite is attached." : "No specific date was provided — please follow up to arrange a time."}

${data.transcript ? `\n--- Chat Transcript ---\n${data.transcript}\n--- End Transcript ---` : ""}
  `.trim();

  const clientEmailBody = `
Hi ${data.clientName},

Thanks for reaching out to The Digital Move! We've received your consultation request and we're excited to connect with you.

${hasDateTime ? `We've noted your preferred time: ${dateLabel}. A calendar invite is attached — please accept to confirm.` : "We'll be in touch shortly to arrange a convenient time for your free consultation."}

What to expect:
- A 30-minute conversation about your business
- No obligation, no sales pressure
- Practical ideas tailored to your specific situation

If you have any questions in the meantime, reply to this email or reach us at scbaala@gmail.com.

Looking forward to speaking with you!

Best regards,
The Digital Move Team
https://thedigitalmove.com
  `.trim();

  const attachments = icsContent
    ? [{ filename: "consultation.ics", content: icsContent, contentType: "text/calendar;method=REQUEST" }]
    : [];

  // Email to business owner
  await transporter.sendMail({
    from: `"The Digital Move" <${smtpUser}>`,
    to: ownerEmail,
    subject: `New consultation booking: ${data.clientName} — ${data.businessName}`,
    text: ownerEmailBody,
    attachments,
  });

  // Confirmation email to client
  await transporter.sendMail({
    from: `"The Digital Move" <${smtpUser}>`,
    to: data.clientEmail,
    subject: "Your consultation is booked — The Digital Move",
    text: clientEmailBody,
    attachments,
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const n8nWebhook = process.env.N8N_WEBHOOK_URL?.trim();
    const fallbackFormspree = process.env.LEAD_FORM_ENDPOINT?.trim() || "https://formspree.io/f/xzdnvjgk";

    const isWebsitePlanEnquiry = Boolean(data.preferredPlan || data.businessAddress || data.currentWebsite || data.website || data.domainOwnership || data.timeline || data.details || data.notes);

    if (isWebsitePlanEnquiry) {
      let websitePlanStored = false;
      let websitePlanNotified = false;

      try {
        await insertWebsitePlanLead(data);
        websitePlanStored = true;
      } catch (websitePlanError) {
        console.error("Website plan lead storage failed:", websitePlanError);
      }

      try {
        await sendWebsitePlanEmail(data);
        websitePlanNotified = true;
      } catch (websitePlanError) {
        console.error("Website plan email failed:", websitePlanError);
      }

      if (!websitePlanStored && !websitePlanNotified) {
        console.warn("Website plan enquiry was not stored or emailed");
      }
    }

    // Always attempt to send calendar emails if SMTP is configured
    if (data.email && data.fullName) {
      try {
        await sendCalendarEmail({
          clientName: data.fullName,
          clientEmail: data.email,
          businessName: data.businessName ?? "",
          phone: data.phone ?? "",
          city: data.city ?? "",
          date: data.date ?? "",
          time: data.time ?? "",
          notes: data.notes ?? "",
          businessType: data.businessType ?? "",
          challenge: data.challenge ?? "",
          transcript: data.transcript ?? "",
          duration: data.duration ?? "60",
        });
      } catch (emailError) {
        console.error("Calendar email failed (non-fatal):", emailError);
      }
    }

    if (!n8nWebhook && !fallbackFormspree) {
      return NextResponse.json(
        { success: false, error: "Lead capture is not configured. Please set N8N_WEBHOOK_URL or LEAD_FORM_ENDPOINT." },
        { status: 500 }
      );
    }

    if (n8nWebhook) {
      await fetch(n8nWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return NextResponse.json({ success: true });
    }

    const formspreePayload = {
      name: data.fullName || data.name || "",
      email: data.email || "",
      company: data.businessName || data.company || "",
      message: `Business type: ${data.businessType || "N/A"}\nChallenge: ${data.challenge || "N/A"}\nDate: ${data.date || "N/A"}\nTime: ${data.time || "N/A"}\nNotes: ${data.notes || ""}`,
    };

    const response = await fetch(fallbackFormspree, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formspreePayload),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new Error(`Lead submission failed: ${response.status} ${errorBody}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unable to submit lead." }, { status: 500 });
  }
}
