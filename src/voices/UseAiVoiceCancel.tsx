import { useCallback } from "react";

export default function UseAiVoiceCancel() {
  const silenciar = useCallback(() => {
    try {
      // Protección de window también aquí
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (error) {
      console.warn("No se pudo silenciar:", error);
    }
  }, []);

  return silenciar;
}
