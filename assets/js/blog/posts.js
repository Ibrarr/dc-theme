import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .posts section animations
    const postsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.posts',
            start: 'top 90%', // Start when the .posts section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .categories from left to right
    postsTimeline.from('.posts .categories', {
        opacity: 0,       // Start with fully transparent
        x: -25,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Stagger fade-in for each article in .post-list from below
    postsTimeline.from('.posts .post-list article', {
        opacity: 0,       // Start with fully transparent
        y: 25,           // Start below their final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
        stagger: 0.08,     // Stagger delay between articles
    }, '-=0.4'); // Overlap slightly with the previous animation

    // Step 3: Fade in .pagination from left to right
    postsTimeline.from('.posts .pagination', {
        opacity: 0,       // Start with fully transparent
        x: -25,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    }, '-=0.4'); // Overlap slightly with the previous animation
});