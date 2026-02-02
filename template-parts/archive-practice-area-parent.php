<?php
$term = get_queried_object();

$child_terms = get_terms([
    'taxonomy' => $term->taxonomy,
    'parent' => $term->term_id,
    'hide_empty' => false,
]);
?>

<section class="header">
    <div class="container px-4">
        <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
        <h1>Legal services for <?php echo $term->name; ?></h1>
        <?php echo wpautop($term->description); ?>
        <a href="#service-list" class="button">View services</a>
    </div>
</section>

<section class="service-list" id="service-list">
    <div class="container px-4">
        <div class="row">
            <div class="col-12"><h2>Explore our range of legal services tailored for <span><?php echo $term->name; ?></span></h2></div>
            <?php foreach ($child_terms as $child_term) : ?>
                <div class="col-lg-3 col-md-6 mb-4 service-container">
                    <a href="<?php echo get_term_link($child_term); ?>">
                        <div class="service">
                            <div class="bg-wrapper" style="background: url(<?php the_field('image', $child_term); ?>) center center / cover no-repeat;"></div>
                            <article class="content">
                                <h3><?php echo $child_term->name; ?></h3>
                                <span class="read-more">Find out more <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/chevron-arrow.svg' ) ?></i></span>
                            </article>
                        </div>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="faq">
    <div class="container px-4">
        <h2><?php echo $term->name; ?> FAQs</h2>
        <p class="faq-description">Here are answers to some common questions about our legal services for <?php echo $term->name; ?>.</p>
        <div class="faq-items">
            <?php
            $faq_schema = [];

            while (have_rows('faq', $term)): the_row();
                $question = get_sub_field('question');
                $answer = get_sub_field('answer');

                if ($question && $answer):
                    $faq_schema[] = [
                        '@type' => 'Question',
                        'name' => $question,
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text' => $answer
                        ]
                    ];
                    ?>

                    <div class="faq-item">
                        <h3 class="faq-question"><?php echo $question; ?></h3>
                        <i class="faq-arrow"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/chevron-arrow.svg' ) ?></i>
                        <p class="faq-answer"><?php echo $answer; ?></p>
                    </div>

                <?php endif; ?>
            <?php endwhile; ?>
        </div>

        <?php if (!empty($faq_schema)): ?>
            <script type="application/ld+json">
            <?php echo json_encode([
                    '@context' => 'https://schema.org',
                    '@type' => 'FAQPage',
                    'mainEntity' => $faq_schema
                ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>
        </script>
        <?php endif; ?>

        <div class="bottom">
            <h4>Still have questions?</h4>
            <p>If the service you require is not listed, or you need further assistance please contact us below.</p>
            <a href="#enquire-now" class="button">Contact</a>
        </div>
    </div>
</section>

<!--<section class="case-notes">-->
<!--    <div class="px-4">-->
<!--        <section class="heading">-->
<!--            <h2 class="tag">Content</h2>-->
<!--            <h3>Case Notes for --><?php //echo $term->name; ?><!--</h3>-->
<!--            <p>Explore valuable perspectives on --><?php //echo $term->name; ?><!--, ranging from complex litigation strategies to the latest legal trends, empowering you with knowledge to navigate the legal landscape.</p>-->
<!--        </section>-->
<!--        --><?php
//        $args = [
//            'post_type'      => 'post',
//            'posts_per_page' => 12,
//            'post_status'    => 'publish',
//            'orderby'        => 'date',
//            'order'          => 'DESC',
//            'tax_query'      => [
//                [
//                    'taxonomy' => 'practice_area',
//                    'field'    => 'slug',
//                    'terms'    => $term->slug,
//                ],
//            ],
//        ];
//
//        $query = new WP_Query($args);
//
//        if ($query->have_posts()) : ?>
<!--            <section class="splide" id="case-notes-slider">-->
<!--                <div class="splide__track">-->
<!--                    <ul class="splide__list">-->
<!--                        --><?php //while ($query->have_posts()) : $query->the_post(); ?>
<!--                            <li class="splide__slide">-->
<!--                                <article class="standard-case-note-card">-->
<!--                                    --><?php //require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
<!--                                </article>-->
<!--                            </li>-->
<!--                        --><?php //endwhile; ?>
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="splide__arrows splide__arrows--ltr">-->
<!--                    <button-->
<!--                            class="splide__arrow splide__arrow--prev"-->
<!--                            type="button"-->
<!--                            aria-label="Previous slide"-->
<!--                            aria-controls="splide01-track"-->
<!--                    >-->
<!--                        --><?php //echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/left-arrow.svg' ) ?>
<!--                    </button>-->
<!--                    <button-->
<!--                            class="splide__arrow splide__arrow--next"-->
<!--                            type="button"-->
<!--                            aria-label="Next slide"-->
<!--                            aria-controls="splide01-track"-->
<!--                    >-->
<!--                        --><?php //echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/right-arrow.svg' ) ?>
<!--                    </button>-->
<!--                </div>-->
<!--            </section>-->
<!--        --><?php //else : ?>
<!--            <p>No related posts found. Explore more content <a href="/all-case-notes/">here</a>.</p>-->
<!--        --><?php //endif;
//
//        wp_reset_postdata();
//        ?>
<!--    </div>-->
<!--</section>-->

<?php
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');
?>