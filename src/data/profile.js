// Add a new certification by pushing a new object into this array.
import profilePhoto from "../assets/pranav-profile.png";

export const photo = profilePhoto;

export const certifications = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Specialization",
    issuer: "Google",
    date: "Jan 2026",
    skills: ["Big Data Analytics", "Statistical Data Analysis"],
    link: "",
  },
  {
    id: "ibm-data-viz-r",
    title: "Data Visualization with R",
    issuer: "IBM",
    date: "Aug 2026",
    skills: ["Data Analysis", "R"],
    link: "",
  },
  {
    id: "redhat-rh124",
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    date: "Aug 2026",
    skills: ["Linux"],
    link: "",
  },
  {
    id: "pearson-js",
    title: "IT Specialist — JavaScript",
    issuer: "Pearson",
    date: "Aug 2026",
    skills: ["JavaScript"],
    link: "",
  },
];

// Add a new role by pushing a new object into this array (most recent first).
export const experience = [
  {
    id: "ellauramist-internship",
    role: "Web Designer & Social Media Handler",
    org: "Ellauramist Pvt Ltd",
    period: "2026 — Present",
    type: "Paid Internship",
    description:
      "Designing and maintaining the brand's web presence and running its social media, alongside freelance client work on the side.",
  },
];

export const skills = {
  Languages: ["Java", "R", "C", "C++", "Python", "JavaScript", "SQL"],
  "AI / ML": ["YOLOv8", "Computer Vision", "Model Training"],
  "Web Development": ["MERN", "React", "Node.js", "Express", "FastAPI", "REST APIs", "Tailwind"],
  Data: ["PostgreSQL"],
  Tools: ["Git", "GitHub", "Linux", "Supabase", "Vercel", "Figma UI design"],
};

export const services = [
  {
    title: "Full-stack web apps",
    description: "React, Node/Express, MERN, Supabase, deployed end-to-end",
  },
  {
    title: "Client & business websites",
    description: "Design, build, launch, including e-commerce setups",
  },
  {
    title: "AI / ML & Computer Vision",
    description: "YOLOv8 model training, detection apps, FastAPI model serving",
  },
  {
    title: "AI agents & integrations",
    description: "LLM tool-using agents, API and backend integration",
  },
  {
    title: "Desktop apps",
    description: "Electron and React apps",
  },
  {
    title: "UI/UX design",
    description: "Figma designs turned into working frontends",
  },
  {
    title: "Data analysis & visualization",
    description: "Python, R, dashboards",
  },
  {
    title: "Social media & brand handling",
    description: "Content and web presence from my Ellauramist role",
  },
  {
    title: "Hackathon team lead",
    description: "Rapid prototyping, backend ownership, shipping under 24–48 hr deadlines",
  },
];

// Chronological — earliest first. Add a new entry by pushing to the end.
export const timeline = [
  { year: "2025", label: "Started B.Tech, CSE (AI & DS), Parul University" },
  { year: "2026", label: "Started building for hackathons with THE ELITES — AgroShield, DBW and more" },
  { year: "2026", label: "Freelancing took off — built Matoshree, Ashtasiddhi, Ellauramist and other client sites" },
  { year: "2026", label: "Started internship at Ellauramist Pvt Ltd as Web Designer & Social Media Handler" },
  { year: "2026", label: "Earned certifications from Google, IBM, Red Hat & Pearson while racking up hackathon wins and finals" },
];
