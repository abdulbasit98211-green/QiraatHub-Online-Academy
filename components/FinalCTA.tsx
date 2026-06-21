import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { ArrowRight, Check, WhatsApp } from "@/components/Icons";
import { IslamicPattern, OrnamentDivider } from "@/components/IslamicPattern";

type Props = {
  title?: string;
  subtitle?: string;
};

export function FinalCTA({
  title = "Book Your Free Trial Class Today",
  subtitle = "Meet a qualified teacher, experience a real one-to-one lesson, and see the difference — completely free, with no obligation.",
}: Props) {
  return (
    <section className="section bg-cream">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] gradient-navy px-6 py-16 text-center text-white shadow-cardHover sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
            <IslamicPattern className="absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <OrnamentDivider />
            <h2 className="mt-6 font-display text-3xl font-semibold text-white sm:text-5xl sm:leading-[1.05]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{subtitle}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/book-free-trial" className="btn-gold text-base">
                Book Free Trial Class
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light text-base"
              >
                <WhatsApp className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              {["No payment required", "Qualified teachers", "Cancel anytime"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
