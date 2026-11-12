type P = { className?: string };

const base = (d: string, extra?: React.ReactNode) => (props: P) => (
  <svg
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d={d} />
    {extra}
  </svg>
);

export const IconAudit = base("M14 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6-2 6 6M12 12h4M12 16h4");
export const IconContent = base("M7 5h14l4 4v18H7zM11 12h10M11 16h10M11 20h7");
export const IconGraph = base(
  "M8 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11 17l5-6M17 17l4-5M14 22l4-1"
);
export const IconShield = base("M16 4 4 9v8c0 6 5 10 12 11 7-1 12-5 12-11V9l-12-5ZM16 14v3");
export const IconChart = base("M6 26V14M14 26V8M22 26v-8M30 26H2");

export function IconCross(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF2D2D" strokeWidth="1.5" strokeLinecap="round" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 8l8 8M16 8l-8 8" />
    </svg>
  );
}

export function IconTelegram(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 4 3 11l5 2 2 6 3-4 5 3 3-14Z" />
      <path d="m8 13 8-6-5 8" />
    </svg>
  );
}

export function IconMail(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}