import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRight, Check, Star, WhatsApp } from "@/components/Icons";
import { IslamicPattern } from "@/components/IslamicPattern";
import { QuranIllustration } from "@/components/QuranIllustration";

const trustPoints = [
  "Qualified male & female teachers",
  "Flexible timings worldwide",
  "100% one-to-one classes",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-navy text-white">
      <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
        <IslamicPattern className="absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-px relative z-10 grid items-center gap-12 pb-20 pt-28 sm:pt-36 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            <Star className="h-3.5 w-3.5" />
            {site.rating.value}/5 from {site.rating.count}+ families
          </span>

          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.05] sm:text-6xl">
            Learn Quran Online with{" "}
            <span className="text-gradient-gold">Qualified Teachers</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            One-to-one online Quran classes for kids and adults worldwide.
            Personalised lessons in Nazra, Tajweed, Hifz and Qaidah — with
            teachers who fit your level, schedule and preference.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/80">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/25 text-emerald-300">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-free-trial" className="btn-gold text-base">
              Book Free Trial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light text-base"
            >
              <WhatsApp className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { v: site.stats.students, l: "Active students" },
              { v: site.stats.teachers, l: "Expert teachers" },
              { v: site.stats.countries, l: "Countries served" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-semibold text-gold-300">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs text-white/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in lg:pl-8">
          <div className="relative mx-auto max-w-md">
            <QuranIllustration className="w-full animate-float-slow drop-shadow-2xl" />

            {/* Floating proof cards */}
            <div className="absolute -left-2 top-6 rounded-2xl border border-white/15 bg-white/95 p-3 text-navy-900 shadow-card backdrop-blur sm:-left-6">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-white">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">Free trial class</p>
                  <p className="text-xs text-navy-900/60">No payment required</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 rounded-2xl border border-white/15 bg-white/95 p-3 text-navy-900 shadow-card backdrop-blur sm:-right-4">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-navy-900/70">
                Loved by parents &amp; students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="relative z-10">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 L1440 60 L1440 24 C1080 56 360 56 0 24 Z" fill="#FBFBF8" />
        </svg>
      </div>
    </section>
  );
}
