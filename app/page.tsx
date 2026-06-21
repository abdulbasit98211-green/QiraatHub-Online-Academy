import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { CoursesGrid } from "@/components/CoursesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TeacherShowcase } from "@/components/TeacherShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { CountriesServed } from "@/components/home/CountriesServed";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn Quran Online with Qualified Teachers",
  description:
    "Learn Quran online with qualified male and female teachers. One-to-one online Quran classes for kids and adults worldwide — Nazra, Tajweed, Hifz and Madani Qaidah. Book a free trial class today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      
      <section className="section bg-cream">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our courses"
            title="Online Quran courses for every stage"
            intro="Choose a course that fits your level, schedule and preference. Taught one-to-one by qualified tutors."
            ornament
          />
          <div className="mt-14">
            <CoursesGrid />
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/courses" className="btn-outline text-base">
              Explore all courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="section bg-cream">
        <div className="container-px">
          <SectionHeading
            eyebrow="Qualified tutors"
            title="Learn from qualified male & female teachers"
            intro="Our teachers are certified, experienced, and vetted to provide high-quality one-to-one learning for your family."
            ornament
          />
          <div className="mt-14">
            <TeacherShowcase limit={3} />
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/teachers" className="btn-outline text-base">
              Meet all teachers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CountriesServed />

      <section className="section bg-sage/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            intro="Find answers to common questions about our classes, teachers, scheduling, and trials."
            ornament
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

