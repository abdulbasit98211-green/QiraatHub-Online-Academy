import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import {
  JsonLd,
  educationalOrganizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ExitIntentPopup,
  MobileBottomCTA,
  WhatsAppFloat,
} from "@/components/ConversionWidgets";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Learn Quran Online with Qualified Teachers`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "learn Quran online",
    "online Quran classes",
    "Quran teacher online",
    "online Quran academy",
    "Quran classes for kids",
    "Tajweed course online",
    "Hifz online",
    "Nazra Quran",
    "Noorani Qaidah online",
    "female Quran teacher",
    "Quran classes UK USA Canada",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Learn Quran Online with Qualified Teachers`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Online Quran Classes`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Learn Quran Online`,
    description: site.description,
    images: ["/og-image.png"],
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <JsonLd
          data={[
            educationalOrganizationSchema(),
            websiteSchema(),
            localBusinessSchema(),
          ]}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
