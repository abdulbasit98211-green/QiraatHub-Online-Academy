import { countries } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function CountriesServed() {
  return (
    <section className="section bg-cream">
      <div className="container-px">
        <SectionHeading
          eyebrow="Worldwide reach"
          title="Countries we serve"
          intro="From London to Sydney, families across the English-speaking world learn with QiraatHub — in their own time zone."
          ornament
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {countries.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 50}
              className="flex items-center gap-3 rounded-xl2 border border-navy-900/[0.06] bg-white px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <span className="text-2xl" aria-hidden="true">
                {c.flag}
              </span>
              <span className="text-sm font-semibold text-navy-900">{c.name}</span>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-900/55">
          Don’t see your country? We teach students worldwide — just reach out.
        </p>
      </div>
    </section>
  );
}
