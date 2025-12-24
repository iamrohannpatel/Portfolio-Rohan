import React from 'react';
import SkillsSphere from './SkillsSphere';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-20 px-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                        <span className="text-amber-600 dark:text-amber-500">01.</span> About Rohan
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-lg mb-8">
                        <p>
                            I'm Rohan Patel, currently pursuing B.Tech in Computer Science. My journey began with a curiosity for how video games were built, which quickly evolved into a passion for full-stack engineering.
                        </p>
                        <p>
                            I don't just write code; I strive to create efficient, production-grade applications. Whether it's optimizing database queries or crafting smooth frontend animations, I treat every project as an opportunity to learn something new.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none">
                        <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400">Learning Now</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-semibold">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Advanced Data Structures</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Cloud Architecture (AWS)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> System Design Principles</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center max-w-full overflow-hidden">
                    <h3 className="text-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Arsenal</h3>
                    <div className="w-full max-w-[300px] xs:max-w-full flex justify-center">
                        <SkillsSphere />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
