import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { motion } from "framer-motion"; // Добавили импорт для анимаций

const bars = [
  // Для бренда задаем начальное значение (31) и конечное (51)
  { name: "[Ваш бренд]", value: 51, initial: 0, highlight: true },
  { name: "Конкурент A", value: 27, initial: 0, highlight: false },
  { name: "Конкурент B", value: 22, initial: 0, highlight: false },
  { name: "Конкурент C", value: 20, initial: 0, highlight: false },
];

export function Metrics() {
  return (
    <section id="metrics" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Две метрики, по которым видно реальный прогресс</h2>
          <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
            Обе фиксируются в договоре и в ежемесячном отчёте.
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="gradient-card p-8 h-full">
              <div className="h3 mb-4">Citation Rate <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: "1rem" }}>(доля цитирований)</span></div>
              <p className="mb-6" style={{ color: "var(--muted)" }}>
                Процент ответов ИИ, в которых упоминается ваш бренд, от общего числа релевантных запросов по вашей категории.
              </p>
              <div className="mono text-xs rounded p-3 mb-6" style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted)" }}>
                (ответы с упоминанием / всего запросов) × 100%
              </div>
              <div className="mono" style={{ color: "var(--red)", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 600 }}>
                <Counter to={38} suffix="%" />
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="gradient-card p-8 h-full">
              <div className="h3 mb-4">Share of Voice <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: "1rem" }}>(доля голоса)</span></div>
              <p className="mb-6" style={{ color: "var(--muted)" }}>
                Доля упоминаний вашего бренда относительно всех упоминаний конкурентов в категории.
              </p>
              <div className="mono text-xs rounded p-3 mb-6" style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted)" }}>
                (упоминания бренда / все упоминания в категории) × 100%
              </div>
              
              <div className="space-y-3">
                {bars.map((b) => (
                  <div key={b.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: b.highlight ? "var(--text)" : "var(--muted)" }}>{b.name}</span>
                      <span className="mono" style={{ color: b.highlight ? "var(--red)" : "var(--muted)" }}>
                        {/* Если это наш бренд, используем анимированный счетчик, иначе обычный текст */}
                        {b.highlight ? (
                          <Counter to={b.value} suffix="%" />
                        ) : (
                          `${b.value}%`
                        )}
                      </span>
                    </div>
                    
                    {/* Полоса прогресса */}
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div 
                        className="h-full rounded-full"
                        // Анимация начинается, когда элемент появляется в зоне видимости
                        initial={{ width: `${b.initial}%` }}
                        whileInView={{ width: `${b.value}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        style={{ 
                          background: b.highlight ? "var(--red)" : "rgba(138,138,147,0.5)" 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
            Дополнительно отслеживаем: тональность упоминаний, позицию бренда в ответе, источники, на которые ссылается ИИ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
