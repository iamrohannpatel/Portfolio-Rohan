import React from 'react';
import { flushSync } from 'react-dom';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen, navItems, theme, toggleTheme }) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    // Prioritize visible items
    const visibleIds = ['home', 'about', 'projects', 'skills', 'education', 'certifications', 'contact'];
    const primaryItems = navItems.filter(item => visibleIds.includes(item.id));
    const secondaryItems = navItems.filter(item => !visibleIds.includes(item.id));

    const handleThemeToggle = (e) => {
        // Fallback for browsers without View Transitions
        if (!document.startViewTransition) {
            toggleTheme();
            return;
        }

        const x = e.clientX;
        const y = e.clientY;

        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // 1. Start the transition
        const transition = document.startViewTransition(() => {
            // 2. Synchronously update React state and DOM
            flushSync(() => {
                toggleTheme();
            });
        });

        // 3. Animate the circular clip path
        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`
                    ],
                },
                {
                    duration: 700,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Quart Easing out for "buttery" feel
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-2xl bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-white/10 shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-200 dark:to-orange-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.8)]">
                        &lt;Developerohan /&gt;
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-1">
                    {primaryItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${activeSection === item.id
                                ? 'text-gray-900 dark:text-white bg-amber-500/10 dark:bg-white/10 shadow-[0_0_10px_rgba(251,191,36,0.2)]'
                                : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-white hover:bg-amber-50 dark:hover:bg-white/5'
                                }`}
                        >
                            {item.label}
                            {/* Bottom Glow for Active State */}
                            {activeSection === item.id && (
                                <span className="absolute bottom-0 left-1/2 w-1/2 h-[2px] -translate-x-1/2 bg-amber-500 dark:bg-amber-400 blur-[2px] rounded-full" />
                            )}
                        </button>
                    ))}

                    {/* More Dropdown */}
                    {secondaryItems.length > 0 && (
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group-hover:bg-amber-50 dark:group-hover:bg-white/10 ${secondaryItems.some(i => i.id === activeSection)
                                    ? 'text-gray-900 dark:text-white bg-amber-500/10 dark:bg-white/10'
                                    : 'text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white'
                                    }`}
                            >
                                More
                                <Menu size={16} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="w-48 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                                    {secondaryItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors rounded-lg ${activeSection === item.id
                                                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-white hover:bg-amber-50 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="w-6">{item.icon}</span>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={handleThemeToggle}
                        className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-amber-500 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-white/10 transition-all duration-300 transform active:scale-95"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button & Toggle */}
                <div className="xl:hidden flex items-center gap-2">
                    <button
                        onClick={handleThemeToggle}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-amber-500 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-white/10 transition-all duration-300 transform active:scale-95"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className={`text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                            }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-white/10 backdrop-blur-xl h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="flex flex-col p-4 space-y-1 pb-10">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center gap-3 text-left p-3 rounded-lg transition-all ${activeSection === item.id
                                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-white hover:bg-amber-50 dark:hover:bg-white/5'
                                    }`}
                            >
                                <span className={`${activeSection === item.id ? 'text-amber-600 dark:text-amber-400' : 'text-gray-400 dark:text-gray-500'}`}>
                                    {item.icon}
                                </span>
                                <span className="text-base font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
