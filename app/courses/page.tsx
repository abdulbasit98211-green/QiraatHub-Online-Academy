import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { courses } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowRight, BookOpen, Clock, GraduationCap, Users } from "@/components/Icons";
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
          <div className="space-y-12">
            {courses.map((course, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal
                  as="article"
                  key={course.slug}
                  delay={i * 80}
                  className="card group grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 hover:border-emerald-600/20 hover:shadow-cardHover transition-all duration-300"
                >
                  {/* Details column */}
                  <div className={`flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Course Number & Title */}
                      <div className="flex items-center gap-4">
                        <span className="font-display text-4xl font-bold text-emerald-600/30 group-hover:text-emerald-600/60 transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-display text-3xl font-semibold text-navy-900 leading-tight">
                          {course.title}
                        </h2>
                      </div>

                      {/* Badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                          <GraduationCap className="h-3.5 w-3.5" />
                          {course.level}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                          <Users className="h-3.5 w-3.5" />
                          {course.ageRange}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                          <Clock className="h-3.5 w-3.5" />
                          {course.duration.split("(")[0].trim()}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-base leading-relaxed text-navy-900/70">
                        {course.description}
                      </p>

                      {/* Outcomes */}
                      <div className="mt-6 space-y-2.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-400">What you will achieve</h4>
                        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                          {course.outcomes.slice(0, 3).map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                              </span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy-900/[0.06] pt-6">
                      <Link href={`/courses/${course.slug}`} className="btn-primary text-sm px-6 py-3">
                        View Full Course
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/book-free-trial" className="btn-outline text-sm px-6 py-3">
                        Book Free Trial
                      </Link>
                    </div>
                  </div>

                  {/* Curriculum column */}
                  <div className={`rounded-2xl bg-sage/30 p-6 sm:p-8 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy-900">Curriculum Highlights</h3>
                      <p className="mt-1 text-xs text-navy-900/50">A structured path from start to finish</p>
                      
                      <div className="mt-6 space-y-4">
                        {course.curriculum.slice(0, 4).map((item) => (
                          <div key={item.title} className="relative pl-7 before:absolute before:left-2 before:top-2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:bg-emerald-600 after:absolute after:bottom-0 after:left-2 after:top-6 after:w-0.5 after:-translate-x-1/2 after:bg-emerald-600/20 last:after:hidden">
                            <span className="block text-sm font-semibold text-navy-900 leading-none">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-navy-900/65">
                              {item.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual hint */}
                    <div className="mt-6 border-t border-navy-900/[0.04] pt-4 hidden sm:block">
                      <div className="flex items-center gap-3 text-xs text-navy-900/60">
                        <BookOpen className="h-4 w-4 text-emerald-600" />
                        <span>Interactive 1-to-1 live classes tailored to your speed</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-sage/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Find your path"
            title="Which course is right for you?"
            ornament
          />
          
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0} className="card flex flex-col justify-between border-t-4 border-t-emerald-600/40">
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 rounded-md">
                  01. Absolute Beginners
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">Madani Qaidah</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  Best if you or your child are learning to recognise Arabic letters and pronounce their first sounds from scratch.
                </p>
              </div>
              <div className="mt-8 border-t border-navy-900/[0.06] pt-4">
                <Link href="/courses/madani-qaidah" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 group">
                  Start here 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} className="card flex flex-col justify-between border-t-4 border-t-emerald-600/40">
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 rounded-md">
                  02. Basic Reading
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">Nazra Reading</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  Best if you can recognise letters but need to build fluency, flow, and read complete verses directly from the Mushaf.
                </p>
              </div>
              <div className="mt-8 border-t border-navy-900/[0.06] pt-4">
                <Link href="/courses/nazra-quran-reading" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 group">
                  Start here 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={160} className="card flex flex-col justify-between border-t-4 border-t-emerald-600/40">
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 rounded-md">
                  03. Recitation Mastery
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">Tajweed Rules</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  Best if you can read smoothly but want to apply the rules of articulation, elongation, and nasalisation to beautify recitation.
                </p>
              </div>
              <div className="mt-8 border-t border-navy-900/[0.06] pt-4">
                <Link href="/courses/tajweed-course" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 group">
                  Start here 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240} className="card flex flex-col justify-between border-t-4 border-t-emerald-600/40">
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 rounded-md">
                  04. Memorisation
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">Hifz-ul-Quran</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  Best for motivated students who read with good Tajweed and want to commit the Holy Quran to heart with structured revision.
                </p>
              </div>
              <div className="mt-8 border-t border-navy-900/[0.06] pt-4">
                <Link href="/courses/hifz-ul-quran" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 group">
                  Start here 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA title="Not sure which course is right?" subtitle="Book a free trial and your teacher will recommend the perfect starting point for you or your child." />
    </>
  );
}
