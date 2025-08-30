import React, { useMemo, useRef, useState, useEffect } from "react";
import { render } from "react-dom";

/*
  DivyeshFlix — a Netflix‑style interactive resume
  ------------------------------------------------
  • Single‑file React app. TailwindCSS for styling.
  • GSAP for scroll animations, Three.js for 3D background.
  • Multi-page experience based on selected profile.

  How to use:
  1) Make sure you have these scripts in your index.html's <head>:
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  2) Replace src/App.jsx with this file's contents.
  3) Start dev server. Edit PROFILE below to fit your details.
*/

// ——— PROFILE DATA (pre‑filled from your uploaded resume, adjust as needed) ———
const PROFILE = {
  name: "Divyesh Vishwakarma",
  tag: "Software Engineer • AI/Backend • MLOps",
  location: "Navi Mumbai, India",
  phone: "+919920192856", // No spaces for tel: link
  email: "divyesh@divyeshvishwakarma.com", // Updated email
  website: "divyeshvishwakarma.com",
  github: "github.com/divyesh1099",
  linkedin: "linkedin.com/in/divyesh-vishwakarma-621197175",
  summary:
    "Software engineer (≈3.5 yrs) building production AI + cloud backends: high‑throughput LLM/OCR for medical records, demand‑forecasting for Indian Navy (reduced stock‑outs), and FastPDF—automates review of ~60k medical docs in ~30 min. Comfortable across MLOps lifecycle. Python, FastAPI, Docker; AWS/Azure/GCP.",
  coreSkills: {
    "Languages/Libraries": ["Python", "C#", "SQL", "Pandas", "NumPy", "PyTorch", "TensorFlow"],
    "GenAI/NLP": ["GPT‑4o", "Azure OpenAI", "BERT", "LangChain", "LlamaIndex", "Agentic AI"],
    "Data/ML": ["Time‑Series (ARIMA, Prophet)", "XGBoost", "Scikit‑learn", "MLflow"],
    "API/Backend": ["FastAPI", "Flask", "Django", "ASP.NET Core", "gRPC", "Kafka", "RabbitMQ"],
    "Cloud/DevOps": ["AWS (ECS, S3)", "Azure (AKS, App Service)", "GCP (Vertex AI)", "Docker", "Terraform", "Helm"],
  },
};

const EXPERIENCE = [
  {
    company: "Neural IT Pvt Ltd",
    role: "Senior Python / ML Engineer",
    location: "Navi Mumbai",
    period: "Apr 2024 – Present",
    highlights: [
      "Deployed GPT‑4o + Tesseract OCR pipeline on Azure Kubernetes Service.",
      "Built FastPDF (Agentic AI) to detect blank/duplicate pages; massively speeds QA of medical docs.",
      "Microservices with FastAPI + Kafka + Redis; asyncio batching via Redis Streams.",
      "Helm + Argo CD for zero‑downtime deploys; Terraform for infra (ECR/S3/log pipelines).",
      "CI via GitHub Actions (lint/tests).",
    ],
    links: [{ label: "FastPDF (overview)", href: "#" }],
    tags: ["Azure", "AKS", "GPT‑4o", "OCR", "FastAPI", "Kafka", "Redis", "Helm", "Argo CD", "Terraform"],
  },
  {
    company: "Indian Navy (Pal India)",
    role: "Machine Learning Developer",
    location: "Mumbai",
    period: "May 2023 – Feb 2024",
    highlights: [
      "Hybrid forecasting engine (ARIMA + Holt‑Winters) improving stock prediction; reduced stock‑outs.",
      "Secure REST + gRPC services with OAuth2 + rate limiting.",
      "GCP Anthos blueprint for on‑prem deploys; ≥120 ML experiments tracked (DVC + MLflow).",
      "Led team of 3 to annotate 50k sentences in 6 languages; presented RoBERTa intent classifier + LangChain RAG to Naval HQ.",
    ],
    tags: ["Time‑Series", "ARIMA", "Holt‑Winters", "gRPC", "OAuth2", "GCP Anthos", "MLflow", "DVC", "RoBERTa", "LangChain"],
  },
  {
    company: "Zeus Learning",
    role: "Software Developer",
    location: "Mumbai",
    period: "Jun 2022 – Mar 2023",
    highlights: [
      "Refactored ASP.NET MVC + optimized SQL (reported ~45% faster page loads).",
      "Migrated jQuery frontend → Angular 13 (bundle size ↓, performance ↑).",
      "Implemented Redis cache (~92% hit‑rate; CPU ↓ ~40%).",
    ],
    tags: ["ASP.NET MVC", "SQL", "Angular", "Redis"],
  },
];

