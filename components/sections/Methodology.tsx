import { Reveal } from "../Reveal";

const steps = [
  ["01", "ИИ-аудит видимости", "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice."],
  ["02", "Стратегия контента", "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд."],
  ["03", "Внедрение", "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда."],
  ["04", "Мониторинг", "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста."],
];

export function Methodology() {
  return (
    <section id="methodology" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Четыре шага до видимости в ИИ</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={0.1 + i * 0.08}>
              <div>
                <div className="mono mb-6" style={{ color: "var(--red)", fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1, fontWeight: 600 }}>{n}</div>
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