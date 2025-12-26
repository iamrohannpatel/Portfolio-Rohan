import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let rafId;

        const handleScroll = () => {
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                const totalScroll = document.documentElement.scrollTop;
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scroll = totalScroll / windowHeight;
                setScrollProgress(Number(scroll));
                rafId = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 z-[100]"
            style={{ width: `${scrollProgress * 100}%` }}
        />
    );
};

export default ScrollProgress;
