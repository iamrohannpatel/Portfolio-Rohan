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
    Lightbulb
} from 'lucide-react';

/* --- DATA CONSTANTS --- */

const TECHNICAL_SKILLS = [
    {
        category: "Frontend Arsenal",
        color: "cyan",
        icon: <Layout className="text-cyan-400" size={24} />,
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
        color: "purple",
        icon: <Database className="text-purple-400" size={24} />,
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
        theme: "from-purple-500/20 to-blue-500/20",
        border: "group-hover:border-purple-500/50",
        color: "text-purple-400",
        bg: "bg-purple-500/20"
    },
    {
        id: 2,
        name: "Leadership",
        icon: <Users size={40} />,
        desc: "Led a team of 4 developers during the Global Hackathon, managing timelines and git merges.",
        theme: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50",
        color: "text-blue-400",
        bg: "bg-blue-500/20"
    },
    {
        id: 3,
        name: "Adaptability",
        icon: <Zap size={40} />,
        desc: "Quick learner. Picked up Three.js in 3 days to build this 3D portfolio website.",
        theme: "from-yellow-500/20 to-orange-500/20",
        border: "group-hover:border-yellow-500/50",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20"
    },
    {
        id: 4,
        name: "Creative Thinking",
        icon: <Lightbulb size={40} />,
        desc: "I don't just write code; I design experiences. I focus heavily on UI/UX and motion.",
        theme: "from-pink-500/20 to-rose-500/20",
        border: "group-hover:border-pink-500/50",
        color: "text-pink-400",
        bg: "bg-pink-500/20"
    }
];

/* --- INTERNAL COMPONENT: TILT CARD --- */
const TiltCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-all duration-200 ease-out transform-style-3d ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                zIndex: isHovered ? 50 : 1
            }}
        >
            {children}
            <div
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,${isHovered ? 0.1 : 0}) 0%, rgba(255,255,255,0) 100%)`
                }}
            />
        </div>
    );
};

/* --- INTERNAL COMPONENT: CUBE SKILL --- */
const CubeSkill = ({ name, icon, color }) => {
    const isCyan = color === 'cyan';

    // Dynamic Styles
    const glowColor = isCyan
        ? 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]'
        : 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]';
    const textColor = isCyan ? 'text-cyan-400' : 'text-purple-400';
    const borderColor = isCyan ? 'border-cyan-500/30' : 'border-purple-500/30';
    const hoverBorder = isCyan ? 'group-hover:border-cyan-400' : 'group-hover:border-purple-400';
    const bgHover = isCyan ? 'group-hover:bg-cyan-500/10' : 'group-hover:bg-purple-500/10';
    const plateColor = isCyan ? 'bg-cyan-600' : 'bg-purple-600';

    return (
        <div className="relative w-24 h-24 group cursor-pointer perspective-1000">
            {/* The Cube Face */}
            <div className={`
        absolute inset-0 
        bg-[#0a0a16] 
        border-2 ${borderColor} ${hoverBorder}
        rounded-xl 
        flex flex-col items-center justify-center gap-2 
        transition-all duration-300 
        ${bgHover} 
        ${glowColor} 
        transform group-hover:-translate-y-2
        z-10
      `}>
                <div className={`${textColor} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {icon}
                </div>
                <span className="text-gray-300 text-[10px] font-bold tracking-widest group-hover:text-white uppercase text-center px-1">
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
      `} />
        </div>
    );
};

/* --- MAIN SECTION COMPONENT --- */
const SkillsSection = () => {
    const [skillType, setSkillType] = useState('technical');

    return (
        <section id="skills" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3 text-white">
                    <span className="text-purple-500">03.</span> Skill Matrix
                </h2>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/5 p-1 rounded-full border border-white/10 flex">
                        <button
                            onClick={() => setSkillType('technical')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${skillType === 'technical'
                                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Technical Core
                        </button>
                        <button
                            onClick={() => setSkillType('soft')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${skillType === 'soft'
                                ? 'bg-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Human OS
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
                                        <div className={`p-2 rounded-lg bg-white/5 ${cat.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{cat.category}</h3>
                                    </div>

                                    {/* Cube Grid */}
                                    <div className="grid grid-cols-3 gap-4 justify-items-center relative z-10">
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
                            {SOFT_SKILLS.map((skill) => (
                                <TiltCard
                                    key={skill.id}
                                    className={`bg-white/5 border ${skill.border} p-6 rounded-2xl group hover:bg-white/10`}
                                >
                                    <div className={`w-14 h-14 ${skill.bg} ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                                </TiltCard>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;