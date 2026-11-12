import { Reveal } from "../Reveal";

const points = [
  { n: "01", t: "Модели обучаются на текущем контенте", d: "То, что вы публикуете сейчас, попадёт в следующее поколение моделей. Позже — дольше ждать." },
  { n: "02", t: "Первые закрепляются как ответ по умолчанию", d: "Перебить уже рекомендованного конкурента в 3–4 раза дороже, чем войти первым." },
  { n: "03", t: "Рынок GEO только формируется", d: "Конкуренция за упоминания в разы ниже, чем будет через год." },
  { n: "04", t: "Аудитория уже спрашивает ИИ", d: "Миллионы решений о покупке принимаются в чатах, а не в поиске." },
];

export function WhyNow() {
  return (
    <section className="section relative">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl mb-4">Окно возможностей закрывается быстрее, чем кажется</h2>
          <p style={{ color: "var(--muted)" }}>Четыре причины начать в этом квартале.</p>
        </Reveal>

        {/* ВИЗУАЛЬНАЯ ШКАЛА СРОЧНОСТИ */}
        <Reveal delay={0.1}>
          <div className="mt-12 mb-16 max-w-2xl">
            <div className="flex justify-between text-xs font-mono mb-2" style={{ color: "var(--muted)" }}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
                Сейчас (низкая конкуренция)
              </span>
              <span>Через год (высокая конкуренция)</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div 
                className="h-full rounded-full" 
                style={{ 
                  width: "15%", 
                  background: "linear-gradient(90deg, var(--red) 0%, var(--red-deep) 100%)" 
                }} 
              />
            </div>
          </div>
        </Reveal>

        {/* СЕТКА КАРТОЧЕК */}
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={0.2 + i * 0.1}>
              <div 
                className="group relative gradient-card p-8 h-full transition-transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Огромный номер на фоне */}
                <div 
                  className="absolute -right-2 -bottom-6 text-[120px] font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none select-none mono"
                  style={{ color: "var(--red)" }}
                >
                  {p.n}
                </div>

                <div className="relative z-10">
                  <div className="h3 mb-3 transition-colors group-hover:text-[var(--red)]">{p.t}</div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* АКЦЕНТНЫЙ БАННЕР СНИЗУ */}
        <Reveal delay={0.6}>
          <div 
            className="mt-12 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,45,45,0.1) 0%, rgba(17,17,20,1) 100%)",
              border: "1px solid rgba(255,45,45,0.2)"
            }}
          >
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]" 
              style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }}
            />
            <p className="h3 !mb-0 text-white relative z-10">
              Сейчас лучший момент — <span style={{ color: "var(--red)" }}>до того</span>, как это станет очевидным для всех.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
