import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const slides = gsap.utils.toArray('.hero-slides .slide');
    const header = document.querySelector('header'); // Assuming 'header' is the element with .hero-active
    let startY = 0; // For touch events
    let isTouching = false;

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

    slides.forEach((slide) => {
        gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.2 });
    });

    gsap.to(slides[0].querySelector('.bg-wrapper'), {
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
    });

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
        const direction = index > currentIndex ? 1 : -1;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        makeAllSlidesVisible();

        gsap.set(nextSlide, { zIndex: slides.length - index });

        const timeline = gsap.timeline({
            defaults: { duration: 1.5, ease: 'power2.inOut' },
            onComplete: () => {
                currentIndex = index;
                isAnimating = false;

                if (currentIndex === slides.length - 1) {
                    document.body.style.overflow = 'auto';
                } else {
                    document.body.style.overflow = 'hidden';
                }

                updateHeroClass();
            },
        });

        if (direction === 1) {
            timeline.to(currentSlide, { y: '-100%' }, 0);
            timeline.to(currentSlide.querySelector('.bg-wrapper'), { scale: 1.2 }, 0);
            timeline.fromTo(
                nextSlide.querySelector('.bg-wrapper'),
                { scale: 1.2 },
                { scale: 1 },
                0
            );
        } else {
            timeline.set(nextSlide, { y: '-100%' }, 0);
            timeline.to(nextSlide, { y: '0%' }, 0);
            timeline.to(nextSlide.querySelector('.bg-wrapper'), { scale: 1 }, 0);
            timeline.to(currentSlide.querySelector('.bg-wrapper'), { scale: 1.2 }, 0);
        }
    };

    const handleScroll = (event) => {
        const delta = event.deltaY;

        // Get the bounding rectangle of the .hero-slides container
        const heroSlidesContainer = document.querySelector('.hero-slides');
        const heroSlidesRect = heroSlidesContainer.getBoundingClientRect();

        // Check if the user is in the .hero-slides section
        if (heroSlidesRect.bottom <= 0 || heroSlidesRect.top >= window.innerHeight) {
            // User is outside the slides section, no need to trigger the slide logic
            return;
        }

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

    const handleTouchStart = (event) => {
        startY = event.touches[0].clientY;
        isTouching = true;
    };

    const handleTouchMove = (event) => {
        if (!isTouching) return;

        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (Math.abs(deltaY) > 50) {
            if (deltaY > 0) {
                // Swipe up
                if (!isAnimating && currentIndex < slides.length - 1) {
                    moveToSlide(currentIndex + 1);
                }
            } else {
                // Swipe down
                if (!isAnimating && currentIndex > 0) {
                    moveToSlide(currentIndex - 1);
                }
            }
            isTouching = false; // Prevent multiple triggers
        }
    };

    const handleTouchEnd = () => {
        isTouching = false;
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Function to handle the slide navigation logic
    const moveToLastSlide = () => {
        document.body.style.overflow = 'auto';
        makeAllSlidesVisible();
        const slides = document.querySelectorAll('.hero-slides .slide');
        const lastSlideIndex = slides.length - 1;

        gsap.set(slides, {
            y: (i) => (i === lastSlideIndex ? '0%' : '-100%'),
        });

        slides.forEach((slide, index) => {
            slide.style.zIndex = index === lastSlideIndex ? slides.length : slides.length - index;
        });

        currentIndex = lastSlideIndex;

        updateHeroClass();

        slides.forEach((slide, index) => {
            gsap.set(slide, {
                zIndex: slides.length - index,
            });
        });
    };

// Add event listeners for slide buttons
    document.querySelectorAll('.hero-slides .slide .button').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent any propagation issues
            moveToLastSlide();
        });
    });

// Add event listeners for header buttons
    document.querySelectorAll('header .mobile-menus .ctas .button, header .top-menu .ctas .button').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent any propagation issues
            moveToLastSlide();
        });
    });


    gsap.set(slides[0], { opacity: 1 });
    gsap.set('.hero-slides', { visibility: 'visible' });
    updateHeroClass();
});
