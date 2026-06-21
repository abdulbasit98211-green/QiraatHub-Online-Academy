# QiraatHub Online Academy — Website

A premium, conversion-focused marketing website for an international online Quran
academy, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Server-rendered, fully SEO-optimised (schema, Open Graph, sitemap, robots),
accessible, and mobile-first.

---

## ✨ Features

- **8 routes**: Home, About, Courses, Course detail (×4, statically generated),
  Teachers, Contact, Book Free Trial, Thank-you, plus a custom 404.
- **Conversion-focused UX**: sticky navbar, floating WhatsApp button, mobile
  bottom CTA bar, exit-intent popup, free-trial CTAs on every page.
- **Lead capture**: contact form and a 7-field free-trial booking form that
  pre-fill a WhatsApp message and route to a thank-you page (front-end only —
  see *Connecting forms* below).
- **Technical SEO**: per-page metadata, canonical URLs, Open Graph + Twitter
  cards, JSON-LD schema (EducationalOrganization, LocalBusiness, WebSite,
  Course, FAQ, Review, BreadcrumbList), dynamic `sitemap.xml` and `robots.txt`.
- **Design system**: deep-navy / emerald / gold / sage palette, Cormorant
  Garamond + Plus Jakarta Sans typography, and a reusable Islamic *girih*
  geometric pattern used subtly throughout.
- **Performance & a11y**: SSR/SSG, optimized fonts, reduced-motion support,
  skip-to-content link, semantic headings, focus-visible rings.

---

## 🚀 Getting started

Requires **Node.js 18.18+** (Node 20 LTS recommended) and internet access on the
first build (see *Fonts* note below).

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check (no emit)
npm run lint       # ESLint
```

---

## 🔧 Customisation — start here

Almost everything is driven from two files:

| File | What it controls |
|------|------------------|
| **`lib/site.ts`** | Brand name, **domain URL**, email, phone, **WhatsApp number**, business hours, social links, aggregate rating, headline stats. |
| **`lib/data.ts`** | Courses, teachers, testimonials, FAQs, countries, and the 3-step "How it works". |

> ⚠️ **Before deploying, edit the placeholders in `lib/site.ts`:**
> `url` (your live domain), `whatsapp` (international format, digits only),
> `phoneDisplay`, `email`, and the `social` links. These feed SEO, schema,
> sitemap, and every WhatsApp/contact link on the site.

### Brand assets
Replace the generated placeholders in `public/` with your real artwork
(same filenames):
- `public/logo.png` — square logo (used in schema)
- `public/og-image.png` — 1200×630 social share image
- `public/icon.png`, `public/apple-icon.png`, `public/favicon.ico`

### Colours & fonts
Edit the palette and design tokens in `tailwind.config.ts`, global component
classes in `app/globals.css`, and the font choices in `app/layout.tsx`.

---

## 📨 Connecting the forms (important)

The contact and booking forms are **front-end only**. On submit they open a
**pre-filled WhatsApp chat** (and the contact form offers a `mailto:` fallback),
then the booking form routes to `/thank-you`. **No data is stored on a server.**

To capture leads properly, wire the `handleSubmit` functions to a backend, e.g.:

- A **Next.js Route Handler** (`app/api/lead/route.ts`) that emails you or
  writes to a database / CRM.
- A hosted form service such as **Formspree**, **Web3Forms**, or **Getform**.
- A spreadsheet via **Google Apps Script**.

The relevant files are `components/ContactForm.tsx` and
`components/BookingForm.tsx`.

---

## 🔤 Fonts note

This project uses `next/font/google` (Cormorant Garamond + Plus Jakarta Sans),
which downloads the fonts **at build time**, so the **first `npm run build`
needs internet access**. To remove that dependency, download the font files and
switch to `next/font/local`, or use system fonts.

---

## 📁 Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, global schema, chrome
  page.tsx              Home
  about/                About Us
  courses/              Courses index + [slug] dynamic course pages
  teachers/             Teachers
  contact/              Contact (form + details)
  book-free-trial/      Conversion-focused booking page
  thank-you/            Post-booking confirmation (noindex)
  sitemap.ts            Dynamic sitemap.xml
  robots.ts             robots.txt
  not-found.tsx         Custom 404
  globals.css           Tailwind layers + component/utility classes
components/             Reusable UI (Navbar, Footer, forms, sections, icons, …)
lib/
  site.ts               Central site config (EDIT THIS)
  data.ts               Courses, teachers, testimonials, FAQs, countries
  schema.tsx            JSON-LD schema generators + <JsonLd> component
public/                 Logo, OG image, icons
```

---

## ☁️ Deploying

Works on any Node host. Easiest is **Vercel**:

1. Push the project to a Git repository.
2. Import it into Vercel (it auto-detects Next.js).
3. Set your production domain and update `site.url` in `lib/site.ts` to match.

That's it — `npm run build` runs automatically.

---

*Built as a production-ready starting point. Replace placeholder content,
connect the forms to your backend, and add your real brand assets before
going live. Jazak Allah Khair.*
