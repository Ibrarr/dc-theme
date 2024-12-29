import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for animations inside #enquire-now
    const enquireTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#enquire-now',
            start: 'top 95%', // Start when #enquire-now enters the viewport
            toggleActions: 'play none none none',
        }
    });

    // Step 1: Fade in .content .heading h1 from left to right
    enquireTimeline.from('#enquire-now .content .heading h2', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in .content .heading h2 from left to right with a tiny delay
    enquireTimeline.from('#enquire-now .content .heading h3', {
        opacity: 0,
        x: -50, // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.4'); // Slight overlap with the previous step

    // Step 3: Fade in .content .heading p from left and .form up from down
    enquireTimeline.from(['#enquire-now .content .heading p', '#enquire-now .form'], {
        opacity: 0,
        x: (i) => i === 0 ? -50 : 0, // Heading p fades from left, .form moves vertically
        y: (i) => i === 1 ? 50 : 0, // Only .form moves up
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2, // Slight stagger between elements
    }, '-=0.5');

    // Separate animation for .content .what-to-expect
    const whatToExpectTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#enquire-now .content .what-to-expect',
            start: 'top 95%',
            toggleActions: 'play none none none',
        },
        delay: 0.4, // Add delay before starting this timeline
    });

    // Step 1: Fade in .bold from left to right
    whatToExpectTimeline.from('#enquire-now .content .what-to-expect .bold', {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: 'power2.out',
    });

    // Step 2: Fade in ul from left to right with a tiny delay
    whatToExpectTimeline.from('#enquire-now .content .what-to-expect ul', {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: 'power2.out',
    }, '-=0.4');

    // Step 3: Fade in .heading and .final-p from left to right
    whatToExpectTimeline.from(['#enquire-now .content .what-to-expect .heading', '#enquire-now .content .what-to-expect .final-p'], {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
    }, '-=0.55');

    // Separate animation for .content .contact-info a (staggered fade-in)
    gsap.from('#enquire-now .content .contact-info a', {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.6, // Add delay before starting this animation
        scrollTrigger: {
            trigger: '#enquire-now .content .contact-info',
            start: 'top 95%',
            toggleActions: 'play none none none',
        }
    });
});
