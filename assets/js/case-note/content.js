import gsap from 'gsap';

const startContentAreaAnimations = () => {
    const contentAreaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.content-area',
            start: 'top 90%', // Start when the .content-area section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in .content-area from left to right
    contentAreaTimeline.from('.contents-area', {
        opacity: 0,       // Start with fully transparent
        x: -25,           // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in .table-of-contents-area from below with a small delay
    contentAreaTimeline.from('.table-of-contents-area', {
        opacity: 0,
        y: 25,            // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.4'); // Overlap slightly with the previous animation
};

if (window.pageReady) {
    startContentAreaAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startContentAreaAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}