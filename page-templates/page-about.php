<?php
/*
Template Name: About Us
*/
get_header();

$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
$image_srcset = wp_get_attachment_image_srcset( $thumbnail_id );
?>
<div class="container px-4 page-content">

</div>
<?php
get_footer();
?>