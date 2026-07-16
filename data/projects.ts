import { Project } from "@/type";

export const projects: Project[] = [
  {
    slug: "go-digital",
    title: "Go Digital",
    role: "Full Stack Developer",
    date: "2026",
    problem: "The client needed a centralized platform to manage and track Digital Transformation (DX) requests and technical support, which were previously handled through scattered emails and spreadsheets.",
    solution: "Developed a comprehensive web platform that automates the lifecycle of DX requests, including creation, assignment, status updates, and completion tracking. Implemented a responsive interface using Quasar Framework for improved usability.",
    architecture: "The application is built with Vue.js and TypeScript on the frontend, C# for backend services, and PostgreSQL for data storage. It follows a modular architecture with clear separation of concerns and adheres to SOLID principles.",
    description: "Is a comprehensive web platform designed for managing, tracking, and collaborating on Digital Transformation (DX) requests and technical support. ",
    technologies: ["Vue.js", "TypeScript", "C#", "PostgreSQL", "SCSS", "JavaScript", "Node.js", "Pinia"],
    results: [
      "Automated request lifecycle management, including creation, assignment, status updates, and completion tracking.",
      "Developed a responsive and intuitive interface using Quasar Framework, improving usability across desktop devices.",
      "Successfully centralized the management of Digital Transformation (DX) requests into a single web platform.",
    ],
    github: "https://github.com/Junniora/GoDigital",
    link: "https://example.com"
  },
  {
    slug: "nova-erp",
    title: "Nova ERP",
    role: "Frontend Developer",
    date: "2026",
    problem: "Test",
    solution: "Test",
    architecture: "Test",
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