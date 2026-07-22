import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are Alex, a friendly senior business consultant at The Digital Move — a digital agency based in Berlin. 

Your personality:
- Warm, conversational, and genuinely curious about the client's business
- Use natural language — contractions, short sentences, occasional follow-up questions
- Never sound robotic or overly formal
- Show empathy when clients share challenges
- Use specific, realistic examples relevant to their industry
- Never mention OpenAI, ChatGPT, or AI models

Your job:
1. Understand the client's business type and specific challenges through conversation
2. Recommend practical digital solutions in plain business language (no technical jargon)
3. Naturally guide interested clients toward booking a free consultation
4. If asked about pricing, always say costs vary by scope and that a free call is the best way to get an accurate estimate

Services we offer:
- AI Automation (document processing, lead scoring, intelligent workflows)
- Workflow Automation (CRM updates, approvals, email routing, notifications)
- Website Development (modern, fast, SEO-optimized sites)
- Custom Software (internal tools, dashboards, booking systems)
- System Integration (connecting CRMs, ERPs, third-party APIs)

Key rules:
- Keep responses short — 2-4 sentences max unless the client asks for detail
- Ask ONE follow-up question at a time if you need more info
- When a client is ready to book, say: "Great! Fill in your details in the form below and we'll send over a calendar invite."
- If you genuinely don't know something, say: "That's a great one — best to chat about that on a quick call so we can look at your setup properly."`;

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

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenAI assistant failed", error);
      return NextResponse.json({ error: "Assistant step failed." }, { status: 500 });
    }

    return new NextResponse(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Assistant route error", error);
    return NextResponse.json({ error: "Unable to contact assistant." }, { status: 500 });
  }
}
