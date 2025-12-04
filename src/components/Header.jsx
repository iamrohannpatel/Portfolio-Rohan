import React from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen, navItems }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center gap-2">
                    <Terminal size={24} className="text-cyan-400" />
                    developerohan
                </div>
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative group text-sm font-medium tracking-wider transition-colors ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </button>
                    ))}
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl">
                    <div className="flex flex-col p-6 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center gap-4 text-left text-lg font-medium transition-colors ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
                            >
                                <span className="text-cyan-400">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
