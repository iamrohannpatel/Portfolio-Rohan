import React, { useState, useEffect, useRef } from 'react';

/**
 * LazySection
 * Renders children only when they are close to entering the viewport.
 * This prevents fetching code chunks for sections that are far down the page until needed.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The component to lazy load (e.g., a Suspense wrapper)
 * @param {string} props.rootMargin - Margin around the root to trigger loading (default: '200px')
 * @param {string|number} props.height - Placeholder height before loading (default: '100vh')
 */
const LazySection = ({ children, rootMargin = '200px', height = '100vh' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (isVisible) return; // Already loaded, no need to observe anymore

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin, // Load before it comes into view
                threshold: 0
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [isVisible, rootMargin]);

    return (
        <div ref={ref} style={{ minHeight: !isVisible ? height : undefined }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
