export const COMPANY = {
  name: "IGNOVA",
  fullName: "IGNOVA Consulting & Academy",
  tagline: "Architect. Activate. Accelerate.",
  description:
    "Three capabilities. One partner. Connecting people to business execution.",
  email: "contact@ignovaconsulting.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "IGNOVA Triage", href: "/services/triage" },
      { label: "IGNOVA Edge", href: "/services/edge" },
      { label: "Project Execution", href: "/services/project-execution" },
    ],
  },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 21, suffix: "", label: "Years of Industrial Expertise" },
  { value: 1000, suffix: "+", label: "Candidates Hired" },
  { value: 8, suffix: "+", label: "Years Recruitment Expertise" },
  { value: 12, suffix: "+", label: "Major Recruitment Clients" },
];

export const SERVICES = {
  architect: {
    pillar: "Architect",
    brand: "IGNOVA TRIAGE",
    href: "/services/triage",
    tagline: "Build Role-Specific Competencies & Drive Performance",
    items: [
      "Capability transformation",
      "Technical and leadership development",
      "Applied learning",
    ],
    description:
      "Customize the intervention around the role and the performance gap.",
  },
  activate: {
    pillar: "Activate",
    brand: "IGNOVA EDGE",
    href: "/services/edge",
    tagline: "Critical Mandates into Evidence-Backed Hiring Decisions",
    items: [
      "Strategic talent advisory",
      "Leadership and specialist search",
      "Credible shortlists",
    ],
    description:
      "Mandate precision. Structured assessment. Credible shortlists.",
  },
  accelerate: {
    pillar: "Accelerate",
    brand: "PROJECT EXECUTION",
    href: "/services/project-execution",
    tagline: "Connect Workforce Readiness to Operational Performance",
    items: [
      "Industrial performance consulting",
      "Quality, productivity and reliability",
      "Operational improvement",
    ],
    description:
      "Build ownership into implementation and handover.",
  },
};

export const EXCELLENCE_AGENDA = [
  {
    priority: "Build workforce capability",
    capability: "IGNOVA TRIAGE",
    outcome: "Workplace application",
    href: "/services/triage",
  },
  {
    priority: "Fill business-critical roles",
    capability: "IGNOVA EDGE",
    outcome: "Credible shortlists",
    href: "/services/edge",
  },
  {
    priority: "Support operational change",
    capability: "PROJECT EXECUTION",
    outcome: "Operating performance",
    href: "/services/project-execution",
  },
];

export const DELIVERY_STEPS = [
  {
    step: "Assess",
    description: "Align the mandate, capability gaps and measures of success",
  },
  {
    step: "Align",
    description: "Objectives and critical resources with focused priorities",
  },
  {
    step: "Execute",
    description: "Specialist expertise and progress reviews",
  },
  {
    step: "Sustain",
    description: "Standards, ownership and improvement",
  },
];

export const IGNOVA_FACTOR = [
  {
    number: "01",
    title: "Diagnose",
    description: "Talent, capability and operating gaps",
    output: "Performance baseline",
  },
  {
    number: "02",
    title: "Prioritize",
    description: "Objectives and critical resources",
    output: "Focused priorities",
  },
  {
    number: "03",
    title: "Execute",
    description: "Specialist expertise and progress reviews",
    output: "Targeted interventions",
  },
  {
    number: "04",
    title: "Sustain",
    description: "Standards, ownership and improvement",
    output: "Performance controls",
  },
];

export const CLIENTS = {
  industrial: [
    "Hero Steels Limited",
    "Gabriel",
    "Motherson",
    "MSA",
    "Tenneco",
  ],
  recruitment: [
    "ICICI Bank",
    "HSBC",
    "Swiggy",
    "Flipkart",
    "Tata Group",
    "Bandhan Bank",
  ],
};

export const SECTORS = [
  "Manufacturing",
  "Automotive",
  "Financial Services",
  "Technology",
  "Healthcare",
];

export const PERFORMANCE_DOMAINS = [
  {
    domain: "Talent",
    measures: "Time to shortlist; offer conversion; joining",
  },
  {
    domain: "Capability",
    measures: "Skill-gap closure; application; leadership progress",
  },
  {
    domain: "Industrial",
    measures: "OEE; defects; downtime and productivity",
  },
  {
    domain: "Operating Economics",
    measures: "Cost of Poor Quality; delivery; inventory efficiency",
  },
];

