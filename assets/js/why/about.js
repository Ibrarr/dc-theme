import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .about section animations
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });

    // Fade up animation for the .container inside .about
    aboutTimeline.from('.about .container', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.out',
    });
});