import { Reveal } from "../Reveal";

export function Trust() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст */}
          <Reveal>
            <h2 className="h2 mb-8">Этот сайт —<br />наше портфолио</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              Мы не просим верить на слово. Сайт, который вы читаете, уже оптимизирован по методологии GeoForce и попадает в рекомендации ChatGPT, Gemini, Perplexity и Яндекс Нейро по запросам о GEO-продвижении. Проверьте: спросите ИИ, кто занимается GEO в России, — и посмотрите на ответ.
            </p>
            
            <div className="space-y-4">
              {[
                "Прозрачная методология без секретных алгоритмов",
                "Фиксированные метрики в договоре",
                "Ежемесячные отчёты с реальными цифрами"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Красивая галочка в круге */}
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,45,45,0.1)", border: "1px solid rgba(255,45,45,0.3)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ПРАВАЯ ЧАСТЬ: Визуал (Макет браузера) */}
          <Reveal delay={0.2}>
            <div className="relative">
              {/* Красное свечение позади картинки */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ 
                  background: "radial-gradient(circle at center, rgba(255,45,45,0.2) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(0.9)"
                }}
              />
              
              {/* Само окно браузера */}
              <div 
                className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                style={{ background: "var(--surface)" }}
              >
                {/* Шапка окна браузера (как у macOS) */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0c0c0e]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                    <span className="text-[10px] text-white/30 font-mono">chatgpt.com</span>
                  </div>
                </div>

                {/* МЕСТО ДЛЯ ВАШЕГО СКРИНШОТА */}
                {/* Когда сделаете скрин, замените этот div на <img src="/ваша-картинка.png" className="w-full h-auto" /> */}
                <div className="relative aspect-[4/3] flex flex-col items-center justify-center p-8 text-center bg-[#0A0A0C]">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium mb-1">Место для скриншота</div>
                  <div className="text-xs max-w-[200px]" style={{ color: "var(--muted)" }}>
                    Здесь будет ответ ИИ, рекомендующий GeoForce
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
