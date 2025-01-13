import gsap from 'gsap';
import { preloader } from '../global/preloader';

preloader();

const startBlogHeadingAnimations = () => {
    const blogHeadingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.blog-heading',
            start: 'top 90%', // Start when the .blog-heading section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Fade in .container from below
    blogHeadingTimeline.from('.blog-heading .container', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });
};

if (window.pageReady) {
    startBlogHeadingAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startBlogHeadingAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}