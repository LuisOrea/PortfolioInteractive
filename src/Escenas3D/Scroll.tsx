import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealLineProps {
  children: ReactNode;
  className?: string;
}

const hackScrollVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    skewX: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: {
      duration: 0.3,
      // 💡 Dejamos solo la string limpia y la casteamos como 'any' para evitar que falle con las transiciones estrictas de TS
      ease: "easeOut" as any,
    },
  },
};

export function ScrollRevealLine({
  children,
  className = "",
}: ScrollRevealLineProps) {
  return (
    <motion.div
      variants={hackScrollVariants}
      initial="hidden"
      whileInView="visible" // 💡 Aquí ocurre la magia del scroll
      viewport={{
        once: true, // Para que solo se ejecute la primera vez que bajas
        amount: 0.3, // Se dispara cuando el 30% del elemento es visible
      }}
      className={`font-mono ${className}`}
    >
      {children}
    </motion.div>
  );
}
