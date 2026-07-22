"use client";

import { Calendar, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

type BookingData = {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
};

// Intelligent contact collection stages
type CollectStage = "idle" | "ask-name" | "ask-contact" | "ask-time" | "done";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stage, setStage] = useState<"chat" | "form" | "done">("chat");
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [booking, setBooking] = useState<BookingData>({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  // Intelligent contact collection
  const [collectStage, setCollectStage] = useState<CollectStage>("idle");
  const [collectedName, setCollectedName] = useState("");
  const [collectedContact, setCollectedContact] = useState("");
  const [collectedTime, setCollectedTime] = useState("");
  const [botTurnCount, setBotTurnCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveKey = "tdm-chatbot-v2";

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.sessionStorage.getItem(saveKey) : null;
    if (stored) {
      try {
        const s = JSON.parse(stored);
        setMessages(s.messages ?? []);
        setStage(s.stage ?? "chat");
        setBooking(s.booking ?? booking);
        setCollectStage(s.collectStage ?? "idle");
        setCollectedName(s.collectedName ?? "");
        setCollectedContact(s.collectedContact ?? "");
        setCollectedTime(s.collectedTime ?? "");
        setBotTurnCount(s.botTurnCount ?? 0);
      } catch {
        initChat();
      }
    } else {
      initChat();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(saveKey, JSON.stringify({ messages, stage, booking, collectStage, collectedName, collectedContact, collectedTime, botTurnCount }));
    }
  }, [messages, stage, booking, collectStage, collectedName, collectedContact, collectedTime, botTurnCount]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && stage === "chat") inputRef.current?.focus();
  }, [open, stage]);

  function initChat() {
    setMessages([
      {
        sender: "bot",
        text: "👋 Hey! I'm Alex from The Digital Move. We help businesses grow with AI, automation, and modern websites. How can I help you today?",
      },
    ]);
  }

  const addBot = (text: string) => {
    setMessages((prev) => [...prev, { sender: "bot", text }]);
    setBotTurnCount((c) => c + 1);
  };

  const addUser = (text: string) =>
    setMessages((prev) => [...prev, { sender: "user", text }]);

  // Send transcript silently (non-blocking, non-fatal)
  const sendTranscript = async (msgs: ChatMessage[], extra: Record<string, string> = {}) => {
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: extra.name ?? collectedName,
          email: extra.email ?? collectedContact,
          phone: extra.phone ?? "",
          date: extra.date ?? "",
          time: extra.time ?? collectedTime,
          businessType: "Chat conversation",
          challenge: "Collected via chat",
          transcript: msgs.map((m) => `${m.sender === "bot" ? "Alex" : "Client"}: ${m.text}`).join("\n"),
          ...extra,
        }),
      });
    } catch { /* silent */ }
  };

  const getLocalResponse = (t: string): string | null => {
    const n = t.trim().toLowerCase();

    if (/^(hi|hey|hello|good (morning|afternoon|evening)|howdy)/.test(n))
      return "Hey! Great to hear from you. What can I help you with today?";

    if (/how are you|how('s| is) it going/.test(n))
      return "Doing great, thanks for asking! \uD83D\uDE0A What brings you here today?";

    if (/where are you|where.*based|your (office|location)|berlin/.test(n))
      return "We're based in Berlin, Germany, and work with businesses across Europe and beyond. Is your business local to Berlin?";

    if (/who are you|what is (this|the digital move)|tell me about/.test(n))
      return "I'm Alex — a consultant at The Digital Move. We're a Berlin-based digital agency specialising in AI automation, workflow automation, website development, and custom software. What are you looking to solve?";

    if (/what (services|do you offer|can you do)|your services/.test(n))
      return "Great question! Here's what we do:\n\n\uD83C\uDF10 Website Development — modern, fast, lead-generating sites\n\uD83E\uDD16 AI Automation — reduce manual work with smart workflows\n\u2699\uFE0F Workflow Automation — connect your tools, cut handoffs\n\uD83D\uDCBB Custom Software — dashboards, booking systems, internal tools\n\uD83D\uDD17 System Integration — get your CRM and apps talking\n\nWhich of these sounds most relevant to you?";

    if (/\b(website|web site|landing page|online presence|build.*site|setup.*website|new site|need a site)\b/.test(n))
      return "A great website can seriously increase your leads. Quick question — what type of business do you have, and do you already have a site or are you starting from scratch?";

    if (/\b(automat|save time|manual work|workflow|streamline|ai (for|to help))\b/.test(n))
      return "Automation can save businesses 5–20 hours a week. What tasks are eating up most of your team's time right now?";

    if (/\b(crm|software|manage customer|booking system|database|internal tool)\b/.test(n))
      return "Custom tools are great for businesses that have outgrown generic software. What are you currently using, and where is it falling short?";

    // Business introductions — "I am doing X", "I run a X", "I have a X business", "I work in X"
    const bizMatch = n.match(/\b(i('m| am)|i run|i have|i own|my (business|company|agency|firm) is|i work (in|as))\b.{0,40}\b(marketing|agency|consult|freelanc|design|photo|coach|train|educat|health|fitness|restaurant|cafe|food|retail|shop|store|salon|beauty|real estate|property|construc|law|legal|account|financ|insur|travel|event|clinic|doctor|dentist|physio|recruit|hr|logistics|transport|tech|software|startup)\b/);
    if (bizMatch) {
      const industry = bizMatch[6] ?? bizMatch[0];
      if (/marketing|agency|design|freelanc/.test(industry))
        return "Nice — a marketing or creative business! A lot of agencies we work with use automation to handle lead follow-ups, client onboarding, and reporting automatically. Are you looking to win more clients, save time on repetitive tasks, or both?";
      if (/consult|coach|train/.test(industry))
        return "Consulting and coaching businesses often see great results from better lead capture, automated follow-ups, and a strong website that positions them as the go-to expert. What's your biggest challenge right now — getting more clients or managing the ones you have?";
      if (/health|fitness|clinic|doctor|dentist|physio/.test(industry))
        return "Health and wellness businesses can save huge amounts of time with online booking, automated reminders, and patient intake forms. Do you currently have a booking system, or are you still taking appointments manually?";
      if (/restaurant|cafe|food/.test(industry))
        return "Food and hospitality businesses benefit massively from online presence and table/order systems. Are you looking to get more walk-ins, set up online ordering, or both?";
      if (/retail|shop|store/.test(industry))
        return "Retail businesses can do a lot with local SEO, online product pages, and automated customer follow-ups. Are you online yet, or mainly a physical store?";
      if (/law|legal|account|financ/.test(industry))
        return "Professional services firms often use us for client intake automation, appointment booking, and a credible website that builds trust. What's the most time-consuming part of your client process right now?";
      if (/real estate|property/.test(industry))
        return "Real estate businesses get great results from lead capture pages, automated follow-ups to enquiries, and CRM integration. Are you generating enough leads, or is the challenge more around managing them once they come in?";
      // Generic business intro fallback
      return `Interesting — sounds like a ${industry} business! What's the biggest challenge you're dealing with right now? Whether it's getting more customers, saving time, or better tools, I'd love to help point you in the right direction.`;
    }

    // Standalone industry/role mentions without full sentence
    if (/\b(marketing|digital marketing|social media|seo|advertising|pr agency)\b/.test(n))
      return "Marketing businesses are a great fit for what we do — a lot of agencies automate their client reporting, lead nurturing, and onboarding workflows. Are you looking to streamline your own operations, or build something for your clients?";

    if (/\b(consultant|consulting|freelancer|coach|trainer)\b/.test(n))
      return "Consultants and coaches often get great ROI from a strong website, automated lead follow-ups, and online booking. What's taking up most of your time right now that you wish could run itself?";

    if (/\b(restaurant|cafe|food|hospitality|catering)\b/.test(n))
      return "Restaurants and cafes can really benefit from online bookings, automated reminders, and Google visibility. Do you already have a website, or is that something you're looking to set up?";

    if (/\b(clinic|doctor|dental|physio|therapist|health|wellness|gym|fitness)\b/.test(n))
      return "Health and wellness businesses save a lot of time with automated appointment reminders and online booking. Are you currently managing bookings manually or through a system?";

    if (/\b(lawyer|solicitor|accountant|financial advisor|insurance)\b/.test(n))
      return "Professional services clients come to us mainly for credible websites, client intake automation, and appointment booking. What does your current client onboarding process look like?";

    if (/how much|what.*cost|pricing|price|fee|charge/.test(n))
      return "Pricing really depends on scope — we don't have a fixed price list. The best way to get an accurate number is a quick free call where we look at your specific needs. Want to book one?";

    if (/contact|email|phone|reach you|get in touch|call you|i want to call|give me.*number|your number|phone number/.test(n))
      return "You can call or WhatsApp us at +49 175 5017453, or email scbaala@gmail.com. You're also welcome to book a time directly below and we'll call you! 📞";

    if (/^(yes|yeah|yep|sure|absolutely|let'?s do it|book|book a call|book.*consultation)$/.test(n)) {
      addUser(t);
      addBot("Perfect! Fill in your details below and we'll send a calendar invite straight to your inbox.");
      setStage("form");
      return "";
    }

    if (/^(no|nope|not now|maybe later|later)$/.test(n))
      return "No worries! I'm here whenever you're ready. Feel free to ask me anything.";

    if (/^(thanks|thank you|cheers|appreciate|perfect|great|awesome|sounds good)/.test(n))
      return "You're welcome! \uD83D\uDE0A Anything else I can help with?";

    if (/^(bye|goodbye|see you|take care|ttyl)/.test(n))
      return "It was great chatting! Feel free to come back anytime. Have a great day! \uD83D\uDC4B";

    return null;
  };

  const askAssistant = async (question: string) => {
    addUser(question);
    setTyping(true);
    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    const history = [...messages].map((m) => ({
      role: m.sender === "bot" ? "assistant" : "user",
      content: m.text,
    })).filter((m) => m.content.trim() !== "");

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, conversationHistory: history }),
      });

      if (!res.ok || !res.body) throw new Error("Failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let content = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        content += decoder.decode(value, { stream: true });
        const text = parseStream(content);
        if (text) {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { sender: "bot", text };
            return next;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          sender: "bot",
          text: "Hmm, something went wrong on my end. Could you rephrase? Or book a free call and we'll chat directly.",
        };
        return next;
      });
    } finally {
      setTyping(false);
    }
  };

  const parseStream = (raw: string) => {
    let text = "";
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data: ")) continue;
      const body = trimmed.slice(6);
      if (body === "[DONE]") continue;
      try {
        const delta = JSON.parse(body)?.choices?.[0]?.delta?.content;
        if (typeof delta === "string") text += delta;
      } catch { /* skip */ }
    }
    return text;
  };

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || stage !== "chat") return;
    setInputValue("");

    // ── Intelligent contact collection flow ──────────────────
    if (collectStage === "ask-name") {
      addUser(text);
      setCollectedName(text);
      setCollectStage("ask-contact");
      addBot(`Nice to meet you, ${text.split(" ")[0]}! What's the best way to reach you — your email or phone number?`);
      return;
    }
    if (collectStage === "ask-contact") {
      addUser(text);
      setCollectedContact(text);
      setCollectStage("ask-time");
      addBot("Perfect. And what time of day is usually best for a call? Morning, afternoon, or evening?");
      return;
    }
    if (collectStage === "ask-time") {
      addUser(text);
      setCollectedTime(text);
      setCollectStage("done");
      addBot(`Got it — ${text} works great. I've noted your details and we'll be in touch soon! 📋 If you'd also like to lock in a specific date and time, tap "Book a free consultation" below.`);
      // Auto-send transcript + contact details to owner
      const updatedMsgs = [...messages, { sender: "user" as const, text }];
      await sendTranscript(updatedMsgs, { name: collectedName, email: collectedContact, time: text });
      return;
    }

    // ── Normal chat flow ──────────────────────────────────────
    const local = getLocalResponse(text);
    if (local === "") return;
    if (local !== null) {
      addUser(text);
      addBot(local);
      // After 3 bot turns, start collecting contact info naturally
      if (botTurnCount >= 2 && collectStage === "idle") {
        setTimeout(() => {
          setCollectStage("ask-name");
          addBot("By the way, I'd love to make sure we can follow up with you properly — what's your name?");
        }, 800);
      }
      return;
    }

    await askAssistant(text);
  };

  // Trigger contact collection after OpenAI responses too
  const prevBotCount = useRef(botTurnCount);
  useEffect(() => {
    if (botTurnCount >= 3 && botTurnCount !== prevBotCount.current && collectStage === "idle" && stage === "chat") {
      prevBotCount.current = botTurnCount;
      setTimeout(() => {
        setCollectStage("ask-name");
        addBot("By the way, I'd love to make sure we follow up with you — what's your name?");
      }, 600);
    }
    prevBotCount.current = botTurnCount;
  }, [botTurnCount]);

  const submitBooking = async () => {
    setSubmitError("");
    setSubmitStatus("loading");
    try {
      const transcript = messages
        .map((m) => `${m.sender === "bot" ? "Alex" : "Client"}: ${m.text}`)
        .join("\n");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...booking,
          fullName: booking.fullName || collectedName,
          email: booking.email || collectedContact,
          businessType: "Chat booking",
          challenge: "Direct booking",
          transcript,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Error ${res.status}`);
      }
      setSubmitStatus("success");
      addBot(`You're all set${booking.fullName ? `, ${booking.fullName.split(" ")[0]}` : ""}! \uD83C\uDF89 A calendar invite is on its way to your inbox. Looking forward to our chat!`);
      setStage("done");
    } catch (err) {
      setSubmitStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const bookingReady = booking.fullName.trim() && booking.email.trim();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && (
        <div className="flex flex-col w-[min(380px,calc(100vw-2rem))] max-h-[calc(100vh-5rem)] rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 px-5 py-4 text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">A</div>
              <div>
                <p className="text-sm font-semibold leading-none">Alex</p>
                <p className="text-xs text-blue-100 mt-0.5">The Digital Move · Berlin</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === "bot"
                ? "max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-900 whitespace-pre-line"
                : "ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-3 text-sm text-white"
              }>
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <span key={i} className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${delay}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom area */}
          <div className="border-t border-slate-100 px-4 py-4 shrink-0 space-y-3">

            {stage === "form" && (
              <div className="space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Book your free consultation</p>
                <input
                  value={booking.fullName}
                  onChange={(e) => setBooking((p) => ({ ...p, fullName: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  placeholder="Your name *"
                />
                <input
                  type="email"
                  value={booking.email}
                  onChange={(e) => setBooking((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  placeholder="Email address *"
                />
                <input
                  value={booking.phone}
                  onChange={(e) => setBooking((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  placeholder="Phone number (optional)"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={booking.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setBooking((p) => ({ ...p, date: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  />
                  <input
                    type="time"
                    value={booking.time}
                    onChange={(e) => setBooking((p) => ({ ...p, time: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  />
                </div>
                <button
                  disabled={!bookingReady || submitStatus === "loading"}
                  onClick={submitBooking}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Calendar className="h-4 w-4" />
                  {submitStatus === "loading" ? "Booking..." : "Confirm booking"}
                </button>
                {submitStatus === "error" && (
                  <p className="text-xs text-rose-500">{submitError}</p>
                )}
                <button
                  onClick={() => setStage("chat")}
                  className="w-full text-center text-xs text-slate-400 hover:text-slate-600 transition"
                >
                  ← Back to chat
                </button>
              </div>
            )}

            {stage === "chat" && (
              <>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void handleSend(); } }}
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-100"
                    placeholder="Type a message..."
                  />
                  <button
                    onClick={() => void handleSend()}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    addBot("Of course! Fill in your details below and I'll get a calendar invite sent to your inbox.");
                    setStage("form");
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                >
                  <Calendar className="h-4 w-4" />
                  Book a free consultation
                </button>
              </>
            )}

            {stage === "done" && (
              <button
                onClick={() => { setStage("chat"); setSubmitStatus("idle"); }}
                className="w-full text-center text-sm text-slate-500 hover:text-slate-700 transition"
              >
                Start a new conversation
              </button>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-700"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {open ? "Close chat" : "Chat with us"}
      </button>
    </div>
  );
}
