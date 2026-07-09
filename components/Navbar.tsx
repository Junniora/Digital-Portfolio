import Container from "./Container";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          {/* Logo / Nombre */}
          <a 
            href="#" 
            className="font-bold text-lg tracking-tight text-white hover:text-purple-400 transition-colors duration-300"
          >
            Ángel Álvarez
          </a>

          {/* Links de Navegación (Desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-300">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition-colors duration-300">
                Experiencia
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-300">
                Contacto
              </a>
            </li>
          </ul>

          {/* Botones de Acción (GitHub) */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Junniora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}