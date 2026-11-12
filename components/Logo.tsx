export function Logo({
  size = 28,
  variant = "default",
  className = "",
}: {
  size?: number;
  variant?: "default" | "mono";
  className?: string;
}) {
  const textColor = variant === "mono" ? "#F5F5F7" : "#F5F5F7";
  const dotColor = variant === "mono" ? "#F5F5F7" : "#FF2D2D";
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
          color: textColor,
        }}
      >
        GeoForce
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