import { Html } from "@react-three/drei";
// import UseAiVoice from "../voices/UseAiVoice";
import TerminalScene from "../Escenas3D/Terminal";
import TerminalWindow from "../Escenas3D/TerminalWindow";
import Spinning from "../Escenas3D/Spinning";
import { useState } from "react";
import NavItem from "../Escenas3D/Nav";
import { useSectionContext } from "../context/UseSectionContext";
import AboutMe from "../windowsFloating/AboutMe";
import { ScrollRevealLine } from "../Escenas3D/Scroll";
import Abilities from "../windowsFloating/Abilities";

export default function Home() {
  const [command, setCommand] = useState("");
  const { modalesAbiertos, cerrarModal } = useSectionContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
    console.log(e.target.value);
  };

  return (
    <group>
      <Spinning />

      <Html fullscreen>
        <p className="text-emerald-400">
          Advertencia, la pagina sigue en mantenimiento por lo que que se pueden
          visualizar errores o falta de contenido.
        </p>
        {/* <UseAiVoice texto="Bienvenido de vuelta Jefe" delay={1000} />;
        <UseAiVoice
          texto="De tu lado izquierdo puedes ver los comandos disponibles o si lo prefieres puedes clickear cada uno y automaticamente se te abrira una nueva ventana con la informacion extraida"
          delay={3000}
        />
        <UseAiVoice
          texto="Si quieres tener una experiencia interactiva te recomiendo usar la terminal, solo escribe el comando y presiona enter al finalizar"
          delay={13000}
        /> */}
        <TerminalWindow
          id="SOBRE_MI"
          title="Sobre Mí"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <AboutMe />
        </TerminalWindow>
        <TerminalWindow
          id="HABILIDADES"
          title="Habilidades"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <Abilities />
        </TerminalWindow>
        <TerminalWindow
          id="EXPERIENCIA"
          title="Sobre Mí"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <div>Contenido de Experiencia...</div>
        </TerminalWindow>
        <TerminalWindow
          id="PROYECTOS"
          title="Sobre Mí"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <div>Contenido de Proyectos...</div>
        </TerminalWindow>
        <TerminalWindow
          id="CONTACTO"
          title="Sobre Mí"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <div>Contenido de Contacto...</div>
        </TerminalWindow>
        <TerminalWindow
          id="TERMINAL"
          title="TERMINAL"
          modales={modalesAbiertos}
          onClose={cerrarModal}
        >
          <ScrollRevealLine>
            <TerminalScene text={command} onChange={handleChange} />
          </ScrollRevealLine>
        </TerminalWindow>
      </Html>

      <NavItem id="SOBRE_MI" text="SOBRE_MI" position={[0, 3, 0]} />
      <NavItem id="HABILIDADES" text="HABILIDADES" position={[4, 1.5, 0]} />
      <NavItem id="EXPERIENCIA" text="EXPERIENCIA" position={[-4, 1.5, 0]} />
      <NavItem id="PROYECTOS" text="PROYECTOS" position={[-4, -1.5, 0]} />
      <NavItem id="CONTACTO" text="CONTACTO" position={[4, -1.5, 0]} />
      <NavItem id="TERMINAL" text="TERMINAL" position={[0, -3, 0]} />
    </group>
  );
}
