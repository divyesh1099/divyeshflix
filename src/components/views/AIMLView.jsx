import React from 'react';
import Badge from '../common/Badge';
import { BrainIcon, CpuIcon, ZapIcon } from '../common/Icons';

const AIMLView = ({ profile, projects }) => {
    const fastPdf = projects.find(p => p.title.includes("FastPDF"));
    const navyEngine = projects.find(p => p.title.includes("Navy Demand"));

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <BrainIcon className="h-12 w-12 mx-auto text-rose-500 mb-4" />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">AI & Machine Learning</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Building intelligent systems from prototype to production.</p>
            </header>

            {/* Core Competencies */}
            <section className="grid md:grid-cols-3 gap-8 text-center anim-stagger">
                <div>
                    <CpuIcon className="h-8 w-8 mx-auto text-rose-500 mb-2" />
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Generative AI & NLP</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Fine-tuning models, RAG pipelines, and building with agentic AI frameworks.</p>
                </div>
                <div>
                    <ZapIcon className="h-8 w-8 mx-auto text-rose-500 mb-2" />
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Classical ML</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Time-series forecasting, classification, and regression models at scale.</p>
                </div>
                <div>
                    <BrainIcon className="h-8 w-8 mx-auto text-rose-500 mb-2" />
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">MLOps</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">End-to-end lifecycle management: from data pipelines to production monitoring.</p>
                </div>
            </section>
            
            {/* Featured Models */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Flagship Models in Production</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* FastPDF */}
                    <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{fastPdf.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-2">{fastPdf.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {fastPdf.tags.map(t => <Badge key={t}>{t}</Badge>)}
                        </div>
                    </div>
                    {/* Navy Engine */}
                    <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{navyEngine.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-2">{navyEngine.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {navyEngine.tags.map(t => <Badge key={t}>{t}</Badge>)}
                        </div>
                    </div>
                </div>
            </section>

             {/* MLOps Pipeline */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Anatomy of an AI Service: FastPDF</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="pipeline-step"><span>PDF Ingestion</span><small>S3/Blob Storage</small></div>
                    <div className="pipeline-arrow">&rarr;</div>
                    <div className="pipeline-step"><span>OCR Processing</span><small>Tesseract</small></div>
                    <div className="pipeline-arrow">&rarr;</div>
                    <div className="pipeline-step"><span>Agentic Analysis</span><small>GPT-4o & LangGraph</small></div>
                    <div className="pipeline-arrow">&rarr;</div>
                    <div className="pipeline-step"><span>API Delivery</span><small>FastAPI & Kafka</small></div>
                    <div className="pipeline-arrow">&rarr;</div>
                    <div className="pipeline-step"><span>Deployment</span><small>Azure (AKS)</small></div>
                </div>
            </section>

             {/* Tech Stack */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">My Tech Stack</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {Object.entries(profile.coreSkills).map(([group, skills]) => (
                        <div key={group} className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                            <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">{group}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AIMLView;

