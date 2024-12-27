</main>
<footer id="footer" role="contentinfo">
    <div class="container px-4">
        <div class="row">
            <div class="col-lg-6 info">
                <div class="logo"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/logos/dc-logo-footer.svg' ) ?></div>
                <p class="heading">Address:</p>
                <p>42 Upper Berkeley Street, Marylebone, London, W1H 5QL</p>
                <p class="heading">Contact:</p>
                <a href="tel:0208 826 1200">0208 826 1200</a>
                <a href="mailto:info@drakeandcase.com">info@drakeandcase.com</a>
                <div class="sra" style="max-width:225px;max-height:163px; margin-left:0px!important">
                    <div style="position: relative;padding-bottom: 59.1%;height: auto;overflow: hidden;">
                        <iframe frameborder="0" scrolling="no" allowtransparency="true" src="https://cdn.yoshki.com/iframe/55845r.html" style="border:0px; margin:0px; padding:0px; backgroundColor:transparent; top:0px; left:0px; width:100%; height:100%; position: absolute;"></iframe>
                    </div>
                </div>
                <div class="socials">
                    <a href="#"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/linkedin.svg' ) ?></a>
                    <a href="#"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/instagram.svg' ) ?></a>
                    <a href="#"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/facebook.svg' ) ?></a>
                    <a href="#"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/x.svg' ) ?></a>
                    <a href="#"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/youtube.svg' ) ?></a>
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