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

eval("jQuery(document).ready(function ($) {\n  var prevScrollpos = window.pageYOffset;\n  window.onscroll = function () {\n    var currentScrollPos = window.pageYOffset;\n    var header = document.getElementById(\"header\");\n    if (prevScrollpos > currentScrollPos || currentScrollPos <= 70) {\n      // Scrolling up or at the top of the page\n      header.style.top = \"0\"; // Adjust to your desired position\n      $('.main-menu-text').fadeIn(300);\n    } else {\n      // Scrolling down\n      header.style.top = \"-100px\"; // Adjust based on header height\n      $('.main-menu-text').fadeOut(300);\n    }\n    prevScrollpos = currentScrollPos;\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvaGVhZGVyL2hlYWRlci5qcyIsIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwicHJldlNjcm9sbHBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwib25zY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwiaGVhZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsImZhZGVJbiIsImZhZGVPdXQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL2hlYWRlci5qcz9hMWJmIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAgIGxldCBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zIHx8IGN1cnJlbnRTY3JvbGxQb3MgPD0gNzApIHtcclxuICAgICAgICAgICAgLy8gU2Nyb2xsaW5nIHVwIG9yIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRvcCA9IFwiMFwiOyAvLyBBZGp1c3QgdG8geW91ciBkZXNpcmVkIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICQoJy5tYWluLW1lbnUtdGV4dCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBkb3duXHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZS50b3AgPSBcIi0xMDBweFwiOyAvLyBBZGp1c3QgYmFzZWQgb24gaGVhZGVyIGhlaWdodFxyXG4gICAgICAgICAgICAkKCcubWFpbi1tZW51LXRleHQnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcclxuICAgIH07XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBVUMsQ0FBQyxFQUFFO0VBQ2hDLElBQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxXQUFXO0VBRXRDRCxNQUFNLENBQUNFLFFBQVEsR0FBRyxZQUFZO0lBQzFCLElBQUlDLGdCQUFnQixHQUFHSCxNQUFNLENBQUNDLFdBQVc7SUFDekMsSUFBTUcsTUFBTSxHQUFHUixRQUFRLENBQUNTLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFaEQsSUFBSU4sYUFBYSxHQUFHSSxnQkFBZ0IsSUFBSUEsZ0JBQWdCLElBQUksRUFBRSxFQUFFO01BQzVEO01BQ0FDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDeEJULENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3BDLENBQUMsTUFBTTtNQUNIO01BQ0FKLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7TUFDN0JULENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDVyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3JDO0lBRUFWLGFBQWEsR0FBR0ksZ0JBQWdCO0VBQ3BDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=\n//# sourceURL=webpack-internal:///./assets/js/header/header.js\n");

/***/ }),

/***/ "./assets/js/header/mega-menu.js":
/*!***************************************!*\
  !*** ./assets/js/header/mega-menu.js ***!
  \***************************************/
