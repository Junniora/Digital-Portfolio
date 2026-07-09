"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaGitAlt, FaHSquare, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript, SiTailwindcss, SiPython } from "react-icons/si";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import { FaHtml5 } from "react-icons/fa6";

export default function HeroImage() {
  // Estado para rastrear las coordenadas del cursor dentro de la tarjeta
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Manejar el movimiento del mouse para calcular la posición relativa del cursor (efecto spotlight)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative"
    >
      {/* 
        Efecto de flotación envuelto en un contenedor hijo para evitar conflictos
        con la animación de entrada (Framer Motion best practice)
      */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        {/* Glow de fondo interactivo que reacciona al hover */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 -z-10" />

        <Card className="relative overflow-hidden w-[310px] md:w-[360px] border border-white/10 select-none">
          {/* Spotlight overlay: Sigue al cursor del mouse dentro de la tarjeta */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
            style={{
              background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(168, 85, 247, 0.12), transparent 80%)`,
            }}
          />

          {/* Contenedor de la Fotografía con un marco sutil */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950">
            <Image
              src="/images/yo.jpg"
              alt="Ángel Álvarez - Software Engineer"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 310px, 360px"
              priority
            />
          </div>

          <div className="mt-5">
            {/* Metadatos o información complementaria */}
            <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/5 pb-3 mb-4">
              <span>Located in Mexico</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Software Engineering
              </span>
            </div>

            {/* Subtítulo del stack */}
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Core Technologies
            </h4>

            {/* Contenedor Flex Wrap alineado y responsivo */}
            <div className="flex flex-wrap gap-2">
              <Tag variant="blue">
                <FaReact className="text-sm" />
                <span>React</span>
              </Tag>
              <Tag variant="cyan">
                <SiNextdotjs className="text-sm" />
                <span>Next.js</span>
              </Tag>
              <Tag variant="purple">
                <SiTypescript className="text-sm" />
                <span>TypeScript</span>
              </Tag>
              <Tag variant="blue">
                <SiPython className="text-sm" />
                <span>Python</span>
              </Tag>
              <Tag variant="slate">
                <SiPostgresql className="text-sm" />
                <span>PostgreSQL</span>
              </Tag>
              <Tag variant="slate">
                <FaGitAlt className="text-sm" />
                <span>Git</span>
              </Tag>
              <Tag variant="red">
                <FaHtml5 className="text-sm" />
                <span>HTML</span>
              </Tag>
              <Tag variant="blue">
                <FaCss3Alt className="text-sm" />
                <span>CSS</span>
              </Tag>
              <Tag variant="yellow">
                <FaJs className="text-sm" />
                <span>JavaScript</span>
              </Tag>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}