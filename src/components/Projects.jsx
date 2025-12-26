import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // Show only the first 3 projects
    const featuredProjects = PROJECTS_DATA.slice(0, 3);

    return (
        <section id="projects" className="py-16 md:py-20 px-4 bg-white/50 dark:bg-black/30 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-500">02.</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/all-projects"
                        className="group relative px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full font-bold text-gray-900 dark:text-white shadow-lg hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            View all Projects
                        </span>
                        <ArrowRight size={20} className="text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors group-hover:translate-x-1 transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Projects);
