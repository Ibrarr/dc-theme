<section class="case-notes">
    <div class="px-4">
        <section class="heading">
            <h2 class="tag">Content</h2>
            <h3>Case Notes</h3>
            <p>Welcome to Case Notes by Drake & Case, your source for expert legal insights and updates.</p>
            <p>From complex litigation to emerging legal trends, our team shares valuable perspectives to keep you informed and empowered.</p>
        </section>
        <section class="splide" id="case-notes-slider">
            <div class="splide__track">
                <ul class="splide__list">
                    <?php
                    $args = [
                        'post_type'      => 'post',
                        'posts_per_page' => 12,
                        'post_status'    => 'publish',
                        'orderby'        => 'date',
                        'order'          => 'DESC',
                    ];
                    $query = new WP_Query($args);
                    while ($query->have_posts()) : $query->the_post();
                        ?>
                        <li class="splide__slide">
                            <article class="standard-case-note-card">
                                <?php require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
                            </article>
                        </li>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                    ?>
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