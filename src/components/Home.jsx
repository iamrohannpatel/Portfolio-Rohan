import React from 'react';
import { ChevronsDown, Download } from 'lucide-react';
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
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
            <div className="max-w-4xl space-y-6 animate-fade-in-up">
                <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-4">
                    Hi, I am Rohan Patel
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                    Frontend <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Developer
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Computer Science Student & Creative Coder. I build scalable, immersive web applications and solve complex problems with code.
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
                        onClick={() => scrollToSection('coding')}
                        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2"
                    >
                        View Profile
                        <ChevronsDown className="animate-bounce" size={20} />
                    </button>

                    <button
                        onClick={handleDownloadResume}
                        className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                    >
                        <Download size={20} />
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
