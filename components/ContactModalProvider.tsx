"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "./ContactModal";

const Ctx = createContext<{ open: () => void; close: () => void; isOpen: boolean }>({
  open: () => {}, close: () => {}, isOpen: false,
});

export const useContactModal = () => useContext(Ctx);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Ctx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
    </Ctx.Provider>
  );
}