<?php
/*
Template Name: Why Drake & Case
*/
get_header();

$first_image_column = get_field('first_image_column');
$second_image_column = get_field('second_image_column');
?>
<section class="hero">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-6 left">
                <div class="content">
                    <h1><?php the_field('hero_heading'); ?></h1>
                    <p><?php the_field('hero_text'); ?></p>
                    <a href="#about" class="button">Learn more</a>
                </div>
            </section>
            <div class="col-lg-6 right">
                <div class="first-row-images">
                    <?php foreach( $first_image_column as $image ): ?>
                        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                    <?php endforeach; ?>
                </div>
                <div class="second-row-images">
                    <?php foreach( $second_image_column as $image ): ?>
                        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about" id="about">
    <div class="container px-4">
        <h2 class="tag">The Journey of Drake & Case</h2>
        <h3><?php the_field('about_heading'); ?></h3>
        <p><?php the_field('about_description'); ?></p>
    </div>
</section>

<section class="team">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-12 top">
                <h2 class="tag">Team</h2>
                <h3>Our Leadership Team</h3>
                <p>Meet our dedicated team of legal professionals.</p>
            </section>
            <?php while( have_rows('team_members') ): the_row();
                $profile_picture = get_sub_field('profile_picture');
                $name = get_sub_field('name');
                $title = get_sub_field('title');
                $intro = get_sub_field('intro');
                $linkedin = get_sub_field('linkedin');
                $email = get_sub_field('email');
                $phone = get_sub_field('phone');
                ?>
                <section class="col-lg-4 col-md-6 mb-4 member">
                    <img src="<?php echo $profile_picture['url']; ?>" alt="<?php echo $profile_picture['alt']; ?>">
                    <h4><?php echo $name; ?></h4>
                    <p><?php echo $title; ?></p>
                    <p class="intro"><?php echo $intro; ?></p>
                    <div class="socials">
                        <?php if ($linkedin) : ?>
                        <a href="<?php echo $linkedin; ?>" target="_blank" aria-label="LinkedIn"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/linkedin.svg' ) ?></a>
                        <?php endif; if ($email) : ?>
                        <a href="mailto:<?php echo $email; ?>" aria-label="Email"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/email.svg' ) ?></a>
                        <?php endif; if ($phone) : ?>
                        <a href="tel:<?php echo $phone; ?>" aria-label="Phone"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/phone.svg' ) ?></a>
                        <?php endif; ?>
                    </div>
                </section>
            <?php endwhile; ?>
        </div>
    </div>
</section>

<section class="values">
    <div class="container px-4">
        <div class="row">
            <section class="col-lg-12 top">
                <h2><?php the_field('values_heading'); ?></h2>
                <p><?php the_field('values_description'); ?></p>
            </section>
            <?php while( have_rows('values') ): the_row();
                $heading = get_sub_field('heading');
                $description = get_sub_field('description');
                ?>
                <section class="col-md-4 mb-4 value">
                    <h3><?php echo $heading; ?></h3>
                    <p><?php echo $description; ?></p>
                </section>
            <?php endwhile; ?>
        </div>
    </div>
</section>

<?php include( get_template_directory() . '/template-parts/sections/trusted-by.php'); ?>

<?php include( get_template_directory() . '/template-parts/sections/our-approach.php'); ?>

<?php include( get_template_directory() . '/template-parts/sections/client-feedback.php'); ?>

<?php
$enquireFormId = get_field( 'enquire_form' );
include( get_template_directory() . '/template-parts/sections/enquire-bottom-section.php');
?>
<?php
get_footer();
?>