import React from 'react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-rose-100 dark:bg-rose-500/20 px-2 py-1 text-xs font-medium text-rose-800 dark:text-rose-300">
    {children}
  </span>
);

export default Badge;
