import { Reveal } from "../Reveal";

export function WhatIsGeo() {
  return (
    <section className="section relative">
      <div className="container-x">
        
        {/* ЗАГОЛОВОК И МАНИФЕСТ */}
        <div className="max-w-4xl mb-16">
          <Reveal>
            <h2 className="h2 mb-6">Новый канал — новая логика</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xl md:text-2xl leading-relaxed" style={{ color: "var(--text)" }}>
              Раньше клиенты искали вас в Google или Яндекс. <br className="hidden md:block" />
              Теперь они спрашивают ChatGPT: <span className="italic" style={{ color: "var(--muted)" }}>«Кто мне поможет?»</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              GEO (Generative Engine Optimization) — это продвижение бренда в ответах искусственного интеллекта. Мы делаем так, чтобы нейросеть рекомендовала вас, а не конкурентов.
            </p>
          </Reveal>
        </div>

        {/* 3 ШАГА (КАРТОЧКИ) */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          
          {/* Декоративная линия, соединяющая карточки (на десктопе) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          {/* ШАГ 1: SEO (Прошлое) */}
          <Reveal delay={0.2}>
            <div className="relative z-10 rounded-2xl p-8 h-full border border-white/5 bg-[#0c0c0e] opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="mono text-sm mb-6" style={{ color: "var(--muted)" }}>01 / Было</div>
              <div className="text-2xl font-semibold mb-3">Поисковики</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Вы вводите запрос в Google. Получаете список из 10 ссылок. Вы сами изучаете их и выбираете, куда кликнуть. Для этого работало <b>SEO</b>.
              </p>
            </div>
          </Reveal>

          {/* ШАГ 2: ИИ (Настоящее) */}
          <Reveal delay={0.3}>
            <div className="relative z-10 rounded-2xl p-8 h-full border border-white/10 bg-[#151518]">
              <div className="mono text-sm mb-6 text-white">02 / Стало</div>
              <div className="text-2xl font-semibold mb-3 text-white">Нейросети</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Вы пишете в ChatGPT: «Посоветуй агентство». ИИ анализирует интернет и выдает <b>один готовый ответ</b> с одной рекомендацией. Выбор сделан за вас.
              </p>
            </div>
          </Reveal>

          {/* ШАГ 3: GEO (Будущее/Решение) */}
          <Reveal delay={0.4}>
            <div className="relative z-10 gradient-card p-8 h-full transition-transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--red)] opacity-10 blur-[40px] rounded-full" />
              <div className="mono text-sm mb-6" style={{ color: "var(--red)" }}>03 / Решение</div>
              <div className="text-2xl font-semibold mb-3" style={{ color: "var(--red)" }}>GEO</div>
              <p className="text-sm leading-relaxed text-white">
                Мы структурируем данные о вашем бренде и создаем контент так, чтобы нейросеть выбирала именно вас. <b>GEO — это SEO для искусственного интеллекта.</b>
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
