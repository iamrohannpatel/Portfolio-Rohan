import React from 'react';
import { ChevronsDown, FileDown, Hand, User, ExternalLink } from 'lucide-react';
import StatCounter from './StatCounter';
import profileImg from '../assets/rohan-profile.jpeg';

const Home = ({ scrollToSection }) => {
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
        <section id="home" className="relative min-h-[90vh] w-full flex items-start justify-center pt-6 pb-16 lg:pt-8 lg:pb-0 overflow-hidden perspective-1000">

            {/* 1. CINEMATIC BACKGROUND */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-[#030303]">
                {/* Aurora Beams */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-l from-amber-600/20 to-orange-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                {/* Grid Pattern overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: ORIGINAL CONTENT RESTORED */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-amber-500/20 backdrop-blur-md shadow-sm transition-all hover:scale-105 hover:bg-white/60 dark:hover:bg-white/10 group cursor-default">
                            <Hand size={18} className="text-amber-600 dark:text-amber-400 animate-wave origin-bottom-right" />
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                Hi, I am Rohan Patel
                            </span>
                        </div>

                        {/* Title - Super Impressive Typography */}
                        <div className="relative">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9] drop-shadow-sm">
                                Frontend
                                <br />
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 saturate-150">
                                    Developer
                                    {/* Underline Decoration */}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                            Computer Science UnderGrad & Creative Coder. I build scalable, immersive web applications and solve complex problems with code.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                            <button
                                onClick={handleDownloadResume}
                                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full overflow-hidden shadow-2xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity" />
                                <div className="flex items-center gap-2 relative z-10">
                                    <FileDown size={20} />
                                    <span>Download Resume</span>
                                </div>
                            </button>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group px-8 py-4 bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:border-gray-300 dark:hover:border-white/20 active:scale-95 flex items-center gap-2"
                            >
                                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                                <span>Let's Talk</span>
                            </button>
                        </div>



                    </div>

                    {/* RIGHT COLUMN: THE "IMPRESSIVE" AVATAR + STATS */}
                    <div className="flex flex-col items-center justify-center space-y-8 lg:justify-start lg:items-center relative group perspective-500 h-full">
                        {/* Background Splatter/Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-orange-600/30 rounded-full blur-[80px] scale-75 animate-pulse" />

                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 transform transition-transform duration-700 preserve-3d">
                            {/* Tech Rings (Restored & Enhanced) */}
                            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-amber-500/30 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border-[3px] border-dashed border-orange-500/30 animate-[spin_15s_linear_infinite_reverse]" />

                            {/* The Core Image */}
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={profileImg}
                                        alt="Rohan Patel"
                                        className="w-[90%] h-[90%] object-cover rounded-full"
                                        style={{ objectPosition: 'center 30%' }}
                                    />
                                </div>
                                {/* Glass Reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                            </div>


                        </div>

                        {/* Stats - Modern Layout */}
                        <div className="w-full max-w-md pt-8 animate-fade-in-up delay-200">
                            <div className="grid grid-cols-4 gap-4 text-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        <StatCounter end={1200} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Hours Code</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        <StatCounter end={10} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        <StatCounter end={10} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Skills</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        <StatCounter end={2} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Exp</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600 pointer-events-none">
                <ChevronsDown size={24} />
            </div>
        </section >
    );
};

export default Home;
