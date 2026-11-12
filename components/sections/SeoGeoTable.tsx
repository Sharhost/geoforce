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
        
        {/* Добавили w-full и max-w-full, чтобы таблица не ломала экран на мобилках */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto w-full max-w-[100vw] pb-4">
            <table className="w-full min-w-[720px] text-sm md:text-base border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="py-4 pr-4" style={{ color: "var(--muted)", fontWeight: 500 }}>Параметр</th>
                  <th className="py-4 px-4" style={{ color: "var(--muted)", fontWeight: 500 }}>SEO</th>
                  <th className="py-4 px-4" style={{ color: "var(--red)", fontWeight: 600 }}>GEO</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}> {/* Сделали границу ярче */}
                    <td className="py-5 pr-4 font-medium align-top">{r[0]}</td>
                    <td className="py-5 px-4 align-top" style={{ color: "var(--muted)" }}>{r[1]}</td>
                    <td 
                      className="py-5 px-4 align-top"
                      style={{
                        color: "var(--text)",
                        background: "rgba(255, 45, 45, 0.04)", /* Легкий красный фон */
                        borderLeft: "2px solid var(--red)",
                        borderRight: "2px solid var(--red)", /* Рамка справа */
                        borderBottom: i === rows.length - 1 ? "2px solid var(--red)" : "none", /* Закрываем низ */
                        borderTop: i === 0 ? "2px solid var(--red)" : "none", /* Закрываем верх */
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
      </div>
    </section>
  );
}
