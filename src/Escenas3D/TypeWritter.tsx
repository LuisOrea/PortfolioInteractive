import { motion, type Variants } from "framer-motion";

interface TypewriterLineProps {
  readonly text: string;
  readonly speed?: number;
  readonly className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: (speed: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: speed,
    },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "inline-block",
  },
};

export function TypewriterLine({
  text,
  speed = 0.03,
  className = "",
}: TypewriterLineProps) {
  const letters = Array.from(text);

  return (
    <motion.div
      variants={containerVariants}
      custom={speed}
      // Aseguramos que el contenedor mantenga el flujo de texto continuo
      className={`inline font-mono ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {/* 💡 Si es un espacio vacío, renderizamos un espacio duro (\u00A0) para que no se colapse */}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
