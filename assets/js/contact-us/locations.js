import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .locations animations
    const locationsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.locations',
            start: 'top 90%', // Start when the .locations section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in h2 from left to right
    locationsTimeline.from('.locations h2', {
        opacity: 0,       // Start with fully transparent
        x: -50,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in .location-description from left to right with a small delay
    locationsTimeline.from('.locations .location-description', {
        opacity: 0,
        x: -50,          // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 3: Stagger fade-in for each .location from below
    locationsTimeline.from('.locations .location', {
        opacity: 0,       // Start with fully transparent
        y: 50,           // Start below their final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
        stagger: 0.08,     // Stagger delay between locations
    }, '-=0.5'); // Overlap slightly with the previous animation
});