"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import { FiCalendar, FiBriefcase } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Lead Developer (Proyecto Integrador)",
    company: "Go Digital",
    period: "Agosto 2025 - Diciembre 2025",
    description:
      "Lideré un equipo de desarrollo estudiantil para diseñar y desplegar una plataforma web personalizada orientada a digitalizar operaciones de aprobación de servicios manuales.",
    achievements: [
      "Se eliminó el uso de papel en un 100% para procesos de aprobación operativa",
      "Diseño de base de datos PostgreSQL optimizada para transacciones recurrentes",
      "Reducción demostrada de 4 horas semanales de trabajo operativo por administrador"
    ],
    technologies: ["Vue.js", "Quasar", "TypeScript", "PostgreSQL", "Node.js", "Git"]
  },
  {
    role: "Desarrollador Full Stack Freelance",
    company: "Proyectos Independientes",
    period: "Enero 2024 - Presente",
    description:
      "Construcción de soluciones de software a medida para pymes y particulares, priorizando la velocidad de carga, responsividad y buenas prácticas de SEO.",
    achievements: [
      "Despliegue y configuración de arquitecturas serverless en Vercel y Netlify",
      "Modelado de bases de datos relacionales y no relacionales eficientes",
      "Implementación de layouts de interfaz dinámicos con Tailwind CSS y Framer Motion"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Supabase", "Prisma"]
  },
  {
    role: "Estudiante de Ingeniería de Software",
    company: "Universidad / Proyectos de Ingeniería",
    period: "Agosto 2023 - Presente",
    description:
      "Formación académica en ciencias de la computación, desarrollo de software ágil, estructuras de datos avanzadas e ingeniería de requisitos.",
    achievements: [
      "Desarrollo de proyectos académicos robustos en C++, Python y Java",
      "Colaboración activa en proyectos grupales bajo metodologías SCRUM",
      "Estudio profundo de patrones de diseño de software y principios SOLID"
    ],
    technologies: ["TypeScript", "C++", "Python", "SQL", "Git", "Scrum"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow de fondo decorativo */}
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[130px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Trayectoria"
          title="Mi experiencia y crecimiento"
          subtitle="Un recorrido cronológico a través de mis proyectos académicos, colaboraciones y mi formación como ingeniero de software."
        />

        {/* Línea de tiempo vertical */}
        <div className="relative border-l border-purple-500/20 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Punto indicador de la línea de tiempo */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
              </span>

              <Card className="hoverEffect={true} border-purple-500/5">
                {/* Encabezado de la Tarjeta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <FiBriefcase className="text-purple-400 shrink-0 text-base md:text-lg" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 shrink-0">
                    <FiCalendar className="text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Descripción general */}
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Logros (Bullet points premium) */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Logros Clave
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tecnologías utilizadas */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <Tag key={tIdx} variant="slate">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
