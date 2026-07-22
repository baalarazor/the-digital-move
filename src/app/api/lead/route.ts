import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const n8nWebhook = process.env.N8N_WEBHOOK_URL?.trim();
    const fallbackFormspree = process.env.LEAD_FORM_ENDPOINT?.trim() || "https://formspree.io/f/xzdnvjgk";

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
      message: `Business type: ${data.businessType || "N/A"}\nChallenge: ${data.challenge || "N/A"}\nNotes: ${data.notes || ""}`,
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
