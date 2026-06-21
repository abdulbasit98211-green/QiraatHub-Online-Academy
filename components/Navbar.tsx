"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappLink } from "@/lib/site";
import { ArrowRight, Close, Menu, WhatsApp } from "./Icons";
import { StarGlyph } from "./IslamicPattern";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-navy-900/[0.06] bg-cream/85 backdrop-blur-md transition-all duration-300"
      >
        <nav className="container-px flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-gold-300 shadow-emerald transition-transform group-hover:rotate-12">
              <StarGlyph className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold text-navy-900">
                QiraatHub
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Online Academy
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-emerald-700"
                      : "text-navy-900/70 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="Contact us on WhatsApp"
            >
              <WhatsApp className="h-4 w-4 text-emerald-600" />
              WhatsApp
            </a>
            <Link href="/book-free-trial" className="btn-gold">
              Book Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-900/10 bg-white/70 text-navy-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 sm:top-20 z-50 bg-cream transition-all duration-300 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3.5 text-lg font-medium text-navy-900 hover:bg-sage"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/book-free-trial" className="btn-gold w-full">
              Book Free Trial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <WhatsApp className="h-4 w-4 text-emerald-600" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
