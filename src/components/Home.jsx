import React from 'react';
import {  FileDown, Hand, ExternalLink  } from './GoogleIcons';
import StatCounter from './StatCounter';
import profileImg from '../assets/rohan-professional-profile.png';

const Home = ({ scrollToSection }) => { // eslint-disable-line no-unused-vars
    const handleDownloadResume = () => {
        const element = document.createElement("a");
        const file = new Blob(["This is a placeholder for Rohan Patel's Resume. \n\nPlease replace the download logic in App.jsx with a link to your actual PDF file."], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Rohan_Patel_Resume_Placeholder.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <section id="home" className="relative min-h-[90vh] w-full flex items-start justify-center pt-2 pb-16 lg:pt-2 lg:pb-0 overflow-hidden perspective-1000">



            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: ORIGINAL CONTENT RESTORED */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 transition-transform hover:scale-105 group cursor-default will-change-transform">
                            <Hand size={18} className="text-amber-600 dark:text-amber-400 animate-wave origin-bottom-right" />
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                Hi, I am Rohan Patel
                            </span>
                        </div>

                        {/* Title - Super Impressive Typography */}
                        <div className="relative mt-2">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black dark:text-white leading-[0.9] drop-shadow-sm">
                                Full Stack
                                <br />
                                <span className="relative inline-block text-black dark:text-white">
                                    Developer
                                    {/* Underline Decoration */}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-medium leading-relaxed mt-6">
                            Computer Science UnderGrad & Creative Coder. I build scalable, immersive web applications and solve complex problems with code.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">
                            <button
                                onClick={handleDownloadResume}
                                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95 will-change-transform"
                            >
                                <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity" />
                                <div className="flex items-center gap-2 relative z-10">
                                    <FileDown size={20} />
                                    <span>Download Resume</span>
                                </div>
                            </button>

                            <a
                                href="https://whatsapp.com/channel/0029Vb7ELzDE50UooO9Mtw3k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors active:scale-95 flex items-center gap-2"
                                aria-label="Join my WhatsApp Channel"
                            >
                                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                                <span>Let's Grind</span>
                            </a>                        </div>

                        {/* Inspirational Quote */}
                        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 w-full">
                            <p className="text-sm md:text-base italic text-gray-500 dark:text-gray-500 text-center lg:text-left leading-relaxed">
                                "The only way to do great work is to love what you do."
                                <span className="not-italic text-xs text-gray-400 dark:text-gray-600 ml-2">— Steve Jobs</span>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: THE MINIMAL ELEGANT AVATAR */}
                    <div className="flex flex-col items-center justify-center lg:justify-center lg:items-center relative group h-full order-1 lg:order-2">
                        {/* Redesigned Profile Picture Container */}
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-square mt-6 lg:-mt-8 flex items-center justify-center animate-fade-in-up delay-200">

                            {/* Outer Container */}
                            <div className="absolute inset-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>

                                {/* Inner Picture Wrapper */}
                                <div className="w-full h-full bg-transparent">
                                    <img
                                        src={profileImg}
                                        alt="Rohan Patel"
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: 'center 20%', imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                                        fetchPriority="high"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default React.memo(Home);
