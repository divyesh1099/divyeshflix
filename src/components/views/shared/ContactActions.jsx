import React from 'react';
import { MailIcon, PhoneIcon, WhatsappIcon, LinkIcon } from '../../common/Icons';

// Map icon names from data to actual components
const ICONS = {
    MailIcon,
    PhoneIcon,
    WhatsappIcon,
    LinkIcon // Fallback icon
};

const ContactActions = ({ actions }) => {
    // Return null if there are no actions to prevent rendering an empty div
    if (!actions || actions.length === 0) return null;

    return (
        <div className="mt-6 flex flex-wrap gap-4">
            {actions.map(action => {
                const IconComponent = ICONS[action.icon] || LinkIcon;
                return (
                    <a
                        key={action.name}
                        href={action.url}
                        // Open http links in a new tab, but tel/mailto links in the same tab
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
    );
};

export default ContactActions;
