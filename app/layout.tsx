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
  title: "GeoForce — GEO-продвижение в ответах ИИ",
  description: "Продвигаем бренды в ответах ChatGPT, Gemini, Perplexity и Яндекс Нейро.",
  metadataBase: new URL("https://geoforce.ru"),
  openGraph: {
    title: "GeoForce — GEO-продвижение в ответах ИИ",
    description: "Ваш бренд в ответах искусственного интеллекта.",
    type: "website",
    locale: "ru_RU",
  },
  icons: { icon: "/icon.svg" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeoForce",
  url: "https://geoforce.ru",
  description: "GEO-продвижение брендов в ответах искусственного интеллекта.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
