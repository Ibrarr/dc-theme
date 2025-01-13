import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const startAboutAnimations = () => {
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 90%', // Start when the .about section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Fade-up animation for the .container inside .about
    aboutTimeline.from('.about .container', {
        opacity: 0,
        y: 25, // Start below its final position
        duration: 0.6,
        ease: 'power2.out', // Smooth easing effect
    });
};

if (window.pageReady) {
    startAboutAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startAboutAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}