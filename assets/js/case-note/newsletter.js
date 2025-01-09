import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .newsletter-signup animations
    const newsletterSignupTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.newsletter-signup',
            start: 'top 90%', // Start when the .newsletter-signup section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Fade in .container from below
    newsletterSignupTimeline.from('.newsletter-signup .container', {
        opacity: 0,       // Start with fully transparent
        y: 25,           // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });
});