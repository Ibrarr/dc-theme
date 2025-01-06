</main>
<footer id="footer" role="contentinfo">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-6 info">
                <div class="logo"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/logos/main-logo.svg' ) ?></div>
                <p class="heading">Address:</p>
                <a href="https://maps.app.goo.gl/xcLTeCkCQc2hCuFz5" target="_blank" class="address">42 Upper Berkeley Street, Marylebone, London, W1H 5QL</a>
                <p class="heading">Contact:</p>
                <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>"><?php the_field( 'main_phone_number', 'option' ); ?></a>
                <a href="mailto:<?php the_field( 'main_email', 'option' ); ?>"><?php the_field( 'main_email', 'option' ); ?></a>
                <div class="sra" style="max-width:225px;max-height:163px; margin-left:0px!important">
                    <div style="position: relative;padding-bottom: 59.1%;height: auto;overflow: hidden;">
                        <iframe frameborder="0" scrolling="no" allowtransparency="true" title="SRA Check" src="https://cdn.yoshki.com/iframe/55845r.html" style="border:0px; margin:0px; padding:0px; backgroundColor:transparent; top:0px; left:0px; width:100%; height:100%; position: absolute;"></iframe>
                    </div>
                </div>
                <div class="socials">
                    <a href="<?php the_field( 'linkedin', 'option' ); ?>" target="_blank" aria-label="LinkedIn"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/linkedin.svg' ) ?></a>
                    <a href="<?php the_field( 'instagram', 'option' ); ?>" target="_blank" aria-label="Instagram"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/instagram.svg' ) ?></a>
                    <a href="<?php the_field( 'facebook', 'option' ); ?>" target="_blank" aria-label="Facebook"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/facebook.svg' ) ?></a>
                    <a href="<?php the_field( 'x', 'option' ); ?>" target="_blank" aria-label="X"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/x.svg' ) ?></a>
                    <a href="<?php the_field( 'youtube', 'option' ); ?>" target="_blank" aria-label="YouTube"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/youtube.svg' ) ?></a>
                </div>
            </div>
            <div class="col-lg-6 menus">
                <div class="all-footer-menus">
                    <nav id="footer-menu" role="navigation" itemscope
                         itemtype="https://schema.org/SiteNavigationElement">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'footer-menu',
                        ) ); ?>
                    </nav>
                    <nav id="footer-menu-practise-areas" role="navigation" itemscope
                         itemtype="https://schema.org/SiteNavigationElement">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'footer-menu-practise-areas',
                        ) ); ?>
                    </nav>
                </div>
            </div>
            <div class="col-12 bottom">
                <div class="content">
                    <p>© 2024 Drake & Case is Authorised & Regulated by the Solicitors Regulation Authority. SRA number: 644815</p>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>