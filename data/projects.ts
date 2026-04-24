export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[]; // Örn: ["Next.js", "Tailwind"]
  link: string;
  longDescription?: string; // Proje Detayları için uzun paragraf
  githubUrl?: string;       // Source Code butonu için link
  demoUrl?: string;         // Live Demo butonu için link
  features?: string[];      // Öne Çıkan Özellikler listesi
  learnings?: string[];     // Öğrendiklerim listesi
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GYM4EVERY1",
    description: "Developed a comprehensive mobile application for gym enthusiasts to track workouts, nutrition, water intake, and sleep.",
    tech: ["Kotlin", "Jetpack Compose", "Next.js", "Supabase"],
    link: "/projects/portfolio",
    longDescription: "The main goal of this project was to consolidate workout, nutrition, water intake, and sleep tracking into a single platform for gym enthusiasts. We aimed to deliver a user-friendly and highly performant experience adhering to modern mobile application standards.",
    githubUrl: "https://github.com/Frezeons",
    features: [
      "User authentication and profile management",
      "Real-time workout and nutrition tracking",
      "Secure and fast data synchronization with Supabase"
    ],
    learnings: [
      "Modern Android UI development with Jetpack Compose",
      "Supabase database architecture and RLS (Row Level Security) policies",
      "State management for complex data structures"
    ]
  },
  {
    id: 2,
    title: "Deox WebApp",
    description: "Built a secure web application focusing on user authentication and registration workflows. Implemented email integration for account verification and notifications. Designed a token-based password reset system to ensure data security. Gained solid experience in ASP.NET and SQL Server database management. ",
    tech: ["C#", ".NET", "JavaScript", "AJAX", "SQL"],
    link: "/projects/portfolio",
    longDescription: "A secure web application designed to handle robust user authentication and registration workflows. The project focused heavily on backend security, including email integrations for account verification, notifications, and a token-based password reset system to ensure data integrity.",
    features: [
      "Secure user authentication and registration",
      "Email integration for account verification",
      "Token-based password reset system"
    ],
    learnings: [
      "Advanced ASP.NET backend architecture",
      "SQL Server database management and complex queries",
      "Implementing secure token-based authentication workflows"
    ]
  },
  {
    id: 3,
    title: "TaskManager+",
    description: "Created a task management system with distinct Admin and Employee roles. Enables Admins to create/assign tasks and manage users, while Employees can view tasks and update progress. Focused on user role management and database CRUD operations.",
    tech: ["PHP", "MySQL", "JavaScript", "Ajax"],
    link: "/projects/portfolio",
    longDescription: "TaskManager+ is a role-based task management system designed to streamline workflow between administrators and employees. It allows admins to assign tasks and manage users seamlessly, while employees can track their progress and update task statuses in real-time.",
    features: [
      "Distinct Admin and Employee role-based access control",
      "Task creation, assignment, and progress tracking",
      "Real-time UI updates using AJAX"
    ],
    learnings: [
      "Implementing Role-Based Access Control (RBAC)",
      "Performing complex database CRUD operations with PHP and MySQL",
      "Building interactive front-end experiences with JavaScript and AJAX"
    ]
  },
  {
    id: 4,
    title: "Mislinai",
    description: "Chatbot project utilizing API to provide users with an interactive experience. Developed a user-friendly interface for seamless communication and integrated advanced natural language processing capabilities.",
    tech: ["Python", "Flask", "REST API"],
    link: "/projects/portfolio",
    longDescription: "An interactive chatbot project powered by advanced natural language processing APIs. The goal was to create a seamless communication interface where users can interact with an AI assistant naturally, backed by a lightweight and fast Flask backend.",
    features: [
      "Integration with advanced NLP APIs",
      "Interactive and user-friendly chat interface",
      "Lightweight backend powered by Python and Flask"
    ],
    learnings: [
      "Integrating third-party AI/NLP REST APIs",
      "Building scalable backend services with Python Flask",
      "Handling asynchronous chat requests and responses"
    ]
  },
  {
    id: 5,
    title: "VisiClass",
    description: "A modern web application developed using Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "/projects/portfolio",
    longDescription: "VisiClass is a modern, highly responsive web application built with React and Next.js. It leverages Tailwind CSS to deliver a sleek, pixel-perfect user interface while maintaining excellent performance and SEO through Server-Side Rendering (SSR).",
    features: [
      "Server-Side Rendering (SSR) for improved SEO",
      "Fully responsive and modern UI with Tailwind CSS",
      "Component-driven architecture using React"
    ],
    learnings: [
      "Next.js App Router and page rendering strategies",
      "Advanced styling techniques with Tailwind CSS",
      "Optimizing React applications for performance"
    ]
  },
  {
    id: 6,
    title: "Gungineer",
    description: "Developed a comprehensive full-stack platform tailored for industrial engineers and logistics professionals to automate complex freight calculations and manage shipment operations.",
    tech: ["Python", "FastAPI","Vue.js 3","Tailwind CSS", "PostgreSQL", "SQLAlchemy", "Pydantic", "JWT Auth", "Axios"],
    link: "/projects/portfolio",
    longDescription: "Gungineer is a comprehensive full-stack platform tailored specifically for industrial engineers and logistics professionals. It automates complex freight calculations, manages shipment operations, and provides a scalable architecture using modern technologies like FastAPI and Vue.js.",
    features: [
      "Automated complex freight calculations",
      "Scalable backend using FastAPI and PostgreSQL",
      "Secure JWT-based authentication and authorization"
    ],
    learnings: [
      "Building high-performance REST APIs with FastAPI and Pydantic",
      "Managing complex relational databases using SQLAlchemy",
      "Creating reactive front-end applications with Vue.js 3"
    ]
  },
];
