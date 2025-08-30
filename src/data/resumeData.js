// --- (Your other exports like EXPERIENCE, PROJECTS, etc. should remain below this) ---

// --- PROFILE DATA ---
export const PROFILE = {
  name: "Divyesh Vishwakarma",
  tag: "GenAI & Backend Engineer • MLOps Specialist",
  location: "Navi Mumbai, India",
  phone: "+91 99201 92856",
  email: "divyesh1099@gmail.com",
  // --- UPDATED: The 'links' object is now structured with categories and actions ---
  links: {
    actions: [
      {
        name: "Email Me",
        url: "mailto:divyesh1099@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Divyesh,%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.",
        icon: "MailIcon",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/919920192856?text=Hi%20Divyesh!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
        icon: "WhatsappIcon",
      },
      {
        name: "Call Me",
        url: "tel:+919920192856",
        icon: "PhoneIcon",
      },
    ],
    professional: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/divyesh-vishwakarma-621197175/" },
      { name: "BioDrop", url: "https://www.biodrop.io/divyesh1099" },
      { name: "Personal Site", url: "https://www.divyeshvishwakarma.com/" },
      { name: "MotiDivya Profile", url: "https://motidivya-6cc24.web.app/" },
    ],
    development: [
      { name: "GitHub", url: "https://github.com/divyesh1099" },
      { name: "GitHub Page", url: "https://divyesh1099.github.io/" },
      { name: "LeetCode", url: "https://leetcode.com/motidivya/" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/users/13616221/divyesh" },
      { name: "Dev.to", url: "https://dev.to/divyesh1099" },
      { name: "Medium", url: "https://medium.com/@divyesh1099" },
      { name: "CodeSandbox", url: "https://codesandbox.io/u/divyesh1099" },
      { name: "CodePen", url: "https://codepen.io/divyesh1099" },
    ],
    creative: [
      { name: "Dribbble", url: "https://dribbble.com/motidivya" },
      { name: "Behance", url: "https://www.behance.net/sonuvishwakarma13" },
      { name: "Figma", url: "https://www.figma.com/@motidivya" },
      { name: "Creative Market", url: "https://creativemarket.com/users/DivyeshVishwakarma" },
      { name: "Vimeo", url: "https://vimeo.com/user192331951" },
    ],
    social: [
      { name: "Twitter", url: "https://twitter.com/divyesh1099" },
      { name: "Instagram", url: "https://www.instagram.com/divyesh_unofficial_1099/" },
      { name: "YouTube", url: "https://www.youtube.com/channel/UC-EYI_rkPKzGecWSVe-h2LA" },
      { name: "Facebook", url: "https://www.facebook.com/divyesh.vishwkarma/" },
      { name: "Reddit", url: "https://www.reddit.com/user/divyesh1099" },
    ]
  },
  summary:
    "GenAI-focused Python Engineer with 3.5 years of experience shipping production AI and cloud back-ends. Highlights include a HIPAA-grade LLM+OCR service operating at ~2000 RPS, a naval demand-forecasting engine (7% MAPE) that cut stock-out penalties by 18M INR/yr, and FastPDF—an Agentic-AI tool that reviews 60k medical pages in 30 minutes (0.92 F1-score). Expert in FastAPI, Kafka, Docker, Terraform, and full-cycle MLOps across AWS, Azure, and GCP.",
  coreSkills: {
    "Languages / Libraries": ["Python 3.9+", "C#", "SQL", "Pandas", "NumPy", "PyTorch", "TensorFlow", "scikit-learn", "JavaScript/TypeScript"],
    "GenAI/NLP": ["GPT-4o", "Azure OpenAI", "BERT", "RoBERTa", "T5", "LangChain", "LlamaIndex", "LangGraph", "AutoGen", "CrewAI", "Gemini API"],
    "Data/ML": ["Time-Series (ARIMA, Prophet, Holt-Winters)", "XGBoost", "Random Forest", "Logistic Regression", "MLflow", "Weights & Biases", "DVC"],
    "API/Backend": ["FastAPI", "Flask", "Django REST", "ASP.NET Core", "gRPC", "Kafka", "RabbitMQ", "Node.js", "Redis"],
    "Cloud/DevOps": ["AWS (ECS, S3, SageMaker)", "Azure (AKS, App Service, Front Door, WAF)", "GCP (Vertex AI, Anthos)", "Docker", "Terraform", "Helm", "Argo CD", "GitHub Actions", "CI/CD", "Kubernetes"],
    "Frontend": ["Angular 13+", "React", "HTML5", "CSS3 (SASS)", "jQuery", "Bootstrap"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "SQL Server", "MinIO"],
    "Soft Skills": ["Technical Leadership", "Agile/Scrum", "Mentoring", "Stakeholder Communication", "Problem Solving", "Project Management"],
  },
};

