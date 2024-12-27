jQuery(document).ready(function($) {
    // Scoped handlers for mobile menu
    $('.mobile-menu .open').on('click.mobileMenu', function() {
        $('.mobile-menus').slideDown(); // Slide down the mobile menus
        $(this).hide(); // Hide the open button
        $('.mobile-menu .close').show(); // Show the close button
        $('body').addClass('no-scroll'); // Disable scrolling on the body
    });

    $('.mobile-menu .close').on('click.mobileMenu', function() {
        $('.mobile-menus').slideUp(); // Slide up the mobile menus
        $(this).hide(); // Hide the close button
        $('.mobile-menu .open').show(); // Show the open button
        $('body').removeClass('no-scroll'); // Enable scrolling on the body
    });
});
