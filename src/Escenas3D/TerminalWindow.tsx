import { useEffect, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Terminal, Minus, Square, X } from "lucide-react";
import HackingLoader3D from "./HackingLoader";

interface TerminalWindowProps {
  readonly id: string;
  readonly title?: string;
  readonly children: React.ReactNode;
  readonly onClose: (id: string) => void;
  readonly modales: Record<string, boolean>;
}

export default function TerminalWindow({
  id,
  title = "guest@iw-os:~",
  children,
  onClose,
  modales,
}: TerminalWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  // 1. Inicializamos los controles de arrastre nativos de Framer Motion
  const dragControls = useDragControls();
  const [isExtracting, setIsExtracting] = useState(true);
  const isOpen = !!modales[id];

  useEffect(() => {
    if (!isOpen) {
      setIsExtracting(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      // 2. Le pasamos los controles a la ventana
      dragControls={dragControls}
      // 3. Desactivamos el arrastre al hacer click en cualquier parte de la ventana...
      dragListener={false}
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 500,
        bottom: window.innerHeight - 200,
      }}
      dragMomentum={false}
      initial={{ opacity: 1, scale: 0.9, x: 100, y: 100 }}
      animate={
        isMinimized
          ? { height: "40px", y: "85vh" }
          : { opacity: 1, scale: 1, height: "auto" }
      }
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute w-full max-w-3xl bg-zinc-950 border border-emerald-500/30 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.1)] overflow-hidden pointer-events-auto"
    >
      {/* Barra superior (Header) */}
      <div
        // 4. ...y activamos el arrastre SOLAMENTE cuando el puntero interactúe con este Header
        onPointerDown={(e) => dragControls.start(e)}
        className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-emerald-500/20 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
          <Terminal size={16} />
          <span>{title}</span>
        </div>

        {/* Botones estilo OS */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <Minus size={14} />
          </button>
          <button
            type="button"
            className="text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <Square size={12} />
          </button>
          <button
            type="button"
            onClick={() => onClose(id)}
            className="text-zinc-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      {/* Contenido de la Terminal */}
      <div className="p-4 font-mono text-emerald-400 text-sm overflow-y-auto max-h-112.5">
        {isExtracting ? (
          /* 💡 Si está extrayendo, inyectamos el Loader 3D dentro del modal */
          <HackingLoader3D onComplete={() => setIsExtracting(false)} />
        ) : (
          /* Al terminar el 100%, renderiza mágicamente lo que le mandaste en Home.tsx */
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {children}
          </motion.div>
        )}
      </div>
      )
    </motion.div>
  );
}
