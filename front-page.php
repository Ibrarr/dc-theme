<?php
get_header();

$first_image_column = get_field('first_image_column', get_option( 'page_on_front' ));
$second_image_column = get_field('second_image_column', get_option( 'page_on_front' ));
?>
<section class="hero">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-6 left">
                <div class="content">
                    <h1><?php the_field( 'hero_heading', get_option( 'page_on_front' ) ); ?></h1>
                    <?php the_field( 'hero_text', get_option( 'page_on_front' ) ); ?>
                    <a href="#enquire-now" class="button">Enquire now</a>
                </div>
            </section>
            <div class="col-lg-6 right">
                <div class="first-row-images">
                    <?php foreach( $first_image_column as $image ): ?>
                        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                    <?php endforeach; ?>
                </div>
                <div class="second-row-images">
                    <?php foreach( $second_image_column as $image ): ?>
                        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include( 'template-parts/sections/trusted-by.php'); ?>

<section class="services">
    <div class="container px-4">
        <div class="row">
            <section class="col-12">
                <div class="heading">
                    <h2 class="tag">Expertise</h2>
                    <h3>Legal Services</h3>
                    <p>At Drake & Case, we offer tailored legal solutions for individuals and businesses alike. Our dedicated team is here to guide you through every legal challenge with professionalism and care.</p>
                </div>
            </section>
            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Individuals</h4>
                        <ul>
                            <?php
                            $individual_term = get_term_by('slug', 'individuals', 'practice_area');

                            $child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $individual_term->term_id,
                                'orderby'    => 'term_id',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                                'number'     => 10,
                            ]);

                            foreach ($child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo $individual_term->slug; ?>" class="button">All <?php echo $individual_term->name; ?> services</a>
                </div>
            </article>
            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Businesses</h4>
                        <ul>
                            <?php
                            $business_term = get_term_by('slug', 'businesses', 'practice_area');

                            $business_child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $business_term->term_id,
                                'orderby'    => 'term_id',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                                'number'     => 10,
                            ]);

                            foreach ($business_child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo $business_term->slug; ?>" class="button">All <?php echo $business_term->name; ?> services</a>
                </div>
            </article>

            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Family Law</h4>
                        <ul>
                            <?php
                            $family_law_term = get_term_by('slug', 'family-law', 'practice_area');

                            $family_law_child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $family_law_term->term_id,
                                'orderby'    => 'term_id',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                                'number'     => 10,
                            ]);

                            foreach ($family_law_child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo $family_law_term->slug; ?>" class="button">All <?php echo $family_law_term->name; ?> services</a>
                </div>
            </article>

            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Employment Law</h4>
                        <ul>
                            <?php
                            $employment_law_term = get_term_by('slug', 'employment-law', 'practice_area');

                            $employment_law_child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $employment_law_term->term_id,
                                'orderby'    => 'term_id',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                                'number'     => 10,
                            ]);

                            foreach ($employment_law_child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo $employment_law_term->slug; ?>" class="button">All <?php echo $employment_law_term->name; ?> services</a>
                </div>
            </article>
        </div>
    </div>
</section>

<?php include( 'template-parts/sections/client-feedback.php'); ?>

<?php include( 'template-parts/sections/our-approach.php'); ?>

<?php include( 'template-parts/sections/case-notes-slider.php'); ?>

<?php
$enquireFormId = get_field( 'enquire_form', get_option( 'page_on_front' ) );
include( 'template-parts/sections/enquire-bottom-section.php');
?>

<?php
get_footer();
?>