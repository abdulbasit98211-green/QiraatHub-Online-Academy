import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CoursesGrid } from "@/components/CoursesGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { steps } from "@/lib/data";
import { site } from "@/lib/site";
import {
  JsonLd,
  breadcrumbSchema,
  coursesItemListSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Online Quran Courses — Nazra, Tajweed, Hifz & Qaidah",
  description:
    "Explore our online Quran courses: Nazra Quran Reading, Tajweed, Hifz-ul-Quran and Madani Qaidah. One-to-one classes for kids and adults. Book a free trial today.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={[
          coursesItemListSchema(),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Courses", url: `${site.url}/courses` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Our courses"
        title="Online Quran courses for every stage"
        intro="From your first Arabic letter to perfecting Tajweed and memorising the Quran — choose the path that fits you, taught one-to-one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      <section className="section bg-cream">
        <div className="container-px">
          <CoursesGrid />
        </div>
      </section>

      <section className="section bg-sage/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="How it works"
            title="The same simple start for every course"
            ornament
          />
          <ol className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 80} className="card text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 font-display text-2xl font-semibold text-gold-300">
                  {step.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA title="Not sure which course is right?" subtitle="Book a free trial and your teacher will recommend the perfect starting point for you or your child." />
    </>
  );
}
