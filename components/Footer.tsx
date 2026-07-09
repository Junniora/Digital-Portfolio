import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/40 py-8 mt-12 backdrop-blur-md">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-500 font-light select-none">
          {/* Copyright */}
          <div>
            <p>© {currentYear} Ángel Álvarez. Diseñado y construido con Next.js & Tailwind CSS.</p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300">
              Sobre mí
            </a>
            <a href="#experience" className="hover:text-purple-400 transition-colors duration-300">
              Experiencia
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">
              Proyectos
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
