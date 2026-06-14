export interface Project {
  title: string;
  year: number;
  description: string;
  tags: string[];
  repo: string;
  demo?: string; // omit if backend-only — do not render a dead button
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Ray Solar Solutions — Backend API Platform",
    year: 2024,
    description:
      "Production REST API for a solar energy business: product catalogue, order management, and customer data endpoints.",
    tags: ["Python", "Flask", "PostgreSQL", "pytest", "Docker", "REST"],
    repo: "https://github.com/blazeblaire/Ray-Solar-Solutions-server",
    highlights: [
      "85%+ endpoint coverage across 20+ routes",
      "Fully Dockerised — onboarding setup cut from hours to under 5 minutes",
      "Normalised PostgreSQL schema (5 tables, 3 FK relationships) with full CRUD and input validation",
    ],
  },
  {
    title: "BCare — Healthcare Information Platform",
    year: 2024,
    description:
      "Responsive React/TypeScript frontend consuming a REST API for patient records and appointment scheduling.",
    tags: ["React", "TypeScript", "JavaScript", "REST", "Responsive Design"],
    repo: "https://github.com/blazeblaire/BCare-frontend",
    // demo: "[CONFIRM] — add deployed URL here if one exists",
    highlights: [
      "40% reduction in component duplication via a shared component library",
      "Client-side form validation and error handling",
    ],
  },
  {
    title: "Blazefit 3.0 — Fitness Tracking Application",
    year: 2024,
    description:
      "End-to-end fitness tracker with user authentication (session management), workout logging, and a progress analytics dashboard.",
    tags: [
      "Python",
      "Flask",
      "PostgreSQL",
      "pytest",
      "SQLAlchemy",
      "User Authentication",
    ],
    repo: "https://github.com/blazeblaire/Blazefit3.0",
    highlights: [
      "Full pytest coverage of auth/CRUD/edge cases — 0 critical bugs at release",
      "~25% faster average query response after optimisation",
    ],
  },
];
