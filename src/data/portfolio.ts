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
        title: "Backend",
        icon: "Server",
        color: "blue",
        items: ["Python", "FastAPI", "Django"],
    },
    {
        title: "Frontend",
        icon: "Code",
        color: "purple",
        items: ["TypeScript", "React", "Next.js"],
    },
    {
        title: "AI & Data",
        icon: "Brain",
        color: "cyan",
        items: ["NLP / LLMs", "BERT / Transformers", "Elasticsearch"],
    },
    {
        title: "DevOps",
        icon: "Cloud",
        color: "orange",
        items: ["AWS Lambda/S3/EC2", "Docker", "CI/CD"],
    },
    {
        title: "Leadership",
        icon: "Users",
        color: "green",
        items: ["Scrum Master", "Risk Mitigation", "MVP Definition"],
    },
];

export const experiences: Experience[] = [
    {
        role: "Full-Stack Developer & Project Manager",
        company: "CyTech International",
        period: "12/2021 - Present",
        description:
            "Spearheaded the high-level and sub-component design of enterprise-grade SIEM, DLP, and VDR platforms using Django and FastAPI, ensuring 99.9% uptime for production security tools. Directed a junior-heavy team of 15+ developers, implementing rigorous code review standards and automated development policies. Served as Scrum Master, managing sprint planning, backlog grooming, and stakeholder communication.",
        tags: ["Django", "FastAPI", "React", "Celery", "AWS", "Docker", "Scrum", "Microservices", "CI/CD", "Agile"],
        isCurrent: true,
    },
    {
        role: "Technical Project Manager",
        company: "Webforest Solutions",
        period: "2018 - 2021",
        description:
            "Performed detailed technical work breakdowns and coordinated task distribution to ensure project milestones aligned with client business goals. Mitigated technical bottlenecks by proactively reallocating resources and clarifying requirements between clients and engineering squads.",
        tags: ["Shopify", "Node.js", "Laravel"],
    },
    {
        role: "Faculty & Technical Mentor",
        company: "Xavier University - Ateneo de Cagayan",
        period: "08/2025 - Present",
        description:
            "Taught Object-Oriented Programming (OOP), Database Systems, Information Management, and Informatics. Directly applied teaching methodologies to professional development by training engineers in SOLID principles and relational database optimization.",
        tags: ["OOP", "Database Systems", "Informatics"],
        isCurrent: true,
    },
];

export const projects: Project[] = [
    {
        title: "Dayung (SaaS)",
        description:
            "A comprehensive SaaS platform built for scalability. Orchestrated the full development lifecycle from architecture to deployment.",
        icon: "Building2",
        gradient: "from-blue-900 to-indigo-900",
        techStack: "Next.js • Django",
    },
    {
        title: "DLP System (4-day MVP)",
        description:
            "Rapidly prototyped and delivered a Data Loss Prevention system MVP in just 4 days, demonstrating high-velocity delivery.",
        icon: "ShieldCheck",
        gradient: "from-gray-700 to-black",
        techStack: "Django • Redis",
    },
    {
        title: "Real-Time Sentiment Analysis",
        description:
            "AI-driven platform leveraging NLP and Transformers to provide real-time sentiment insights from data streams.",
        icon: "Brain",
        gradient: "from-green-900 to-teal-900",
        techStack: "FastAPI • BERT",
    },
];

export const caseStudies: CaseStudy[] = [
    {
        title: "Dayung",
        category: "SaaS",
        icon: "Building2",
        iconColor: "blue",
        strategicLabel: "Strategic Role: Solo Founder",
        strategicDescription:
            "Engineered a comprehensive SaaS solution for Homeowners Associations (HOA) from the ground up. Architected a scalable serverless backend to handle complex tenant data, billing, and community management, directly addressing operational inefficiencies in property management.",
        impacts: [
            "Automated billing and notifications for **50+ communities**.",
            "Reduced administrative workload by **60%** through serverless automation.",
        ],
        tags: ["Next.js", "Django", "PostgreSQL", "AWS Lambda"],
    },
    {
        title: "DLP System",
        category: "Enterprise Security",
        icon: "ShieldCheck",
        iconColor: "emerald",
        strategicLabel: "Strategic Pivot: 4-Day MVP",
        strategicDescription:
            "Executed a critical strategic pivot to meet a strict compliance deadline. Delivered a fully functional MVP in just 4 days using Django and Redis to process data via Microsoft Graph API, securing immediate stakeholder trust and regulatory approval.",
        impacts: [
            "Ensured **100% regulatory compliance** ahead of schedule.",
            "Processed high-volume events with stabilized **Celery task queues**.",
        ],
        tags: ["Python", "Django", "Redis", "Celery", "Microsoft Graph API"],
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
        coreTechPrimary: ["FastAPI", "Django", "Next.js"],
        coreTechSecondary: ["Docker", "S3", "Redis", "Celery"],
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
        tags: ["Next.js", "Django", "PostgreSQL", "Celery"],
    },
    {
        title: "Sentiment Analysis",
        category: "AI & NLP",
        icon: "BarChart3",
        iconColor: "amber",
        strategicLabel: "Strategic Role: AI Engineer",
        strategicDescription:
            "Engineered a real-time sentiment analysis engine to visualize customer feedback trends instantly. Leveraged BERT transformers for high-accuracy NLP and WebSockets for low-latency data streaming to dashboards.",
        impacts: [
            "Reduced feedback response time by **75%** via instant alerts.",
            "Visualized sentiment data with **sub-second latency** for stakeholders.",
        ],
        tags: ["FastAPI", "BERT"],
    },
];
