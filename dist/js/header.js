/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/header/header.js":
/*!************************************!*\
  !*** ./assets/js/header/header.js ***!
  \************************************/
/***/ (function() {

eval("jQuery(document).ready(function ($) {\n  var prevScrollpos = window.pageYOffset;\n  window.onscroll = function () {\n    var currentScrollPos = window.pageYOffset;\n    var header = document.getElementById(\"header\");\n    if (prevScrollpos > currentScrollPos || currentScrollPos <= 97) {\n      // Scrolling up or at the top of the page\n      header.style.top = \"0\"; // Adjust to your desired position\n      $('.main-menu-text').fadeIn(300);\n    } else {\n      // Scrolling down\n      header.style.top = \"-100px\"; // Adjust based on header height\n      $('.main-menu-text').fadeOut(300);\n    }\n    prevScrollpos = currentScrollPos;\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsInByZXZTY3JvbGxwb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsIm9uc2Nyb2xsIiwiY3VycmVudFNjcm9sbFBvcyIsImhlYWRlciIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ0b3AiLCJmYWRlSW4iLCJmYWRlT3V0Il0sInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL2hlYWRlci5qcz9hMWJmIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICBsZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuXG4gICAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcyB8fCBjdXJyZW50U2Nyb2xsUG9zIDw9IDk3KSB7XG4gICAgICAgICAgICAvLyBTY3JvbGxpbmcgdXAgb3IgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRvcCA9IFwiMFwiOyAvLyBBZGp1c3QgdG8geW91ciBkZXNpcmVkIHBvc2l0aW9uXG4gICAgICAgICAgICAkKCcubWFpbi1tZW51LXRleHQnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBkb3duXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUudG9wID0gXCItMTAwcHhcIjsgLy8gQWRqdXN0IGJhc2VkIG9uIGhlYWRlciBoZWlnaHRcbiAgICAgICAgICAgICQoJy5tYWluLW1lbnUtdGV4dCcpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH07XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7RUFDaEMsSUFBSUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLFdBQVc7RUFFdENELE1BQU0sQ0FBQ0UsUUFBUSxHQUFHLFlBQVk7SUFDMUIsSUFBSUMsZ0JBQWdCLEdBQUdILE1BQU0sQ0FBQ0MsV0FBVztJQUN6QyxJQUFNRyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ1MsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUVoRCxJQUFJTixhQUFhLEdBQUdJLGdCQUFnQixJQUFJQSxnQkFBZ0IsSUFBSSxFQUFFLEVBQUU7TUFDNUQ7TUFDQUMsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztNQUN4QlQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQyxNQUFNO01BQ0g7TUFDQUosTUFBTSxDQUFDRSxLQUFLLENBQUNDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztNQUM3QlQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNXLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDckM7SUFFQVYsYUFBYSxHQUFHSSxnQkFBZ0I7RUFDcEMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdLCJmaWxlIjoiLi9hc3NldHMvanMvaGVhZGVyL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/header/header.js\n");

/***/ }),

/***/ "./assets/js/header/mega-menu.js":
/*!***************************************!*\
  !*** ./assets/js/header/mega-menu.js ***!
  \***************************************/
