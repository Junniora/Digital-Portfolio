"use client";

import { motion, Variants } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  // Variantes del contenedor principal para escalonar las animaciones de los hijos
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Retraso entre la animación de cada elemento hijo
        delayChildren: 0.1,
      },
    },
  };

  // Variantes para cada elemento individual
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };


  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left"
    >
      {/* Badge de disponibilidad premium con punto verde parpadeante */}
      <motion.div 
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-semibold text-purple-300 backdrop-blur-md mb-6 hover:border-purple-400/30 transition-all duration-300"
      >
        <span className="relative flex h-2 w-2">
          {/* Efecto radar del punto verde */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Available for internships and job opportunities
      </motion.div>

      {/* Título Principal con Gradiente Texturado */}
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
      >
        Ángel
        <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">
          Álvarez
        </span>
      </motion.h1>

      {/* Subtítulo Profesional */}
      <motion.h2 
        variants={itemVariants}
        className="mt-6 text-xl md:text-2xl font-semibold text-gray-300/90 leading-relaxed"
      >
        Software Engineering Student
        <span className="block text-gray-400 font-normal text-lg md:text-xl mt-1">
          Software Developer | Web Development & Digital Transformation
        </span>
      </motion.h2>

      {/* Descripción Breve y Persuasiva */}
      <motion.p 
        variants={itemVariants}
        className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-gray-400 font-light"
      >
        Software Engineering student passionate about developing software solutions that automate processes and solve real-world business challenges. My experience includes web development, process digitalization, automation, and internal business applications, with a strong focus on creating practical and scalable solutions.
      </motion.p>

      {/* Botones de acción del Hero */}
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}