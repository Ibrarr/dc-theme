import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the our-approach section animations
    const approachTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.our-approach',
            start: 'top 90%', // Start when the .our-approach section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in .heading h1 from left to right
    approachTimeline.from('.our-approach .heading h2', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in .heading h2 from left to right, then .approach .timeline up
    approachTimeline
        .from('.our-approach .heading h3', {
            opacity: 0,
            x: -50, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.4') // Overlap slightly with the previous animation
        .from('.our-approach .approach .timeline', {
            opacity: 0,
            y: 50, // Start below its final position
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.6'); // Overlap slightly with the previous animation

    gsap.from('.our-approach .heading .button', {
        opacity: 0,
        y: 50, // Start below its final position
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.content .button',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });

    // Sequential Scroll animations for .item divs in .timeline
    const items = document.querySelectorAll('.timeline .item');
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 90%', // Start lower on the screen
            end: 'bottom 85%',
            scrub: true,
            pin: false, // No pinning required
            onUpdate: (self) => {
                if (self.progress === 1) {
                    // Ensure all lines are filled when at the bottom
                    items.forEach(item => {
                        item.style.setProperty('--line-fill-percentage', '100%');
                    });
                }
            },
        },
    });

    items.forEach((item, index) => {
        const img = item.querySelector('img');

        // Animate grayscale removal on the image
        timeline.fromTo(img,
            { filter: 'grayscale(1)' },
            {
                filter: 'grayscale(0)',
                duration: 0.3,
                ease: 'power2.out',
            },
            `+=${index * 0.8}` // Delay each animation slightly for sequence
        );

        // Animate the filling of the vertical line
        timeline.to(item, {
            '--line-fill-percentage': '100%',
            duration: 3, // Slower and smoother fill duration
            ease: 'power1.inOut', // Smooth easing for the fill
        }, `+=${index * 0.8}`); // Ensure it starts after the previous completes
    });
});