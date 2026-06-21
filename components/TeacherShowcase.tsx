import { teachers, type Teacher } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Check, Globe } from "@/components/Icons";

function TeacherCard({ teacher, index }: { teacher: Teacher; index: number }) {
  const ring =
    teacher.gender === "female"
      ? "from-gold-300 to-gold-500"
      : "from-emerald-500 to-emerald-700";
  return (
    <Reveal as="article" delay={index * 60} className="card card-hover flex flex-col">
      <div className="flex items-center gap-4">
        <span
          className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${ring} font-display text-xl font-semibold text-white`}
        >
          {teacher.initials}
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-navy-900">
            {teacher.name}
          </h3>
          <p className="text-sm text-emerald-700">{teacher.title}</p>
        </div>
      </div>

      <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-emerald-700">
        {teacher.experience}
      </span>

      <ul className="mt-4 space-y-2">
        {teacher.qualifications.map((q) => (
          <li key={q} className="flex items-start gap-2.5 text-sm text-navy-900/75">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
              <Check className="h-3.5 w-3.5" />
            </span>
            {q}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {teacher.specialties.map((s) => (
          <span
            key={s}
            className="rounded-full border border-navy-900/10 px-2.5 py-1 text-xs font-medium text-navy-900/70"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-5 flex items-center gap-2 border-t border-navy-900/[0.06] pt-4 text-xs text-navy-900/60">
        <Globe className="h-4 w-4 text-emerald-700" />
        Speaks: {teacher.languages.join(", ")}
      </p>
    </Reveal>
  );
}

export function TeacherShowcase({ limit }: { limit?: number }) {
  const list = limit ? teachers.slice(0, limit) : teachers;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((t, i) => (
        <TeacherCard key={t.name} teacher={t} index={i} />
      ))}
    </div>
  );
}
