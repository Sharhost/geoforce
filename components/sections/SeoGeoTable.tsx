import { Reveal } from "../Reveal";

const rows = [
  ["Где показывается бренд", "страница поисковой выдачи", "ответы ChatGPT, Gemini, Perplexity, Яндекс Нейро"],
  ["Что видит аудитория", "список из 10 ссылок, конкуренция за клик", "готовая рекомендация — прямой ответ на вопрос"],
  ["Как попасть в результат", "позиция по ключевым словам, ссылки, поведенческие", "цитируемость, граф знаний, авторитет источника"],
  ["Скорость эффекта", "4–12 месяцев до топа", "первые упоминания — 4–8 недель"],
  ["Устойчивость", "позиции зависят от обновлений поисковых алгоритмов", "эффект накапливается в обучающих данных языковых моделей"],
  ["Как измеряется", "позиции и трафик", "Citation Rate и Share of Voice"],
  ["Кому доверяет аудитория", "сама выбирает из выдачи", "получает готовую рекомендацию и доверяет ей"],
];

export function SeoGeoTable() {
  return (
    <section id="seo-vs-geo" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Не вместо SEO. В дополнение — там, где решается выбор</h2>
          <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
            Разные каналы, разные механики. Работают вместе.
          </p>
        </Reveal>

        {/* ================= ДЕСКТОПНАЯ ВЕРСИЯ (GRID С РАЗДЕЛЕННЫМИ КОЛОНКАМИ) ================= */}
        <Reveal delay={0.1}>
          <div className="mt-12 hidden md:block rounded-2xl border border-white/15 overflow-hidden">
            
            {/* Шапка таблицы */}
            <div className="grid grid-cols-[1fr_1.1fr_1.4fr] bg-[#151518]">
              <div className="p-6 font-medium border-r border-white/15" style={{ color: "var(--muted)" }}>Параметр</div>
              <div className="p-6 font-medium border-r border-white/15" style={{ color: "var(--muted)" }}>SEO</div>
              <div className="p-6 font-semibold" style={{ color: "var(--red)" }}>GEO</div>
            </div>
            
            {/* Строки таблицы */}
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-[1fr_1.1fr_1.4fr] border-t border-white/15">
                {/* Колонка 1: Параметр (темный фон) */}
                <div className="p-6 font-medium bg-[#0c0c0e] border-r border-white/15 flex items-center">
                  {r[0]}
                </div>
                
                {/* Колонка 2: SEO (чуть светлее, текст приглушенный) */}
                <div className="p-6 bg-[#111114] border-r border-white/15 flex items-center" style={{ color: "var(--muted)" }}>
                  {r[1]}
                </div>
                
                {/* Колонка 3: GEO (легкий красный фон и красная левая граница) */}
                <div 
                  className="p-6 flex items-center"
                  style={{ 
                    background: "rgba(255, 45, 45, 0.04)",
                    borderLeft: "2px solid var(--red)",
                    color: "var(--text)"
                  }}
                >
                  {r[2]}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= МОБИЛЬНАЯ ВЕРСИЯ (КАРТОЧКИ) ================= */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {rows.map((r, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <div 
                className="rounded-xl p-5"
                style={{ 
                  background: "var(--surface)", 
                  border: "1px solid rgba(255,255,255,0.1)" 
                }}
              >
                {/* Заголовок карточки (Параметр) */}
                <div className="font-semibold text-lg mb-4">{r[0]}</div>
                
                {/* Блок SEO */}
                <div className="mb-3">
                  <div className="text-xs font-mono mb-1" style={{ color: "var(--muted)" }}>SEO</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>{r[1]}</div>
                </div>

                {/* Блок GEO (выделен красным) */}
                <div 
                  className="rounded-lg p-3"
                  style={{ 
                    background: "rgba(255, 45, 45, 0.05)",
                    border: "1px solid rgba(255, 45, 45, 0.3)"
                  }}
                >
                  <div className="text-xs font-mono mb-1" style={{ color: "var(--red)" }}>GEO</div>
                  <div className="text-sm" style={{ color: "var(--text)" }}>{r[2]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
