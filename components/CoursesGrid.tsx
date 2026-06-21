import Link from "next/link";
import { courses } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, BookOpen, Check, Clock } from "@/components/Icons";

export function CoursesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {courses.map((course, i) => (
        <Reveal
          as="article"
          key={course.slug}
          delay={i * 70}
          className="group relative flex flex-col overflow-hidden rounded-xl2 border border-navy-900/[0.06] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/20 hover:shadow-cardHover"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 -translate-y-8 translate-x-8 rounded-full bg-sage transition-transform group-hover:translate-x-6" />
          <div className="relative flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white shadow-emerald">
              <BookOpen className="h-6 w-6" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-emerald-700">
              <Clock className="h-3.5 w-3.5" />
              {course.duration.split("(")[0].trim()}
            </span>
          </div>

          <h3 className="relative mt-5 font-display text-2xl font-semibold text-navy-900">
            {course.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-navy-900/65">
            {course.short}
          </p>

          <ul className="relative mt-5 space-y-2">
            {course.benefits.slice(0, 3).map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="relative mt-7 flex items-center gap-3 border-t border-navy-900/[0.06] pt-5">
            <Link href={`/courses/${course.slug}`} className="btn-primary flex-1 text-sm">
              View Course
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book-free-trial"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Free trial
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
