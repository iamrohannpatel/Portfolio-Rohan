import React from 'react';
import { motion } from 'framer-motion';
import {  Globe, Github, ExternalLink, Cpu, Layers, Bot, Brain, LineChart, Activity, ScanLine, Calendar, DollarSign, Users, ArrowUpRight  } from './GoogleIcons';

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
            <div className="relative h-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col hover:border-gray-400 dark:hover:border-white/20 transition-all duration-300">

                {/* Top Accent Line */}
                <div className="h-[2px] w-full bg-gray-200 dark:bg-white/10 group-hover:bg-amber-500 transition-colors duration-300" />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                    {/* Header: Icon + Index */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all">
                            <IconComponent size={22} />
                        </div>
                        <span className="text-xs font-mono text-gray-400 dark:text-gray-600 mt-1">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-6">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer: Links */}
                    <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-3">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={15} />
                            <span>Source</span>
                        </a>
                        <span className="text-gray-200 dark:text-white/10">|</span>
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            aria-label="Live Demo"
                        >
                            <ExternalLink size={15} />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
