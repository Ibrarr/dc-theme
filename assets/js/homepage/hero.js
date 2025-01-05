import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const slides = gsap.utils.toArray('.hero-slides .slide');
    const header = document.querySelector('header'); // Assuming 'header' is the element with .hero-active

    // Initially hide the container to avoid flashes
    gsap.set('.hero-slides', {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        visibility: 'hidden',
    });

    // Stack the slides so the first is on top
    gsap.set(slides, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: (i) => slides.length - i,
        y: 0,
    });

    // Set all slides' `.bg-wrapper` to scale: 1.1 initially
    slides.forEach((slide) => {
        gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.1 });
    });

    // Animate the first slide's background on load
    gsap.to(slides[0].querySelector('.bg-wrapper'), {
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
    });

    // Disable native scrolling initially
    document.body.style.overflow = 'hidden';

    let currentIndex = 0;
    let isAnimating = false;

    const updateHeroClass = () => {
        if (currentIndex === slides.length - 1) {
            header.classList.remove('hero-active');
        } else {
            header.classList.add('hero-active');
        }
    };

    const moveToSlide = (index) => {
        if (isAnimating || index < 0 || index >= slides.length) return;

        isAnimating = true;

        const direction = index > currentIndex ? 1 : -1; // 1 for down, -1 for up
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        // Set the stacking order for proper stacking effect
        gsap.set(nextSlide, { zIndex: slides.length - index });

        const timeline = gsap.timeline({
            defaults: { duration: 1.5, ease: 'power2.inOut' },
            onComplete: () => {
                currentIndex = index;
                isAnimating = false;

                // Allow normal scrolling only when reaching the last slide
                if (currentIndex === slides.length - 1) {
                    document.body.style.overflow = 'auto';
                } else {
                    document.body.style.overflow = 'hidden';
                }

                // Update header class
                updateHeroClass();
            },
        });

        if (direction === 1) {
            // Scrolling down: Current slide moves up, next slide is revealed underneath
            timeline.to(currentSlide, { y: '-100%' }, 0);
            timeline.to(currentSlide.querySelector('.bg-wrapper'), { scale: 1.1 }, 0);
            timeline.fromTo(
                nextSlide.querySelector('.bg-wrapper'),
                { scale: 1.1 },
                { scale: 1 },
                0
            );
        } else {
            // Scrolling up: Previous slide moves back down, covering the current slide
            timeline.set(nextSlide, { y: '-100%' }, 0); // Position above the current slide
            timeline.to(nextSlide, { y: '0%' }, 0);
            timeline.to(nextSlide.querySelector('.bg-wrapper'), { scale: 1 }, 0);
            timeline.to(currentSlide.querySelector('.bg-wrapper'), { scale: 1.1 }, 0);
        }
    };

    const handleScroll = (event) => {
        const delta = event.deltaY;

        if (delta > 0) {
            // Scrolling down
            if (!isAnimating && currentIndex < slides.length - 1) {
                moveToSlide(currentIndex + 1);
            }
        } else if (delta < 0) {
            // Scrolling up
            const lastSlide = slides[slides.length - 1];
            const lastSlideRect = lastSlide.getBoundingClientRect();

            // Only enable slide-based scrolling if the last slide is fully back in view
            if (lastSlideRect.top >= 0 && lastSlideRect.bottom <= window.innerHeight) {
                if (!isAnimating) {
                    moveToSlide(currentIndex - 1);
                }
            }
        }
    };

    // Add event listener for scroll
    window.addEventListener('wheel', handleScroll);

    // Make container visible after setup
    gsap.set('.hero-slides', { visibility: 'visible' });

    // Initial class update
    updateHeroClass();
});
