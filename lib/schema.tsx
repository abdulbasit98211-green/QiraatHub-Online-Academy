import { site } from "./site";
import { courses, faqs, testimonials, type Course } from "./data";

const base = site.url;

export function educationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${base}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: base,
    description: site.description,
    email: site.email,
    telephone: site.phoneDisplay,
    logo: `${base}/logo.png`,
    image: `${base}/og-image.png`,
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.youtube,
      site.social.tiktok,
    ],
    areaServed: [
      "United Kingdom",
      "United States",
      "Canada",
      "Australia",
      "New Zealand",
      "Germany",
      "France",
      "Netherlands",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#localbusiness`,
    name: site.name,
    url: base,
    email: site.email,
    telephone: site.phoneDisplay,
    image: `${base}/og-image.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: site.address.region,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${base}/#organization` },
    inLanguage: "en",
  };
}

export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${base}/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      sameAs: base,
    },
    educationalLevel: course.level,
    inLanguage: "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: course.duration,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
  };
}

export function coursesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${base}/courses/${c.slug}`,
      name: c.title,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${base}/#organization`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON-LD is static, generated server-side from trusted data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
