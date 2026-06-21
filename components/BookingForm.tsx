"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { whatsappLink } from "@/lib/site";
import { courses } from "@/lib/data";
import { countries } from "@/lib/data";
import { ArrowRight, Check } from "@/components/Icons";

const timings = [
  "Early morning (5am – 8am)",
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 8pm)",
  "Night (8pm – 11pm)",
  "Flexible / weekends",
];

type FormState = {
  student: string;
  parent: string;
  age: string;
  country: string;
  whatsapp: string;
  timing: string;
  course: string;
};

const initial: FormState = {
  student: "",
  parent: "",
  age: "",
  country: "",
  whatsapp: "",
  timing: timings[0],
  course: courses[0].title,
};

export function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage() {
    return [
      "Assalamu Alaikum! I'd like to book a FREE trial Quran class. 🌙",
      "",
      `• Student name: ${form.student || "—"}`,
      `• Parent/guardian: ${form.parent || "—"}`,
      `• Age: ${form.age || "—"}`,
      `• Country: ${form.country || "—"}`,
      `• WhatsApp: ${form.whatsapp || "—"}`,
      `• Preferred timing: ${form.timing}`,
      `• Course of interest: ${form.course}`,
      "",
      "Please let me know the next available slot. Jazak Allah Khair!",
    ].join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const msg = buildMessage();

    // Front-end only flow: open a pre-filled WhatsApp chat, then show thank-you.
    if (typeof window !== "undefined") {
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    }
    const params = new URLSearchParams({
      name: form.student || form.parent || "",
      msg,
    });
    router.push(`/thank-you?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student name" htmlFor="student">
          <input
            id="student"
            type="text"
            required
            value={form.student}
            onChange={(e) => update("student", e.target.value)}
            className="input"
            placeholder="Child or adult learner"
          />
        </Field>
        <Field label="Parent / guardian name" htmlFor="parent" optional>
          <input
            id="parent"
            type="text"
            value={form.parent}
            onChange={(e) => update("parent", e.target.value)}
            className="input"
            placeholder="For adult learners, leave blank"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student age" htmlFor="age">
          <input
            id="age"
            type="number"
            min={3}
            max={99}
            required
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
            className="input"
            placeholder="e.g. 8"
          />
        </Field>
        <Field label="Country" htmlFor="country">
          <select
            id="country"
            required
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className="input"
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="WhatsApp number" htmlFor="whatsapp">
          <input
            id="whatsapp"
            type="tel"
            required
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className="input"
            placeholder="+44 7700 900123"
            autoComplete="tel"
          />
        </Field>
        <Field label="Preferred timing" htmlFor="timing">
          <select
            id="timing"
            value={form.timing}
            onChange={(e) => update("timing", e.target.value)}
            className="input"
          >
            {timings.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Course of interest" htmlFor="course">
        <select
          id="course"
          value={form.course}
          onChange={(e) => update("course", e.target.value)}
          className="input"
        >
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
          <option value="Not sure — please advise">Not sure — please advise</option>
        </select>
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold w-full text-base disabled:opacity-70"
      >
        {submitting ? "Opening WhatsApp…" : "Book My Free Trial Class"}
        <ArrowRight className="h-4 w-4" />
      </button>

      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs text-navy-500">
        {["100% free", "No card required", "Reply within hours"].map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-600" />
            {t}
          </li>
        ))}
      </ul>
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
