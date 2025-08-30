import React from 'react';
import { LightbulbIcon, ZapIcon, RocketIcon } from '../common/Icons';
import Badge from '../common/Badge';

const InnovatorView = ({ projects }) => {
    const fastPdf = projects.find(p => p.title.includes("FastPDF"));
    const navyEngine = projects.find(p => p.title.includes("Navy Demand"));
    const resumeCustomizer = projects.find(p => p.title.includes("resumeCustomizer"));

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <LightbulbIcon className="h-12 w-12 mx-auto text-amber-500 mb-4" />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">Innovation in Action</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Transforming complex challenges into elegant, impactful solutions.</p>
            </header>

            {/* Case Studies */}
            <section className="space-y-8 anim-stagger">
                 <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Challenge & Solution Case Studies</h2>
                {/* FastPDF Case Study */}
                <div className="case-study-card">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{fastPdf.title}</h3>
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div>
                           <h4 className="font-semibold text-amber-600 dark:text-amber-400">The Challenge</h4>
                           <p className="mt-2 text-zinc-600 dark:text-zinc-400">Manually reviewing hundreds of thousands of medical document pages for blank or duplicate content was slow, error-prone, and a massive operational bottleneck.</p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-green-600 dark:text-green-400">My Solution</h4>
                           <p className="mt-2 text-zinc-600 dark:text-zinc-400">I designed and built FastPDF, an agentic AI system using GPT-4o Vision and OCR. It autonomously scans documents, flags issues with high precision, and reduced a multi-day workflow to just 30 minutes.</p>
                        </div>
                    </div>
                </div>
                 {/* Navy Engine Case Study */}
                <div className="case-study-card">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{navyEngine.title}</h3>
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div>
                           <h4 className="font-semibold text-amber-600 dark:text-amber-400">The Challenge</h4>
                           <p className="mt-2 text-zinc-600 dark:text-zinc-400">The Indian Navy faced costly stock-outs of essential supplies due to inaccurate demand forecasting based on traditional methods.</p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-green-600 dark:text-green-400">My Solution</h4>
                           <p className="mt-2 text-zinc-600 dark:text-zinc-400">I developed a hybrid time-series model combining ARIMA and Holt-Winters. This data-driven approach provided far more accurate predictions, cutting stock-out penalties by 18M INR annually.</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Idea to Impact */}
            <section className="text-center anim-stagger">
                <RocketIcon className="h-10 w-10 mx-auto text-amber-500 mb-4"/>
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">From Idea to Impact</h2>
                <p className="mt-2 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                    I thrive on turning nascent ideas into fully-fledged products. My <span className="font-semibold text-zinc-900 dark:text-white">{resumeCustomizer.title}</span> project, for example, started as a simple script to help friends and grew into a web app using the Gemini API to intelligently tailor resumes for job applications.
                </p>
            </section>

            {/* Tech Mashup */}
            <section className="anim-stagger">
                 <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Creative Tech Combinations</h2>
                 <div className="text-center max-w-2xl mx-auto">
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">The most innovative solutions often come from combining technologies in novel ways.</p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <Badge>Python</Badge> <span className="text-xl text-zinc-400">+</span>
                        <Badge>GPT-4o Vision</Badge> <span className="text-xl text-zinc-400">+</span>
                        <Badge>Kafka</Badge> <span className="text-xl text-zinc-400">+</span>
                        <Badge>Docker</Badge> <span className="text-xl text-amber-500 font-bold">&rarr;</span>
                        <span className="font-semibold p-2 rounded-md bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">High-Speed Document QA</span>
                    </div>
                 </div>
            </section>

        </div>
    );
};

export default InnovatorView;

