import { Reveal } from "../Reveal";

export function WhatIsGeo() {
  return (
    <section className="section relative">
      <div className="container-x">
        
        {/* Заголовок */}
        <div className="max-w-4xl mb-16">
          <Reveal>
            <h2 className="h2 mb-6">Мост между бизнесом и ИИ</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
              Сайт — это ваш дом. <span className="text-white">SEO</span> строит к нему дорогу для людей. 
              <br className="hidden md:block" />
              <span className="text-[var(--red)] font-medium">GEO</span> строит мост для нейросетей. Без него роботы просто не найдут дорогу к вашему бренду.
            </p>
          </Reveal>
        </div>

        {/* Схема (Визуализация моста) */}
        <div className="relative">
          
          {/* ВЕРХНЯЯ ДОРОГА: SEO (Люди) */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[150px_1fr_1fr] gap-4 md:gap-8 items-center mb-8 md:mb-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
              
              {/* Источник (Люди) */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mono text-[10px] md:text-xs mb-2" style={{ color: "var(--muted)" }}>КАНАЛ 1</div>
                <div className="text-sm md:text-base font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/50" /> Люди
                </div>
              </div>

              {/* Мост (SEO) */}
              <div className="relative h-[1px] bg-white/20 w-full flex items-center justify-center">
                <div className="absolute bg-[#0A0A0C] px-3 py-1 text-xs border border-white/10 rounded-full text-white/50 mono">
                  SEO / Поисковая выдача
                </div>
              </div>

              {/* Заглушка для сетки */}
              <div className="hidden md:block" />
            </div>
          </Reveal>

          {/* НИЖНЯЯ ДОРОГА: GEO (Нейросети) */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[150px_1fr_1fr] gap-4 md:gap-8 items-center relative z-10">
              
              {/* Источник (ИИ) */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mono text-[10px] md:text-xs mb-2" style={{ color: "var(--red)" }}>КАНАЛ 2</div>
                <div className="text-sm md:text-base font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--red)] shadow-[0_0_10px_var(--red)] animate-pulse" /> Нейросети
                </div>
              </div>

              {/* Мост (GEO) */}
              <div className="relative h-[2px] bg-[var(--red)] w-full flex items-center justify-center shadow-[0_0_15px_var(--red)]">
                <div className="absolute bg-[#151518] px-3 py-1 text-xs border border-[var(--red)] rounded-full text-white font-medium mono shadow-lg">
                  GEO — Мы строим этот мост
                </div>
                {/* Точки на мосту для красоты */}
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full left-1/4" />
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full left-3/4" />
              </div>

              {/* Заглушка для сетки */}
              <div className="hidden md:block" />
            </div>
          </Reveal>

          {/* ПУНКТ НАЗНАЧЕНИЯ (Справа, объединяет оба канала) */}
          <Reveal delay={0.4}>
            <div className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[30%] flex justify-center z-20">
              <div className="gradient-card p-6 md:p-8 w-full max-w-[280px] relative text-center shadow-2xl">
                <div className="absolute -inset-1 bg-[var(--red)] opacity-20 blur-[30px] rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--red)] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,45,45,0.4)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-white mb-2">Ваш бизнес</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    Сайт, статьи, граф знаний
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
