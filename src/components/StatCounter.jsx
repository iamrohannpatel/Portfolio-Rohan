import React, { useState, useEffect } from 'react';

const StatCounter = ({ end, label, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        const duration = 2000;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-500 mb-1">
                {count}{suffix}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider font-semibold">{label}</div>
        </div>
    );
};

export default StatCounter;
