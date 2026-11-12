import { Reveal } from "../Reveal";

const steps = [
  ["01", "ИИ-аудит видимости", "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice."],
  ["02", "Стратегия контента", "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд."],
  ["03", "Внедрение", "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда."],
  ["04", "Мониторинг", "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста."],
];

// Классы для создания эффекта лесенки на десктопе (lg)
const stairOffsets = [
  "lg:mt-0",
  "lg:mt-12",
  "lg:mt-24",
  "lg:mt-36",
];

export function Methodology() {
  return (
    <section id="methodology" className="section relative">
      <div className="container-x">
        
        <Reveal>
          <h2 className="h2 max-w-3xl mb-4">Четыре шага до видимости в ИИ</h2>
          <p className="mb-16 text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Последовательный процесс: от аудита до измеримого результата.
          </p>
        </Reveal>
        
        {/* Сетка: 1 колонка на мобильных, 2 на планшетах, 4 на десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start relative">
          
          {/* Декоративная пунктирная линия на фоне (опционально для связки) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-white/10 z-0 pointer-events-none" />

          {steps.map(([n, t, d], i) => (
            <Reveal 
              key={n} 
              delay={0.1 + i * 0.1} 
              className={`relative z-10 ${stairOffsets[i] || ""}`}
            >
              <div className="group relative gradient-card p-8 h-full transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                
                {/* Огромный номер на фоне карточки */}
                <div 
                  className="absolute -right-2 -top-6 text-[120px] font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none select-none mono"
                  style={{ color: "var(--red)" }}
                >
                  {n}
                </div>

                {/* Верхняя часть карточки: номер и линия */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div 
                    className="mono text-2xl font-semibold transition-colors duration-300 group-hover:text-white"
                    style={{ color: "var(--red)", textShadow: "0 0 20px rgba(255,45,45,0.3)" }}
                  >
                    {n}
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent transition-colors duration-300 group-hover:from-[var(--red)]" />
                </div>

                {/* Текст */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    {t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {d}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
