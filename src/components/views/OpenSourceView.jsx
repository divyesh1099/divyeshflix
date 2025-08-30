import React from 'react';
import { GithubIcon, HeartIcon, UsersIcon } from '../common/Icons';

const ContributionGraph = () => {
    // Generate a mock 52x7 grid for the contribution graph
    const weeks = Array.from({ length: 52 }, () => 
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    );

    const levelColors = [
        'bg-zinc-100 dark:bg-zinc-800', // Level 0
        'bg-emerald-200 dark:bg-emerald-900', // Level 1
        'bg-emerald-400 dark:bg-emerald-700', // Level 2
        'bg-emerald-600 dark:bg-emerald-500', // Level 3
        'bg-emerald-800 dark:bg-emerald-300', // Level 4
    ];

    return (
        <div className="grid grid-flow-col grid-rows-7 gap-1 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            {weeks.flat().map((level, i) => (
                <div 
                    key={i} 
                    className={`h-3 w-3 rounded-sm contrib-cell ${levelColors[level]}`} 
                    style={{ '--delay': `${i * 0.005}s` }}
                />
            ))}
        </div>
    );
};


const OpenSourceView = ({ openSource, profile }) => {
    const mentorship = openSource.find(item => item.title.includes("AnitaB.org"));
    const freelance = openSource.find(item => item.title.includes("Shopify/Wix"));

    return (
        <div className="mx-auto max-w-7xl py-12 px-4 space-y-16">
            {/* Header */}
            <header className="text-center anim-stagger">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">Building in the Open</h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Community, Collaboration, and Code</p>
            </header>

            {/* Contribution Spotlight & Philosophy */}
            <section className="grid md:grid-cols-5 gap-8 items-center anim-stagger">
                <div className="md:col-span-3">
                     <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">My Philosophy</h2>
                     <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                        <p>
                            I believe that the most impactful technology is built collaboratively and transparently. Open source is more than just code; it's a global community dedicated to solving problems together and empowering others to build upon shared knowledge.
                        </p>
                        <p>
                            Whether it's mentoring newcomers or building tools that help small businesses thrive, my goal is to contribute to a healthier, more accessible tech ecosystem.
                        </p>
                     </div>
                </div>
                <div className="md:col-span-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                    <HeartIcon className="h-8 w-8 text-rose-500 mb-3" />
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Mentorship</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{mentorship.description}</p>
                    <a href="https://anitab.org/" target="_blank" rel="noreferrer" className="text-sm text-rose-500 dark:text-rose-400 mt-2 inline-block hover:underline">
                        Learn more about AnitaB.org &rarr;
                    </a>
                </div>
            </section>

            {/* Contribution Graph */}
            <section className="anim-stagger">
                <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-8">My GitHub Activity</h2>
                <ContributionGraph />
                 <div className="text-center mt-4">
                    <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 transition-colors">
                        <GithubIcon className="h-5 w-5" />
                        <span>View on GitHub</span>
                    </a>
                </div>
            </section>
            
            {/* Community Impact */}
             <section className="text-center anim-stagger">
                <UsersIcon className="h-10 w-10 mx-auto text-green-500 mb-4"/>
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Community Impact</h2>
                <p className="mt-2 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                    {freelance.description}
                </p>
            </section>
        </div>
    );
};

export default OpenSourceView;

