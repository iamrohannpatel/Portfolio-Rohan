import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/constants';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative overflow-hidden text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll" data-animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-white">
                        <span className="text-cyan-500">07.</span> Certifications
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Validating my expertise through industry-recognized qualifications and continuous learning.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS_DATA.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                        >
                            {/* Card Content */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                    <img
                                        src={cert.image}
                                        alt={cert.issuer}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 flex items-center gap-1">
                                    <Calendar size={12} />
                                    {cert.date}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                                {cert.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4 font-medium">
                                Issued by <span className="text-gray-300">{cert.issuer}</span>
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {cert.skills && cert.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium text-white bg-cyan-900/30 border border-cyan-500/30 rounded-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white transition-all duration-300 font-medium gap-2"
                                >
                                    <span>Verify Credential</span>
                                    <ExternalLink size={16} />
                                </a>
                            </div>

                            {/* Decorative Corner Gradients */}
                            {/* Decorative Corner Gradients - Removed for cleaner look */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
