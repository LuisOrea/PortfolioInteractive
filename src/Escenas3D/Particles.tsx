import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DataParticlesProps {
  progreso: number;
}

export function DataParticles({ progreso }: DataParticlesProps) {
  const puntosRef = useRef<THREE.Points>(null);
  const conteo = 150; // Cantidad de nodos de datos

  // Posiciones aleatorias iniciales distribuidas en el espacio
  const [posiciones] = useState(() => {
    const arr = new Float32Array(conteo * 3);
    for (let i = 0; i < conteo * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 6;
    }
    return arr;
  });

  useFrame((state) => {
    if (!puntosRef.current) return;

    const tiempo = state.clock.getElapsedTime();
    const posicionesActuales = puntosRef.current.geometry.attributes.position
      .array as Float32Array;

    // Rotación constante de la matriz de datos
    puntosRef.current.rotation.y = tiempo * 0.2;
    puntosRef.current.rotation.x = tiempo * 0.1;

    // Efecto de atracción: a mayor progreso, más se comprimen al centro (0,0,0)
    const factorAtraccion = 1 - progreso / 100;

    for (let i = 0; i < conteo; i++) {
      const i3 = i * 3;
      // Vibración de datos usando ruido senoidal
      const ruido = Math.sin(tiempo * 5 + i) * 0.02;

      posicionesActuales[i3] = posiciones[i3] * factorAtraccion + ruido;
      posicionesActuales[i3 + 1] = posiciones[i3 + 1] * factorAtraccion;
      posicionesActuales[i3 + 2] = posiciones[i3 + 2] * factorAtraccion + ruido;
    }

    puntosRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={puntosRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posiciones, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#10b981"
        size={0.08}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
