import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/constants';
import TiltCard from './TiltCard';

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
                        <TiltCard
                            key={cert.id}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col group hover:bg-white/10 active:bg-white/10 group-[.active-card]:bg-white/10 hover:border-cyan-500/30 active:border-cyan-500/30 group-[.active-card]:border-cyan-500/30 transition-all duration-300"
                        >
                            {/* Card Content */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/30 group-active:border-cyan-500/30 group-[.active-card]:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] group-active:shadow-[0_0_15px_rgba(34,211,238,0.2)] group-[.active-card]:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
                                    <img
                                        src={cert.image}
                                        alt={cert.issuer}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 flex items-center gap-1 group-hover:bg-cyan-500/10 group-active:bg-cyan-500/10 group-[.active-card]:bg-cyan-500/10 transition-colors">
                                    <Calendar size={12} />
                                    {cert.date}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 group-active:text-cyan-400 group-[.active-card]:text-cyan-400 transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                    Issued by <span className="text-gray-200">{cert.issuer}</span>
                                </p>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {cert.skills && cert.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-md group-hover:border-cyan-500/20 group-active:border-cyan-500/20 group-[.active-card]:border-cyan-500/20 group-hover:text-cyan-300 group-active:text-cyan-300 group-[.active-card]:text-cyan-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-gradient-to-r from-white/5 to-white/5 hover:from-purple-500 hover:to-pink-600 group-[.active-card]:from-purple-500 group-[.active-card]:to-pink-600 border border-white/10 hover:border-transparent group-[.active-card]:border-transparent text-white transition-all duration-300 font-medium gap-2 group/btn relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Verify Credential <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-[.active-card]:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
