"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { courses } from "@/lib/data";
import { ArrowRight, Check, WhatsApp } from "@/components/Icons";

const subjects = [
  "General enquiry",
  "Booking a free trial",
  "Course information",
  "Fees & scheduling",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    course: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage() {
    const lines = [
      "Assalamu Alaikum, I'd like to get in touch with QiraatHub.",
      "",
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Subject: ${form.subject}`,
      form.course ? `Course of interest: ${form.course}` : "",
      "",
      form.message || "",
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // Front-end only: open WhatsApp with a pre-filled enquiry.
    if (typeof window !== "undefined") {
      window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
          Jazak Allah Khair!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-navy-600">
          Your message is ready in WhatsApp — just press send and our team will
          reply shortly. Prefer email? Reach us any time at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-emerald-700 underline">
            {site.email}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(buildMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsApp className="h-5 w-5" />
            Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="btn-outline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="e.g. Aisha Khan"
            autoComplete="name"
          />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Subject" htmlFor="subject">
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="input"
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Course of interest" htmlFor="course" optional>
          <select
            id="course"
            value={form.course}
            onChange={(e) => update("course", e.target.value)}
            className="input"
          >
            <option value="">Not sure yet</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input resize-none"
          placeholder="Tell us a little about what you're looking for…"
        />
      </Field>

      <button type="submit" className="btn-primary w-full text-base">
        Send message
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-navy-500">
        By sending this message you agree to be contacted by our team. We never
        share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-navy-800"
      >
        {label}
        {optional && <span className="ml-1 text-navy-400">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
