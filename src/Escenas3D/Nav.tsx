import React, { useRef, useState } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { PositionalAudio, Text } from "@react-three/drei";
import * as THREE from "three";
import { useSectionContext } from "../context/UseSectionContext";
// import { SectionState } from '../types/navigation';

interface NavItemProps {
  readonly text: string;
  readonly position: [number, number, number];
  readonly id: string;
}

export interface SectionState {
  name: string;
  camPos: [number, number, number]; // Vector3 tuple para Three.js
}

export default function NavItem({
  text,
  id,
  position,
}: NavItemProps): React.JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  const { abrirModal } = useSectionContext();

  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.y =
        position[1] + Math.sin(t * 2 + position[1]) * 0.05;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>): void => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (): void => {
    setHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <mesh ref={textRef} position={position}>
      <Text
        onClick={() => abrirModal(id)}
        fontSize={0.3}
        color={hovered ? "#00ffff" : "#00ff00"}
        // Se asume el uso de materiales estándar internos de Drei para propiedades emissive
        // @ts-ignore - Algunas versiones de Drei requieren ignorar propiedades extendidas de texto plano
        emissive={hovered ? "#00ffff" : "#00ff00"}
        emissiveIntensity={hovered ? 2 : 0.5}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {hovered ? `> [ ${text} ]` : `> ${text}`}
      </Text>

      {hovered && (
        <PositionalAudio
          url="/hover-effect.mp3"
          loop={false}
          autoplay={true}
          setVolume={2.0}
        />
      )}
    </mesh>
  );
}
