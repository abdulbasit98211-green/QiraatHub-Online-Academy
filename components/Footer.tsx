import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";
import { courses } from "@/lib/data";
import { Mail, Phone, WhatsApp } from "./Icons";
import { StarGlyph } from "./IslamicPattern";

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-navy text-white">
      <div className="container-px relative z-10 grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-gold-300">
              <StarGlyph className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold">QiraatHub</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                Online Academy
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            One-to-one online Quran classes with qualified male and female
            teachers, for children and adults worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/70 capitalize transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-free-trial" className="hover:text-white">
                Free Trial Booking
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Courses</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white"
              >
                <WhatsApp className="h-4 w-4 text-emerald-400" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 hover:text-white"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                Call us
              </a>
            </li>
          </ul>
          <Link href="/book-free-trial" className="btn-gold mt-6">
            Book Free Trial
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-center">
            Serving students across the UK, USA, Canada, Australia, New Zealand
            &amp; Europe.
          </p>
        </div>
      </div>
    </footer>
  );
}
