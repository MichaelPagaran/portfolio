// Portfolio data – centralized content for all pages

export interface Skill {
    title: string;
    icon: string;
    color: string;
    items: string[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
    isCurrent?: boolean;
}

export interface Project {
    title: string;
    description: string;
    icon: string;
    gradient: string;
    techStack: string;
    links?: { code?: string; live?: string };
}

export interface CaseStudy {
    title: string;
    category: string;
    icon: string;
    iconColor: string;
    strategicLabel: string;
    strategicDescription: string;
    impacts: string[];
    tags: string[];
    isFlagship?: boolean;
    leadershipDescription?: string;
    bottomLineDescription?: string;
    coreTechPrimary?: string[];
    coreTechSecondary?: string[];
}

export const skills: Skill[] = [
    {
        title: "Languages",
        icon: "Code",
        color: "blue",
        items: ["JavaScript / TypeScript", "Python (Django/Flask)", "PHP (Laravel)", "SQL / NoSQL"],
    },
    {
        title: "Architecture",
        icon: "Blocks",
        color: "purple",
        items: ["Microservices", "RESTful APIs & GraphQL", "System Design", "MVC Patterns"],
    },
    {
        title: "Cloud & DevOps",
        icon: "Cloud",
        color: "cyan",
        items: ["AWS / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Linux Administration"],
    },
    {
        title: "Leadership",
        icon: "Users",
        color: "orange",
        items: ["Agile / Scrum Master", "Project Management", "Team Mentorship", "Technical Strategy"],
    },
];

export const experiences: Experience[] = [
    {
        role: "Senior Full-Stack Developer",
        company: "CyTech Innovations",
        period: "2021 - Present",
        description:
            "Spearheading the development of secure fintech solutions, managing a team of 5 developers. Implemented OAuth2.0 authentication protocols reducing security vulnerabilities by 40%. Optimized database queries improving dashboard load times by 60%.",
        tags: ["React", "Node.js", "PostgreSQL"],
        isCurrent: true,
    },
    {
        role: "Project Manager & Lead Dev",
        company: "Webforest Solutions",
        period: "2018 - 2021",
        description:
            "Oversaw end-to-end delivery of 15+ web applications for international clients. Introduced CI/CD pipelines using Jenkins, cutting deployment time by 50%. Served as the primary technical liaison for stakeholders.",
        tags: ["Laravel", "Vue.js", "AWS"],
    },
    {
        role: "BS Information Technology",
        company: "Xavier University",
        period: "2014 - 2018",
        description:
            'Graduated Magna Cum Laude. Capstone Project: "Blockchain-based Voting System for Student Government Elections". President of the Computer Studies Student Council.',
        tags: [],
    },
];

export const projects: Project[] = [
    {
        title: "FinSafe Dashboard",
        description:
            "A secure, real-time financial analytics dashboard for enterprise clients featuring bank-grade encryption.",
        icon: "LayoutDashboard",
        gradient: "from-gray-700 to-black",
        techStack: "React • D3.js",
    },
    {
        title: "E-Commerce Microservices",
        description:
            "Refactored a monolithic legacy shop into scalable microservices using Docker and Kubernetes orchestration.",
        icon: "ShoppingCart",
        gradient: "from-blue-900 to-indigo-900",
        techStack: "Go • K8s",
    },
    {
        title: "CloudSync API",
        description:
            "Robust REST API for synchronizing offline-first mobile applications with central databases.",
        icon: "CloudCog",
        gradient: "from-green-900 to-teal-900",
        techStack: "Node • Redis",
    },
];

export const caseStudies: CaseStudy[] = [
    {
        title: "Dayung",
        category: "SaaS Product",
        icon: "Building2",
        iconColor: "blue",
        strategicLabel: "Strategic Role: Solo Founder",
        strategicDescription:
            "Owned the entire product lifecycle from ideation to market fit. Identified a critical gap in SME HR processes and executed a vision to automate payroll, directly addressing operational inefficiencies.",
        impacts: [
            "Streamlined HR ops for **50+ SMEs** within 6 months.",
            "Reduced manual payroll processing overhead by **65%**.",
        ],
        tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
        title: "DLP System",
        category: "Enterprise Security",
        icon: "ShieldCheck",
        iconColor: "emerald",
        strategicLabel: "Strategic Pivot: 4-Day MVP",
        strategicDescription:
            "Faced with a critical compliance deadline, I pivoted the engineering strategy from a 3-month roadmap to a high-impact MVP. Delivered core functionality in just 4 days to secure stakeholder trust.",
        impacts: [
            "Ensured **100% regulatory compliance** ahead of schedule.",
            "Processed **1M+ daily events** with 40% higher accuracy.",
        ],
        tags: ["Python", "ElasticSearch", "Kafka"],
    },
    {
        title: "SIEM Platform",
        category: "Cybersecurity Infrastructure",
        icon: "Shield",
        iconColor: "teal",
        strategicLabel: "Flagship Initiative",
        strategicDescription:
            "Led the technical direction for a next-gen Security Information and Event Management platform. This wasn't just a coding project; it was an organizational shift to Microservices to solve scalability bottlenecks.",
        impacts: [],
        tags: [],
        isFlagship: true,
        leadershipDescription:
            "Managed **20+ developers** across 3 time zones, implementing Scrum practices that increased sprint velocity by 25%.",
        bottomLineDescription:
            "Improved system uptime to 99.99% and reduced incident response costs by automating 50% of playbooks.",
        coreTechPrimary: ["FastAPI", "Next.js"],
        coreTechSecondary: ["AWS Lambda", "Kubernetes"],
    },
    {
        title: "VDR System",
        category: "Secure Storage",
        icon: "LockKeyhole",
        iconColor: "purple",
        strategicLabel: "Strategic Role: Backend Architect",
        strategicDescription:
            "Architected a zero-trust Virtual Data Room for high-stakes M&A. The focus was on absolute data integrity to mitigate liability risks during multi-million dollar transactions.",
        impacts: [
            "Zero unauthorized access incidents during live M&A deals.",
            "Enabled granular permission controls demanded by legal teams.",
        ],
        tags: ["Node.js", "PostgreSQL", "AWS S3"],
    },
];
