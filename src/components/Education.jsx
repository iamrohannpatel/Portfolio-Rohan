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
        <section id="education" className="py-16 md:py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-purple-500">06.</span> Education & Roadmap
                </h2>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-10 space-y-12">

                    {/* Certification */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:border-pink-500/30 group-[.active-card]:border-pink-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Award className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> IITM Pravartak | Training and Internship Certification in Full Stack Development with DSA & GenAI</h3>
                                <span className="text-pink-400 text-sm font-mono bg-pink-500/10 px-2 py-1 rounded">2025</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">Coding Ninjas, Online</div>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-pink-500 mt-1 shrink-0" />
                                    <span>Completed Frontend Development + GenAI.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-pink-500 mt-1 shrink-0" />
                                    <span>Mastered the Data Structures and Algorithms.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-pink-500 mt-1 shrink-0" />
                                    <span>Currently learning Backend development.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Edu 1 */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:border-cyan-500/30 group-[.active-card]:border-cyan-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><GraduationCap className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> Bachelor's in Computer Science</h3>
                                <span className="text-cyan-400 text-sm font-mono bg-cyan-500/10 px-2 py-1 rounded">2024 - 2028</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">Mahakal Institute of Technology & Management, Ujjain</div>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-cyan-500 mt-1 shrink-0" />
                                    <span>Major: Software Engineering</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-cyan-500 mt-1 shrink-0" />
                                    <span>Actively working on Projects.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-cyan-500 mt-1 shrink-0" />
                                    <span>Relevant Coursework: Data Structures, Web Development, Object Oriented Programming</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Schooling */}
                    <div className="education-item relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-150 group-[.active-card]:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:border-purple-500/30 group-[.active-card]:border-purple-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Book className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> Secondary & Higher Secondary Education</h3>
                                <span className="text-purple-400 text-sm font-mono bg-purple-500/10 px-2 py-1 rounded">2022 & 2024</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">The Delta School, Dewas</div>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
                                    <span>Completed higher secondary education (12th) with Science stream in PCM.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
                                    <span>Grade: A+</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
                                    <span>Completed secondary education (10th) with good academic performance.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
                                    <span>Percentage: 81.6%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
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
