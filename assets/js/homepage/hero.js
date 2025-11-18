import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

jQuery(document).ready(function ($) {
    $('body').removeClass('loading');

    const MIN_DISPLAY_TIME = 750;
    const $preloader = $('#preloader');
    const startTime = performance.now();

    window.scrollTo(0, 0);

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const lockScroll = () => {
        window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', lockScroll);

    const reinitializeSlides = () => {
        const slides = gsap.utils.toArray('.hero-slides .slide');

        gsap.set(slides, {
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: (i) => slides.length - i,
        });

        gsap.set(slides[0], { opacity: 1 });

        slides.forEach((slide) => {
            gsap.set(slide.querySelector('.bg-wrapper'), { scale: 1.2 });
        });

        gsap.to(slides[0].querySelector('.bg-wrapper'), {
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
        });

        document.body.style.overflow = 'hidden';
    };

    if ($preloader.length) {
        const elapsedTime = performance.now() - startTime;

        setTimeout(() => {
            window.pageReady = true;
            reinitializeSlides();

            $preloader.fadeOut(300, function () {
                $(this).remove();
                window.removeEventListener('scroll', lockScroll);
            });
        }, Math.max(MIN_DISPLAY_TIME - elapsedTime, 0));
    }
});

const startHeroAnimation = () => {
    const slides = gsap.utils.toArray('.hero-slides .slide');
    const header = document.querySelector('header');
    const lastSlideIndex = slides.length - 1;

    let currentIndex = 0;
    let isAnimating = false;
    let startY = 0;
    let isTouching = false;

    gsap.set('.hero-slides', {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        visibility: 'hidden',
    });

    // Check if page loaded with anchor or at scroll position
    const hasAnchorOrScroll = window.location.hash !== '' || window.scrollY > 0;

    if (hasAnchorOrScroll) {
        currentIndex = lastSlideIndex;
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[lastSlideIndex], { opacity: 1, zIndex: 1 });
        gsap.set(slides[lastSlideIndex].querySelector('.bg-wrapper'), { scale: 1 });
        document.body.style.overflow = 'auto';
    } else {
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[0], { opacity: 1 });
        gsap.set(slides[0].querySelector('.bg-wrapper'), { scale: 1 });
        document.body.style.overflow = 'hidden';
    }

    gsap.set('.hero-slides', { visibility: 'visible' });

    const updateHeroClass = () => {
        if (currentIndex === lastSlideIndex) {
            header.classList.remove('hero-active');
        } else {
            header.classList.add('hero-active');
        }
    };

    const moveToSlide = (index) => {
        if (isAnimating || index < 0 || index >= slides.length || index === currentIndex) return;

        isAnimating = true;
        const direction = index > currentIndex ? 1 : -1;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        gsap.set(slides, { opacity: 1 });
        gsap.set(nextSlide, { zIndex: slides.length - index });

        const timeline = gsap.timeline({
            defaults: { duration: 1.5, ease: 'power2.inOut' },
            onComplete: () => {
                currentIndex = index;
                isAnimating = false;

                if (currentIndex === lastSlideIndex) {
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
        // Don't trigger slide logic if we're already on the last slide
        if (currentIndex === lastSlideIndex) {
            return;
        }

        const delta = event.deltaY;
        const heroSlidesContainer = document.querySelector('.hero-slides');
        const heroSlidesRect = heroSlidesContainer.getBoundingClientRect();

        if (heroSlidesRect.bottom <= 0 || heroSlidesRect.top >= window.innerHeight) {
            return;
        }

        if (delta > 0 && !isAnimating && currentIndex < lastSlideIndex) {
            moveToSlide(currentIndex + 1);
        } else if (delta < 0 && !isAnimating && currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    };

    const handleTouchStart = (event) => {
        startY = event.touches[0].clientY;
        isTouching = true;
    };

    const handleTouchMove = (event) => {
        if (!isTouching || currentIndex === lastSlideIndex) return;

        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (Math.abs(deltaY) > 50) {
            if (deltaY > 0 && !isAnimating && currentIndex < lastSlideIndex) {
                moveToSlide(currentIndex + 1);
            } else if (deltaY < 0 && !isAnimating && currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            }
            isTouching = false;
        }
    };

    const handleTouchEnd = () => {
        isTouching = false;
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    updateHeroClass();
};

if (window.pageReady) {
    startHeroAnimation();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval);
            startHeroAnimation();
        }
    }, 50);
}