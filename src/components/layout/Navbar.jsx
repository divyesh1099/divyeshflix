import React from 'react';
import { SunIcon, MoonIcon } from '../common/Icons';

function Navbar({ onBack, dark, setDark }) {
    return (
        <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/5 dark:bg-zinc-950/70">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
                <button onClick={onBack} className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white mr-4">
                    &larr; Back to Profiles
                </button>
                <div className="text-xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-red-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
                        DIVYESHFLIX
                    </span>
                </div>
                <div className="ml-auto">
                     <button
                        onClick={() => setDark(!dark)}
                        className="rounded-full p-2 transition-colors duration-300 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                        title="Toggle theme"
                    >
                        {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

