import React from 'react';
import { DownloadIcon, LinkedInIcon, MailIcon, CheckCircleIcon } from '../common/Icons';
import Badge from '../common/Badge';

const RecruiterView = ({ profile, experience, projects }) => {
    const STATS = [
        { label: "Experience", value: "3.5+ Years" },
        { label: "Core Expertise", value: "AI & Cloud Backend" },
        { label: "Top Skills", value: "Python, Azure, Docker" },
    ];
    
    const TOP_ACHIEVEMENTS = [
        "Reduced naval stock-out penalties by 18M INR/year with a hybrid forecasting engine.",
        "Cut medical document QA time from hours to 30 minutes for 60k pages using an Agentic-AI tool.",
        "Engineered a high-throughput microservices backend achieving ~2000 RPS.",
        "Improved web app page loads by ~45% through targeted SQL and frontend optimizations.",
    ];

    return (
        <div className="mx-auto max-w-5xl py-12 px-4">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 anim-stagger">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">{profile.name}</h1>
                    <p className="mt-2 text-xl text-rose-600 dark:text-rose-400">{profile.tag}</p>
                    <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">{profile.summary}</p>
                </div>
                <div className="flex flex-col gap-3 anim-stagger">
                    <a href="/Divyesh_Vishwakarma_Resume.pdf" download className="flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-500">
                        <DownloadIcon className="h-5 w-5" />
                        <span>Download CV</span>
                    </a>
                    <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        <LinkedInIcon className="h-5 w-5" />
                        <span>LinkedIn</span>
                    </a>
                    <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        <MailIcon className="h-5 w-5" />
                        <span>Email Me</span>
                    </a>
                </div>
            </div>

            {/* At a Glance Dashboard */}
            <div className="my-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center anim-stagger">
                {STATS.map(stat => (
                    <div key={stat.label} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                        <p className="text-lg font-semibold text-zinc-900 dark:text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    {/* Top Achievements */}
                    <section className="anim-stagger">
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Top Achievements</h2>
                        <ul className="space-y-3">
                            {TOP_ACHIEVEMENTS.map((ach, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-zinc-700 dark:text-zinc-300">{ach}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Impact Projects */}
                    <section className="anim-stagger">
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Impact Projects</h2>
                        <div className="space-y-6">
                            {projects.map(p => (
                                <div key={p.title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
                                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{p.title}</h3>
                                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">{p.description}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tags.map(t => <Badge key={t}>{t}</Badge>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Experience Timeline */}
                <aside className="space-y-8 anim-stagger">
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Career Timeline</h2>
                    <ol className="relative border-l border-zinc-200 dark:border-zinc-700">
                        {experience.map((job, i) => (
                            <li key={i} className="mb-8 ml-4">
                                <div className="absolute w-3 h-3 bg-zinc-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">{job.period}</time>
                                <h3 className="font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                                <p className="text-sm font-normal text-zinc-600 dark:text-zinc-300">{job.company}</p>
                            </li>
                        ))}
                    </ol>
                </aside>
            </div>
        </div>
    );
};

export default RecruiterView;
