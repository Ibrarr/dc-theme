<?php
$paged = get_query_var('paged') ? get_query_var('paged') : 1;
get_header();
?>

<section class="heading">
    <div class="container px-4">
        <h1>Case Notes</h1>
        <p>Explore expert legal advice, industry news, and insights to empower your decisions.</p>
    </div>
</section>

<?php
get_footer();
?>