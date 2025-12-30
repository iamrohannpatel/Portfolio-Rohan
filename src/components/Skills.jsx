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
    Clock,
    FileCode,
    GitBranch,
    Github,
    TrendingUp,
    Search,
    Loader,
    Smartphone,
    FileText,
    Grid,
    Sparkles,
    Move,
    PenTool,
    Type,
    Moon,
    Anchor,
    Share2,
    Rocket,
    Image,
    CheckCircle,
    Terminal,
    Wrench,
    Package,
    FileJson,
    CheckSquare,
    AlertTriangle,
    Triangle,
    Cloud,
    ChevronDown,
    Menu
} from 'lucide-react';

/* --- DATA CONSTANTS --- */

/* --- NEW CATEGORIZED DATA --- */
/* --- NEW CATEGORIZED DATA --- */
export const FRONTEND_NESTED_DATA = {
    "Frontend Core": [
        { name: "HTML5", icon: <FileCode size={24} /> },
        { name: "CSS3", icon: <Palette size={24} /> },
        { name: "JavaScript (ES6+)", icon: <Code2 size={24} /> },
        { name: "Responsive Design", icon: <Smartphone size={24} /> },
        { name: "Semantic HTML", icon: <FileText size={24} /> },
        { name: "Cross-Browser Compatibility", icon: <Globe size={24} /> }
    ],
    "Styling & UI": [
        { name: "CSS Flexbox", icon: <Layout size={24} /> },
        { name: "CSS Grid", icon: <Grid size={24} /> },
        { name: "CSS Animations", icon: <Sparkles size={24} /> },
        { name: "CSS Transitions", icon: <Move size={24} /> },
        { name: "UI Design Principles", icon: <PenTool size={24} /> },
        { name: "Typography", icon: <Type size={24} /> },
        { name: "Color Theory", icon: <Palette size={24} /> },
        { name: "Dark / Light Theme Design", icon: <Moon size={24} /> }
    ],
    "Frameworks & Libraries": [
        { name: "React", icon: <Code2 size={24} /> },
        { name: "Tailwind CSS", icon: <Palette size={24} /> },
        { name: "Bootstrap", icon: <Palette size={24} /> },
        { name: "React Hooks", icon: <Anchor size={24} /> },
        { name: "Context API", icon: <Share2 size={24} /> },
        { name: "Component-Based Architecture", icon: <Box size={24} /> },
        { name: "Vite", icon: <Zap size={24} /> }
    ],
    "Performance & Best Practices": [
        { name: "Web Performance Optimisation", icon: <Rocket size={24} /> },
        { name: "Lazy Loading", icon: <Clock size={24} /> },
        { name: "Image Optimization", icon: <Image size={24} /> },
        { name: "Clean Code Practices", icon: <CheckCircle size={24} /> },
        { name: "Search Engine Optimisation", icon: <Search size={24} /> },
        { name: "Web Accessibility (a11y)", icon: <Users size={24} /> }
    ],
    "Tools & Workflow": [
        { name: "Git", icon: <GitBranch size={24} /> },
        { name: "GitHub", icon: <Github size={24} /> },
        { name: "VS Code", icon: <Terminal size={24} /> },
        { name: "Chrome DevTools", icon: <Wrench size={24} /> },
        { name: "NPM", icon: <Package size={24} /> },
        { name: "Package Management", icon: <Box size={24} /> }
    ],
    "APIs & Integration": [
        { name: "REST API Integration", icon: <Server size={24} /> },
        { name: "JSON Handling", icon: <FileJson size={24} /> },
        { name: "Form Validation", icon: <CheckSquare size={24} /> },
        { name: "Error Handling", icon: <AlertTriangle size={24} /> }
    ],
    "Deployment": [
        { name: "Vercel", icon: <Triangle size={24} /> },
        { name: "Netlify", icon: <Cloud size={24} /> }
    ]
};

