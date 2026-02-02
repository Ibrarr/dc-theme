<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php ww_schema_type(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KZZKRR5K');</script>
    <!-- End Google Tag Manager -->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZZKRR5K"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php wp_body_open(); ?>

<div id="preloader">
    <img src="<?php echo esc_url(get_field('logo', 'option')); ?>" alt="Loading...">
</div>

<div id="wrapper" class="hfeed">
    <header id="header" role="banner" class="<?php if ( is_front_page() ) { echo 'hero-active'; }; ?>">
        <div class="top-menu px-4">
            <div class="top-menu-container">
                <div class="logo-menu">
                    <div class="logo">
                        <a href="/" aria-label="Home">
                            <div class="desktop"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/logos/main-logo.svg' ) ?></div>
                            <div class="mobile"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/logos/favicon.svg' ) ?></div>
                        </a>
                    </div>
                    <nav id="nav" role="navigation" itemscope
                         itemtype="https://schema.org/SiteNavigationElement">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'main-menu',
                        ) ); ?>
                    </nav>
                </div>
                <div class="ctas">
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/phone-button.svg' ) ?></i><?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="/contact-us" class="button">Enquire now</a>
                </div>
                <div class="mobile-menu">
                    <div class="open"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/menu.svg' ) ?></div>
                    <div class="close"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/close.svg' ) ?></div>
                </div>
            </div>
        </div>
        <div class="mobile-menus">
            <div class="mobile-menu-inner px-4">
                <nav id="nav" role="navigation" itemscope
                     itemtype="https://schema.org/SiteNavigationElement">
                    <?php wp_nav_menu( array(
                        'theme_location' => 'main-menu',
                    ) ); ?>
                </nav>
                <div class="mega-menu-mobile">
                    <?php require get_template_directory() . '/template-parts/mega-menu.php'; ?>
                </div>
                <div class="ctas">
                    <a href="tel:<?php the_field( 'main_phone_number', 'option' ); ?>" class="button-secondary"><i><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/phone-button.svg' ) ?></i><?php the_field( 'main_phone_number', 'option' ); ?></a>
                    <a href="/contact-us" class="button">Enquire now</a>
                </div>
            </div>
        </div>
        <div class="mega-menu">
            <?php require get_template_directory() . '/template-parts/mega-menu.php'; ?>
        </div>
    </header>
    <main id="content" role="main">