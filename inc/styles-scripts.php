<?php

add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );
function add_custom_scripts() {
    wp_enqueue_script( 'jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.js', [ 'jquery' ], '1.12.1', true );

    wp_enqueue_style( 'site', DC_TEMPLATE_URI . mix('/dist/css/app.css'), [], null, 'all' );

    if ( is_front_page() ) {
        wp_enqueue_script( 'homepage', DC_TEMPLATE_URI . mix('/dist/js/homepage.js'), [ 'jquery' ], null, true );
    }

    if ( is_page_template( 'page-templates/page-why-drake-case.php' ) ) {
        wp_enqueue_script( 'why', DC_TEMPLATE_URI . mix('/dist/js/why.js'), [ 'jquery' ], null, true );
    }

    if ( is_tax( 'practice_area' ) ) {
        $term = get_queried_object();

        if ( $term->parent == 0 ) {
            wp_enqueue_script( 'practice-area-parent', DC_TEMPLATE_URI . mix('/dist/js/practice-area-parent.js'), [ 'jquery' ], null, true );
        } else {
            wp_enqueue_script( 'practice-area-child', DC_TEMPLATE_URI . mix('/dist/js/practice-area-child.js'), [ 'jquery' ], null, true );
        }
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