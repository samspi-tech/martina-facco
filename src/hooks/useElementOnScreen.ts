import { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (options: IntersectionObserverInit) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentElement = containerRef.current;
        if (!currentElement) return;

        const callback: IntersectionObserverCallback = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) setIsVisible(true);
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, [options]);

    return {
        containerRef,
        isVisible,
    };
};
