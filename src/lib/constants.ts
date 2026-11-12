export const COMPANY = {
  name: "IGNOVA",
  fullName: "IGNOVA Consulting & Academy",
  tagline: "Architect. Activate. Accelerate.",
  description:
    "Three capabilities. One partner. Connecting people to business execution.",
  email: "ignovacobsulting26@gmail.com",
  phone: "+91 99715 24733",
  phoneRaw: "+919971524733",
  address: "L14C, Orchard Smartworld, Sector 61, Gurugram, Haryana",
  city: "Gurugram, Haryana",
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

export interface ClientLogo {
  name: string;
  logo: string;
  alt: string;
  maxHeight?: string;
}

export const CLIENT_LOGOS = {
  industrial: [
    {
      name: "Hero Steels Limited",
      logo: "/images/clients/hero-steels.png",
      alt: "Hero Steels Limited Logo",
      maxHeight: "max-h-8 sm:max-h-9",
    },
    {
      name: "Gabriel",
      logo: "/images/clients/gabriel.png",
      alt: "Gabriel India Logo",
      maxHeight: "max-h-8 sm:max-h-9",
    },
    {
      name: "Motherson",
      logo: "/images/clients/motherson.png",
      alt: "Samvardhana Motherson Logo",
      maxHeight: "max-h-9 sm:max-h-10",
    },
    {
      name: "MSA",
      logo: "/images/clients/msa.svg",
      alt: "MSA Safety Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
    {
      name: "Tenneco",
      logo: "/images/clients/tenneco.svg",
      alt: "Tenneco Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
  ] as ClientLogo[],
  recruitment: [
    {
      name: "ICICI Bank",
      logo: "/images/clients/icici-bank.svg",
      alt: "ICICI Bank Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
    {
      name: "HSBC",
      logo: "/images/clients/hsbc.svg",
      alt: "HSBC Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
    {
      name: "Swiggy",
      logo: "/images/clients/swiggy.svg",
      alt: "Swiggy Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
    {
      name: "Flipkart",
      logo: "/images/clients/flipkart.svg",
      alt: "Flipkart Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
    {
      name: "Tata Group",
      logo: "/images/clients/tata.svg",
      alt: "Tata Group Logo",
      maxHeight: "max-h-9 sm:max-h-10",
    },
    {
      name: "Bandhan Bank",
      logo: "/images/clients/bandhan-bank.svg",
      alt: "Bandhan Bank Logo",
      maxHeight: "max-h-7 sm:max-h-8",
    },
  ] as ClientLogo[],
};

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

