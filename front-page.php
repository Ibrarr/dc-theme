<?php
get_header();

?>
<section class="hero-slides">
    <?php
    $counter = 0;
    while( have_rows('hero_slides')): the_row();
        $heading = get_sub_field('heading');
        $text = get_sub_field('text');
        $text_colour = get_sub_field('text_colour');
        $background = get_sub_field('background');
        $counter++; // Increment the counter

        if ($counter === 1): ?>
            <section class="slide <?php echo $text_colour; ?>">
                <div class="bg-wrapper" style="background: url(<?php echo $background; ?>) center center / cover no-repeat;"></div>
                <div class="container px-4">
                    <h1><?php echo $heading; ?></h1>
                    <?php echo $text; ?>
                    <a href="#enquire-now" class="button">Enquire now</a>
                </div>
            </section>
        <?php else: ?>
            <section class="slide <?php echo $text_colour; ?>">
                <div class="bg-wrapper" style="background: url(<?php echo $background; ?>) center center / cover no-repeat;"></div>
                <div class="container px-4">
                    <h2><?php echo $heading; ?></h2>
                    <?php echo $text; ?>
                    <a href="#enquire-now" class="button">Enquire now</a>
                </div>
            </section>
        <?php endif; ?>
    <?php endwhile; ?>

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
$enquireFormId = get_field( 'enquire_form' );
include( 'template-parts/sections/enquire-bottom-section.php');
?>

<?php
get_footer();
?>