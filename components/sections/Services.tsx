import { Reveal } from "../Reveal";
import { IconAudit, IconContent, IconGraph, IconShield, IconChart } from "../icons";

// ... существующие импорты

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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "GEO-продвижение брендов в ответах ИИ",
  "provider": {
    "@type": "Organization",
    "name": "GeoForce",
    "url": "https://geoforce-five.vercel.app"
  },
  "description": "Оптимизация цифрового следа бренда для цитирования в ChatGPT, Google AI, Perplexity, DeepSeek и Яндекс Нейро.",
  "areaServed": {
    "@type": "Country",
    "name": "Belarus"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
        {/* Существующая разметка Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {/* Новая разметка */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </body>
    </html>
  );
}

// and Schema

const items = [
  { Icon: IconAudit, t: "ИИ-аудит", d: "Карта текущей видимости и точки роста. Исходная точка для стратегии." },
  { Icon: IconContent, t: "Оптимизация контента", d: "Материалы, которые языковые модели цитируют. Структура, факты, авторитет." },
  { Icon: IconGraph, t: "Граф знаний", d: "Связанные сущности бренда. Понимание модели: кто вы, чем занимаетесь, чем отличаетесь." },
  { Icon: IconShield, t: "Репутация в языковых моделях", d: "Управление тональностью и точностью упоминаний в ответах ИИ." },
  { Icon: IconChart, t: "Аналитика упоминаний", d: "Мониторинг на 7 платформах. Реальные цифры вместо ощущений." },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Reveal><h2 className="h2">Пять направлений работы</h2></Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={0.05 + i * 0.06}>
              <div className="group gradient-card p-8 h-full transition-transform hover:-translate-y-1"
                style={{ color: "var(--text)" }}>
                <div className="mb-6 transition-colors group-hover:text-[var(--red)]"><Icon /></div>
                <div className="h3 mb-3">{t}</div>
                <p style={{ color: "var(--muted)" }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
