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

// Se remueve display: "none" para evitar colapsos en el renderizado
const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export function TypewriterLine({
  text,
  speed = 0.03,
  className = "",
}: TypewriterLineProps) {
  // Dividimos primero por palabras para mantener la integridad léxica
  const words = text.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      custom={speed}
      initial="hidden"
      animate="visible"
      className={`inline font-mono ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          {/* Agregamos el espacio entre palabras al final de cada bloque */}
          {wordIndex < words.length - 1 && (
            <motion.span variants={letterVariants} className="inline-block">
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
    </motion.div>
  );
}