/***/ (function() {

eval("jQuery(document).ready(function ($) {\n  var hoverTimeout, closeTimeout;\n  function isSmallScreen() {\n    return $(window).width() < 1280;\n  }\n\n  // Disable default link behavior for .mega-menu-link a\n  $('.mega-menu-link a').on('click.megaMenu', function (event) {\n    event.preventDefault();\n  });\n\n  // Hover functionality for large screens\n  function addHoverFunctionality() {\n    $('.mega-menu-link').hover(function () {\n      var _this = this;\n      if (isSmallScreen()) return;\n      clearTimeout(closeTimeout);\n      hoverTimeout = setTimeout(function () {\n        $('.mega-menu').stop(true, true).slideDown('fast');\n        $(_this).addClass('active');\n        $('header').addClass('active-mega-menu');\n      }, 200);\n    }, function () {\n      var _this2 = this;\n      if (isSmallScreen()) return;\n      clearTimeout(hoverTimeout);\n      closeTimeout = setTimeout(function () {\n        if (!$('.mega-menu').is(':hover')) {\n          $('.mega-menu').stop(true, true).slideUp('fast');\n          $(_this2).removeClass('active');\n          $('header').removeClass('active-mega-menu');\n        }\n      }, 200);\n    });\n    $('.mega-menu').hover(function () {\n      if (isSmallScreen()) return;\n      clearTimeout(closeTimeout);\n      $(this).stop(true, true).slideDown('fast');\n      $('.mega-menu-link').addClass('active');\n      $('header').addClass('active-mega-menu');\n    }, function () {\n      var _this3 = this;\n      if (isSmallScreen()) return;\n      closeTimeout = setTimeout(function () {\n        $(_this3).stop(true, true).slideUp('fast');\n        $('.mega-menu-link').removeClass('active');\n        $('header').removeClass('active-mega-menu');\n      }, 100);\n    });\n  }\n\n  // Click-to-toggle functionality for small screens\n  function addClickFunctionality() {\n    $('.mega-menu-link').off('.megaMenu'); // Remove any existing hover or click handlers\n\n    $('.mega-menu-link').on('click.megaMenu', function () {\n      if (!isSmallScreen()) return;\n      var $menu = $('.mega-menu-mobile');\n      if ($menu.is(':visible')) {\n        $menu.slideUp('fast');\n        $(this).removeClass('active');\n        $('header').removeClass('active-mega-menu');\n      } else {\n        $menu.slideDown('fast');\n        $(this).addClass('active');\n        $('header').addClass('active-mega-menu');\n      }\n    });\n  }\n  function initializeMenu() {\n    if (isSmallScreen()) {\n      addClickFunctionality();\n    } else {\n      addHoverFunctionality();\n    }\n  }\n  initializeMenu();\n  $(window).on('resize.megaMenu', function () {\n    initializeMenu();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImhvdmVyVGltZW91dCIsImNsb3NlVGltZW91dCIsImlzU21hbGxTY3JlZW4iLCJ3aW5kb3ciLCJ3aWR0aCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEhvdmVyRnVuY3Rpb25hbGl0eSIsImhvdmVyIiwiX3RoaXMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic3RvcCIsInNsaWRlRG93biIsImFkZENsYXNzIiwiX3RoaXMyIiwiaXMiLCJzbGlkZVVwIiwicmVtb3ZlQ2xhc3MiLCJfdGhpczMiLCJhZGRDbGlja0Z1bmN0aW9uYWxpdHkiLCJvZmYiLCIkbWVudSIsImluaXRpYWxpemVNZW51Il0sInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL21lZ2EtbWVudS5qcz8yZGU3Il0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICAgIGxldCBob3ZlclRpbWVvdXQsIGNsb3NlVGltZW91dDtcblxuICAgIGZ1bmN0aW9uIGlzU21hbGxTY3JlZW4oKSB7XG4gICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSA8IDEyODA7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBkZWZhdWx0IGxpbmsgYmVoYXZpb3IgZm9yIC5tZWdhLW1lbnUtbGluayBhXG4gICAgJCgnLm1lZ2EtbWVudS1saW5rIGEnKS5vbignY2xpY2subWVnYU1lbnUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSG92ZXIgZnVuY3Rpb25hbGl0eSBmb3IgbGFyZ2Ugc2NyZWVuc1xuICAgIGZ1bmN0aW9uIGFkZEhvdmVyRnVuY3Rpb25hbGl0eSgpIHtcbiAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykuaG92ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbWFsbFNjcmVlbigpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBob3ZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lZ2EtbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnYWN0aXZlLW1lZ2EtbWVudScpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU21hbGxTY3JlZW4oKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhvdmVyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLm1lZ2EtbWVudScpLmlzKCc6aG92ZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1lZ2EtbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgnZmFzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lZ2EtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAkKCcubWVnYS1tZW51JykuaG92ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbWFsbFNjcmVlbigpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdhY3RpdmUtbWVnYS1tZW51Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU21hbGxTY3JlZW4oKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tZWdhLW1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENsaWNrLXRvLXRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciBzbWFsbCBzY3JlZW5zXG4gICAgZnVuY3Rpb24gYWRkQ2xpY2tGdW5jdGlvbmFsaXR5KCkge1xuICAgICAgICAkKCcubWVnYS1tZW51LWxpbmsnKS5vZmYoJy5tZWdhTWVudScpOyAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGhvdmVyIG9yIGNsaWNrIGhhbmRsZXJzXG5cbiAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykub24oJ2NsaWNrLm1lZ2FNZW51JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIWlzU21hbGxTY3JlZW4oKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCAkbWVudSA9ICQoJy5tZWdhLW1lbnUtbW9iaWxlJyk7XG4gICAgICAgICAgICBpZiAoJG1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAkbWVudS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJG1lbnUuc2xpZGVEb3duKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZU1lbnUoKSB7XG4gICAgICAgIGlmIChpc1NtYWxsU2NyZWVuKCkpIHtcbiAgICAgICAgICAgIGFkZENsaWNrRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkSG92ZXJGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplTWVudSgpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubWVnYU1lbnUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5pdGlhbGl6ZU1lbnUoKTtcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxR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\n//# sourceURL=webpack-internal:///./assets/js/header/mega-menu.js\n");

/***/ }),

