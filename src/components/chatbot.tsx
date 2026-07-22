"use client";

import { ArrowRight, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const businessOptions = [
  "Doctor / Clinic",
  "Restaurant / Cafe",
  "Salon / Beauty",
  "Retail Store",
  "Fitness Studio",
  "Consultant",
  "Real Estate",
  "Construction",
  "Accountant",
  "Lawyer",
  "Other",
] as const;

const challengeOptions = [
  "Getting more customers",
  "Too many phone calls",
  "Managing appointments",
  "Too much paperwork",
  "Need a better website",
  "Need better Google visibility",
  "Need social media help",
  "Need marketing",
  "Need online booking",
  "Need customer management",
  "Other",
] as const;

const faqQuickReplies = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does a project take?",
  "Can you redesign my existing website?",
  "Do you work with small businesses?",
  "Do you provide ongoing support?",
  "Can you manage our social media?",
  "Can you help us appear on Google?",
  "Can you create online booking systems?",
  "Can you automate appointment reminders?",
  "Can you improve our Google reviews?",
  "Do you provide custom software?",
];

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

type LeadData = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  city: string;
  date: string;
  time: string;
  notes: string;
};

const recommendations: Record<string, string[]> = {
  "Doctor / Clinic": [
    "Professional website",
    "Online appointment booking",
    "Google visibility",
    "Patient reminders",
    "Online enquiry forms",
  ],
  "Restaurant / Cafe": [
    "Online menu",
    "Table reservations",
    "Google visibility",
    "Social media",
    "Online ordering",
  ],
  "Salon / Beauty": [
    "Online bookings",
    "Appointment reminders",
    "Instagram management",
    "Google Reviews",
    "Professional website",
  ],
  "Retail Store": [
    "Product pages",
    "Local search visibility",
    "Online customer inquiries",
    "Store hours and events",
    "Customer contact forms",
  ],
  "Fitness Studio": [
    "Class booking",
    "Member intake forms",
    "Google visibility",
    "Email reminders",
    "Promotional landing pages",
  ],
  Consultant: [
    "Professional website",
    "Lead capture forms",
    "Google visibility",
    "Client booking forms",
    "Trust-building case studies",
  ],
  "Real Estate": [
    "Listing pages",
    "Lead capture",
    "Google visibility",
    "Property inquiry forms",
    "Local search support",
  ],
  Construction: [
    "Project showcase pages",
    "Lead capture forms",
    "Service descriptions",
    "Google visibility",
    "Customer contact forms",
  ],
  Accountant: [
    "Clear service pages",
    "Client intake forms",
    "Google visibility",
    "Appointment booking",
    "Client communication support",
  ],
  Lawyer: [
    "Professional website",
    "Contact and enquiry forms",
    "Google visibility",
    "Service pages",
    "Client intake information",
  ],
  Other: [
    "Professional website",
    "Lead capture forms",
    "Google visibility",
    "Customer contact tools",
    "A clear growth plan",
  ],
};

const fallbackRecommendation = [
  "Professional website",
  "Customer enquiry forms",
  "Google visibility",
  "Better customer communication",
  "A clearer way to get more leads",
];

function getRecommendationForBusiness(businessType: string) {
  return recommendations[businessType] ?? fallbackRecommendation;
}

