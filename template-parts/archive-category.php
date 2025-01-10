<?php
$term = get_queried_object();
$categories = get_categories();
$paged = get_query_var('paged') ? get_query_var('paged') : 1;

get_header();
?>

<section class="blog-heading">
    <div class="container px-4">
        <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
        <h1>Latest <?php echo $term->name ?></h1>
        <p><?php echo $term->description ?></p>
    </div>
</section>

<section class="posts">
    <div class="container px-4">
        <div class="row">
            <div class="col-12">
                <nav class="categories">
                    <?php
                    echo '<ul>';
                    echo '<li><a href="/case-notes/">View all</a></li>';
                    foreach ($categories as $category) {
                        $is_active = ($term && $term->term_id === $category->term_id);
                        $category_link = get_category_link($category->term_id);

                        echo '<li' . ($is_active ? ' class="active"' : '') . '>';
                        if ($is_active) {
                            // If active, display plain text without link
                            echo esc_html($category->name);
                        } else {
                            // Otherwise, display as a link
                            echo '<a href="' . esc_url($category_link) . '">' . esc_html($category->name) . '</a>';
                        }
                        echo '</li>';
                    }
                    echo '</ul>';
                    ?>
                </nav>
            </div>
            <div class="col-xl-9">
                <div class="row post-list">
                    <?php
                    $args = [
                        'post_type' => 'post',
                        'posts_per_page' => 9,
                        'paged' => $paged,
                        'tax_query'      => [
                            [
                                'taxonomy' => 'category',
                                'field'    => 'slug',
                                'terms'    => $term->slug,
                            ],
                        ],
                    ];

                    $query = new WP_Query($args);

                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                            ?>
                            <article class="col-lg-4 mb-4 standard-case-note-card">
                                <?php require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
                            </article>
                        <?php
                        endwhile;
                    else :
                        echo '<p>No posts found.</p>';
                    endif;
                    wp_reset_postdata();
                    ?>
                </div>

                <div class="pagination">
                    <?php
                    $prev_icon = file_get_contents(DC_TEMPLATE_DIR . '/assets/images/icons/chevron-arrow.svg');
                    $next_icon = file_get_contents(DC_TEMPLATE_DIR . '/assets/images/icons/chevron-arrow.svg');

                    echo paginate_links([
                        'total' => $query->max_num_pages,
                        'current' => $paged,
                        'prev_text' => $prev_icon,
                        'next_text' => $next_icon,
                    ]);
                    ?>

                </div>
            </div>
            <div class="col-xl-3 newsletter-container">
                <div class="newsletter-signup">
                    <h3>Stay updated with our Case Notes</h3>
                    <p>Join our community for the latest legal insights and updates straight to your inbox.</p>
                    <div class="form">
                        <?php echo do_shortcode( '[gravityform id="'. get_field('newsletter_form', 'option') .'" title="false" description="false" ajax="true"]' ); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
$enquireFormId = get_field( 'general_enquire_form', 'option' );
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');
?>

<?php
get_footer();
?>