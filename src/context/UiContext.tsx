// src/context/ThemeContext.tsx
import { createContext, useState, type ReactNode } from "react";

export interface SectionContext {
  modalesAbiertos: Record<string, boolean>; 
  abrirModal: (id: string) => void;
  cerrarModal: (id: string) => void;
}

export const SectionContext = createContext<SectionContext | undefined>(
  undefined,
);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [modalesAbiertos, setModalesAbiertos] = useState<Record<string, boolean>>({});

  const abrirModal = (id: string) => {
    setModalesAbiertos((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const cerrarModal = (id: string) => {
    setModalesAbiertos((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  

  return (
    <SectionContext.Provider value={{modalesAbiertos, abrirModal, cerrarModal}}>
      {children}
    </SectionContext.Provider>
  );
};



