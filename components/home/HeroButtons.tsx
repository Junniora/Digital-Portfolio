import Button from "../ui/Button";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Button href="#projects" variant="primary">
        <span>Ver proyectos</span>
        <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      <Button
        href="/cv.pdf"
        variant="secondary"
        external
      >
        <FiDownload className="text-lg" />
        <span>Descargar CV</span>
      </Button>
    </div>
  );
}