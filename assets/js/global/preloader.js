export const preloader = () => {
    jQuery(document).ready(function ($) {
        $('body').removeClass('loading');

        const MIN_DISPLAY_TIME = 750; // Minimum time for the preloader to be on screen
        const $preloader = $('#preloader');
        const startTime = performance.now(); // Record the time when the script starts

        if ($preloader.length) {
            // Calculate the elapsed time
            const elapsedTime = performance.now() - startTime;

            // Ensure the preloader stays visible for at least MIN_DISPLAY_TIME
            setTimeout(() => {
                window.pageReady = true; // Set the global flag

                // Start fading out the preloader
                $preloader.fadeOut(300, function () {
                    $(this).remove(); // Remove preloader after fade-out
                });
            }, Math.max(MIN_DISPLAY_TIME - elapsedTime, 0));
        }
    });
};