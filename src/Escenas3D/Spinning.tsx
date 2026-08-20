import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Spinning() {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.3, 160, 16]} />
      <meshStandardMaterial color="green" wireframe />
    </mesh>
  );
}
