import "../assets/terminal.css";

interface props {
  readonly text: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TerminalScene({ text, onChange }: props) {
  return (
    <div className="terminal-container">
      <div className="crt-scanlines"></div>
      <div className="crt-screen-curve"></div>

      <div className="terminal-ui">
        <h1>SISTEMA OPERATIVO CENTRAL IW v1.0.4</h1>
        <p>Inicializando matriz de renderizado ASCII...</p>
        <p className="status-success">[OK] Núcleo 3D cargado.</p>

        {/* Línea de comando interactiva */}
        <div className="terminal-input-line">
          <span>C:\USER&gt;</span>
          <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder="Escribe un comando..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
