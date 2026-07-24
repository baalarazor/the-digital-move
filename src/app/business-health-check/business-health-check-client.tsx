"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Answer = "Yes" | "Partially" | "No";

type LeadPayload = {
  contactPerson: string;
  phone: string;
  score: number;
  answers: Record<string, Answer>;
};

type ApiSuccessResponse = {
  success: true;
  scoreBand: string;
  recommendations: string[];
  submittedAt: string;
};

type ApiErrorResponse = {
  success: false;
  error: string;
};

type ConfettiPiece = {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotate: number;
  size: number;
  color: string;
};

const QUESTIONS = [
  "Do you have a professional website?",
  "Can customers contact you easily online?",
  "Is your business easy to find on Google?",
  "Do you have at least 50 Google reviews?",
  "Can customers book appointments online?",
  "Are you active on social media?",
  "Do you respond quickly to customer enquiries?",
  "Is your business information up to date online?",
  "Do you know where your customers come from?",
  "Are you using digital tools to save time?",
] as const;

const SCORE_MAP: Record<Answer, number> = {
  Yes: 10,
  Partially: 5,
  No: 0,
};

const QUESTION_SERVICE_MAP = [
  "Professional Website",
  "AI Customer Assistant",
  "Google Business Optimisation",
  "Google Business Optimisation",
  "Online Booking Automation",
  "Social Media Growth Support",
  "AI Customer Assistant",
  "Local SEO & Listing Cleanup",
  "Analytics & Lead Tracking",
  "Workflow Automation",
] as const;

function getScoreBand(score: number): "Excellent" | "Good" | "Needs Improvement" | "High Growth Potential" {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Needs Improvement";
  return "High Growth Potential";
}

