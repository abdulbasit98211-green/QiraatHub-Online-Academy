import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { IslamicPattern, OrnamentDivider } from "@/components/IslamicPattern";
import { Check, WhatsApp, ArrowRight, BookOpen } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Thank You — Your Free Trial Is Reserved",
  description:
    "Thank you for booking a free trial Quran class with QiraatHub Online Academy. Confirm your slot on WhatsApp and we'll be in touch shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; msg?: string }>;
}) {
  const { name, msg } = await searchParams;
  const firstName = (name || "").trim().split(" ")[0];
  const waHref = msg ? whatsappLink(msg) : whatsappLink();

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden gradient-navy text-white">
      <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
        <IslamicPattern className="absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="container-px relative z-10 py-28 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 shadow-emerald">
          <Check className="h-10 w-10 text-white" />
        </div>

        <OrnamentDivider className="mt-8" />
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {firstName ? `Jazak Allah Khair, ${firstName}!` : "Jazak Allah Khair!"}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
          Your free trial request has been received. To lock in your slot the
          fastest way, send us your details on WhatsApp — we've pre-filled the
          message for you. Our team will confirm your teacher and timing
          shortly, in shaa Allah.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
          >
            <WhatsApp className="h-5 w-5" />
            Confirm on WhatsApp
          </a>
          <Link href="/courses" className="btn-ghost-light text-base">
            <BookOpen className="h-5 w-5" />
            Explore our courses
          </Link>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
          {[
            { t: "Within hours", d: "We reply to confirm your slot" },
            { t: "Meet your teacher", d: "A qualified, vetted tutor" },
            { t: "First class free", d: "No payment, no obligation" },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="font-display text-lg font-semibold text-gold-300">
                {s.t}
              </p>
              <p className="mt-1 text-sm text-white/65">{s.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/60">
          Didn't mean to land here?{" "}
          <Link href="/" className="font-medium text-white hover:underline">
            Return home
          </Link>{" "}
          or email us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-white hover:underline"
          >
            {site.email}
          </a>
          .
        </p>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/50">
          Ready for more? <ArrowRight className="h-4 w-4" />
          <Link href="/about" className="text-white/80 hover:underline">
            Learn about our method
          </Link>
        </p>
      </div>
    </section>
  );
}
