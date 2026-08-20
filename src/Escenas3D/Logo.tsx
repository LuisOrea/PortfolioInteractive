import { Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Logo() {
  const logoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!logoRef.current) return;

    const t = state.clock.getElapsedTime();

    logoRef.current.position.y = Math.sin(t * 1.5) * 0.04;
    logoRef.current.rotation.y = Math.sin(t * 0.65) * 0.3;
  });

  return (
    <Center ref={logoRef} position={[0.1, 10, 0.5]}>
      <Text3D
        font="/helvetiker.json"
        size={1}
        curveSegments={12}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.02}
      >
        IW
        <meshStandardMaterial
          color="green"
          wireframe={true}
          emissive="#22c55e"
          emissiveIntensity={0.5}
        />
      </Text3D>
    </Center>
  );
}
