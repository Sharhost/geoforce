import { Reveal } from "../Reveal";

const items = [
  { t: "Отчёт ИИ-аудита", d: "Текущая видимость и точки роста по 7 платформам." },
  { t: "Стратегия контента", d: "Семантическое ядро под ИИ-запросы и карта тем." },
  { t: "Оптимизированные материалы", d: "Контент и структурированные данные, которые цитирует ИИ." },
  { t: "Граф знаний бренда", d: "Связанные сущности, факты и отличия — в понимании модели." },
  { t: "Панель мониторинга", d: "Упоминания в реальном времени по всем платформам." },
  { t: "Ежемесячный отчёт", d: "Citation Rate и Share of Voice с динамикой." },
  { t: "Персональный менеджер", d: "Созвоны раз в две недели, ответы в рабочие дни." },
];

export function Deliverables() {
  return (
    <section className="section relative">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl mb-4">Конкретные артефакты, а не абстрактные обещания</h2>
          <p className="max-w-2xl text-lg" style={{ color: "var(--muted)" }}>
            Вы всегда видите, за что платите. Каждый месяц работа превращается в осязаемые документы и дашборды.
          </p>
        </Reveal>

        {/* СПИСОК-ИНДЕКС */}
        <div className="mt-16 border-t border-white/10">
          {items.map((item, i) => (
            <Reveal key={item.t} delay={0.05 + i * 0.05}>
              <div className="group relative flex items-center justify-between py-6 md:py-8 border-b border-white/10 transition-colors duration-500 hover:border-white/20 cursor-default">
                
                {/* Левая часть: Номер + Заголовок + Описание */}
                <div className="flex items-start md:items-center gap-6 md:gap-12 relative z-10">
                  <div 
                    className="mono text-sm md:text-base transition-colors duration-300"
                    style={{ color: "var(--muted)" }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-2">
                      {item.t}
                    </h3>
                    <p className="text-sm md:text-base mt-1 md:mt-0 transition-colors duration-300" style={{ color: "var(--muted)" }}>
                      {item.d}
                    </p>
                  </div>
                </div>

                {/* Правая часть: Стрелка, которая появляется при наведении */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/5 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-[var(--red)] group-hover:bg-[rgba(255,45,45,0.1)]">
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" 
                    fill="none" stroke="var(--red)" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                {/* Подсветка фона при наведении (едва заметная) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