// --- (The rest of your data file: EXPERIENCE, PROJECTS, etc. goes here) ---
export const EXPERIENCE = [
  {
    company: "Neural IT",
    role: "Senior Python / ML Engineer",
    location: "Navi Mumbai",
    period: "Apr 2024 – Present",
    highlights: [
      "Deployed a GPT-4o + Tesseract OCR pipeline on Azure AKS, processing 20k notes/day at 99.95% SLA and an optimized cost of $0.11/lk tokens.",
      "Built FastPDF, an Agentic-AI CLI & microservice to detect blank/duplicate pages, reducing a multi-day QA process for 60k documents to ~30 minutes (F1 Score: 0.92).",
      "Scaled a 12-service FastAPI mesh with Kafka and Redis to handle ~2000 RPS with a Mean Time to Recovery (MTTR) of <5 minutes, monitored via Graylog & Prometheus.",
      "Implemented an `asyncio` batcher with Redis Streams, cutting OpenAI token spend by 28% and reducing p95 latency by 34%.",
      "Engineered blue-green, zero-downtime releases using Helm & Argo CD, achieving a mean upgrade window of <90 seconds.",
      "Automated infrastructure (multi-AZ MongoDB, Redis Cluster, Azure WAF) with Terraform, enforcing SOC 2 compliance tags automatically.",
    ],
    tags: ["Azure", "AKS", "GPT-4o", "FastAPI", "Kafka", "Redis", "Terraform", "Helm", "Argo CD", "SOC 2", "Python"],
  },
  {
    company: "Indian Navy (via Pal India)",
    role: "Machine Learning Developer",
    location: "Mumbai",
    period: "May 2023 – Feb 2024",
    highlights: [
      "Developed a hybrid ARIMA + Holt-Winters forecasting engine that achieved 7% MAPE, cutting stock-out penalties by 18M INR and saving 6M INR annually.",
      "Built secure REST & gRPC services with OAuth2 and rate-limiting; passed BurpSuite security scans with zero high-severity vulnerabilities.",
      "Containerized and shipped the full stack as an on-prem GCP Anthos blueprint, reducing installation time to under 30 minutes.",
      "Managed 120+ experiments using DVC & MLflow, decreasing model hand-off time by 70%.",
      "Led a 3-officer team to annotate 50k sentences in Prodigy (Cohen's Kappa: 0.83), and presented a RoBERTa intent classifier (F1: 0.86) to Naval HQ.",
      "Automated nightly data ingestion from SAP MM into a MinIO data lake using Airflow DAGs with 100% back-fill reliability.",
    ],
    tags: ["Time-Series", "ARIMA", "gRPC", "GCP Anthos", "MLflow", "DVC", "RoBERTa", "LangChain", "Airflow", "Python"],
  },
  {
    company: "Zeus Learning",
    role: "Software Developer",
    location: "Mumbai",
    period: "Jun 2022 – Mar 2023",
    highlights: [
      "Refactored ASP.NET MVC apps and tuned LINQ queries, reducing P99 latency to <300ms and speeding up queries by 45%.",
      "Migrated a legacy jQuery frontend to Angular 13+ & RxJS, cutting bundle size by 35% and achieving a 92+ Lighthouse PWA score.",
      "Introduced a Redis SLRU cache layer, achieving a ~92% hit rate and fixing 3 memory leaks discovered via k6 load tests (10k VUs).",
      "Built Shopify GraphQL plug-ins that boosted client GMV by 12% and integrated Segment + GA4 analytics.",
      "Instituted agile ceremonies like retrospectives and RCA docs, increasing scrum team predictability to 92%.",
    ],
    tags: ["ASP.NET", "SQL", "Angular", "Redis", "jQuery", "Shopify", "GraphQL", "Agile/Scrum"],
  },
  {
    company: "MotiDivya (Freelance)",
    role: "Full Stack Developer",
    location: "Navi Mumbai",
    period: "Jan 2022 – Jun 2022",
    highlights: [
      "Created and deployed websites for 6 small businesses, including Shopify and Wix e-commerce stores.",
      "Managed NBPGames.com (Shopify), handling over 1000 customers/month with Razorpay integration.",
      "Launched Badboystyle.in (Wix), attracting 120+ visitors/month and achieving 257 successful orders in 2 months.",
    ],
    tags: ["Freelance", "Shopify", "Wix", "E-commerce", "Digital Marketing"],
  },
  {
    company: "SuccessR HR Tech",
    role: "Web Developer Intern",
    location: "Remote",
    period: "Jun 2021 – Jan 2022",
    highlights: [
      "Designed UI/UX mockups for key pages using AdobeXD and Figma.",
      "Implemented responsive front-end pages using HTML, CSS, Bootstrap, and Angular.",
      "Created graphics for digital marketing campaigns using Canva and Adobe Photoshop.",
    ],
    tags: ["Internship", "Angular", "Figma", "Adobe XD", "UI/UX"],
  },
  {
    company: "Suvens Consultant Pvt. Ltd",
    role: "Web Developer Intern",
    location: "Remote",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Built and deployed 4 full-stack web applications using Django and Django REST Framework.",
      "Implemented RESTful APIs with OAuth authentication and deployed them to Heroku.",
      "Managed image processing with the Pillow library and integrated the TinyMCE rich-text editor.",
    ],
    tags: ["Internship", "Django", "REST API", "Heroku", "OAuth"],
  },
];

