import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/constants';
import TiltCard from './TiltCard';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 dark:bg-orange-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll" data-animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
                        <span className="text-amber-600 dark:text-amber-500">07.</span> Certifications
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-lg max-w-2xl mx-auto">
                        Validating my expertise through industry-recognized qualifications and continuous learning.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS_DATA.map((cert) => (
                        <TiltCard
                            key={cert.id}
                            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 h-full flex flex-col group hover:bg-gray-50 dark:hover:bg-white/10 active:bg-gray-50 dark:active:bg-white/10 group-[.active-card]:bg-gray-50 dark:group-[.active-card]:bg-white/10 hover:border-amber-500/50 dark:hover:border-amber-500/30 active:border-amber-500/50 dark:active:border-amber-500/30 group-[.active-card]:border-amber-500/50 dark:group-[.active-card]:border-amber-500/30 transition-all duration-300 shadow-xl dark:shadow-none"
                        >
                            {/* Card Content */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 group-hover:border-amber-500/30 group-active:border-amber-500/30 group-[.active-card]:border-amber-500/30 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] group-active:shadow-[0_0_15px_rgba(251,191,36,0.2)] group-[.active-card]:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt={cert.issuer}
                                            className="w-12 h-12 object-contain"
                                        />
                                    ) : (
                                        <Award className="w-12 h-12 text-amber-500" />
                                    )}
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-active:bg-amber-50 dark:group-active:bg-amber-500/10 group-[.active-card]:bg-amber-50 dark:group-[.active-card]:bg-amber-500/10 transition-colors">
                                    <Calendar size={12} />
                                    {cert.date}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-active:text-amber-600 dark:group-active:text-amber-400 group-[.active-card]:text-amber-600 dark:group-[.active-card]:text-amber-400 transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-900 dark:text-gray-300 text-sm font-bold flex items-center gap-2">
                                    Issued by <span className="text-gray-600 dark:text-gray-200">{cert.issuer}</span>
                                </p>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {cert.skills && cert.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md group-hover:border-amber-500/20 group-active:border-amber-500/20 group-[.active-card]:border-amber-500/20 group-hover:text-amber-800 dark:group-hover:text-amber-300 group-active:text-amber-800 dark:group-active:text-amber-300 group-[.active-card]:text-amber-800 dark:group-[.active-card]:text-amber-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl transition-all duration-300 font-medium gap-2 group/btn relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white border border-transparent lg:bg-none lg:bg-gray-100 lg:dark:bg-white/5 lg:text-gray-900 lg:dark:text-white lg:border-gray-200 lg:dark:border-white/10 lg:hover:bg-gradient-to-r lg:hover:from-amber-500 lg:hover:to-orange-500 lg:hover:text-white lg:dark:hover:from-amber-600 lg:dark:hover:to-orange-600 lg:hover:border-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-amber-500 lg:group-hover:to-orange-500 lg:group-hover:text-white lg:group-hover:border-transparent lg:dark:group-hover:from-amber-600 lg:dark:group-hover:to-orange-600"

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

export default React.memo(Certifications);
