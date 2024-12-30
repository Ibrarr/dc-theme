<section class="feedback">
    <div class="container px-4">
        <section class="heading">
            <h2>Client Feedback</h2>
            <p>We’re proud to partner with clients who trust us to deliver exceptional results. Their feedback reflects our commitment to professionalism, precision, and putting client needs first. If you’re ready to experience the Drake & Case difference, <a href="#enquire-now">get in touch with us today.</a></p>
        </section>
        <section class="splide" id="feedback-slider">
            <div class="splide__track">
                <ul class="splide__list">
                    <?php while( have_rows('reviews', 'option') ): the_row();
                        $review = get_sub_field('review');
                        $reviewer_picture = get_sub_field('reviewer_picture');
                        $name = get_sub_field('name');
                        $company_job_title = get_sub_field('company_job_title');
                        $company_logo = get_sub_field('company_logo');
                        ?>
                        <li class="splide__slide">
                            <div class="stars"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/stars.svg' ) ?></div>
                            <p class="testimonial">"<?php echo $review; ?>"</p>
                            <?php if ($reviewer_picture) : ?>
                                <img src="<?php echo $reviewer_picture['url']; ?>"  class="person" alt="<?php echo $reviewer_picture['alt']; ?>">
                            <?php endif; ?>
                            <p class="name"><?php echo $name; ?></p>
                            <p class="job-company"><?php echo $company_job_title; ?></p>
                            <img src="<?php echo $company_logo['url']; ?>" class="logo" alt="<?php echo $company_logo['url']; ?>">
                        </li>
                    <?php endwhile; ?>
                </ul>
            </div>
            <div class="splide__arrows splide__arrows--ltr">
                <button
                    class="splide__arrow splide__arrow--prev"
                    type="button"
                    aria-label="Previous slide"
                    aria-controls="splide01-track"
                >
                    <?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/left-arrow.svg' ) ?>
                </button>
                <button
                    class="splide__arrow splide__arrow--next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="splide01-track"
                >
                    <?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/right-arrow.svg' ) ?>
                </button>
            </div>
        </section>
    </div>
</section>