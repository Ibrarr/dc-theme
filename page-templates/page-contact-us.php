<?php
/*
Template Name: Contact Us
*/
get_header();

$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
$image_srcset = wp_get_attachment_image_srcset( $thumbnail_id );
?>

<section class="header">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-8 content">
                <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
                <h1><?php the_field( 'heading' ); ?></h1>
                <p class="intro"><?php the_field( 'intro' ); ?></p>
            </div>
            <div class="col-lg-4">
                <div class="cta-box">
                    <h2>Talk to Our Team</h2>
                    <p>Reach out to our team by phone or complete the form, and we’ll respond promptly to assist you.</p>
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary">Call <?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="#enquire-now" class="button">Make an Enquiry</a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
$location_index = 0;
?>

<!-- First Location Section -->
<section class="locations locations-head-office">
    <div class="container px-4">
        <h2>Our London Offices</h2>
        <p class="location-description">Explore our London office locations, designed to serve your legal needs with ease.</p>
        <div class="row">
            <?php
            while( have_rows('locations') ): the_row();
                if ( $location_index === 0 ):
                    $location_title = get_sub_field('location_title');
                    $map = get_sub_field('map');
                    $address_line_1 = get_sub_field('address_line_1');
                    $address_line_2 = get_sub_field('address_line_2');
                    $county = get_sub_field('county');
                    $town_city = get_sub_field('town_city');
                    $postcode = get_sub_field('postcode');
                    $latitude = get_sub_field('latitude');
                    $longitude = get_sub_field('longitude');
                    $phone = get_sub_field('phone');
                    $email = get_sub_field('email');

                    $location_schema = [
                        "@context" => "https://schema.org",
                        "@type" => "LegalService",
                        "name" => "Drake & Case",
                        "address" => [
                            "@type" => "PostalAddress",
                            "streetAddress" => trim($address_line_1 . ' ' . $address_line_2),
                            "addressLocality" => $town_city,
                            "addressRegion" => $county,
                            "postalCode" => $postcode,
                            "addressCountry" => "UK"
                        ],
                        "telephone" => $phone,
                        "url" => get_site_url(),
                        "geo" => [
                            "@type" => "GeoCoordinates",
                            "latitude" => $latitude,
                            "longitude" => $longitude
                        ],
                        "contactPoint" => [
                            [
                                "@type" => "ContactPoint",
                                "telephone" => $phone,
                                "email" => $email,
                                "contactType" => "Customer Service",
                                "areaServed" => "UK"
                            ]
                        ],
                        "image" => $map['url'],
                        "description" => get_bloginfo('description')
                    ];

                    echo '<script type="application/ld+json">' . json_encode($location_schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
                    ?>
                    <section class="location">
                        <div class="head-office-container">
                            <img src="<?php echo $map['url']; ?>" alt="<?php echo $map['alt']; ?>" class="location-map">

                            <div class="head-office-details">
                                <span class="tag">Head Office</span>
                                <h3 class="location-title"><?php echo $location_title; ?></h3>
                                <div class="address-container">
                                    <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/location-point.svg' ) ?></i>
                                    <address class="location-address">
                                        <p><?php echo $address_line_1; ?></p>
                                        <?php if ($address_line_2): ?>
                                            <p><?php echo $address_line_2; ?></p>
                                        <?php endif; ?>
                                        <?php if ($county): ?>
                                            <p><?php echo $county; ?></p>
                                        <?php endif; ?>
                                        <p><?php echo $town_city; ?></p>
                                        <p><?php echo $postcode; ?></p>
                                    </address>
                                </div>
                                <div class="location-contact">
                                    <p class="email"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/email.svg' ) ?></i> <a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></p>
                                    <p class="phone"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/phone.svg' ) ?></i> <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                <?php endif;
                $location_index++;
            endwhile;
            ?>
        </div>
    </div>
</section>

<!-- Remaining Locations Section -->
<section class="locations locations-other">
    <div class="container px-4">
        <h2>Other London Locations</h2>
        <p class="location-description">We have a number of office locations in London. All correspondence is to be sent to head office only.</p>
        <div class="row">
            <?php
            $location_index = 0;
            while( have_rows('locations') ): the_row();
                if ( $location_index !== 0 ):
                    $location_title = get_sub_field('location_title');
                    $map = get_sub_field('map');
                    $address_line_1 = get_sub_field('address_line_1');
                    $address_line_2 = get_sub_field('address_line_2');
                    $county = get_sub_field('county');
                    $town_city = get_sub_field('town_city');
                    $postcode = get_sub_field('postcode');
                    $latitude = get_sub_field('latitude');
                    $longitude = get_sub_field('longitude');
                    $phone = get_sub_field('phone');
                    $email = get_sub_field('email');

                    $location_schema = [
                        "@context" => "https://schema.org",
                        "@type" => "LegalService",
                        "name" => "Drake & Case",
                        "address" => [
                            "@type" => "PostalAddress",
                            "streetAddress" => trim($address_line_1 . ' ' . $address_line_2),
                            "addressLocality" => $town_city,
                            "addressRegion" => $county,
                            "postalCode" => $postcode,
                            "addressCountry" => "UK"
                        ],
                        "telephone" => $phone,
                        "url" => get_site_url(),
                        "geo" => [
                            "@type" => "GeoCoordinates",
                            "latitude" => $latitude,
                            "longitude" => $longitude
                        ],
                        "contactPoint" => [
                            [
                                "@type" => "ContactPoint",
                                "telephone" => $phone,
                                "email" => $email,
                                "contactType" => "Customer Service",
                                "areaServed" => "UK"
                            ]
                        ],
                        "image" => $map['url'],
                        "description" => get_bloginfo('description')
                    ];

                    echo '<script type="application/ld+json">' . json_encode($location_schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
                    ?>
                    <section class="col-lg-4 col-md-6 mb-4 location">
                        <div class="location-details">
                            <h3 class="location-title"><?php echo $location_title; ?></h3>
                            <div class="address-container">
                                <div class="location-point"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/location-point.svg' ) ?></div>
                                <address class="location-address">
                                    <p><?php echo $address_line_1; ?><?php if ($address_line_2): ?>, <?php echo $address_line_2; ?><?php endif; ?><?php if ($county): ?>, <?php echo $county; ?><?php endif; ?>, <?php echo $town_city; ?>, <?php echo $postcode; ?></p>
                                </address>
                            </div>
                        </div>
                    </section>
                <?php endif;
                $location_index++;
            endwhile;
            ?>
        </div>
    </div>
</section>

<?php
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');

get_footer();
?>