export const PROJECTS = [
  {
    title: "FastPDF — AI QA for Medical PDFs",
    thumb: "gradient:rose",
    description: "An Agentic-AI pipeline (GPT-4o Vision + OCR) to detect blank/duplicate pages, processing ~60k documents in ≈30 minutes with a 0.92 F1-score.",
    cta: [{ label: "View Details", href: "#" }],
    tags: ["Python", "FastAPI", "Azure AKS", "Docker", "OCR", "Agentic AI"],
  },
  {
    title: "Navy Demand Forecasting Engine",
    thumb: "gradient:violet",
    description: "A hybrid time-series model (ARIMA + Holt-Winters) with REST+gRPC APIs that cut stock-out penalties by 18M INR for the Indian Navy.",
    cta: [{ label: "View Details", href: "#" }],
    tags: ["Time-Series", "gRPC", "MLflow", "Python", "GCP Anthos"],
  },
  {
    title: "Bertify — Naval Q&A Bot",
    thumb: "gradient:indigo",
    description: "A PoC for the Indian Navy. A question-answering system built with LangChain and LlamaIndex, performing RAG over 50k naval documents.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/Bertify" }],
    tags: ["LangChain", "LlamaIndex", "RAG", "NLP", "BERT"],
  },
  {
    title: "resumeCustomizer — Django + Gemini",
    thumb: "gradient:cyan",
    description: "A web app with 500+ users that uses the Gemini Pro API to automatically tailor your resume to a specific job description.",
    cta: [{ label: "View Project", href: "https://github.com/divyesh1099/resumeCustomizer" }],
    tags: ["Django", "Gemini API", "GenAI", "Python"],
  },
  {
    title: "Bulky Books — ASP.NET MVC Store",
    thumb: "gradient:amber",
    description: "A feature-rich e-commerce bookstore built on ASP.NET MVC, using EF Core, Identity for social logins, Stripe for payments, and deployed on Azure with CI/CD.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/Bulky-MVC" }],
    tags: ["ASP.NET", "MVC", "Stripe", "Azure", "SQL", "C#"],
  },
  {
    title: "PediaDose — Pediatric Dosage App",
    thumb: "gradient:lime",
    description: "A Flutter application for pediatric medicine dosing, backed by a Django RESTful API for accurate, weight-based dosing calculations.",
    cta: [{ label: "GitHub", href: "#" }],
    tags: ["Flutter", "Django", "Mobile App", "REST API"],
  },
  {
    title: "Missing Aircraft Locator",
    thumb: "gradient:sky",
    description: "An ML model using Scikit-learn to predict and visualize the potential location of a missing aircraft from its last known point of communication.",
    cta: [{ label: "GitHub", href: "#" }],
    tags: ["Machine Learning", "Scikit-learn", "Python", "Data Visualization"],
  },
  {
    title: "dQueues — Distributed Task Queue",
    thumb: "gradient:emerald",
    description: "A Python-based, NSQ-style distributed task queue benchmarked at handling over 20,000 jobs per minute.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/dQueues" }],
    tags: ["Python", "NSQ", "Concurrency", "System Design"],
  },
];

