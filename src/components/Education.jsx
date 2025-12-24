import React, { useEffect, useRef } from 'react';
import { GraduationCap, Book, Award, ChevronRight } from 'lucide-react';

const Education = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when item is in the vertical center
            threshold: 0
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-card');
                } else {
                    entry.target.classList.remove('active-card');
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);

        const items = document.querySelectorAll('.education-item');
        items.forEach((item) => {
            if (observerRef.current) observerRef.current.observe(item);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <section id="education" className="py-16 md:py-20 px-4 relative bg-white/50 dark:bg-transparent transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-500">06.</span> Education & Roadmap
                </h2>

                <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-6 md:ml-10 space-y-12">

                    {/* Certification */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 dark:group-hover:border-orange-500/30 group-[.active-card]:border-orange-500/50 dark:group-[.active-card]:border-orange-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><Award className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-orange-600 dark:text-white" /> IITM Pravartak | Training and Internship Certification in Full Stack Development with DSA & GenAI</h3>
                                <span className="text-orange-600 dark:text-orange-400 text-sm font-bold font-mono bg-orange-100 dark:bg-orange-500/10 px-2 py-1 rounded">2025</span>
                            </div>
                            <div className="text-amber-600 dark:text-amber-400 mb-4 font-medium">Coding Ninjas, Online</div>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-medium text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Completed Frontend Development + GenAI.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Mastered the Data Structures and Algorithms.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Currently learning Backend development.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Edu 1 */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 group-hover:border-amber-500/50 dark:group-hover:border-amber-500/30 group-[.active-card]:border-amber-500/50 dark:group-[.active-card]:border-amber-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><GraduationCap className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-amber-600 dark:text-white" /> Bachelor's in Computer Science</h3>
                                <span className="text-amber-600 dark:text-amber-400 text-sm font-bold font-mono bg-amber-100 dark:bg-amber-500/10 px-2 py-1 rounded">2024 - 2028</span>
                            </div>
                            <div className="text-amber-600 dark:text-amber-400 mb-4 font-medium">Mahakal Institute of Technology & Management, Ujjain</div>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-medium text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-amber-500 mt-1 shrink-0" />
                                    <span>Major: Software Engineering</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-amber-500 mt-1 shrink-0" />
                                    <span>Actively working on Projects.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-amber-500 mt-1 shrink-0" />
                                    <span>Relevant Coursework: Data Structures, Web Development, Object Oriented Programming</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Schooling */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 dark:group-hover:border-orange-500/30 group-[.active-card]:border-orange-500/50 dark:group-[.active-card]:border-orange-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><Book className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-orange-600 dark:text-white" /> Secondary & Higher Secondary Education</h3>
                                <span className="text-orange-600 dark:text-orange-400 text-sm font-bold font-mono bg-orange-100 dark:bg-orange-500/10 px-2 py-1 rounded">2022 & 2024</span>
                            </div>
                            <div className="text-amber-600 dark:text-amber-400 mb-4 font-medium">The Delta School, Dewas</div>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-medium text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Completed higher secondary education (12th) with Science stream in PCM.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Grade: A+</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Completed secondary education (10th) with good academic performance.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Percentage: 81.6%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                                    <span>Academic Achievements: 1st medalist in 100 meter and 400 meter races.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