/***/ (function() {

eval("jQuery(document).ready(function ($) {\n  var hoverTimeout, closeTimeout;\n  function isSmallScreen() {\n    return $(window).width() < 1280;\n  }\n\n  // Disable default link behavior for .mega-menu-link a\n  $('.mega-menu-link a').on('click.megaMenu', function (event) {\n    event.preventDefault();\n  });\n\n  // Hover functionality for large screens\n  function addHoverFunctionality() {\n    $('.mega-menu-link').hover(function () {\n      var _this = this;\n      if (isSmallScreen()) return;\n      clearTimeout(closeTimeout);\n      hoverTimeout = setTimeout(function () {\n        $('.mega-menu').stop(true, true).slideDown('fast');\n        $(_this).addClass('active');\n        $('header').addClass('active-mega-menu');\n      }, 200);\n    }, function () {\n      var _this2 = this;\n      if (isSmallScreen()) return;\n      clearTimeout(hoverTimeout);\n      closeTimeout = setTimeout(function () {\n        if (!$('.mega-menu').is(':hover')) {\n          $('.mega-menu').stop(true, true).slideUp('fast');\n          $(_this2).removeClass('active');\n          $('header').removeClass('active-mega-menu');\n        }\n      }, 200);\n    });\n    $('.mega-menu').hover(function () {\n      if (isSmallScreen()) return;\n      clearTimeout(closeTimeout);\n      $(this).stop(true, true).slideDown('fast');\n      $('.mega-menu-link').addClass('active');\n      $('header').addClass('active-mega-menu');\n    }, function () {\n      var _this3 = this;\n      if (isSmallScreen()) return;\n      closeTimeout = setTimeout(function () {\n        $(_this3).stop(true, true).slideUp('fast');\n        $('.mega-menu-link').removeClass('active');\n        $('header').removeClass('active-mega-menu');\n      }, 100);\n    });\n  }\n\n  // Click-to-toggle functionality for small screens\n  function addClickFunctionality() {\n    $('.mega-menu-link').off('.megaMenu'); // Remove any existing hover or click handlers\n\n    $('.mega-menu-link').on('click.megaMenu', function () {\n      if (!isSmallScreen()) return;\n      var $menu = $('.mega-menu-mobile');\n      if ($menu.is(':visible')) {\n        $menu.slideUp('fast');\n        $(this).removeClass('active');\n        $('header').removeClass('active-mega-menu');\n      } else {\n        $menu.slideDown('fast');\n        $(this).addClass('active');\n        $('header').addClass('active-mega-menu');\n      }\n    });\n  }\n  function initializeMenu() {\n    if (isSmallScreen()) {\n      addClickFunctionality();\n    } else {\n      addHoverFunctionality();\n    }\n  }\n  initializeMenu();\n  $(window).on('resize.megaMenu', function () {\n    initializeMenu();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImhvdmVyVGltZW91dCIsImNsb3NlVGltZW91dCIsImlzU21hbGxTY3JlZW4iLCJ3aW5kb3ciLCJ3aWR0aCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEhvdmVyRnVuY3Rpb25hbGl0eSIsImhvdmVyIiwiX3RoaXMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic3RvcCIsInNsaWRlRG93biIsImFkZENsYXNzIiwiX3RoaXMyIiwiaXMiLCJzbGlkZVVwIiwicmVtb3ZlQ2xhc3MiLCJfdGhpczMiLCJhZGRDbGlja0Z1bmN0aW9uYWxpdHkiLCJvZmYiLCIkbWVudSIsImluaXRpYWxpemVNZW51Il0sInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL21lZ2EtbWVudS5qcz8yZGU3Il0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICAgbGV0IGhvdmVyVGltZW91dCwgY2xvc2VUaW1lb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzU21hbGxTY3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICQod2luZG93KS53aWR0aCgpIDwgMTI4MDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxlIGRlZmF1bHQgbGluayBiZWhhdmlvciBmb3IgLm1lZ2EtbWVudS1saW5rIGFcclxuICAgICQoJy5tZWdhLW1lbnUtbGluayBhJykub24oJ2NsaWNrLm1lZ2FNZW51JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSG92ZXIgZnVuY3Rpb25hbGl0eSBmb3IgbGFyZ2Ugc2NyZWVuc1xyXG4gICAgZnVuY3Rpb24gYWRkSG92ZXJGdW5jdGlvbmFsaXR5KCkge1xyXG4gICAgICAgICQoJy5tZWdhLW1lbnUtbGluaycpLmhvdmVyKFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NtYWxsU2NyZWVuKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhvdmVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZWdhLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bignZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdhY3RpdmUtbWVnYS1tZW51Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NtYWxsU2NyZWVuKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaG92ZXJUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLm1lZ2EtbWVudScpLmlzKCc6aG92ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWVnYS1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKCdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lZ2EtbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKCcubWVnYS1tZW51JykuaG92ZXIoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU21hbGxTY3JlZW4oKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bignZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTbWFsbFNjcmVlbigpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVnYS1tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsaWNrLXRvLXRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciBzbWFsbCBzY3JlZW5zXHJcbiAgICBmdW5jdGlvbiBhZGRDbGlja0Z1bmN0aW9uYWxpdHkoKSB7XHJcbiAgICAgICAgJCgnLm1lZ2EtbWVudS1saW5rJykub2ZmKCcubWVnYU1lbnUnKTsgLy8gUmVtb3ZlIGFueSBleGlzdGluZyBob3ZlciBvciBjbGljayBoYW5kbGVyc1xyXG5cclxuICAgICAgICAkKCcubWVnYS1tZW51LWxpbmsnKS5vbignY2xpY2subWVnYU1lbnUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NtYWxsU2NyZWVuKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRtZW51ID0gJCgnLm1lZ2EtbWVudS1tb2JpbGUnKTtcclxuICAgICAgICAgICAgaWYgKCRtZW51LmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkbWVudS5zbGlkZVVwKCdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVnYS1tZW51Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbWVudS5zbGlkZURvd24oJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZS1tZWdhLW1lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVNZW51KCkge1xyXG4gICAgICAgIGlmIChpc1NtYWxsU2NyZWVuKCkpIHtcclxuICAgICAgICAgICAgYWRkQ2xpY2tGdW5jdGlvbmFsaXR5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkSG92ZXJGdW5jdGlvbmFsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVNZW51KCk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubWVnYU1lbnUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbml0aWFsaXplTWVudSgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFFO0VBQy9CLElBQUlDLFlBQVksRUFBRUMsWUFBWTtFQUU5QixTQUFTQyxhQUFhQSxDQUFBLEVBQUc7SUFDckIsT0FBT0gsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJO0VBQ25DOztFQUVBO0VBQ0FMLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBU0MsS0FBSyxFQUFFO0lBQ3hEQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQzFCLENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNDLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQzdCVCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ1UsS0FBSyxDQUN0QixZQUFXO01BQUEsSUFBQUMsS0FBQTtNQUNQLElBQUlSLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFFckJTLFlBQVksQ0FBQ1YsWUFBWSxDQUFDO01BQzFCRCxZQUFZLEdBQUdZLFVBQVUsQ0FBQyxZQUFNO1FBQzVCYixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNjLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDbERmLENBQUMsQ0FBQ1csS0FBSSxDQUFDLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDMUJoQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNnQixRQUFRLENBQUMsa0JBQWtCLENBQUM7TUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsRUFDRCxZQUFXO01BQUEsSUFBQUMsTUFBQTtNQUNQLElBQUlkLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFFckJTLFlBQVksQ0FBQ1gsWUFBWSxDQUFDO01BQzFCQyxZQUFZLEdBQUdXLFVBQVUsQ0FBQyxZQUFNO1FBQzVCLElBQUksQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQy9CbEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDYyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDSyxPQUFPLENBQUMsTUFBTSxDQUFDO1VBQ2hEbkIsQ0FBQyxDQUFDaUIsTUFBSSxDQUFDLENBQUNHLFdBQVcsQ0FBQyxRQUFRLENBQUM7VUFDN0JwQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNvQixXQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDL0M7TUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsQ0FDSixDQUFDO0lBRURwQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNVLEtBQUssQ0FDakIsWUFBVztNQUNQLElBQUlQLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFFckJTLFlBQVksQ0FBQ1YsWUFBWSxDQUFDO01BQzFCRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7TUFDMUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUN2Q2hCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDLEVBQ0QsWUFBVztNQUFBLElBQUFLLE1BQUE7TUFDUCxJQUFJbEIsYUFBYSxDQUFDLENBQUMsRUFBRTtNQUVyQkQsWUFBWSxHQUFHVyxVQUFVLENBQUMsWUFBTTtRQUM1QmIsQ0FBQyxDQUFDcUIsTUFBSSxDQUFDLENBQUNQLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNLLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeENuQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ29CLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDMUNwQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNvQixXQUFXLENBQUMsa0JBQWtCLENBQUM7TUFDL0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQ0osQ0FBQztFQUNMOztFQUVBO0VBQ0EsU0FBU0UscUJBQXFCQSxDQUFBLEVBQUc7SUFDN0J0QixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3VCLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztJQUV2Q3ZCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBVztNQUNqRCxJQUFJLENBQUNILGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFFdEIsSUFBTXFCLEtBQUssR0FBR3hCLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQyxJQUFJd0IsS0FBSyxDQUFDTixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDdEJNLEtBQUssQ0FBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQm5CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29CLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0JwQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNvQixXQUFXLENBQUMsa0JBQWtCLENBQUM7TUFDL0MsQ0FBQyxNQUFNO1FBQ0hJLEtBQUssQ0FBQ1QsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN2QmYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUMxQmhCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztNQUM1QztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU1MsY0FBY0EsQ0FBQSxFQUFHO0lBQ3RCLElBQUl0QixhQUFhLENBQUMsQ0FBQyxFQUFFO01BQ2pCbUIscUJBQXFCLENBQUMsQ0FBQztJQUMzQixDQUFDLE1BQU07TUFDSGIscUJBQXFCLENBQUMsQ0FBQztJQUMzQjtFQUNKO0VBRUFnQixjQUFjLENBQUMsQ0FBQztFQUVoQnpCLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFXO0lBQ3ZDbUIsY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W10sImZpbGUiOiIuL2Fzc2V0cy9qcy9oZWFkZXIvbWVnYS1tZW51LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/header/mega-menu.js\n");

/***/ }),

