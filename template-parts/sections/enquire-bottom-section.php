<section id="enquire-now">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-6 content">
                <div class="heading">
                    <h2 class="tag">Get in Touch</h2>
                    <h3>Enquire Now</h3>
                    <p>We’re here to assist you with your legal needs.</p>
                </div>
                <div class="what-to-expect">
                    <p class="bold">Schedule a Consultation to take the first step toward resolving your legal challenges with expert advice.</p>
                    <ul>
                        <li>Free 15 minute consultation</li>
                        <li>Discuss your case and objectives</li>
                        <li>No obligations – just clarity and next steps</li>
                    </ul>
                    <p class="heading">What happens next?</p>
                    <p class="final-p">After your chat, you’ll receive clear, actionable advice tailored to your needs, sent directly to your inbox.</p>
                </div>
                <div class="contact-info">
                    <a href="mailto:<?php the_field( 'main_email', 'option' ) ?>"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/email.svg' ) ?></i> <?php the_field( 'main_email', 'option' ) ?></a>
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/phone.svg' ) ?></i> <?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="https://maps.app.goo.gl/xcLTeCkCQc2hCuFz5" target="_blank"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/location-point.svg' ) ?></i> 42 Upper Berkeley Street, Marylebone, London, W1H 5QL</a>
                </div>
            </section>
            <section class="col-lg-6 form">
                <?php echo do_shortcode( '[gravityform id="'.get_field( 'main_enquire_form', 'option' ).'" title="false" description="false" ajax="true"]' ); ?>
            </section>
        </div>
    </div>
</section>