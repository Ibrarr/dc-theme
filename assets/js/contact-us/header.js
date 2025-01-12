import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('loading');

    // Fade out and remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // Wait for fade-out animation
    }

    // Timeline for the .header animations
    const headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.header',
            start: 'top 90%', // Start when the .header section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .breadcrumbs from left to right
    headerTimeline.from('.header .breadcrumbs', {
        opacity: 0,       // Start with fully transparent
        x: -25,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in h1 and .cta-box simultaneously
    headerTimeline.from(['.header h1', '.header .cta-box'], {
        opacity: 0,       // Start with fully transparent
        x: (index) => index === 0 ? -25 : 0, // h1 fades in from left, .cta-box from below
        y: (index) => index === 1 ? 25 : 0, // Only .cta-box moves vertically
        duration: 0.6,    // Animation duration
        ease: 'power2.out',
        stagger: {
            each: 0, // Both animations start at the same time
        },
    }, '-=0.4'); // Overlap slightly with the previous animation

    // Step 3: Fade in p from below with a small delay
    headerTimeline.from('.header .intro', {
        opacity: 0,
        x: -25,
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation
});
