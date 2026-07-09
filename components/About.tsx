"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { FiBookOpen, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function About() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Halo de luz decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Sobre mí"
          title="Transformando ideas en código eficiente"
          subtitle="Conoce mi trayectoria académica y mi pasión por el desarrollo de software y la automatización empresarial."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: Texto Narrativo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-7 space-y-6 text-gray-400 font-light leading-relaxed text-base md:text-lg"
          >
            <p>
              Soy estudiante de <strong className="text-white font-medium">Ingeniería en Tecnologías de Software</strong> con una profunda pasión por la resolución de problemas lógicos y la creación de arquitecturas de software eficientes.
            </p>
            <p>
              Mi enfoque profesional se centra en la <strong className="text-purple-300 font-medium">transformación digital</strong> y el desarrollo <strong className="text-white font-medium">Full Stack</strong>. Me apasiona analizar procesos operativos manuales y rediseñarlos mediante aplicaciones web robustas que no solo funcionan, sino que optimizan y escalan el negocio.
            </p>
            <p>
              Creo firmemente en escribir código limpio, documentado y autodocumentado, siguiendo principios como SOLID y DRY. Mi objetivo es integrarme a equipos de alto rendimiento donde pueda aportar valor inmediato mientras continúo absorbiendo estándares de ingeniería de primer nivel.
            </p>
          </motion.div>

          {/* Columna Derecha: Tarjetas de Enfoque/Métricas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {/* Tarjeta 1: Educación */}
            <motion.div variants={cardVariants}>
              <Card className="flex gap-4 items-start border-purple-500/10">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FiBookOpen className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Formación Académica</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    Estudiante de Ingeniería en Tecnologías de Software. Fuerte base en algoritmos, bases de datos y patrones de diseño.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Tarjeta 2: Enfoque */}
            <motion.div variants={cardVariants}>
              <Card className="flex gap-4 items-start border-indigo-500/10">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FiCpu className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Especialización</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    Creación de aplicaciones web dinámicas de extremo a extremo, automatización de scripts y diseño de API eficientes.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Tarjeta 3: Metodología */}
            <motion.div variants={cardVariants}>
              <Card className="flex gap-4 items-start border-fuchsia-500/10">
                <div className="p-3 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400">
                  <FiTrendingUp className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Metodología de Trabajo</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    Enfoque pragmático orientado a resultados, priorizando siempre la experiencia de usuario (UX) y el rendimiento óptimo del código.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
