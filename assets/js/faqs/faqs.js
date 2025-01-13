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

const startFAQAnimations = () => {
    // Timeline for the .faq section animations
    const faqTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.faqs',
            start: 'top 90%', // Start when the .faq section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in .faq-items from below with a small delay
    faqTimeline.from('.faqs .faq-items', {
        opacity: 0,
        y: 25,            // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    });

    // Step 2: Fade in .bottom from below with a small delay
    faqTimeline.from('.faqs .bottom', {
        opacity: 0,
        y: 25,            // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.4'); // Overlap slightly with the previous animation
};

if (window.pageReady) {
    startFAQAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startFAQAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}