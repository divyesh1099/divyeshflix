import React from 'react';
import { PROFILES } from '../data/resumeData';

const ProfileSelector = ({ onProfileSelect }) => {
    return (
        <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black profile-selector">
            <h2 className="mb-8 text-3xl text-white md:text-5xl">Who's exploring?</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {PROFILES.map((profile) => (
                    <button key={profile.id} onClick={() => onProfileSelect(profile.id)} className="group flex flex-col items-center">
                        <div className={`h-24 w-24 md:h-36 md:w-36 rounded-lg ${profile.color} flex items-center justify-center text-5xl md:text-7xl transition-transform duration-300 group-hover:scale-110`}>
                           {profile.icon}
                        </div>
                        <span className="mt-2 text-zinc-400 transition-colors group-hover:text-white">{profile.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfileSelector;