/***/ "./assets/js/header/mobile-menu.js":
/*!*****************************************!*\
  !*** ./assets/js/header/mobile-menu.js ***!
  \*****************************************/
/***/ (function() {

eval("jQuery(document).ready(function ($) {\n  // Scoped handlers for mobile menu\n  $('.mobile-menu .open').on('click.mobileMenu', function () {\n    $('.mobile-menus').slideDown(); // Slide down the mobile menus\n    $(this).hide(); // Hide the open button\n    $('.mobile-menu .close').show(); // Show the close button\n    $('header').addClass('mobile-menu-active');\n    $('body').addClass('no-scroll'); // Disable scrolling on the body\n  });\n  $('.mobile-menu .close').on('click.mobileMenu', function () {\n    // Check if .mega-menu-mobile is visible and slide it up first\n    if ($('.mega-menu-mobile').is(':visible')) {\n      $('.mega-menu-mobile').slideUp(function () {\n        // Once .mega-menu-mobile is hidden, slide up the mobile menus\n        $('.mobile-menus').slideUp(function () {\n          // Remove the active classes only after animations are complete\n          $('header').removeClass('mobile-menu-active active-mega-menu');\n          $('.mega-menu-link').removeClass('active');\n          $('body').removeClass('no-scroll'); // Enable scrolling on the body\n        });\n      });\n    } else {\n      // If .mega-menu-mobile is not visible, slide up the mobile menus directly\n      $('.mobile-menus').slideUp(function () {\n        // Remove the active classes after sliding up the mobile menus\n        $('header').removeClass('mobile-menu-active active-mega-menu');\n        $('.mega-menu-link').removeClass('active');\n        $('body').removeClass('no-scroll'); // Enable scrolling on the body\n      });\n    }\n    $(this).hide(); // Hide the close button\n    $('.mobile-menu .open').show(); // Show the open button\n  });\n\n  // Handler for anchor links within the menu\n  $('.mobile-menus .button').on('click.mobileMenu', function (e) {\n    var target = $(this).attr('href'); // Get the href attribute of the button\n    if (target.startsWith('#')) {\n      // Check if it's an anchor link\n      e.preventDefault(); // Prevent default link behavior\n      // Close the menu\n      $('.mobile-menus').slideUp();\n      $('.mobile-menu .close').hide();\n      $('.mobile-menu .open').show();\n      $('header').removeClass('mobile-menu-active active-mega-menu');\n      $('body').removeClass('no-scroll');\n\n      // Navigate to the anchor link\n      var offset = $(target).offset().top; // Get the offset position of the target element\n      $('html, body').animate({\n        scrollTop: offset\n      }); // Smooth scroll to the target\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsIm9uIiwic2xpZGVEb3duIiwiaGlkZSIsInNob3ciLCJhZGRDbGFzcyIsImlzIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwiZSIsInRhcmdldCIsImF0dHIiLCJzdGFydHNXaXRoIiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIl0sInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL21vYmlsZS1tZW51LmpzP2E1MjAiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG4gICAgLy8gU2NvcGVkIGhhbmRsZXJzIGZvciBtb2JpbGUgbWVudVxuICAgICQoJy5tb2JpbGUtbWVudSAub3BlbicpLm9uKCdjbGljay5tb2JpbGVNZW51JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5tb2JpbGUtbWVudXMnKS5zbGlkZURvd24oKTsgLy8gU2xpZGUgZG93biB0aGUgbW9iaWxlIG1lbnVzXG4gICAgICAgICQodGhpcykuaGlkZSgpOyAvLyBIaWRlIHRoZSBvcGVuIGJ1dHRvblxuICAgICAgICAkKCcubW9iaWxlLW1lbnUgLmNsb3NlJykuc2hvdygpOyAvLyBTaG93IHRoZSBjbG9zZSBidXR0b25cbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ21vYmlsZS1tZW51LWFjdGl2ZScpO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpOyAvLyBEaXNhYmxlIHNjcm9sbGluZyBvbiB0aGUgYm9keVxuICAgIH0pO1xuXG4gICAgJCgnLm1vYmlsZS1tZW51IC5jbG9zZScpLm9uKCdjbGljay5tb2JpbGVNZW51JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIC5tZWdhLW1lbnUtbW9iaWxlIGlzIHZpc2libGUgYW5kIHNsaWRlIGl0IHVwIGZpcnN0XG4gICAgICAgIGlmICgkKCcubWVnYS1tZW51LW1vYmlsZScpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKCcubWVnYS1tZW51LW1vYmlsZScpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gT25jZSAubWVnYS1tZW51LW1vYmlsZSBpcyBoaWRkZW4sIHNsaWRlIHVwIHRoZSBtb2JpbGUgbWVudXNcbiAgICAgICAgICAgICAgICAkKCcubW9iaWxlLW1lbnVzJykuc2xpZGVVcChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3NlcyBvbmx5IGFmdGVyIGFuaW1hdGlvbnMgYXJlIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbWVudS1hY3RpdmUgYWN0aXZlLW1lZ2EtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWVnYS1tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7IC8vIEVuYWJsZSBzY3JvbGxpbmcgb24gdGhlIGJvZHlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgLm1lZ2EtbWVudS1tb2JpbGUgaXMgbm90IHZpc2libGUsIHNsaWRlIHVwIHRoZSBtb2JpbGUgbWVudXMgZGlyZWN0bHlcbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudXMnKS5zbGlkZVVwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzZXMgYWZ0ZXIgc2xpZGluZyB1cCB0aGUgbW9iaWxlIG1lbnVzXG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1tZW51LWFjdGl2ZSBhY3RpdmUtbWVnYS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7IC8vIEVuYWJsZSBzY3JvbGxpbmcgb24gdGhlIGJvZHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7IC8vIEhpZGUgdGhlIGNsb3NlIGJ1dHRvblxuICAgICAgICAkKCcubW9iaWxlLW1lbnUgLm9wZW4nKS5zaG93KCk7IC8vIFNob3cgdGhlIG9wZW4gYnV0dG9uXG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGVyIGZvciBhbmNob3IgbGlua3Mgd2l0aGluIHRoZSBtZW51XG4gICAgJCgnLm1vYmlsZS1tZW51cyAuYnV0dG9uJykub24oJ2NsaWNrLm1vYmlsZU1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpOyAvLyBHZXQgdGhlIGhyZWYgYXR0cmlidXRlIG9mIHRoZSBidXR0b25cbiAgICAgICAgaWYgKHRhcmdldC5zdGFydHNXaXRoKCcjJykpIHsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhbmNob3IgbGlua1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgbGluayBiZWhhdmlvclxuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudXMnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcubW9iaWxlLW1lbnUgLmNsb3NlJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51IC5vcGVuJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1tZW51LWFjdGl2ZSBhY3RpdmUtbWVnYS1tZW51Jyk7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgYW5jaG9yIGxpbmtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7IC8vIEdldCB0aGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IG9mZnNldCB9KTsgLy8gU21vb3RoIHNjcm9sbCB0byB0aGUgdGFyZ2V0XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUMvQjtFQUNBQSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVc7SUFDdERELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQkgsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQ0osQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDSyxRQUFRLENBQUMsb0JBQW9CLENBQUM7SUFDMUNMLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0ssUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7RUFDckMsQ0FBQyxDQUFDO0VBRUZMLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsWUFBVztJQUN2RDtJQUNBLElBQUlELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDdkNOLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTyxPQUFPLENBQUMsWUFBVztRQUN0QztRQUNBUCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNPLE9BQU8sQ0FBQyxZQUFXO1VBQ2xDO1VBQ0FQLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLHFDQUFxQyxDQUFDO1VBQzlEUixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLFFBQVEsQ0FBQztVQUMxQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSDtNQUNBUixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNPLE9BQU8sQ0FBQyxZQUFXO1FBQ2xDO1FBQ0FQLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLHFDQUFxQyxDQUFDO1FBQzlEUixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUMxQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztNQUN4QyxDQUFDLENBQUM7SUFDTjtJQUVBUixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQkgsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQyxDQUFDLENBQUM7O0VBRUY7RUFDQUosQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTUSxDQUFDLEVBQUU7SUFDMUQsSUFBTUMsTUFBTSxHQUFHVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLElBQUlELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQUU7TUFDMUJILENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3BCO01BQ0FiLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ08sT0FBTyxDQUFDLENBQUM7TUFDNUJQLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUMvQkgsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQzlCSixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNRLFdBQVcsQ0FBQyxxQ0FBcUMsQ0FBQztNQUM5RFIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxXQUFXLENBQUMsV0FBVyxDQUFDOztNQUVsQztNQUNBLElBQU1NLE1BQU0sR0FBR2QsQ0FBQyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7TUFDdkNmLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2dCLE9BQU8sQ0FBQztRQUFFQyxTQUFTLEVBQUVIO01BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRDtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdLCJmaWxlIjoiLi9hc3NldHMvanMvaGVhZGVyL21vYmlsZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/header/mobile-menu.js\n");

/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvY3NzL2FwcC5zY3NzP2QxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/css/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/header": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwealthwise"] = self["webpackChunkwealthwise"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./assets/js/header/header.js"); })
/******/ 	__webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./assets/js/header/mega-menu.js"); })
/******/ 	__webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./assets/js/header/mobile-menu.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./assets/css/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;