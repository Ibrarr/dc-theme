<?php
$images = get_field('trusted_by_images', 'option');
?>

<section class="trusted-by">
    <div class="container px-4">
        <h2><span>Trusted</span> by Industry Leaders Worldwide</h2>
    </div>
    <div class="splide" id="trusted-by-slider">
        <div class="splide__track">
            <ul class="splide__list">
                <?php foreach( $images as $image ): ?>
                    <li class="splide__slide">
                        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</section>