<?php

/**
 * Register Practice Areas Taxonomy
 */
add_action( 'init', 'practice_areas_taxonomy', 0 );
function practice_areas_taxonomy() {
    $labels = array(
        'name'                       => _x( 'Practice Areas', 'Taxonomy General Name', 'ww' ),
        'singular_name'              => _x( 'Practice Area', 'Taxonomy Singular Name', 'ww' ),
        'menu_name'                  => __( 'Practice Areas', 'ww' ),
        'all_items'                  => __( 'All Practice Areas', 'ww' ),
        'parent_item'                => __( 'Parent Practice Area', 'ww' ),
        'parent_item_colon'          => __( 'Parent Practice Area:', 'ww' ),
        'new_item_name'              => __( 'New Practice Area Name', 'ww' ),
        'add_new_item'               => __( 'Add New Practice Area', 'ww' ),
        'edit_item'                  => __( 'Edit Practice Area', 'ww' ),
        'update_item'                => __( 'Update Practice Area', 'ww' ),
        'view_item'                  => __( 'View Practice Area', 'ww' ),
        'search_items'               => __( 'Search Practice Areas', 'ww' ),
        'not_found'                  => __( 'Not Found', 'ww' ),
        'no_terms'                   => __( 'No Practice Areas', 'ww' ),
        'items_list'                 => __( 'Practice Areas list', 'ww' ),
        'items_list_navigation'      => __( 'Practice Areas list navigation', 'ww' ),
    );

    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => true,
        'show_in_rest'      => true,
        'rewrite'           => false,
    );
    register_taxonomy( 'practice_area', array( 'post', 'case_study' ), $args );
}

/**
* Get hierarchical term path
*/
function get_practice_area_path( $term ) {
    $ancestors = array_reverse( get_ancestors( $term->term_id, 'practice_area', 'taxonomy' ) );
    $slugs = array_map( fn( $id ) => get_term( $id )->slug, $ancestors );
    $slugs[] = $term->slug;
    return implode( '/', $slugs );
}

/**
 * Add rewrite rules for practice areas
 */
add_action( 'init', 'practice_area_rewrite_rules', 20 );
function practice_area_rewrite_rules() {
    $terms = get_terms( array( 'taxonomy' => 'practice_area', 'hide_empty' => false ) );

    if ( empty( $terms ) || is_wp_error( $terms ) ) return;

    foreach ( $terms as $term ) {
        $path = preg_quote( get_practice_area_path( $term ), '/' );
        add_rewrite_rule( "^{$path}/?$", "index.php?practice_area={$term->slug}", 'top' );
        add_rewrite_rule( "^{$path}/page/([0-9]+)/?$", "index.php?practice_area={$term->slug}&paged=\$matches[1]", 'top' );
    }
}

/**
 * Filter term links
 */
add_filter( 'term_link', 'practice_area_term_link', 10, 3 );
function practice_area_term_link( $url, $term, $taxonomy ) {
    return 'practice_area' === $taxonomy ? home_url( '/' . get_practice_area_path( $term ) . '/' ) : $url;
}

/**
 * Fix Yoast canonical URL for practice areas
 */
add_filter( 'wpseo_canonical', 'practice_area_yoast_canonical' );
function practice_area_yoast_canonical( $canonical ) {
    if ( is_tax( 'practice_area' ) ) {
        $term = get_queried_object();
        $canonical = home_url( '/' . get_practice_area_path( $term ) . '/' );
    }
    return $canonical;
}

/**
 * Fix Yoast OG URL for practice areas
 */
add_filter( 'wpseo_opengraph_url', 'practice_area_yoast_og_url' );
function practice_area_yoast_og_url( $url ) {
    if ( is_tax( 'practice_area' ) ) {
        $term = get_queried_object();
        $url = home_url( '/' . get_practice_area_path( $term ) . '/' );
    }
    return $url;
}