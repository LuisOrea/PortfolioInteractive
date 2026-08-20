import { Canvas } from "@react-three/fiber";
    import { Outlet } from "react-router";

export default function SharedCanvasLayout() {
  return (
    <div className="h-screen w-screen relative bg-black">
      {/* El Canvas es único y global. No se desmontará al cambiar de ruta */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />


        <Outlet />
      </Canvas>
    </div>
  );
}
