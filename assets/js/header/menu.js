jQuery(document).ready(function($) {
    let hoverTimeout, closeTimeout;

    // Disable default link behavior for .mega-menu-link a
    $('.mega-menu-link a').on('click', function(event) {
        event.preventDefault();
    });

    // Functionality for sliding down/up the mega menu with delay
    $('.mega-menu-link').hover(
        function() {
            // Start a timeout to delay sliding down the menu
            clearTimeout(closeTimeout); // Clear any pending close timeout
            hoverTimeout = setTimeout(() => {
                $('.top-menu .mega-menu').stop(true, true).slideDown('fast');
                $(this).addClass('active'); // Add active class to the link
            }, 200);
        },
        function() {
            // Clear the open timeout if mouse leaves before delay ends
            clearTimeout(hoverTimeout);

            // Start a timeout to delay sliding up the menu
            closeTimeout = setTimeout(() => {
                if (!$('.top-menu .mega-menu').is(':hover')) {
                    $('.top-menu .mega-menu').stop(true, true).slideUp('fast');
                    $(this).removeClass('active'); // Remove active class when menu is closed
                }
            }, 200);
        }
    );

    $('.top-menu .mega-menu').hover(
        function() {
            // Clear the close timeout if hovering over the menu
            clearTimeout(closeTimeout);
            $(this).stop(true, true).slideDown('fast');
            $('.mega-menu-link').addClass('active'); // Keep active class while hovering over the menu
        },
        function() {
            // Start a timeout to delay sliding up the menu
            closeTimeout = setTimeout(() => {
                $(this).stop(true, true).slideUp('fast');
                $('.mega-menu-link').removeClass('active'); // Remove active class when menu is closed
            }, 100);
        }
    );
});
