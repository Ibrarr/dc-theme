<?php
/**
 * The template for displaying posts
 *
 */

$post_type    = 'post';
$taxonomy     = 'category';
$terms        = get_the_terms( get_the_ID(), $taxonomy );
$term_name    = $terms[0]->name;

$author_id = get_the_author_meta('ID');

$practice_area = get_the_terms( get_the_ID(), 'practice_area' )[0]->name;
$practice_area_id = get_the_terms( get_the_ID(), 'practice_area' )[0]->term_id;
$practice_area_slug = get_the_terms( get_the_ID(), 'practice_area' )[0]->slug;
$practice_area_link = get_term_link( get_the_terms( get_the_ID(), 'practice_area' )[0] );

$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
$image_srcset = wp_get_attachment_image_srcset( $thumbnail_id );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<section class="case-note-heading">
        <div class="bg-wrapper">
            <img src="<?php the_post_thumbnail_url() ?>" alt="<?php echo esc_attr( get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true ) ); ?>"
                 srcset="<?php echo esc_attr( $image_srcset ); ?>" sizes="(min-width: 391px) 1024px, 100vw" class="background-image">
        </div>
        <div class="container px-4 content">
            <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
            <h1 class="title"><?php the_title(); ?></h1>
            <p>By <?php the_author(); ?> <span>•</span> <?php the_date('jS M Y'); ?><?php if ($practice_area) { ?> <span>•</span> <a href="<?php echo $practice_area_link; ?>"><?php echo $practice_area; ?></a><?php } ?> <span>•</span> <?php echo ceil(str_word_count(strip_tags(get_field('content'))) / 200); ?> min read</p>
        </div>
    </section>

    <section class="content-area">
        <div class="container px-4">
            <div class="row">
                <div class="col-xl-8 col-lg-8 order-2 order-lg-1 contents-area">
                    <div class="content">
                        <?php
                        $content = get_field('content');
                        if ($content) {
                            $content = preg_replace_callback(
                                '/<h([1-2])>(.*?)<\/h\1>/',
                                function ($matches) {
                                    $id = sanitize_title($matches[2]);
                                    return '<h' . $matches[1] . ' id="' . esc_attr($id) . '">' . $matches[2] . '</h' . $matches[1] . '>';
                                },
                                $content
                            );
                            echo $content;
                        }
                        ?>
                    </div>
                    <div class="bottom-section">
                        <p class="heading-share">Share this case note:</p>
                        <div class="socials-categories">
                            <div class="socials">
                                <a class="mail-icon"
                                   href="mailto:?subject=<?php echo rawurlencode( get_the_title() ); ?>&body=Check out this <?php echo $term_name; ?> from Drake & Case <?php echo rawurlencode( get_permalink() ); ?>"
                                   target="_blank" aria-label="Share to Mail"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/email.svg' ) ?></a>
                                <a class="linkedin-icon" rel="nofollow"
                                   href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo rawurlencode( get_permalink() ); ?>&title=<?php echo rawurlencode( get_the_title() ); ?>"
                                   target="_blank" aria-label="Share to LinkedIn"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/linkedin.svg' ) ?></a>
                                <a class="x-icon" rel="nofollow"
                                   href="https://twitter.com/intent/tweet?url=<?php echo rawurlencode( get_permalink() ); ?>/&text='<?php echo rawurlencode( get_the_title() ); ?>'&via=<?php the_field( 'x', 'option' ); ?>"
                                   title="Tweet this blog"
                                   target="_blank" aria-label="Share to X"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/x.svg' ) ?></a>
                                <a class="facebook-icon" rel="nofollow"
                                   href="https://www.facebook.com/sharer/sharer.php?u=<?php echo rawurlencode( get_permalink() ); ?>"
                                   target="_blank" aria-label="Share to Facebook"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/facebook.svg' ) ?></a>
                            </div>
                            <div class="categories">
                                <?php
                                foreach ( $terms as $term ) {
                                    echo '<a href="' . get_term_link( $term ) . '" class="category-link">' . $term->name . '</a> ';
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="author-section">
                        <div class="author">
                            <?php echo get_avatar($author_id, 56); ?>
                            <div class="info">
                                <p class="name"><?php the_author(); ?></p>
                                <p><?php the_field('job_title', 'user_' . $author_id) ?>, <?php the_field('company_name', 'user_' . $author_id) ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 order-1 order-lg-2 table-of-contents-area">
                    <div class="contents-table">
                        <div class="table-of-contents">
                            <h3>Table of Contents</h3>
                            <ul>
                                <?php
                                preg_match_all('/<h[1-2]>(.*?)<\/h[1-2]>/', get_field('content'), $matches, PREG_SET_ORDER);

                                foreach ($matches as $match) {
                                    $heading = strip_tags($match[1]);
                                    $anchor = sanitize_title($heading);
                                    echo '<li><a href="#' . esc_attr($anchor) . '">' . esc_html($heading) . '</a></li>';
                                }
                                ?>
                            </ul>
                        </div>
                        <a href="<?php echo get_field('sticky_button_text')['url']; ?>" class="button"><?php echo get_field('sticky_button_text')['title']; ?></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter-signup">
        <div class="container px-4">
            <h3>Stay updated with our Case Notes</h3>
            <p>Join our community for the latest legal insights and updates straight to your inbox.</p>
            <div class="form">
                <?php echo do_shortcode( '[gravityform id="'. get_field('newsletter_form', 'option') .'" title="false" description="false" ajax="true"]' ); ?>
            </div>
        </div>
    </section>

    <section class="case-notes">
        <div class="px-4">
            <section class="heading">
                <h2 class="tag">Content</h2>
                <h3>Case Notes for <?php echo $practice_area; ?></h3>
                <p>Explore valuable perspectives on <?php echo $practice_area; ?>, ranging from complex litigation strategies to the latest legal trends, empowering you with knowledge to navigate the legal landscape.</p>
            </section>
            <?php
            $args = [
                'post_type'      => 'post',
                'posts_per_page' => 12,
                'post_status'    => 'publish',
                'orderby'        => 'date',
                'order'          => 'DESC',
                'post__not_in'   => [get_the_ID()],
                'tax_query'      => [
                    [
                        'taxonomy' => 'practice_area',
                        'field'    => 'slug',
                        'terms'    => $practice_area_slug,
                    ],
                ],
            ];

            $query = new WP_Query($args);

            if ($query->have_posts()) : ?>
                <section class="splide" id="case-notes-slider">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <?php while ($query->have_posts()) : $query->the_post(); ?>
                                <li class="splide__slide">
                                    <article class="standard-case-note-card">
                                        <?php require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
                                    </article>
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
                            <?php echo file_get_contents(DC_TEMPLATE_DIR . '/assets/images/icons/left-arrow.svg'); ?>
                        </button>
                        <button
                                class="splide__arrow splide__arrow--next"
                                type="button"
                                aria-label="Next slide"
                                aria-controls="splide01-track"
                        >
                            <?php echo file_get_contents(DC_TEMPLATE_DIR . '/assets/images/icons/right-arrow.svg'); ?>
                        </button>
                    </div>
                </section>
            <?php else : ?>
                <p>No related posts found. Explore more content <a href="/all-case-notes/">here</a>.</p>
            <?php endif;

            wp_reset_postdata();
            ?>
        </div>
    </section>

    <?php
    include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');
    ?>
</article>