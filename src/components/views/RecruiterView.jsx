import React from 'react';
import Badge from '../common/Badge';
import Education from './shared/Education';
import Awards from './shared/Awards';
import { EDUCATION, AWARDS_AND_CERTIFICATIONS } from '../../data/resumeData';
import ContactActions from './shared/ContactActions'; // --- UPDATED: Import ContactActions

const RecruiterView = ({ profile, experience, projects }) => {
  return (
    <div className="mx-auto max-w-5xl py-12 px-4 space-y-12">
      {/* Header */}
      <header className="anim-stagger">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg font-medium text-rose-600 dark:text-rose-400">{profile.tag}</p>
        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">{profile.summary}</p>
        
        {/* --- NEW: Use the ContactActions component --- */}
        <ContactActions actions={profile.links.actions} />

        <div className="mt-6">
            <a href="/AI_Divyesh_Vishwakarma_Post_NeuralIT.pdf" download="Divyesh_Vishwakarma_Resume.pdf" className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:underline">
                Download Full CV (.pdf)
            </a>
        </div>
      </header>

      {/* --- Full Experience Section --- */}
      <section className="anim-stagger">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="p-6 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{exp.role} @ {exp.company}</h3>
                <p className="text-sm text-zinc-500 mt-1 sm:mt-0">{exp.period}</p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{exp.location}</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                {exp.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map(t => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Awards Section Integration --- */}
      <Awards items={AWARDS_AND_CERTIFICATIONS} />

      {/* --- Education Section Integration --- */}
      <Education items={EDUCATION} />

      {/* --- REMOVED: The old ContactLinks component is no longer needed here --- */}
    </div>
  );
};

export default RecruiterView;

