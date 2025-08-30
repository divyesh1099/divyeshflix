import React from 'react';

const GlobalStyles = () => (
  <style>{`
    @keyframes netflix-intro {
      0% { transform: scale(0.9); letter-spacing: 0.3em; opacity: 0; }
      50% { transform: scale(1); letter-spacing: normal; opacity: 1; }
      85% { transform: scale(1); letter-spacing: normal; opacity: 1; }
      100% { transform: scale(30); opacity: 0; }
    }
    .netflix-intro-animation { animation: netflix-intro 4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .profile-selector { animation: fade-in 0.5s ease-out forwards; }
    @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  `}</style>
);

const NetflixIntro = ({ name = "DIVYESHFLIX" }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <GlobalStyles />
      <h1
        className="netflix-intro-animation text-6xl font-black uppercase text-red-600 md:text-9xl"
        style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
      >
        {name}
      </h1>
    </div>
  );
};

export default NetflixIntro;
