import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
            <div className="flex justify-center gap-6 mb-6 lg:hidden">
                <a href="#" className="text-white hover:text-white/80 transition-all">
                    <Github size={24} />
                </a>
                <a href="#" className="text-[#0077b5] hover:text-[#0077b5]/80 transition-all">
                    <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                </a>
                <a href="#" className="text-[#E1306C] hover:text-[#E1306C]/80 transition-all">
                    <Instagram size={24} />
                </a>
            </div>
            <p>Designed & Built with React by Rohan Patel</p>
            <p className="mt-2">© 2025 developerohan. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
