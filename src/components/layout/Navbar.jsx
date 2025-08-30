import React from 'react';
import { MoonIcon, SunIcon } from '../common/Icons';

const Navbar = ({ onBack, dark, setDark }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-100/30 dark:supports-[backdrop-filter]:bg-zinc-950/30">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button onClick={onBack} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
          &larr; Back to Profiles
        </button>
        <div className="ml-auto">
           <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            title="Toggle dark mode"
          >
            {dark ? <SunIcon className="h-5 w-5 text-zinc-200" /> : <MoonIcon className="h-5 w-5 text-zinc-800" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

