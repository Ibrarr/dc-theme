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
    headerTimeline.from('.header .breadcrumbs', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    headerTimeline.from('.header h1', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    headerTimeline.from('.header .cta-box', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation
});
