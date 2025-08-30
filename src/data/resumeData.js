// --- PROFILE DATA ---
export const PROFILE = {
  name: "Divyesh Vishwakarma",
  tag: "Software Engineer • GenAI & Backend • MLOps",
  location: "Navi Mumbai, India",
  phone: "+91 99201 92856",
  email: "divyesh1099@gmail.com",
  website: "divyeshvishwakarma.com",
  github: "github.com/divyesh1099",
  linkedin: "linkedin.com/in/divyesh-vishwakarma-621197175",
  summary:
    "GenAI-oriented Python Engineer with 3.5 years of experience shipping AI-driven products and cloud back-ends. Highlights include a high-throughput LLM+OCR service, a naval demand-forecasting engine that significantly reduced stock-outs, and FastPDF—an Agentic-AI tool that reviews 60k medical pages in 30 minutes. Expert in FastAPI, Kafka, Docker, Terraform, and the full MLOps lifecycle across AWS, Azure, and GCP.",
  coreSkills: {
    "Languages/Libraries": ["Python", "C#", "SQL", "Pandas", "NumPy", "PyTorch", "TensorFlow"],
    "GenAI/NLP": ["GPT-4o", "Azure OpenAI", "BERT", "LangChain", "LlamaIndex", "LangGraph", "CrewAI", "AutoGen"],
    "Data/ML": ["Time-Series (ARIMA, Prophet)", "XGBoost", "Scikit-learn", "MLflow", "Weights & Biases"],
    "API/Backend": ["FastAPI", "Flask", "Django REST", "ASP.NET Core", "gRPC", "Kafka", "RabbitMQ"],
    "Cloud/DevOps": ["AWS (ECS, S3, SageMaker)", "Azure (AKS, App Service)", "GCP (Vertex AI)", "Docker", "Terraform", "Helm", "Argo CD"],
  },
};

// --- EXPERIENCE DATA ---
export const EXPERIENCE = [
  {
    company: "Neural IT Pvt Ltd",
    role: "Senior Python / ML Engineer",
    location: "Navi Mumbai",
    period: "Apr 2024 – Present",
    highlights: [
      "Deployed a GPT-4o + Tesseract OCR pipeline on Azure Kubernetes Service, processing 20k notes/day with 99.95% SLA.",
      "Built FastPDF, an Agentic-AI service to detect blank/duplicate pages, reducing a multi-day QA process for 60k documents to ~30 minutes.",
      "Engineered a 12-service FastAPI mesh with Kafka and Redis, achieving ~2000 RPS with a Mean Time to Recovery (MTTR) of 5 minutes.",
      "Implemented zero-downtime deployments using Helm & Argo CD, with an average upgrade window under 90 seconds.",
      "Managed all infrastructure as code (IaC) using Terraform, enforcing SOC 2 compliance automatically.",
    ],
    tags: ["Azure", "AKS", "GPT-4o", "OCR", "FastAPI", "Kafka", "Redis", "Helm", "Argo CD", "Terraform"],
  },
  {
    company: "Indian Navy (via Pal India)",
    role: "Machine Learning Developer",
    location: "Mumbai",
    period: "May 2023 – Feb 2024",
    highlights: [
      "Developed a hybrid ARIMA + Holt-Winters forecasting engine that cut stock-out penalties by 18M INR annually (MAPE of 7%).",
      "Built secure REST & gRPC services with OAuth2 and rate-limiting, passing security scans with zero high-severity vulnerabilities.",
      "Managed over 120 ML experiments using DVC and MLflow, reducing the model hand-off time by 70%.",
      "Led a team to annotate 50k sentences, achieving a Cohen's Kappa of 0.83, and presented a RoBERTa classifier (F1 0.86) to Naval HQ.",
    ],
    tags: ["Time-Series", "ARIMA", "gRPC", "OAuth2", "GCP Anthos", "MLflow", "DVC", "RoBERTa", "LangChain"],
  },
  {
    company: "Zeus Learning",
    role: "Software Developer",
    location: "Mumbai",
    period: "Jun 2022 – Mar 2023",
    highlights: [
      "Refactored ASP.NET MVC applications and optimized SQL queries, achieving a P99 latency of <300ms.",
      "Migrated a legacy jQuery frontend to Angular 13, resulting in a 35% smaller bundle size and a Lighthouse score of 92+.",
      "Introduced a Redis caching layer that achieved a ~92% hit-rate and fixed multiple memory leaks identified via load testing.",
    ],
    tags: ["ASP.NET MVC", ".NET", "SQL", "Angular", "Redis", "jQuery"],
  },
];

