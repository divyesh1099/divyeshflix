import React from 'react';
import { ServerIcon, ZapIcon, CodeIcon } from '../common/Icons';

const BackendView = ({ profile, experience }) => {
    const neuralItExp = experience.find(e => e.company.includes("Neural IT"));
    const zeusExp = experience.find(e => e.company.includes("Zeus Learning"));

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <ServerIcon className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">Backend & Cloud Engineering</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Building robust, scalable, and high-performance systems.</p>
            </header>

            {/* Performance Metrics */}
            <section className="grid md:grid-cols-3 gap-8 text-center anim-stagger">
                <div>
                    <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">~2000 RPS</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Peak throughput for FastAPI microservices mesh.</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">&lt;300ms</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">P99 latency achieved after SQL & .NET optimizations.</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">92%+</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">Cache hit-rate with Redis, reducing CPU load.</p>
                </div>
            </section>

             {/* System Architecture */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">System Architecture Example</h2>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 text-center">
                    <div className="arch-box arch-service"><span>API Gateway</span><small>FastAPI</small></div>
                    <div className="arch-arrow">&rarr;</div>
                    <div className="arch-box arch-broker"><span>Message Broker</span><small>Kafka</small></div>
                    <div className="arch-arrow">&rarr;</div>
                    <div className="flex flex-col gap-2 justify-center">
                        <div className="arch-box arch-service"><span>OCR Service</span><small>Consumer</small></div>
                        <div className="arch-box arch-service"><span>LLM Service</span><small>Consumer</small></div>
                    </div>
                    <div className="arch-arrow">&rarr;</div>
                    <div className="arch-box arch-cache"><span>Cache & Batching</span><small>Redis Streams</small></div>
                </div>
                <p className="text-center text-sm text-zinc-500 mt-4">Simplified view of the event-driven microservices at Neural IT.</p>
            </section>
            
            {/* Core Technologies */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Core Technologies</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {profile.coreSkills["API/Backend"].map(skill => (
                        <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                           <CodeIcon className="h-5 w-5 text-blue-500"/> <span>{skill}</span>
                        </div>
                    ))}
                    {profile.coreSkills["Cloud/DevOps"].slice(0, 4).map(skill => (
                        <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                           <ZapIcon className="h-5 w-5 text-blue-500"/> <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BackendView;

