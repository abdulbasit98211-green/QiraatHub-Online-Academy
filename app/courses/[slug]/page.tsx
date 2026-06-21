import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/lib/data";
import { site, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  Check,
  Clock,
  GraduationCap,
  Target,
  Users,
  WhatsApp,
} from "@/components/Icons";
import {
  JsonLd,
  breadcrumbSchema,
  courseSchema,
  faqSchema,
} from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} — Online Quran Course`,
    description: `${course.short} ${course.level}. One-to-one online classes. Book a free trial of our ${course.title} course today.`,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} — QiraatHub Online Academy`,
      description: course.short,
      url: `${site.url}/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const meta = [
    { icon: GraduationCap, label: "Level", value: course.level },
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Users, label: "Suitable for", value: course.ageRange },
  ];

  return (
    <>
      <JsonLd
        data={[
          courseSchema(course),
          faqSchema(course.faqs),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Courses", url: `${site.url}/courses` },
            { name: course.title, url: `${site.url}/courses/${course.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Online Quran course"
        title={course.title}
        intro={course.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      {/* Meta bar */}
      <section className="bg-cream pt-12">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-3 rounded-xl2 border border-navy-900/[0.06] bg-white p-5 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage text-emerald-700">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-900/50">{m.label}</p>
                  <p className="text-sm font-semibold text-navy-900">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum + outcomes */}
      <section className="section bg-cream">
        <div className="container-px grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy-900">
              What you’ll learn
            </h2>
            <p className="mt-2 text-navy-900/65">
              A clear, step-by-step curriculum tailored to your starting level.
            </p>
            <ol className="mt-8 space-y-4">
              {course.curriculum.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 60} className="flex gap-4 rounded-xl2 border border-navy-900/[0.06] bg-white p-5 shadow-card">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-900/65">{c.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <h2 className="mt-12 font-display text-3xl font-semibold text-navy-900">
              Learning outcomes
            </h2>
            <ul className="mt-6 space-y-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-navy-900/80">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    <Target className="h-4 w-4" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky enrol card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-xl2 border border-navy-900/[0.06] bg-white shadow-cardHover">
              <div className="gradient-emerald p-6 text-white">
                <p className="text-sm text-white/75">Start with a</p>
                <p className="font-display text-3xl font-semibold">Free Trial Class</p>
                <p className="mt-1 text-sm text-white/75">No payment details required</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {course.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/book-free-trial" className="btn-gold mt-6 w-full">
                  Book Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink(`Assalamu Alaikum, I'm interested in the ${course.title} course.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-3 w-full"
                >
                  <WhatsApp className="h-4 w-4 text-emerald-600" />
                  Ask about this course
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Course FAQs */}
      <section className="section bg-sage/40">
        <div className="container-px">
          <h2 className="text-center font-display text-3xl font-semibold text-navy-900">
            {course.title} — questions
          </h2>
          <FAQAccordion items={course.faqs} />
        </div>
      </section>

      <FinalCTA title={`Ready to start ${course.title}?`} />
    </>
  );
}
