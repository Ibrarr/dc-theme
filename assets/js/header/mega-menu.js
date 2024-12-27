jQuery(document).ready(function($) {
    let hoverTimeout, closeTimeout;

    function isSmallScreen() {
        return $(window).width() < 1280;
    }

    // Disable default link behavior for .mega-menu-link a
    $('.mega-menu-link a').on('click.megaMenu', function(event) {
        event.preventDefault();
    });

    // Hover functionality for large screens
    function addHoverFunctionality() {
        $('.mega-menu-link').hover(
            function() {
                if (isSmallScreen()) return;

                clearTimeout(closeTimeout);
                hoverTimeout = setTimeout(() => {
                    $('.mega-menu').stop(true, true).slideDown('fast');
                    $(this).addClass('active');
                }, 200);
            },
            function() {
                if (isSmallScreen()) return;

                clearTimeout(hoverTimeout);
                closeTimeout = setTimeout(() => {
                    if (!$('.mega-menu').is(':hover')) {
                        $('.mega-menu').stop(true, true).slideUp('fast');
                        $(this).removeClass('active');
                    }
                }, 200);
            }
        );

        $('.mega-menu').hover(
            function() {
                if (isSmallScreen()) return;

                clearTimeout(closeTimeout);
                $(this).stop(true, true).slideDown('fast');
                $('.mega-menu-link').addClass('active');
            },
            function() {
                if (isSmallScreen()) return;

                closeTimeout = setTimeout(() => {
                    $(this).stop(true, true).slideUp('fast');
                    $('.mega-menu-link').removeClass('active');
                }, 100);
            }
        );
    }

    // Click-to-toggle functionality for small screens
    function addClickFunctionality() {
        $('.mega-menu-link').off('.megaMenu'); // Remove any existing hover or click handlers

        $('.mega-menu-link').on('click.megaMenu', function() {
            if (!isSmallScreen()) return;

            const $menu = $('.mega-menu-mobile');
            if ($menu.is(':visible')) {
                $menu.slideUp('fast');
                $(this).removeClass('active');
            } else {
                $menu.slideDown('fast');
                $(this).addClass('active');
            }
        });
    }

    function initializeMenu() {
        if (isSmallScreen()) {
            addClickFunctionality();
        } else {
            addHoverFunctionality();
        }
    }

    initializeMenu();

    $(window).on('resize.megaMenu', function() {
        initializeMenu();
    });
});