const TECHNICAL_SKILLS = [
    {
        category: "Frontend Ecosystem", // Renamed for clarity
        color: "amber",
        icon: <Layout size={24} />,
        hasCategories: true, // Flag to trigger custom rendering
        data: FRONTEND_NESTED_DATA
    },
    {
        category: "Backend Ecosystem",
        color: "orange",
        icon: <Database size={24} />,
        isLearning: true,
        skills: []
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

/* --- INTERNAL COMPONENT: SKILL STRIP --- */
const SkillStrip = ({ name, icon, color }) => {
    const isAmber = color === 'amber';

    // Base Styles
    const baseBorder = isAmber ? 'border-amber-200 dark:border-amber-500/30' : 'border-orange-200 dark:border-orange-500/30';
    const activeBorder = isAmber ? 'group-hover:border-amber-500' : 'group-hover:border-orange-500';
    const bgHover = isAmber ? 'group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10' : 'group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10';
    const iconColor = isAmber ? 'text-amber-600 dark:text-amber-400' : 'text-orange-600 dark:text-orange-400';

    return (
        <div className={`
            relative w-full group cursor-pointer 
            flex items-center gap-3 px-4 py-3
            bg-white dark:bg-[#0a0a16] 
            border-2 ${baseBorder} ${activeBorder}
            rounded-xl 
            transition-all duration-300 
            transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-none
            ${bgHover}
        `}>
            <div className={`${iconColor} transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                {icon}
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-bold text-sm tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors whitespace-normal break-words leading-tight">
                {name}
            </span>
        </div>
    );
};

/* --- MAIN SECTION COMPONENT --- */
const SkillsSection = () => {
    const [skillType, setSkillType] = useState('technical');
    const [frontendCategory, setFrontendCategory] = useState("Frontend Core");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on click outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                                <div key={idx} className="flex flex-col items-center w-full">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className={`p-2 rounded-lg bg-white dark:bg-white/5 border border-gray-100 dark:border-transparent shadow-md dark:shadow-none ${cat.color === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.category}</h3>
                                    </div>

                                    {/* CATEGORY DROPDOWN LOGIC */}
                                    {cat.hasCategories ? (
                                        <div className="w-full flex flex-col items-center">
                                            {/* Custom Dropdown */}
                                            <div className="relative w-full max-w-xs mb-8 z-50 text-left" ref={dropdownRef}>
                                                <button
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
                                                >
                                                    <span className="flex items-center gap-2">
                                                        <Menu size={18} className="text-amber-500" />
                                                        {frontendCategory}
                                                    </span>
                                                    <ChevronDown size={18} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                {isDropdownOpen && (
                                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-64 overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-200">
                                                        {Object.keys(cat.data).map((subCat) => (
                                                            <button
                                                                key={subCat}
                                                                onClick={() => {
                                                                    setFrontendCategory(subCat);
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                                className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between ${frontendCategory === subCat
                                                                    ? 'bg-amber-50 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold'
                                                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                                                                    }`}
                                                            >
                                                                {subCat}
                                                                {frontendCategory === subCat && <CheckCircle size={14} />}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Skills Grid for Selected Category */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                                                {cat.data[frontendCategory].map((skill, sIdx) => (
                                                    <SkillStrip
                                                        key={sIdx}
                                                        name={skill.name}
                                                        icon={skill.icon}
                                                        color={cat.color}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        /* NORMAL RENDER (BACKEND LEARN CARD ETC) */
                                        <div className="w-full flex flex-col items-center">
                                            {cat.isLearning ? (
                                                <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-white/5 border border-dashed border-orange-300 dark:border-orange-500/30 rounded-2xl w-full max-w-sm text-center group hover:border-orange-500 transition-colors">
                                                    <div className="bg-orange-100 dark:bg-orange-500/10 p-4 rounded-full mb-4 animate-pulse">
                                                        <Loader size={32} className="text-orange-500 animate-spin" />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Actively Learning</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                        Exploring backend technologies, databases, and server-side logic to become a better full-stack developer.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                                                    {cat.skills.map((skill, sIdx) => (
                                                        <SkillStrip
                                                            key={sIdx}
                                                            name={skill.name}
                                                            icon={skill.icon}
                                                            color={cat.color}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
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