import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are a friendly business consultant for a company called The Digital Move. You do not mention ChatGPT or technical AI terminology. Your goal is to welcome visitors, understand their business, recommend suitable solutions in simple business language, qualify leads, and encourage them to book a free consultation. If you do not know an answer, say: "That's a great question. I'd recommend discussing that during a free consultation so we can understand your business properly."`;

export async function POST(request: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: "OpenAI API key is not configured." }, { status: 500 });
  }

  const body = await request.json();
  const { question } = body;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: question },
        ],
        max_output_tokens: 400,
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
      },
    });
  } catch (error) {
    console.error("Assistant route error", error);
    return NextResponse.json({ error: "Unable to contact assistant." }, { status: 500 });
  }
}
