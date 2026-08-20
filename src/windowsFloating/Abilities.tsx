import { TerminalContainer } from "../Escenas3D/TerminalContainerEffect";
import { TypewriterLine } from "../Escenas3D/TypeWritter";

export default function Abilities() {
  return (
    <TerminalContainer>
      <TypewriterLine text="Dentro de mis habilidades destacan las siguientes herramientas:" />

      <div className="mt-2.5">
        <TypewriterLine text="Lenguajes" />
        <div className="flex justify-around mt-3.5">
          <span className="text-center">
            <img
              src="/public/languajes/js-logo.png"
              alt="js-logo"
              width={100}
            />
            <TypewriterLine text="JavaScript" />
          </span>
          <span className="text-center">
            <img
              src="/public/languajes/java-logo.png"
              alt="java-logo"
              width={100}
            />
            <TypewriterLine text="Java" />
          </span>
          <span className="text-center">
            <img
              src="/public/languajes/py-logo.png"
              alt="py-logo"
              width={100}
            />
            <TypewriterLine text="Python" />
          </span>
          <span className="text-center">
            <img src="/public/languajes/c-logo.png" alt="c-logo" width={90} />
            <TypewriterLine text="C++" />
          </span>
          <span className="text-center">
            <img src="/public/languajes/ts-logo.png" alt="c-logo" width={100} />
            <TypewriterLine text="TypeScript+" />
          </span>
        </div>
      </div>

      <div className="mt-3.5">
        <TypewriterLine text="FrameWorks" />
        <div>
          <span>hola</span>
        </div>
      </div>
    </TerminalContainer>
  );
}
