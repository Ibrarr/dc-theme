import gsap from 'gsap';

jQuery(document).ready(function($) {
    // Attach click event to .faq-item
    $('.faq-item').on('click', function() {
        var $currentItem = $(this);
        var $currentAnswer = $currentItem.find('.faq-answer');

        // Check if the clicked item is already open
        if ($currentItem.hasClass('active')) {
            // Slide up the currently open answer and remove 'active' class
            $currentAnswer.slideUp();
            $currentItem.removeClass('active');
        } else {
            // Slide up any open answers in other items
            $('.faq-item.active .faq-answer').slideUp();
            $('.faq-item.active').removeClass('active');

            // Slide down the clicked item's answer and add 'active' class
            $currentAnswer.slideDown();
            $currentItem.addClass('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Timeline for the .faq section animations
    const faqTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.faq',
            start: 'top 90%', // Start when the .faq section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        }
    });

    // Step 1: Fade in h2 from left to right
    faqTimeline.from('.faq h2', {
        opacity: 0,       // Start with fully transparent
        x: -50,          // Start from the left
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in p from left to right with a small delay
    faqTimeline.from('.faq .faq-description', {
        opacity: 0,
        x: -50,          // Start from the left
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.4'); // Overlap slightly with the previous animation

    // Step 3: Fade in .faq-items from below with a small delay
    faqTimeline.from('.faq .faq-items', {
        opacity: 0,
        y: 50,           // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.6'); // Overlap slightly with the previous animation

    // Step 4: Fade in .bottom from below with a small delay
    faqTimeline.from('.faq .bottom', {
        opacity: 0,
        y: 50,           // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation
});
