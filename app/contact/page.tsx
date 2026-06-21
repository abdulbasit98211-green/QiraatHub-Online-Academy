import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { Mail, Phone, WhatsApp, Clock, Globe } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with QiraatHub Online Academy. Message us on WhatsApp, send an email, or book your free trial Quran class. We reply to students and parents worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact QiraatHub Online Academy",
    description:
      "Message us on WhatsApp or email to book your free trial Quran class.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  const crumbs = [
    { name: "Home", url: site.url },
    { name: "Contact", url: `${site.url}/contact` },
  ];

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumbs)]} />

      <PageHero
        eyebrow="We'd love to hear from you"
        title="Contact QiraatHub"
        intro="Have a question or ready to begin? Reach our team on WhatsApp, drop us an email, or send the form below — we typically reply within a few hours."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-cream">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Form */}
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-navy-600">
                Fill in the form and we'll get right back to you, in shaa Allah.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5">
              <ContactCard
                icon={<WhatsApp className="h-6 w-6" />}
                title="WhatsApp"
                tone="emerald"
              >
                <p className="text-navy-600">
                  The fastest way to reach us. Tap below to start a chat.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 w-full sm:w-auto"
                >
                  <WhatsApp className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </ContactCard>

              <ContactCard
                icon={<Mail className="h-6 w-6" />}
                title="Email"
              >
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-emerald-700 hover:underline"
                >
                  {site.email}
                </a>
              </ContactCard>

              <ContactCard
                icon={<Phone className="h-6 w-6" />}
                title="Phone"
              >
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="font-medium text-navy-800 hover:text-emerald-700"
                >
                  {site.phoneDisplay}
                </a>
              </ContactCard>

              <ContactCard
                icon={<Clock className="h-6 w-6" />}
                title="Class & support hours"
              >
                <ul className="space-y-1.5 text-navy-600">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-navy-800">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </ContactCard>

              <ContactCard
                icon={<Globe className="h-6 w-6" />}
                title="Where we teach"
              >
                <p className="text-navy-600">
                  {site.address.line}. Based in the {site.address.region},
                  teaching students across the UK, US, Canada, Australia,
                  Europe and beyond.
                </p>
                {/* Google Maps placeholder */}
                <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-navy-200 bg-sage-50 text-center text-sm text-navy-500">
                  <span>
                    Google Map embed placeholder
                    <br />
                    (online academy — no physical campus)
                  </span>
                </div>
              </ContactCard>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-navy-600">
            Prefer to dive straight in?{" "}
            <Link href="/book-free-trial" className="font-semibold text-emerald-700 hover:underline">
              Book your free trial class
            </Link>{" "}
            and meet a teacher this week.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function ContactCard({
  icon,
  title,
  tone = "navy",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  tone?: "navy" | "emerald";
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <span
          className={
            tone === "emerald"
              ? "flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white"
              : "flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-emerald-700"
          }
        >
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-900">
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
