import { useEffect } from "react";

interface Props {
  texto: string;
  delay?: number; // Nueva propiedad opcional para controlar el retraso
}

export default function AiVoice({ texto, delay = 1000 }: Props) {
  useEffect(() => {
    // 1. Iniciamos el temporizador DENTRO del useEffect
    const timer = setTimeout(() => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      try {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = "es-ES";

        const voces = window.speechSynthesis.getVoices() || [];
        const vozEspanol =
          voces.find(
            (v) => v.lang.startsWith("es") && v.name.includes("Google"),
          ) || voces.find((v) => v.lang.startsWith("es"));

        if (vozEspanol) utterance.voice = vozEspanol;

        utterance.rate = 1.05;
        // OJO: El rango de pitch (tono) en la API es de 0 a 2.
        // Si pones 150, el navegador lo limitará a 2.
        utterance.pitch = 1;

        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.warn("La API de voz fue bloqueada o falló:", error);
      }
    }, delay);

    // 2. Limpieza: Si el componente se desmonta antes de que acabe el tiempo, cancela el timer
    return () => clearTimeout(timer);
  }, [texto, delay]); // Se ejecuta solo cuando el texto o el delay cambien

  return null;
}
