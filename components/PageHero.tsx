import Link from "next/link";
import { IslamicPattern, OrnamentDivider } from "./IslamicPattern";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden gradient-navy text-white">
      <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
        <IslamicPattern className="absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="container-px relative z-10 pb-16 pt-32 text-center sm:pt-40">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/55">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold-300">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow justify-center text-gold-300">{eyebrow}</p>
        )}
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold text-white leading-[1.08] sm:text-6xl">
          {title}
        </h1>
        <OrnamentDivider className="mt-6" />
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {intro}
          </p>
        )}
      </div>

      <svg viewBox="0 0 1440 50" className="relative z-10 block w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 50 L1440 50 L1440 20 C1080 48 360 48 0 20 Z" fill="#FBFBF8" />
      </svg>
    </section>
  );
}
