import Container from "../Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 
        FONDO DECORATIVO DE ALTA CALIDAD (Grid + Glows)
        - bg-grid: Cuadrícula sutil creada en globals.css
        - mask-radial-fade: Difumina la cuadrícula hacia los bordes
        - absolute + -z-10: Mantiene los elementos detrás del contenido
      */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Rejilla de fondo */}
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />
        
        {/* Glow Superior Izquierdo (Pulsante e interactivo) */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-slow" />
        
        {/* Glow Central/Derecho */}
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: "-3s" }} />

        {/* Glow Inferior Izquierdo */}
        <div className="absolute -bottom-40 left-10 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: "-6s" }} />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Contenido (Textos + Botones) ocupa 7 columnas en desktop */}
          <div className="lg:col-span-7 z-10">
            <HeroContent />
          </div>
          
          {/* Imagen (Tarjeta Glassmorphic) ocupa 5 columnas en desktop */}
          <div className="lg:col-span-5 z-10 flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}