import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the section is in view (or close to it), trigger load
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we don't need to observe anymore
                    observer.disconnect();
                }
            },
            {
                // Trigger when 10% of the placeholder is visible
                // OR when the element is within 200px of the viewport (load early)
                rootMargin: '200px',
                threshold: threshold
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div ref={ref} className="min-h-[100px]">
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
