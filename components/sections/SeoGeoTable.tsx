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

        {/* ================= ДЕСКТОПНАЯ ВЕРСИЯ (ТАБЛИЦА) ================= */}
        <Reveal delay={0.1}>
          <div className="mt-12 hidden md:block">
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="py-4 pr-4 w-1/4" style={{ color: "var(--muted)", fontWeight: 500 }}>Параметр</th>
                  <th className="py-4 px-4 w-1/3" style={{ color: "var(--muted)", fontWeight: 500 }}>SEO</th>
                  <th className="py-4 px-4 w-5/12" style={{ color: "var(--red)", fontWeight: 600 }}>GEO</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                    <td className="py-5 pr-4 font-medium align-top">{r[0]}</td>
                    <td className="py-5 px-4 align-top" style={{ color: "var(--muted)" }}>{r[1]}</td>
                    <td 
                      className="py-5 px-4 align-top"
                      style={{
                        color: "var(--text)",
                        background: "rgba(255, 45, 45, 0.04)",
                        borderLeft: "2px solid var(--red)",
                        borderRight: "2px solid var(--red)",
                        borderBottom: i === rows.length - 1 ? "2px solid var(--red)" : "none",
                        borderTop: i === 0 ? "2px solid var(--red)" : "none",
                      }}
                    >
                      {r[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
