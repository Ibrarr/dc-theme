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
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: (i) => slides.length - i,
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

    const makeAllSlidesVisible = () => {
        gsap.set(slides, { opacity: 1 });
    };

    const moveToSlide = (index) => {
        if (isAnimating || index < 0 || index >= slides.length) return;

        isAnimating = true;

        const direction = index > currentIndex ? 1 : -1; // 1 for down, -1 for up
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        // Make all slides visible after the first transition
        makeAllSlidesVisible();

        // Set the stacking order and make the next slide visible
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

    // Enable scrolling when a button inside a slide is clicked
    document.querySelectorAll('.hero-slides .slide').forEach((button) => {
        button.addEventListener('click', () => {
            // Enable scrolling
            document.body.style.overflow = 'auto';

            // Make all slides visible
            makeAllSlidesVisible();

            // Move animation state to the last slide
            const slides = document.querySelectorAll('.hero-slides .slide');
            const lastSlideIndex = slides.length - 1;

            // Set the last slide position and reset others
            gsap.set(slides, {
                y: (i) => (i === lastSlideIndex ? '0%' : '-100%'),
            });

            // Update z-index for proper stacking
            slides.forEach((slide, index) => {
                slide.style.zIndex = index === lastSlideIndex ? slides.length : slides.length - index;
            });

            // Update currentIndex to the last slide
            currentIndex = lastSlideIndex;

            // Update hero-active class
            updateHeroClass();

            // Ensure proper z-index order for scrolling back
            slides.forEach((slide, index) => {
                gsap.set(slide, {
                    zIndex: slides.length - index, // Reset z-index in natural stacking order
                });
            });
        });
    });

    // Make the first slide visible after setup
    gsap.set(slides[0], { opacity: 1 });

    // Make container visible after setup
    gsap.set('.hero-slides', { visibility: 'visible' });

    // Initial class update
    updateHeroClass();
});
