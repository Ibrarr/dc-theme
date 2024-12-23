<?php
$term = get_queried_object();
$paged = get_query_var('paged') ? get_query_var('paged') : 1;
get_header();
?>



<?php
get_footer();
?>