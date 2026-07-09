import { Project } from "@/type";

export const projects: Project[] = [
  {
    slug: "go-digital",
    title: "Go Digital",
    role: "Full Stack Lead Developer",
    date: "2025",
    description: "Plataforma de transformación digital diseñada para automatizar flujos operativos, reduciendo tiempos administrativos en un 35%.",
    technologies: ["Vue.js", "Quasar", "TypeScript", "PostgreSQL", "Node.js"],
    results: [
      "Digitalización de 12 flujos de aprobación manuales",
      "Generación automática de reportes ejecutivos en PDF",
      "Base de datos optimizada para consultas de alta concurrencia"
    ],
    github: "https://github.com",
    link: "https://example.com"
  },
  {
    slug: "nova-erp",
    title: "Nova ERP",
    role: "Frontend Developer",
    date: "2026",
    description: "Sistema de planificación de recursos para control de inventarios, facturación y análisis predictivo de ventas de alto rendimiento.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Prisma"],
    results: [
      "Diseño de Dashboard interactivo con gráficos en tiempo real",
      "Sincronización multi-sucursal de stock en milisegundos",
      "Facturación electrónica integrada mediante API de terceros"
    ],
    github: "https://github.com",
    link: "https://example.com"
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    role: "Full Stack Developer",
    date: "2026",
    description: "Gestor colaborativo de tareas basado en tableros Kanban interactivos, con actualizaciones en tiempo real y diseño minimalista.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    results: [
      "Colaboración simultánea entre equipos usando sockets",
      "Interfaz Drag & Drop fluida con Framer Motion",
      "Carga inicial optimizada de la app de menos de 1.2 segundos"
    ],
    github: "https://github.com",
    link: "https://example.com"
  },
  
];