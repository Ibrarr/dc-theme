import Splide from '@splidejs/splide';
import gsap from 'gsap';

export const clientFeedback = () => {
    const startFeedbackAnimations = () => {
        // Initialize Splide for #feedback-slider
        new Splide('#feedback-slider', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: 50,
            drag: 'free',
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

        // Timeline for the feedback section animations
        const feedbackTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.feedback',
                start: 'top 90%', // Start when the .feedback section enters the viewport
                toggleActions: 'play none none none', // Play once on scroll
            },
        });

        // Step 1: Fade in .heading h2 from left to right
        feedbackTimeline.from('.feedback .heading h2', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.5,
            ease: 'power2.out',
        });

        // Step 2: Fade in .heading p from left to right, slightly delayed
        feedbackTimeline.from('.feedback .heading p', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.5,
            ease: 'power2.out',
        }, '-=0.4'); // Overlap the animation slightly with the previous step

        // New animation for #feedback-slider
        gsap.from('#feedback-slider', {
            scrollTrigger: {
                trigger: '#feedback-slider',
                start: 'top 90%', // Start when #feedback-slider enters the viewport
                toggleActions: 'play none none none', // Play once on scroll
            },
            opacity: 0,
            y: 25, // Start below its final position
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    if (window.pageReady) {
        startFeedbackAnimations();
    } else {
        const interval = setInterval(() => {
            if (window.pageReady) {
                clearInterval(interval); // Stop checking once ready
                startFeedbackAnimations(); // Start feedback slider and animations
            }
        }, 50); // Check every 50ms
    }
};