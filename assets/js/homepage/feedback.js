import Splide from '@splidejs/splide';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#feedback-slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 50,
        drag   : 'free',
        arrows: true,
        pagination: true,
        snap: true,
        breakpoints: {
            991: {
                perPage: 2,
            },
            798: {
                perPage: 1,
            },
        },
    }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the feedback section animations
    const feedbackTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.feedback',
            start: 'top 90%', // Start when the .feedback section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .heading h2 from left to right
    feedbackTimeline.from('.feedback .heading h2', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.5,
        ease: 'power2.out',
    });

    // Step 2: Fade in .heading p from left to right, slightly delayed
    feedbackTimeline.from('.feedback .heading p', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.5,
        ease: 'power2.out',
    }, '-=0.4'); // Overlap the animation slightly with the previous step

    // Step 3: Fade up #feedback-slider from down to up
    feedbackTimeline.from('#feedback-slider', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.3'); // Overlap the animation slightly with the previous step
});
