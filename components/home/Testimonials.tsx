import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Star } from "@/components/Icons";

export function Testimonials() {
  return (
    <section className="section bg-sage/60">
      <div className="container-px">
        <SectionHeading
          eyebrow="Loved by families"
          title="What parents & students say"
          intro={`Rated ${site.rating.value} out of 5 by ${site.rating.count}+ families across the world.`}
          ornament
        />

        {/* Video review placeholders */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {["A parent's story", "Adult Tajweed journey", "A revert's first read"].map(
            (label, i) => (
              <Reveal
                key={label}
                delay={i * 70}
                className="group relative aspect-video overflow-hidden rounded-xl2 border border-navy-900/[0.06] gradient-navy shadow-card"
              >
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 backdrop-blur transition-transform group-hover:scale-110">
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-xs text-white/60">Video review</p>
                </div>
              </Reveal>
            )
          )}
        </div>

        {/* Written testimonials */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 60} className="card flex flex-col">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-900/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-navy-900/[0.06] pt-4">
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs text-navy-900/60">
                  {t.role} · {t.country}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
