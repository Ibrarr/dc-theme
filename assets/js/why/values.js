import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const startValuesAnimations = () => {
    const valuesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.values',
            start: 'top 90%', // Start when the .values section enters the viewport
            toggleActions: 'play none none none', // Play the animation only once on scroll
        },
    });

    // Step 1: Fade in .top h2 from left to right
    valuesTimeline.from('.values .top h2', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in .top p from left to right with a small delay
    valuesTimeline.from('.values .top p', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.45'); // Overlap slightly with the previous animation

    // Step 3: Stagger fade-up animation for each .value
    gsap.from('.values .value', {
        opacity: 0,
        y: 25, // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1, // Staggered delay between each .value
        scrollTrigger: {
            trigger: '.values',
            start: 'top 90%', // Start when the .values section enters the viewport
            toggleActions: 'play none none none', // Play the animation only once on scroll
        },
    });
};

if (window.pageReady) {
    startValuesAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startValuesAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}