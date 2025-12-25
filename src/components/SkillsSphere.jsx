import React, { useMemo } from 'react';
import {
    Code2,
    Database,
    Globe,
    Cpu,
    Layers,
    Terminal,
    Smartphone,
    Cloud
} from 'lucide-react';

const SKILLS = [
    { name: "React", icon: <Code2 size={16} /> },
    { name: "Node.js", icon: <Database size={16} /> },
    { name: "Three.js", icon: <Globe size={16} /> },
    { name: "TypeScript", icon: <Code2 size={16} /> },
    { name: "MongoDB", icon: <Database size={16} /> },
    { name: "AWS", icon: <Cloud size={16} /> },
    { name: "Docker", icon: <Layers size={16} /> },
    { name: "GraphQL", icon: <Globe size={16} /> },
    { name: "Tailwind", icon: <Code2 size={16} /> },
    { name: "Python", icon: <Terminal size={16} /> },
    { name: "Figma", icon: <Layers size={16} /> },
    { name: "Next.js", icon: <Code2 size={16} /> },
    { name: "Redux", icon: <Cpu size={16} /> },
    { name: "Git", icon: <Terminal size={16} /> },
    { name: "Firebase", icon: <Database size={16} /> },
];

const Tag = ({ name, icon }) => (
    <div className="flex items-center gap-2 px-4 py-2 mx-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-sm whitespace-nowrap transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-500/50 hover:scale-105 cursor-default group">
        <span className="text-amber-600 dark:text-amber-500 group-hover:text-amber-700 dark:group-hover:text-amber-400">
            {icon}
        </span>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-amber-900 dark:group-hover:text-white">
            {name}
        </span>
    </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
    // Duplicate items to ensure seamless loop
    const content = [...items, ...items, ...items, ...items];

    return (
        <div className="relative flex overflow-hidden w-full mask-image-gradient">
            <div className={`flex py-2 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:pause-animation`}>
                {content.map((skill, index) => (
                    <Tag key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
};

const SkillsSphere = () => {
    // Split skills into rows randomly or sequentially
    const row1 = SKILLS.slice(0, 5);
    const row2 = SKILLS.slice(5, 10);
    const row3 = SKILLS.slice(10, 15);

    return (
        <div className="relative w-full py-8 flex flex-col gap-6 overflow-hidden select-none">
            {/* Gradient Masks for fade effect at edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />

            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
            <MarqueeRow items={row3} />
        </div>
    );
};

export default React.memo(SkillsSphere);
