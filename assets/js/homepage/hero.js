import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scroll animation
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

// Load Animation
document.addEventListener('DOMContentLoaded', () => {
    // Reset initial positions to prevent jumping
    gsap.set('.first-row-images', { y: -125 });
    gsap.set('.second-row-images', { y: 125 });

    // Timeline for the hero section animations
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 100%',
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in h1 and first-row-images
    heroTimeline
        .from('.content h1', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: 'power2.out',
        })
        .from('.first-row-images', {
            opacity: 0,
            y: 0, // Transition from y: 0 to their already set y position
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.4');

    // Step 2: Fade in p and second-row-images
    heroTimeline
        .from('.content p', {
            opacity: 0,
            x: -30,
            duration: 0.5,
            ease: 'power2.out',
        }, '-=0.3')
        .from('.second-row-images', {
            opacity: 0,
            y: 0, // Transition from y: 0 to their already set y position
            duration: 0.5,
            ease: 'power2.out',
        }, '-=0.4');

    // Step 3: Simplified fade-up animation for the button
    gsap.from('.content .button', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.content .button',
            start: 'top 100%',
            toggleActions: 'play none none none',
        }
    });
});
