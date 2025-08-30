import React, { useState, useEffect } from "react";
import { PROFILE, EXPERIENCE, PROJECTS } from './data/resumeData';
import RecruiterView from './components/views/RecruiterView';
import AIMLView from './components/views/AIMLView';
import BackendView from './components/views/BackendView';
import InnovatorView from './components/views/InnovatorView';
import NetflixIntro from './scenes/NetflixIntro';
import ProfileSelector from './scenes/ProfileSelector';
import Navbar from './components/layout/Navbar';
import ThreeJSBackground from './components/layout/ThreeJSBackground';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  const { dark, setDark } = useDarkMode();
  const [animationStep, setAnimationStep] = useState('intro');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
        setAnimationStep('profiles');
    }, 4000); // Duration matches the CSS animation
    return () => clearTimeout(introTimer);
  }, []);
  
  const handleProfileSelect = (profileId) => {
      setSelectedProfile(profileId);
      setAnimationStep('content');
  };

  const handleBack = () => {
      setSelectedProfile(null);
      setAnimationStep('profiles');
  }

  useEffect(() => {
    if (animationStep !== 'content' || !window.gsap) return;

    // A little extra CSS for the views
    const style = document.createElement('style');
    style.innerHTML = `
        .pipeline-step, .arch-box { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 12px; border-radius: 8px; background-color: rgba(120, 113, 108, 0.1); border: 1px solid rgba(120, 113, 108, 0.2); }
        .pipeline-step span, .arch-box span { font-weight: 600; }
        .pipeline-step small, .arch-box small { font-size: 0.75rem; color: #a1a1aa; }
        .dark .pipeline-step small, .dark .arch-box small { color: #71717a; }
        .pipeline-arrow, .arch-arrow { font-size: 2rem; color: #d6d3d1; align-self: center; }
        .dark .pipeline-arrow, .dark .arch-arrow { color: #52525b; }
        .arch-box.arch-service { border-color: rgba(52, 211, 153, 0.4); }
        .arch-box.arch-broker { border-color: rgba(251, 146, 60, 0.4); }
        .arch-box.arch-cache { border-color: rgba(96, 165, 250, 0.4); }
        .case-study-card { padding: 1.5rem; border-radius: 0.75rem; background-color: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.05); }
        .dark .case-study-card { background-color: rgba(39, 39, 42, 0.3); border: 1px solid rgba(255,255,255,0.1); }
    `;
    document.head.appendChild(style);


    window.gsap.from(".anim-stagger", {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });

    return () => {
        document.head.removeChild(style);
    }
  }, [animationStep, selectedProfile]);
  
  const renderContent = () => {
    switch (selectedProfile) {
        case 'recruiter':
            return <RecruiterView profile={PROFILE} experience={EXPERIENCE} projects={PROJECTS} />;
        case 'ai':
            return <AIMLView profile={PROFILE} projects={PROJECTS} />;
        case 'backend':
            return <BackendView profile={PROFILE} experience={EXPERIENCE} />;
        case 'innovator':
            return <InnovatorView projects={PROJECTS} />;
        default:
            return <div className="text-center py-20 text-white">This profile view is under construction. Please select another profile.</div>;
    }
  };

  if (animationStep === 'intro') {
    return (
      <div className="min-h-screen bg-black">
        <NetflixIntro />
      </div>
    );
  }
  
  if (animationStep === 'profiles') {
      return (
          <div className="min-h-screen bg-black">
              <ProfileSelector onProfileSelect={handleProfileSelect} />
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 dark:bg-black dark:text-white selection:bg-rose-500/20">
      <ThreeJSBackground />
      <Navbar onBack={handleBack} dark={dark} setDark={setDark} />
      <main className="relative z-10">
        {renderContent()}
      </main>
    </div>
  );
}

