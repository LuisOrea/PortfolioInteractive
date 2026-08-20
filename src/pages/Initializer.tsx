import Logo from "../Escenas3D/Logo";
import { Suspense, useRef, useState } from "react";
import { PositionalAudio, Html } from "@react-three/drei";
import UseAiVoice from "../voices/UseAiVoice";
import { useNavigate } from "react-router";

export default function Initalizer() {
  const audioRef = useRef<any>(null);
  const [flag, setFlag] = useState<any>(Boolean);
  const navigate = useNavigate();

  const handleClick = () => {
    setFlag(true);
    const audio = audioRef.current;
    if (audio?.buffer) {
      if (audio.isPlaying) audio.stop();
      audio.play();
    }

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  return (
    <group position={[0, 0, 0]}>
      <Suspense fallback={null}>
        <Logo />
      </Suspense>
      <Html position={[0, -1, 0]} center>
        <div className=" text-green-950">
          <button
            className="bg-green-500 text-2xl w-50 border border-t-4 border-t-green-600 border-r-4 border-r-green-700 cursor-pointer active:border-t-green-500 active:border-r-green-500"
            onClick={handleClick}
          >
            Initializer
          </button>
        </div>
      </Html>
      <Suspense fallback={null}>
        <PositionalAudio url="/click.mp3" ref={audioRef} loop={false} />
      </Suspense>
      {flag && (
        <UseAiVoice texto="Conectando con los servidores" delay={500} />
      )}
    </group>
  );
}
