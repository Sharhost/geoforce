"use client";
import { useContactModal } from "./ContactModalProvider";

export function MobileCtaBar() {
  const { open, isOpen } = useContactModal();
  if (isOpen) return null;
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 p-3 md:hidden"
      style={{
        background: "rgba(17,17,20,0.9)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <button
        onClick={open}
        className="w-full rounded-full py-3.5 text-sm font-medium"
        style={{ background: "var(--red)", color: "white" }}
      >
        Обсудить проект
      </button>
    </div>
  );
}