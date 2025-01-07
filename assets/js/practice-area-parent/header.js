import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .header section animations
    const headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.header',
            start: 'top 90%', // Start when the .header section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in h1 from left to right
    headerTimeline.from('.header h1', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in p from left to right with a small delay
    headerTimeline.from('.header p', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    gsap.from('.header .button', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.5,
        ease: 'power2.out',
    });
});
