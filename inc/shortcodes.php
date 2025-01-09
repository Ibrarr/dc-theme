<?php

add_shortcode('cta_button', 'custom_cta_button_shortcode');
function custom_cta_button_shortcode($atts) {
    $atts = shortcode_atts(
        array(
            'link' => '#enquire-now',
            'text' => 'Enquire now',
            'colour' => 'red',
        ),
        $atts,
        'cta_button'
    );

    // Generate the button HTML
    return '<a href="' . esc_url($atts['link']) . '" class="' . esc_attr($atts['colour']) . '">' . esc_html($atts['text']) . '</a>';
}