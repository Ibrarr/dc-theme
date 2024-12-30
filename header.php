<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php ww_schema_type(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="wrapper" class="hfeed">
    <header id="header" role="banner">
        <div class="top-menu px-4">
            <div class="logo-menu">
                <div class="logo">
                    <a href="/" aria-label="Home">
                        <div class="desktop"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/logos/dc-logo-header.svg' ) ?></div>
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
                <a href="#enquire-now" class="button">Enquire now</a>
            </div>
            <div class="mobile-menu">
                <div class="open"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/menu.svg' ) ?></div>
                <div class="close"><?php echo file_get_contents( DC_TEMPLATE_DIR . '/assets/images/icons/close.svg' ) ?></div>
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
                    <a href="#enquire-now" class="button">Enquire now</a>
                </div>
            </div>
        </div>
        <div class="mega-menu">
            <?php require get_template_directory() . '/template-parts/mega-menu.php'; ?>
        </div>
    </header>
    <main id="content" role="main">