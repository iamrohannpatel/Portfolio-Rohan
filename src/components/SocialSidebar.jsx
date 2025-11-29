import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialSidebar = () => {
    return (
        <div className="hidden lg:flex fixed z-40 gap-6 left-6 top-1/2 -translate-y-1/2 flex-col">
            <a href="#" className="text-white hover:text-white/80 hover:-translate-y-1 transition-all">
                <Github size={24} />
            </a>
            <a href="#" className="text-[#0077b5] hover:text-[#0077b5]/80 hover:-translate-y-1 transition-all">
                <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-white/80 hover:-translate-y-1 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            </a>
            <a href="#" className="text-[#E1306C] hover:text-[#E1306C]/80 hover:-translate-y-1 transition-all">
                <Instagram size={24} />
            </a>
            <div className="w-[1px] h-24 bg-white/20 mx-auto" />
        </div>
    );
};

export default SocialSidebar;