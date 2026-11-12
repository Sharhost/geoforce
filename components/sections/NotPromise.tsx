import { Reveal } from "../Reveal";
import { IconCross } from "../icons";

const promises = [
  "Не гарантируем 100% попадание в каждый ответ ИИ — это вероятностные системы",
  "Не обещаем конкретную позицию в ChatGPT через месяц",
  "Не используем серые методы и взлом алгоритмов",
  "Не гарантируем, что конкурент исчезнет из выдачи",
  "Не заменяем SEO — работаем в дополнение к нему",
  "Не даём мгновенных результатов — первые упоминания появляются через 4–8 недель",
];

const guarantees = [
  "Прозрачную методологию без «секретных алгоритмов»",
  "Фиксацию ключевых метрик (Citation Rate и Share of Voice) в договоре",
  "Только белые методы работы и качественный контент",
  "Рост частоты и точности упоминаний вашего бренда",
  "Усиление вашего текущего SEO за счет нового канала",
  "Первые измеримые результаты (упоминания) уже через 4–8 недель",
];

// Иконка галочки для правой колонки
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function NotPromise() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Честность — часть методологии</h2>
          <p className="mt-4 mb-16 max-w-2xl" style={{ color: "var(--muted)" }}>
            Мы четко разделяем зоны ответственности. Вы всегда знаете, за что платите и на какой результат можете рассчитывать.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ЛЕВАЯ КОЛОНКА: ЧЕГО МЫ НЕ ОБЕЩАЕМ */}
          <Reveal delay={0.1}>
            <div 
              className="rounded-2xl p-8 h-full border border-white/5"
              style={{ background: "#0c0c0e" }}
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <h3 className="text-xl font-semibold" style={{ color: "var(--muted)" }}>Чего мы не обещаем</h3>
              </div>
              <ul className="space-y-6">
                {promises.map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-0.5 opacity-70">
                      <IconCross />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ПРАВАЯ КОЛОНКА: ЧТО МЫ ГАРАНТИРУЕМ */}
          <Reveal delay={0.2}>
            <div className="gradient-card p-8 h-full relative overflow-hidden">
              {/* Легкое красное свечение в углу */}
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-10"
                style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)", filter: "blur(40px)" }}
              />
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[var(--red)] shadow-[0_0_10px_var(--red)]" />
                <h3 className="text-xl font-semibold text-white">Что мы гарантируем</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {guarantees.map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <IconCheck />
                    <p className="text-sm md:text-base leading-relaxed font-medium text-white">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