export const LEADERSHIP_AND_COMMUNITY = [
  {
    title: "Mentor, AnitaB.org Open Source Day 2021",
    description: "Mentored first-time contributors on the CHAOSS Augur project, guiding them through submitting their first pull requests to a large-scale open-source analytics platform.",
  },
  {
    title: "Student Representative, BVCOE Council (2020-22)",
    description: "Managed a $4,000 tech-fest budget and led a team of 30 volunteers to organize college-wide technical events, workshops, and competitions.",
  },
  {
    title: "Freelance E-commerce Developer",
    description: "Built and launched over six Shopify & Wix stores for small businesses, empowering them to generate over 1M INR in collective annual revenue.",
  },
];

export const EDUCATION = [
  {
    institution: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
    degree: "B.Tech in Computer Engineering",
    period: "2018 – 2022",
    details: "First Class with Distinction (GPA: 8.34/10)",
  },
  {
    institution: "Christ Academy Junior College",
    degree: "Class 12th (HSC)",
    period: "2016 – 2018",
    details: "Percentage: 75.69%",
  },
  {
    institution: "St. Mary's Multipurpose High School",
    degree: "Class 10th (SSC)",
    period: "2016",
    details: "Percentage: 87.8%",
  },
];

export const AWARDS_AND_CERTIFICATIONS = [
  {
    title: "Winner, Smart India Hackathon 2020",
    issuer: "Government of India",
    type: "Award",
  },
  {
    title: "vGHC 2021 Scholar",
    issuer: "AnitaB.org",
    type: "Award",
  },
  {
    title: "Gold Badge (Python & Problem Solving)",
    issuer: "HackerRank",
    type: "Certification",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford / Coursera",
    type: "Certification",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    type: "In Progress",
  },
];

export const PROFILES = [
  { id: 'recruiter', name: 'Recruiter', description: 'Just the highlights, please.', icon: 'Briefcase' },
  { id: 'ai', name: 'AI/ML Engineer', description: 'Show me the models and MLOps.', icon: 'Brain' },
  { id: 'backend', name: 'Backend Dev', description: 'I care about architecture.', icon: 'Server' },
  { id: 'innovator', name: 'Innovator', description: 'Looking for creative solutions.', icon: 'Lightbulb' },
  { id: 'opensource', name: 'Community', description: 'Tell me about your leadership.', icon: 'Globe' }
];
