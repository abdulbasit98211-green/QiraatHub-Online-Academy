import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { site } from "@/lib/site";
import {
  BookOpen,
  Compass,
  Heart,
  Sparkle,
  Target,
  Users,
} from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Teaching Methodology",
  description:
    "QiraatHub Online Academy connects Muslim families worldwide with qualified Quran teachers. Learn about our mission, vision, student-centered methodology and why families trust us.",
  alternates: { canonical: "/about" },
};

const methodology = [
  {
    icon: Target,
    title: "Assess & personalise",
    body: "Every student begins with a free assessment so we can match the right teacher, level and pace from day one.",
  },
  {
    icon: BookOpen,
    title: "Learn one-to-one",
    body: "Dedicated lessons focused entirely on the student — correcting in real time and building genuine understanding.",
  },
  {
    icon: Compass,
    title: "Track & adapt",
    body: "Clear milestones and regular progress updates keep learning on course and parents fully informed.",
  },
  {
    icon: Sparkle,
    title: "Nurture love of the Quran",
    body: "We teach with patience and encouragement, so students build a lasting, joyful connection with the Quran.",
  },
];

const whyChoose = [
  "100% one-to-one classes with qualified teachers",
  "Choice of male or female teachers",
  "Ijazah-certified instructors with years of experience",
  "Flexible scheduling across global time zones",
  "Structured curriculum with measurable progress",
  "Free trial class with no payment details required",
  "Safe, respectful, child-friendly environment",
  "Clear communication in English for every family",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ])}
      />
      <PageHero
        eyebrow="About the academy"
        title="Connecting families with the Quran, worldwide"
        intro="QiraatHub Online Academy was founded on a simple belief: every Muslim deserves access to a qualified, caring Quran teacher — wherever they live."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission & Vision */}
      <section className="section bg-cream">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal className="card border-l-4 border-l-emerald-600">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage text-emerald-700">
              <Heart className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-navy-900">
              Our mission
            </h2>
            <p className="mt-3 leading-relaxed text-navy-900/70">
              To make high-quality Quran education accessible to every family,
              through qualified teachers, personalised one-to-one lessons and a
              learning experience built on patience, respect and excellence.
            </p>
          </Reveal>

          <Reveal delay={80} className="card border-l-4 border-l-gold-500">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-100 text-gold-600">
              <Compass className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-navy-900">
              Our vision
            </h2>
            <p className="mt-3 leading-relaxed text-navy-900/70">
              A world where distance is never a barrier to learning the Quran —
              where children and adults everywhere can recite beautifully,
              understand deeply and carry the Quran with them for life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="section bg-sage/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="How we teach"
            title="A proven teaching methodology"
            intro="Our student-centered approach combines structure with genuine care, so every learner progresses with confidence."
            ornament
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m, i) => (
              <Reveal as="article" key={m.title} delay={i * 70} className="card card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white shadow-emerald">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{m.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-900/65">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose + stats */}
      <section className="section bg-cream">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Why QiraatHub"
              title="Why families choose us"
              intro="We pair the warmth of a personal teacher with the standards of a premium education platform."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    <Sparkle className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-5">
            {[
              { v: site.stats.students, l: "Students taught", icon: Users },
              { v: site.stats.teachers, l: "Qualified teachers", icon: Users },
              { v: site.stats.countries, l: "Countries served", icon: Target },
              { v: site.stats.retention, l: "Continue after trial", icon: Heart },
            ].map((s) => (
              <div key={s.l} className="rounded-xl2 gradient-emerald p-7 text-white shadow-emerald">
                <s.icon className="h-7 w-7 text-gold-300" />
                <p className="mt-4 font-display text-4xl font-semibold">{s.v}</p>
                <p className="mt-1 text-sm text-white/75">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
