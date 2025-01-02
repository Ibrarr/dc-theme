import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .team section animations
    const teamTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.team',
            start: 'top 90%', // Start when the .team section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .top .tag from left to right
    teamTimeline.from('.team .top .tag', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in .top h3 from left to right with a small delay
    teamTimeline.from('.team .top h3', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 3: Fade in .top p from left to right with a small delay
    teamTimeline.from('.team .top p', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 4: Stagger fade-up animation for each .member
    gsap.from('.team .member', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1, // Staggered delay between each member
        scrollTrigger: {
            trigger: '.team',
            start: 'top 90%', // Start when the .team section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });
});
