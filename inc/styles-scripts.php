<?php

add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );
function add_custom_scripts() {
    wp_enqueue_script( 'jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.js', [ 'jquery' ], '1.12.1', true );

    wp_enqueue_style( 'site', DC_TEMPLATE_URI . mix('/dist/css/app.css'), [], null, 'all' );

    if ( is_front_page() ) {
        wp_enqueue_script( 'homepage', DC_TEMPLATE_URI . mix('/dist/js/homepage.js'), [ 'jquery' ], null, true );
    }

    wp_enqueue_script( 'header', DC_TEMPLATE_URI . mix('/dist/js/header.js'), [ 'jquery' ], null, true );
}

function mix($path) {
    $manifestPath = DC_TEMPLATE_DIR . '/dist/mix-manifest.json';
    if (file_exists($manifestPath)) {
        $manifest = json_decode(file_get_contents($manifestPath), true);
        return $manifest[$path] ?? $path;
    }
    return $path;
}

//    wp_enqueue_script( 'global', DC_TEMPLATE_URI . '/dist/js/global.js', [ 'jquery' ], filemtime( DC_TEMPLATE_DIR . '/dist/js/global.js' ), true );
//
//    if ( is_singular( 'post' ) ) {
//        wp_enqueue_script( 'content-blog', DC_TEMPLATE_URI . '/dist/js/content-blog.js', [ 'jquery' ], filemtime( DC_TEMPLATE_DIR . '/dist/js/content-blog.js' ), true );
//    }
//
//    if ( is_singular( 'video' ) ) {
//        wp_enqueue_script( 'content-blog', DC_TEMPLATE_URI . '/dist/js/content-video.js', [ 'jquery' ], filemtime( DC_TEMPLATE_DIR . '/dist/js/content-video.js' ), true );
//    }
//
//	if ( is_singular( 'event' ) ) {
//		wp_enqueue_script( 'content-event', DC_TEMPLATE_URI . '/dist/js/content-event.js', [ 'jquery' ], filemtime( DC_TEMPLATE_DIR . '/dist/js/content-event.js' ), true );
//	}