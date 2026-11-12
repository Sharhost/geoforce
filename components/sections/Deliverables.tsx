import { Reveal } from "../Reveal";

const items = [
  ["Отчёт ИИ-аудита", "Текущая видимость и точки роста по 7 платформам."],
  ["Стратегия контента", "Семантическое ядро под ИИ-запросы и карта тем."],
  ["Оптимизированные материалы", "Контент и структурированные данные, которые цитирует ИИ."],
  ["Граф знаний бренда", "Связанные сущности, факты и отличия — в понимании модели."],
  ["Панель мониторинга", "Упоминания в реальном времени по всем платформам."],
  ["Ежемесячный отчёт", "Citation Rate и Share of Voice с динамикой."],
  ["Персональный менеджер", "Созвоны раз в две недели, ответы в рабочие дни."],
];

export function Deliverables() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Конкретные артефакты, а не абстрактные обещания</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6">
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={0.05 + i * 0.05}>
              <div className="flex gap-4 items-start">
                <span style={{ color: "var(--red)", fontSize: 20, lineHeight: 1.4 }}>✓</span>
                <div>
                  <div className="font-medium">{t}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}