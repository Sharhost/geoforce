import { Reveal } from "../Reveal";
import { IconTelegram } from "../icons";

export function Author() {
  return (
    <section className="section relative">
      <div className="container-x">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Фото */}
          <Reveal delay={0.1}>
            <div className="relative max-w-[400px] mx-auto md:mx-0">
              {/* Красное свечение позади */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ 
                  background: "radial-gradient(circle at center, rgba(255,45,45,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(0.9)"
                }}
              />
              
              {/* Рамка с фото */}
              <div className="gradient-card p-2 relative z-10 rounded-3xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0C]">
                  {/* ВАШЕ ФОТО: Замените src на путь к файлу в папке public (например, /author.jpg) */}
                  <img 
                    src="/author.jpg" 
                    alt="Основатель GeoForce" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Легкий градиент снизу для красоты */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ПРАВАЯ ЧАСТЬ: Текст */}
          <Reveal delay={0.2}>
            <div>
              <div className="mono text-sm mb-4 uppercase tracking-widest" style={{ color: "var(--red)" }}>
                Об авторе
              </div>
              <h2 className="h2 mb-6">Александр Иванов</h2>
              <p className="text-xl font-medium mb-6 text-white">
                Основатель GeoForce, эксперт по GEO и искусственному интеллекту
              </p>
              
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                <p>
                  Более 5 лет занимаюсь продвижением в поиске. Когда появились нейросети, стало очевидно: правила игры меняются. Люди больше не листают ссылки — они доверяют рекомендациям ИИ.
                </p>
                <p>
                  Я разработал методологию GeoForce, чтобы бренды могли системно управлять своим присутствием в ChatGPT и Perplexity, а не надеяться на удачу. Мы не обещаем магию — мы работаем с данными.
                </p>
              </div>

              {/* Достижения */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>лет в Digital</div>
                </div>
                <div className="w-[1px] bg-white/10" />
                <div>
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>проектов</div>
                </div>
                <div className="w-[1px] bg-white/10" />
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Автор</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>методологии</div>
                </div>
              </div>

              {/* Соцсети */}
              <div className="flex gap-4">
                <a 
                  href="https://t.me/GeoForce_of_by" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[var(--red)] hover:bg-[rgba(255,45,45,0.05)] transition-all group"
                >
                  <IconTelegram className="w-4 h-4 text-white/70 group-hover:text-[var(--red)] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">Написать лично</span>
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
