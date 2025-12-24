import React from 'react';
import { Globe, Github, ExternalLink, Cpu, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-20 px-4 bg-white/50 dark:bg-black/30 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-500">02.</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    <TiltCard className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group shadow-lg dark:shadow-none transition-colors">
                        <div className="h-48 bg-gradient-to-br from-amber-700/40 to-orange-700/40 dark:from-amber-900/40 dark:to-orange-900/40 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Globe size={48} className="text-white/90 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Student Hub</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                    <ExternalLink size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm mb-4">
                                A platform for students to share notes and collaborate on assignments in real-time.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">React</span>
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">Firebase</span>
                            </div>
                        </div>
                    </TiltCard>

                    <TiltCard className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group shadow-lg dark:shadow-none transition-colors">
                        <div className="h-48 bg-gradient-to-br from-stone-600/60 to-amber-700/40 dark:from-stone-800/60 dark:to-amber-900/40 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Cpu size={48} className="text-white/90 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">AlgoVisualizer</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                    <ExternalLink size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm mb-4">
                                Interactive visualization of sorting and pathfinding algorithms to help students learn DSA.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">JavaScript</span>
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">Canvas API</span>
                            </div>
                        </div>
                    </TiltCard>

                    <TiltCard className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group shadow-lg dark:shadow-none transition-colors">
                        <div className="h-48 bg-gradient-to-br from-orange-700/40 to-red-700/40 dark:from-orange-900/40 dark:to-red-900/40 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Layers size={48} className="text-white/90 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Portfolio v1</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                    <ExternalLink size={18} className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400" />
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm mb-4">
                                My first portfolio website built with simple HTML/CSS to learn the basics of web design.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">HTML</span>
                                <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">CSS</span>
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Projects);
