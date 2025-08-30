import React from 'react';

const Footer = ({ links }) => {
    const renderLinkList = (items) => (
        <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-2">
            {items?.map(item => (
                <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors inline-block">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );

    // Return null if there are no links to prevent an empty footer from rendering
    if (!links) return null;

    return (
        <footer className="relative z-10 border-t border-zinc-200 dark:border-white/10 mt-16 pb-16 pt-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">Professional</h3>
                        {renderLinkList(links?.professional)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">Development</h3>
                        {renderLinkList(links?.development)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">Creative</h3>
                        {renderLinkList(links?.creative)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">Social</h3>
                        {renderLinkList(links?.social)}
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-white/10 text-center text-xs text-zinc-400 dark:text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Divyesh Vishwakarma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
