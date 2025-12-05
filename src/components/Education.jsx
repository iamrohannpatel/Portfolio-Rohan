import React from 'react';
import { GraduationCap, Book, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 px-4 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-purple-500">06.</span> Education & Roadmap
                </h2>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-10 space-y-12">

        {/* Certification */}
                    <div className="relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Award size={20} /> IITM Pravartak | Training and Internship Certification in Full Stack Development with DSA & GenAI</h3>
                                <span className="text-pink-400 text-sm font-mono bg-pink-500/10 px-2 py-1 rounded">2025</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">Coding Ninjas</div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                <li>Completed Frontend Development + GenAI.</li>
                                <li>Mastered the Data Structures and Algorithms.</li>
                                <li>Currently learning Backend development.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Edu 1 */}
                    <div className="relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><GraduationCap size={20} /> Bachelor's in Computer Science</h3>
                                <span className="text-cyan-400 text-sm font-mono bg-cyan-500/10 px-2 py-1 rounded">2024 - 2028</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">Mahakal Institute of Technology & Management, Ujjain</div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                <li>Major: Software Engineering</li>
                                <li>Actively working on Projects.</li>
                                <li>Relevant Coursework: Data Structures, Web Development, Object Oriented Programming</li>
                            </ul>
                        </div>
                    </div>

                    {/* Schooling */}
                    <div className="relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Book size={20} /> Secondary & Higher Secondary Education</h3>
                                <span className="text-purple-400 text-sm font-mono bg-purple-500/10 px-2 py-1 rounded">2022 & 2024</span>
                            </div>
                            <div className="text-purple-400 mb-4 font-medium">The Delta School, Dewas</div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                <li>Completed higher secondary education (12th) with Science stream in PCM.</li>
                                <li>Grade: A+</li>
                                <li>Completed secondary education (10th) with good academic performance.</li>
                                <li>Percentage: 81.6%</li>
                                 <li>Academic Achievements: 1st medalist in 100 meter and 400 meter races.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
