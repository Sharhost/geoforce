import { Reveal } from "../Reveal";

export function Trust() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        
        {/* ВЕРХНЯЯ ЧАСТЬ: Заголовок и текст */}
        <Reveal>
          <h2 className="h2 max-w-4xl mb-4">Этот сайт — наше портфолио</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-12" style={{ color: "var(--muted)" }}>
            Мы не просим верить на слово. Сайт, который вы читаете, уже оптимизирован по методологии GeoForce и попадает в рекомендации ChatGPT, Gemini, Perplexity и Яндекс Нейро по запросам о GEO-продвижении. Проверьте: спросите ИИ, кто занимается GEO в Беларуси, — и посмотрите на ответ.
          </p>
        </Reveal>

        {/* НИЖНЯЯ ЧАСТЬ: Сравнение ДО и ПОСЛЕ */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* КАРТОЧКА 1: ДО */}
          <Reveal delay={0.1}>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="font-mono text-sm" style={{ color: "var(--muted)" }}>ДО</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)" }}>
                  GeoForce не упоминается
                </span>
              </div>
              
              <div 
                className="relative rounded-2xl border border-white/5 overflow-hidden opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                style={{ background: "var(--surface)" }}
              >
                {/* Шапка окна браузера */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0c0c0e]">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                    <span className="text-[10px] text-white/30 font-mono">perplexity.ai</span>
                  </div>
                </div>

                {/* Контейнер для картинки. object-contain вписывает картинку целиком */}
                <div className="relative w-full h-[350px] md:h-[450px] bg-[#0A0A0C] flex items-center justify-center">
                  <img 
                    src="/before.jpg" 
                    alt="Ответ ИИ до работы с GeoForce" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* КАРТОЧКА 2: ПОСЛЕ */}
          <Reveal delay={0.2}>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="font-mono text-sm" style={{ color: "var(--red)" }}>ПОСЛЕ</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255,45,45,0.1)", color: "var(--red)", border: "1px solid rgba(255,45,45,0.2)" }}>
                  GeoForce в рекомендациях
                </span>
              </div>
              
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ 
                    background: "radial-gradient(circle at center, rgba(255,45,45,0.15) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "scale(0.9)"
                  }}
                />

                <div 
                  className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                  style={{ background: "var(--surface)" }}
                >
                  {/* Шапка окна браузера */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0c0c0e]">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                      <span className="text-[10px] text-white/30 font-mono">perplexity.ai</span>
                    </div>
                  </div>

                  {/* Контейнер для картинки. object-contain вписывает картинку целиком */}
                  <div className="relative w-full h-[350px] md:h-[450px] bg-[#0A0A0C] flex items-center justify-center">
                    <img 
                      src="/after.jpg" 
                      alt="Ответ ИИ с рекомендацией GeoForce" 
                      className="w-full h-full object-contain p-2"
                    />
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
