import React, { useState, useRef } from 'react';
import {
    Code2,
    Workflow,
    Box,
    Palette,
    Braces,
    Figma,
    Server,
    Code,
    Database,
    Flame,
    Globe,
    Container,
    Layout,
    Brain,
    Users,
    Zap,
    Lightbulb,
    MessageSquare,
    Clock
} from 'lucide-react';

/* --- DATA CONSTANTS --- */

const TECHNICAL_SKILLS = [
    {
        category: "Frontend Core",
        color: "amber",
        icon: <Layout size={24} />,
        skills: [
            { name: "React", icon: <Code2 size={24} /> },
            { name: "Next.js", icon: <Workflow size={24} /> },
            { name: "Three.js", icon: <Box size={24} /> },
            { name: "Tailwind", icon: <Palette size={24} /> },
            { name: "TypeScript", icon: <Braces size={24} /> },
            { name: "Figma", icon: <Figma size={24} /> }
        ]
    },
    {
        category: "Backend Core",
        color: "orange",
        icon: <Database size={24} />,
        skills: [
            { name: "Node.js", icon: <Server size={24} /> },
            { name: "Python", icon: <Code size={24} /> },
            { name: "PostgreSQL", icon: <Database size={24} /> },
            { name: "Firebase", icon: <Flame size={24} /> },
            { name: "GraphQL", icon: <Globe size={24} /> },
            { name: "Docker", icon: <Container size={24} /> }
        ]
    }
];

const SOFT_SKILLS = [
    {
        id: 1,
        name: "Problem Solving",
        icon: <Brain size={40} />,
        desc: "Approaching complex bugs like puzzles. I love dissecting logic to find the root cause.",
        theme: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-100 dark:bg-amber-500/20"
    },
    {
        id: 2,
        name: "Leadership",
        icon: <Users size={40} />,
        desc: "Led a team of 4 developers during the Global Hackathon, managing timelines and git merges.",
        theme: "from-orange-500/20 to-red-500/20",
        border: "group-hover:border-orange-500/50",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-100 dark:bg-orange-500/20"
    },
    {
        id: 3,
        name: "Adaptability",
        icon: <Zap size={40} />,
        desc: "Quick learner. Picked up Three.js in 3 days to build this 3D portfolio website.",
        theme: "from-yellow-500/20 to-amber-500/20",
        border: "group-hover:border-yellow-500/50",
        color: "text-yellow-600 dark:text-yellow-400",
        bg: "bg-yellow-100 dark:bg-yellow-500/20"
    },
    {
        id: 4,
        name: "Creative Thinking",
        icon: <Lightbulb size={40} />,
        desc: "I don't just write code; I design experiences. I focus heavily on UI/UX and motion.",
        theme: "from-rose-500/20 to-pink-500/20",
        border: "group-hover:border-rose-500/50",
        color: "text-rose-600 dark:text-rose-400",
        bg: "bg-rose-100 dark:bg-rose-500/20"
    },
    {
        id: 5,
        name: "Communication",
        icon: <MessageSquare size={40} />,
        desc: "Clear and concise communication is key. I ensure everyone is on the same page.",
        theme: "from-stone-500/20 to-zinc-500/20",
        border: "group-hover:border-stone-500/50",
        color: "text-stone-600 dark:text-stone-400",
        bg: "bg-stone-100 dark:bg-stone-500/20"
    },
    {
        id: 6,
        name: "Time Management",
        icon: <Clock size={40} />,
        desc: "Efficiently managing time to meet deadlines and deliver high-quality work.",
        theme: "from-red-500/20 to-orange-500/20",
        border: "group-hover:border-red-500/50",
        color: "text-red-600 dark:text-red-400",
        bg: "bg-red-100 dark:bg-red-500/20"
    }
];

import useIsMobile from '../hooks/useIsMobile';
import TiltCard from './TiltCard';

