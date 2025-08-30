import React from 'react';
import { MailIcon, PhoneIcon, WhatsappIcon, LinkIcon } from '../../common/Icons';

// Map icon names from data to actual components
const ICONS = {
    MailIcon,
    PhoneIcon,
    WhatsappIcon,
    LinkIcon // Fallback icon
};

const ContactLinks = ({ links }) => {
    // Helper to render a list of links
    const renderLinkList = (items) => (
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
            {/* ADDED CHECK: Only map if items is an array */}
            {items?.map(item => (
                <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors inline-block">
                        {item.name} &rarr;
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <section className="anim-stagger">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Contact & Socials</h2>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                 {/* ADDED CHECK: Only map if links.actions is an array */}
                {links?.actions?.map(action => {
                    const IconComponent = ICONS[action.icon] || LinkIcon;
                    return (
                        <a 
                            key={action.name}
                            href={action.url}
                            target={action.url.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-rose-600 rounded-md hover:bg-rose-700 transition-colors"
                        >
                            <IconComponent className="h-4 w-4" />
                            {action.name}
                        </a>
                    );
                })}
            </div>

            {/* Link Sections */}
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
        </section>
    );
};

export default ContactLinks;
