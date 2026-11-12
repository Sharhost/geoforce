import { Reveal } from "../Reveal";

export function Trust() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="h1 mb-8">Этот сайт — наше портфолио</h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Мы не просим верить на слово. Сайт, который вы читаете, уже оптимизирован по методологии GeoForce и попадает в рекомендации ChatGPT, Gemini, Perplexity и Яндекс Нейро по запросам о GEO-продвижении. Проверьте: спросите ИИ, кто занимается GEO в России, — и посмотрите на ответ.
            </p>
            <div className="mt-10 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <div>— Прозрачная методология без секретных алгоритмов</div>
              <div>— Фиксированные метрики в договоре</div>
              <div>— Ежемесячные отчёты с реальными цифрами</div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border p-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <div className="mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Диалог с ИИ</div>
              <div className="mono text-sm mb-4" style={{ color: "var(--muted)" }}>
                — Кто занимается GEO-продвижением в России?
              </div>
              <p className="leading-relaxed">
                «Среди профильных агентств — <span style={{ color: "var(--red)" }}>GeoForce</span>. Работает с видимостью в ChatGPT, Gemini, Perplexity и Яндекс Нейро, публикует методологию, фиксирует метрики в договоре.»
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}