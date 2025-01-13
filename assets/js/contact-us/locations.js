import gsap from 'gsap';

const startLocationsAnimation = () => {
    // Timeline for the .locations animations
    const locationsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.locations',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });

    locationsTimeline.from('.locations h2', {
        opacity: 0,
        x: -25,
        duration: 0.6,
        ease: 'power2.out',
    });

    locationsTimeline.from('.locations .location-description', {
        opacity: 0,
        x: -25,
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5');

    locationsTimeline.from('.locations .location', {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
    }, '-=0.5');
};

if (window.pageReady) {
    startLocationsAnimation();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startLocationsAnimation(); // Run the animation
        }
    }, 50); // Check every 50ms
}