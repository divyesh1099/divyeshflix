import React from 'react';
import Badge from '../common/Badge';
import { LightbulbIcon, TargetIcon, SparklesIcon, RocketIcon } from '../common/Icons';

const InnovatorView = ({ projects }) => {
    const innovatorProjects = projects.filter(p => ["FastPDF — AI QA for Medical PDFs", "Navy Demand Forecasting Engine"].includes(p.title));

    const caseStudies = [
        {
            project: innovatorProjects[0],
            challenge: "Manual, error-prone QA of 60k+ medical pages was a significant bottleneck, taking days of human effort.",
            solution: "Developed 'FastPDF', an Agentic-AI pipeline using GPT-4o and advanced OCR to automate the detection of blanks and duplicates.",
            impact: "Reduced a multi-day process to ~30 minutes with an F1 score of 0.92, dramatically increasing efficiency."
        },
        {
            project: innovatorProjects[1],
            challenge: "Inaccurate demand forecasting for the Indian Navy led to frequent stock-outs and logistical inefficiencies.",
            solution: "Engineered a hybrid forecasting model combining ARIMA and Holt-Winters to predict inventory needs with greater accuracy.",
            impact: "Cut stock-out penalties by 18M INR annually and improved overall supply chain reliability."
        }
    ];

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-20">
            {/* Header */}
            <header className="text-center anim-stagger">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">From Idea to Impact</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Creative Solutions to Complex Challenges</p>
            </header>

            {/* Case Studies Section */}
            <div className="space-y-16">
                {caseStudies.map((study, index) => (
                    <section key={study.project.title} className="anim-stagger">
                        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">{study.project.title}</h2>
                        <div className="grid lg:grid-cols-3 gap-8 text-center lg:text-left">
                            {/* Challenge */}
                            <div className="case-study-card">
                                <TargetIcon className="h-8 w-8 mx-auto lg:mx-0 mb-4 text-red-500" />
                                <h3 className="font-bold text-xl text-zinc-900 dark:text-white">The Challenge</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{study.challenge}</p>
                            </div>
                            {/* Solution */}
                            <div className="case-study-card">
                                <LightbulbIcon className="h-8 w-8 mx-auto lg:mx-0 mb-4 text-yellow-500" />
                                <h3 className="font-bold text-xl text-zinc-900 dark:text-white">The Solution</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{study.solution}</p>
                            </div>
                            {/* Impact */}
                            <div className="case-study-card">
                                <SparklesIcon className="h-8 w-8 mx-auto lg:mx-0 mb-4 text-green-500" />
                                <h3 className="font-bold text-xl text-zinc-900 dark:text-white">The Impact</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{study.impact}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* What's Next Section */}
            <section className="text-center anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-4">What's Next?</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        I'm currently exploring advanced agentic workflows with frameworks like <b className="text-zinc-800 dark:text-zinc-200">LangGraph</b> and <b className="text-zinc-800 dark:text-zinc-200">CrewAI</b> to build more sophisticated, multi-agent systems that can tackle even more complex problems. The goal is to create autonomous systems that can reason, plan, and execute tasks with minimal human intervention.
                    </p>
                    <RocketIcon className="h-10 w-10 mx-auto mt-6 text-rose-500"/>
                </div>
            </section>
        </div>
    );
};

export default InnovatorView;
