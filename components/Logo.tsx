export function Logo({
  size = 28,
  variant = "default",
  className = "",
}: {
  size?: number;
  variant?: "default" | "mono";
  className?: string;
}) {
  const textColor = "#F5F5F7";
  // Если вариант mono (например, для темной темы), то Geo тоже белое
  const accentColor = variant === "mono" ? "#F5F5F7" : "var(--red)";
  const dotColor = variant === "mono" ? "#F5F5F7" : "var(--red)";
  const dot = Math.round(size * 0.18);

  return (
    <span
      className={`inline-flex items-baseline gap-1 ${className}`}
      aria-label="GeoForce"
      style={{ fontSize: size, lineHeight: 1 }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {/* Разделяем слово на две части для разного цвета */}
        <span style={{ color: accentColor }}>Geo</span>
        <span style={{ color: textColor }}>Force</span>
      </span>
      <span
        style={{
          display: "inline-block",
          width: dot,
          height: dot,
          borderRadius: "50%",
          background: dotColor,
          marginLeft: Math.max(2, dot / 4),
        }}
      />
    </span>
  );
}
