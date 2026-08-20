import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Center } from "@react-three/drei";
import { DataParticles } from "./Particles";

// 💡 Agregamos la prop onComplete para notificar el fin de la carga
interface LoaderProps {
  onComplete?: () => void;
}

export default function HackingLoader3D({ onComplete }: LoaderProps) {
  const [progreso, setProgreso] = useState(0);
  const [consola, setConsola] = useState("INIT_DATA_EXTRACTION...");

  const logs = [
    "BYPASSING_SECURITY...",
    "EXTRACTING_PACKETS...",
    "DECRYPTING_HASHES...",
    "DOWNLOADING_ASSETS...",
    "INTRUSION_SUCCESSFUL",
  ];

  useEffect(() => {
    if (progreso < 100) {
      const incremental = setTimeout(() => {
        setProgreso((prev) => {
          const siguiente = prev + 1;
          const index = Math.min(Math.floor(siguiente / 20), logs.length - 1);
          setConsola(logs[index]);
          return siguiente;
        });
      }, 30); // Un toque más rápido para no desesperar al usuario
      return () => clearTimeout(incremental);
    } else {
      // 💡 Cuando llega a 100, si existe la función, la ejecutamos
      if (onComplete) onComplete();
    }
  }, [progreso]);

  return (
    <div className="relative w-full h-75 bg-black rounded border border-emerald-500/25 overflow-hidden font-mono">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <DataParticles progreso={progreso} />
        <Center position={[0, 0, 0]}>
          <Text
            fontSize={0.6}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
          >
            {`${progreso}%`}
          </Text>
        </Center>
      </Canvas>
      <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] text-emerald-500 bg-black/80 p-1 border border-emerald-500/10 backdrop-blur-sm">
        <span className="animate-pulse">{`> ${consola}`}</span>
      </div>
    </div>
  );
}
