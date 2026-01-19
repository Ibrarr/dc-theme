<?php

/**
 * Define where the JSON files are created.
 */
add_filter( 'acf/settings/save_json', 'my_acf_json_save_point' );
function my_acf_json_save_point( $path ) {
    $save_path = DC_TEMPLATE_DIR . '/acf-json';

    if ( ! file_exists( $save_path ) ) {
        mkdir( $save_path, 0755, true );
    }

    return $save_path;
}

/**
 * Define where ACF looks for JSON files.
 */
add_filter( 'acf/settings/load_json', 'my_acf_json_load_point' );
function my_acf_json_load_point( $paths ) {
    $paths[] = DC_TEMPLATE_DIR . '/acf-json';

    return $paths;
}

// Remove fields from top level practice areas
add_filter('acf/load_field', function ($field) {
    $fields_to_unregister = ['image', 'section_section_heading', 'second_section_image', 'section_section_button', 'services_heading', 'services_description', 'services'];

    // Check if the field is in the list
    if (in_array($field['name'], $fields_to_unregister, true)) {
        // Check if we are editing a term in the 'practice_area' taxonomy
        if (isset($_GET['taxonomy']) && $_GET['taxonomy'] === 'practice_area') {
            // Get the term ID from the query string
            $term_id = isset($_GET['tag_ID']) ? (int) $_GET['tag_ID'] : null;

            // Determine if the term is a top-level term
            if ($term_id && empty(get_ancestors($term_id, 'practice_area'))) {
                // Top-level term detected, disable the field
                return false;
            }
        }
    }

    // Return the field as-is for other cases
    return $field;
});


