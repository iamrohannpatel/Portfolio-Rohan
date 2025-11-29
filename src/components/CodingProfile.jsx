import React, { useMemo } from 'react';
import { Target, Flame, Trophy, Code2 } from 'lucide-react';

const CodingProfile = () => {
    const contributions = useMemo(() => {
        return Array.from({ length: 52 * 7 }).map((_, i) => {
            const random = Math.random();
            let level = 0;
            if (random > 0.9) level = 4;
            else if (random > 0.7) level = 3;
            else if (random > 0.5) level = 2;
            else if (random > 0.2) level = 1;
            return level;
        });
    }, []);

    return (
        <section id="coding" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-green-500">03.</span> Coding Consistency
                </h2>

                <div className="w-full">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Total Solved Card */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between">
                            <div>
                                <div className="text-gray-400 text-sm font-medium mb-1">Problems Solved</div>
                                <div className="text-3xl font-bold text-white">450+</div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <Target size={24} />
                            </div>
                        </div>

                        {/* Streak Card */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="text-gray-400 text-sm font-medium mb-1">Max Streak</div>
                                <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                    31 <span className="text-sm font-normal text-gray-500">Days</span>
                                </div>
                            </div>
                            <div className="relative z-10 h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 animate-pulse">
                                <Flame size={24} />
                            </div>
                        </div>

                        {/* Global Rank Card (Replaced Acceptance Rate) */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between">
                            <div>
                                <div className="text-gray-400 text-sm font-medium mb-1">Global Rank</div>
                                <div className="text-3xl font-bold text-white">Top 2.5%</div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                <Trophy size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm mb-8">
                        <h3 className="text-lg font-bold text-white mb-4">Proficiency Breakdown</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-cyan-400 font-medium">Easy</span>
                                    <span className="text-gray-400">200 solved</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[70%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-yellow-400 font-medium">Medium</span>
                                    <span className="text-gray-400">210 solved</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500 w-[55%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-red-400 font-medium">Hard</span>
                                    <span className="text-gray-400">40 solved</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[25%]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 overflow-x-auto">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Code2 size={20} className="text-purple-400" />
                            Consistency Graph (Last 12 Months)
                        </h3>
                        <div className="min-w-[700px]">
                            <div className="flex gap-1 mb-2">
                                {contributions.map((level, i) => (
                                    <div
                                        key={i}
                                        className={`w-3 h-3 rounded-sm transition-all hover:scale-125 hover:border-white border border-transparent ${level === 0 ? 'bg-white/5' :
                                            level === 1 ? 'bg-cyan-900/40' :
                                                level === 2 ? 'bg-cyan-700/60' :
                                                    level === 3 ? 'bg-cyan-500/80' :
                                                        'bg-cyan-300'
                                            }`}
                                        title="Activity Level"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                                <span>Less</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-white/5 rounded-sm" />
                                    <div className="w-3 h-3 bg-cyan-900/40 rounded-sm" />
                                    <div className="w-3 h-3 bg-cyan-700/60 rounded-sm" />
                                    <div className="w-3 h-3 bg-cyan-500/80 rounded-sm" />
                                    <div className="w-3 h-3 bg-cyan-300 rounded-sm" />
                                </div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
