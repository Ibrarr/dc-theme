import gsap from 'gsap';
import { preloader } from '../global/preloader';

preloader();

const startHeaderAnimations = () => {
    const headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.header',
            start: 'top 90%', // Start when the .header section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in .breadcrumbs from left to right
    headerTimeline.from('.header .breadcrumbs', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in h1 from left to right
    headerTimeline.from('.header h1', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 3: Fade in p from left to right
    headerTimeline.from('.header p', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 4: Fade in .button from below
    gsap.from('.header .button', {
        opacity: 0,
        y: 25, // Start below its final position
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.header .button',
            start: 'top 90%', // Start when the button enters the viewport
            toggleActions: 'play none none none',
        },
    });
};

if (window.pageReady) {
    startHeaderAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startHeaderAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}
