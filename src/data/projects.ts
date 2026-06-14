export interface Project {
  title: string;
  year: number;
  description: string;
  tags: string[];
  repo: string;
  demo?: string; // omit if no public demo — card handles this gracefully
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
    // demo: "https://..." — add deployed URL when available
    highlights: [
      "40% reduction in component duplication via a shared component library",
      "Client-side form validation and error handling",
    ],
  },
  {
    title: "Blazefit 3.0 — Fitness Tracking Application",
    year: 2024,
    description:
      "End-to-end fitness tracker with user authentication, workout logging, and a progress analytics dashboard.",
    tags: ["Python", "Flask", "PostgreSQL", "pytest", "SQLAlchemy", "User Auth"],
    repo: "https://github.com/blazeblaire/Blazefit3.0",
    highlights: [
      "Full pytest coverage of auth/CRUD/edge cases — 0 critical bugs at release",
      "~25% faster average query response after optimisation",
    ],
  },
  {
    title: "Smart Cattle Spray Booth — Web HMI",
    year: 2024,
    description:
      "Full-stack IoT system replacing a physical Nextion touch panel with a web dashboard for an automated cattle acaricide spray booth. Manages herd configuration, spray cycles, emergency controls, and real-time telemetry.",
    tags: ["Python", "FastAPI", "React", "Tailwind CSS", "WebSockets", "Raspberry Pi", "ESP32", "Arduino"],
    repo: "https://github.com/blazeblaire/Smart-Cattle-SprayBooth",
    highlights: [
      "Four-layer architecture: Browser (React HMI) ⇄ FastAPI (Raspberry Pi) ⇄ ESP32 gateway ⇄ Arduino Mega 2560 — end-to-end from browser to firmware",
      "Real-time telemetry streaming via WebSockets; emergency stop and override controls",
      "Built-in demo/simulator mode — fully testable without physical hardware",
    ],
  },
];
