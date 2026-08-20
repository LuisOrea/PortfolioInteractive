import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface TerminalLineProps {
  readonly children: ReactNode;
  readonly className?: string;
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export function TerminalLine({ children, className = "" }: TerminalLineProps) {
  return (
    <motion.div variants={lineVariants} className={className}>
      {children}
    </motion.div>
  );
}
