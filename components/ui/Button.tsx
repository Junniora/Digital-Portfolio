"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

// Versiones animadas de componentes
const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;
const MotionButton = motion.button;

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  // 1. CLASES BASE (Alineación flex, tipografía limpia, transiciones suaves y rounded-full estilo Apple)
  const baseStyles = `
    relative group overflow-hidden
    inline-flex items-center justify-center gap-2 
    rounded-full px-6 py-2.5 
    font-medium text-sm md:text-base select-none
    transition-all duration-500 ease-out cursor-pointer 
    focus:outline-none focus:ring-2 focus:ring-purple-500/40
  `;

  // 2. ESTILOS GLASSMORPHISM ESTILO APPLE
  // - primary: Glassmorphism morado saturado con brillo interno
  // - secondary: Glassmorphism blanco translúcido puro (frosted glass) con borde fino
  // - outline: Vidrio transparente con borde reactivo
  const variantStyles = {
    primary: `
      bg-purple-600/75 hover:bg-purple-500/80 
      backdrop-blur-md 
      border border-purple-400/30 hover:border-purple-300/40
      text-white 
      shadow-[0_8px_16px_rgba(109,40,217,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]
      hover:shadow-[0_12px_24px_rgba(109,40,217,0.35),inset_0_1px_2px_rgba(255,255,255,0.3)]
    `,
    secondary: `
      bg-white/5 hover:bg-white/10 
      backdrop-blur-lg 
      border border-white/10 hover:border-white/20 
      text-white 
      shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.05)]
      hover:shadow-[0_12px_24px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.1)]
    `,
    outline: `
      bg-transparent hover:bg-white/5 
      border border-white/10 hover:border-white/25 
      text-gray-300 hover:text-white
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]
    `,
  };

  // 3. ANIMACIONES ESTILO APPLE (Spring de respuesta lenta y orgánica, feedback elástico en click)
  const animationProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 220, damping: 18 },
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Elemento de reflejo interno para dar sensación tridimensional de cristal
  const GlassOverlay = () => (
    <>
      {/* Reflejo de brillo superior (Gloss highlight) */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/12 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      {/* Reflejo de brillo interactivo en hover (Gloss flash) */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Destello de luz diagonal que viaja por el botón (Shimmer) */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
    </>
  );

  // Caso 1: Enlace externo
  if (href && (external || href.startsWith("http") || href.endsWith(".pdf"))) {
    return (
      <MotionAnchor
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...animationProps}
      >
        <GlassOverlay />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </MotionAnchor>
    );
  }

  // Caso 2: Enlace interno
  if (href) {
    return (
      <MotionLink
        href={href}
        className={combinedClasses}
        {...animationProps}
      >
        <GlassOverlay />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </MotionLink>
    );
  }

  // Caso 3: Botón estándar
  return (
    <MotionButton
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...animationProps}
    >
      <GlassOverlay />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionButton>
  );
}