const PROJECTS = [
  {
    title: "FastPDF — AI QA for massive medical PDFs",
    thumb: "gradient:rose",
    description:
      "Agentic pipeline to detect blank/duplicate pages for 10k+ page PDFs; ~60k docs processed ≈30 min.",
    cta: [
      { label: "Readme", href: "https://github.com/divyesh1099" },
      { label: "Demo", href: "https://divyeshvishwakarma.com" },
    ],
    tags: ["Python", "FastAPI", "Azure", "Docker", "OCR", "NLP"],
  },
  {
    title: "Navy Demand Forecasting Engine",
    thumb: "gradient:violet",
    description:
      "ARIMA/Holt‑Winters hybrid with REST+gRPC APIs. Reduced stock‑outs by better demand estimates.",
    cta: [{ label: "Overview", href: "#" }],
    tags: ["Time‑Series", "gRPC", "OAuth2", "MLflow"],
  },
  {
    title: "Bertify — Q&A bot",
    thumb: "gradient:indigo",
    description:
      "LangChain + LlamaIndex Q/A system over docs; retriever‑augmented.",
    cta: [{ label: "GitHub", href: "https://github.com/divyesh1099/Bertify" }],
    tags: ["LangChain", "LlamaIndex"],
  },
];


const OPEN_SOURCE = [
  {
    title: "AnitaB.org OSD (CHAOSS Augur mentor)",
    thumb: "gradient:cyan",
    description: "Mentored contributors on open‑source analytics (Augur).",
    tags: ["Mentorship", "Open Source"],
  },
];

const EDUCATION = [
  {
    school: "B.Tech — Computer Engineering, BVCoE, Navi Mumbai",
    period: "2018 – 2022",
    detail: "First Class with Distinction (GPA 8.34/10)",
  },
];

const CERTS = [
  { name: "AWS Solutions Architect Associate (in progress)" },
  { name: "Coursera Machine Learning (Stanford)" },
  { name: "HackerRank Gold Medalist — Python Data Structures" },
  { name: "vGHC 2021 Scholar" },
  { name: "Winner — Smart India Hackathon 2020" },
];

// --- SVG ICONS ---
const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const WhatsAppIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);


