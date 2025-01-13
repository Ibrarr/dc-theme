import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", function () {
    const tabItems = document.querySelectorAll(".tabs-list li");
    const desktopContents = document.querySelectorAll(".desktop-content .tab-content");
    const mobileContents = document.querySelectorAll(".tab-content-mobile");

    const isMobile = window.matchMedia("(max-width: 991px)");

    tabItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            // Remove active class from all tabs and content (desktop + mobile)
            tabItems.forEach((tab) => tab.classList.remove("active"));
            desktopContents.forEach((content) => content.classList.remove("active"));
            mobileContents.forEach((content) => (content.style.display = "none"));

            // Add active class to clicked tab
            item.classList.add("active");

            // Get target for desktop content
            const targetId = item.querySelector("a").getAttribute("href").substring(1);
            const targetDesktopContent = document.getElementById(targetId);

            // Show desktop content if on desktop
            if (targetDesktopContent) {
                targetDesktopContent.classList.add("active");
            }

            // Show mobile content if on mobile
            const mobileContent = item.querySelector(".tab-content-mobile");
            if (mobileContent) {
                mobileContent.style.display = "block";

                // Scroll to the top of the <a> element if screen size is 991px or below
                if (isMobile.matches) {
                    const tabLink = item.querySelector("a");
                    tabLink.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    // Add a resize listener to update the isMobile variable dynamically (optional)
    window.addEventListener("resize", () => {
        isMobile.matches = window.matchMedia("(max-width: 991px)").matches;
    });
});

const startPracticeAreaAnimations = () => {
    const practiceAreaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.practice-area-services',
            start: 'top 90%', // Start when the .practice-area-services section enters the viewport
            toggleActions: 'play none none none', // Play once on scroll
        },
    });

    // Step 1: Fade in h2 from below
    practiceAreaTimeline.from('.practice-area-services .top h2', {
        opacity: 0,       // Start with fully transparent
        y: 25,            // Start below its final position
        duration: 0.6,    // Animation duration
        ease: 'power2.out', // Smooth easing effect
    });

    // Step 2: Fade in p from below with a small delay
    practiceAreaTimeline.from('.practice-area-services .top p', {
        opacity: 0,
        y: 25,            // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation

    // Step 3: Fade in .vertical-tabs from below with a small delay
    practiceAreaTimeline.from('.practice-area-services .vertical-tabs', {
        opacity: 0,
        y: 25,            // Start below its final position
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.5'); // Overlap slightly with the previous animation
};

if (window.pageReady) {
    startPracticeAreaAnimations();
} else {
    const interval = setInterval(() => {
        if (window.pageReady) {
            clearInterval(interval); // Stop checking once ready
            startPracticeAreaAnimations(); // Initialize animations
        }
    }, 50); // Check every 50ms
}