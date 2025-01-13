import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const enquireBottomSection = () => {
    const startEnquireAnimations = () => {
        const enquireTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#enquire-now',
                start: 'top 95%', // Start when #enquire-now enters the viewport
                toggleActions: 'play none none none',
            }
        });

        // Step 1: Fade in .content .heading h2 from left to right
        enquireTimeline.from('#enquire-now .content .heading h2', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        });

        // Step 2: Fade in .content .heading h3 from left to right with a tiny delay
        enquireTimeline.from('#enquire-now .content .heading h3', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.4'); // Slight overlap with the previous step

        // Step 3: Fade in .content .heading p from left and .form up from down
        enquireTimeline.from(['#enquire-now .content .heading p', '#enquire-now .form'], {
            opacity: 0,
            x: (i) => i === 0 ? -25 : 0, // Heading p fades from left, .form moves vertically
            y: (i) => i === 1 ? 25 : 0, // Only .form moves up
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.2, // Slight stagger between elements
        }, '-=0.5');

        enquireTimeline.from('#enquire-now .content .what-to-expect', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.6'); // Slight overlap with the previous step

        enquireTimeline.from('#enquire-now .content .contact-info', {
            opacity: 0,
            x: -25, // Start from the left
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.5'); // Slight overlap with the previous step
    };

    if (window.pageReady) {
        startEnquireAnimations();
    } else {
        const interval = setInterval(() => {
            if (window.pageReady) {
                clearInterval(interval); // Stop checking once ready
                startEnquireAnimations(); // Start the animations
            }
        }, 50); // Check every 50ms
    }
};