import React from 'react';
import Badge from '../common/Badge';

const RecruiterView = ({ profile, experience, projects }) => {
  const topProjects = projects.slice(0, 3);
  const topExperience = experience[0];

  return (
    <div className="mx-auto max-w-5xl py-12 px-4 space-y-12">
      {/* Header */}
      <header className="anim-stagger">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg font-medium text-rose-600 dark:text-rose-400">{profile.tag}</p>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a href={`mailto:${profile.email}`} className="px-4 py-2 text-sm font-semibold text-white bg-rose-600 rounded-md hover:bg-rose-700 transition-colors">Contact Me</a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:underline">LinkedIn</a>
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:underline">GitHub</a>
             <a href="/Divyesh_Vishwakarma_Resume.pdf" download="Divyesh_Vishwakarma_Resume.pdf" className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:underline">Download CV</a>
        </div>
      </header>

      {/* At a Glance */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 anim-stagger">
        <div className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Experience</h3>
          <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">3.5+ Years</p>
        </div>
        <div className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Core Focus</h3>
          <p className="text-lg font-bold text-rose-600 dark:text-rose-400">GenAI & MLOps</p>
        </div>
        <div className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Primary Language</h3>
          <p className="text-lg font-bold text-rose-600 dark:text-rose-400">Python</p>
        </div>
        <div className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Cloud Expertise</h3>
          <p className="text-lg font-bold text-rose-600 dark:text-rose-400">AWS, Azure, GCP</p>
        </div>
      </section>

      {/* Key Experience */}
      <section className="anim-stagger">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Key Experience</h2>
        <div className="p-6 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700">
          <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{topExperience.role} @ {topExperience.company}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{topExperience.period}</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            {topExperience.highlights.slice(0, 3).map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="anim-stagger">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {topProjects.map(p => (
            <div key={p.title} className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700">
              <h3 className="font-bold text-zinc-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map(t => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecruiterView;