// ——— 3D BACKGROUND COMPONENT ———
const ThreeJSBackground = () => {
    const mountRef = useRef(null);
    useEffect(() => {
        if (!window.THREE) return; 

        const scene = new window.THREE.Scene();
        const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new window.THREE.WebGLRenderer({ canvas: mountRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new window.THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new window.THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true, roughness: 0.5 });
        const torusKnot = new window.THREE.Mesh(geometry, material);
        torusKnot.position.z = -30;
        scene.add(torusKnot);

        const light = new window.THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, -10);
        scene.add(light);
        
        const ambientLight = new window.THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.001;
            torusKnot.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={mountRef} className="fixed top-0 left-0 -z-10" />;
};


// ——— UI HELPERS ———
const gradients = {
  rose: "from-rose-500/70 via-pink-500/60 to-rose-700/70",
  violet: "from-violet-500/70 via-purple-500/60 to-fuchsia-700/70",
  indigo: "from-indigo-500/70 via-blue-500/60 to-violet-700/70",
  emerald: "from-emerald-500/70 via-teal-500/60 to-emerald-700/70",
  amber: "from-amber-500/70 via-orange-500/60 to-amber-700/70",
  cyan: "from-cyan-500/70 via-sky-500/60 to-cyan-700/70",
  fuchsia: "from-fuchsia-500/70 via-pink-500/60 to-fuchsia-700/70",
};

function gradientClass(token) {
  if (!token?.startsWith("gradient:")) return "from-gray-700 to-gray-900";
  const key = token.split(":")[1];
  return gradients[key] || "from-gray-700 to-gray-900";
}

function useDarkMode(defaultDark = true) {
  const [dark, setDark] = useState(defaultDark);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

// ——— REUSABLE UI ———
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700/60 bg-white/40 dark:bg-transparent px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
    {children}
  </span>
);

const SectionHeader = ({ title, count }) => (
  <div className="mb-3 flex items-end justify-between anim-stagger">
    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
    {typeof count === "number" && (
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{count} items</span>
    )}
  </div>
);

const Card = ({ item, onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="group anim-stagger relative mr-3 w-[220px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:ring-black/10 dark:bg-zinc-900/60 dark:ring-white/5 dark:hover:ring-white/10"
      aria-label={`Open ${item.title || item.company}`}
    >
      <div className={`h-32 bg-gradient-to-br ${gradientClass(item.thumb)}`} />
      <div className="p-3 text-left">
        <div className="line-clamp-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">
          {item.title || item.company}
        </div>
        <div className="mt-1 line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400">
          {item.description || item.role || item.detail}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {(item.tags || []).slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const Row = ({ title, items, onOpen }) => (
  <section className="mb-8">
    <SectionHeader title={title} count={items.length} />
    <div className="relative">
      <div className="flex snap-x snap-mandatory overflow-x-auto pb-2">
        {items.map((item, idx) => (
          <div key={(item.title || item.company) + idx} className="snap-start">
            <Card item={item} onOpen={() => onOpen(item)} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Modal = ({ open, item, onClose }) => {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-zinc-900/70 p-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-zinc-100/95 shadow-2xl ring-1 ring-black/10 dark:border-white/10 dark:bg-zinc-950/90 dark:ring-white/10">
        <div className={`h-40 w-full bg-gradient-to-br ${gradientClass(item.thumb)}`} />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {item.title || item.company}
            </h3>
            <button
              onClick={onClose}
              className="rounded-full bg-black/10 px-3 py-1 text-xs text-zinc-800 hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Close
            </button>
          </div>
          {item.role && (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              <span className="font-medium">{item.role}</span>
              {item.period ? ` • ${item.period}` : ""}
              {item.location ? ` • ${item.location}` : ""}
            </p>
          )}
          {item.description && (
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.description}</p>
          )}
          {item.highlights && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          {(item.tags?.length || 0) > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          )}
          {(item.cta?.length || 0) > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {item.cta.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {c.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


function Navbar({ query, setQuery, dark, setDark, onBack }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/30 dark:border-white/5 dark:bg-zinc-950/70 dark:supports-[backdrop-filter]:bg-zinc-950/30">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button onClick={onBack} className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white mr-2">
          &larr; Back
        </button>
        <div className="text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
            DIVYESHFLIX
          </span>
        </div>
       
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-40 md:w-60 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-400"
            />
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-xs text-zinc-700 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            title="Toggle dark mode"
          >
            {dark ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ profile }) {
  return (
    <section className="relative z-10 mx-auto my-16 max-w-7xl text-center">
      <h1 className="hero-text text-4xl font-black leading-tight text-zinc-900 dark:text-white md:text-6xl">
        {profile.name}
      </h1>
      <p className="hero-text mt-2 text-sm font-medium text-rose-500 dark:text-rose-300">{profile.tag}</p>
      <p className="hero-text mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{profile.summary}</p>
      <div className="hero-text mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-600 dark:text-zinc-300">
          <a href={`https://${profile.website}`} target="_blank" rel="noreferrer" className="underline decoration-black/30 underline-offset-4 hover:text-black dark:decoration-white/30 dark:hover:text-white">
            {profile.website}
          </a>
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="underline decoration-black/30 underline-offset-4 hover:text-black dark:decoration-white/30 dark:hover:text-white">
            GitHub
          </a>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="underline decoration-black/30 underline-offset-4 hover:text-black dark:decoration-white/30 dark:hover:text-white">
            LinkedIn
          </a>
      </div>
    </section>
  );
}


function CoreSkills({ skills }) {
  const entries = Object.entries(skills || {});
  return (
    <section id="skills" className="mx-auto mb-10 max-w-7xl">
      <SectionHeader title="Core Skills" count={entries.length} />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {entries.map(([group, list]) => (
          <div
            key={group}
            className="anim-stagger rounded-2xl border border-black/10 bg-white p-4 ring-1 ring-black/5 shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:ring-white/5 dark:shadow-none"
          >
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">{group}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {list.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm({ profile }) {
    return (
      <section id="contact" className="mx-auto my-16 max-w-4xl text-center">
        <h2 className="anim-stagger text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Let's Build Something Great
        </h2>
        <p className="anim-stagger mt-3 text-zinc-600 dark:text-zinc-400">
          Have a project in mind, a question, or just want to connect? Reach out!
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="anim-stagger group rounded-2xl border border-black/10 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/50"
          >
            <MailIcon className="mx-auto h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">Email</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 truncate">{profile.email}</p>
          </a>
          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank" rel="noreferrer"
            className="anim-stagger group rounded-2xl border border-black/10 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/50"
          >
            <WhatsAppIcon className="mx-auto h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">WhatsApp</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Message Me</p>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="anim-stagger group rounded-2xl border border-black/10 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/50"
          >
            <PhoneIcon className="mx-auto h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">Call</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Let's Talk</p>
          </a>
        </div>
      </section>
    );
}


// --- Animation styles and Intro Component ---
const GlobalStyles = () => (
  <style>{`
    @keyframes netflix-intro {
      0% { transform: scale(0.9); letter-spacing: 0.3em; opacity: 0; }
      50% { transform: scale(1); letter-spacing: normal; opacity: 1; }
      85% { transform: scale(1); letter-spacing: normal; opacity: 1; }
      100% { transform: scale(30); opacity: 0; }
    }
    .netflix-intro-animation { animation: netflix-intro 4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .profile-selector { animation: fade-in 0.5s ease-out forwards; }
    @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  `}</style>
);

const NetflixIntro = ({ name = "DIVYESHFLIX" }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <h1
        className="netflix-intro-animation text-6xl font-black uppercase text-red-600 md:text-9xl"
        style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
      >
        {name}
      </h1>
    </div>
  );
};

// --- PROFILE SELECTOR ---
const PROFILES = [
    { id: 'ai', name: 'AI/ML Engineer', icon: '🤖', color: 'bg-blue-500' },
    { id: 'backend', name: 'Backend Dev', icon: '⚙️', color: 'bg-red-500' },
    { id: 'innovator', name: 'Innovator', icon: '💡', color: 'bg-yellow-500' },
    { id: 'opensource', name: 'Open Source', icon: '🌍', color: 'bg-green-500' },
    { id: 'recruiter', name: 'Recruiter', icon: '🧑‍💼', color: 'bg-purple-500' },
];

const ProfileSelector = ({ onProfileSelect }) => {
    return (
        <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black profile-selector">
            <h2 className="mb-8 text-3xl text-white md:text-5xl">Who's exploring?</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {PROFILES.map((profile) => (
                    <button key={profile.id} onClick={() => onProfileSelect(profile.id)} className="group flex flex-col items-center">
                        <div className={`h-24 w-24 md:h-36 md:w-36 rounded-lg ${profile.color} flex items-center justify-center text-5xl md:text-7xl transition-transform duration-300 group-hover:scale-110`}>
                           {profile.icon}
                        </div>
                        <span className="mt-2 text-zinc-400 transition-colors group-hover:text-white">{profile.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- CONTENT PAGES FOR EACH PROFILE ---
const AllInOneView = ({ setModalItem, projects, experience, openSource }) => (
    <>
        <Hero profile={PROFILE} />
        <section id="projects" className="mx-auto mb-10 max-w-7xl">
            <Row title="Featured Projects" items={projects} onOpen={setModalItem} />
        </section>
        <section id="experience" className="mx-auto mb-10 max-w-7xl">
            <Row title="Experience" items={experience} onOpen={setModalItem} />
        </section>
        <section className="mx-auto mb-10 max-w-7xl">
            <Row title="Open Source & Leadership" items={openSource} onOpen={setModalItem} />
        </section>
        <CoreSkills skills={PROFILE.coreSkills} />
        <ContactForm profile={PROFILE} />
    </>
);

const RecruiterView = ({ profile, experience, projects }) => (
    <div className="mx-auto max-w-4xl py-12">
        <div className="text-center mb-12 anim-stagger">
            <h1 className="text-4xl font-bold dark:text-white">{profile.name}</h1>
            <p className="text-rose-500 dark:text-rose-400 mt-1">{profile.tag}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                <p className="anim-stagger text-zinc-600 dark:text-zinc-300">{profile.summary}</p>
                <div className="anim-stagger">
                    <h3 className="font-bold text-xl mb-4 dark:text-white">Top Projects</h3>
                    <div className="space-y-4">
                        {projects.slice(0, 2).map(p => (
                            <div key={p.title} className="p-4 rounded-lg border dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50">
                                <h4 className="font-bold dark:text-zinc-100">{p.title}</h4>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="anim-stagger">
                    <h3 className="font-bold text-xl mb-2 dark:text-white">Contact</h3>
                    <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                        <li><a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></li>
                        <li><a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a></li>
                        <li><a href={`https://${profile.website}`} target="_blank" rel="noreferrer" className="hover:underline">{profile.website}</a></li>
                    </ul>
                </div>
                <div className="anim-stagger">
                    <h3 className="font-bold text-xl mb-2 dark:text-white">Key Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {["Python", "FastAPI", "Azure", "Docker", "GPT-4o", "Terraform"].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>
                 <div className="anim-stagger">
                    <a href="#" download className="inline-block w-full text-center bg-rose-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors">Download Full CV</a>
                </div>
            </div>
        </div>
    </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const { dark, setDark } = useDarkMode(true);
  const [query, setQuery] = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [animationStep, setAnimationStep] = useState('intro');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
        setAnimationStep('profiles');
    }, 4000);
    return () => clearTimeout(introTimer);
  }, []);
  
  const handleProfileSelect = (profileId) => {
      setSelectedProfile(profileId);
      setAnimationStep('content');
  };

  const handleBack = () => {
      setSelectedProfile(null);
      setAnimationStep('profiles');
  }

  useEffect(() => {
    if (animationStep !== 'content' || !window.gsap) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    
    const tl = window.gsap.timeline();
    tl.from(".anim-stagger", {
      duration: 0.7,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });

  }, [animationStep, selectedProfile]);

  const q = query.trim().toLowerCase();
  const projects = useMemo(() =>
    q ? PROJECTS.filter(p => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q))) : PROJECTS,
  [q]);

  const experience = useMemo(() =>
    q ? EXPERIENCE.filter(e => e.company.toLowerCase().includes(q) || e.role.toLowerCase().includes(q) || (e.tags || []).some(t => t.toLowerCase().includes(q))) : EXPERIENCE,
  [q]);

  const openSource = useMemo(() =>
    q ? OPEN_SOURCE.filter(o => o.title.toLowerCase().includes(q) || o.description?.toLowerCase().includes(q) || (o.tags || []).some(t => t.toLowerCase().includes(q))) : OPEN_SOURCE,
  [q]);

  const renderContent = () => {
    switch (selectedProfile) {
        case 'ai':
        case 'backend':
        case 'innovator':
        case 'opensource':
            return <AllInOneView setModalItem={setModalItem} projects={projects} experience={experience} openSource={openSource} />;
        case 'recruiter':
            return <RecruiterView profile={PROFILE} experience={experience} projects={projects} />;
        default:
            return <AllInOneView setModalItem={setModalItem} projects={projects} experience={experience} openSource={openSource} />;
    }
  };

  if (animationStep === 'intro') {
    return (
      <div className="min-h-screen bg-black">
        <GlobalStyles />
        <NetflixIntro name="DIVYESHFLIX" />
      </div>
    );
  }
  
  if (animationStep === 'profiles') {
      return (
          <div className="min-h-screen bg-black">
              <GlobalStyles />
              <ProfileSelector onProfileSelect={handleProfileSelect} />
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 dark:bg-black dark:text-white selection:bg-rose-500/20">
      <ThreeJSBackground />
      <Navbar query={query} setQuery={setQuery} dark={dark} setDark={setDark} onBack={handleBack} />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-2">
        {renderContent()}
      </main>
      <Modal open={!!modalItem} item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );
}

