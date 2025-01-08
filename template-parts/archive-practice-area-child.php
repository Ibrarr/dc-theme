<?php
$term = get_queried_object();
?>

<section class="header">
    <div class="bg-wrapper" style="background: url(<?php the_field('image', $term); ?>) center center / cover no-repeat;"></div>
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-8 content">
                <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
                <h1><?php echo $term->name; ?></h1>
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

<section class="second-section">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-7 content">
                <h2><?php the_field('section_section_heading', $term); ?></h2>
                <?php echo wpautop($term->description); ?>
                <div class="ctas">
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary">Call <?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="#enquire-now" class="button"><?php the_field('section_section_button', $term); ?></a>
                </div>
            </div>
            <div class="offset-lg-1 col-lg-4 image">
                <img src="<?php echo get_field( 'second_section_image', $term )['url']; ?>" alt="<?php echo get_field( 'second_section_image', $term )['alt']; ?>">
            </div>
        </div>
    </div>
</section>