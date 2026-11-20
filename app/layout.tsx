import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import Footer from "@/components/sections/Footer";
import AnalyticsConsent from "@/components/AnalyticsConsent";

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEO-продвижение в ИИ-поиске: трафик из нейросетей под ключ | Беларусь",
  description: "Комплексное продвижение в нейросетях и ИИ-поисковиках. Настроим рекомендации вашего бренда в нейросетях под ключ. Бесплатный GEO-аудит. Первыми выведите бизнес в ответы нейросетей!",
  keywords: ["GEO", "GEO-продвижение", "продвижение в ChatGPT", "оптимизация для ИИ", "AI SEO", "Беларусь", "GeoForce"],
  authors: [{ name: "GeoForce" }],
  creator: "GeoForce",
  metadataBase: new URL("https://geoforce.of.by"),
  alternates: {
    canonical: "/",
  },
  verification: {
  google: "wCG1R910Up6_JcPLGWNBXDjHWo2La5PVJi0PF0m41rk" />",
  yandex: "0ed05c9f727041ab",
},
  openGraph: {
    title: "GEO-продвижение в ИИ-поиске: трафик из нейросетей под ключ | Беларусь",
    description: "Комплексное продвижение в нейросетях и ИИ-поисковиках. Настроим рекомендации вашего бренда в нейросетях под ключ. Бесплатный GEO-аудит. Первыми выведите бизнес в ответы нейросетей!",
    url: "https://geoforce.of.by",
    siteName: "GeoForce",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeoForce — GEO-продвижение",
      },
    ],
    locale: "ru_by",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO-продвижение в ИИ-поиске: трафик из нейросетей под ключ | Беларусь",
    description: "Комплексное продвижение в нейросетях и ИИ-поисковиках. Настроим рекомендации вашего бренда в нейросетях под ключ. Бесплатный GEO-аудит. Первыми выведите бизнес в ответы нейросетей!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeoForce",
  url: "https://geoforce.of.by",
  description: "Комплексное продвижение в нейросетях и ИИ-поисковиках. Настроим рекомендации вашего бренда в нейросетях под ключ. Бесплатный GEO-аудит. Первыми выведите бизнес в ответы нейросетей!",
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GeoForce",
  "url": "https://geoforce.of.by",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://geoforce.of.by/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Отдельная карточка эксперта (Person) - ОЧЕНЬ ВАЖНО ДЛЯ GEO
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Павел Гапоненко", // ЗАМЕНИТЕ на имя
  jobTitle: "Основатель GeoForce и GEO-специалист, разработчик GEO-агентов",
  description: "Эксперт по продвижению брендов в ответах нейросетей (ChatGPT, Gemini, Perplexity, Google AI, Яндекс Нейро).",
  worksFor: {
    "@type": "Organization",
    "name": "GeoForce",
    "url": "https://geoforce.of.by"
  },
  knowsAbout: ["GEO", "Generative Engine Optimization", "SEO", "Artificial Intelligence", "ChatGPT"],
  sameAs: [
    "https://t.me/GeoForce_of_by" // ЗАМЕНИТЕ на реальные соцсети эксперта
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Footer />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
