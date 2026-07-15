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
          badge="About me"
          title="Building Software That Makes a Difference"
          subtitle="Get to know my academic journey and my passion for software development and enterprise automation."
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
              I am a student of <strong className="text-white font-medium">Software Technologies Engineering</strong> with a strong passion for solving logical problems and building practical software solutions.
            </p>
            <p>
              My interests focus on <strong className="text-purple-300 font-medium">web application development</strong> and <strong className="text-white font-medium">digital transformation</strong>. I enjoy analyzing manual business processes and exploring how technology can simplify, automate, and improve them through intuitive and efficient software.
            </p>
            <p>
              Throughout my academic projects and internship experience, I have worked with modern web technologies while continuously expanding my knowledge of software development best practices. I am eager to keep learning, collaborate with experienced development teams, and contribute to building high-quality software that creates real value.
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
                  <h3 className="font-bold text-white text-base md:text-lg">Academic Background</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    Software Engineering student at the <strong className="text-white font-medium">Facultad de Ingeniería Mecánica y Eléctrica (FIME), Universidad Autónoma de Nuevo León (UANL). </strong>, with a focus on web development and enterprise automation.
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
                  <h3 className="font-bold text-white text-base md:text-lg">Areas of Interest</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    Interested in web application development, business process automation, and digital transformation. Passionate about learning modern technologies and building practical software solutions that improve efficiency and solve real-world problems.
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
                  <h3 className="font-bold text-white text-base md:text-lg">Work Approach</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    I enjoy approaching challenges with a logical and problem-solving mindset. I value writing clean, maintainable code, continuously learning new technologies, and creating applications that prioritize usability, performance, and scalability.
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