// --- PROJECTS DATA ---
export const PROJECTS = [
  {
    title: "FastPDF — AI QA for Medical PDFs",
    thumb: "gradient:rose",
    description: "An Agentic-AI pipeline to detect blank/duplicate pages in massive PDFs, processing ~60k documents in ≈30 minutes.",
    cta: [{ label: "View Details", href: "#" }],
    tags: ["Python", "FastAPI", "Azure", "Docker", "OCR", "Agentic AI"],
  },
  {
    title: "Navy Demand Forecasting Engine",
    thumb: "gradient:violet",
    description: "A hybrid time-series model with REST+gRPC APIs that cut stock-out penalties by 18M INR for the Indian Navy.",
    cta: [{ label: "View Details", href: "#" }],
    tags: ["Time-Series", "gRPC", "MLflow", "Python"],
  },
  {
    title: "Bertify — Q&A Bot",
    thumb: "gradient:indigo",
    description: "A question-answering system built with LangChain and LlamaIndex, capable of performing RAG over 50k naval documents.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/Bertify" }],
    tags: ["LangChain", "LlamaIndex", "RAG", "NLP"],
  },
  {
    title: "dQueues — Distributed Task Queues",
    thumb: "gradient:emerald",
    description: "A Python-based, NSQ-style distributed task queue benchmarked at handling over 20,000 jobs per minute.",
    cta: [{ label: "GitHub", href: "#" }],
    tags: ["Python", "NSQ", "Concurrency", "System Design"],
  },
  {
    title: "Bulky Books — ASP.NET MVC Store",
    thumb: "gradient:amber",
    description: "A feature-rich e-commerce bookstore built on ASP.NET, integrated with Stripe for payments and deployed on Azure with CI/CD.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/Bulky-MVC" }],
    tags: ["ASP.NET", "MVC", "Stripe", "Azure", "SQL"],
  },
  {
      title: "resumeCustomizer — Django + Gemini",
      thumb: "gradient:cyan",
      description: "A web app that uses the Gemini API to automatically tailor your resume to a specific job description.",
      cta: [{ label: "GitHub", href: "#" }],
      tags: ["Django", "Gemini API", "GenAI"],
  }
];

// --- OPEN SOURCE DATA ---
export const OPEN_SOURCE = [
  {
    title: "AnitaB.org OSD (CHAOSS Augur mentor)",
    description: "Mentored contributors on open-source analytics (Augur) during the AnitaB.org Open Source Day.",
  },
  {
    title: "Shopify/Wix launches (x6)",
    description: "Built and launched over six e-commerce stores for small businesses, empowering them to generate over 1M INR in revenue.",
  },
];


// --- PROFILES FOR SELECTOR ---
export const PROFILES = [
  { id: 'recruiter', name: 'Recruiter', description: 'Just the highlights, please.', icon: 'Briefcase' },
  { id: 'ai', name: 'AI/ML Engineer', description: 'Show me the models and MLOps.', icon: 'Brain' },
  { id: 'backend', name: 'Backend Dev', description: 'I care about architecture.', icon: 'Server' },
  { id: 'innovator', name: 'Innovator', description: 'Looking for creative solutions.', icon: 'Lightbulb' },
  { id: 'opensource', name: 'Open Source', description: 'Tell me about the community.', icon: 'Globe' }
];

