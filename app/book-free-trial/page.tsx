import type { Metadata } from "next";
import { site } from "@/lib/site";
import { steps } from "@/lib/data";
import { BookingForm } from "@/components/BookingForm";
import { IslamicPattern, OrnamentDivider } from "@/components/IslamicPattern";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Check, ShieldCheck, Star, Users, Clock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a Free Trial Quran Class",
  description:
    "Book your free, no-obligation trial Quran class with QiraatHub Online Academy. Meet a qualified teacher and experience one-to-one online learning for kids and adults.",
  alternates: { canonical: "/book-free-trial" },
  openGraph: {
    title: "Book a Free Trial Quran Class — QiraatHub",
    description:
      "Meet a qualified teacher and experience one-to-one online Quran learning, completely free.",
    url: `${site.url}/book-free-trial`,
  },
};

const assurances = [
  { icon: ShieldCheck, label: "Qualified, vetted male & female teachers" },
  { icon: Users, label: "Private one-to-one lesson, just for you" },
  { icon: Clock, label: "Flexible timing across every timezone" },
  { icon: Star, label: `Rated ${site.rating.value}/5 by ${site.rating.count}+ families` },
];

export default function BookFreeTrialPage() {
  const crumbs = [
    { name: "Home", url: site.url },
    { name: "Book Free Trial", url: `${site.url}/book-free-trial` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
          <IslamicPattern className="absolute inset-0" />
        </div>
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="container-px relative z-10 grid gap-12 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Persuasion column */}
          <div className="lg:pt-4">
            <p className="eyebrow justify-start text-gold-300">
              <Star className="h-4 w-4" /> Free Trial — No Obligation
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
              Book your free{" "}
              <span className="text-gradient-gold">trial Quran class</span>
            </h1>
            <OrnamentDivider className="mt-6" align="left" />
            <p className="mt-6 max-w-md text-lg text-white/75">
              Tell us a little about the student and we'll match you with the
              perfect qualified teacher. Your first lesson is completely free —
              experience the QiraatHub difference before you commit.
            </p>

            <ul className="mt-8 space-y-3">
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-white/85">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
                How it works
              </p>
              <ol className="mt-4 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.title}</p>
                      <p className="text-sm text-white/65">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:pt-4">
            <div className="rounded-[2rem] bg-cream p-6 text-navy-900 shadow-cardHover sm:p-9">
              <div className="text-center">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Reserve your free class
                </h2>
                <p className="mt-2 text-navy-600">
                  Takes less than a minute. We'll confirm on WhatsApp.
                </p>
              </div>
              <div className="mt-7">
                <BookingForm />
              </div>
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-white/70">
              <Check className="h-4 w-4 text-emerald-300" />
              Your details are private and never shared.
            </p>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 50"
          className="relative z-10 block w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 50 L1440 50 L1440 20 C1080 48 360 48 0 20 Z" fill="#FBFBF8" />
        </svg>
      </section>
    </>
  );
}
