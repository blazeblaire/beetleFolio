export interface TimelineItem {
  type: "experience" | "education";
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "experience",
    title: "Information Security Engineer (Internship)",
    org: "ICT Authority Kenya",
    location: "Nairobi, Kenya — on-site",
    period: "May – Aug 2024",
    bullets: [
      "Designed and executed black-box test cases for government security systems (full coverage of critical workflows).",
      "Automated incident-response monitoring with Bash on Linux servers; ~30% less manual triage time.",
      "Built and maintained Docker environments for reproducible security tooling across teams.",
      "Conducted network vulnerability assessments and contributed to policy compliance reviews for national ICT infrastructure.",
    ],
  },
  {
    type: "education",
    title: "Software Engineering Certificate",
    org: "Moringa School",
    location: "Kenya",
    period: "Aug 2025 – Feb 2026",
    bullets: [
      "Python, pytest, REST APIs, Docker, PostgreSQL, React.js, Git, Flask.",
    ],
  },
  {
    type: "education",
    title: "BSc Computer Science",
    org: "Moi University",
    location: "Eldoret, Kenya",
    period: "Sep 2021 – Dec 2025",
    bullets: [
      "APIs, Network Security, Software Engineering, Data Structures, Algorithms.",
    ],
  },
];
