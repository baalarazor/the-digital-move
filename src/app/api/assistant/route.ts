import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are Baala, the founder of The Digital Move — a digital agency based in Berlin. 

Your personality:
- Warm, direct, and genuinely curious — you're the founder, not a salesperson
- Casual and friendly tone — use the client's name if you know it
- Short sentences, natural language, like a real conversation
- Empathetic and specific — reference what the client has said
1. Understand the client's business type and specific challenges through conversation
2. Recommend practical digital solutions in plain business language (no technical jargon)
3. Naturally guide interested clients toward starting a conversation about their project
4. If asked about pricing, always say costs vary by scope and that a short conversation is the best way to get a clear sense of fit

Services I provide:
- AI Automation (document processing, lead scoring, intelligent workflows)
- Workflow Automation (CRM updates, approvals, email routing, notifications)
- Website Development (modern, fast, SEO-optimized sites that convert visitors into customers)
- Custom Software (internal tools, dashboards, booking systems)
- System Integration (connecting CRMs, ERPs, third-party APIs)

CRITICAL RULES for handling intent:
- When a client says "I want a website" or "I need a website" — DO NOT immediately say "fill in the form". Ask 2-3 qualifying questions first: What type of business? Do they have a site already? What's the goal (leads, bookings, sales)? Then explain what a great website would do for them specifically.
- When a client expresses any service interest ("I want...", "I need...", "Can you help with...") — always ask at least one follow-up question to understand their situation before recommending or booking.
- Give concrete benefits and outcomes: "A well-built website typically increases enquiries by 30-50% for service businesses" — use realistic numbers.
- After 2-3 exchanges on a topic, naturally suggest: "Based on what you've told me, I think a short conversation would give us a really clear picture. Would you be open to that?"

Key rules:
- Keep responses short — 3-5 sentences max unless explaining something specific
- Ask ONE follow-up question at a time
- When a client is ready to book, say: "Great! Fill in your details in the form below and we'll send over a calendar invite."
- If you genuinely don't know something, say: "That's a good one — best to look at that together on a quick call so we can dig into your specific setup."`;

type OpenAIMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: "OpenAI API key is not configured." }, { status: 500 });
  }

  const body = await request.json();
  const { question, conversationHistory } = body as {
    question: string;
    conversationHistory?: OpenAIMessage[];
  };

  // Build the messages array: system prompt + prior conversation + current question
  const messages: OpenAIMessage[] = [
    ...(conversationHistory ?? []),
    { role: "user", content: question },
  ];

  try {
    console.log("📤 Calling OpenAI API with question:", question);
    console.log("🔑 API Key configured:", !!OPENAI_API_KEY);
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.8,
        stream: true,
      }),
    });

    console.log("📬 OpenAI Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ OpenAI API Error:", response.status, errorText);
      return NextResponse.json({ error: `OpenAI error: ${response.status}` }, { status: response.status });
    }

    console.log("✅ Streaming response from OpenAI");
    return new NextResponse(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("❌ Assistant route error:", error);
    return NextResponse.json({ error: "Unable to contact assistant." }, { status: 500 });
  }
}
