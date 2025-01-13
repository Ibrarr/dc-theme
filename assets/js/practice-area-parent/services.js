import gsap from 'gsap';

const startServiceListAnimations = () => {
    const serviceListTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.service-list',
            start: 'top 90%', // Start when the .service-list section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in h2
    serviceListTimeline.from('.service-list h2', {
        opacity: 0,       // Start with fully transparent
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Stagger fade-in for each .service-container
    gsap.from('.service-list .service-container', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start slightly below
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
        stagger: 0.08,     // Stagger delay between items
        scrollTrigger: {
            trigger: '.service-list',
            start: 'top 90%', // Start animation when the .service-list enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });
};

if (window.pageReady) {
    startServiceListAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startServiceListAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}