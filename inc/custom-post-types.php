<?php

/**
 * Register Case Studies Post Type
 */
add_action( 'init', 'case_studies_post_type', 0 );
function case_studies_post_type() {

	$labels = array(
		'name'                  => _x( 'Case studies ', 'Post Type General Name', 'dc' ),
		'singular_name'         => _x( 'Video', 'Post Type Singular Name', 'dc' ),
		'menu_name'             => __( 'Case studies ', 'dc' ),
		'name_admin_bar'        => __( 'Video', 'dc' ),
		'archives'              => __( 'Video Archives', 'dc' ),
		'attributes'            => __( 'Video Attributes', 'dc' ),
		'parent_item_colon'     => __( 'Parent case study:', 'dc' ),
		'all_items'             => __( 'All Case studies ', 'dc' ),
		'add_new_item'          => __( 'Add New case study', 'dc' ),
		'add_new'               => __( 'Add New', 'dc' ),
		'new_item'              => __( 'New case study', 'dc' ),
		'edit_item'             => __( 'Edit case study', 'dc' ),
		'update_item'           => __( 'Update case study', 'dc' ),
		'view_item'             => __( 'View case study', 'dc' ),
		'view_items'            => __( 'View Case studies ', 'dc' ),
		'search_items'          => __( 'Search case study', 'dc' ),
		'not_found'             => __( 'Not found', 'dc' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'dc' ),
		'featured_image'        => __( 'Featured Image', 'dc' ),
		'set_featured_image'    => __( 'Set featured image', 'dc' ),
		'remove_featured_image' => __( 'Remove featured image', 'dc' ),
		'use_featured_image'    => __( 'Use as featured image', 'dc' ),
		'insert_into_item'      => __( 'Insert into case study', 'dc' ),
		'uploaded_to_this_item' => __( 'Uploaded to this case study', 'dc' ),
		'items_list'            => __( 'Case studies  list', 'dc' ),
		'items_list_navigation' => __( 'Case studies  list navigation', 'dc' ),
		'filter_items_list'     => __( 'Filter Case studies  list', 'dc' ),
	);
	$args   = array(
		'label'               => __( 'Video', 'dc' ),
		'description'         => __( 'Post Type Description', 'dc' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'thumbnail', 'excerpt' ),
		'taxonomies'          => array( 'category' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-book',
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'can_export'          => true,
		'has_archive'         => 'case-studies',
		'rewrite'             => array(
			'slug'       => 'case-study',
			'with_front' => false,
		),
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest'        => true,
	);
	register_post_type( 'case_study', $args );
}

/**
 * Change Posts to Case notes
 */
add_action( 'init', 'change_post_labels_to_news' );
function change_post_labels_to_news() {
    $get_post_type = get_post_type_object( 'post' );

    $labels                     = $get_post_type->labels;
    $labels->name               = 'Case notes';
    $labels->singular_name      = 'Case note';
    $labels->add_new            = 'Add case note';
    $labels->add_new_item       = 'Add case note';
    $labels->edit_item          = 'Edit case note';
    $labels->new_item           = 'Case note';
    $labels->view_item          = 'View case notes';
    $labels->search_items       = 'Search case notes';
    $labels->not_found          = 'No case notes found';
    $labels->not_found_in_trash = 'No case notes found in Trash';
    $labels->all_items          = 'All case notes';
    $labels->menu_name          = 'Case notes';
    $labels->name_admin_bar     = 'Case notes';
}