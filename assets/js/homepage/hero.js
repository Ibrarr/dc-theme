import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.first-row-images', {
        y: -200,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom top',
            scrub: 0.5
        }
    });

    gsap.to('.second-row-images', {
        y: 200,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom top',
            scrub: 0.5
        }
    });
});
