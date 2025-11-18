<?php

add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );
function add_custom_scripts() {
    wp_deregister_script( 'jquery-ui' );

    wp_enqueue_style( 'site', DC_TEMPLATE_URI . mix('/dist/css/app.css'), [], null, 'all' );

    if ( is_front_page() ) {
        wp_enqueue_script( 'homepage', DC_TEMPLATE_URI . mix('/dist/js/homepage.js'), [ 'jquery' ], null, true );
    }

    if ( is_page_template( 'page-templates/page-why-drake-case.php' ) ) {
        wp_enqueue_script( 'why', DC_TEMPLATE_URI . mix('/dist/js/why.js'), [ 'jquery' ], null, true );
    }

    if ( is_page_template( 'page-templates/page-contact-us.php' ) ) {
        wp_enqueue_script( 'contact-us', DC_TEMPLATE_URI . mix('/dist/js/contact-us.js'), [ 'jquery' ], null, true );
    }

    if ( is_page_template( 'page-templates/page-faqs.php' ) ) {
        wp_enqueue_script( 'faqs', DC_TEMPLATE_URI . mix('/dist/js/faqs.js'), [ 'jquery' ], null, true );
    }

    if ( is_tax( 'practice_area' ) ) {
        $term = get_queried_object();

        if ( $term->parent == 0 ) {
            wp_enqueue_script( 'practice-area-parent', DC_TEMPLATE_URI . mix('/dist/js/practice-area-parent.js'), [ 'jquery' ], null, true );
        } else {
            wp_enqueue_script( 'practice-area-child', DC_TEMPLATE_URI . mix('/dist/js/practice-area-child.js'), [ 'jquery' ], null, true );
        }
    }

    if ( is_singular( 'post' ) ) {
        wp_enqueue_script( 'case-note', DC_TEMPLATE_URI . mix('/dist/js/case-note.js'), [ 'jquery' ], null, true );
    }

    if ( is_home() ) {
        wp_enqueue_script( 'blog', DC_TEMPLATE_URI . mix('/dist/js/blog.js'), [ 'jquery' ], null, true );
    }

    if ( is_category() ) {
        wp_enqueue_script( 'archive-category', DC_TEMPLATE_URI . mix('/dist/js/archive-category.js'), [ 'jquery' ], null, true );
    }

    if ( is_404() ) {
        wp_enqueue_script( '404', DC_TEMPLATE_URI . mix('/dist/js/404.js'), [ 'jquery' ], null, true );
    }

    if ( is_page() && ! is_page_template() && ! is_home() && ! is_front_page() && ! is_404() ) {
        wp_enqueue_script( 'default-page', DC_TEMPLATE_URI . mix('/dist/js/default-page.js'), [ 'jquery' ], null, true );
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