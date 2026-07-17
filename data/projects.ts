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
    slug: "quality-gate",
    title: "Quality Gate(QA PMS)",
    role: "Mobile Developer",
    date: "2026",
    problem: "The quality validation process relied heavily on spreadsheets and paper-based documentation, making traceability, milestone verification, and production approval workflows inefficient and difficult to monitor.",
    solution: "Developed a digital quality management platform that centralizes component registration, validation milestones, evidence tracking, and approval workflows. The system provides role-based access, automated processes, and analytical dashboards to improve operational visibility.",
    architecture: "Built using an MVVM architecture with Jetpack Compose for the user interface, StateFlow for reactive state management, Firebase services for authentication and cloud data management, and Kotlin Coroutines for optimized asynchronous operations.",
    description: "A high-performance Quality Management System designed for automotive component traceability and validation. The platform digitizes quality assurance workflows, enabling milestone tracking, hardware registration, approvals, and KPI-driven decision making.",
    technologies: ["Kotlin", "Firebase Authentication", "Cloud Firestore"],
    results: [
      "Digitized the quality validation workflow, replacing manual spreadsheet-based processes.",
      "Created KPI dashboards for operational monitoring and management decision-making.",
      "Implemented role-based navigation for Supervisors, Reviewers, and Approvers."
    ],
    github: "https://github.com/Junniora/QualityGateV1",
  },
  {
    slug: "alyca",
    title: "Alyca",
    role: "Software Developer",
    date: "2026",
    problem: "The client required a desktop application to manage inventory and sales transactions for a local stationery store, which was previously handled manually.",
    solution: "Developed a desktop application that integrates inventory management, a point-of-sale workflow, automatic change calculation, and sales reporting. The system provides a centralized platform to improve operational efficiency and reduce manual errors.",
    architecture: "Built as a desktop application using Electron with a Vue.js frontend and SQLite as the local database solution for persistent inventory and transaction management.",
    description: "A desktop inventory and point-of-sale system developed for a local stationery store. The application manages available products, processes sales transactions, calculates customer change, and generates sales reports.",
    technologies: ["Vue.JS", "Electron", "JavaScript", "SQLite"],
    results: [
      "Created a complete inventory management system for a local business.",
      "Implemented a point-of-sale workflow with automatic customer change calculation.",
      "Developed sales reports to monitor business transactions."
    ],
    github: "https://github.com/Junniora/Alyca-Papeler-a",
  },
  
];