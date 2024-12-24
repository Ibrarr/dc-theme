import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the heading animations in .services
    const servicesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.services',
            start: 'top 90%', // Start when .services enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .heading .tag from left to right
    servicesTimeline.from('.services .heading .tag', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.5,
        ease: 'power2.out',
    });

    // Step 2: Fade in .heading h2 from left to right, slightly delayed
    servicesTimeline.from('.services .heading h2', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.3'); // Overlap the animation slightly with the previous step

    // Step 3: Fade in .heading p from left to right, slightly delayed
    servicesTimeline.from('.services .heading p', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap the animation slightly with the previous step

    // Separate scroll animation for .service-list staggered fade-up
    gsap.from('.services .service-list', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2, // Staggered delay between items
        scrollTrigger: {
            trigger: '.services .service-list',
            start: 'top 90%', // Start when the first .service-list enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });
});
