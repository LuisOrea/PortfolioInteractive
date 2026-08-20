import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface TerminalContainerProps {
  readonly children: ReactNode;
  readonly staggerDelay?: number; // Tiempo de espera entre líneas en segundos
  readonly className?: string;
}

const containerVariants = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  },
});

export function TerminalContainer({
  children,
  staggerDelay = 0.3,
  className = "",
}: TerminalContainerProps) {
  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      animate="visible"
      className={`font-mono text-emerald-400 selection:bg-emerald-500/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}
