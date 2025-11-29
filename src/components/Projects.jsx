import React from 'react';
import { Globe, Github, ExternalLink, Cpu, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 bg-black/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-cyan-500">04.</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TiltCard className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Globe size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Student Hub</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer hover:text-cyan-400" />
                                    <ExternalLink size={18} className="cursor-pointer hover:text-cyan-400" />
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                A platform for students to share notes and collaborate on assignments in real-time.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">React</span>
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">Firebase</span>
                            </div>
                        </div>
                    </TiltCard>

                    <TiltCard className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-green-900/50 to-cyan-900/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Cpu size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">AlgoVisualizer</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer hover:text-cyan-400" />
                                    <ExternalLink size={18} className="cursor-pointer hover:text-cyan-400" />
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                Interactive visualization of sorting and pathfinding algorithms to help students learn DSA.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">JavaScript</span>
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">Canvas API</span>
                            </div>
                        </div>
                    </TiltCard>

                    <TiltCard className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-pink-900/50 to-orange-900/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <Layers size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Portfolio v1</h3>
                                <div className="flex gap-3">
                                    <Github size={18} className="cursor-pointer hover:text-cyan-400" />
                                    <ExternalLink size={18} className="cursor-pointer hover:text-cyan-400" />
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                My first portfolio website built with simple HTML/CSS to learn the basics of web design.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">HTML</span>
                                <span className="px-2 py-1 text-xs rounded bg-white/5 text-cyan-200">CSS</span>
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
};

export default Projects;
