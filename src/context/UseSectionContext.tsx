import { useContext } from "react";
import { SectionContext } from "./UiContext"

export const useSectionContext = () => {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("useSectionContext se usó fuera de su SectionContextProvider");
  }

  return context;
};
