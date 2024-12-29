import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const trustedBy = () => {
    document.addEventListener('DOMContentLoaded', function () {
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
        }).mount({AutoScroll});
    });

// Load Animation
    gsap.registerPlugin(ScrollTrigger);
    document.addEventListener('DOMContentLoaded', () => {
        // Fade-up animation for the .trusted-by section
        gsap.from('.trusted-by', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.trusted-by',
                start: 'top 100%',
                toggleActions: 'play none none none',
            }
        });
    });
};