/***/ "./assets/js/header/mobile-menu.js":
/*!*****************************************!*\
  !*** ./assets/js/header/mobile-menu.js ***!
  \*****************************************/
/***/ (function() {

eval("jQuery(document).ready(function ($) {\n  // Scoped handlers for mobile menu\n  $('.mobile-menu .open').on('click.mobileMenu', function () {\n    $('.mobile-menus').slideDown(); // Slide down the mobile menus\n    $(this).hide(); // Hide the open button\n    $('.mobile-menu .close').show(); // Show the close button\n    $('header').addClass('mobile-menu-active');\n    $('body').addClass('no-scroll'); // Disable scrolling on the body\n  });\n  $('.mobile-menu .close').on('click.mobileMenu', function () {\n    $('.mobile-menus').slideUp(); // Slide up the mobile menus\n    $(this).hide(); // Hide the close button\n    $('.mobile-menu .open').show(); // Show the open button\n    $('header').removeClass('mobile-menu-active');\n    $('body').removeClass('no-scroll'); // Enable scrolling on the body\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvaGVhZGVyL21vYmlsZS1tZW51LmpzIiwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJvbiIsInNsaWRlRG93biIsImhpZGUiLCJzaG93IiwiYWRkQ2xhc3MiLCJzbGlkZVVwIiwicmVtb3ZlQ2xhc3MiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYWx0aHdpc2UvLi9hc3NldHMvanMvaGVhZGVyL21vYmlsZS1tZW51LmpzP2E1MjAiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAvLyBTY29wZWQgaGFuZGxlcnMgZm9yIG1vYmlsZSBtZW51XHJcbiAgICAkKCcubW9iaWxlLW1lbnUgLm9wZW4nKS5vbignY2xpY2subW9iaWxlTWVudScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5tb2JpbGUtbWVudXMnKS5zbGlkZURvd24oKTsgLy8gU2xpZGUgZG93biB0aGUgbW9iaWxlIG1lbnVzXHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7IC8vIEhpZGUgdGhlIG9wZW4gYnV0dG9uXHJcbiAgICAgICAgJCgnLm1vYmlsZS1tZW51IC5jbG9zZScpLnNob3coKTsgLy8gU2hvdyB0aGUgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ21vYmlsZS1tZW51LWFjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7IC8vIERpc2FibGUgc2Nyb2xsaW5nIG9uIHRoZSBib2R5XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9iaWxlLW1lbnUgLmNsb3NlJykub24oJ2NsaWNrLm1vYmlsZU1lbnUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcubW9iaWxlLW1lbnVzJykuc2xpZGVVcCgpOyAvLyBTbGlkZSB1cCB0aGUgbW9iaWxlIG1lbnVzXHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7IC8vIEhpZGUgdGhlIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgICQoJy5tb2JpbGUtbWVudSAub3BlbicpLnNob3coKTsgLy8gU2hvdyB0aGUgb3BlbiBidXR0b25cclxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnbW9iaWxlLW1lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTsgLy8gRW5hYmxlIHNjcm9sbGluZyBvbiB0aGUgYm9keVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFFO0VBQy9CO0VBQ0FBLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsWUFBVztJQUN0REQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaENGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCSCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDSixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNLLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDSyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUNyQyxDQUFDLENBQUM7RUFFRkwsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0lBQ3ZERCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5Qk4sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEJILENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaENKLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ08sV0FBVyxDQUFDLG9CQUFvQixDQUFDO0lBQzdDUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./assets/js/header/mobile-menu.js\n");

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