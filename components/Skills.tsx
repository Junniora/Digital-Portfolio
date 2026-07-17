"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { 
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPython, FaJs, FaChartBar, FaGithub, FaMicrosoft 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, 
  SiMongodb, SiPrisma, SiSupabase, SiDocker, SiCplusplus, 
  SiExpress, SiVuedotjs, SiQuasar, SiFirebase, SiSqlite, SiJavascript, SiKotlin, SiArduino,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400 text-lg" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-lg" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 text-lg" /> },
        { name: "Quasar", icon: <SiQuasar className="text-cyan-400 text-lg" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-lg" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-lg" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-lg" /> }
      ]
    },

    {
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-lg" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-lg" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-lg" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600 text-lg" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-orange-500 text-lg" /> }
      ]
    },

    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-lg" /> },
        { name: "SQLite", icon: <SiSqlite className="text-cyan-400 text-lg" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-lg" /> },
        { name: "SharePoint Lists", icon: <FaMicrosoft className="text-green-500 text-lg" /> }
      ]
    },

    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-lg" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-lg" /> },
        { name: "Power Apps", icon: <FaMicrosoft className="text-blue-500 text-lg" /> },
        { name: "Domo", icon: <FaChartBar className="text-indigo-500 text-lg" /> },
        { name: "Arduino IDE", icon: <SiArduino className="text-cyan-500 text-lg" /> }
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow decorativo de fondo */}
      <div className="absolute top-1/2 left-2/3 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Skills"
          title="Technical Skills"
          subtitle="An overview of the programming languages, frameworks, and tools I use to design and develop software solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card className="h-full border border-white/5 bg-slate-950/40 relative group overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                </h3>

                {/* Grid de habilidades dentro de la categoría */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300 group/item cursor-default"
                    >
                      <div className="shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 font-light group-hover/item:text-white transition-colors duration-300 select-none">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