/* --- INTERNAL COMPONENT: CUBE SKILL --- */
const CubeSkill = ({ name, icon, color }) => {
    const isAmber = color === 'amber';

    // Static Base Styles
    const baseBorder = isAmber ? 'border-amber-200 dark:border-amber-500/30' : 'border-orange-200 dark:border-orange-500/30';
    const textColor = isAmber ? 'text-amber-600 dark:text-amber-400' : 'text-orange-600 dark:text-orange-400';

    // Active Styles (for overlay)
    const activeBorder = isAmber ? 'border-amber-400' : 'border-orange-400';
    const activeBg = isAmber ? 'bg-amber-50 dark:bg-amber-500/10' : 'bg-orange-50 dark:bg-orange-500/10';
    const activeShadow = isAmber ? 'shadow-[0_0_30px_rgba(251,191,36,0.4)]' : 'shadow-[0_0_30px_rgba(249,115,22,0.4)]';

    // Bottom Plate Color
    const plateColor = isAmber ? 'bg-amber-600' : 'bg-orange-600';

    return (
        <div className="relative w-24 h-24 group cursor-pointer perspective-1000">
            {/* The Cube Face */}
            <div className={`
                absolute inset-0 
                bg-white dark:bg-[#0a0a16] 
                border-2 ${baseBorder} 
                rounded-xl 
                flex flex-col items-center justify-center gap-2 
                transition-transform duration-300 
                transform group-hover:-translate-y-2
                z-10
                shadow-lg dark:shadow-none
                will-change-transform
            `}>
                {/* Active Overlay (Opacity Twin) */}
                <div className={`absolute inset-[-2px] rounded-xl border-2 ${activeBorder} ${activeBg} ${activeShadow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Content */}
                <div className={`${textColor} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                    {icon}
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-[10px] font-bold tracking-widest group-hover:text-amber-600 dark:group-hover:text-white uppercase text-center px-1 relative z-10 transition-colors">
                    {name}
                </span>
            </div>

            {/* 3D Depth Layer (Bottom Plate) */}
            <div className={`
                absolute inset-0 
                ${plateColor} 
                rounded-xl 
                opacity-0 group-hover:opacity-40 
                transform translate-x-2 translate-y-2
                transition-all duration-300 
                blur-sm
                -z-0
                will-change-[opacity,transform]
            `} />
        </div>
    );
};

/* --- MAIN SECTION COMPONENT --- */
const SkillsSection = () => {
    const [skillType, setSkillType] = useState('technical');

    return (
        <section id="skills" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-transparent transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-500">03.</span> Skill Matrix
                </h2>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10 flex shadow-sm">
                        <button
                            onClick={() => setSkillType('technical')}
                            className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-sm font-bold transition-all ${skillType === 'technical'
                                ? 'bg-amber-500 text-white dark:text-black shadow-[0_0_20px_rgba(251,191,36,0.4)]'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            Technical Skills
                        </button>
                        <button
                            onClick={() => setSkillType('soft')}
                            className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-sm font-bold transition-all ${skillType === 'soft'
                                ? 'bg-orange-500 text-white dark:text-black shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            Soft Skills
                        </button>
                    </div>
                </div>

                <div className="min-h-[500px]">
                    {skillType === 'technical' ? (
                        /* TECHNICAL SKILLS: CUBE HIVES */
                        <div className="grid md:grid-cols-2 gap-16 animate-fade-in-up">
                            {TECHNICAL_SKILLS.map((cat, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className={`p-2 rounded-lg bg-white dark:bg-white/5 border border-gray-100 dark:border-transparent shadow-md dark:shadow-none ${cat.color === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.category}</h3>
                                    </div>

                                    {/* Cube Grid */}
                                    <div className="grid grid-cols-3 gap-2 md:gap-4 justify-items-center relative z-10">
                                        {cat.skills.map((skill, sIdx) => (
                                            <CubeSkill
                                                key={sIdx}
                                                name={skill.name}
                                                icon={skill.icon}
                                                color={cat.color}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* SOFT SKILLS: RPG CARDS */
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                            {SOFT_SKILLS.map((skill) => (
                                <TiltCard
                                    key={skill.id}
                                    className={`bg-white dark:bg-white/5 border ${skill.border.replace('group-hover:', 'border-gray-200 dark:border-white/10 group-hover:')} p-6 rounded-2xl group hover:bg-gray-50 dark:hover:bg-white/10 shadow-xl dark:shadow-none transition-colors`}
                                >
                                    <div className={`w-14 h-14 ${skill.bg} ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                                </TiltCard>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default React.memo(SkillsSection);