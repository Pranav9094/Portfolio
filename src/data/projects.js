// Add a new project by pushing a new object into this array.
// category: "hackathon" | "freelance" | "personal"
// status (hackathon only): "winner" | "finalist" | "qualified" | "participated"
// image: optional — a real screenshot URL/path. Cards without an image have
// no banner and use a category accent line instead.
export const projects = [
  {
    id: "agroshield",
    title: "AgroShield",
    category: "hackathon",
    status: "winner",
    statusLabel: "Winner — Hack2026 (Kanan)",
    year: "2026",
    description:
      "Crop-weed detection app for farmers — a YOLOv8n model trained on 4,396 images (94.73% mAP50) tells you exactly where to spray, cutting pesticide waste.",
    tags: ["YOLOv8", "FastAPI", "React", "Computer Vision"],
    link: "https://github.com/Pranav9094/agroshield",
    linkLabel: "View repo",
  },
  {
    id: "infra-sight",
    title: "INFRA-SIGHT",
    category: "hackathon",
    status: "participated",
    statusLabel: "Participant — CraftVerse 2.0 (PCCOER, Pune)",
    year: "2026",
    description:
      "Predictive infrastructure AI — combines asset history, weather, traffic, imagery and sensor/citizen signals into one risk score per asset, then an agent investigates and prioritizes repairs with human approval. Detect → Investigate → Predict → Prioritize → Act.",
    tags: ["AI Agent", "FastAPI", "React", "Computer Vision", "PostGIS"],
    link: "https://infrasight-ai.vercel.app/",
    linkLabel: "Live prototype",
  },
  {
    id: "digital-bench-workspace",
    title: "Digital Bench Workspace",
    category: "personal",
    status: null,
    statusLabel: "Personal project",
    year: "2026",
    description:
      "An all-in-one desktop app for classrooms — attendance, notes, and live sessions in one Electron window. Later entered into multiple hackathons.",
    tags: ["Electron", "React", "Node/Express", "Supabase"],
    link: "https://github.com/Pranav9094/Digital-Bench-Workspace",
    linkLabel: "View repo",
  },
  {
    id: "matoshree",
    title: "Matoshree",
    category: "freelance",
    status: null,
    statusLabel: "Client website",
    year: "2026",
    description:
      "Website for Matoshree Bahuddesheey Sevabhavi Sanstha, a charitable organization — built to help them reach and inform their community online.",
    tags: ["Client Work", "Web Design"],
    link: "https://matoshriseva.org",
    linkLabel: "Visit site",
  },
  {
    id: "ashtasiddhi",
    title: "Ashtasiddhi",
    category: "freelance",
    status: null,
    statusLabel: "Client website",
    year: "2026",
    description: "A client website built end-to-end — design, build, and launch.",
    tags: ["Client Work", "Web Design"],
    link: "",
    linkLabel: "",
  },
  {
    id: "ellauramist",
    title: "Ellauramist",
    category: "freelance",
    status: null,
    statusLabel: "Client website",
    year: "2026",
    description:
      "Website for Ellauramist, a skincare brand — planned and built across the full product line, now grown into an ongoing design role.",
    tags: ["Client Work", "E-commerce"],
    link: "",
    linkLabel: "",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "hackathon", label: "Hackathons" },
  { id: "freelance", label: "Freelance" },
  { id: "personal", label: "Personal" },
];

// Hackathons mentioned as plain text under the grid — not full cards.
// Add a new one by pushing { title, statusLabel } here.
export const otherHackathons = [
  { title: "KaushalSetu", statusLabel: "Finalist — Global SDG & AI Hackathon 2026" },
  { title: "MannMitra", statusLabel: "Qualified — Round 2, SAMARTHYA 2026" },
  { title: "Astra (Travel Resilience)", statusLabel: "Finalist — HackCelestial 3.0" },
  { title: "TrustChain", statusLabel: "Participated — Inceptia National Hackathon" },
  { title: "SIH 2026 — Fire Rescue Vision", statusLabel: "Participated — Smart India Hackathon" },
  { title: "Sentinel Gujarat", statusLabel: "Participated — Gujarat Police Hackathon" },
];