function normalizeBusinessLabel(businessType: string) {
  return businessType === "Other" ? "your business" : businessType;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stage, setStage] = useState<"welcome" | "business" | "challenge" | "recommendation" | "book" | "form" | "done">("welcome");
  const [businessType, setBusinessType] = useState<string>("");
  const [challenge, setChallenge] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const saveKey = "tdm-business-chatbot";

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.sessionStorage.getItem(saveKey) : null;
    if (stored) {
      try {
        const state = JSON.parse(stored);
        setMessages(state.messages || []);
        setStage(state.stage || "welcome");
        setBusinessType(state.businessType || "");
        setChallenge(state.challenge || "");
        setLeadData(state.leadData || leadData);
      } catch {
        setMessages([]);
      }
    } else {
      setMessages([
        {
          sender: "bot",
          text: "👋 Hey there! I'm Alex from The Digital Move. We help businesses save time, get more customers, and grow — using smart digital tools. What kind of business are you running?",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        saveKey,
        JSON.stringify({ messages, stage, businessType, challenge, leadData })
      );
    }
  }, [messages, stage, businessType, challenge, leadData]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, stage]);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "bot", text }]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  };

  const startChallengeStep = (business: string) => {
    addUserMessage(business);
    setBusinessType(business);
    setStage("challenge");
    addBotMessage(`Got it — a ${business === "Other" ? "business" : business.toLowerCase()}! What's the biggest challenge you're dealing with right now?`);
  };

  const startRecommendations = (selectedChallenge: string) => {
    addUserMessage(selectedChallenge);
    setChallenge(selectedChallenge);
    const recs = getRecommendationForBusiness(businessType);
    addBotMessage(`Okay, that makes sense. For a ${normalizeBusinessLabel(businessType)}, here's what I'd look at first:\n\n• ${recs.join("\n• ")}\n\nWant me to show you how this could work for your specific business? I can arrange a quick free walkthrough — no strings attached.`);
    setStage("book");
  };

  const handleBookingResponse = (response: string) => {
    addUserMessage(response);
    if (response === "Yes") {
      addBotMessage("Brilliant! Just fill in your details below and we'll get a calendar invite sent straight to your inbox.");
      setStage("form");
      return;
    }

    if (response === "Maybe Later") {
      addBotMessage(
        "No worries at all — take your time. When you're ready, just click 'Book a demo' and we'll set something up. Happy to answer any questions in the meantime!"
      );
      return;
    }

    if (response === "Need More Information") {
      addBotMessage(
        "Of course! We focus on practical solutions that actually make a difference — more customers, less manual work, and clearer systems. What would you like to know more about?"
      );
      setStage("book");
    }
  };

  const sendLead = async () => {
    setSubmitErrorMessage("");
    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...leadData,
          businessType,
          challenge,
        }),
      });

      if (!response.ok) {
        let errorMessage = `Submission failed with status ${response.status}`;
        try {
          const body = await response.json();
          if (body?.error) errorMessage = body.error;
        } catch {
          const text = await response.text().catch(() => "");
          if (text) errorMessage = text;
        }
        throw new Error(errorMessage);
      }

      setSubmitStatus("success");
      addBotMessage(`Thank you${leadData.fullName ? `, ${leadData.fullName.split(" ")[0]}` : ""}! We've got your details. You'll receive a calendar invite in your inbox shortly — looking forward to our chat! 🎉`);
      setStage("done");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitErrorMessage(error instanceof Error ? error.message : "Unable to submit your request. Please try again.");
      addBotMessage(
        "Something went wrong while saving your request. Please try again, or email us directly if you'd like."
      );
    }
  };

  const askAssistant = async (question: string) => {
    addUserMessage(question);
    setTyping(true);
    const placeholderMessage: ChatMessage = { sender: "bot", text: "" };
    setMessages((prev) => [...prev, placeholderMessage]);

    // Build conversation history for OpenAI (exclude the empty placeholder we just added)
    const conversationHistory = [...messages].map((m) => ({
      role: m.sender === "bot" ? "assistant" : "user",
      content: m.text,
    })).filter((m) => m.content.trim() !== "");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, conversationHistory }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Assistant response failed.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = "";
      let done = false;

      while (!done) {
        const result = await reader.read();
        done = result.done ?? true;
        const chunk = decoder.decode(result.value, { stream: true });
        content += chunk;
        const text = parseOpenAIStream(content);
        if (text) {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { sender: "bot", text };
            return next;
          });
        }
      }
    } catch (error) {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          sender: "bot",
          text: "Hmm, I didn't quite catch that — could you rephrase? Or if you'd like to speak directly, just book a free call and we'll sort it out properly.",
        };
        return next;
      });
    } finally {
      setTyping(false);
    }
  };

  const parseOpenAIStream = (raw: string) => {
    const lines = raw.split(/\n/).filter(Boolean);
    let text = "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("data: ")) {
        const body = trimmed.replace("data: ", "");
        if (body === "[DONE]") continue;
        try {
          const json = JSON.parse(body);
          // Standard chat completions streaming format
          const delta = json?.choices?.[0]?.delta?.content;
          if (typeof delta === "string") {
            text += delta;
          }
        } catch {
          // ignore parse errors
        }
      }
    }

    return text;
  };

  const isGreeting = (text: string) => {
    const normalized = text.trim().toLowerCase();
    return ["hi", "hey", "hello", "hi there", "hey there", "hello there"].includes(normalized);
  };

  const isBookingIntent = (text: string) => {
    const normalized = text.trim().toLowerCase();
    return [
      "book a demo",
      "book demo",
      "demo",
      "book a consultation",
      "book consultation",
      "free consultation",
      "schedule a demo",
      "schedule demo",
      "i want a demo",
      "i want to book a demo",
      "i want a consultation",
      "i want to book a consultation",
    ].some((phrase) => normalized.includes(phrase));
  };

  const isEnquiryIntent = (text: string) => {
    const normalized = text.trim().toLowerCase();
    return [
      "enquiry",
      "inquiry",
      "i have an enquiry",
      "i have an inquiry",
      "i want to enquire",
      "i want to inquire",
      "enquire",
      "inquire",
      "send a message",
      "contact you",
      "reach out",
    ].some((phrase) => normalized.includes(phrase));
  };

  const isPricingQuestion = (text: string) => {
    const normalized = text.trim().toLowerCase();
    return [
      "how much does",
      "what is the cost",
      "what's the cost",
      "pricing",
      "how much does it cost",
      "how much will it cost",
      "what is the price",
      "what's the price",
      "how much for",
      "cost of",
      "fee",
      "pricing details",
      "website cost",
      "project cost",
    ].some((phrase) => normalized.includes(phrase));
  };

  const getLocalResponse = (text: string): string | null => {
    const t = text.trim().toLowerCase();

    // How are you / wellbeing
    if (/how are you|how('s| is) it going|how do you do|you ok|all good/.test(t)) {
      return "I'm doing great, thanks for asking! 😊 Ready to help you grow your business. What kind of business are you running?";
    }

    // Where are you / location
    if (/where are you|where('re| are) you (based|located|from)|your (office|location|address)|berlin/.test(t)) {
      return "We're based in Berlin, Germany — and we work with businesses across Europe and worldwide remotely. Is your business based in Berlin too?";
    }

    // Who are you / what is this / what do you do
    if (/who are you|what are you|what is (this|the digital move|your company|your business)|tell me about (yourself|you|your company)/.test(t)) {
      return "I'm Alex — a consultant at The Digital Move, a Berlin-based digital agency. We help businesses save time, get more customers, and grow using AI automation, workflow tools, and modern websites. What can I help you with today?";
    }

    // What services do you offer
    if (/what (do you (offer|do|provide)|services|can you do)|your services|services you offer/.test(t)) {
      return "We offer: AI Automation, Workflow Automation, Website Development, Custom Software, and System Integration. Which of these sounds most relevant to you?";
    }

    // Contact / email / phone
    if (/contact|email|phone|reach you|get in touch|call you/.test(t)) {
      return "Best way to reach us is through this chat or by emailing hello@thedigitalmove.com. Want to book a free consultation so we can chat properly?";
    }

    // Thank you
    if (/^(thank(s| you)|cheers|appreciate it|great|awesome|perfect|sounds good|nice)/.test(t)) {
      return "You're welcome! 😊 Is there anything else I can help you with?";
    }

    // Bye / goodbye
    if (/^(bye|goodbye|see you|talk later|cya|ttyl|gtg|good night|good evening)/.test(t)) {
      return "It was great chatting! Feel free to come back anytime. Have a wonderful day! 👋";
    }

    // Yes / No standalone
    if (/^(yes|yeah|yep|yup|sure|absolutely|definitely)$/.test(t)) {
      return "Great! Fill in your details in the form below and we'll send a calendar invite straight to your inbox.";
    }
    if (/^(no|nope|not (now|yet)|maybe later)$/.test(t)) {
      return "No worries! Take your time. I'm here if you have any questions or want to book when you're ready.";
    }

    return null; // no local match — send to OpenAI
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    if (stage === "form" || stage === "done") return;

    const text = inputValue.trim();
    setInputValue("");

    if (isGreeting(text)) {
      addUserMessage(text);
      addBotMessage("Hey! Great to have you here. I'm Alex — what kind of business are you in? I'd love to hear what you're working on.");
      setStage("welcome");
      return;
    }

    if (isBookingIntent(text) || isEnquiryIntent(text)) {
      addUserMessage(text);
      addBotMessage("Absolutely! Pop your details in the form below and we'll send over a calendar invite with the meeting confirmed.");
      setStage("form");
      return;
    }

    if (isPricingQuestion(text)) {
      addUserMessage(text);
      addBotMessage("Great question! Honestly, it depends a lot on the scope and what you need. We don't have a fixed price list — the best way is a quick free call where we look at your specific situation and give you a realistic number. Want to book one?");
      return;
    }

    // Handle common conversational questions locally without needing OpenAI
    const localReply = getLocalResponse(text);
    if (localReply) {
      addUserMessage(text);
      addBotMessage(localReply);
      return;
    }

    await askAssistant(text);
  };

  const quickReplyButtons = useMemo(() => {
    if (stage === "welcome") {
      return [
        ...businessOptions.map((option) => ({ label: option, action: () => startChallengeStep(option) })),
        { label: "Book a demo", action: () => {
          addUserMessage("Book a demo");
          addBotMessage("Brilliant! Fill in your details below and we'll send a calendar invite straight to your inbox.");
          setStage("form");
        } },
        { label: "I have an enquiry", action: () => {
          addUserMessage("I have an enquiry");
          addBotMessage("Of course! Pop your details in below and we'll get back to you personally.");
          setStage("form");
        } },
      ];
    }

    if (stage === "challenge") {
      return challengeOptions.map((option) => ({ label: option, action: () => startRecommendations(option) }));
    }

    if (stage === "book") {
      return [
        { label: "Yes", action: () => handleBookingResponse("Yes") },
        { label: "Maybe Later", action: () => handleBookingResponse("Maybe Later") },
        { label: "Need More Information", action: () => handleBookingResponse("Need More Information") },
      ];
    }

    return faqQuickReplies.slice(0, 6).map((question) => ({ label: question, action: () => askAssistant(question) }));
  }, [stage, businessType, challenge, messages]);

  const formReady = leadData.fullName && leadData.email && leadData.businessName;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open ? (
        <div className="w-[min(380px,calc(100vw-2rem))] max-h-[calc(100vh-3rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-200 flex flex-col">
          <div className="flex items-center justify-between rounded-t-3xl bg-blue-600 px-5 py-4 text-white">
            <div>
              <p className="text-sm font-semibold">Business Growth Assistant</p>
              <p className="text-xs text-blue-100">Friendly consultant-style support</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden">
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <div className="flex-1 min-h-0 overflow-y-auto border-b border-slate-200 px-4 py-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={message.sender === "bot" ? "rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-900" : "ml-auto rounded-3xl bg-blue-600 px-4 py-3 text-sm text-white"}>
                    <p>{message.text}</p>
                  </div>
                ))}
                {typing ? (
                  <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-900">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500" />
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500" style={{ animationDelay: "0.15s" }} />
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                ) : null}
                <div ref={messagesEndRef} />
              </div>

              <div className="min-h-0 overflow-y-auto border-t border-slate-200 px-4 py-4" style={{ maxHeight: 340 }}>
                <div className="grid gap-2">
                  {quickReplyButtons.slice(0, 4).map((button) => (
                    <button key={button.label} onClick={button.action} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                      {button.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setStage("welcome");
                  }}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  Close chat
                </button>

                {stage === "form" ? (
                  <div className="space-y-3 mt-3">
                    <label className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input value={leadData.fullName} onChange={(event) => setLeadData((prev) => ({ ...prev, fullName: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="Full Name" />
                    <label className="block text-sm font-medium text-slate-700">Business Name</label>
                    <input value={leadData.businessName} onChange={(event) => setLeadData((prev) => ({ ...prev, businessName: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="Business Name" />
                    <label className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" value={leadData.email} onChange={(event) => setLeadData((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="Email Address" />
                    <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input value={leadData.phone} onChange={(event) => setLeadData((prev) => ({ ...prev, phone: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="Phone Number" />
                    <label className="block text-sm font-medium text-slate-700">City</label>
                    <input value={leadData.city} onChange={(event) => setLeadData((prev) => ({ ...prev, city: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="City" />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Preferred Meeting Date</label>
                        <input type="date" value={leadData.date} onChange={(event) => setLeadData((prev) => ({ ...prev, date: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Preferred Meeting Time</label>
                        <input type="time" value={leadData.time} onChange={(event) => setLeadData((prev) => ({ ...prev, time: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" />
                      </div>
                    </div>
                    <label className="block text-sm font-medium text-slate-700">Additional Notes</label>
                    <textarea value={leadData.notes} onChange={(event) => setLeadData((prev) => ({ ...prev, notes: event.target.value }))} rows={3} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900" placeholder="Tell us a bit more about your business or goals." />
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button disabled={!formReady || submitStatus === "loading"} onClick={sendLead} className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
                        {submitStatus === "loading" ? "Sending..." : "Send request"}
                        <Send className="ml-2 h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => {
                        setOpen(false);
                        setStage("welcome");
                      }} className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                        Cancel
                      </button>
                    </div>
                    {submitStatus === "success" ? <p className="text-sm text-emerald-600">Your request was sent successfully.</p> : null}
                    {submitStatus === "error" ? <p className="text-sm text-rose-600">{submitErrorMessage || "Unable to submit your request. Please try again."}</p> : null}
                  </div>
                ) : (
                  <div className="flex gap-2 mt-3">
                    <input
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          void handleSend();
                        }
                      }}
                      className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
                      placeholder="Ask a question or share more about your business"
                    />
                    <button onClick={handleSend} className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-blue-600 px-4 text-white transition hover:bg-blue-700">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!open ? (
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-700">
          <MessageCircle className="h-5 w-5" />
          Business Growth Assistant
        </button>
      ) : null}
    </div>
  );
}
