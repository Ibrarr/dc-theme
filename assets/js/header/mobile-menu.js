jQuery(document).ready(function($) {
    // Scoped handlers for mobile menu
    $('.mobile-menu .open').on('click.mobileMenu', function() {
        $('.mobile-menus').slideDown(); // Slide down the mobile menus
        $(this).hide(); // Hide the open button
        $('.mobile-menu .close').show(); // Show the close button
        $('header').addClass('mobile-menu-active');
        $('body').addClass('no-scroll'); // Disable scrolling on the body
    });

    $('.mobile-menu .close').on('click.mobileMenu', function() {
        // Check if .mega-menu-mobile is visible and slide it up first
        if ($('.mega-menu-mobile').is(':visible')) {
            $('.mega-menu-mobile').slideUp(function() {
                // Once .mega-menu-mobile is hidden, slide up the mobile menus
                $('.mobile-menus').slideUp(function() {
                    // Remove the active classes only after animations are complete
                    $('header').removeClass('mobile-menu-active active-mega-menu');
                    $('.mega-menu-link').removeClass('active');
                    $('body').removeClass('no-scroll'); // Enable scrolling on the body
                });
            });
        } else {
            // If .mega-menu-mobile is not visible, slide up the mobile menus directly
            $('.mobile-menus').slideUp(function() {
                // Remove the active classes after sliding up the mobile menus
                $('header').removeClass('mobile-menu-active active-mega-menu');
                $('.mega-menu-link').removeClass('active');
                $('body').removeClass('no-scroll'); // Enable scrolling on the body
            });
        }

        $(this).hide(); // Hide the close button
        $('.mobile-menu .open').show(); // Show the open button
    });

    // Handler for anchor links within the menu
    $('.mobile-menus .button').on('click.mobileMenu', function(e) {
        const target = $(this).attr('href'); // Get the href attribute of the button
        if (target.startsWith('#')) { // Check if it's an anchor link
            e.preventDefault(); // Prevent default link behavior
            // Close the menu
            $('.mobile-menus').slideUp();
            $('.mobile-menu .close').hide();
            $('.mobile-menu .open').show();
            $('header').removeClass('mobile-menu-active active-mega-menu');
            $('body').removeClass('no-scroll');

            // Navigate to the anchor link
            const offset = $(target).offset().top; // Get the offset position of the target element
            $('html, body').animate({ scrollTop: offset }); // Smooth scroll to the target
        }
    });
});
