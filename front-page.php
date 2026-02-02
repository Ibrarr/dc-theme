<?php
get_header();

?>
<section class="hero-slides">
    <?php
    $counter = 0;
    while( have_rows('hero_slides')): the_row();
        $heading = get_sub_field('heading');
        $text = get_sub_field('text');
        $background = get_sub_field('background');
        $image = get_sub_field('image');
        $video = get_sub_field('video');
        $button = get_sub_field('button');
        $counter++;

        if ($counter === 1): ?>
            <section class="slide">
                <?php if ($background === 'image') { ?>
                    <div class="bg-wrapper" style="background: url(<?php echo $image; ?>) center center / cover no-repeat;"></div>
                <?php } else if ($background === 'video') { ?>
                    <div class="bg-wrapper">
                        <video autoplay loop muted playsinline class="bg-video">
                            <source src="<?php echo $video; ?>" type="video/mp4">
                        </video>
                    </div>
                <?php } ?>
                <div class="container px-4">
                    <h1><?php echo $heading; ?></h1>
                    <?php echo $text; ?>
                    <a href="#enquire-now" class="button"><?php echo $button; ?></a>
                </div>
            </section>
        <?php else: ?>
            <section class="slide">
                <?php if ($background === 'image') { ?>
                    <div class="bg-wrapper" style="background: url(<?php echo $image; ?>) center center / cover no-repeat;"></div>
                <?php } else if ($background === 'video') { ?>
                    <div class="bg-wrapper">
                        <video autoplay loop muted playsinline class="bg-video">
                            <source src="<?php echo $video; ?>" type="video/mp4">
                        </video>
                    </div>
                <?php } ?>
                <div class="container px-4">
                    <h2><?php echo $heading; ?></h2>
                    <?php echo $text; ?>
                    <a href="#enquire-now" class="button"><?php echo $button; ?></a>
                </div>
            </section>
        <?php endif; ?>
    <?php endwhile; ?>
</section>

<?php //include( 'template-parts/sections/trusted-by.php'); ?>

<section class="services">
    <div class="container px-4">
        <div class="row">
            <section class="col-12">
                <div class="heading">
                    <h2 class="tag">Expertise</h2>
                    <h3>Legal Services</h3>
                    <p>At Drake & Case, we offer tailored legal solutions for individuals and businesses alike. Our dedicated team is here to guide you through your legal challenges with professionalism and care.</p>
                </div>
            </section>
            <article class="col-xl-9 col-lg-8 service-list">
                <div class="service-list-inner individuals">
                    <div class="content">
                        <h4>Legal Services for Individuals</h4>
                        <ul>
                            <?php
                            $individual_term = get_term_by('slug', 'individuals', 'practice_area');

                            $child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $individual_term->term_id,
                                'orderby'    => 'name',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                            ]);

                            foreach ($child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo get_term_link($individual_term); ?>" class="button">View all</a>
                </div>
            </article>
            <article class="col-xl-3 col-lg-4 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Legal Services for Businesses</h4>
                        <ul>
                            <?php
                            $business_term = get_term_by('slug', 'businesses', 'practice_area');

                            $business_child_terms = get_terms([
                                'taxonomy'   => 'practice_area',
                                'parent'     => $business_term->term_id,
                                'orderby'    => 'name',
                                'order'      => 'ASC',
                                'hide_empty' => false,
                            ]);

                            foreach ($business_child_terms as $term) {
                                echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                            }
                            ?>
                        </ul>
                    </div>
                    <a href="<?php echo get_term_link($business_term); ?>" class="button">View all</a>
                </div>
            </article>
        </div>
    </div>
</section>

<?php //include( 'template-parts/sections/client-feedback.php'); ?>

<?php include( 'template-parts/sections/our-approach.php'); ?>

<?php //include( 'template-parts/sections/case-notes-slider.php'); ?>

<?php
include( 'template-parts/sections/enquire-bottom-section.php');
?>

<?php
get_footer();
?>