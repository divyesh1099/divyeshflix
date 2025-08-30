// src/components/views/shared/Awards.jsx

import React from 'react';
import Badge from '../../common/Badge';

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-500 mr-2"><path d="M12 6.915c.79 1.58 2.454 3.201 4.695 4.315 2.24 1.114 4.305.538 4.305-1.758 0-1.83-1.219-3.418-2.83-4.328C16.58.23 14.212 0 12 0S7.42.23 5.825 1.144C4.219 2.054 3 3.642 3 5.472c0 2.296 2.065 2.872 4.305 1.758C9.546 10.116 11.21 8.495 12 6.915z"/><path d="M12 24l-3-9-9-3 9-3 3-9 3 9 9 3-9 3-3 9z"/></svg>
);

const Awards = ({ items }) => {
  return (
    <section className="anim-stagger">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Awards & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((award, i) => (
          <div key={i} className="flex items-center p-3 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50">
             <AwardIcon />
            <div>
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">{award.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{award.issuer}</p>
            </div>
            <div className="ml-auto">
              <Badge>{award.type}</Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;