import React from 'react';
import Badge from '../common/Badge';
import { CpuIcon, TrendingUpIcon, ServerIcon, CloudIcon, GitBranchIcon, LayersIcon } from '../common/Icons';

const skillIcons = {
    "GenAI/NLP": <CpuIcon className="h-6 w-6 text-rose-400" />,
    "Data/ML": <TrendingUpIcon className="h-6 w-6 text-blue-400" />,
    "API/Backend": <ServerIcon className="h-6 w-6 text-green-400" />,
    "Cloud/DevOps": <CloudIcon className="h-6 w-6 text-purple-400" />,
    "Languages/Libraries": <GitBranchIcon className="h-6 w-6 text-amber-400" />,
    "MLOps": <LayersIcon className="h-6 w-6 text-cyan-400" />,
};

const AIMLView = ({ profile, projects }) => {
    const aiProjects = projects.filter(p => p.tags.includes("NLP") || p.tags.includes("Time-Series"));

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">{profile.name}</h1>
                <p className="mt-4 text-xl text-rose-600 dark:text-rose-400">AI/ML Engineering Portfolio</p>
            </header>

            {/* Core Skills Section */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Core Skills Arsenal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(profile.coreSkills).map(([group, skills]) => (
                        <div key={group} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 transition-shadow hover:shadow-lg dark:hover:shadow-rose-500/10">
                            <div className="flex items-center gap-4 mb-4">
                                {skillIcons[group] || <CpuIcon className="h-6 w-6 text-zinc-400" />}
                                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{group}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Flagship Pipeline Section */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Flagship Pipeline: FastPDF</h2>
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-8">
                   <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">An automated agentic pipeline for processing over 60,000 medical documents in approximately 30 minutes.</p>
                   <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 text-center">
                        <div className="pipeline-step"><span>PDF Ingestion</span><small>Azure Blob</small></div>
                        <div className="pipeline-arrow">&rarr;</div>
                        <div className="pipeline-step"><span>OCR Processing</span><small>Tesseract</small></div>
                        <div className="pipeline-arrow">&rarr;</div>
                        <div className="pipeline-step"><span>LLM Analysis</span><small>GPT-4o</small></div>
                         <div className="pipeline-arrow">&rarr;</div>
                        <div className="pipeline-step"><span>Task Queuing</span><small>Kafka & Redis</small></div>
                        <div className="pipeline-arrow">&rarr;</div>
                        <div className="pipeline-step"><span>API Service</span><small>FastAPI</small></div>
                   </div>
                </div>
            </section>

            {/* Production Models Section */}
            <section className="anim-stagger">
                 <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Models in Production</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {aiProjects.map(p => (
                        <div key={p.title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col">
                            <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{p.title}</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400 flex-grow">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map(t => <Badge key={t}>{t}</Badge>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AIMLView;
