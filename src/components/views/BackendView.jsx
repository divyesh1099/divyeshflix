import React from 'react';
import Badge from '../common/Badge';
import { ServerIcon, ZapIcon, DatabaseIcon } from '../common/Icons';

const BackendView = ({ profile, experience }) => {
    const neuralITExp = experience.find(e => e.company === "Neural IT Pvt Ltd");
    const zeusExp = experience.find(e => e.company === "Zeus Learning");

    const coreTech = {
        "API Frameworks": ["FastAPI", "gRPC", "ASP.NET Core", "Django REST"],
        "Databases & Caching": ["SQL", "Redis", "MongoDB"],
        "Messaging & Queues": ["Kafka", "RabbitMQ"],
        "Cloud & DevOps": ["Docker", "Azure (AKS)", "Terraform", "Helm", "CI/CD"],
    };

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">Backend Engineering</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Building Scalable & High-Performance Systems</p>
            </header>

            {/* Core Technologies */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">Core Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(coreTech).map(([group, tech]) => (
                        <div key={group} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                            <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3">{group}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.map(t => <Badge key={t}>{t}</Badge>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* System Architecture */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">System Architecture: Microservices Mesh</h2>
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-8">
                   <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">High-throughput FastAPI services at Neural IT, processing ~2000 RPS.</p>
                   <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                        <div className="arch-box arch-entry">API Gateway</div>
                        <div className="arch-arrow">&rarr;</div>
                        <div className="arch-box arch-service"><span>Authentication</span><small>OAuth2</small></div>
                        <div className="arch-arrow">&rarr;</div>
                        <div className="arch-box arch-broker"><span>Message Broker</span><small>Kafka</small></div>
                        <div className="arch-arrow">&rarr;</div>
                        <div className="arch-box arch-service"><span>LLM Service</span><small>FastAPI</small></div>
                         <div className="arch-arrow">&rarr;</div>
                        <div className="arch-box arch-cache"><span>Cache & Batch</span><small>Redis Streams</small></div>
                   </div>
                </div>
            </section>

            {/* Performance & Scalability */}
            <section className="grid md:grid-cols-3 gap-8 text-center anim-stagger">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                    <ServerIcon className="h-10 w-10 mx-auto text-rose-500 mb-3" />
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">~2000 RPS</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">API Throughput</p>
                    <small className="text-xs text-zinc-400 dark:text-zinc-500">{neuralITExp.company}</small>
                </div>
                 <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                    <ZapIcon className="h-10 w-10 mx-auto text-green-500 mb-3" />
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">~45% Faster</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Page Load Speeds</p>
                     <small className="text-xs text-zinc-400 dark:text-zinc-500">{zeusExp.company}</small>
                </div>
                 <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                    <DatabaseIcon className="h-10 w-10 mx-auto text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">~92% Hit Rate</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Redis Cache</p>
                    <small className="text-xs text-zinc-400 dark:text-zinc-500">{zeusExp.company}</small>
                </div>
            </section>
        </div>
    );
};

export default BackendView;
