import React from 'react';
import { PROFILES } from '../data/resumeData';
import { ICON_MAP } from '../components/common/Icons'; // Import the map

const ProfileCard = ({ profile, onSelect }) => {
  // Dynamically select the Icon component from the map
  const IconComponent = ICON_MAP[profile.icon] || (() => null); 
  
  return (
    <button 
      onClick={() => onSelect(profile.id)}
      className="profile-card-button group w-full text-center p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/70 transition-all duration-300"
    >
      <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-lg bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 mb-4 group-hover:scale-110 transition-transform">
        <IconComponent className="h-12 w-12 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
      <p className="text-zinc-400 mt-1">{profile.description}</p>
    </button>
  );
};

const ProfileSelector = ({ onProfileSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="text-center mb-12 profile-selector-header">
        <h1 className="text-5xl font-bold text-white">Who's exploring?</h1>
        <p className="text-zinc-400 mt-2">Select a profile to see a tailored view of my resume.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {PROFILES.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onSelect={onProfileSelect} />
        ))}
      </div>
       <style>{`
          .profile-selector-header {
            animation: fade-in-down 1s ease-out forwards;
          }
          .profile-card-button {
            animation: fade-in-up 0.5s ease-out forwards;
            opacity: 0;
            animation-delay: calc(var(--i, 0) * 100ms + 0.5s);
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
         {PROFILES.map((_, i) => (
          <style key={i}>{`.profile-card-button:nth-child(${i + 1}) { --i: ${i}; }`}</style>
        ))}
    </div>
  );
};

export default ProfileSelector;

