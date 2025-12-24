import React from 'react';
import { ChevronsDown, FileDown, Hand, BookOpen } from 'lucide-react';
import StatCounter from './StatCounter';

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
        <section id="home" className="min-h-screen flex flex-col items-center text-center px-4 relative pt-12 pb-20 md:pb-32 scroll-mt-28">
            <div className="max-w-4xl space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center justify-center py-3 text-lg font-bold text-gray-900 dark:text-white mb-4">
                    <Hand className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-200 animate-pulse" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-200 dark:to-orange-100">
                        Hi, I am Rohan Patel
                    </span>
                </div>
                <h1 className="text-6xl xs:text-7xl md:text-7xl lg:text-8xl font-extrabold tracking-tight short:text-5xl text-gray-800 dark:text-white">
                    Frontend <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-stone-600 dark:from-amber-300 dark:via-orange-200 dark:to-stone-400">
                        Developer
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Computer Science UnderGrad & Creative Coder. I build scalable, immersive web applications and solve complex problems with code.
                </p>

                {/* Student-Centric Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
                    <StatCounter end={1200} label="Hours of Code" suffix="+" />
                    <StatCounter end={10} label="Projects" suffix="+" />
                    <StatCounter end={10} label="Tech Skills" suffix="+" />
                    <StatCounter end={1} label="Years of learning" suffix="+" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button
                        onClick={() => scrollToSection('blog')}
                        className="px-8 py-4 bg-amber-100 hover:bg-amber-50 text-amber-950 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)] flex items-center justify-center gap-2"
                    >
                        Latest Blog
                        <BookOpen className="animate-pulse" size={20} />
                    </button>

                    <button
                        onClick={handleDownloadResume}
                        className="group relative px-8 py-4 font-bold text-gray-900 dark:text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] active:scale-95"
                    >
                        {/* Gradient Border Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-400 to-stone-500 dark:from-amber-400 dark:via-orange-300 dark:to-stone-400 opacity-100 animate-gradient-xy" />

                        {/* Inner Dark Background */}
                        <div className="absolute inset-[2px] bg-white dark:bg-[#0a0a0a] rounded-[10px] z-10 transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-[#0a0a0a]/80" />

                        {/* Content */}
                        <div className="relative z-20 flex items-center justify-center gap-2">
                            <FileDown size={20} className="text-amber-600 dark:text-amber-200 group-hover:text-amber-700 dark:group-hover:text-white transition-colors duration-300 group-hover:animate-bounce" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-200 dark:to-orange-200 group-hover:text-amber-700 dark:group-hover:text-white group-hover:bg-none transition-all duration-300">
                                Download Resume
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
