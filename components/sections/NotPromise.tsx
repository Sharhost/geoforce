import { Reveal } from "../Reveal";
import { IconCross } from "../icons";

const items = [
  "Не гарантируем 100% попадание в каждый ответ ИИ — это вероятностные системы",
  "Не обещаем конкретную позицию в ChatGPT через месяц",
  "Не используем серые методы и взлом алгоритмов",
  "Не гарантируем, что конкурент исчезнет из выдачи",
  "Не заменяем SEO — работаем в дополнение к нему",
  "Не даём мгновенных результатов — первые упоминания появляются через 4–8 недель",
];

export function NotPromise() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Честность — часть методологии</h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>Шесть границ, за которые мы не выходим.</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <div className="flex gap-4 items-start rounded-xl border p-6"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <IconCross />
                <p style={{ color: "var(--muted)" }}>{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}