import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TeacherShowcase } from "@/components/TeacherShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ShieldCheck, GraduationCap, Heart, Users } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Teachers — Qualified Male & Female Quran Tutors",
  description:
    "Meet our qualified male and female Quran teachers. Ijazah-certified, experienced and caring tutors for kids, adults, brothers and sisters. Book a free trial class.",
  alternates: { canonical: "/teachers" },
};

const standards = [
  { icon: GraduationCap, title: "Ijazah qualified", body: "Formal certification in Quran recitation and Tajweed." },
  { icon: ShieldCheck, title: "Carefully vetted", body: "Selected for knowledge, character and teaching skill." },
  { icon: Users, title: "Male & female", body: "Choose the teacher who suits your family's preference." },
  { icon: Heart, title: "Patient & caring", body: "Trained to teach children and beginners with kindness." },
];

export default function TeachersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Teachers", url: `${site.url}/teachers` },
        ])}
      />
      <PageHero
        eyebrow="Meet the teachers"
        title="Qualified teachers who truly care"
        intro="Every QiraatHub teacher is Ijazah-certified, experienced and chosen for their character. Brothers learn with male teachers, sisters with female teachers."
        crumbs={[{ label: "Home", href: "/" }, { label: "Teachers" }]}
      />

      <section className="section bg-cream">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <Reveal as="article" key={s.title} delay={i * 60} className="card text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-sage text-emerald-700">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-navy-900/65">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sage/40 pt-0">
        <div className="container-px pt-20">
          <SectionHeading
            eyebrow="Our team"
            title="Get to know your teachers"
            intro="A snapshot of the teachers who could be guiding you or your child. We'll match you carefully during your free trial."
            ornament
          />
          <div className="mt-14">
            <TeacherShowcase />
          </div>
        </div>
      </section>

      <FinalCTA title="Find your perfect teacher" subtitle="Book a free trial and we'll match you with a qualified teacher who fits your level, schedule and preference." />
    </>
  );
}
