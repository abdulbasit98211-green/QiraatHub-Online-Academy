// Central configuration. Edit these values to update the whole site.

export const site = {
  name: "QiraatHub Online Academy",
  shortName: "QiraatHub",
  // Update to your live domain before deploying (used for SEO, sitemap, OG).
  url: "https://www.qiraathub.com",
  description:
    "Learn Quran online with qualified male and female teachers. One-to-one online Quran classes for kids and adults worldwide — Nazra, Tajweed, Hifz and Madani Qaidah. Book a free trial class today.",
  tagline: "Learn Quran Online with Qualified Teachers",
  locale: "en_US",
  // Contact details — replace with your real numbers/email.
  email: "info@qiraathub.com",
  phoneDisplay: "+44 7700 900123",
  // WhatsApp number in international format, digits only (no + or spaces).
  whatsapp: "447700900123",
  whatsappMessage:
    "Assalamu Alaikum, I would like to book a free trial Quran class.",
  // Business hours shown on Contact page.
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 11:00 PM (GMT)" },
    { day: "Saturday – Sunday", time: "10:00 AM – 9:00 PM (GMT)" },
  ],
  address: {
    line: "Online Academy — Serving Students Worldwide",
    region: "United Kingdom",
  },
  social: {
    facebook: "https://facebook.com/qiraathub",
    instagram: "https://instagram.com/qiraathub",
    youtube: "https://youtube.com/@qiraathub",
    tiktok: "https://tiktok.com/@qiraathub",
  },
  // Aggregate rating used in Review schema and trust badges.
  rating: { value: 4.9, count: 312 },
  stats: {
    students: "2,500+",
    teachers: "60+",
    countries: "25+",
    retention: "97%",
  },
} as const;

export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "Contact", href: "/contact" },
] as const;
