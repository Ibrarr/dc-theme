<div class="row">
    <div class="col-xl-3 service-list">
        <h3>Individuals</h3>
        <p><a href="#">Family Law</a></p>
        <p><a href="#">Criminal Defense</a></p>
        <p><a href="#">Personal Injury Claims</a></p>
        <p><a href="#">Employment Law</a></p>
        <p><a href="#">Immigration Services</a></p>
        <p><a href="#">Wills and Probate</a></p>
        <p><a href="#">Landlord-Tenant Disputes</a></p>
        <p><a href="#">Consumer Rights</a></p>
        <p><a href="#">Debt and Bankruptcy Advice</a></p>
        <p><a href="#">Defamation and Libel</a></p>
        <a href="#" class="button">All individual services</a>
    </div>
    <div class="col-xl-3 service-list">
        <h3>Businesses</h3>
        <p><a href="#">Corporate Law</a></p>
        <p><a href="#">Contract Drafting and Review</a></p>
        <p><a href="#">Employment Law</a></p>
        <p><a href="#">Intellectual Property Protection</a></p>
        <p><a href="#">Commercial Litigation</a></p>
        <p><a href="#">Regulatory Compliance</a></p>
        <p><a href="#">Mergers and Acquisitions</a></p>
        <p><a href="#">Tax Law</a></p>
        <p><a href="#">Real Estate Transactions</a></p>
        <p><a href="#">Data Protection and Privacy</a></p>
        <a href="#" class="button">All individual services</a>
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
            <div class="standard-case-note-card">
                <?php require get_template_directory() . '/template-parts/standard-case-note-card.php'; ?>
            </div>
        <?php endwhile; ?>
    </div>
</div>