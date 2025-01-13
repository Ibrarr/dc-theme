import gsap from 'gsap';
import { preloader } from '../global/preloader';

preloader();

const start404HeadingAnimations = () => {
    const headerContainerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.header',
            start: 'top 90%', // Start when the .header section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Fade in .header-container from below
    headerContainerTimeline.from('.header .header-container', {
        opacity: 0,       // Start with fully transparent
        y: 25,           // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });
};

if (window.pageReady) {
    start404HeadingAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            start404HeadingAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}
