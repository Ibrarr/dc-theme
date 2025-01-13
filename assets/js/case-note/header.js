import gsap from 'gsap';
import { preloader } from '../global/preloader';

preloader();

const startCaseNoteHeadingAnimations = () => {
    // Timeline for the .case-note-heading animations
    const caseNoteHeadingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.case-note-heading',
            start: 'top 90%', // Start when the .case-note-heading section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Fade in .content from below
    caseNoteHeadingTimeline.from('.case-note-heading .content', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });
};

// Wait for `window.pageReady` before initializing animations
if (window.pageReady) {
    startCaseNoteHeadingAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startCaseNoteHeadingAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}