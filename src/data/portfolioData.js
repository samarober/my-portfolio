export const profile = {
  name: "Roberto",
  role: "Estudiante de Desarrollo de Aplicaciones Web",
  shortBio:
    "Construyendo proyectos reales mientras aprendo. Interesado en el desarrollo fullstack, la arquitectura de software y la cultura open source.",
  github: "https://github.com/samarober",
  email: "samarober12@gmail.com",
};

export const projects = [
  {
    id: 1,
    title: "Sistema TPV",
    description:
      "Arquitectura completa de un punto de venta: frontend React, API REST en Java y base de datos PostgreSQL. Todo el entorno containerizado con Docker para garantizar despliegues reproducibles.",
    tags: ["React", "Java", "PostgreSQL", "Docker"],
    github: "https://github.com/samarober/tfg-tpv-daw",
    demo: null,
    status: "En desarrollo",
    featured: true,
  },
  {
    id: 2,
    title: "Community Patch — Project Zomboid",
    description:
      "Mod publicado en Steam Workshop bajo la firma Samacleto. Centrado en mejorar la experiencia de la comunidad de jugadores mediante correcciones y ajustes de calidad de vida.",
    tags: ["Lua", "Steam Workshop", "Game Modding"],
    github: null,
    demo: "https://steamcommunity.com/id/Samacleto/myworkshopfiles/",
    status: "Publicado",
    featured: false,
  },
];

export const techStack = [
  { category: "Backend & Base de Datos", items: ["Java", "PostgreSQL", "SQL"] },
  { category: "Infraestructura & Herramientas", items: ["Docker", "Git", "GitHub"] },
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] }
];