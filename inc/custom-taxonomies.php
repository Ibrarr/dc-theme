<?php

/**
 * Register Practice Areas Taxonomy
 */
add_action( 'init', 'practice_areas_taxonomy', 0 );
function practice_areas_taxonomy() {
    $labels = array(
        'name'                       => _x( 'Practice areas', 'Taxonomy General Name', 'ww' ),
        'singular_name'              => _x( 'Practice area', 'Taxonomy Singular Name', 'ww' ),
        'menu_name'                  => __( 'Practice areas', 'ww' ),
        'all_items'                  => __( 'All practice areas', 'ww' ),
        'parent_item'                => __( 'Parent practice area', 'ww' ),
        'parent_item_colon'          => __( 'Parent practice area:', 'ww' ),
        'new_item_name'              => __( 'New practice area Name', 'ww' ),
        'add_new_item'               => __( 'Add New practice area', 'ww' ),
        'edit_item'                  => __( 'Edit practice area', 'ww' ),
        'update_item'                => __( 'Update practice area', 'ww' ),
        'view_item'                  => __( 'View practice area', 'ww' ),
        'separate_items_with_commas' => __( 'Separate practice areas with commas', 'ww' ),
        'add_or_remove_items'        => __( 'Add or remove practice areas', 'ww' ),
        'choose_from_most_used'      => __( 'Choose from the most used', 'ww' ),
        'popular_items'              => __( 'Popular practice areas', 'ww' ),
        'search_items'               => __( 'Search practice areas', 'ww' ),
        'not_found'                  => __( 'Not Found', 'ww' ),
        'no_terms'                   => __( 'No practice areas', 'ww' ),
        'items_list'                 => __( 'Practice areas list', 'ww' ),
        'items_list_navigation'      => __( 'Practice areas list navigation', 'ww' ),
    );
    $args   = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'meta_box_cb'       => false,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => true,
        'show_in_rest'      => true,
        'rewrite'           => array(
            'slug'       => '', // No base slug
            'with_front' => false,
        ),
    );
    register_taxonomy( 'practice_area', array( 'post', 'case_study' ), $args );
}

/**
 * Adjust term link to include parent terms in the slug
 */
add_filter( 'term_link', 'practice_area_term_link', 10, 3 );
function practice_area_term_link( $url, $term, $taxonomy ) {
    if ( 'practice_area' === $taxonomy ) {
        $term_parents = get_ancestors( $term->term_id, 'practice_area' );
        if ( $term_parents ) {
            $parent_slugs = array();
            foreach ( array_reverse( $term_parents ) as $parent_id ) {
                $parent_term = get_term( $parent_id, 'practice_area' );
                if ( $parent_term && ! is_wp_error( $parent_term ) ) {
                    $parent_slugs[] = $parent_term->slug;
                }
            }
            $url = home_url( implode( '/', $parent_slugs ) . '/' . $term->slug . '/' );
        } else {
            $url = home_url( $term->slug . '/' );
        }
    }
    return $url;
}

/**
 * Flush rewrite rules on activation
 */
add_action( 'init', 'flush_rewrite_rules' );