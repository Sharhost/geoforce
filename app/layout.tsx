import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import { SmoothScroll } from "@/components/SmoothScroll";

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
  title: "GeoForce — GEO-продвижение брендов в ответах ИИ | Беларусь",
  description: "Агентство GeoForce оптимизирует цифровой след бренда для рекомендаций в ChatGPT, Google AI, Perplexity, DeepSeek и Яндекс Нейро. Фиксируем Citation Rate и Share of Voice в договоре.",
  keywords: ["GEO", "GEO-продвижение", "продвижение в ChatGPT", "оптимизация для ИИ", "AI SEO", "Беларусь", "GeoForce"],
  authors: [{ name: "GeoForce" }],
  creator: "GeoForce",
  metadataBase: new URL("https://geoforce-five.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GeoForce — GEO-продвижение в ответах ИИ",
    description: "Ваш бренд в ответах ChatGPT, Gemini, Perplexity и Яндекс Нейро. Прозрачная методология и измеримые метрики.",
    url: "https://geoforce-five.vercel.app",
    siteName: "GeoForce",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeoForce — GEO-продвижение",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoForce — GEO-продвижение в ответах ИИ",
    description: "Продвигаем бренды в ответах ChatGPT, Google AI, Perplexity и Яндекс Нейро.",
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
  url: "https://geoforce-five.vercel.app",
  description: "GEO-продвижение брендов в ответах искусственного интеллекта.",
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GeoForce",
  "url": "https://geoforce-five.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://geoforce-five.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
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
      </body>
    </html>
  );
}
