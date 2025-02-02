import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { preloader } from '../global/preloader';

gsap.registerPlugin(ScrollTrigger);

preloader();

const startHeroAnimations = () => {
    // Parallax animations for images in the hero section
    gsap.to('.first-row-images', {
        y: -200,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom top',
            scrub: 0.5,
        },
    });

    gsap.to('.second-row-images', {
        y: 200,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom top',
            scrub: 0.5,
        },
    });

    // Set initial states for parallax images
    gsap.set('.first-row-images', { y: -110 });
    gsap.set('.second-row-images', { y: 110 });

    // Timeline for the hero section animations
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 90%', // Start when the .hero section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in .content h1 from left to right, then .first-row-images up
    heroTimeline
        .from('.hero .content h1', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        })
        .from('.hero .first-row-images', {
            opacity: 0,
            y: 0, // Start below its final position
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.4'); // Overlap the animation slightly with the previous step

    // Step 2: Fade in .content p from left to right, then .second-row-images up
    heroTimeline
        .from('.hero .content p', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.5,
            ease: 'power2.out',
        }, '-=0.65') // Overlap the animation slightly with the previous step
        .from('.hero .second-row-images', {
            opacity: 0,
            y: 0, // Start below its final position
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.5'); // Overlap the animation slightly with the previous step

    // Step 3: Fade up .content .button from below without triggering on scroll
    gsap.from('.hero .content .button', {
        opacity: 0,
        y: 25, // Start below its final position
        duration: 0.5,
        ease: 'power2.out',
    });
};

if (window.pageReady) {
    startHeroAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startHeroAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}