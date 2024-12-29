<?php
get_header();
?>

<section class="hero">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-6 left">
                <div class="content">
                    <h1>Excellence in Legal Services</h1>
                    <p>At Drake & Case, we prioritise your needs with a commitment to integrity and innovative solutions.</p>
                    <p>Our experienced lawyers are dedicated to providing exceptional legal services tailored to your unique challenges.</p>
                    <a href="#enquire-now" class="button">Enquire now</a>
                </div>
            </section>
            <div class="col-lg-6 right">
                <div class="first-row-images">
                    <img src="/wp-content/uploads/2024/12/header-one.png" alt="test">
                    <img src="/wp-content/uploads/2024/12/image-two.png" alt="test">
                    <img src="/wp-content/uploads/2024/12/image-three.png" alt="test">
                </div>
                <div class="second-row-images">
                    <img src="/wp-content/uploads/2024/12/image-four-e1735053498440.png" alt="test">
                    <img src="/wp-content/uploads/2024/12/image-five.png" alt="test">
                    <img src="/wp-content/uploads/2024/12/image-six.png" alt="test">
                </div>
            </div>
        </div>
    </div>
</section>

<?php include( 'template-parts/sections/trusted-by.php'); ?>

<section class="services">
    <div class="container px-4">
        <div class="row">
            <section class="col-12">
                <div class="heading">
                    <h2 class="tag">Expertise</h2>
                    <h3>Legal Services</h3>
                    <p>At Drake & Case, we offer tailored legal solutions for individuals and businesses alike. Our dedicated team is here to guide you through every legal challenge with professionalism and care.</p>
                </div>
            </section>
            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Individuals</h4>
                        <ul>
                            <li><a href="#">Family Law</a></li>
                            <li><a href="#">Criminal Defense</a></li>
                            <li><a href="#">Personal Injury Claims</a></li>
                            <li><a href="#">Employment Law</a></li>
                            <li><a href="#">Immigration Services</a></li>
                            <li><a href="#">Wills and Probate</a></li>
                            <li><a href="#">Landlord-Tenant Disputes</a></li>
                            <li><a href="#">Consumer Rights</a></li>
                            <li><a href="#">Debt and Bankruptcy Advice</a></li>
                            <li><a href="#">Defamation and Libel</a></li>
                        </ul>
                    </div>
                    <a href="#" class="button">All individual services</a>
                </div>
            </article>
            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Businesses</h4>
                        <ul>
                            <li><a href="#">Corporate Law</a></li>
                            <li><a href="#">Contract Drafting and Review</a></li>
                            <li><a href="#">Employment Law</a></li>
                            <li><a href="#">Intellectual Property Protection</a></li>
                            <li><a href="#">Commercial Litigation</a></li>
                            <li><a href="#">Regulatory Compliance</a></li>
                            <li><a href="#">Mergers and Acquisitions</a></li>
                            <li><a href="#">Tax Law</a></li>
                            <li><a href="#">Real Estate Transactions</a></li>
                            <li><a href="#">Data Protection and Privacy</a></li>
                        </ul>
                    </div>
                    <a href="#" class="button">All business services</a>
                </div>
            </article>

            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Family Law</h4>
                        <ul>
                            <li><a href="#">Divorce and Separation</a></li>
                            <li><a href="#">Child Custody and Visitation</a></li>
                            <li><a href="#">Child Support</a></li>
                            <li><a href="#">Spousal Support (Alimony)</a></li>
                            <li><a href="#">Prenuptial and Postnuptial Agreements</a></li>
                            <li><a href="#">Adoption</a></li>
                            <li><a href="#">Domestic Violence Protection</a></li>
                            <li><a href="#">Property Division</a></li>
                            <li><a href="#">Guardianship</a></li>
                            <li><a href="#">Paternity Disputes</a></li>
                        </ul>
                    </div>
                    <a href="#" class="button">All family services</a>
                </div>
            </article>

            <article class="col-xl-3 col-lg-6 service-list">
                <div class="service-list-inner">
                    <div class="content">
                        <h4>Employment Law</h4>
                        <ul>
                            <li><a href="#">Wrongful Termination</a></li>
                            <li><a href="#">Workplace Discrimination</a></li>
                            <li><a href="#">Harassment Claims</a></li>
                            <li><a href="#">Employment Contracts</a></li>
                            <li><a href="#">Wage and Hour Disputes</a></li>
                            <li><a href="#">Workplace Health and Safety</a></li>
                            <li><a href="#">Redundancy and Severance</a></li>
                            <li><a href="#">Employee Rights Advocacy</a></li>
                            <li><a href="#">Whistleblower Protection</a></li>
                            <li><a href="#">Non-Compete and Non-Disclosure</a></li>
                        </ul>
                    </div>
                    <a href="#" class="button">All employment services</a>
                </div>
            </article>
        </div>
    </div>
</section>

<?php include( 'template-parts/sections/client-feedback.php'); ?>

<?php include( 'template-parts/sections/our-approach.php'); ?>

<?php include( 'template-parts/sections/case-notes-slider.php'); ?>

<?php
$enquireFormId = 1;
include( 'template-parts/sections/enquire-bottom-section.php');
?>

<?php
get_footer();
?>