function getRecommendedServices(answers: Array<Answer | null>): string[] {
  const weights = new Map<string, number>();

  answers.forEach((answer, index) => {
    if (!answer) return;

    const service = QUESTION_SERVICE_MAP[index];
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

function CelebrationCrackers() {
  const confetti = useMemo<ConfettiPiece[]>(() => {
    const colors = ["#2563eb", "#14b8a6", "#22c55e", "#0ea5e9", "#f59e0b"];
    return Array.from({ length: 38 }, (_, index) => ({
      id: index,
      x: Math.round(Math.random() * 100),
      delay: Math.random() * 0.35,
      duration: 1.2 + Math.random() * 0.9,
      rotate: -140 + Math.random() * 280,
      size: 6 + Math.round(Math.random() * 6),
      color: colors[index % colors.length],
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0 overflow-visible" aria-hidden="true">
      {confetti.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.45}px`,
            backgroundColor: piece.color,
          }}
          initial={{ opacity: 0, y: -10, x: 0, rotate: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, 80, 190, 260],
            x: [0, piece.rotate * 0.08, piece.rotate * 0.16, piece.rotate * 0.2],
            rotate: [0, piece.rotate],
            scale: [0.8, 1, 1, 0.9],
          }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500"
        initial={{ scale: 0, opacity: 0.9 }}
        animate={{ scale: [0, 8, 12], opacity: [0.9, 0.25, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      />
    </div>
  );
}

export function BusinessHealthCheckClient() {
  const [started, setStarted] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [answers, setAnswers] = useState<Array<Answer | null>>(Array(QUESTIONS.length).fill(null));
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitResult, setSubmitResult] = useState<ApiSuccessResponse | null>(null);
  const [displayScore, setDisplayScore] = useState(0);

  const answeredCount = useMemo(() => answers.filter(Boolean).length, [answers]);
  const allAnswered = answeredCount === QUESTIONS.length;

  const score = useMemo(
    () => answers.reduce((total, answer) => total + (answer ? SCORE_MAP[answer] : 0), 0),
    [answers]
  );

  const localScoreBand = useMemo(() => getScoreBand(score), [score]);
  const localRecommendations = useMemo(() => getRecommendedServices(answers), [answers]);

  const scoreBand = submitResult?.scoreBand ?? localScoreBand;
  const recommendations = submitResult?.recommendations ?? localRecommendations;

  const onAnswerChange = (questionIndex: number, value: Answer) => {
    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = value;
      return next;
    });
  };

  const onSubmitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const answersObject = QUESTIONS.reduce<Record<string, Answer>>((acc, question, index) => {
      const value = answers[index];
      if (value) acc[question] = value;
      return acc;
    }, {});

    const payload: LeadPayload = {
      contactPerson,
      phone,
      score,
      answers: answersObject,
    };

    try {
      const response = await fetch("/api/business-health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as ApiSuccessResponse | ApiErrorResponse;

      if (!response.ok || !data.success) {
        const message = "error" in data ? data.error : "Unable to submit your report right now.";
        throw new Error(message);
      }

      setSubmitResult(data);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong while generating your report.");
    } finally {
      setSubmitting(false);
    }
  };

  const showResult = Boolean(submitResult);

  useEffect(() => {
    if (!showResult) {
      setDisplayScore(0);
      return;
    }

    let frame = 0;
    let value = 0;
    const target = score;
    const step = Math.max(1, Math.ceil(target / 30));

    const tick = () => {
      value = Math.min(target, value + step);
      setDisplayScore(value);
      if (value < target) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [showResult, score]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(15,23,42,0.08),transparent_38%)]" />

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold tracking-wide text-white shadow-sm">
              TDM
            </span>
            <span>
              <span className="block text-sm font-semibold leading-none text-slate-900">The Digital Move</span>
              <span className="block text-xs text-slate-500">AI and Workflow Automation</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="https://wa.me/491755017453"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-emerald-500 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-500/20 sm:inline-flex"
            >
              WhatsApp
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            The Digital Move Assessment
          </p>
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles className="mr-2 h-4 w-4" />
            FREE Business Health Check
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Is Your Business Easy to Find Online?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Answer 10 quick questions and discover how your business performs online. It only takes 2 minutes.
          </p>

          {!started ? (
            <Button size="lg" className="mt-8 rounded-full" onClick={() => setStarted(true)}>
              Start Free Assessment
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : null}
        </motion.div>

        {started && !showLeadForm && !showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mt-10"
          >
            <Card className="overflow-hidden border-blue-100">
              <CardHeader className="border-b border-slate-100 bg-slate-50/70">
                <CardTitle className="text-xl">Quick Assessment</CardTitle>
                <CardDescription>
                  {answeredCount} / {QUESTIONS.length} answered
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-5 sm:p-7">
                {QUESTIONS.map((question, index) => (
                  <div key={question} className="rounded-xl border border-slate-200 p-4 sm:p-5">
                    <p className="text-sm font-medium text-slate-800 sm:text-base">
                      {index + 1}. {question}
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {(["Yes", "Partially", "No"] as const).map((option) => {
                        const active = answers[index] === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => onAnswerChange(index, option)}
                            className={cn(
                              "rounded-lg border px-3 py-2 text-sm font-medium transition",
                              active
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-white text-slate-700 hover:border-blue-300"
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-slate-600">Current score: {score} / 100</p>
                  <Button disabled={!allAnswered} onClick={() => setShowLeadForm(true)}>
                    Continue to Free Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}

        {showLeadForm && !showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <Card>
              <CardHeader>
                <CardTitle>Generate Your FREE Report</CardTitle>
                <CardDescription>
                  Please provide your details before we show your personalised results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={onSubmitLead}>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      required
                      value={contactPerson}
                      onChange={(event) => setContactPerson(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      required
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  {submitError ? (
                    <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">
                      {submitError}
                    </p>
                  ) : null}

                  <div className="pt-2 sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Generate My FREE Report
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}

        {showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="relative mx-auto mt-10 max-w-3xl"
          >
            <CelebrationCrackers />
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Business Health Score</CardTitle>
                <CardDescription>
                  Your score is based on your answers across website, discoverability, responsiveness, and automation readiness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
                >
                  <p className="text-4xl font-semibold text-slate-950 sm:text-5xl">{displayScore} / 100</p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="mt-3 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                  >
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    {scoreBand}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="mt-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Recommended Services</p>
                  <ul className="mt-3 space-y-2">
                    {recommendations.map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.25 + index * 0.08 }}
                        className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.4 }}
                  className="mt-8 rounded-xl border border-blue-100 bg-blue-50/80 p-5"
                >
                  <p className="text-sm text-slate-700 sm:text-base">
                    Would you like a FREE 30-minute consultation to discuss these recommendations?
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Book Free Consultation
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.5 }}
                  className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800"
                >
                  <p className="text-lg font-semibold">Thank you!</p>
                  <p className="mt-2 text-sm leading-6">
                    Your Business Health Check has been completed successfully. We&apos;ve received your information and
                    will contact you shortly with personalised recommendations.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </section>
    </main>
  );
}