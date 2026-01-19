import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

jQuery(document).ready(function ($) {
    $('body').removeClass('loading');

    const MIN_DISPLAY_TIME = 750; // Minimum time for the preloader to be on screen
    const $preloader = $('#preloader');
    const startTime = performance.now(); // Record the time when the script starts

    // Ensure the page always scrolls to the top on refresh
    window.scrollTo(0, 0);

    // Prevent the browser from restoring the previous scroll position
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Lock the scroll position explicitly during the preloader
    const lockScroll = () => {
        window.scrollTo(0, 0); // Keep scroll locked at the top
    };

    // Add scroll lock during the preloader phase
    window.addEventListener('scroll', lockScroll);

    const reinitializeSlides = () => {
        const slides = gsap.utils.toArray('.hero-slides .slide');

        // Reset all slides to their initial state
        gsap.set(slides, {
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: (i) => slides.length - i,
            y: '0%', // FIX: Ensure all slides start at y: 0%
        });

        // Ensure the first slide is visible
        gsap.set(slides[0], { opacity: 1 });

        slides.forEach((slide) => {
            gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.2 });
        });

        // Animate the first slide's background
        gsap.to(slides[0].querySelector('.bg-wrapper'), {
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
        });

        document.body.style.overflow = 'hidden'; // Lock scroll for slides
    };

    if ($preloader.length) {
        // Calculate the elapsed time
        const elapsedTime = performance.now() - startTime;

        // Ensure the preloader stays visible for at least MIN_DISPLAY_TIME
        setTimeout(() => {
            window.pageReady = true; // Set the global flag

            // Reinitialize slides just before the preloader starts fading out
            reinitializeSlides();

            // Start fading out the preloader
            $preloader.fadeOut(300, function () {
                $(this).remove(); // Remove preloader after fade-out

                // Remove scroll lock after preloader is gone
                window.removeEventListener('scroll', lockScroll);
            });
        }, Math.max(MIN_DISPLAY_TIME - elapsedTime, 0));
    }
});

const startHeroAnimation = () => {
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

    // FIX: Reset slides to proper state based on current index
    const resetSlidesToCurrentState = () => {
        slides.forEach((slide, index) => {
            if (index < currentIndex) {
                // Slides before current should be above (already scrolled past)
                gsap.set(slide, { y: '-100%', opacity: 1 });
            } else {
                // Current and future slides should be at 0
                gsap.set(slide, { y: '0%', opacity: index === currentIndex ? 1 : 0 });
            }
        });
    };

    // FIX: Lock scroll immediately and scroll hero into view
    const lockScrollAndSnapToHero = () => {
        document.body.style.overflow = 'hidden';
        const heroSlidesContainer = document.querySelector('.hero-slides');
        if (heroSlidesContainer) {
            heroSlidesContainer.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    };

    const moveToSlide = (index) => {
        if (isAnimating || index < 0 || index >= slides.length) return;

        isAnimating = true;
        const direction = index > currentIndex ? 1 : -1;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        // FIX: Lock scroll IMMEDIATELY when moving to a non-last slide
        // Also snap to hero if we're going backwards from the last slide (user may have scrolled down the page)
        if (index !== slides.length - 1) {
            const wasOnLastSlide = currentIndex === slides.length - 1;
            document.body.style.overflow = 'hidden';

            if (wasOnLastSlide && direction === -1) {
                // Going backwards from last slide - snap to hero and reset slide states
                lockScrollAndSnapToHero();
                resetSlidesToCurrentState();
            }
        }

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
            // Scrolling up - allow scrolling back through all slides
            // FIX: Only trigger slide change when hero is FULLY in view (top of hero at or above viewport top)
            if (!isAnimating && currentIndex > 0 && heroSlidesRect.top >= 0) {
                moveToSlide(currentIndex - 1);
            }
        }
    };

    const handleTouchStart = (event) => {
        startY = event.touches[0].clientY;
        isTouching = true;
    };

    const handleTouchMove = (event) => {
        if (!isTouching) return;

        // Check if we're in the hero section for touch events
        const heroSlidesContainer = document.querySelector('.hero-slides');
        const heroSlidesRect = heroSlidesContainer.getBoundingClientRect();

        if (heroSlidesRect.bottom <= 0 || heroSlidesRect.top >= window.innerHeight) {
            // User is outside the slides section
            return;
        }

        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (Math.abs(deltaY) > 50) {
            if (deltaY > 0) {
                // Swipe up (to next slide)
                if (!isAnimating && currentIndex < slides.length - 1) {
                    moveToSlide(currentIndex + 1);
                }
            } else {
                // Swipe down (to previous slide)
                // FIX: Only trigger slide change when hero is FULLY in view (top of hero at or above viewport top)
                if (!isAnimating && currentIndex > 0 && heroSlidesRect.top >= 0) {
                    moveToSlide(currentIndex - 1);
                }
            }
            isTouching = false; // Prevent multiple triggers
        }
    };

    const handleTouchEnd = () => {
        isTouching = false;
    };

    // Handle anchor navigation
    const handleAnchorNavigation = () => {
        const hash = window.location.hash;

        // If there's an anchor in the URL, skip to the last slide and enable scrolling
        if (hash) {
            // FIX: Set all previous slides to their 'scrolled past' state
            slides.forEach((slide, index) => {
                if (index < slides.length - 1) {
                    gsap.set(slide, { y: '-100%', opacity: 1 });
                    gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.2 });
                } else {
                    gsap.set(slide, { y: '0%', opacity: 1 });
                    gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1 });
                }
            });
            currentIndex = slides.length - 1;
            isAnimating = false;
            document.body.style.overflow = 'auto';
            updateHeroClass();
        }
    };

    // FIX: Handle anchor link clicks within hero slides
    const handleAnchorClick = (event) => {
        const target = event.target.closest('a[href^="#"]');
        if (!target) return;

        const hash = target.getAttribute('href');
        if (!hash || hash === '#') return;

        const targetElement = document.querySelector(hash);
        if (!targetElement) return;

        event.preventDefault();

        // Enable scrolling first
        document.body.style.overflow = 'auto';
        isAnimating = false;

        // Start scrolling to target immediately
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update hash without triggering hashchange
        history.pushState(null, null, hash);

        // FIX: Delay slide state change so user doesn't see the flash
        // Wait until scrolling has started and hero is moving out of view
        setTimeout(() => {
            slides.forEach((slide, index) => {
                if (index < slides.length - 1) {
                    gsap.set(slide, { y: '-100%', opacity: 1 });
                    gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.2 });
                } else {
                    gsap.set(slide, { y: '0%', opacity: 1 });
                    gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1 });
                }
            });
            currentIndex = slides.length - 1;
            updateHeroClass();
        }, 150); // Small delay to let scroll start and hero move out of view
    };

    // Add click listener to hero slides for anchor links
    const heroSlidesContainer = document.querySelector('.hero-slides');
    heroSlidesContainer.addEventListener('click', handleAnchorClick);

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('hashchange', handleAnchorNavigation);

    gsap.set(slides[0], { opacity: 1 });
    gsap.set('.hero-slides', { visibility: 'visible' });
    updateHeroClass();

    // Check for anchor on initial load
    handleAnchorNavigation();
};

if (window.pageReady) {
    startHeroAnimation();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startHeroAnimation(); // Run the animation
        }
    }, 50);
}