import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, ExternalLink, Cpu, Layers, Bot, Brain, LineChart, Activity, ScanLine, Calendar, DollarSign, Users } from 'lucide-react';

const iconMap = {
    Globe, Cpu, Layers, Bot, Brain, LineChart, Activity, ScanLine, Calendar, DollarSign, Users
};

const ProjectCard = ({ project, index }) => {
    const IconComponent = iconMap[project.icon] || Globe;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 will-change-transform" />
            <div className="relative h-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500">

                {/* Card Header / Banner */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-grid-white/[0.1] opacity-50" />

                    {/* Floating Background Icon */}
                    <IconComponent
                        size={120}
                        className="absolute -right-6 -bottom-6 text-white/10 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out"
                    />

                    {/* Main Icon */}
                    <motion.div
                        animate={{
                            y: [0, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
                    >
                        <IconComponent size={32} className="text-white" />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {/* Footer: Tags & Links */}
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <div
                                    key={i}
                                    className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-white/50 dark:border-white/5 backdrop-blur-sm shadow-sm z-0 hover:z-10 transition-all dark:hover:bg-amber-500/20 dark:hover:text-amber-300"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-amber-500 transition-colors"
                                aria-label="Live Demo"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
