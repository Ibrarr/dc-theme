import Splide from '@splidejs/splide';
import gsap from 'gsap';

export const caseNotesSlider = () => {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#case-notes-slider', {
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
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Set initial state for cards to hidden
        gsap.set('.case-notes .splide .standard-case-note-card', {
            opacity: 0,
            y: 50, // Slightly below the final position
        });

        // Heading animations
        const caseNotesTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.case-notes',
                start: 'top 90%', // Start when the .case-notes section enters the viewport
                toggleActions: 'play none none none', // Play once on scroll
            },
        });

        caseNotesTimeline.from('.case-notes .heading h2', {
            opacity: 0,
            x: -50,
            duration: 0.6,
            ease: 'power2.out',
        }).from('.case-notes .heading h3', {
            opacity: 0,
            x: -50,
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.5').from('.case-notes .heading p', {
            opacity: 0,
            x: -50,
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.5');

        // Optimize staggered animation for cards
        const cards = document.querySelectorAll('.case-notes #case-notes-slider .standard-case-note-card');

        gsap.to(cards, {
            opacity: 1,
            y: 0, // Animate to original position
            duration: 0.6,
            ease: 'power2.out',
            stagger: {
                amount: 0.5, // Spread total stagger across all cards
            },
            scrollTrigger: {
                trigger: '.case-notes .splide',
                start: 'top 90%', // Trigger as soon as the container is visible
                toggleActions: 'play none none none', // Play once
            },
        });

        gsap.from('#case-notes-slider', {
            scrollTrigger: {
                trigger: '#feedback-slider',
                start: 'top 90%', // Start when #feedback-slider enters the viewport
                toggleActions: 'play none none none', // Play once on scroll
            },
            opacity: 0,
            y: 50, // Start below its final position
            duration: 0.6,
            ease: 'power2.out',
        });
    });
};