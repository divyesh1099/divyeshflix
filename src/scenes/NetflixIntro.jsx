import React from 'react';

const NetflixIntro = () => {
    return (
        <div className="netflix-intro-container">
            <div className="netflix-logo">
                DIVYESHFLIX
            </div>
            <style>{`
                .netflix-intro-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 100;
                    animation: fade-out 0.5s 3.5s forwards;
                }
                .netflix-logo {
                    color: #e50914;
                    font-size: 5rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    animation: zoom-in 3.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                    transform: scale(0.1);
                    opacity: 0;
                }
                @keyframes zoom-in {
                    0% {
                        transform: scale(0.1);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1);
                    }
                    90% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(15);
                        opacity: 0;
                    }
                }
                @keyframes fade-out {
                    to {
                        opacity: 0;
                        visibility: hidden;
                    }
                }
                @media (max-width: 768px) {
                    .netflix-logo {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default NetflixIntro;

