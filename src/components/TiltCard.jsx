import React, { useState, useRef } from 'react';

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
            onClick={() => setIsHovered(!isHovered)}
            className={`relative transition-all duration-200 ease-out transform-style-3d ${className} ${isHovered ? 'active-card' : ''}`}
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

export default TiltCard;
