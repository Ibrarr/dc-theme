const mix = require('laravel-mix');

mix.js([
    'assets/js/homepage/hero.js',
    'assets/js/homepage/trusted-by.js',
    'assets/js/homepage/services.js',
], 'js/homepage.js');

mix.sass('assets/css/app.scss', 'css/app.css')
    .options({
        processCssUrls: false
    });

mix.setPublicPath('dist');

mix.options({
    postCss: [
        require('autoprefixer')({
            overrideBrowserslist: ['last 3 versions'],
            cascade: false
        })
    ]
});

mix.disableNotifications();