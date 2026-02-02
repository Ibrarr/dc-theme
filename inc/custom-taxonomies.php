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
        'rewrite' => array( 'slug' => '/', 'with_front' => false, 'hierarchical' => true ),
    );
    register_taxonomy( 'practice_area', array( 'post', 'case_study' ), $args );
}


add_action( 'template_redirect', 'redirect_old_practice_area_urls' );
function redirect_old_practice_area_urls() {
    if ( preg_match( '#^/practice-area/(.+)$#', $_SERVER['REQUEST_URI'], $matches ) ) {
        wp_redirect( home_url( '/' . $matches[1] ), 301 );
        exit;
    }
}