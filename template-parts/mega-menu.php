<div class="row">
    <div class="col-xl-3 service-list-menu">
        <div class="content">
            <span>Individuals</span>
            <ul>
                <?php
                $individual_term = get_term_by('slug', 'individuals', 'practice_area');

                $individual_child_terms = get_terms([
                    'taxonomy'   => 'practice_area',
                    'parent'     => $individual_term->term_id,
                    'orderby'    => 'term_id',
                    'order'      => 'ASC',
                    'hide_empty' => false,
                    'number'     => 10,
                ]);

                foreach ($individual_child_terms as $term) {
                    echo '<li><a href="' . esc_url(get_term_link($term)) . '">' . esc_html($term->name) . '</a></li>';
                }
                ?>
            </ul>
        </div>
        <a href="<?php echo get_term_link($individual_term); ?>" class="button">All <?php echo $individual_term->name; ?> services</a>
    </div>
    <div class="col-xl-3 service-list-menu">
        <div class="content">
            <span>Businesses</span>
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
        <a href="<?php echo get_term_link($business_term); ?>" class="button">All <?php echo $business_term->name; ?> services</a>
    </div>
    <div class="col-xl-3 business-info">
        <div class="contact-info">
            <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/person.svg' ) ?></i>
            <div class="content">
                <p class="heading">Contact Info</p>
                <a href="tel:02088261200">0208 826 1200</a>
                <a href="mailto:info@drakeandcase.com">info@drakeandcase.com</a>
            </div>
        </div>
        <div class="business-hours">
            <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/clock.svg' ) ?></i>
            <div class="content">
                <p class="heading">Business Hours</p>
                <p>Mon-Fri: 9am - 5pm</p>
            </div>
        </div>
        <div class="out-of-hours">
            <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/clock.svg' ) ?></i>
            <div class="content">
                <p class="heading">Out of Hours Service</p>
                <p>Mon-Fri: 5pm - 10pm</p>
                <a href="tel:02088261200">0208 826 1200</a>
            </div>
        </div>
        <a href="#" class="button">Pay online</a>
    </div>
    <div class="col-xl-3 recent-post">
        <p class="heading">Latest Case Note</p>
        <?php
        $args = [
            'post_type'      => 'post',
            'posts_per_page' => 1,
            'post_status'    => 'publish',
            'orderby'        => 'date',
            'order'          => 'DESC',
        ];
        $query = new WP_Query($args);
        while ($query->have_posts()) : $query->the_post();
            ?>
            <article class="standard-case-note-card">
                <?php require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
            </article>
        <?php
        endwhile;
        wp_reset_postdata();
        ?>
    </div>
</div>