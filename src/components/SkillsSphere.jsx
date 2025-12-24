import React, { useRef, useEffect, useMemo } from 'react';

const SkillsSphere = () => {
    const skills = [
        "React", "Node.js", "Java", "DSA", "Python",
        "C++", "SQL", "Git", "Tailwind", "Next.js",
        "Firebase", "MongoDB", "HTML5", "CSS3", "Redux"
    ];

    const rotationRef = useRef({ x: 0, y: 0 });
    const itemsRef = useRef([]);

    const tags = useMemo(() => {
        const phi = Math.PI * (3 - Math.sqrt(5));
        return skills.map((skill, i) => {
            const y = 1 - (i / (skills.length - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            return { skill, x, y, z };
        });
    }, []);

    useEffect(() => {
        let animationFrame;

        const animate = () => {
            rotationRef.current.x += 0.015;
            rotationRef.current.y += 0.015;

            const cosX = Math.cos(rotationRef.current.x);
            const sinX = Math.sin(rotationRef.current.x);
            const cosY = Math.cos(rotationRef.current.y);
            const sinY = Math.sin(rotationRef.current.y);

            tags.forEach((tag, i) => {
                const item = itemsRef.current[i];
                if (!item) return;

                let y = tag.y * cosX - tag.z * sinX;
                let z = tag.y * sinX + tag.z * cosX;
                let x = tag.x * cosY - z * sinY;
                z = tag.x * sinY + z * cosY;

                const scale = (z + 2) / 3;
                const alpha = (z + 1) / 2;

                item.style.transform = `translate3d(${x * 120}px, ${y * 120}px, 0) scale(${scale})`;
                item.style.opacity = Math.max(0.2, alpha);
                item.style.zIndex = Math.floor(scale * 100);
                item.style.color = alpha > 0.8 ? '#fff' : '#94a3b8';
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [tags]);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            <div className="relative w-64 h-64 transform-style-3d">
                {tags.map((tag, i) => (
                    <div
                        key={i}
                        ref={(el) => itemsRef.current[i] = el}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 cursor-default hover:text-amber-400 hover:scale-110 hover:z-50"
                        style={{
                            willChange: 'transform, opacity, z-index',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                    >
                        <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                            {tag.skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSphere;
