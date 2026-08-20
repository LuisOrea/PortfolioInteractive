import { GithubIcon } from "../componentes/GitHub";
import { InstagramIcon } from "../componentes/Instagram";
import { LinkedinIcon } from "../componentes/Linkedin";
import { TerminalContainer } from "../Escenas3D/TerminalContainerEffect";
import { TerminalLine } from "../Escenas3D/TerminalLineEffecto";
import { TypewriterLine } from "../Escenas3D/TypeWritter";

export default function AboutMe() {
  return (
    // 💡 Envuelves todo en el contenedor que controla la velocidad de la cascada
    <TerminalContainer staggerDelay={0.4}>
      {/* Línea 1: Foto y Datos principales */}
      <div className="flex flex-col ">
        <TerminalLine className="flex gap-5">
          <div>
            <img
              src="/Yo.png"
              alt="mi-foto"
              width={200}
              className="border border-emerald-500/20 rounded grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-y-4 ">
            <TypewriterLine text="Nombre: Luis Adrian Martinez Orea" />
            <TypewriterLine text="Alias: Im_Wiicho" />
            <TypewriterLine text="Edad: 26 años" />
            <TypewriterLine text="Nacionalidad: Mexicana" />
            <TypewriterLine text="Redes Sociales:" />
            <div className="flex gap-4">
              {" "}
              <a
                href="https://github.com/LuisOrea"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-adrian-martinez-orea"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/lm_wiicho"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </TerminalLine>
      </div>

      <div className="text-[15px] text-justify">
        {/* Línea 4: Descripción */}
        <TerminalLine className="mt-6 border-t border-emerald-500/10 pt-4">
          <TypewriterLine text="Descripción: Desarrollador FullStack con mas de tres años escribiendo codigo, obsesionado con la creacion de ideas novedosas." />
        </TerminalLine>
        <TerminalLine className="mt-2.5">
          <TypewriterLine
            className="text-zinc-400 text-xs italic"
            text="* La curiosidad por saber como funciona una videojuego por dentro fue lo que desperto mi interes en la programacion."
          />
        </TerminalLine>
        <TerminalLine className="mt-2.5">
          <TypewriterLine text="Antes de dedicarme a esto de lleno, solo era alguien interesado en lo visual: los dibujos, la animación y los colores; pero la intriga de saber quién estaba detrás de cada juego encendió mi pasión por el código." />
        </TerminalLine>
        <TerminalLine className="mt-2.5">
          <TypewriterLine text="Inicié mi carrera como desarrollador FullStack en el mundo freelance. Tuve tropiezos, pero eso me ayudó a mejorar y mantener un código limpio. Después, decidí continuar en el ámbito corporativo como FrontEnd, lo que me permitió entender la estructura interna de una empresa y la escala de su código. He colaborado para instituciones importantes como BBVA y la SEMAR (Secretaria de Marina), lo cual respalda mi experiencia profesional." />
        </TerminalLine>
        <TerminalLine className="mt-2.5">
          <TypewriterLine text="Actualmente, me considero un FullStack con la versatilidad de adaptarme a cualquier lenguaje o tecnología." />
        </TerminalLine>
        <TerminalLine className="mt-2.5">
          <TypewriterLine text="Hobbies: Me encantan los deportes, especialmente el básquetbol, por lo que sé lo que significa el trabajo en equipo. Disfruto leer libros tanto en español como en inglés, lo que hace que revisar documentación técnica sea algo natural para mí. Pero lo que más me apasiona es estar al aire libre: explorar, conocer nuevos lugares y descubrir cosas nuevas en el camino, por lo que la adaptabilidad a cualquier entorno laboral es una de mis mayores fortalezas." />
        </TerminalLine>
        <TerminalLine>
          <TypewriterLine text="Soy una persona capaz de enfrentar retos difíciles llenos de lógica, transformando problemas complejos en soluciones limpias y funcionales." />
        </TerminalLine>
      </div>
    </TerminalContainer>
  );
}
