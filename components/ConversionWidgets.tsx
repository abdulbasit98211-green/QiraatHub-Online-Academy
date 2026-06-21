"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRight, Close, WhatsApp } from "./Icons";
import { StarGlyph } from "./IslamicPattern";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-4 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 sm:bottom-6"
    >
      <span className="grid h-7 w-7 place-items-center">
        <WhatsApp className="h-7 w-7" />
      </span>
      <span className="hidden text-sm font-semibold sm:block">Chat with us</span>
      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-ping rounded-full bg-white/70" />
    </a>
  );
}

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-cream/95 px-4 py-2.5 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex-1 py-3"
        >
          <WhatsApp className="h-4 w-4 text-emerald-600" />
          WhatsApp
        </a>
        <Link href="/book-free-trial" className="btn-gold flex-[1.4] py-3">
          Book Free Trial
        </Link>
      </div>
    </div>
  );
}

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("qh_exit_seen") === "1") setClosed(true);
    } catch {
      /* sessionStorage may be unavailable */
    }
  }, []);

  useEffect(() => {
    if (closed) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    // Mobile fallback: show after 35s of engagement
    const timer = window.setTimeout(trigger, 35000);

    function trigger() {
      setShow(true);
      document.removeEventListener("mouseout", onLeave);
      window.clearTimeout(timer);
    }

    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mouseout", onLeave);
      window.clearTimeout(timer);
    };
  }, [closed]);

  const dismiss = () => {
    setShow(false);
    setClosed(true);
    try {
      sessionStorage.setItem("qh_exit_seen", "1");
    } catch {
      /* ignore */
    }
  };

  if (!show || closed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
      className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-xl2 bg-cream p-8 shadow-cardHover animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-navy-900/50 hover:bg-navy-900/5"
        >
          <Close className="h-5 w-5" />
        </button>
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-gold-300">
          <StarGlyph className="h-6 w-6" />
        </span>
        <h2 id="exit-title" className="mt-5 font-display text-3xl text-navy-900">
          Wait — claim your free trial
        </h2>
        <p className="mt-3 text-navy-900/70">
          Try a real one-to-one Quran class with a qualified teacher, completely
          free. No payment details, no obligation.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link href="/book-free-trial" onClick={dismiss} className="btn-gold w-full">
            Book My Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="btn-outline w-full"
          >
            <WhatsApp className="h-4 w-4 text-emerald-600" />
            Ask a question on WhatsApp
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-navy-900/50">
          Trusted by {site.stats.students} students in {site.stats.countries}{" "}
          countries
        </p>
      </div>
    </div>
  );
}
