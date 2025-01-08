import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .second-section animations
    const secondSectionTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.second-section',
            start: 'top 90%', // Start when the .second-section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in h2 from left to right
    secondSectionTimeline.from('.second-section h2', {
        opacity: 0,       // Start with fully transparent
        x: -50,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Stagger fade in p tags and fade in .image from below simultaneously
    secondSectionTimeline.from('.second-section p', {
        opacity: 0,
        x: -50,          // Start from the left
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,    // Stagger delay between p tags
    }, '-=0.5');

    secondSectionTimeline.from('.second-section .image', {
        opacity: 0,
        y: 20,           // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.6'); // Start fading in the image while the p tags are staggered

    // Step 3: Fade in .ctas from below
    secondSectionTimeline.from('.second-section .ctas', {
        opacity: 0,
        y: 30,           // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.6'); // Overlap slightly with the previous animation
});
