export default function NotFound() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container-x text-center">
        <div className="mono text-xs mb-6" style={{ color: "var(--muted)" }}>
          ошибка / error
        </div>
        <div
          className="mono font-bold leading-none select-none"
          style={{
            color: "var(--red)",
            fontSize: "clamp(96px, 20vw, 220px)",
            textShadow: "0 0 60px rgba(255,45,45,0.35)",
          }}
        >
          404
        </div>
        <h1 className="h2 mt-6 mb-4">Такой страницы нет</h1>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "var(--muted)" }}>
          Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную —
          там всё про видимость вашего бренда в ответах ИИ.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="btn-primary">
            На главную
          </a>
          <a href="/#metrics" className="btn-ghost">
            Смотреть метрики
          </a>
        </div>
      </div>
    </section>
  );
}