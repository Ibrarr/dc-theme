import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#trusted-by-slider', {
        type: 'loop',
        perPage: 4,
        drag   : 'free',
        focus  : 'center',
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: 0.5,
        },
        breakpoints: {
            991: {
                gap: 30,
                perPage: 3,
            },
        },
    }).mount({ AutoScroll });
});