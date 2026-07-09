"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className={`flex flex-col items-start gap-3 mb-16 ${className}`}
    >
      {/* Badge morado decorativo */}
      {badge && (
        <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-semibold text-purple-300 tracking-wide uppercase">
          {badge}
        </span>
      )}

      {/* Título de la Sección */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {/* Línea decorativa degradada */}
      <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />

      {/* Subtítulo descriptivo */}
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-gray-400 font-light mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
