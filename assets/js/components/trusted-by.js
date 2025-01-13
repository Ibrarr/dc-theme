import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const trustedBy = () => {
    const startTrustedByAnimations = () => {
        new Splide('#trusted-by-slider', {
            type: 'loop',
            perPage: 4,
            gap: 30,
            drag: 'free',
            focus: 'center',
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 0.5,
            },
            breakpoints: {
                991: {
                    perPage: 3,
                },
            },
        }).mount({ AutoScroll });

        // Fade-up animation for the .trusted-by section
        gsap.from('.trusted-by', {
            opacity: 0,
            y: 25,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.trusted-by',
                start: 'top 100%',
                toggleActions: 'play none none none',
            },
        });
    };

    if (window.pageReady) {
        startTrustedByAnimations();
    } else {
        const interval = setInterval(() => {
            if (window.pageReady) {
                clearInterval(interval); // Stop checking once ready
                startTrustedByAnimations(); // Initialize Splide and GSAP animations
            }
        }, 50); // Check every 50ms
    }
};