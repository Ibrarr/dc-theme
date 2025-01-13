<?php
/*
Template Name: FAQs
*/
get_header();

$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
$image_srcset = wp_get_attachment_image_srcset( $thumbnail_id );
?>

<section class="header">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-8 content">
                <div class="breadcrumbs"><?php echo do_shortcode('[wpseo_breadcrumb]') ?></div>
                <h1>FAQs</h1>
                <p>We understand that navigating legal matters can be complex, and you may have questions about our services, process, and how we can assist you. To make things easier, we've compiled answers to some of the most common queries we receive from clients.</p>
                <p>If you don’t see your question here, please don’t hesitate to <a href="#enquire-now">get in touch</a>. Our team is always ready to provide the information and support you need.</p>
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

<section class="faqs">
    <div class="container px-4">
        <div class="faq-items">
            <?php
            $faq_schema = [];

            while (have_rows('faqs')): the_row();
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
                        <h2 class="faq-question"><?php echo $question; ?></h2>
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
            <h3>Still have questions?</h3>
            <p>If the service you require is not listed, or you need further assistance please contact us below.</p>
            <a href="#enquire-now" class="button">Contact</a>
        </div>
    </div>
</section>

<?php
$enquireFormId = get_field( 'general_enquire_form', 'option' );
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');

get_footer();
?>