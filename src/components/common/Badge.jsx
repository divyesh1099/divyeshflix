import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-700 dark:text-zinc-300 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

