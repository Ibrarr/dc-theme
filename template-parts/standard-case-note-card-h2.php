<?php
$terms     = get_the_terms(get_the_ID(), 'category');
$term_name = $terms[0]->name;

$thumbnail_id = get_post_thumbnail_id( $post->ID );
$image_srcset = wp_get_attachment_image_srcset( $thumbnail_id );
?>
<a href="<?php the_permalink(); ?>">
    <div class="image-wrapper">
        <img src="<?php the_post_thumbnail_url() ?>" alt="<?php the_title(); ?>"
             srcset="<?php echo esc_attr( $image_srcset ); ?>" sizes="(min-width: 391px) 1024px, 100vw">
    </div>
    <div class="content">
        <div class="term-time">
            <p class="term"><?php echo $term_name; ?></p>
            <p class="time"><?php echo ceil(str_word_count(strip_tags(get_field('content', $post->ID))) / 200); ?> min read</p>
        </div>
        <h2 class="title"><?php the_title(); ?></h2>
        <p class="excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
        <span class="read-more">Read more <i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/chevron-arrow.svg' ) ?></i></span>
    </div>
</a>