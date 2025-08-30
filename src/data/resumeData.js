// --- PROFILE DATA ---
export const PROFILE = {
  name: "Divyesh Vishwakarma",
  tag: "Software Engineer • AI/Backend • MLOps",
  location: "Navi Mumbai, India",
  phone: "+919920192856",
  email: "divyesh@divyeshvishwakarma.com",
  website: "divyeshvishwakarma.com",
  github: "github.com/divyesh1099",
  linkedin: "linkedin.com/in/divyesh-vishwakarma-621197175",
  summary:
    "Software engineer with 3.5 years of experience shipping production AI and cloud back-ends. Highlights include a high-throughput LLM+OCR service, a naval demand-forecasting engine that reduced stock-outs, and an Agentic-AI tool that reviews 60k medical pages in 30 minutes. Expert in Python, FastAPI, Docker, and full-cycle MLOps across AWS, Azure, and GCP.",
};

// --- EXPERIENCE DATA ---
export const EXPERIENCE = [
    {
        company: "Neural IT Pvt Ltd",
        role: "Senior Python / ML Engineer",
        period: "Apr 2024 – Present",
        highlights: [
            "Deployed a GPT-4o & Tesseract OCR pipeline on Azure Kubernetes Service, processing 20k notes daily with 99.95% SLA.",
            "Architected 'FastPDF', an Agentic-AI tool, reducing medical doc QA time for 60k pages to just 30 minutes.",
            "Engineered a 12-service FastAPI mesh with Kafka & Redis, achieving ~2000 RPS.",
            "Implemented blue-green deployments with Helm & Argo CD, cutting upgrade windows to <90s.",
        ],
        tags: ["Azure", "AKS", "GPT-4o", "FastAPI", "Kafka", "Helm"],
    },
    {
        company: "Indian Navy (Pal India)",
        role: "Machine Learning Developer",
        period: "May 2023 – Feb 2024",
        highlights: [
            "Developed a hybrid forecasting engine (ARIMA + Holt-Winters) that reduced stock-out penalties by 18M INR/yr.",
            "Built secure REST & gRPC services with OAuth2, passing security scans with zero high-severity vulnerabilities.",
            "Managed 120+ experiments using DVC & MLflow, reducing model hand-off time by 70%.",
        ],
        tags: ["Time-Series", "gRPC", "MLflow", "GCP Anthos"],
    },
    {
        company: "Zeus Learning",
        role: "Software Developer",
        period: "Jun 2022 – Mar 2023",
        highlights: [
            "Refactored an ASP.NET MVC application and optimized SQL queries, improving page load speeds by ~45%.",
            "Migrated a legacy jQuery frontend to Angular 13, decreasing bundle size by 35%.",
            "Implemented a Redis cache with a ~92% hit-rate, reducing server CPU load by ~40%.",
        ],
        tags: ["ASP.NET", "SQL", "Angular", "Redis"],
    },
];

// --- PROJECTS DATA ---
export const PROJECTS = [
  {
    title: "FastPDF — AI QA for Medical PDFs",
    description: "Agentic pipeline to detect blank/duplicate pages in 10k+ page PDFs, processing ~60k docs in 30 min.",
    tags: ["Python", "FastAPI", "Azure", "Docker", "OCR", "NLP"],
    cta: [{ label: "View on GitHub", href: "https://github.com/divyesh1099" }],
  },
  {
    title: "Navy Demand Forecasting Engine",
    description: "ARIMA/Holt-Winters hybrid with REST+gRPC APIs. Reduced stock-outs by improving demand estimates.",
    tags: ["Time-Series", "gRPC", "OAuth2", "MLflow"],
    cta: [],
  },
];

// --- PROFILES FOR SELECTOR ---
export const PROFILES = [
    { id: 'recruiter', name: 'Recruiter', icon: '🧑‍💼', color: 'bg-purple-500' },
    { id: 'ai', name: 'AI/ML Engineer', icon: '🤖', color: 'bg-blue-500' },
    { id: 'backend', name: 'Backend Dev', icon: '⚙️', color: 'bg-red-500' },
    { id: 'innovator', name: 'Innovator', icon: '💡', color: 'bg-yellow-500' },
    { id: 'opensource', name: 'Open Source', icon: '🌍', color: 'bg-green-500' },
];
