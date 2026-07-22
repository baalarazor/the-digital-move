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
}): string {
  const { clientName, clientEmail, businessName, date, time, notes, businessType } = data;

  // Parse date and time into ICS format (YYYYMMDDTHHMMSS)
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  const dtStart = `${year}${month}${day}T${hour}${minute}00`;

  // End time = start + 1 hour
  const endHour = String(parseInt(hour, 10) + 1).padStart(2, "0");
  const dtEnd = `${year}${month}${day}T${endHour}${minute}00`;

  const now = new Date();
  const dtStamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const uid = `tdm-${Date.now()}@thedigitalmove.com`;

  const ownerEmail = process.env.OWNER_EMAIL ?? "hello@thedigitalmove.com";

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
    `SUMMARY:Free Consultation - ${clientName} (${businessName})`,
    `DESCRIPTION:Business Type: ${businessType}\\nBusiness Name: ${businessName}\\nClient: ${clientName}\\nNotes: ${notes || "None"}`,
    `ORGANIZER;CN=The Digital Move:MAILTO:${ownerEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;CN=${clientName}:MAILTO:${clientEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;CN=The Digital Move:MAILTO:${ownerEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Consultation reminder — The Digital Move",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
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
}): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const ownerEmail = process.env.OWNER_EMAIL ?? "hello@thedigitalmove.com";

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
  const icsContent = hasDateTime ? generateICS(data) : null;

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
  `.trim();

  const clientEmailBody = `
Hi ${data.clientName},

Thanks for reaching out to The Digital Move! We've received your consultation request and we're excited to connect with you.

${hasDateTime ? `We've noted your preferred time: ${dateLabel}. A calendar invite is attached — please accept to confirm.` : "We'll be in touch shortly to arrange a convenient time for your free consultation."}

What to expect:
- A 30-minute conversation about your business
- No obligation, no sales pressure
- Practical ideas tailored to your specific situation

If you have any questions in the meantime, reply to this email or reach us at hello@thedigitalmove.com.

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
