import Link from "next/link";
import { steps } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IslamicPattern } from "@/components/IslamicPattern";
import { ArrowRight } from "@/components/Icons";

export function HowItWorks() {
  return (
    <section className="section relative overflow-hidden bg-emerald-700 text-white">
      <div className="pointer-events-none absolute inset-0 text-white/[0.05]">
        <IslamicPattern className="absolute inset-0" />
      </div>
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Simple to start"
          title="Begin in three easy steps"
          intro="From booking to your first lesson, getting started takes minutes — and the trial class is free."
          ornament
          light
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="relative">
              {i < steps.length - 1 && (
                <span className="absolute left-[2.75rem] top-9 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-gold-400/60 to-transparent md:block" />
              )}
              <div className="flex items-center gap-4">
                <span className="grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 font-display text-3xl font-semibold text-gold-300 backdrop-blur">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-white/75">{step.detail}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Link href="/book-free-trial" className="btn-gold text-base">
            Book Your Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
