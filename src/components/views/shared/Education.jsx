// src/components/views/shared/Education.jsx

import React from 'react';

const Education = ({ items }) => {
  return (
    <section className="anim-stagger">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Education</h2>
      <div className="space-y-4">
        {items.map((edu, i) => (
          <div key={i} className="p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
              <p className="text-xs font-mono text-zinc-500">{edu.period}</p>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{edu.degree}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;