import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Calendar,
  Globe,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
} from "@/components/Icons";

const features = [
  {
    icon: GraduationCap,
    title: "Qualified male & female teachers",
    body: "Every teacher holds an Ijazah or formal qualification and is vetted for character and skill. Choose a male or female teacher to suit your family.",
  },
  {
    icon: Calendar,
    title: "Flexible schedules",
    body: "Classes across UK, US, Canada, Australia and European time zones — including evenings and weekends that fit around school and work.",
  },
  {
    icon: Users,
    title: "One-to-one classes",
    body: "Undivided attention in every lesson. No group classes — just a dedicated teacher focused entirely on your progress.",
  },
  {
    icon: Globe,
    title: "International students",
    body: "Trusted by Muslim families across the world. Lessons in clear English with teachers who understand diverse backgrounds.",
  },
  {
    icon: Target,
    title: "Progress tracking",
    body: "A personalised learning plan with regular updates so you and your child always know exactly how lessons are going.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & trusted",
    body: "A respectful, child-safe learning environment. Parents are welcome to sit in, and the first trial class is always free.",
  },
];

export function TrustSection() {
  return (
    <section className="section bg-cream">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why QiraatHub"
          title="A premium Quran education families trust"
          intro="Everything is built around one goal: helping you or your child connect with the Quran through qualified teaching and genuine care."
          ornament
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="article" key={f.title} delay={i * 60} className="card card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage text-emerald-700">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy-900">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-900/65">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
