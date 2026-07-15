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
    role: "Quality Digitalization Intern",
    company: "Denso México",
    period: "November 2025 - June 2026",
    description:
      "As a Quality Digitalization Intern, I collaborated with the Quality Planning team to support digital transformation initiatives by developing software solutions that replaced manual processes with digital workflows. During my internship, I gained hands-on experience in web development, low-code platforms, database management, industrial data visualization, and process analysis while working closely with engineers and end users to design solutions that improved operational efficiency.",
    achievements: [
      "Developed responsive web applications using Vue.js, Quasar Framework, TypeScript, JavaScript, HTML, and CSS to digitize internal business processes.",
      "Automated workflows with Microsoft Power Apps and SharePoint Lists, reducing manual tasks and improving process efficiency.",
      "Designed and maintained Domo dashboards using manufacturing data from PLC systems for real-time production monitoring and reporting.",
      "Built applications with the Arduino IDE to collect data from robotic systems and implement robot head movement control for digitalization projects.",
      "Worked alongside the Quality Assurance and Quality Planning teams to deliver software solutions that supported the department's digital transformation."
    ],
    technologies: ["Vue.js", "Quasar", "CSS", "TypeScript", "PostgreSQL", "Node.js", "Git", "Domo", "Microsoft Power Apps", "Arduino IDE"]
  },
  {
    role: "Freelancer Software Developer",
    company: "Local stationery store (Alyca)",
    period: "March 2026 - April 2026",
    description:
      "Alyca is a desktop application developed for a local stationery store to simplify daily business operations. The system provides inventory management, a point-of-sale (POS) interface, automatic change calculation during sales, and sales reporting. It was built with Vue.js, Electron, and SQLite, allowing the application to run as a lightweight desktop solution without requiring an internet connection.",
    achievements: [
      "Developed sales reports to help monitor daily business performance.",
      "Integrated a local SQLite database for reliable offline data storage..",
      "Created an intuitive and user-friendly interface focused on improving the store's daily workflow."
    ],
    technologies: ["Vue.JS", "Electron", "SQLite"]
  },
  {
    role: "Software Engineering student",
    company: "Facultad de Ingeniería Mecánica y Eléctrica (FIME)",
    period: "August 2022 - Present",
    description:
      "As a Software Engineering student at FIME, I have been actively involved in various academic projects and collaborative initiatives. My coursework has provided me with a strong foundation in programming languages, software development methodologies, and design principles. I have also participated in group projects that emphasize teamwork, problem-solving, and the application of theoretical knowledge to practical scenarios.",
    achievements: [
      "Web development projects using HTML, CSS, JavaScript",
      "Arduino projects for hardware control and automation",
      "Algorithm design and implementation in Python",
    ],
    technologies: ["Python", "C++", "SQLite", "HTML5", "CSS3", "JavaScript", "Arduino IDE"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow de fondo decorativo */}
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[130px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Career"
          title="My experience and growth"
          subtitle="A chronological journey through my academic projects, collaborations, and software engineering education."
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
                    Key Achievements
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
