const items = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Copilot", "Яндекс Нейро", "GigaChat"];

export function PlatformsMarquee() {
  const list = [...items, ...items];
  return (
    <section
      className="py-10 border-y overflow-hidden"
      style={{ borderColor: "var(--border)" }}
      aria-label="Платформы"
    >
      <div className="flex whitespace-nowrap marquee-track">
        {list.map((name, i) => (
          <span key={i} className="flex items-center gap-6 px-8 text-2xl font-medium"
            style={{ color: "var(--muted)" }}>
            {name}
            <span className="inline-block w-1 h-1 rounded-full" style={{ background: "var(--red)" }} />
          </span>
        ))}
      </div>
    </section>
  );
}