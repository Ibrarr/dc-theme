const mix = require('laravel-mix');

mix.js([
    'assets/js/header/header.js',
    'assets/js/header/mega-menu.js',
    'assets/js/header/mobile-menu.js',
], 'js/header.js');

mix.js([
    'assets/js/homepage/hero.js',
    'assets/js/homepage/trusted-by.js',
    'assets/js/homepage/services.js',
    'assets/js/homepage/feedback.js',
    'assets/js/homepage/our-approach.js',
    'assets/js/homepage/case-notes-slider.js',
    'assets/js/homepage/enquire-now.js',
], 'js/homepage.js');

mix.js([
    'assets/js/why/hero.js',
    'assets/js/why/about.js',
    'assets/js/why/team.js',
    'assets/js/why/values.js',
    'assets/js/why/trusted-by.js',
    'assets/js/why/feedback.js',
    'assets/js/why/our-approach.js',
    'assets/js/why/enquire-now.js',
], 'js/why.js');

mix.js([
    'assets/js/practice-area-parent/header.js',
    'assets/js/practice-area-parent/services.js',
    'assets/js/practice-area-parent/faq.js',
    'assets/js/practice-area-parent/case-notes-slider.js',
    'assets/js/practice-area-parent/enquire-now.js',
], 'js/practice-area-parent.js');

mix.js([
    'assets/js/practice-area-child/header.js',
    'assets/js/practice-area-child/second-section.js',
    'assets/js/practice-area-child/practice-area-services.js',
    'assets/js/practice-area-child/faq.js',
    'assets/js/practice-area-child/enquire-now.js',
], 'js/practice-area-child.js');

mix.js([
    'assets/js/case-note/header.js',
    'assets/js/case-note/content.js',
    'assets/js/case-note/newsletter.js',
    'assets/js/case-note/case-notes-slider.js',
    'assets/js/case-note/enquire-now.js',
], 'js/case-note.js');

mix.js([
    'assets/js/blog/header.js',
    'assets/js/blog/posts.js',
    'assets/js/blog/enquire-now.js',
], 'js/blog.js');

mix.js([
    'assets/js/archive-category/header.js',
    'assets/js/archive-category/posts.js',
    'assets/js/archive-category/enquire-now.js',
], 'js/archive-category.js');

mix.js([
    'assets/js/contact-us/header.js',
    'assets/js/contact-us/locations.js',
    'assets/js/contact-us/enquire-now.js',
], 'js/contact-us.js');

mix.js([
    'assets/js/404/header.js',
    'assets/js/404/enquire-now.js',
], 'js/404.js');

mix.sass('assets/css/app.scss', 'css/app.css')
    .options({
        processCssUrls: false
    });

mix.options({
    postCss: [
        require('autoprefixer')({
            overrideBrowserslist: ['last 3 versions'],
            cascade: false
        })
    ]
});

mix.setPublicPath('dist');
mix.sourceMaps();
mix.disableNotifications();
mix.version();