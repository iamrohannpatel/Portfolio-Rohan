import React, { useMemo } from 'react';
import { Target, Flame, Percent, Code2 } from 'lucide-react';

const CodingProfile = () => {
    const contributions = useMemo(() => {
        return Array.from({ length: 364 }).map((_, i) => {
            const random = Math.random();
            let level = 0;
            if (random > 0.9) level = 4;
            else if (random > 0.7) level = 3;
            else if (random > 0.5) level = 2;
            else if (random > 0.2) level = 1;
            return level;
        });
    }, []);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <section id="coding" className="py-16 md:py-20 px-4 relative overflow-hidden bg-gray-50/50 dark:bg-transparent transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-500">04.</span> Coding Consistency
                </h2>

                <div className="w-full">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Total Solved Card */}
                        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl flex items-center justify-between hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Problems Solved</div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">200+</div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <Target size={24} />
                            </div>
                        </div>

                        {/* Streak Card */}
                        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl flex items-center justify-between relative overflow-hidden group hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Max Streak</div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white flex items-baseline gap-1">
                                    31 <span className="text-sm font-normal text-gray-500">Days</span>
                                </div>
                            </div>
                            <div className="relative z-10 h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 animate-pulse">
                                <Flame size={24} />
                            </div>
                        </div>

                        {/* Global Rank Card */}
                        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl flex items-center justify-between hover:border-yellow-500/50 dark:hover:border-yellow-500/30 transition-colors shadow-lg dark:shadow-none">
                            <div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Acceptance Rate</div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">71.2%</div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                <Percent size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Proficiency Breakdown */}
                        <div className="lg:col-span-1 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-6 backdrop-blur-sm h-full shadow-lg dark:shadow-none">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Proficiency</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-green-600 dark:text-green-400 font-medium">Easy</span>
                                        <span className="text-gray-500 dark:text-gray-400">200 solved</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[70%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">Medium</span>
                                        <span className="text-gray-500 dark:text-gray-400">210 solved</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 w-[55%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-red-600 dark:text-red-400 font-medium">Hard</span>
                                        <span className="text-gray-500 dark:text-gray-400">40 solved</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 w-[25%]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consistency Graph */}
                        <div className="lg:col-span-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 overflow-x-auto shadow-lg dark:shadow-none">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Code2 size={20} className="text-green-600 dark:text-green-400" />
                                Consistency Graph
                            </h3>

                            <div className="min-w-[700px]">
                                {/* Month Labels */}
                                <div className="flex text-xs text-gray-500 dark:text-gray-400 mb-2 ml-8 justify-between px-2">
                                    {months.map(m => <span key={m}>{m}</span>)}
                                </div>

                                <div className="flex gap-2">
                                    {/* Day Labels */}
                                    <div className="flex flex-col justify-between text-[10px] text-gray-500 py-1 h-[100px]">
                                        <span>Mon</span>
                                        <span>Wed</span>
                                        <span>Fri</span>
                                    </div>

                                    {/* The Grid */}
                                    <div className="grid grid-rows-7 grid-flow-col gap-[3px] flex-1">
                                        {contributions.map((level, i) => (
                                            <div
                                                key={i}
                                                className={`w-3 h-3 rounded-[2px] transition-all hover:scale-125 hover:border-white border border-transparent ${level === 0 ? 'bg-gray-100 dark:bg-white/5' :
                                                    level === 1 ? 'bg-green-200 dark:bg-green-900/40' :
                                                        level === 2 ? 'bg-green-300 dark:bg-green-700/60' :
                                                            level === 3 ? 'bg-green-400 dark:bg-green-500/80' :
                                                                'bg-green-500 dark:bg-green-400'
                                                    }`}
                                                title={`Activity Level: ${level}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="flex justify-end items-center gap-2 text-xs text-gray-500 mt-4">
                                    <span>Less</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-gray-100 dark:bg-white/5 rounded-[2px]" />
                                        <div className="w-3 h-3 bg-green-200 dark:bg-green-900/40 rounded-[2px]" />
                                        <div className="w-3 h-3 bg-green-300 dark:bg-green-700/60 rounded-[2px]" />
                                        <div className="w-3 h-3 bg-green-400 dark:bg-green-500/80 rounded-[2px]" />
                                        <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-[2px]" />
                                    </div>
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
