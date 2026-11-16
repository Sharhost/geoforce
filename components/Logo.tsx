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
  const accentColor = variant === "mono" ? "#F5F5F7" : "var(--red)";
  const dotColor = variant === "mono" ? "#F5F5F7" : "var(--red)";
  const dot = Math.round(size * 0.18);

  return (
    <span
      className={`inline-flex items-baseline ${className}`}
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
          // Придвинули точку ближе (уменьшили marginLeft)
          marginLeft: Math.max(1, Math.floor(dot / 6)),
        }}
      />
    </span>
  );
}
