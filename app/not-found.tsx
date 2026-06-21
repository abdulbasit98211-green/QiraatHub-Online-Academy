import Link from "next/link";
import { IslamicPattern, OrnamentDivider } from "@/components/IslamicPattern";
import { ArrowRight, BookOpen, WhatsApp } from "@/components/Icons";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden gradient-navy text-white">
      <div className="pointer-events-none absolute inset-0 text-white/[0.06]">
        <IslamicPattern className="absolute inset-0" />
      </div>

      <div className="container-px relative z-10 py-28 text-center">
        <p className="font-display text-7xl font-semibold text-gold-300 sm:text-8xl">
          404
        </p>
        <OrnamentDivider className="mt-6" />
        <h1 className="mx-auto mt-6 max-w-xl font-display text-3xl font-semibold sm:text-4xl">
          This page seems to have wandered off
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/75">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on the path of learning.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold text-base">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/courses" className="btn-ghost-light text-base">
            <BookOpen className="h-5 w-5" />
            Browse Courses
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
      </div>
    </section>
  );
}
