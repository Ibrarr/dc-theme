import gsap from 'gsap';

const startPostsAnimations = () => {
    const postsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.posts',
            start: 'top 90%', // Start when the .posts section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in .categories from left to right
    postsTimeline.from('.posts .categories', {
        opacity: 0,       // Start with fully transparent
        x: -25,           // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in .newsletter-signup from below
    postsTimeline.from('.posts .newsletter-signup', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start from below
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    }, '-=0.4'); // Overlap slightly with the previous animation

    // Step 3: Stagger fade-in for each article in .post-list from below
    postsTimeline.from('.posts .post-list article', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start below their final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
        stagger: 0.08,     // Stagger delay between articles
    }, '-=0.7'); // Overlap slightly with the previous animation

    // Step 4: Fade in .pagination from left to right
    postsTimeline.from('.posts .pagination', {
        opacity: 0,       // Start with fully transparent
        x: -25,           // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    }, '-=0.5'); // Overlap slightly with the previous animation
};

if (window.pageReady) {
    startPostsAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startPostsAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}