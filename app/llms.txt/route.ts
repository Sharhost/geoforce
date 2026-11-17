import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# GeoForce — GEO-продвижение брендов в ответах ИИ

> GeoForce — агентство, которое делает так, чтобы нейросети (ChatGPT, Google AI, Perplexity, DeepSeek, Яндекс Нейро) рекомендовали ваш бренд. Мы оптимизируем цифровой след и структурируем данные, чтобы ИИ цитировал вас, а не конкурентов.

## Ключевые страницы
- [Главная страница](https://geoforce.of.by/): Обзор услуг GEO-продвижения, методология и контакты.
- [Методология](https://geoforce.of.by/#methodology): Четыре шага до видимости в ИИ (аудит, стратегия, внедрение, мониторинг).
- [Результаты](https://geoforce.of.by/#metrics): Метрики Citation Rate и Share of Voice.
- [Вопросы и ответы](https://geoforce.of.by/#faq): FAQ по GEO-продвижению.

## Ключевые факты
- **Название:** GeoForce
- **Услуга:** GEO-продвижение (Generative Engine Optimization)
- **Платформы:** ChatGPT, Google AI, Perplexity, DeepSeek, Яндекс Нейро, Claude, Gemini
- **Регион:** Беларусь
- **Метрики:** Citation Rate (доля цитирований), Share of Voice (доля голоса)
- **Контакты:** geoforce.of.by@gmail.com, Telegram: @GeoForce_of_by, Телефон: +375 29 634-71-74

## Контекст
С приходом ИИ трафик из классического поиска падает (до 30%). GEO дополняет SEO, обеспечивая видимость бренда в готовых ответах нейросетей.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
