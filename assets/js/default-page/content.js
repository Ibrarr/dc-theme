import gsap from 'gsap';
import { preloader } from '../global/preloader';

preloader();

const contentAnimations = () => {
    // Timeline for the .case-note-heading animations
    const contentTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.content',
            start: 'top 90%', // Start when the .case-note-heading section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Fade in .content from below
    contentTimeline.from('.content .title', {
        opacity: 0,       // Start with fully transparent
        x: -25,          // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    contentTimeline.from('.content .content-area', {
        opacity: 0,
        x: -25, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

};

if (window.pageReady) {
    contentAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            contentAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}