"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow decorativo de fondo */}
      <div className="absolute top-1/3 left-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Projects"
          title="Work that speaks for itself"
          subtitle="A selection of software systems designed and deployed end-to-end, focused on solving practical problems and delivering value."
        />

        {/* Grid de Proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Card className="flex flex-col h-full border border-white/5 bg-slate-950/40 relative overflow-hidden group">
                {/* Glow interno en las esquinas en hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div className="flex-grow">
                  {/* Rol y Fecha */}
                  <div className="flex items-center justify-between text-xs text-purple-300 font-semibold mb-3">
                    <span>{project.role}</span>
                    <span className="text-gray-500 font-light">{project.date}</span>
                  </div>

                  {/* Nombre del Proyecto */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Descripción corta */}
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Tag key={tech} variant="slate" className="text-xs py-0.5 px-2">
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-gray-500 self-center font-medium">
                        +{project.technologies.length - 4} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Acciones y Links */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <Button
                    href={`/projects/${project.slug}`}
                    variant="secondary"
                    className="w-full text-xs md:text-sm py-2"
                  >
                    <span>Caso de estudio</span>
                  </Button>

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 text-sm shrink-0"
                      aria-label="Ver código en GitHub"
                    >
                      <FiGithub />
                    </a>
                  )}

                  {/* Deploy Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 text-sm shrink-0"
                      aria-label="Ver sitio en vivo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
