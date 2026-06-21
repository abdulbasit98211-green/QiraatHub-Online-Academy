"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/Icons";

type QA = { q: string; a: string };

export function FAQAccordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-900/[0.08] overflow-hidden rounded-xl2 border border-navy-900/[0.06] bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sage/40"
              >
                <span className="font-semibold text-navy-900">{item.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage text-emerald-700 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-navy-900/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
