
import React, { useState, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const StatCounter = ({ end, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const isMobile = useIsMobile();

    useEffect(() => {
        // If mobile, don't run animation logic at all, just set final value
        if (isMobile) {
            setCount(end);
            return;
        }

        let startTime = null;
        const duration = 2000;
        let animationFrameId;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (easeOutExpo)
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [end, isMobile]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-500 mb-1">
                {count}{suffix}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider font-semibold">{label}</div>
        </div>
    );
};

export default React.memo(StatCounter);
