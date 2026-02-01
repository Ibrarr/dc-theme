<?php
$term = get_queried_object();
?>

<section class="header">
    <div class="bg-wrapper" style="background: url(<?php the_field('image', $term); ?>) center center / cover no-repeat;"></div>
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-8 content">
                <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
                <h1><?php echo $term->name; ?></h1>
            </div>
            <div class="col-lg-4">
                <div class="cta-box">
                    <h2>Talk to Our Team</h2>
                    <p>Reach out to our team by phone or complete the form, and we’ll respond promptly to assist you.</p>
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary">Call <?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="#enquire-now" class="button">Make an Enquiry</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="second-section">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-7 content">
                <h2>Expert <?php echo $term->name; ?> Services & Advice</h2>
                <?php echo wpautop($term->description); ?>
                <div class="ctas">
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary">Call <?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="#enquire-now" class="button"><?php the_field('section_section_button', $term); ?></a>
                </div>
            </div>
            <div class="offset-lg-1 col-lg-4 image">
                <img src="<?php echo get_field( 'second_section_image', $term )['url']; ?>" alt="<?php echo $term->name; ?>">
            </div>
        </div>
    </div>
</section>

<?php if (have_rows('services', $term)) : ?>
    <section class="practice-area-services">
        <div class="container px-4">
            <div class="top">
                <h2><?php echo $term->name; ?> Services</h2>
                <p><?php the_field('services_description', $term); ?></p>
            </div>

            <div class="vertical-tabs">
                <ul class="tabs-list">
                    <?php $index = 1; ?>
                    <?php while (have_rows('services', $term)): the_row(); ?>
                        <?php
                        $heading = get_sub_field('heading');
                        $description = get_sub_field('description');
                        $button = get_sub_field('button');
                        ?>
                        <li class="<?php echo $index === 1 ? 'active' : ''; ?>">
                            <a href="#service-<?php echo $index; ?>"><?php echo $heading; ?></a>
                            <div class="tab-content-mobile" id="service-<?php echo $index; ?>-mobile">
                                <h3><?php echo $heading; ?></h3>
                                <?php echo $description; ?>
                                <a href="#enquire-now" class="button"><?php echo $button; ?></a>
                            </div>
                        </li>
                        <?php $index++; ?>
                    <?php endwhile; ?>
                </ul>

                <div class="desktop-content">
                    <?php $index = 1; ?>
                    <?php while (have_rows('services', $term)): the_row(); ?>
                        <?php
                        $heading = get_sub_field('heading');
                        $description = get_sub_field('description');
                        $button = get_sub_field('button');
                        ?>
                        <div class="tab-content <?php echo $index === 1 ? 'active' : ''; ?>" id="service-<?php echo $index; ?>">
                            <h3><?php echo $heading; ?></h3>
                            <?php echo $description; ?>
                            <a href="#enquire-now" class="button"><?php echo $button; ?></a>
                        </div>
                        <?php $index++; ?>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>

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

<?php
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');
?>