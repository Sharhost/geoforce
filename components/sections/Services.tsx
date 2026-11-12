import { Reveal } from "../Reveal";
import { IconAudit, IconContent, IconGraph, IconShield, IconChart } from "../icons";

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
              <div className="group rounded-2xl border p-8 h-full transition-all hover:border-[var(--red)] hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}>
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